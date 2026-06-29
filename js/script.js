// ===== 🎮 KOREAN QUEST - HỌC NHƯ CHƠI GAME =====
const STATE_KEY = 'koreanQuest';

// ===== MERGE VOCAB BANK vào allVocabulary =====
// vocabBankFlat được định nghĩa trong vocab-bank.js, load trước script.js
(function() {
    if (typeof vocabBankFlat !== 'undefined' && vocabBankFlat.length > 0) {
        const existingKrs = new Set(allVocabulary.map(w => w.kr));
        // Thêm từ vựng từ vocab bank mà chưa có trong allVocabulary
        vocabBankFlat.forEach(w => {
            if (!existingKrs.has(w.kr)) {
                allVocabulary.push({
                    kr: w.kr,
                    meaning: w.meaning,
                    pronunciation: w.pronunciation || '',
                    lesson: w.topic === 'essential' ? 0 : 0,
                    index: w.index
                });
                existingKrs.add(w.kr);
            }
        });
    }
    console.log(`📚 Total vocabulary: ${allVocabulary.length} từ (lessons + bank)`);
})();

// ===== MERGE VOCAB EXTRA (1800+ từ) =====
(function() {
    if (typeof vocabExtra !== 'undefined' && vocabExtra.length > 0) {
        const existingKrs = new Set(allVocabulary.map(w => w.kr));
        let added = 0;
        vocabExtra.forEach(w => {
            if (!existingKrs.has(w.kr)) {
                allVocabulary.push({
                    kr: w.kr,
                    meaning: w.meaning,
                    pronunciation: w.pronunciation || '',
                    lesson: 0,
                    index: allVocabulary.length
                });
                existingKrs.add(w.kr);
                added++;
            }
        });
        console.log(`📚 Extra vocab merged: +${added} từ (total: ${allVocabulary.length})`);
    }
})();

// ===== MERGE VOCAB EXTRA 2 (+2500 từ) =====
(function() {
    if (typeof vocabExtra2 !== 'undefined' && vocabExtra2.length > 0) {
        const existingKrs = new Set(allVocabulary.map(w => w.kr));
        let added = 0;
        vocabExtra2.forEach(w => {
            if (!existingKrs.has(w.kr)) {
                allVocabulary.push({
                    kr: w.kr,
                    meaning: w.meaning,
                    pronunciation: w.pronunciation || '',
                    lesson: 0,
                    index: allVocabulary.length
                });
                existingKrs.add(w.kr);
                added++;
            }
        });
        console.log(`📚 Extra vocab 2 merged: +${added} từ (total: ${allVocabulary.length})`);
    }
})();

// ===== MERGE GRAMMAR EXTRA (80+ ngữ pháp) =====
(function() {
    if (typeof grammarExtra !== 'undefined' && grammarExtra.length > 0) {
        let added = 0;
        grammarExtra.forEach(g => {
            if (!grammarBank.find(x => x.id === g.id)) {
                grammarBank.push(g);
                added++;
            }
        });
        console.log(`📖 Grammar extra merged: +${added} ngữ pháp (total: ${grammarBank.length})`);
    }
})();

// ===== MERGE GRAMMAR EXTRA 2 (+90 ngữ pháp) =====
(function() {
    if (typeof grammarExtra2 !== 'undefined' && grammarExtra2.length > 0) {
        let added = 0;
        grammarExtra2.forEach(g => {
            if (!grammarBank.find(x => x.id === g.id)) {
                grammarBank.push(g);
                added++;
            }
        });
        console.log(`📖 Grammar extra 2 merged: +${added} ngữ pháp (total: ${grammarBank.length} điểm)`);
    }
})();

// ===== INTEGRATE READING EXTRA (+40 bài) =====
(function() {
    if (typeof readingExtra !== 'undefined' && readingExtra.length > 0) {
        if (typeof topikReadingBank !== 'undefined') {
            const existingIds = new Set(topikReadingBank.map(r => r.id));
            let added = 0;
            readingExtra.forEach(r => {
                if (!existingIds.has(r.id)) {
                    topikReadingBank.push(r);
                    existingIds.add(r.id);
                    added++;
                }
            });
            console.log(`📄 Reading extra merged: +${added} bài (total reading bank: ${topikReadingBank.length})`);
        }
    }
})();

console.log(`📚 TỔNG KẾT: allVocabulary=${allVocabulary.length} từ, grammarBank=${grammarBank.length} điểm`);

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
    totalCorrect: 0,
    questsClaimed: [],
    notificationsEnabled: false,
    notificationLastShown: null,
    dailyProgress: {
        lessons: 0,
        flashcards: 0,
        exercises: 0,
        correct: 0,
        grammar: 0,
        listening: 0,
        reading: 0
    },
    dailyProgressDate: null
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

const QUESTS_POOL = [
    { id: 'lessons', task: '📖 Học 1 bài mới', xp: 50, icon: '📖', target: 1, key: 'lessons', desc: 'Hoàn thành 1 bài học → +50XP' },
    { id: 'flashcards', task: '🃏 Ôn 10 flashcard', xp: 30, icon: '🃏', target: 10, key: 'flashcards', desc: 'Ôn 10 thẻ → +30XP' },
    { id: 'exercises', task: '✍️ Làm 5 câu bài tập', xp: 40, icon: '✍️', target: 5, key: 'exercises', desc: 'Làm 5 câu → +40XP' },
    { id: 'correct', task: '🎯 Đúng 5 câu đúng', xp: 50, icon: '🎯', target: 5, key: 'correct', desc: 'Đúng 5 câu → +50XP' },
    { id: 'grammar', task: '📖 Học 2 ngữ pháp', xp: 35, icon: '📖', target: 2, key: 'grammar', desc: 'Học 2 điểm ngữ pháp → +35XP' },
    { id: 'listening', task: '🎧 Nghe 5 câu TOPIK', xp: 40, icon: '🎧', target: 5, key: 'listening', desc: 'Nghe 5 câu → +40XP' },
    { id: 'reading', task: '📄 Đọc 2 bài đọc hiểu', xp: 45, icon: '📄', target: 2, key: 'reading', desc: 'Đọc 2 bài → +45XP' },
    { id: 'flashcards_easy', task: '🃏 Ôn 20 flashcard', xp: 60, icon: '🃏', target: 20, key: 'flashcards', desc: 'Ôn 20 thẻ nhanh → +60XP' },
    { id: 'exercises_hard', task: '✍️ Làm 10 câu bài tập', xp: 70, icon: '✍️', target: 10, key: 'exercises', desc: 'Làm 10 câu → +70XP' },
    { id: 'streak_keep', task: '🔥 Giữ streak hôm nay', xp: 60, icon: '🔥', target: 1, key: 'streak', desc: 'Học hôm nay → +60XP' }
];

function generateDailyQuests() {
    const today = new Date().toDateString();
    checkResetDailyProgress();
    if (state.questDate === today && state.dailyQuests.length > 0) return;
    
    state.questDate = today;
    state.questsClaimed = [];
    state.dailyQuests = [];
    
    // Chọn 3 quest ngẫu nhiên, ưu tiên quest chưa claim
    const shuffled = [...QUESTS_POOL].sort(() => Math.random() - 0.5);
    const numQuests = 2 + (state.streak.count >= 3 ? 1 : 0);
    
    // Luôn có quest streak nếu đang có streak
    const streakQuest = QUESTS_POOL.find(q => q.id === 'streak_keep');
    if (state.streak.count > 0 && streakQuest && !state.dailyQuests.find(q => q.id === 'streak_keep')) {
        state.dailyQuests.push({ ...streakQuest, progress: 1, claimed: false });
    }
    
    for (let i = 0; i < numQuests; i++) {
        if (state.dailyQuests.length >= numQuests) break;
        const q = shuffled[i];
        if (!state.dailyQuests.find(x => x.id === q.id)) {
            state.dailyQuests.push({
                ...q,
                progress: state.dailyProgress[q.key] || 0,
                claimed: state.questsClaimed.includes(q.id)
            });
        }
    }
    saveState();
}

function updateQuestProgress() {
    state.dailyQuests.forEach(q => {
        if (q.key === 'streak') {
            q.progress = state.streak.count > 0 ? 1 : 0;
        } else {
            q.progress = Math.min(q.target, state.dailyProgress[q.key] || 0);
        }
    });
    saveState();
}

