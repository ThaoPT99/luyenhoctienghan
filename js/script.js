// ===== 🎮 KOREAN QUEST - HỌC NHƯ CHƠI GAME =====
const STATE_KEY = 'koreanQuest';

let state = {
    completedLessons: [],
    vocabStatus: {},
    streak: { lastDate: null, count: 0 },
    studyDays: [],
    exerciseScore: { correct: 0, total: 0 },
    lastLesson: 0,
    deepseekApiKey: '',
    
    // 🎮 Game hệ thống
    xp: 0,
    level: 1,
    achievements: [],
    dailyQuests: [],
    questDate: null,
    quickSessions: 0,
    totalCorrect: 0
};

// ===== GAME ENGINE =====
const LEVEL_UP_BASE = 100;
const ACHIEVEMENTS_LIST = [
    { id: 'first_lesson', name: '🏆 Bắt đầu rồi!', desc: 'Hoàn thành bài học đầu tiên', icon: '🌟' },
    { id: 'hangul_master', name: '🏆 Thạo Hangul', desc: 'Hoàn thành 3 bài đầu', icon: '🇰🇷' },
    { id: 'streak_3', name: '🏆 Năng suất!', desc: '3 ngày liên tiếp', icon: '🔥' },
    { id: 'streak_7', name: '🏆 Tuần vàng!', desc: '7 ngày liên tiếp', icon: '💪' },
    { id: 'streak_30', name: '🏆 Tháng rực lửa!', desc: '30 ngày liên tiếp', icon: '⚡' },
    { id: 'vocab_10', name: '🏆 Từ mới!', desc: 'Học 10 từ vựng', icon: '📝' },
    { id: 'vocab_50', name: '🏆 Người yêu từ!', desc: 'Học 50 từ vựng', icon: '💖' },
    { id: 'vocab_100', name: '🏆 Bách khoa!', desc: 'Học 100 từ vựng', icon: '📚' },
    { id: 'perfect_quiz', name: '🏆 Siêu sao!', desc: 'Đúng 5 câu liên tiếp', icon: '⭐' },
    { id: 'topik_ready', name: '🏆 TOPIK 1', desc: 'Hoàn thành 15 bài', icon: '🎯' },
    { id: 'topik2_ready', name: '🏆 TOPIK 2', desc: 'Hoàn thành 45 bài', icon: '🏆' },
    { id: 'quick_5', name: '🏆 Học nhanh!', desc: '5 phiên học nhanh', icon: '⚡' },
    { id: 'level_5', name: '🏆 Level 5!', desc: 'Đạt level 5', icon: '🌟' },
    { id: 'level_10', name: '🏆 Level 10!', desc: 'Đạt level 10', icon: '💎' }
];

function addXP(amount) {
    state.xp += amount;
    const newLevel = Math.floor(state.xp / LEVEL_UP_BASE) + 1;
    if (newLevel > state.level) {
        state.level = newLevel;
        return true; // Level up!
    }
    return false;
}

function checkAchievements() {
    const newAchievements = [];
    const a = state.achievements;
    
    if (state.completedLessons.length >= 1 && !a.includes('first_lesson')) newAchievements.push('first_lesson');
    if (state.completedLessons.length >= 3 && !a.includes('hangul_master')) newAchievements.push('hangul_master');
    if (state.streak.count >= 3 && !a.includes('streak_3')) newAchievements.push('streak_3');
    if (state.streak.count >= 7 && !a.includes('streak_7')) newAchievements.push('streak_7');
    if (state.streak.count >= 30 && !a.includes('streak_30')) newAchievements.push('streak_30');
    
    const vocabCount = Object.keys(state.vocabStatus).length;
    if (vocabCount >= 10 && !a.includes('vocab_10')) newAchievements.push('vocab_10');
    if (vocabCount >= 50 && !a.includes('vocab_50')) newAchievements.push('vocab_50');
    if (vocabCount >= 100 && !a.includes('vocab_100')) newAchievements.push('vocab_100');
    
    if (state.totalCorrect >= 5 && !a.includes('perfect_quiz')) newAchievements.push('perfect_quiz');
    if (state.completedLessons.length >= 15 && !a.includes('topik_ready')) newAchievements.push('topik_ready');
    if (state.completedLessons.length >= 45 && !a.includes('topik2_ready')) newAchievements.push('topik2_ready');
    if (state.quickSessions >= 5 && !a.includes('quick_5')) newAchievements.push('quick_5');
    if (state.level >= 5 && !a.includes('level_5')) newAchievements.push('level_5');
    if (state.level >= 10 && !a.includes('level_10')) newAchievements.push('level_10');
    
    newAchievements.forEach(id => state.achievements.push(id));
    return newAchievements;
}

function getRandomQuest() {
    const quests = [
        { task: '📖 Học 1 bài mới', xp: 50, icon: '📖', check: () => true },
        { task: '🃏 Ôn 5 flashcard', xp: 30, icon: '🃏', check: () => Object.keys(state.vocabStatus).length > 0 },
        { task: '✍️ Làm 3 câu bài tập', xp: 40, icon: '✍️', check: () => state.exerciseScore.total >= 3 },
        { task: '🔥 Giữ streak hôm nay', xp: 60, icon: '🔥', check: () => true },
        { task: '🎯 Đúng 5 câu bài tập', xp: 50, icon: '🎯', check: () => state.totalCorrect >= 5 }
    ];
    return quests[Math.floor(Math.random() * quests.length)];
}

function generateDailyQuests() {
    const today = new Date().toDateString();
    if (state.questDate === today && state.dailyQuests.length > 0) return;
    
    state.questDate = today;
    state.dailyQuests = [];
    const numQuests = 2 + (state.streak.count >= 3 ? 1 : 0); // Thêm quest nếu có streak
    for (let i = 0; i < numQuests; i++) {
        state.dailyQuests.push(getRandomQuest());
    }
    saveState();
}

