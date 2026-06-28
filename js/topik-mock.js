// ===== 📝 TOPIK 2 MOCK TEST ENGINE — 10 ĐỀ THI THỬ =====
// Mỗi đề: 30 câu đọc (TOPIK 2 format), chấm điểm, phân tích

// ===== ĐỀ THI THỬ SẴN #1-#5 (Đọc) =====
const topikMockTests = [
  {
    id:'MT01',title:'TOPIK 2 - Đề thi thử #1',timeLimit:50,totalQuestions:30,
    difficulty:'Trung bình',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT02',title:'TOPIK 2 - Đề thi thử #2',timeLimit:50,totalQuestions:30,
    difficulty:'Trung bình',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT03',title:'TOPIK 2 - Đề thi thử #3',timeLimit:50,totalQuestions:30,
    difficulty:'Khó',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT04',title:'TOPIK 2 - Đề thi thử #4',timeLimit:50,totalQuestions:30,
    difficulty:'Trung bình',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT05',title:'TOPIK 2 - Đề thi thử #5',timeLimit:50,totalQuestions:30,
    difficulty:'Khó',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT06',title:'TOPIK 2 - Đề thi thử #6',timeLimit:50,totalQuestions:30,
    difficulty:'Dễ',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT07',title:'TOPIK 2 - Đề thi thử #7',timeLimit:50,totalQuestions:30,
    difficulty:'Trung bình',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT08',title:'TOPIK 2 - Đề thi thử #8',timeLimit:50,totalQuestions:30,
    difficulty:'Khó',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT09',title:'TOPIK 2 - Đề thi thử #9',timeLimit:50,totalQuestions:30,
    difficulty:'Trung bình',
    sections:[{name:'Đọc hiểu',count:30}]
  },
  {
    id:'MT10',title:'TOPIK 2 - Đề thi thử #10',timeLimit:70,totalQuestions:50,
    difficulty:'Cao - Full TOPIK',
    sections:[{name:'Đọc hiểu',count:30},{name:'Nghe hiểu',count:20}]
  }
];

// Helper: sinh câu hỏi đọc từ reading bank
function generateMockTestQuestions(testId) {
    const allReadings = typeof getAllReadings === 'function' ? getAllReadings() : 
        (typeof topikReadingBank !== 'undefined' ? topikReadingBank : []);
    const extraReadings = typeof readingExtra !== 'undefined' ? readingExtra : [];
    const combined = [...allReadings, ...extraReadings];
    if (combined.length < 5) return null;
    
    const shuffled = [...combined].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 7 + Math.floor(Math.random() * 4));
    
    const questions = [];
    selected.forEach(reading => {
        if (reading.questions && reading.questions.length > 0) {
            const qs = [...reading.questions];
            const count = Math.min(2 + Math.floor(Math.random() * 2), qs.length);
            for (let i = 0; i < count && qs.length > 0; i++) {
                const qi = Math.floor(Math.random() * qs.length);
                questions.push({
                    passage: reading.passage ? reading.passage.substring(0, 300) : '',
                    ...qs.splice(qi, 1)[0]
                });
            }
        }
    });
    
    return {
        id: testId,
        questions: questions.slice(0, 30),
        timeLimit: 50,
        passed: false,
        score: 0
    };
}

// ===== Lưu kết quả thi =====
function saveMockTestResult(testId, correct, total, answers) {
    const results = JSON.parse(localStorage.getItem('topikMockResults') || '[]');
    results.push({
        testId,
        date: new Date().toISOString(),
        correct,
        total,
        percentage: Math.round(correct / total * 100),
        answers
    });
    localStorage.setItem('topikMockResults', JSON.stringify(results));
    return results;
}