function renderDailyQuests() {
    const container = document.getElementById('questList');
    if (!container) return;
    
    generateDailyQuests();
    updateQuestProgress();
    
    if (!state.dailyQuests || state.dailyQuests.length === 0) {
        container.innerHTML = '<div class="quest-empty">🎉 Hôm nay không có nhiệm vụ!</div>';
        return;
    }
    
    let html = '';
    state.dailyQuests.forEach((q, i) => {
        const done = q.progress >= q.target;
        const claimed = state.questsClaimed.includes(q.id);
        const pct = Math.min(100, Math.round((q.progress / q.target) * 100));
        
        html += `
        <div class="quest-card ${done ? 'complete' : ''} ${claimed ? 'claimed' : ''}">
            <div class="quest-icon">${q.icon}</div>
            <div class="quest-info">
                <div class="quest-task">${q.task}</div>
                <div class="quest-desc">${q.desc}</div>
                <div class="quest-bar-track">
                    <div class="quest-bar-fill" style="width:${pct}%"></div>
                </div>
                <div class="quest-progress-text">${Math.min(q.progress, q.target)}/${q.target}</div>
            </div>
            <div class="quest-action">
                ${claimed 
                    ? '<span class="quest-claimed-badge">✅ Đã nhận</span>' 
                    : done 
                        ? `<button class="quest-claim-btn" onclick="claimQuest('${q.id}')">🎁 Nhận ${q.xp}XP</button>`
                        : `<span class="quest-pending">🔒 ${pct}%</span>`
                }
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
}

function claimQuest(questId) {
    if (state.questsClaimed.includes(questId)) return;
    
    const quest = state.dailyQuests.find(q => q.id === questId);
    if (!quest || quest.progress < quest.target) {
        celebrate('⚠️ Chưa hoàn thành nhiệm vụ!');
        return;
    }
    
    state.questsClaimed.push(questId);
    const leveledUp = addXP(quest.xp);
    markStudiedToday();
    saveState();
    
    fireConfetti();
    playSound('success');
    celebrate(`🎉 Nhận ${quest.xp}XP từ "${quest.task}"! ${leveledUp ? '🌟 LEVEL UP! Lv.'+state.level : ''}`);
    
    updateDashboard();
    updateGameUI();
}

function checkResetDailyProgress() {
    const today = new Date().toDateString();
    if (state.dailyProgressDate !== today) {
        state.dailyProgressDate = today;
        state.dailyProgress = { lessons: 0, flashcards: 0, exercises: 0, correct: 0, grammar: 0, listening: 0, reading: 0 };
        state.questDate = null;
        state.dailyQuests = [];
        state.questsClaimed = [];
        saveState();
    }
}

function renderAchievements() {
    const container = document.getElementById('achievementList');
    if (!container) return;
    
    const unlocked = state.achievements;
    const total = ACHIEVEMENTS_LIST.length;
    
    // Show last 6 achievements or placeholders
    let html = '';
    const displayAch = ACHIEVEMENTS_LIST.slice(0, 8);
    displayAch.forEach(a => {
        const has = unlocked.includes(a.id);
        html += `<div class="ach-item ${has ? 'unlocked' : 'locked'}" title="${a.desc}">
            <span class="ach-icon">${has ? a.icon : '🔒'}</span>
            <span class="ach-name">${has ? a.name : '???'}</span>
        </div>`;
    });
    
    html += `<div class="ach-count">${unlocked.length}/${total}</div>`;
    container.innerHTML = html;
}

function fireConfetti() {
    const colors = ['#1a237e', '#c62828', '#ffd54f', '#2e7d32', '#e53935', '#3949ab', '#f57f17'];
    const container = document.body;
    for (let i = 0; i < 60; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.cssText = `
            left: ${Math.random() * 100}vw;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            width: ${6 + Math.random() * 8}px;
            height: ${6 + Math.random() * 8}px;
            animation-delay: ${Math.random() * 0.5}s;
            animation-duration: ${1.5 + Math.random() * 1.5}s;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        `;
        container.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    }
}

function playSound(type) {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        if (type === 'success') {
            osc.frequency.setValueAtTime(523, ctx.currentTime); // C5
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1); // E5
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2); // G5
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.4);
        } else if (type === 'fail') {
            osc.frequency.setValueAtTime(300, ctx.currentTime);
            osc.frequency.setValueAtTime(250, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'levelup') {
            osc.frequency.setValueAtTime(523, ctx.currentTime);
            osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
            osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
            osc.frequency.setValueAtTime(1047, ctx.currentTime + 0.3);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.6);
        }
    } catch(e) { /* Audio not supported */ }
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
    checkResetDailyProgress();
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

// ===== MOBILE NAVIGATION HANDLING =====
function toggleSidebar(open) {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (open) {
        sidebar.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            navigateTo(this.dataset.tab);
            // Close sidebar on mobile after navigation
            toggleSidebar(false);
        });
    });
    
    // Hamburger menu toggle
    document.getElementById('hamburgerBtn')?.addEventListener('click', function(e) {
        e.stopPropagation();
        const sidebar = document.getElementById('sidebar');
        toggleSidebar(!sidebar.classList.contains('open'));
    });
    
    // Sidebar overlay click to close
    document.getElementById('sidebar-overlay')?.addEventListener('click', function() {
        toggleSidebar(false);
    });
    
    // Bottom nav click handling
    document.querySelectorAll('.bn-item').forEach(item => {
        item.addEventListener('click', function() {
            navigateTo(this.dataset.tab);
        });
    });
    
    // Close sidebar on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            toggleSidebar(false);
        }
    });
    
    // Close sidebar on resize to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            toggleSidebar(false);
        }
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
    document.querySelectorAll('.bn-item').forEach(n => n.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelector(`.nav-item[data-tab="${tab}"]`)?.classList.add('active');
    document.querySelector(`.bn-item[data-tab="${tab}"]`)?.classList.add('active');
    if (tab === 'dashboard') updateDashboard();
    if (tab === 'roadmap') { renderRoadmap(); render12MonthRoadmap(); }
    if (tab === 'progress') updateProgress();
    if (tab === 'vocabulary') renderVocab();
    if (tab === 'listening') setTimeout(startTopikListening, 300);
    if (tab === 'reading') loadReading();
    if (tab === 'writing') loadWriting();
    if (tab === 'mocktest') {} // wait for user to click start
    if (tab === 'grammar') loadGrammar();
    if (tab === 'study-now') studyFlow.updatePreviewStats();
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
    
    renderDailyQuests();
    renderAchievements();
    
    // Sync notification toggle state
    const notifEl = document.getElementById('notifToggle');
    if (notifEl) notifEl.checked = state.notificationsEnabled;
    
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
function render12MonthRoadmap() {
    if (typeof topikRoadmap === 'undefined') return;
    const container = document.getElementById('roadmapTimeline');
    
    // Check if 12-month content already exists
    if (container.querySelector('.roadmap-year-plan')) return;
    
    let html = '<div class="roadmap-year-plan" style="margin-top:24px;">';
    html += '<h3 style="margin-bottom:16px;">' + topikRoadmap.title + '</h3>';
    html += '<p style="margin-bottom:20px;color:var(--text-secondary);">' + topikRoadmap.description + '</p>';
    
    // Tính toán tháng hiện tại dựa trên số bài đã hoàn thành
    const completedPct = lessonsData.length > 0 ? state.completedLessons.length / lessonsData.length : 0;
    const currentMonth = Math.min(12, Math.max(1, Math.ceil(completedPct * 12)));
    
    topikRoadmap.phases.forEach((phase, idx) => {
        const monthNum = idx + 1;
        const isCurrent = monthNum === currentMonth;
        const isPast = monthNum < currentMonth;
        
        html += '<div class="roadmap-month ' + (isPast ? 'done' : isCurrent ? 'active' : '') + '" style="background:var(--card);border-radius:var(--radius);padding:16px 20px;margin-bottom:12px;box-shadow:var(--shadow);border-left:4px solid ' + (isPast ? 'var(--success)' : isCurrent ? 'var(--primary)' : 'var(--border)') + ';">';
        html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">';
        html += '<h4 style="font-size:15px;font-weight:700;">' + (isPast ? '✅' : isCurrent ? '▶️' : '📅') + ' ' + phase.month + '. ' + phase.title + '</h4>';
        html += '<span style="font-size:12px;color:var(--text-secondary);">' + phase.dailyTime + '/ngày</span>';
        html += '</div>';
        html += '<p style="font-size:13px;color:var(--text-secondary);margin-bottom:8px;">🎯 Mục tiêu: ' + phase.goal + '</p>';
        html += '<ul style="font-size:13px;color:var(--text-secondary);margin-left:20px;line-height:1.8;">';
        phase.tasks.forEach(task => {
            html += '<li>' + task + '</li>';
        });
        html += '</ul>';
        if (phase.appLessons && phase.appLessons.length > 0) {
            html += '<div style="margin-top:8px;font-size:12px;color:var(--primary-light);">📖 Bài học: ' + phase.appLessons.map(id => '<a href="#" onclick="navigateTo(\'lessons\');setTimeout(()=>openLesson(' + id + '),100)" style="color:var(--primary);text-decoration:none;font-weight:600;">Bài ' + id + '</a>').join(', ') + '</div>';
        }
        html += '</div>';
    });
    
    html += '<div class="roadmap-summary" style="background:linear-gradient(135deg,#e8eaf6,#f3e5f5);border-radius:var(--radius);padding:20px;text-align:center;margin-top:16px;">';
    html += '<h4>🏁 Mục tiêu</h4>';
    html += '<p>' + topikRoadmap.getTotalWords() + ' • ' + topikRoadmap.getTotalGrammar() + ' • ' + topikRoadmap.getTotalReading() + '</p>';
    html += '<p style="margin-top:8px;">🎯 ' + (completedPct >= 1 ? '🏆 Đã hoàn thành!' : Math.round((1 - completedPct) * 12) + ' tháng còn lại') + '</p>';
    html += '</div>';
    html += '</div>';
    
    container.insertAdjacentHTML('beforeend', html);
}

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
    
    const correct = quiz.questions.filter(q => q.userAnswer && q.userAnswer.normalize() === (q.correctAnswer || '').normalize()).length;
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
    state.dailyProgress.lessons = (state.dailyProgress.lessons || 0) + 1;
    const leveledUp = addXP(50);
    markStudiedToday(); saveState();
    
    if (leveledUp) { fireConfetti(); playSound('levelup'); }
    else { playSound('success'); }
    
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
    
    state.dailyProgress.flashcards = (state.dailyProgress.flashcards || 0) + 1;
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
    const correct = selectedExerciseOption && selectedExerciseOption.normalize() === (window._currentExercise && window._currentExercise.correctAnswer || '').normalize();
    if (correct) {
        state.exerciseScore.correct++; state.totalCorrect++;
        state.dailyProgress.correct = (state.dailyProgress.correct || 0) + 1;
        state.dailyProgress.exercises = (state.dailyProgress.exercises || 0) + 1;
        addXP(5);
        fb.textContent = '✅ Đúng! +5XP 🎮'; fb.className = 'exercise-feedback show correct';
        markStudiedToday();
    } else {
        state.dailyProgress.exercises = (state.dailyProgress.exercises || 0) + 1;
        fb.textContent = `❌ Sai. Đáp án: "${window._currentExercise.correctAnswer}"`; fb.className = 'exercise-feedback show incorrect';
    }
    
    document.querySelectorAll('.exercise-option').forEach(o => {
        if ((o.dataset.value || '''').normalize() === (window._currentExercise && window._currentExercise.correctAnswer || '''').normalize()) o.classList.add('correct');
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

// ===== 🎧 LISTENING — HAI CHẾ ĐỘ =====
let _listenMode = 'topik'; // 'word' or 'topik'
let _listenAnswer = '';
let _topikListenIndex = 0;
let _topikListenCorrect = 0;
let _topikListenTotal = 0;

function toggleListenMode(mode) {
    _listenMode = mode;
    // Update indicator
    document.getElementById('listenModeIndicator').textContent = mode === 'topik' ? '🎧 TOPIK Nghe' : '🔊 Đoán từ';
    // Update button styles
    document.querySelectorAll('.listen-mode-bar .action-btn').forEach(b => {
        b.className = 'action-btn outline';
    });
    if (mode === 'topik') {
        const btn = document.querySelector('.listen-mode-bar .action-btn:first-child');
        if (btn) btn.className = 'action-btn primary';
        startTopikListening();
    } else {
        const btn = document.querySelector('.listen-mode-bar .action-btn:last-child');
        if (btn) btn.className = 'action-btn primary';
        playListeningExercise();
    }
}

function startTopikListening() {
    if (typeof topikListening === 'undefined' || topikListening.length === 0) {
        document.getElementById('listeningOptions').innerHTML = '<p style="color:var(--text-secondary);">Chưa có dữ liệu nghe TOPIK</p>';
        return;
    }
    _topikListenIndex = 0;
    _topikListenCorrect = 0;
    _topikListenTotal = topikListening.length;
    showTopikQuestion();
}

function showTopikQuestion() {
    if (_topikListenIndex >= topikListening.length) {
        // Finished all questions
        document.getElementById('listeningOptions').innerHTML = `
            <div style="text-align:center;padding:30px;">
                <div style="font-size:48px;margin-bottom:12px;">🎉</div>
                <h3>Hoàn thành ${_topikListenTotal} câu!</h3>
                <p style="color:var(--text-secondary);margin:8px 0;">Đúng: ${_topikListenCorrect}/${_topikListenTotal}</p>
                <button class="action-btn primary" onclick="startTopikListening()">🔄 Làm lại</button>
            </div>
        `;
        document.getElementById('listeningFeedback').style.display = 'none';
        return;
    }
    
    const q = topikListening[_topikListenIndex];
    _listenAnswer = q.answer;
    
    // Play dialogue via TTS
    speakKorean(q.script, 0.75);
    
    // Show progress
    const progress = Math.round((_topikListenIndex + 1) / _topikListenTotal * 100);
    
    document.getElementById('listeningOptions').innerHTML = `
        <div style="margin-bottom:16px;text-align:center;">
            <div style="font-size:13px;color:var(--text-secondary);margin-bottom:4px;">${q.type === 'basic' ? '💬' : q.type === 'daily' ? '🗣️' : q.type === 'dialogue' ? '🎭' : q.type === 'announce' ? '📢' : '🎓'} Câu ${_topikListenIndex+1}/${_topikListenTotal} (${q.id})</div>
            <div style="height:4px;background:var(--bg);border-radius:2px;max-width:300px;margin:0 auto;overflow:hidden;">
                <div style="height:100%;width:${progress}%;background:var(--primary);border-radius:2px;transition:width 0.5s;"></div>
            </div>
        </div>
        <div style="font-size:14px;color:var(--text-secondary);margin-bottom:16px;padding:12px;background:#f5f5ff;border-radius:8px;line-height:1.8;font-family:var(--header-font);text-align:center;">
            🔊 ${q.script}
        </div>
        <div style="font-size:16px;font-weight:600;margin-bottom:16px;text-align:center;">${q.question}</div>
        <div style="display:flex;flex-direction:column;gap:8px;max-width:400px;margin:0 auto;">
            ${q.options.map((opt, i) => `
                <div class="exercise-option" onclick="checkTopikListenAnswer(${i})">${opt}</div>
            `).join('')}
        </div>
    `;
    document.getElementById('listeningFeedback').style.display = 'none';
}

function checkTopikListenAnswer(oi) {
    const q = topikListening[_topikListenIndex];
    if (!q) return;
    
    const fb = document.getElementById('listeningFeedback');
    fb.style.display = 'block';
    
    if (oi === q.answer) {
        _topikListenCorrect++;
        state.exerciseScore.correct++;
        state.totalCorrect++;
        state.dailyProgress.listening = (state.dailyProgress.listening || 0) + 1;
        state.dailyProgress.correct = (state.dailyProgress.correct || 0) + 1;
        addXP(5);
        playSound('success');
        fb.textContent = '✅ Đúng! +5XP 🎮';
        fb.className = 'exercise-feedback show correct';
        const newAch = checkAchievements();
        if (newAch.length > 0) {
            setTimeout(() => newAch.forEach(id => {
                const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
                if (a) celebrate(a.icon + ' ' + a.name + '! ' + a.desc);
            }), 500);
        }
        setTimeout(() => { _topikListenIndex++; showTopikQuestion(); }, 1200);
    } else {
        playSound('fail');
        fb.textContent = '❌ Sai. Đáp án: ' + q.options[q.answer] + '. Phát lại...';
        fb.className = 'exercise-feedback show incorrect';
        setTimeout(() => { speakKorean(q.script, 0.75); }, 800);
        setTimeout(() => { _topikListenIndex++; showTopikQuestion(); }, 2500);
    }
    
    state.exerciseScore.total++;
    const pct = Math.round(state.exerciseScore.correct/state.exerciseScore.total*100);
    document.getElementById('exerciseScore').textContent = state.exerciseScore.correct + '/' + state.exerciseScore.total;
    document.getElementById('exercisePercent').textContent = pct + '%';
    markStudiedToday(); saveState();
    updateDashboard(); updateGameUI();
}

// Original word-guessing mode (giữ nguyên)
let _listenWordAnswer = '';
function playListeningExercise() {
    const words = allVocabulary.filter(w => w.kr.length <= 4 && !w.kr.includes('['));
    if (words.length < 4) return;
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    const correct = shuffled[0];
    _listenWordAnswer = correct.meaning;
    
    speakKorean(correct.kr, 0.7);
    
    const wrongs = words.filter(w => w.meaning !== correct.meaning)
        .map(w => w.meaning)
        .filter((v,i,a) => a.indexOf(v) === i)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
    const options = [correct.meaning, ...wrongs].sort(() => Math.random() - 0.5);
    
    document.getElementById('listeningOptions').innerHTML = options.map(opt => `
        <div class="exercise-option" onclick="checkListenWordAnswer('${opt.replace(/'/g, "\\'")}')">${opt}</div>
    `).join('');
    document.getElementById('listeningFeedback').style.display = 'none';
    document.getElementById('listeningFeedback').className = 'exercise-feedback';
}

function checkListenWordAnswer(answer) {
    const fb = document.getElementById('listeningFeedback');
    fb.style.display = 'block';
    if (answer && answer.normalize() === (_listenWordAnswer || '').normalize()) {
        fb.textContent = '✅ Đúng! +5XP 🎮';
        fb.className = 'exercise-feedback show correct';
        state.exerciseScore.correct++; state.totalCorrect++;
        state.dailyProgress.listening = (state.dailyProgress.listening || 0) + 1;
        state.dailyProgress.correct = (state.dailyProgress.correct || 0) + 1;
        addXP(5);
        playSound('success');
        const newAch = checkAchievements();
        if (newAch.length > 0) {
            setTimeout(() => newAch.forEach(id => {
                const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
                if (a) celebrate(a.icon + ' ' + a.name + '! ' + a.desc);
            }), 500);
        }
        setTimeout(playListeningExercise, 1500);
    } else {
        fb.textContent = '❌ Sai. Đáp án: ' + _listenWordAnswer;
        fb.className = 'exercise-feedback show incorrect';
        setTimeout(() => {
            const word = allVocabulary.find(w => w.meaning === _listenWordAnswer);
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
    document.getElementById('mobileStreakCount').textContent = state.streak.count;
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
    notifyStudied();
}

// ===== 🔔 NOTIFICATION REMINDERS =====
function requestNotifPermission() {
    if (!('Notification' in window)) return false;
    if (Notification.permission === 'granted') return true;
    if (Notification.permission === 'denied') {
        showTooltip('⚠️ Đã tắt thông báo! Vào cài đặt trình duyệt để bật lại.');
        return false;
    }
    try {
        const result = Notification.requestPermission();
        if (result && typeof result.then === 'function') {
            return result.then(perm => perm === 'granted');
        }
        return Notification.permission === 'granted';
    } catch(e) { return false; }
}

function showTooltip(msg) {
    const el = document.createElement('div');
    el.className = 'tooltip-msg';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add('show'), 10);
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 400); }, 3000);
}

function showNotif(title, body) {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    // Prevent spam: tối thiểu 2 phút giữa các notification
    const now = Date.now();
    if (state.notificationLastShown && now - state.notificationLastShown < 120000) return;
    state.notificationLastShown = now;
    saveState();
    
    try {
        new Notification(title, {
            body: body,
            icon: '/favicon.ico',
            tag: 'korean-quest'
        });
    } catch(e) {}
}

function toggleNotif() {
    state.notificationsEnabled = !state.notificationsEnabled;
    
    if (state.notificationsEnabled) {
        const perm = requestNotifPermission();
        if (perm && typeof perm.then === 'function') {
            perm.then(granted => {
                if (granted) {
                    startNotifReminder();
                    saveState();
                    updateDashboard();
                    celebrate('🔔 Đã bật nhắc nhở học!');
                } else {
                    state.notificationsEnabled = false;
                    saveState();
                    updateDashboard();
                }
            });
            return;
        }
        if (perm) {
            startNotifReminder();
            saveState();
            updateDashboard();
            celebrate('🔔 Đã bật nhắc nhở học!');
        } else {
            state.notificationsEnabled = false;
            saveState();
            updateDashboard();
            showTooltip('⚠️ Không thể bật thông báo. Hãy kiểm tra cài đặt trình duyệt.');
        }
    } else {
        cleanupNotifReminder();
        saveState();
        updateDashboard();
        showTooltip('🔕 Đã tắt nhắc nhở');
    }
}

function cleanupNotifReminder() {
    if (window._notifInterval) {
        clearInterval(window._notifInterval);
        window._notifInterval = null;
    }
    if (window._notifHandler) {
        document.removeEventListener('visibilitychange', window._notifHandler);
        window._notifHandler = null;
    }
}

function startNotifReminder() {
    cleanupNotifReminder();
    
    // Kiểm tra ngay
    checkAndRemind();
    
    // Kiểm tra mỗi 30 phút
    window._notifInterval = setInterval(checkAndRemind, 30 * 60 * 1000);
    
    // Cũng check khi tab được focus lại
    window._notifHandler = () => {
        if (!document.hidden && state.notificationsEnabled) {
            checkAndRemind();
        }
    };
    document.addEventListener('visibilitychange', window._notifHandler);
}

function checkAndRemind() {
    if (!state.notificationsEnabled) return;
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    
    const today = new Date().toDateString();
    const studied = state.studyDays.includes(today);
    
    if (!studied) {
        const msgs = [
            { title: '🇰🇷 Chưa học hôm nay!', body: 'Chỉ 5 phút thôi — vào học ngay →' },
            { title: '🔥 Streak đang chờ!', body: `Bạn có streak ${state.streak.count} ngày. Đừng để mất!` },
            { title: '⏰ Giờ học rồi!', body: 'Flashcard + Bài tập = 10 phút là xong!' },
            { title: '🎯 Nhiệm vụ mới!', body: 'Daily Quests đang chờ bạn nhận thưởng XP!' },
            { title: '💪 Cố lên!', body: 'Mỗi ngày một tí — TOPIK 2 đang đến gần!' }
        ];
        const msg = msgs[Math.floor(Math.random() * msgs.length)];
        showNotif(msg.title, msg.body);
    }
}

function notifyStudied() {
    if (!state.notificationsEnabled || !('Notification' in window) || Notification.permission !== 'granted') return;
    
    const today = new Date().toDateString();
    
    const msgs = [
        { title: '✅ Học rồi!', body: `Streak: ${state.streak.count} ngày! 🔥 Tiếp tục phát huy!` },
        { title: '🎮 Chăm chỉ quá!', body: 'Cày XP trình độ cao đây! TOPIK 2 đang gọi bạn!' },
        { title: '🔥 Rực lửa!', body: `Học hôm nay rồi! Streak ${state.streak.count} ngày — quá đỉnh!` },
        { title: '🌟 Giỏi lắm!', body: 'Chỉ cần đều đặn mỗi ngày là bạn sẽ đạt TOPIK 2!' }
    ];
    const msg = msgs[Math.floor(Math.random() * msgs.length)];
    showNotif(msg.title, msg.body);
}

// ===== 📄 READING COMPREHENSION =====
let _readingData = null;
let _readingScore = { correct: 0, total: 0 };

function getCombinedReadings() {
    // Kết hợp bài đọc từ lessons + topikReadingBank
    const all = [];
    // Từ lessons
    if (typeof lessonsData !== 'undefined') {
        lessonsData.forEach(lesson => {
            if (lesson.reading) {
                all.push({
                    id: 'L' + lesson.id,
                    title: lesson.title,
                    level: lesson.stage === 4 ? 4 : 3,
                    source: 'app',
                    passage: lesson.reading,
                    questions: lesson.readingQuestions || []
                });
            }
        });
    }
    // Từ reading bank
    if (typeof topikReadingBank !== 'undefined') {
        topikReadingBank.forEach(r => {
            all.push({
                id: r.id,
                title: r.title,
                level: r.level,
                source: 'bank',
                passage: r.passage,
                questions: r.questions || []
            });
        });
    }
    return all;
}

function loadReading() {
    const allReadings = getCombinedReadings();
    const level = document.getElementById('readingLevel').value;
    
    let filtered = level !== 'all' 
        ? allReadings.filter(r => r.level === parseInt(level))
        : allReadings;
    
    if (filtered.length === 0) {
        document.getElementById('readingPassage').innerHTML = 'Chưa có bài đọc cho trình độ này. Hãy học bài trước!';
        document.getElementById('readingQuestions').innerHTML = '';
        document.getElementById('readingFeedback').style.display = 'none';
        document.getElementById('readingTitle').textContent = 'Không có bài đọc';
        document.getElementById('readingSource').textContent = '';
        return;
    }
    
    const item = filtered[Math.floor(Math.random() * filtered.length)];
    _readingData = item;
    _readingScore = { correct: 0, total: item.questions.length };
    
    document.getElementById('readingTitle').textContent = item.id + ': ' + item.title;
    document.getElementById('readingSource').textContent = (item.level === 4 ? '🟠 Trung cấp' : '🟡 Sơ cấp 2') + ' • ' + (item.source === 'bank' ? '📚 Kho đọc' : '📖 Bài học');
    document.getElementById('readingPassage').innerHTML = '<p style="line-height:1.8;font-size:15px;">' + item.passage + '</p>';
    document.getElementById('readingFeedback').style.display = 'none';
    document.getElementById('readingFeedback').className = 'exercise-feedback';
    document.getElementById('readingScore').textContent = 'Điểm: 0/' + _readingScore.total;
    
    window._readingAnswers = {};
    
    if (item.questions.length > 0) {
        document.getElementById('readingQuestions').innerHTML = item.questions.map((q, qi) => `
            <div class="reading-q-block">
                <p class="reading-q-text">${qi+1}. ${q.q}</p>
                <div class="reading-q-options">
                    ${q.options.map((opt, oi) => `
                        <div class="reading-option" data-qi="${qi}" data-oi="${oi}" onclick="selectReadingOption(this)">${opt}</div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    } else {
        document.getElementById('readingQuestions').innerHTML = '<p style="color:var(--text-secondary);">Chưa có câu hỏi cho bài đọc này.</p>';
    }
}

function selectReadingOption(el) {
    const qi = parseInt(el.dataset.qi);
    document.querySelectorAll(`.reading-option[data-qi="${qi}"]`).forEach(o => o.classList.remove('selected'));
    el.classList.add('selected');
    window._readingAnswers[qi] = parseInt(el.dataset.oi);
}

function checkReading() {
    if (!_readingData || !_readingData.questions || _readingData.questions.length === 0) return;
    const fb = document.getElementById('readingFeedback');
    
    const total = _readingData.questions.length;
    const answered = Object.keys(window._readingAnswers).length;
    if (answered < total) {
        fb.textContent = '⚠️ Vui lòng trả lời hết ' + total + ' câu trước!';
        fb.className = 'exercise-feedback show incorrect';
        return;
    }
    
    let correct = 0;
    _readingData.questions.forEach((q, i) => {
        if (window._readingAnswers[i] === q.answer) correct++;
        document.querySelectorAll('.reading-option[data-qi="' + i + '"]').forEach(o => {
            const oi = parseInt(o.dataset.oi);
            if (oi === q.answer) o.classList.add('correct');
            else if (o.classList.contains('selected') && oi !== q.answer) o.classList.add('incorrect');
            o.style.cursor = 'default';
            o.onclick = null;
        });
    });
    
    _readingScore.correct = correct;
    _readingScore.total = total;
    
    const pct = Math.round(correct/total*100);
    if (correct >= total - 1) {
        fb.textContent = '🎉 Đúng ' + correct + '/' + total + '! +' + (correct * 5) + 'XP!';
        fb.className = 'exercise-feedback show correct';
        state.dailyProgress.reading = (state.dailyProgress.reading || 0) + 1;
        addXP(correct * 5);
        playSound('success');
        markStudiedToday();
        const newAch = checkAchievements();
        if (newAch.length > 0) {
            setTimeout(() => newAch.forEach(id => {
                const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
                if (a) celebrate(a.icon + ' ' + a.name + '! ' + a.desc);
            }), 500);
        }
        saveState();
        updateDashboard(); updateGameUI();
    } else {
        fb.textContent = '😅 Đúng ' + correct + '/' + total + '. Hãy đọc lại bài và thử lại!';
        fb.className = 'exercise-feedback show incorrect';
    }
    
    document.getElementById('readingScore').textContent = 'Điểm: ' + _readingScore.correct + '/' + _readingScore.total;
}

// ===== ✏️ WRITING PRACTICE =====
let _writingPrompt = null;

function loadWriting() {
    const level = document.getElementById('writingLevel').value;
    const prompts = [
        { 
            level: 3, 
            prompt: 'Cau 51: Hay dien tu thich hop vao cho trong:\n\n"가: _____에 가요?\n나: 학교에 가요."',
            hint: 'Tu de hoi "dau" bang tieng Han la gi? (Goi y: 4 chu cai, bat dau bang "어")',
            sample: '어디',
            explanation: '어디 = dau. Cau hoi: 어디에 가요? = Di dau vay?'
        },
        { 
            level: 3, 
            prompt: 'Cau 52: Viet cau hoan chinh tu cac tu sau:\n\n"저 / 학생 / 입니다" → ________________',
            hint: 'Sap xep: Toi - hoc sinh - la. Dung thu tu SOV cua tieng Han.',
            sample: '저는 학생입니다',
            explanation: '저는(Toi) + 학생(hoc sinh) + 입니다(la).' 
        },
        { 
            level: 4, 
            prompt: 'Cau 53: Viet doan van ngan (5-7 cau) gioi thieu ve ban than.\n\nHay sap xep cac y sau thanh doan van hoan chinh:\n1. Gioi thieu ten, quoc tich\n2. Nghe nghiep/hoc tap\n3. So thich\n4. Ly do hoc tieng Han\n5. Muc tieu tuong lai',
            hint: 'Dung cac cau mau: 저는...입니다 / ...이에요/예요. 제 취미는... / ...기 위해 한국어를 공부해요.',
            sample: '안녕하세요, 저는 마이클이에요. 베트남 사람이에요. 저는 학생이에요. 제 취미는 한국 노래 듣기예요. 한국어를 공부하기 위해 열심히 공부하고 있어요. TOPIK 2에 합격하는 것이 제 목표예요.',
            explanation: 'Viet gioi thieu ban than: ten - quoc tich - nghe nghiep - so thich - muc tieu.'
        },
        { 
            level: 4, 
            prompt: 'Cau 54: Viet luan ve chu de \"Hoc ngoai ngu co tam quan trong nhu the nao?\" (Viet khoang 10-15 cau)\n\nGoi y:\n- Mo bai: Ngay nay, hoc ngoai ngu rat quan trong...\n- Than bai: Ly do 1 (co hoi viec lam), Ly do 2 (giao luu van hoa), Ly do 3 (phat trien ban than)\n- Ket bai: ...',
            hint: 'Dung cau truc: 서론(먼저/요즘) - 본론(첫째/둘째/셋째) - 결론(마지막으로). Su dung cac mau cau trung cap: ~기 때문에, ~(으)면, ~(으)ㄹ 수 있다.',
            sample: '요즘 외국어를 배우는 것이 중요해지고 있습니다. 첫째, 외국어를 할 수 있으면 취업에 도움이 됩니다. 둘째, 다른 문화를 이해할 수 있습니다. 셋째, 자신감을 가질 수 있습니다. 마지막으로, 외국어를 배우는 것은 미래를 위한 투자입니다.',
            explanation: 'Viet luan: 서론(quan trong) + 본론(3 ly do) + 결론(dau tu cho tuong lai).'
        },
        { 
            level: 3, 
            prompt: 'Cau 51: Hay chon tu dung de dien vao cho trong:\n\n"가: _____에 살아요?\n나: 하노이에 살아요."',
            hint: '"Song o dau?" - tu de hoi noi chon bang tieng Han la gi?',
            sample: '어디',
            explanation: '어디에 살아요? = Song o dau?'
        },
        { 
            level: 4, 
            prompt: 'TOPIK 2 Cau 53: Bieu do the hien so gio dung internet cua nguoi dung theo do tuoi. Hay viet doan van mo ta bieu do.\n\nSo lieu:\n- 10-19 tuoi: 5 gio/ngay\n- 20-29 tuoi: 7 gio/ngay\n- 30-39 tuoi: 5 gio/ngay\n- 40-49 tuoi: 3 gio/ngay\n- 50+ tuoi: 2 gio/ngay',
            hint: 'Dung cau truc: ~에 따르면(theo...), ~은/는 ~시간입니다(la ~ gio). So sanh: ~보다( hon), 가장(nhat).',
            sample: '자료에 따르면 20대가 하루에 7시간으로 인터넷을 가장 많이 사용합니다. 10대와 30대는 5시간으로 그다음입니다. 40대는 3시간, 50대 이상은 2시간으로 나이에 따라 인터넷 사용 시간이 다릅니다.',
            explanation: 'Mo ta bieu do: dua ra so lieu, so sanh cac nhom tuoi.'
        }
    ];
    
    let filtered = level !== 'all' 
        ? prompts.filter(p => p.level === parseInt(level))
        : prompts;
    
    _writingPrompt = filtered[Math.floor(Math.random() * filtered.length)];
    
    document.getElementById('writingPrompt').innerHTML = '<div style="white-space:pre-line;font-size:15px;line-height:1.8;">' + _writingPrompt.prompt + '</div>';
    document.getElementById('writingHint').innerHTML = '💡 <strong>Goi y:</strong> ' + _writingPrompt.hint;
    document.getElementById('writingInput').value = '';
    document.getElementById('writingFeedback').innerHTML = '';
    document.getElementById('writingFeedback').className = 'exercise-feedback';
    document.getElementById('writingFeedback').style.display = 'none';
    document.getElementById('writingSample').style.display = 'none';
}

function checkWriting() {
    if (!_writingPrompt) return;
    const userAnswer = document.getElementById('writingInput').value.trim();
    if (!userAnswer) {
        document.getElementById('writingFeedback').innerHTML = '⚠️ Hay nhap cau tra loi cua ban!';
        document.getElementById('writingFeedback').className = 'exercise-feedback show incorrect';
        return;
    }
    
    addXP(3);
    markStudiedToday();
    saveState();
    updateDashboard(); updateGameUI();
    
    document.getElementById('writingFeedback').innerHTML = '✅ Da nhan bai! +3XP. Click "Xem dap an mau" de so sanh!';
    document.getElementById('writingFeedback').className = 'exercise-feedback show correct';
}

function showWritingAnswer() {
    if (!_writingPrompt) return;
    const el = document.getElementById('writingSample');
    el.style.display = 'block';
    el.innerHTML = '<div class="writing-sample-content"><h4>📝 Dap an mau:</h4><p style="white-space:pre-line;">' + _writingPrompt.sample + '</p><hr><p><strong>Giai thich:</strong> ' + _writingPrompt.explanation + '</p></div>';
}

// ===== 📝 MOCK TEST =====
let _mockTest = null;
let _mockTestIndex = 0;
let _mockTestAnswers = {};

function startMockTest() {
    const count = parseInt(document.getElementById('testQuestionCount').value);
    const scope = document.getElementById('testScope').value;
    
    // Generate questions from vocabulary
    let pool = allVocabulary.map((w,i) => ({...w, index: i}));
    if (scope === 'stage2') pool = pool.filter(w => w.lesson >= 4 && w.lesson <= 15);
    else if (scope === 'stage3') pool = pool.filter(w => w.lesson >= 16 && w.lesson <= 30);
    else if (scope === 'stage4') pool = pool.filter(w => w.lesson >= 31 && w.lesson <= 45);
    
    if (pool.length < count) {
        alert('Khong du cau hoi! ' + pool.length + ' tu co san.');
        return;
    }
    
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, count);
    _mockTest = shuffled.map(w => {
        const wrongs = allVocabulary
            .filter(x => x.meaning !== w.meaning)
            .map(x => x.meaning)
            .filter((v,i,a) => a.indexOf(v) === i)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        return {
            kr: w.kr,
            correct: w.meaning,
            options: [w.meaning, ...wrongs].sort(() => Math.random() - 0.5),
            lesson: w.lesson
        };
    });
    
    _mockTestIndex = 0;
    _mockTestAnswers = {};
    
    document.getElementById('mocktestStart').style.display = 'none';
    document.getElementById('mocktestArea').style.display = 'block';
    document.getElementById('mocktestResult').style.display = 'none';
    
    renderMockTestQuestion();
}

function renderMockTestQuestion() {
    if (!_mockTest || _mockTestIndex >= _mockTest.length) {
        finishMockTest();
        return;
    }
    
    const q = _mockTest[_mockTestIndex];
    document.getElementById('mocktestProgress').textContent = 'Cau ' + (_mockTestIndex + 1) + '/' + _mockTest.length;
    
    // Create progress dots
    let dots = '';
    for (let i = 0; i < _mockTest.length; i++) {
        const status = _mockTestAnswers[i] !== undefined ? (_mockTestAnswers[i].normalize() === (_mockTest[i].correct || '').normalize() ? 'correct' : 'wrong') : '';
        dots += '<span class="test-dot ' + status + '" onclick="goToMockTestQuestion(' + i + ')">' + (i+1) + '</span>';
    }
    
    document.getElementById('mocktestQuestion').innerHTML = `
        <div class="test-dots">${dots}</div>
        <div style="text-align:center;padding:20px;">
            <div style="font-size:36px;font-weight:700;font-family:var(--header-font);margin-bottom:8px;">${q.kr}</div>
            <div style="font-size:16px;color:var(--text-secondary);">Tu nay co nghia la gi?</div>
        </div>
        <div class="mocktest-options-list">
            ${q.options.map((opt, oi) => {
                const selected = _mockTestAnswers[_mockTestIndex] === opt;
                return '<div class="mocktest-option ' + (selected ? 'selected' : '') + '" onclick="answerMockTest(' + oi + ')">' + opt + '</div>';
            }).join('')}
        </div>
    `;
    
    const nextBtn = document.getElementById('mocktestNextBtn');
    if (_mockTestAnswers[_mockTestIndex] !== undefined) {
        nextBtn.textContent = _mockTestIndex >= _mockTest.length - 1 ? '🏆 Xem ket qua' : 'Câu tiếp →';
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    
    document.getElementById('testTimer').textContent = '⏱ ' + _mockTestIndex + '/' + _mockTest.length;
}

function answerMockTest(oi) {
    const q = _mockTest[_mockTestIndex];
    _mockTestAnswers[_mockTestIndex] = q.options[oi];
    
    // Show correct/incorrect
    const options = document.querySelectorAll('.mocktest-option');
    options.forEach((el, i) => {
        el.onclick = null;
        if (q.options[i] && q.options[i].normalize() === (q.correct || '').normalize()) el.classList.add('correct');
        else if (i === oi && q.options[i] !== q.correct) el.classList.add('incorrect');
    });
    
    document.getElementById('mocktestNextBtn').disabled = false;
    document.getElementById('mocktestNextBtn').textContent = _mockTestIndex >= _mockTest.length - 1 ? '🏆 Xem ket qua' : 'Câu tiếp →';
}

function nextMockTestQuestion() {
    if (_mockTestAnswers[_mockTestIndex] === undefined) return;
    _mockTestIndex++;
    if (_mockTestIndex >= _mockTest.length) {
        finishMockTest();
    } else {
        renderMockTestQuestion();
    }
}

function goToMockTestQuestion(idx) {
    if (idx >= 0 && idx < _mockTest.length) {
        _mockTestIndex = idx;
        renderMockTestQuestion();
    }
}

function finishMockTest() {
    let correct = 0;
    _mockTest.forEach((q, i) => {
        if (_mockTestAnswers[i] ? _mockTestAnswers[i].normalize() === (q.correct || '').normalize() : false) correct++;
    });
    
    const total = _mockTest.length;
    const pct = Math.round(correct/total*100);
    const passed = correct >= Math.ceil(total * 0.7);
    
    // Award XP
    const xpGained = correct * 5;
    addXP(xpGained);
    markStudiedToday();
    const newAch = checkAchievements();
    saveState();
    
    document.getElementById('mocktestArea').style.display = 'none';
    document.getElementById('mocktestResult').style.display = 'block';
    
    let gradeEmoji, gradeText, gradeColor;
    if (pct >= 90) { gradeEmoji = '🏆'; gradeText = 'Xuat sac!'; gradeColor = '#2e7d32'; }
    else if (pct >= 70) { gradeEmoji = '🎉'; gradeText = 'Dat yeu cau!'; gradeColor = '#1565c0'; }
    else if (pct >= 50) { gradeEmoji = '💪'; gradeText = 'Co co gang!'; gradeColor = '#e65100'; }
    else { gradeEmoji = '😅'; gradeText = 'Can on tap them!'; gradeColor = '#c62828'; }
    
    document.getElementById('mocktestResult').innerHTML = `
        <div style="text-align:center;padding:40px;">
            <div style="font-size:72px;margin-bottom:16px;">${gradeEmoji}</div>
            <h2 style="color:${gradeColor};">${gradeText}</h2>
            <div style="font-size:48px;font-weight:700;margin:16px 0;font-family:var(--header-font);">${correct}/${total}</div>
            <div style="font-size:18px;color:var(--text-secondary);margin-bottom:8px;">${pct}% dung</div>
            <div style="font-size:14px;color:var(--text-secondary);margin-bottom:20px;">+${xpGained}XP</div>
            <div style="height:12px;background:var(--bg);border-radius:6px;max-width:300px;margin:0 auto 20px;overflow:hidden;">
                <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,${gradeColor},${passed ? '#2e7d32' : '#e53935'});border-radius:6px;transition:width 0.8s;"></div>
            </div>
            <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
                <button class="action-btn primary" onclick="startMockTest()" style="font-size:16px;padding:14px 28px;">🔄 Lam lai</button>
                <button class="action-btn secondary" onclick="navigateTo('lessons')">📖 Hoc bai</button>
                <button class="action-btn outline" onclick="restartMockTestWrong()">📝 Xem lai cau sai</button>
            </div>
        </div>
    `;
    
    updateDashboard(); updateGameUI();
    
    if (passed) {
        celebrate('🎉 ' + correct + '/' + total + '! +' + xpGained + 'XP!');
    }
    if (newAch.length > 0) {
        setTimeout(() => newAch.forEach(id => {
            const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
            if (a) celebrate(a.icon + ' ' + a.name + '! ' + a.desc);
        }), 1500);
    }
}

function restartMockTestWrong() {
    // Filter to only wrong answers
    const wrong = _mockTest.filter((q, i) => !_mockTestAnswers[i] || _mockTestAnswers[i].normalize() !== (q.correct || '').normalize());
    if (wrong.length === 0) {
        celebrate('🎉 Khong co cau sai! Ban gioi qua!');
        return;
    }
    _mockTest = wrong;
    _mockTestIndex = 0;
    _mockTestAnswers = {};
    
    document.getElementById('mocktestStart').style.display = 'none';
    document.getElementById('mocktestArea').style.display = 'block';
    document.getElementById('mocktestResult').style.display = 'none';
    renderMockTestQuestion();
}

// ===== 📖 GRAMMAR BANK =====
let _grammarFiltered = [];
let _grammarIndex = 0;

function loadGrammar() {
    const level = document.getElementById('grammarLevel').value;
    const search = (document.getElementById('grammarSearch')?.value||'').toLowerCase();
    
    let items = [...grammarBank];
    if (level !== 'all') items = items.filter(g => g.level.includes(level));
    if (search) items = items.filter(g => g.title.toLowerCase().includes(search) || g.content.toLowerCase().includes(search));
    
    _grammarFiltered = items;
    _grammarIndex = 0;
    
    document.getElementById('grammarCount').textContent = `${items.length} ngữ pháp`;
    
    if (items.length === 0) {
        document.getElementById('grammarGrid').innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary);">Không tìm thấy ngữ pháp phù hợp</div>';
        return;
    }
    
    renderGrammarGrid();
}

function renderGrammarGrid() {
    const grid = document.getElementById('grammarGrid');
    const items = _grammarFiltered;
    
    grid.innerHTML = items.map(g => `
        <div class="grammar-card" onclick="openGrammarDetail('${g.id}')">
            <div class="grammar-card-header">
                <span class="grammar-level">${g.level}</span>
            </div>
            <h3 class="grammar-card-title">${g.title}</h3>
            <p class="grammar-card-desc">${g.content.substring(0, 100)}...</p>
            <div class="grammar-card-example">📝 ${g.examples[0] || ''}</div>
        </div>
    `).join('');
}

function openGrammarDetail(id) {
    const g = grammarBank.find(x => x.id === id);
    if (!g) return;
    
    const examplesList = g.examples.map(ex => 
        `<div class="grammar-example-item" onclick="speakKorean('${ex.replace(/'/g, "\\'")}')">📝 ${ex} 🔊</div>`
    ).join('');
    
    document.getElementById('grammarGrid').innerHTML = `
        <div class="grammar-detail">
            <button class="back-btn" onclick="loadGrammar()">← Quay lại</button>
            <div class="grammar-detail-header">
                <span class="grammar-level">${g.level}</span>
                <span class="grammar-xp">+3XP 🎮</span>
            </div>
            <h2 class="grammar-detail-title">${g.title}</h2>
            <div class="grammar-detail-content">
                ${g.content.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
            </div>
            <h3 style="margin-top:20px;margin-bottom:12px;font-size:15px;">💡 Ví dụ</h3>
            <div class="grammar-examples-list">${examplesList}</div>
            <div style="margin-top:20px;display:flex;gap:10px;">
                <button class="action-btn primary" onclick="markGrammarLearned('${g.id}')">✅ Đã học +3XP</button>
                <button class="action-btn outline" onclick="loadGrammar()">📖 Danh sách</button>
            </div>
        </div>
    `;
}