// ===== STATE =====
function loadState() {
    try {
        const saved = localStorage.getItem(STATE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) {}
    // Dam bao API key luon duoc giu lai
    state.deepseekApiKey = state.deepseekApiKey || '';
    checkStreak();
    generateDailyQuests();
}
function saveState() { try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e) {} }

function checkStreak() {
    const today = new Date().toDateString();
    if (!state.streak.lastDate) {
        state.streak = { lastDate: today, count: 1 };
        if (!state.studyDays.includes(today)) state.studyDays.push(today);
        addXP(10); saveState(); return;
    }
    const diff = Math.floor((new Date() - new Date(state.streak.lastDate)) / (1000*60*60*24));
    if (diff === 0) return;
    if (diff === 1) {
        state.streak.count++;
        addXP(state.streak.count * 5); // Thưởng XP theo streak!
    } else {
        state.streak.count = 1;
    }
    state.streak.lastDate = today;
    if (!state.studyDays.includes(today)) state.studyDays.push(today);
    saveState();
}

function celebrate(message) {
    const el = document.createElement('div');
    el.className = 'celebration';
    el.innerHTML = `🎉 ${message}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() { navigateTo(this.dataset.tab); });
    });
    document.getElementById('flashcard')?.addEventListener('click', function() { this.classList.toggle('flipped'); });
    document.getElementById('aiInput')?.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendToAI(); }
    });
    
    filteredFlashcards = [...allVocabulary.map((w,i) => ({...w, index: i}))];
    renderRoadmap();
    updateDashboard();
    renderLessonList();
    renderFlashcards();
    loadFlashcardLessons();
    loadExerciseLessons();
    loadExercise();
    renderVocab();
    updateProgress();
    updateGameUI();
    
    const pct = state.exerciseScore.total > 0 ? Math.round(state.exerciseScore.correct/state.exerciseScore.total*100) : 0;
    document.getElementById('exerciseScore').textContent = `${state.exerciseScore.correct}/${state.exerciseScore.total}`;
    document.getElementById('exercisePercent').textContent = `${pct}%`;
    
    // Production (Vercel): AI key o server, an luon setup
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    if (isProduction) {
        document.getElementById('aiSetup').style.display = 'none';
        document.getElementById('aiChat').style.display = 'flex';
        document.querySelector('.ai-status span:last-child').textContent = 'Gia su AI (Vercel) ';
    } else if (state.deepseekApiKey) {
        document.getElementById('aiSetup').style.display = 'none';
        document.getElementById('aiChat').style.display = 'flex';
    }
});

function navigateTo(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelector(`.nav-item[data-tab="${tab}"]`)?.classList.add('active');
    if (tab === 'dashboard') updateDashboard();
    if (tab === 'roadmap') renderRoadmap();
    if (tab === 'progress') updateProgress();
    if (tab === 'vocabulary') renderVocab();
    if (tab === 'listening') setTimeout(playListeningExercise, 300);
}

// ===== DASHBOARD =====
function getGreeting() {
    const h = new Date().getHours();
    const msgs = ['Chào buổi sáng! 🌅', 'Chào buổi chiều! ☀️', 'Chào buổi tối! 🌙'];
    return msgs[h < 12 ? 0 : h < 18 ? 1 : 2];
}

function getRandomTip() {
    const tips = [
        '💡 Mẹo: Hoc 5 phut moi ngay con hon 2 tieng cuoi tuan!',
        '💡 K-pop + loi dich = hoc tu vung sieu nhanh!',
        '💡 Xem drama Han, bat sub tieng Han!',
        '💡 Ghi am giong doc cua ban roi so voi nguoi ban xu.',
        '💡 Dan Post-it tieng Han khap phong!',
        '💡 Chi 5 phut moi ngay van hon khong!'
    ];
    return tips[Math.floor(Math.random() * tips.length)];
}

function updateDashboard() {
    document.getElementById('greetingText').textContent = `${getGreeting()} ${getRandomMotivation()}`;
    document.getElementById('dailyTip').textContent = getRandomTip();
    
    const topikInfo = getTopikLevel();
    document.getElementById('topikBadge').innerHTML = `🎯 <strong>${topikInfo.level}</strong>`;
    document.getElementById('topikProgressFill').style.width = `${topikInfo.progress}%`;
    
    document.querySelectorAll('.topik-level').forEach(el => {
        el.classList.toggle('active', parseInt(el.dataset.level) <= topikInfo.activeLevel);
    });
    
    document.getElementById('statStreak').textContent = state.streak.count;
    document.getElementById('statLessons').textContent = `${state.completedLessons.length}/${lessonsData.length}`;
    document.getElementById('statStage').textContent = `${getCurrentStage()}/4`;
    const acc = state.exerciseScore.total > 0 ? Math.round(state.exerciseScore.correct/state.exerciseScore.total*100) : 0;
    document.getElementById('statAccuracy').textContent = `${acc}%`;
    
    const next = state.completedLessons.length + 1;
    if (next <= lessonsData.length) {
        document.getElementById('todayPlan').innerHTML = `📋 Học <strong>Bài ${next}: ${lessonsData[next-1].title}</strong> → +50XP 🎮`;
    } else {
        document.getElementById('todayPlan').innerHTML = `🎉 Hoàn thành TOPIK 2 rồi! Ôn tập thôi!`;
    }
    
    updateGameUI();
}

function getRandomMotivation() {
    const msgs = [
        'Học 5 phút thôi cũng được! ⚡',
        'Lười thì học kiểu lười! 🦥',
        'Học vui, không áp lực! 🎮',
        'Mỗi ngày một tí là giỏi! 💪',
        'Học như chơi game! 🕹️',
        'Đừng lo, có AI giúp bạn! 🤖'
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
}

// ===== GAME UI =====
function updateGameUI() {
    const levelEl = document.getElementById('playerLevel');
    const xpEl = document.getElementById('playerXP');
    if (levelEl) levelEl.textContent = state.level;
    if (xpEl) xpEl.textContent = state.xp;
    const progEl = document.getElementById('levelProgress');
    if (progEl) {
        const pct = (state.xp % LEVEL_UP_BASE) / LEVEL_UP_BASE * 100;
        progEl.style.width = `${pct}%`;
    }
    // Sidebar game stats
    const sl = document.getElementById('sidebarLevel');
    const sx = document.getElementById('sidebarXP');
    if (sl) sl.textContent = `Lv.${state.level}`;
    if (sx) sx.textContent = `${state.xp} XP`;
}

// ===== TOPIK =====
function getTopikLevel() {
    const pct = lessonsData.length > 0 ? state.completedLessons.length / lessonsData.length : 0;
    if (pct >= 0.95) return { level: 'TOPIK 2 (Cấp 4+) 🏆', progress: 100, activeLevel: 4 };
    if (pct >= 0.80) return { level: 'TOPIK 2 (Cấp 3-4)', progress: 85, activeLevel: 4 };
    if (pct >= 0.65) return { level: 'TOPIK 2 (Cấp 3)', progress: 70, activeLevel: 3 };
    if (pct >= 0.50) return { level: 'TOPIK 1 (Cấp 2)', progress: 55, activeLevel: 2 };
    if (pct >= 0.33) return { level: 'TOPIK 1 (Cấp 1-2)', progress: 35, activeLevel: 2 };
    if (pct >= 0.15) return { level: 'TOPIK 1 (Cấp 1)', progress: 18, activeLevel: 1 };
    return { level: 'Đang chuẩn bị', progress: 0, activeLevel: 0 };
}
function getCurrentStage() {
    const c = state.completedLessons.length;
    return c >= 30 ? 4 : c >= 15 ? 3 : c >= 3 ? 2 : 1;
}

// ===== ROADMAP =====
function renderRoadmap() {
    const container = document.getElementById('roadmapTimeline');
    let html = `<div class="roadmap-header" style="text-align:center;padding:20px;background:var(--card);border-radius:var(--radius);margin-bottom:20px;box-shadow:var(--shadow);">
        <h2>🎮 Hành trình TOPIK 2</h2>
        <p>Level <strong>${state.level}</strong> • ${state.xp} XP • ${state.completedLessons.length}/45 bài</p>
        <div style="height:8px;background:var(--bg);border-radius:4px;max-width:300px;margin:10px auto;overflow:hidden;">
            <div style="height:100%;width:${Math.round(state.completedLessons.length/45*100)}%;background:linear-gradient(90deg,var(--primary-light),var(--primary));border-radius:4px;transition:width 0.5s;"></div>
        </div>
    </div>`;
    
    roadmapStages.forEach(stage => {
        const done = stage.lessons.filter(id => state.completedLessons.includes(id)).length;
        const total = stage.lessons.length;
        const allDone = done === total;
        const isActive = stage.lessons.some(id => !state.completedLessons.includes(id));
        
        html += `
        <div class="roadmap-stage ${allDone ? 'done' : isActive ? 'active' : ''}">
            <div class="stage-header" onclick="this.parentElement.classList.toggle('expanded')" style="cursor:pointer;">
                <span class="stage-emoji">${allDone ? '✅' : isActive ? '▶️' : stage.emoji}</span>
                <div class="stage-info">
                    <h3>${stage.emoji} ${stage.name}</h3>
                    <span class="stage-time">⏱ ${stage.time} • ${done}/${total} bài</span>
                </div>
                <div class="stage-progress">${Math.round(done/total*100)}%</div>
            </div>
            <div class="stage-bar"><div class="stage-bar-fill" style="width:${Math.round(done/total*100)}%"></div></div>
            <p class="stage-goal">${allDone ? '✅' : '🎯'} ${stage.goal}</p>
            <div class="stage-lessons">
                ${stage.lessons.map(id => {
                    const l = lessonsData.find(x => x.id === id);
                    const d = state.completedLessons.includes(id);
                    return `<div class="stage-lesson ${d?'done':''}" onclick="navigateTo('lessons');setTimeout(()=>openLesson(${id}),100)">${d?'✅':'📖'} Bài ${id}: ${l.title.substring(0,35)}</div>`;
                }).join('')}
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

// ===== LESSONS =====
function renderLessonList() {
    const list = document.getElementById('lessonList');
    const stageFilter = document.getElementById('stageFilter').value;
    let filtered = stageFilter !== 'all' ? lessonsData.filter(l => l.stage === parseInt(stageFilter)) : lessonsData;
    
    list.innerHTML = '';
    filtered.forEach((lesson, idx) => {
        const done = state.completedLessons.includes(lesson.id);
        const prv = idx === 0 || state.completedLessons.includes(filtered[idx-1]?.id) || lesson.id === 1 || state.completedLessons.includes(lesson.id-1);
        const locked = !done && !prv && lesson.id > 1;
        
        const card = document.createElement('div');
        card.className = `lesson-card ${done?'completed':locked?'locked':'in-progress'}`;
        card.innerHTML = `
            <div class="lesson-number">Bài ${lesson.id} • +50XP 🎮</div>
            <div class="lesson-title">${lesson.title}</div>
            <div class="lesson-desc">${lesson.description}</div>
            <div class="lesson-status">${done ? '✅ Xong +50XP' : locked ? '🔒 Khóa' : '📖 Học → +50XP'}</div>

        `;
        if (!locked) card.addEventListener('click', () => openLesson(lesson.id));
        list.appendChild(card);
    });
    
    document.getElementById('lessonCounter').textContent = `${state.completedLessons.length}/${lessonsData.length} bài - Level ${state.level}`;
}

let currentLessonId = null;
function openLesson(id) {
    const lesson = lessonsData.find(l => l.id === id);
    if (!lesson) return;
    currentLessonId = id; state.lastLesson = id; saveState();
    document.getElementById('lessonList').style.display = 'none';
    document.getElementById('lessonDetail').style.display = 'block';
    
    // Stage videos (YouTube)
    const stageVideos = {
        1: 'M6FjI2Vj9Ok', // Learn Hangul in 20 minutes
        2: 'W3Qm0gH_P0Y', // Korean basic conversation
        3: 'y3CY9y-cMXs', // TOPIK 1 preparation
        4: 'f0D71I2rFo8'  // TOPIK 2 grammar
    };
    const videoId = stageVideos[lesson.stage] || '';
    
    // Generate dialogue HTML if available
    const dialogues = lesson.dialogues || [];
    const dialogueHTML = dialogues.length > 0 ? `
        <h3 style="margin-top:24px;margin-bottom:12px;">🎭 Hội thoại mẫu</h3>
        <div class="dialogue-box">
            ${dialogues.map(d => `
                <div class="dialogue-line ${d.role}">
                    <span class="dialogue-role">${d.role === 'a' ? '👤 A' : '👤 B'}</span>
                    <span class="dialogue-text-kr" onclick="speakKorean('${d.kr.replace(/'/g, "\\'")}')">${d.kr} 🔊</span>
                    <span class="dialogue-text-vi">${d.vi}</span>
                </div>
            `).join('')}
        </div>
    ` : '';
    
    // Vocabulary cards with audio buttons
    const vocabCards = lesson.vocab.map(v => `
        <div class="vocab-card" onclick="speakKorean('${v.kr.replace(/'/g, "\\'")}')">
            <div class="vocab-card-kr">${v.kr}</div>
            <div class="vocab-card-pron">${v.pronunciation}</div>
            <div class="vocab-card-mean">${v.meaning}</div>
            <div class="vocab-card-audio">🔊</div>
        </div>
    `).join('');
    
    document.getElementById('lessonContent').innerHTML = `
        <div class="lesson-meta">
            <span class="lesson-level-badge">${lesson.level}</span>
            <span class="lesson-xp-badge">+50XP 🎮</span>
        </div>
        <h2>Bài ${lesson.id}: ${lesson.title}</h2>
        <p class="lesson-desc-text">${lesson.description}</p>
        
        ${videoId ? `
        <div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${videoId}" 
                title="Video bài giảng" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>` : ''}
        
        <h3 style="margin-top:24px;margin-bottom:12px;">📝 Từ vựng (${lesson.vocab.length} từ) <span class="click-hint">🔊 Click vào từ để nghe</span></h3>
        <div class="vocab-card-grid">${vocabCards}</div>
        
        <h3 style="margin-top:24px;margin-bottom:12px;">📖 Ngữ pháp</h3>
        ${lesson.grammar.map(g => `
            <div class="lesson-grammar">
                <h4>${g.title}</h4>
                <p>${g.content}</p>
                ${g.example ? `<div class="grammar-example" onclick="speakKorean('${g.example.replace(/'/g, "\\'")}')">📝 ${g.example} 🔊</div>` : ''}
            </div>
        `).join('')}
        
        ${dialogueHTML}
        
        <h3 style="margin-top:24px;margin-bottom:12px;">💡 Ví dụ</h3>
        <div class="lesson-examples">
            ${lesson.examples.map(e => `
                <div class="example-item" onclick="speakKorean('${e.kr.replace(/'/g, "\\'")}')">
                    <span class="kr">${e.kr}</span>
                    <span class="vn">${e.vi}</span>
                    <span class="example-audio">🔊</span>
                </div>
            `).join('')}
        </div>
    `;
}
function closeLesson() { document.getElementById('lessonList').style.display = 'grid'; document.getElementById('lessonDetail').style.display = 'none'; }