// ===== 12-MONTH ROADMAP =====
const topikRoadmap = {
    title: '🎯 Lộ trình 12 tháng → TOPIK 2',
    description: 'Mỗi ngày 60-90 phút, 6 ngày/tuần',
    phases: [
        {
            month: 1, 
            title: 'Tháng 1: Hangul & Cơ bản',
            goal: 'Đọc viết thành thạo Hangul, chào hỏi cơ bản',
            dailyTime: '45 phút',
            tasks: [
                'Tuần 1: Học bảng chữ cái Hangul (nguyên âm + phụ âm)',
                'Tuần 2: Ghép vần + batchim + phát âm cơ bản',
                'Tuần 3: Chào hỏi, giới thiệu bản thân (~입니다/입니까)',
                'Tuần 4: Số đếm Hán-Hàn + ngày tháng, bài 1-3 trên app'
            ],
            appLessons: [1, 2, 3],
            complete: false
        },
        {
            month: 2,
            title: 'Tháng 2: Sơ cấp 1 — Cơ bản',
            goal: 'Nắm vững ~아/어요, thì quá khứ, từ vựng 300+',
            dailyTime: '60 phút',
            tasks: [
                'Tuần 5-6: Động từ cơ bản, ~습니다/ㅂ니다, SOV cấu trúc',
                'Tuần 7: Thể thân mật 해요체, câu phủ định 안/못',
                'Tuần 8: Từ để hỏi, trợ từ 은/는/이/가/을/를'
            ],
            appLessons: [4, 5, 6, 7, 8, 9, 10],
            complete: false
        },
        {
            month: 3,
            title: 'Tháng 3: Sơ cấp 1 — Hoàn thiện',
            goal: 'Từ vựng 600+, giao tiếp cơ bản thành thạo',
            dailyTime: '60 phút',
            tasks: [
                'Tuần 9-10: Trợ từ 에/에서/부터/까지, thì tương lai',
                'Tuần 11-12: Tổng ôn + bài tập tổng hợp, thi thử cơ bản'
            ],
            appLessons: [11, 12, 13, 14, 15],
            complete: false
        },
        {
            month: 4,
            title: 'Tháng 4: Sơ cấp 2 — Mở rộng',
            goal: 'Bất quy tắc, tiếp diễn, từ vựng 1000+',
            dailyTime: '60-75 phút',
            tasks: [
                'Tuần 13-14: Bất quy tắc ㄷ, ㅂ, ㅅ, ㅎ, 르, 으',
                'Tuần 15-16: ~고 있다, ~아/어 보다, ~(으)러 가다'
            ],
            appLessons: [16, 17, 18, 19, 20],
            complete: false
        },
        {
            month: 5,
            title: 'Tháng 5: Sơ cấp 2 — Ngữ pháp',
            goal: 'Nguyên nhân, mục đích, khả năng, từ vựng 1500+',
            dailyTime: '75 phút',
            tasks: [
                'Tuần 17-18: ~아/어서, ~기 위해, ~(으)ㄹ 수 있다',
                'Tuần 19-20: Trước/sau khi, danh từ hóa ~는 것'
            ],
            appLessons: [21, 22, 23, 24, 25],
            complete: false
        },
        {
            month: 6,
            title: 'Tháng 6: Sơ cấp 2 → TOPIK 1',
            goal: 'Đỗ TOPIK 1 (cấp 2), từ vựng 2000+, thi thử',
            dailyTime: '90 phút',
            tasks: [
                'Tuần 21-22: So sánh, nối câu, điều kiện',
                'Tuần 23: Kính ngữ, đề nghị, rủ rê',
                'Tuần 24: Luyện đề TOPIK 1 + thi thử'
            ],
            appLessons: [26, 27, 28, 29, 30],
            complete: false
        },
        {
            month: 7,
            title: 'Tháng 7: Trung cấp 1 — Bị động & Sai khiến',
            goal: 'Bị động, sai khiến, tường thuật, từ vựng 2500+',
            dailyTime: '75 phút',
            tasks: [
                'Tuần 25-26: Bị động ~이/히/리/기',
                'Tuần 27-28: Sai khiến, tường thuật gián tiếp'
            ],
            appLessons: [31, 32, 33, 34, 35],
            complete: false
        },
        {
            month: 8,
            title: 'Tháng 8: Trung cấp 1 — Suy đoán & Nguyên nhân',
            goal: 'Suy đoán, nguyên nhân, từ vựng 3000+',
            dailyTime: '75 phút',
            tasks: [
                'Tuần 29-30: ~것 같다, ~기 때문에, ~(으)ㄴ/는/(으)ㄹ 때',
                'Tuần 31-32: ~다가, ~아/어도, ~(으)ㄹ수록'
            ],
            appLessons: [36, 37, 38, 39, 40],
            complete: false
        },
        {
            month: 9,
            title: 'Tháng 9: Trung cấp 1 — Giả định & Kinh nghiệm',
            goal: 'Giả định, kinh nghiệm, thành ngữ, từ vựng 3500+',
            dailyTime: '75 phút',
            tasks: [
                'Tuần 33-34: ~았/었으면 좋겠다, ~은/ㄴ 적이 있다',
                'Tuần 35-36: Thành ngữ + tổng ôn trung cấp 1'
            ],
            appLessons: [41, 42, 43, 44, 45],
            complete: false
        },
        {
            month: 10,
            title: 'Tháng 10: Trung cấp 2 — Ngữ pháp nâng cao',
            goal: 'Ngữ pháp nâng cao, từ vựng 4000+, luyện đọc',
            dailyTime: '90 phút',
            tasks: [
                'Tuần 37-38: Grammar bank 1-20 (trung cấp 1)',
                'Tuần 39-40: Grammar bank 21-45 (trung cấp 2) + đọc báo'
            ],
            appLessons: [],
            complete: false
        },
        {
            month: 11,
            title: 'Tháng 11: Luyện đề — Đọc + Nghe',
            goal: 'Luyện đọc 100 bài + nghe 50 câu + đề thi thử',
            dailyTime: '90-120 phút',
            tasks: [
                'Tuần 41-42: Luyện đọc tốc độ (70 phút/50 câu)',
                'Tuần 43-44: Luyện nghe (60 phút/50 câu) + mock test 1-5'
            ],
            appLessons: [],
            complete: false
        },
        {
            month: 12,
            title: 'Tháng 12: Tổng ôn & Thi thử',
            goal: 'TOPIK 2 (cấp 3-4), hoàn thiện kỹ năng',
            dailyTime: '120 phút',
            tasks: [
                'Tuần 45-46: Mock test 6-10 (full: đọc+nghe+viết)',
                'Tuần 47: Sửa lỗi sai, ôn điểm yếu',
                'Tuần 48: Tổng ôn + thi thử cuối cùng'
            ],
            appLessons: [],
            complete: false
        }
    ],
    
    // Tổng kết
    getTotalWords() {
        return '~5000+ từ vựng';
    },
    getTotalGrammar() {
        return '~250+ ngữ pháp';
    },
    getTotalReading() {
        return '100+ bài đọc';
    }
};

console.log('📅 TOPIK 2 Roadmap: 12 tháng lộ trình chi tiết loaded');
console.log(`📚 Mục tiêu: ${topikRoadmap.getTotalWords()}, ${topikRoadmap.getTotalGrammar()}, ${topikRoadmap.getTotalReading()}`);