function markGrammarLearned(id) {
    if (!state.grammarLearned) state.grammarLearned = [];
    if (!state.grammarLearned.includes(id)) {
        state.grammarLearned.push(id);
        state.dailyProgress.grammar = (state.dailyProgress.grammar || 0) + 1;
        addXP(3);
        markStudiedToday();
        saveState();
        updateDashboard(); updateGameUI();
        celebrate('🎉 +3XP! Đã học ngữ pháp!');
        playSound('success');
    }
    loadGrammar();
}

function filterGrammar() {
    loadGrammar();
}

// ===== 🎯 STUDY FLOW ENGINE =====
const studyFlow = {
    lesson: null,
    stage: 0, // 0=start, 1=learn, 2=review, 3=quiz, 4=complete
    vocabIndex: 0,
    quizIndex: 0,
    quizCorrect: 0,
    quizTotal: 0,
    quizAnswered: false,
    vocabReviewed: 0,

    getNextLesson() {
        for (let i = 0; i < lessonsData.length; i++) {
            if (!state.completedLessons.includes(lessonsData[i].id)) {
                return lessonsData[i];
            }
        }
        return lessonsData[lessonsData.length - 1];
    },

    start() {
        this.lesson = this.getNextLesson();
        this.stage = 1;
        this.vocabIndex = 0;
        this.quizIndex = 0;
        this.quizCorrect = 0;
        this.quizTotal = 0;
        this.quizAnswered = false;
        this.vocabReviewed = 0;

        document.getElementById('studyFlowStart').style.display = 'none';
        document.getElementById('studyFlowActive').style.display = 'block';
        document.getElementById('studyFlowComplete').style.display = 'none';

        this.updateLessonInfo();
        this.renderStage();
    },

    updateLessonInfo() {
        document.querySelector('.study-lesson-badge').textContent = `Bài ${this.lesson.id}`;
        document.querySelector('.study-lesson-title').textContent = this.lesson.title;
    },

    renderStage() {
        // Update progress steps
        document.querySelectorAll('.study-progress-step').forEach((el, i) => {
            const stepNum = i + 1;
            el.classList.toggle('active', stepNum === this.stage);
            el.classList.toggle('done', stepNum < this.stage);
        });

        switch (this.stage) {
            case 1: this.renderLearn(); break;
            case 2: this.renderReview(); break;
            case 3: this.renderQuiz(); break;
            case 4: this.renderComplete(); break;
        }

        // Update nav buttons
        const prevBtn = document.getElementById('studyPrevBtn');
        const nextBtn = document.getElementById('studyNextBtn');
        if (this.stage === 1) {
            prevBtn.style.visibility = 'hidden';
        } else {
            prevBtn.style.visibility = 'visible';
        }
        if (this.stage === 4) {
            nextBtn.textContent = '🎉 Hoàn thành';
            nextBtn.disabled = false;
        } else if (this.stage === 3 && !this.quizAnswered) {
            nextBtn.textContent = '✍️ Chọn đáp án';
            nextBtn.disabled = true;
        } else if (this.stage === 3) {
            nextBtn.textContent = this.quizIndex >= this.lesson.vocab.length ? '✅ Xem kết quả' : 'Câu tiếp →';
            nextBtn.disabled = false;
        } else {
            nextBtn.textContent = 'Tiếp theo →';
            nextBtn.disabled = false;
        }
    },

    renderLearn() {
        const lesson = this.lesson;
        const vocabCards = lesson.vocab.slice(0, 12).map(v => `
            <div class="study-vocab-item" onclick="speakKorean('${v.kr.replace(/'/g, "\\'")}')">
                <div class="sv-kr">${v.kr}</div>
                <div class="sv-pron">${v.pronunciation}</div>
                <div class="sv-mean">${v.meaning}</div>
            </div>
        `).join('');

        const grammarHTML = lesson.grammar.slice(0, 2).map(g => `
            <div class="study-grammar-card">
                <h4>📖 ${g.title}</h4>
                <p>${g.content.substring(0, 200)}</p>
                ${g.example ? `<div class="grammar-example" onclick="speakKorean('${g.example.replace(/'/g, "\\'")}')">📝 ${g.example} 🔊</div>` : ''}
            </div>
        `).join('');

        const examplesHTML = lesson.examples.slice(0, 5).map(e => `
            <div class="study-example-item" onclick="speakKorean('${e.kr.replace(/'/g, "\\'")}')">
                <span class="se-kr">${e.kr}</span>
                <span class="se-vi">${e.vi}</span>
            </div>
        `).join('');

        document.getElementById('studyContent').innerHTML = `
            <div class="study-section-title">
                <h3>📖 Học bài: ${lesson.title}</h3>
                <p style="color:var(--text-secondary);font-size:14px;margin-top:4px;">${lesson.description} • Click vào từ để nghe 🔊</p>
            </div>
            <h4 style="margin-top:20px;margin-bottom:10px;">📝 Từ vựng (${lesson.vocab.length} từ)</h4>
            <div class="study-vocab-list">${vocabCards}</div>
            <h4 style="margin-top:24px;margin-bottom:10px;">📖 Ngữ pháp</h4>
            ${grammarHTML}
            <h4 style="margin-top:24px;margin-bottom:10px;">💡 Ví dụ</h4>
            <div class="study-examples-list">${examplesHTML}</div>
            <div style="text-align:center;margin-top:20px;padding:12px;background:var(--bg);border-radius:8px;font-size:13px;color:var(--text-light);">
                ✅ Đã xem xong nội dung bài? Nhấn "Tiếp theo" để ôn từ vựng!
            </div>
        `;
    },

    renderReview() {
        const lesson = this.lesson;
        if (lesson.vocab.length === 0) {
            this.stage = 3;
            this.renderStage();
            return;
        }

        const idx = Math.min(this.vocabIndex, lesson.vocab.length - 1);
        const v = lesson.vocab[idx];
        const total = lesson.vocab.length;
        const pct = Math.round((idx + 1) / total * 100);

        document.getElementById('studyContent').innerHTML = `
            <div style="text-align:center;margin-bottom:12px;">
                <div style="font-size:13px;color:var(--text-secondary);">🃏 Ôn từ • ${idx + 1}/${total}</div>
                <div class="study-q-progress">
                    <div class="study-q-progress-fill" style="width:${pct}%"></div>
                </div>
            </div>
            <div class="study-card-container">
                <div class="study-card" id="studyReviewCard" onclick="this.classList.toggle('flipped')">
                    <span class="sc-counter">${idx + 1}/${total}</span>
                    <div class="sc-word">${v.kr}</div>
                    <div class="sc-pron">${v.pronunciation || ''}</div>
                    <div class="sc-hint">👆 Nhấn để xem nghĩa</div>
                </div>
                <div class="study-card-actions">
                    <button class="fc-btn forget" onclick="studyFlow.reviewWord(0)">🔄 Nhắc lại</button>
                    <button class="fc-btn good" onclick="studyFlow.reviewWord(1)">✅ Đã nhớ</button>
                </div>
            </div>
        `;

        // After rendering, auto-flip to show meaning after a moment
        setTimeout(() => {
            const card = document.getElementById('studyReviewCard');
            if (card) {
                card.classList.add('flipped');
                card.innerHTML = `
                    <span class="sc-counter">${idx + 1}/${total}</span>
                    <div class="sc-word">${v.meaning}</div>
                    <div class="sc-pron">${v.kr}</div>
                    <div class="sc-hint">👆 Nhấn để quay lại</div>
                `;
            }
        }, 1200);
    },

    reviewWord(rating) {
        this.vocabReviewed++;
        // Mark vocab as learned in state
        const lesson = this.lesson;
        if (this.vocabIndex < lesson.vocab.length) {
            const v = lesson.vocab[this.vocabIndex];
            const idx = allVocabulary.findIndex(w => w.kr === v.kr);
            if (idx >= 0) {
                if (rating >= 1) {
                    const curr = state.vocabStatus[idx];
                    if (!curr || curr === 'new') state.vocabStatus[idx] = 'learning';
                    else if (curr === 'learning') state.vocabStatus[idx] = 'mastered';
                } else {
                    state.vocabStatus[idx] = 'new';
                }
            }
        }
        this.vocabIndex++;
        if (this.vocabIndex >= lesson.vocab.length) {
            this.next();
        } else {
            this.renderReview();
        }
    },

    renderQuiz() {
        const lesson = this.lesson;
        if (lesson.vocab.length < 3) {
            // Not enough vocab, skip quiz
            this.stage = 4;
            this.renderComplete();
            return;
        }

        // Get current quiz word
        const vocabItems = [...lesson.vocab].sort(() => Math.random() - 0.5);
        const qIdx = this.quizIndex;
        if (qIdx >= Math.min(lesson.vocab.length, 5)) {
            this.stage = 4;
            this.renderComplete();
            return;
        }

        // Store shuffled vocab for consistent questions
        if (!this._quizVocab) {
            this._quizVocab = vocabItems.slice(0, Math.min(lesson.vocab.length, 5));
            this.quizTotal = this._quizVocab.length;
        }

        const q = this._quizVocab[qIdx];
        if (!q) {
            this.stage = 4;
            this.renderComplete();
            return;
        }

        // Generate options
        const correct = q.meaning;
        const wrongs = allVocabulary
            .filter(v => v.meaning !== correct)
            .map(v => v.meaning)
            .filter((v, i, a) => a.indexOf(v) === i)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
        const options = [correct, ...wrongs].sort(() => Math.random() - 0.5);

        const pct = Math.round((qIdx) / this.quizTotal * 100);
        this.quizAnswered = false;
        window._studyQuizAnswer = correct;

        document.getElementById('studyContent').innerHTML = `
            <div style="text-align:center;margin-bottom:12px;">
                <div style="font-size:13px;color:var(--text-secondary);">✍️ Luyện tập • ${qIdx + 1}/${this.quizTotal}</div>
                <div class="study-q-progress">
                    <div class="study-q-progress-fill" style="width:${pct}%"></div>
                </div>
            </div>
            <div class="study-quiz-question">
                <div class="sq-kr">${q.kr}</div>
                <div class="sq-prompt">Từ này có nghĩa là gì?</div>
            </div>
            <div class="study-quiz-options">
                ${options.map((opt, i) => `
                    <div class="study-quiz-option" onclick="studyFlow.checkQuiz(this, '${opt.replace(/'/g, "\\'")}')">${opt}</div>
                `).join('')}
            </div>
            <div id="studyQuizFeedback" style="text-align:center;margin-top:12px;font-size:14px;font-weight:600;min-height:24px;"></div>
        `;
    },

    checkQuiz(el, answer) {
        if (this.quizAnswered) return;
        this.quizAnswered = true;

        const correct = window._studyQuizAnswer;
        const isCorrect = answer === correct;
        if (isCorrect) this.quizCorrect++;

        // Mark options
        document.querySelectorAll('.study-quiz-option').forEach(o => {
            const val = o.textContent;
            if (val === correct) o.classList.add('correct');
            else if (o === el && !isCorrect) o.classList.add('incorrect');
            o.style.cursor = 'default';
            o.onclick = null;
        });
        if (el) el.classList.add(isCorrect ? 'correct' : 'incorrect');

        const fb = document.getElementById('studyQuizFeedback');
        if (isCorrect) {
            fb.textContent = '✅ Đúng! +5XP';
            fb.style.color = 'var(--success)';
            state.exerciseScore.correct++;
        } else {
            fb.textContent = `❌ Đáp án: ${correct}`;
            fb.style.color = 'var(--error)';
        }
        state.exerciseScore.total++;
        state.dailyProgress.exercises = (state.dailyProgress.exercises || 0) + 1;
        if (isCorrect) {
            state.dailyProgress.correct = (state.dailyProgress.correct || 0) + 1;
        }
        saveState();

        // Enable next button
        const nextBtn = document.getElementById('studyNextBtn');
        nextBtn.disabled = false;
        if (this.quizIndex >= this.quizTotal - 1) {
            nextBtn.textContent = '✅ Xem kết quả';
        } else {
            nextBtn.textContent = 'Câu tiếp →';
        }
    },

    renderComplete() {
        const lesson = this.lesson;
        const totalXP = 50 + (this.quizCorrect * 5) + (this.vocabReviewed * 2);

        // Award XP and mark lesson complete
        if (!state.completedLessons.includes(lesson.id)) {
            state.completedLessons.push(lesson.id);
            state.dailyProgress.lessons = (state.dailyProgress.lessons || 0) + 1;
            state.dailyProgress.flashcards = (state.dailyProgress.flashcards || 0) + this.vocabReviewed;
            const leveledUp = addXP(totalXP);
            markStudiedToday();
            saveState();

            if (leveledUp) { fireConfetti(); playSound('levelup'); }
            else { playSound('success'); }

            const newAch = checkAchievements();
            if (newAch.length > 0) {
                setTimeout(() => newAch.forEach(id => {
                    const a = ACHIEVEMENTS_LIST.find(x => x.id === id);
                    if (a) celebrate(`${a.icon} MỞ KHÓA: ${a.name}! ${a.desc}`);
                }), 1500);
            }

            updateDashboard();
            updateProgress();
            renderLessonList();
            renderRoadmap();
            renderVocab();
            updateGameUI();
        }

        document.getElementById('studyFlowActive').style.display = 'none';
        document.getElementById('studyFlowComplete').style.display = 'block';

        document.getElementById('studyResultXP').textContent = `+${totalXP}`;
        document.getElementById('studyResultVocab').textContent = `${this.vocabReviewed}`;
        document.getElementById('studyResultCorrect').textContent = `${this.quizCorrect}/${this.quizTotal}`;

        // Show confetti if passed quiz
        if (this.quizCorrect >= this.quizTotal * 0.7) {
            fireConfetti();
        }

        const topikInfo = getTopikLevel();
        const nextLesson = this.getNextLesson();
        let msg = `🎉 Bài ${lesson.id} hoàn thành! `;
        if (nextLesson.id !== lesson.id) {
            msg += `Bài tiếp theo: <strong>${nextLesson.title}</strong>`;
        } else {
            msg += `🎊 Bạn đã hoàn thành TẤT CẢ 45 bài! TOPIK 2 đang chờ!`;
        }
        document.querySelector('.study-result h3').innerHTML = msg;

        // Clean up quiz data
        this._quizVocab = null;
        window._studyQuizAnswer = null;
    },

    next() {
        if (this.stage === 3 && !this.quizAnswered && this.quizIndex < this.quizTotal) {
            return; // Must answer first
        }
        if (this.stage === 3 && this.quizAnswered) {
            this.quizIndex++;
            this.quizAnswered = false;
            if (this.quizIndex >= this.quizTotal) {
                this.stage = 4;
                this.renderComplete();
                return;
            }
            this.renderQuiz();
            return;
        }
        if (this.stage < 4) {
            this.stage++;
            this.renderStage();
        } else {
            this.renderComplete();
        }
    },

    prev() {
        if (this.stage > 1) {
            this.stage--;
            if (this.stage === 3) {
                this.quizIndex = Math.max(0, this.quizIndex - 1);
                this.quizAnswered = true; // Allow going back
            }
            this.renderStage();
        }
    },


    nextLesson() {
        // Find next lesson
        const next = this.getNextLesson();
        if (next && next.id !== this.lesson.id) {
            document.getElementById('studyFlowComplete').style.display = 'none';
            document.getElementById('studyFlowActive').style.display = 'block';
            this.lesson = next;
            this.stage = 1;
            this.vocabIndex = 0;
            this.quizIndex = 0;
            this.quizCorrect = 0;
            this.quizTotal = 0;
            this.quizAnswered = false;
            this.vocabReviewed = 0;
            this._quizVocab = null;
            this.updateLessonInfo();
            this.renderStage();
        } else {
            celebrate('🎊 TẤT CẢ BÀI ĐÃ HOÀN THÀNH! TOPIK 2 CHỜ BẠN!');
            this.quit();
        }
    },

    restart() {
        document.getElementById('studyFlowComplete').style.display = 'none';
        document.getElementById('studyFlowActive').style.display = 'block';
        this.stage = 1;
        this.vocabIndex = 0;
        this.quizIndex = 0;
        this.quizCorrect = 0;
        this.quizTotal = 0;
        this.quizAnswered = false;
        this.vocabReviewed = 0;
        this._quizVocab = null;
        this.updateLessonInfo();
        this.renderStage();
    },

    quit() {
        document.getElementById('studyFlowStart').style.display = 'block';
        document.getElementById('studyFlowActive').style.display = 'none';
        document.getElementById('studyFlowComplete').style.display = 'none';
        this._quizVocab = null;
        window._studyQuizAnswer = null;
        updateDashboard();
    },

    updatePreviewStats() {
        const next = this.getNextLesson();
        const el = document.getElementById('studyPreviewStats');
        if (el) {
            el.innerHTML = `
                <span>📖 Bài tiếp theo: <strong>Bài ${next.id}: ${next.title}</strong></span>
                <span>🔥 Streak: <strong>${state.streak.count}</strong> ngày</span>
                <span>⚡ Level: <strong>${state.level}</strong></span>
            `;
        }
    }
};

// ===== EXPORT =====
window.studyFlow = studyFlow;
window.navigateTo = navigateTo; window.openLesson = openLesson; window.closeLesson = closeLesson;
window.completeLesson = completeLesson; window.nextLesson = nextLesson; window.prevLesson = prevLesson;
window.filterFlashcards = filterFlashcards; window.rateFlashcard = rateFlashcard;
window.loadExercise = loadExercise; window.selectExerciseOption = selectExerciseOption; window.checkExercise = checkExercise;
window.filterVocab = filterVocab; window.renderLessonList = renderLessonList;
window.answerQuiz = answerQuiz; window.showLessonQuiz = showLessonQuiz;
window.sendToAI = sendToAI; window.saveApiKey = saveApiKey; window.resetApiKey = resetApiKey;
window.speakKorean = speakKorean; window.playListeningExercise = playListeningExercise; window.toggleListenMode = toggleListenMode; window.startTopikListening = startTopikListening; window.checkTopikListenAnswer = checkTopikListenAnswer; window.checkListenWordAnswer = checkListenWordAnswer;
window.loadReading = loadReading; window.selectReadingOption = selectReadingOption; window.checkReading = checkReading;
window.loadWriting = loadWriting; window.checkWriting = checkWriting; window.showWritingAnswer = showWritingAnswer;
window.startMockTest = startMockTest; window.answerMockTest = answerMockTest; window.nextMockTestQuestion = nextMockTestQuestion; window.goToMockTestQuestion = goToMockTestQuestion; window.restartMockTestWrong = restartMockTestWrong;
window.loadGrammar = loadGrammar; window.filterGrammar = filterGrammar; window.openGrammarDetail = openGrammarDetail; window.markGrammarLearned = markGrammarLearned;
window.claimQuest = claimQuest; window.fireConfetti = fireConfetti; window.playSound = playSound; window.toggleNotif = toggleNotif;
console.log('🎮 Korean Quest loaded! Level', state.level, '•', state.xp, 'XP');