// ===== 🚧 CỔNG KIỂM TRA: buộc phải trả lời câu hỏi mới được hoàn thành =====
function completeLesson() {
    if (!currentLessonId || state.completedLessons.includes(currentLessonId)) {
        nextLesson(); return;
    }
    // Hiện quiz thay vì hoàn thành luôn
    showLessonQuiz(currentLessonId);
}

function showLessonQuiz(lessonId) {
    const lesson = lessonsData.find(l => l.id === lessonId);
    if (!lesson || lesson.vocab.length < 3) {
        // Nếu bài không đủ từ vựng thì cho qua
        doCompleteLesson(lessonId);
        return;
    }
    
    // Random 3 câu hỏi từ từ vựng của bài
    const shuffled = [...lesson.vocab].sort(() => Math.random() - 0.5).slice(0, 3);
    window._lessonQuiz = {
        lessonId: lessonId,
        questions: shuffled.map(v => ({
            kr: v.kr,
            correctAnswer: v.meaning,
            userAnswer: null
        })),
        currentQ: 0,
        passed: false
    };
    
    // Hiển thị quiz ngay trong lesson content
    renderQuizQuestion();
}

function renderQuizQuestion() {
    const quiz = window._lessonQuiz;
    if (!quiz) return;
    
    const q = quiz.questions[quiz.currentQ];
    if (!q) {
        // Hết câu hỏi, kiểm tra kết quả
        checkQuizResult();
        return;
    }
    
    // Tạo 4 đáp án (1 đúng + 3 sai từ các bài khác)
    const wrongs = allVocabulary
        .filter(v => v.meaning !== q.correctAnswer)
        .map(v => v.meaning)
        .filter((v,i,a) => a.indexOf(v) === i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const options = [q.correctAnswer, ...wrongs].sort(() => Math.random() - 0.5);
    
    document.getElementById('lessonContent').innerHTML = `
        <div class="quiz-header" style="text-align:center;padding:20px;">
            <div style="font-size:14px;color:var(--text-secondary);margin-bottom:8px;">📝 KIỂM TRA BÀI ${quiz.lessonId} • Câu ${quiz.currentQ + 1}/${quiz.questions.length}</div>
            <div style="height:4px;background:var(--bg);border-radius:2px;max-width:200px;margin:0 auto;overflow:hidden;">
                <div style="height:100%;width:${(quiz.currentQ+1)/quiz.questions.length*100}%;background:var(--primary);border-radius:2px;transition:width 0.3s;"></div>
            </div>
        </div>
        <div class="quiz-question" style="text-align:center;padding:20px;">
            <div style="font-size:40px;font-weight:700;font-family:var(--header-font);margin-bottom:8px;">${q.kr}</div>
            <div style="font-size:16px;color:var(--text-secondary);">Từ này có nghĩa là gì?</div>
        </div>
        <div class="quiz-options" style="display:flex;flex-direction:column;gap:8px;max-width:400px;margin:0 auto;">
            ${options.map((opt, i) => `
                <button class="quiz-option" onclick="answerQuiz('${opt.replace(/'/g, "\\'")}')" 
                    style="padding:14px 20px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:16px;cursor:pointer;background:var(--card);transition:var(--transition);font-family:var(--body-font);"
                    onmouseenter="this.style.borderColor='var(--primary)';this.style.background='#f5f5ff'"
                    onmouseleave="this.style.borderColor='';this.style.background=''">
                    ${opt}
                </button>
            `).join('')}
        </div>
        <div style="text-align:center;margin-top:12px;">
            <span style="font-size:12px;color:var(--text-light);">✨ Đây là bài kiểm tra — chọn đáp án đúng để qua câu tiếp!</span>
        </div>
    `;
}

function answerQuiz(answer) {
    const quiz = window._lessonQuiz;
    if (!quiz) return;
    
    quiz.questions[quiz.currentQ].userAnswer = answer;
    quiz.currentQ++;
    
    if (quiz.currentQ >= quiz.questions.length) {
        checkQuizResult();
    } else {
        renderQuizQuestion();
    }
}

function checkQuizResult() {
    const quiz = window._lessonQuiz;
    if (!quiz) return;
    
    const correct = quiz.questions.filter(q => q.userAnswer === q.correctAnswer).length;
    const total = quiz.questions.length;
    const passed = correct >= total - 1; // Cần 2/3 hoặc 3/3
    
    if (passed) {
        // 🎉 Đỗ! Cho XP và hoàn thành
        document.getElementById('lessonContent').innerHTML = `
            <div style="text-align:center;padding:40px 20px;">
                <div style="font-size:60px;margin-bottom:16px;">🎉</div>
                <h2>Đúng ${correct}/${total}! Bạn xứng đáng!</h2>
                <p style="color:var(--text-secondary);margin:12px 0;">Bạn đã chứng minh là mình có học bài! +50XP!</p>
                <button class="action-btn primary" onclick="doCompleteLesson(${quiz.lessonId})" style="margin-top:12px;">✅ Nhận XP & Tiếp tục</button>
            </div>
        `;
    } else {
        // 😅 Trượt! Cho xem lại bài
        const wrongList = quiz.questions.filter(q => q.userAnswer !== q.correctAnswer)
            .map(q => `<div>• ${q.kr}: đáp án đúng là <strong>${q.correctAnswer}</strong></div>`).join('');
        
        document.getElementById('lessonContent').innerHTML = `
            <div style="text-align:center;padding:40px 20px;">
                <div style="font-size:60px;margin-bottom:16px;">😅</div>
                <h2>Đúng ${correct}/${total}</h2>
                <div style="color:var(--error);margin:12px 0;">
                    ${wrongList}
                </div>
                <p style="color:var(--text-secondary);">Hãy xem lại từ vựng và thử lại nhé!</p>
                <div style="display:flex;gap:12px;justify-content:center;margin-top:16px;">
                    <button class="action-btn secondary" onclick="showLessonQuiz(${quiz.lessonId})">🔄 Thi lại</button>
                    <button class="action-btn outline" onclick="closeLesson()">📖 Xem lại bài</button>
                </div>
            </div>
        `;
    }
}

function doCompleteLesson(lessonId) {
    if (state.completedLessons.includes(lessonId)) { nextLesson(); return; }
    
    state.completedLessons.push(lessonId);
    const leveledUp = addXP(50);
    markStudiedToday(); saveState();
    
    const lesson = lessonsData.find(l => l.id === lessonId);
    if (lesson) {
        lesson.vocab.forEach(v => {
            const idx = allVocabulary.findIndex(w => w.kr === v.kr);
            if (idx >= 0 && !state.vocabStatus[idx]) state.vocabStatus[idx] = 'new';
        });
        saveState();
    }
    
    const newAch = checkAchievements();
    renderLessonList(); updateDashboard(); updateProgress(); renderRoadmap(); renderVocab();
    
    celebrate(`🎉 +50XP! Bài ${lessonId} xong! ${leveledUp ? '🌟 LEVEL UP! Lv.'+state.level : ''}`);
    if (newAch.length > 0) {
        setTimeout(() => newAch.forEach(id => {
            const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
            if (a) celebrate(`${a.icon} MỞ KHÓA: ${a.name}! ${a.desc}`);
        }), 1500);
    }
    
    window._lessonQuiz = null;
    nextLesson();
}

function nextLesson() {
    if (currentLessonId < lessonsData.length) openLesson(currentLessonId + 1);
    else { closeLesson(); celebrate('🎊 HOÀN THÀNH 45 BÀI! TOPIK 2 CHỜ BẠN!'); }
}
function prevLesson() { if (currentLessonId > 1) openLesson(currentLessonId - 1); }

// ===== FLASHCARD =====
let currentFlashcardIndex = 0;
let filteredFlashcards = [];

function loadFlashcardLessons() {
    const select = document.getElementById('flashcardLesson');
    lessonsData.forEach(l => {
        const opt = document.createElement('option');
        opt.value = l.id; opt.textContent = `Bài ${l.id}`;
        select.appendChild(opt);
    });
}

function filterFlashcards() {
    const filter = document.getElementById('flashcardFilter').value;
    const lesson = document.getElementById('flashcardLesson').value;
    filteredFlashcards = allVocabulary.map((w,i) => ({...w, index: i}));
    if (lesson !== 'all') filteredFlashcards = filteredFlashcards.filter(w => w.lesson === parseInt(lesson));
    if (filter === 'new') filteredFlashcards = filteredFlashcards.filter(w => !state.vocabStatus[w.index]||state.vocabStatus[w.index]==='new');
    else if (filter === 'learning') filteredFlashcards = filteredFlashcards.filter(w => state.vocabStatus[w.index]==='learning');
    else if (filter === 'mastered') filteredFlashcards = filteredFlashcards.filter(w => state.vocabStatus[w.index]==='mastered');
    currentFlashcardIndex = 0; renderFlashcards();
}

function renderFlashcards() {
    if (filteredFlashcards.length === 0) filteredFlashcards = [...allVocabulary.map((w,i)=>({...w,index:i}))];
    document.getElementById('flashcardCount').textContent = `${filteredFlashcards.length} từ • 🎮 +3XP/thẻ`;
    if (!filteredFlashcards[currentFlashcardIndex]) {
        document.querySelector('#flashcardContainer .flashcard').style.display = 'none';
        document.getElementById('flashcardEmpty').style.display = 'block';
        document.getElementById('flashcardButtons').style.display = 'none'; return;
    }
    document.querySelector('#flashcardContainer .flashcard').style.display = 'block';
    document.getElementById('flashcardEmpty').style.display = 'none';
    document.getElementById('flashcardButtons').style.display = 'flex';
    document.getElementById('flashcard').classList.remove('flipped');
    
    const w = filteredFlashcards[currentFlashcardIndex];
    document.getElementById('flashcardFront').textContent = w.kr;
    document.getElementById('flashcardBack').textContent = w.meaning;
    document.getElementById('flashcardPronun').textContent = w.pronunciation || '';
    
    let example = '';
    const lesson = lessonsData.find(l => l.vocab.some(v => v.kr === w.kr));
    if (lesson) { const ex = lesson.examples.find(e => e.kr.includes(w.kr)); if (ex) example = ex.kr; }
    document.getElementById('flashcardExample').textContent = example || '—';
}

function rateFlashcard(rating) {
    if (!filteredFlashcards[currentFlashcardIndex]) return;
    const idx = filteredFlashcards[currentFlashcardIndex].index;
    if (!state.vocabStatus[idx]) state.vocabStatus[idx] = 'new';
    
    const oldStatus = state.vocabStatus[idx];
    if (rating >= 2) {
        if (state.vocabStatus[idx] === 'new') state.vocabStatus[idx] = 'learning';
        else if (state.vocabStatus[idx] === 'learning') state.vocabStatus[idx] = 'mastered';
    } else state.vocabStatus[idx] = 'new';
    
    addXP(3); markStudiedToday(); saveState();
    currentFlashcardIndex++;
    if (currentFlashcardIndex >= filteredFlashcards.length) currentFlashcardIndex = 0;
    renderFlashcards(); updateDashboard(); renderVocab();
}

// ===== EXERCISES =====
function loadExerciseLessons() {
    const select = document.getElementById('exerciseLesson');
    lessonsData.forEach(l => { const opt = document.createElement('option'); opt.value = l.id; opt.textContent = `Bài ${l.id}`; select.appendChild(opt); });
}

function loadExercise() {
    const lessonF = document.getElementById('exerciseLesson').value;
    const type = document.getElementById('exerciseType').value;
    let available = allVocabulary.map((w,i) => ({...w, index: i}));
    if (lessonF !== 'all') available = available.filter(w => w.lesson === parseInt(lessonF));
    
    if (available.length < 2) {
        document.getElementById('exerciseQuestion').textContent = 'Cần thêm từ vựng!';
        document.getElementById('exerciseOptions').innerHTML = '';
        document.getElementById('exerciseFeedback').style.display = 'none'; return;
    }
    
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    const correct = shuffled[0];
    
    let question, correctAnswer, options;
    if (type === 'grammar') {
        question = 'Dịch: "Tôi là học sinh" →?';
        correctAnswer = '저는 학생입니다';
        options = ['저는 학생입니다', '저는 학생이에요', '나는 학생이다', '저는 선생님입니다'];
    } else {
        question = `"${correct.kr}" có nghĩa là gì? 🎮 +5XP`;
        correctAnswer = correct.meaning;
        const wrongs = allVocabulary.filter(v => v.index !== correct.index).map(v => v.meaning)
            .filter((v,i,a) => a.indexOf(v) === i).sort(() => Math.random() - 0.5).slice(0, 3);
        options = [correct.meaning, ...wrongs].sort(() => Math.random() - 0.5);
    }
    
    document.getElementById('exerciseQuestion').textContent = question;
    document.getElementById('exerciseFeedback').style.display = 'none';
    document.getElementById('exerciseFeedback').className = 'exercise-feedback';
    window._currentExercise = { correctAnswer, options };
    
    document.getElementById('exerciseOptions').innerHTML = options.map(opt =>
        `<div class="exercise-option" onclick="selectExerciseOption(this)" data-value="${opt.replace(/'/g,"\\'")}">${opt}</div>`
    ).join('');
}

let selectedExerciseOption = null;
function selectExerciseOption(el) {
    document.querySelectorAll('.exercise-option').forEach(o => o.classList.remove('selected'));
    el.classList.add('selected'); selectedExerciseOption = el.dataset.value;
}

function checkExercise() {
    const fb = document.getElementById('exerciseFeedback');
    if (!selectedExerciseOption) { fb.textContent = '⚠️ Chọn đáp án!'; fb.className = 'exercise-feedback show incorrect'; return; }
    
    state.exerciseScore.total++;
    const correct = selectedExerciseOption === window._currentExercise.correctAnswer;
    if (correct) {
        state.exerciseScore.correct++; state.totalCorrect++;
        addXP(5);
        fb.textContent = '✅ Đúng! +5XP 🎮'; fb.className = 'exercise-feedback show correct';
        markStudiedToday();
    } else {
        fb.textContent = `❌ Sai. Đáp án: "${window._currentExercise.correctAnswer}"`; fb.className = 'exercise-feedback show incorrect';
    }
    
    document.querySelectorAll('.exercise-option').forEach(o => {
        if (o.dataset.value === window._currentExercise.correctAnswer) o.classList.add('correct');
        else if (o.classList.contains('selected') && !correct) o.classList.add('incorrect');
    });
    
    const newAch = checkAchievements();
    if (newAch.length > 0) {
        setTimeout(() => newAch.forEach(id => {
            const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
            if (a) celebrate(`${a.icon} ${a.name}! ${a.desc}`);
        }), 500);
    }
    
    saveState();
    selectedExerciseOption = null;
    const pct = Math.round(state.exerciseScore.correct/state.exerciseScore.total*100);
    document.getElementById('exerciseScore').textContent = `${state.exerciseScore.correct}/${state.exerciseScore.total}`;
    document.getElementById('exercisePercent').textContent = `${pct}%`;
    updateDashboard(); updateGameUI();
}

// ===== 🎧 LISTENING EXERCISE =====
let _listenAnswer = '';
function playListeningExercise() {
    const words = allVocabulary.filter(w => w.kr.length <= 4 && !w.kr.includes('['));
    if (words.length < 4) return;
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    const correct = shuffled[0];
    _listenAnswer = correct.meaning;
    
    // Play the word
    speakKorean(correct.kr, 0.7);
    
    // Generate options
    const wrongs = words.filter(w => w.meaning !== correct.meaning)
        .map(w => w.meaning)
        .filter((v,i,a) => a.indexOf(v) === i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const options = [correct.meaning, ...wrongs].sort(() => Math.random() - 0.5);
    
    document.getElementById('listeningOptions').innerHTML = options.map(opt => `
        <div class="exercise-option" onclick="checkListeningAnswer('${opt.replace(/'/g, "\\'")}')">${opt}</div>
    `).join('');
    document.getElementById('listeningFeedback').style.display = 'none';
    document.getElementById('listeningFeedback').className = 'exercise-feedback';
}

function checkListeningAnswer(answer) {
    const fb = document.getElementById('listeningFeedback');
    if (answer === _listenAnswer) {
        fb.textContent = '✅ Đúng! +5XP 🎮'; fb.className = 'exercise-feedback show correct';
        state.exerciseScore.correct++; state.totalCorrect++;
        addXP(5);
        const newAch = checkAchievements();
        if (newAch.length > 0) {
            setTimeout(() => newAch.forEach(id => {
                const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
                if (a) celebrate(a.icon + ' ' + a.name + '! ' + a.desc);
            }), 500);
        }
        // Auto-next after delay
        setTimeout(playListeningExercise, 1500);
    } else {
        fb.textContent = '❌ Sai. Dap an: ' + _listenAnswer; fb.className = 'exercise-feedback show incorrect';
        // Play again
        setTimeout(() => {
            const word = allVocabulary.find(w => w.meaning === _listenAnswer);
            if (word) speakKorean(word.kr, 0.7);
        }, 1000);
    }
    state.exerciseScore.total++;
    const pct = Math.round(state.exerciseScore.correct/state.exerciseScore.total*100);
    document.getElementById('exerciseScore').textContent = state.exerciseScore.correct + '/' + state.exerciseScore.total;
    document.getElementById('exercisePercent').textContent = pct + '%';
    markStudiedToday(); saveState();
    updateDashboard(); updateGameUI();
}

// ===== 🔤 TEXT-TO-SPEECH =====
function speakKorean(text, speed = 0.8) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel(); // Stop any current speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = speed;
    // Try to find a Korean voice
    const voices = window.speechSynthesis.getVoices();
    const koreanVoice = voices.find(v => v.lang.startsWith('ko'));
    if (koreanVoice) utterance.voice = koreanVoice;
    window.speechSynthesis.speak(utterance);
}

// Load voices when they're ready
if (window.speechSynthesis) {
    window.speechSynthesis.getVoices(); // Prime the API
    window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}

// ===== AI TUTOR =====
function addAIMessage(role, content) {
    const d = document.createElement('div');
    d.className = `message ${role}`;
    d.innerHTML = `<div class="msg-content"><p>${content.replace(/\n/g,'<br>')}</p></div>`;
    document.getElementById('aiMessages').appendChild(d);
    document.getElementById('aiMessages').scrollTop = document.getElementById('aiMessages').scrollHeight;
}

async function sendToAI() {
    const input = document.getElementById('aiInput');
    const msg = input.value.trim();
    if (!msg) return;
    
    const isProduction = window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
    
    if (!isProduction && !state.deepseekApiKey) {
        document.getElementById('aiSetup').style.display = 'flex';
        document.getElementById('aiChat').style.display = 'none';
        alert('⚠️ Cần DeepSeek API Key! Vào tab AI để nhập.'); return;
    }
    
    addAIMessage('user', msg); input.value = '';
    
    const typing = document.createElement('div');
    typing.className = 'message ai'; typing.id = 'aiTyping';
    typing.innerHTML = '<div class="msg-content"><p>🤔 Suy nghĩ...</p></div>';
    document.getElementById('aiMessages').appendChild(typing);
    
    const requestBody = {
        model: 'deepseek-chat',
        messages: [
            { role: 'system', content: 'Ban la gia su tieng Han sieu vui tinh, nang luong. Nguoi hoc la nguoi Viet, de chan, luoi hoc. Phai lam cho viec hoc thu vi! - Noi chuyen vui ve, co cam xuc, dung icon nhieu - Neu ho noi "luoi" thi dong vien, khen ho da co gang - Giai thich NGAN, co vi du NGAY - Luon luon viet: tieng Han + phien am + nghia - Khen thuong: "Tot lam! +10 tinh than!" - Dung tieng Viet. Phan hoi ngan gon, suc tich.' },
            { role: 'user', content: msg }
        ],
        temperature: 0.9, max_tokens: 1200
    };
    
    try {
        let res;
        if (isProduction) {
            // Tren Vercel: goi qua API proxy, key nam trong server
            res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            });
        } else {
            // Local dev: goi truc tiep DeepSeek voi key tu localStorage
            res = await fetch('https://api.deepseek.com/v1/chat/completions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + state.deepseekApiKey },
                body: JSON.stringify(requestBody)
            });
        }
        document.getElementById('aiTyping')?.remove();
        if (!res.ok) throw new Error((await res.json()).error?.message || 'Loi');
        const data = await res.json();
        addAIMessage('ai', data.choices[0].message.content);
        addXP(2); saveState();
    } catch(e) {
        document.getElementById('aiTyping')?.remove();
        addAIMessage('ai', '❌ Loi: ' + e.message + '. Thu lai nhe!');
    }
}

function saveApiKey() {
    const key = document.getElementById('apiKeyInput').value.trim();
    if (!key) { alert('⚠️ Vui long nhap API Key!'); return; }
    state.deepseekApiKey = key;
    saveState();
    document.getElementById('aiSetup').style.display = 'none';
    document.getElementById('aiChat').style.display = 'flex';
    alert('✅ Da luu API Key! Bat dau tro chuyen voi AI nhe!');
}

function resetApiKey() {
    state.deepseekApiKey = '';
    saveState();
    document.getElementById('aiSetup').style.display = 'flex';
    document.getElementById('aiChat').style.display = 'none';
    document.getElementById('apiKeyInput').value = '';
}

// ===== VOCABULARY =====
function renderVocab() {
    const list = document.getElementById('vocabList');
    const search = (document.getElementById('vocabSearch')?.value||'').toLowerCase();
    const filter = document.getElementById('vocabFilter')?.value||'all';
    let items = allVocabulary.map((w,i) => ({...w, index: i}));
    if (search) items = items.filter(w => w.kr.toLowerCase().includes(search) || w.meaning.toLowerCase().includes(search));
    if (filter === 'new') items = items.filter(w => !state.vocabStatus[w.index]||state.vocabStatus[w.index]==='new');
    else if (filter === 'learning') items = items.filter(w => state.vocabStatus[w.index]==='learning');
    else if (filter === 'mastered') items = items.filter(w => state.vocabStatus[w.index]==='mastered');
    
    list.innerHTML = items.map(w => {
        const s = state.vocabStatus[w.index]||'new';
        return `<div class="vocab-item"><span class="vocab-word">${w.kr}</span><span class="vocab-mean">${w.meaning}</span><span class="vocab-status ${s}">${s==='new'?'📝 Mới':s==='learning'?'📖 Học':'✅ Thuộc'}</span></div>`;
    }).join('');
    document.getElementById('vocabCount').textContent = `${items.length} từ`;
}
function filterVocab() { renderVocab(); }

// ===== PROGRESS =====
function updateProgress() {
    const c = state.completedLessons.length;
    const pct = Math.round(c/lessonsData.length*100);
    document.getElementById('lessonProgressBar').style.width = `${pct}%`;
    document.getElementById('lessonProgressText').textContent = `${c}/${lessonsData.length} bài`;
    
    const s = getCurrentStage();
    document.getElementById('stageProgressBar').style.width = `${Math.round(s/4*100)}%`;
    document.getElementById('stageProgressText').textContent = `${s}/4 giai đoạn`;
    
    document.getElementById('progressStreakCount').textContent = state.streak.count;
    document.getElementById('topikEstimateCard').innerHTML = `🎯 <strong>${getTopikLevel().level}</strong>`;
    
    renderCalendar();
    
    let msg = '🚀 Bắt đầu thôi!';
    if (c >= 45) msg = '🏆 HOÀN THÀNH! Bạn là TOPIK 2 Master!';
    else if (c >= 30) msg = `🟠 GĐ 4 - ${pct}%! Gần tới TOPIK 2 rồi!`;
    else if (c >= 15) msg = `🟡 GĐ 3 - ${pct}%! Hướng TOPIK 1!`;
    else if (c >= 3) msg = `🟢 GĐ 2 - ${pct}%! Đang tiến bộ!`;
    else if (state.streak.count >= 3) msg = `🔥 ${state.streak.count} ngày! Bạn đang làm được!`;
    
    document.getElementById('motivationText').textContent = msg;
    
    document.getElementById('streakCount').textContent = state.streak.count;
    document.getElementById('sidebarWords').textContent = `${Object.keys(state.vocabStatus).length} từ`;
    document.getElementById('sidebarTopik').textContent = getTopikLevel().level;
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const days = ['T2','T3','T4','T5','T6','T7','CN'];
    const today = new Date();
    let html = days.map(d => `<div style="font-size:10px;text-align:center;color:var(--text-light);font-weight:600;">${d}</div>`).join('');
    for (let i = 27; i >= 0; i--) {
        const d = new Date(today); d.setDate(d.getDate()-i);
        const str = d.toDateString();
        html += `<div class="calendar-day ${state.studyDays.includes(str)?'learned':''} ${str===today.toDateString()?'today':''}">${d.getDate()}</div>`;
    }
    grid.innerHTML = html;
}

function markStudiedToday() {
    const today = new Date().toDateString();
    if (!state.studyDays.includes(today)) {
        state.studyDays.push(today);
        checkStreak();
    }
}

// ===== EXPORT =====
window.navigateTo = navigateTo; window.openLesson = openLesson; window.closeLesson = closeLesson;
window.completeLesson = completeLesson; window.nextLesson = nextLesson; window.prevLesson = prevLesson;
window.filterFlashcards = filterFlashcards; window.rateFlashcard = rateFlashcard;
window.loadExercise = loadExercise; window.selectExerciseOption = selectExerciseOption; window.checkExercise = checkExercise;
window.filterVocab = filterVocab; window.renderLessonList = renderLessonList;
window.answerQuiz = answerQuiz; window.showLessonQuiz = showLessonQuiz;
window.sendToAI = sendToAI; window.saveApiKey = saveApiKey; window.resetApiKey = resetApiKey;
window.speakKorean = speakKorean; window.playListeningExercise = playListeningExercise; window.checkListeningAnswer = checkListeningAnswer;

console.log('🎮 Korean Quest loaded! Level', state.level, '•', state.xp, 'XP');
