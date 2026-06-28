// ===== FULL CURRICULUM: 45 BÀI HỌC → TOPIK 2 =====
// Lộ trình 12 tháng, mỗi ngày 60 phút

const roadmapStages = [
    {
        id: 1,
        name: 'Tuần 1: Hangul (Bảng chữ cái)',
        time: 'Tuần 1',
        emoji: '🟢',
        goal: 'Đọc & viết được Hangul',
        lessons: [1, 2, 3]
    },
    {
        id: 2,
        name: 'Tháng 1-3: Sơ cấp 1',
        time: '3 tháng',
        emoji: '🟢',
        goal: 'Giao tiếp cơ bản, ~800 từ',
        lessons: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    },
    {
        id: 3,
        name: 'Tháng 4-6: Sơ cấp 2 → TOPIK 1',
        time: '3 tháng',
        emoji: '🟡',
        goal: 'Thi đỗ TOPIK 1 (cấp 2), ~2000 từ',
        lessons: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    },
    {
        id: 4,
        name: 'Tháng 7-12: Trung cấp → TOPIK 2',
        time: '6 tháng',
        emoji: '🟠',
        goal: 'Thi đỗ TOPIK 2 (cấp 3-4), ~4000 từ',
        lessons: [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
    }
];

const lessonsData = [
    // ===== STAGE 1: HANGUL (Bài 1-3) =====
    {
        id: 1, title: 'Bảng chữ cái — Nguyên âm',
        description: '10 nguyên âm cơ bản: ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ',
        level: '🟢 GĐ 1: Hangul', stage: 1,
        vocab: [
            { kr: 'ㅏ', pronunciation: '[a]', meaning: 'a - như "a" trong ba' },
            { kr: 'ㅑ', pronunciation: '[ya]', meaning: 'ya - như "ya" trong y tá' },
            { kr: 'ㅓ', pronunciation: '[eo]', meaning: 'ơ - miệng mở rộng' },
            { kr: 'ㅕ', pronunciation: '[yeo]', meaning: 'yơ' },
            { kr: 'ㅗ', pronunciation: '[o]', meaning: 'ô - môi tròn' },
            { kr: 'ㅛ', pronunciation: '[yo]', meaning: 'yô' },
            { kr: 'ㅜ', pronunciation: '[u]', meaning: 'u - môi tròn hẹp' },
            { kr: 'ㅠ', pronunciation: '[yu]', meaning: 'yu' },
            { kr: 'ㅡ', pronunciation: '[eu]', meaning: 'ư - miệng căng ngang' },
            { kr: 'ㅣ', pronunciation: '[i]', meaning: 'i' }
        ],
        grammar: [
            { title: 'Nguyên âm cơ bản', content: '10 nguyên âm cơ bản là nền tảng. Cách nhớ: ㅏ(a) giống chữ "a" có cành phải. ㅓ(eo) ngược lại. ㅗ(ô) vạch ngang trên. ㅜ(u) vạch ngang dưới. ㅣ(i) thẳng đứng.' }
        ],
        examples: [
            { kr: '아', vi: 'a — thán từ' }, { kr: '오', vi: 'o — số 5' },
            { kr: '이', vi: 'i — răng, cái này' }, { kr: '우', vi: 'u — bên phải' }
        ],
        dialogues: [
            { kr: '아, 한국어!', vi: 'A, tiếng Hàn!', role: 'a' },
            { kr: '네, 한국어예요.', vi: 'Vâng, là tiếng Hàn.', role: 'b' }
        ]
    },
    {
        id: 2, title: 'Bảng chữ cái — Phụ âm',
        description: '14 phụ âm cơ bản và cách ghép với nguyên âm',
        level: '🟢 GĐ 1: Hangul', stage: 1,
        vocab: [
            { kr: 'ㄱ', pronunciation: '[g/k]', meaning: 'g/k' }, { kr: 'ㄴ', pronunciation: '[n]', meaning: 'n' },
            { kr: 'ㄷ', pronunciation: '[d/t]', meaning: 'd/t' }, { kr: 'ㄹ', pronunciation: '[r/l]', meaning: 'r/l nhẹ' },
            { kr: 'ㅁ', pronunciation: '[m]', meaning: 'm' }, { kr: 'ㅂ', pronunciation: '[b/p]', meaning: 'b/p' },
            { kr: 'ㅅ', pronunciation: '[s]', meaning: 's' }, { kr: 'ㅇ', pronunciation: '[ng/-]', meaning: 'câm/ng' },
            { kr: 'ㅈ', pronunciation: '[j]', meaning: 'j' }, { kr: 'ㅊ', pronunciation: '[ch]', meaning: 'ch bật hơi' },
            { kr: 'ㅋ', pronunciation: '[k]', meaning: 'k bật hơi' }, { kr: 'ㅌ', pronunciation: '[t]', meaning: 't bật hơi' },
            { kr: 'ㅍ', pronunciation: '[p]', meaning: 'p bật hơi' }, { kr: 'ㅎ', pronunciation: '[h]', meaning: 'h' }
        ],
        grammar: [
            { title: 'Cấu tạo âm tiết', content: 'Mỗi ô chữ: (Phụ âm đầu) + Nguyên âm (+ Phụ âm cuối). VD: ㄱ+ㅏ=가. ㄱ+ㅏ+ㄴ=간.' }
        ],
        examples: [
            { kr: '가다', vi: 'đi' }, { kr: '나', vi: 'tôi' }, { kr: '사람', vi: 'người' },
            { kr: '아이', vi: 'trẻ em' }, { kr: '한국', vi: 'Hàn Quốc' }
        ]
    },
    {
        id: 3, title: 'Batchim & Phát âm',
        description: '7 âm cuối và quy tắc nối âm cơ bản',
        level: '🟢 GĐ 1: Hangul', stage: 1,
        vocab: [
            { kr: '학교', pronunciation: '[hakgyo]', meaning: 'trường học' }, { kr: '책', pronunciation: '[chaek]', meaning: 'sách' },
            { kr: '밥', pronunciation: '[bap]', meaning: 'cơm' }, { kr: '문', pronunciation: '[mun]', meaning: 'cửa' },
            { kr: '강', pronunciation: '[gang]', meaning: 'sông' }, { kr: '음악', pronunciation: '[eumak]', meaning: 'âm nhạc' },
            { kr: '학생', pronunciation: '[hak-saeng]', meaning: 'học sinh' }
        ],
        grammar: [
            { title: '7 âm cuối Batchim', content: 'Phụ âm cuối chỉ có 7 cách đọc: ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ. Các phụ âm khác khi cuối đều đọc thành 1 trong 7 âm này.' }
        ],
        examples: [
            { kr: '학교에 가요', vi: 'Đi đến trường' }, { kr: '책을 읽어요', vi: 'Đọc sách' },
            { kr: '밥을 먹어요', vi: 'Ăn cơm' }, { kr: '음악을 들어요', vi: 'Nghe nhạc' }
        ]
    },

    // ===== STAGE 2: SƠ CẤP 1 (Bài 4-15) =====
    {
        id: 4, title: 'Chào hỏi & Giới thiệu',
        description: 'Xin chào, cảm ơn, xin lỗi và giới thiệu bản thân',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '안녕하세요', pronunciation: '[annyeonghaseyo]', meaning: 'Xin chào' },
            { kr: '감사합니다', pronunciation: '[gamsahamnida]', meaning: 'Cảm ơn' },
            { kr: '네', pronunciation: '[ne]', meaning: 'Vâng/Có' }, { kr: '아니요', pronunciation: '[aniyo]', meaning: 'Không' },
            { kr: '저', pronunciation: '[jeo]', meaning: 'Tôi' }, { kr: '이름', pronunciation: '[ireum]', meaning: 'Tên' },
            { kr: '죄송합니다', pronunciation: '[joesonghamnida]', meaning: 'Xin lỗi' },
            { kr: '학생', pronunciation: '[haksaeng]', meaning: 'Học sinh' },
            { kr: '선생님', pronunciation: '[seonsaengnim]', meaning: 'Giáo viên' },
            { kr: '회사원', pronunciation: '[hoesawon]', meaning: 'Nhân viên văn phòng' },
            { kr: '의사', pronunciation: '[uisa]', meaning: 'Bác sĩ' },
            { kr: '만나다', pronunciation: '[mannada]', meaning: 'Gặp' },
            { kr: '반갑다', pronunciation: '[bangapda]', meaning: 'Vui mừng' },
            { kr: '소개하다', pronunciation: '[sogaehada]', meaning: 'Giới thiệu' },
            { kr: '사람', pronunciation: '[saram]', meaning: 'Người' },
            { kr: '나라', pronunciation: '[nara]', meaning: 'Đất nước' },
            { kr: '베트남', pronunciation: '[beteunam]', meaning: 'Việt Nam' }
        ],
        grammar: [
            { title: '~입니다 / 입니까?', content: '"~입니다" = "là..." (trang trọng). "~입니까?" = "có phải là...?". VD: 저는 학생입니다(Toi la hoc sinh). 한국 사람입니까?(Co phai nguoi Han khong?)' },
            { title: 'Tiểu từ ~은/는', content: 'Gắn sau danh từ chỉ chủ đề. ~은 (khi danh từ có phụ âm cuối), ~는 (khi danh từ có nguyên âm cuối). VD: 저는(Toi), 책은(sach), 가방은(cap sach).' },
            { title: '~이/가 아니에요', content: 'Phủ định của ~이에요/예요. "Không phải là..." Vd: 학생이 아니에요(Khong phai la hoc sinh). 한국 사람이 아니에요(Khong phai nguoi Han).' }
        ],
        examples: [
            { kr: '안녕하세요, 저는 마이클입니다.', vi: 'Xin chào, tôi là Michael.' },
            { kr: '만나서 반갑습니다.', vi: 'Rất vui gặp bạn.' },
            { kr: '감사합니다.', vi: 'Cảm ơn.' },
            { kr: '저는 한국 사람이 아닙니다.', vi: 'Tôi không phải là người Hàn Quốc.' },
            { kr: '선생님, 안녕하세요?', vi: 'Thưa thầy/cô, xin chào ạ!' }
        ],
        dialogues: [
            { kr: '안녕하세요? 저는 미나예요.', vi: 'Xin chào, tôi là Mina.', role: 'a' },
            { kr: '네 안녕하세요. 저는 수진이에요.', vi: 'Vâng xin chào, tôi là Sujin.', role: 'b' },
            { kr: '만나서 반가워요!', vi: 'Rất vui gặp bạn!', role: 'a' },
            { kr: '저도 반가워요. 한국 사람이에요?', vi: 'Tôi cũng vui. Bạn là người Hàn à?', role: 'b' },
            { kr: '아니요, 베트남 사람이에요.', vi: 'Không, tôi là người Việt Nam.', role: 'a' },
            { kr: '저는 학생이에요. 수진 씨는요?', vi: 'Tôi là học sinh. Còn Sujin?', role: 'a' },
            { kr: '저는 회사원이에요.', vi: 'Tôi là nhân viên văn phòng.', role: 'b' }
        ]
    },
    {
        id: 5, title: 'Số đếm Hán-Hàn',
        description: 'Sino-Korean numbers: 일, 이, 삼, 사... và cách dùng',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '일', pronunciation: '[il]', meaning: '1' }, { kr: '이', pronunciation: '[i]', meaning: '2' },
            { kr: '삼', pronunciation: '[sam]', meaning: '3' }, { kr: '사', pronunciation: '[sa]', meaning: '4' },
            { kr: '오', pronunciation: '[o]', meaning: '5' }, { kr: '육', pronunciation: '[yuk]', meaning: '6' },
            { kr: '칠', pronunciation: '[chil]', meaning: '7' }, { kr: '팔', pronunciation: '[pal]', meaning: '8' },
            { kr: '구', pronunciation: '[gu]', meaning: '9' }, { kr: '십', pronunciation: '[sip]', meaning: '10' },
            { kr: '백', pronunciation: '[baek]', meaning: '100' }, { kr: '천', pronunciation: '[cheon]', meaning: '1000' },
            { kr: '만', pronunciation: '[man]', meaning: '10000' }, { kr: '년', pronunciation: '[nyeon]', meaning: 'Năm' },
            { kr: '월', pronunciation: '[wol]', meaning: 'Tháng' }, { kr: '일', pronunciation: '[il]', meaning: 'Ngày' },
            { kr: '원', pronunciation: '[won]', meaning: 'Won (tiền Hàn)' }, { kr: '전화번호', pronunciation: '[jeonhwabeonho]', meaning: 'Số điện thoại' },
            { kr: '가격', pronunciation: '[gagyeok]', meaning: 'Giá cả' }, { kr: '얼마', pronunciation: '[eolma]', meaning: 'Bao nhiêu tiền' }
        ],
        grammar: [
            { title: 'Số Hán-Hàn', content: 'Dùng cho: số điện thoại, ngày tháng, năm, tiền, phút. 일(1), 이(2), 삼(3), 사(4), 오(5), 육(6), 칠(7), 팔(8), 구(9), 십(10). Số lớn: 십일(11), 이십(20), 삼십삼(33), 백(100), 천(1000), 만(10000). VD: 2024년→이천이십사년.' },
            { title: 'Cấu trúc hỏi giá', content: '"N + 은/는 얼마입니까?" = "Cái N giá bao nhiêu?" VD: 이 책은 얼마입니까?(Cuon sach nay bao nhieu tien?) 사과 한 개는 얼마예요?(Mot qua tao gia bao nhieu?)' }
        ],
        examples: [
            { kr: '전화번호는 010-1234-5678이에요.', vi: 'SĐT là 010-1234-5678.' },
            { kr: '오늘은 6월 28일이에요.', vi: 'Hôm nay 28/6.' },
            { kr: '이것은 5000원이에요.', vi: 'Cái này 5000 won.' },
            { kr: '한국에 2023년에 왔어요.', vi: 'Tôi đến Hàn năm 2023.' }
        ]
    },
    {
        id: 6, title: 'Số thuần Hàn & Đếm',
        description: 'Native Korean numbers: 하나, 둘, 셋... và từ đếm',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '하나', pronunciation: '[hana]', meaning: '1' }, { kr: '둘', pronunciation: '[dul]', meaning: '2' },
            { kr: '셋', pronunciation: '[set]', meaning: '3' }, { kr: '넷', pronunciation: '[net]', meaning: '4' },
            { kr: '다섯', pronunciation: '[daseot]', meaning: '5' }, { kr: '여섯', pronunciation: '[yeoseot]', meaning: '6' },
            { kr: '일곱', pronunciation: '[ilgop]', meaning: '7' }, { kr: '여덟', pronunciation: '[yeodeol]', meaning: '8' },
            { kr: '아홉', pronunciation: '[ahop]', meaning: '9' }, { kr: '열', pronunciation: '[yeol]', meaning: '10' },
            { kr: '스물', pronunciation: '[seumul]', meaning: '20' }, { kr: '서른', pronunciation: '[seoreun]', meaning: '30' },
            { kr: '마흔', pronunciation: '[maheun]', meaning: '40' }, { kr: '쉰', pronunciation: '[swin]', meaning: '50' },
            { kr: '개', pronunciation: '[gae]', meaning: 'Cái (từ đếm)' },
            { kr: '명', pronunciation: '[myeong]', meaning: 'Người (từ đếm)' },
            { kr: '시', pronunciation: '[si]', meaning: 'Giờ' }, { kr: '분', pronunciation: '[bun]', meaning: 'Phút' },
            { kr: '살', pronunciation: '[sal]', meaning: 'Tuổi' }
        ],
        grammar: [
            { title: 'Số thuần Hàn & từ đếm', content: 'Dùng cho: giờ, tuổi, số lượng đồ vật. Khi đếm: 하나→한, 둘→두, 셋→세, 넷→네, 스물→스무 (trước từ đếm). Từ đếm phổ biến: 개(cái), 명(người), 권(quyển sách), 병(chai), 잔(cốc), 마리(con vật). VD: 사과 세 개(3 qua tao), 사람 두 명(2 nguoi), 커피 한 잔(1 coc cafe).' },
            { title: 'Hỏi số lượng', content: '"몇 + từ đếm" = "mấy...". VD: 몇 개입니까?(Máy cai?), 몇 명이에요?(Máy nguoi?), 몇 시예요?(Máy gio?). Khi trả lời số 1-4: 한개, 두개, 세개, 네개.' }
        ],
        examples: [
            { kr: '사과 세 개 주세요.', vi: 'Cho tôi 3 quả táo.' },
            { kr: '지금 3시예요.', vi: 'Bây giờ 3 giờ.' },
            { kr: '저는 스물다섯 살이에요.', vi: 'Tôi 25 tuổi.' },
            { kr: '몇 시에 만나요?', vi: 'Mấy giờ gặp nhau?' },
            { kr: '커피 한 잔 주세요.', vi: 'Cho tôi một cốc cà phê.' }
        ]
    },
    {
        id: 7, title: 'Động từ & ~습니다/ㅂ니다',
        description: 'Động từ cơ bản: 가다, 오다, 먹다... thể trang trọng',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '가다', pronunciation: '[gada]', meaning: 'đi' }, { kr: '오다', pronunciation: '[oda]', meaning: 'đến' },
            { kr: '먹다', pronunciation: '[meokda]', meaning: 'ăn' }, { kr: '마시다', pronunciation: '[masida]', meaning: 'uống' },
            { kr: '보다', pronunciation: '[boda]', meaning: 'xem' }, { kr: '듣다', pronunciation: '[deutda]', meaning: 'nghe' },
            { kr: '하다', pronunciation: '[hada]', meaning: 'làm' }, { kr: '공부하다', pronunciation: '[gongbuhada]', meaning: 'học' }
        ],
        grammar: [
            { title: 'Thể ~습니다/ㅂ니다', content: 'Trang trọng lịch sự. Phụ âm cuối + 습니다 (먹다→먹습니다). Nguyên âm cuối + ㅂ니다 (가다→갑니다). 하다→합니다.' },
            { title: 'Cấu trúc SOV', content: 'Tiếng Hàn: Chủ ngữ - Tân ngữ - Động từ. VD: 저는 밥을 먹습니다 (Tôi cơm ăn).' }
        ],
        examples: [
            { kr: '저는 학교에 갑니다.', vi: 'Tôi đi đến trường.' },
            { kr: '아침을 먹습니다.', vi: 'Tôi ăn sáng.' },
            { kr: '한국어를 공부합니다.', vi: 'Tôi học tiếng Hàn.' }
        ]
    },
    {
        id: 8, title: 'Câu phủ định',
        description: '안 + V, -지 않다, không có 없다',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '안', pronunciation: '[an]', meaning: 'không' }, { kr: '못', pronunciation: '[mot]', meaning: 'không thể' },
            { kr: '있다', pronunciation: '[itda]', meaning: 'có' }, { kr: '없다', pronunciation: '[eopda]', meaning: 'không có' },
            { kr: '좋다', pronunciation: '[jotda]', meaning: 'tốt, thích' }, { kr: '맛있다', pronunciation: '[masitda]', meaning: 'ngon' }
        ],
        grammar: [
            { title: 'Phủ định', content: '안 + V (ngắn): 안 가요. -지 않다 (dài): 가지 않아요. 못 + V: không thể. 있다 → 없다 (có → không có).' }
        ],
        examples: [
            { kr: '안 가요. 바빠요.', vi: 'Không đi. Tôi bận.' },
            { kr: '김치가 맛있어요?', vi: 'Kimchi ngon không?' }
        ]
    },
    {
        id: 9, title: 'Câu hỏi & Từ để hỏi',
        description: '누구, 무엇, 어디, 언제, 왜, 어떻게',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '누구', pronunciation: '[nugu]', meaning: 'ai' }, { kr: '무엇', pronunciation: '[mueot]', meaning: 'cái gì' },
            { kr: '어디', pronunciation: '[eodi]', meaning: 'đâu' }, { kr: '언제', pronunciation: '[eonje]', meaning: 'khi nào' },
            { kr: '왜', pronunciation: '[wae]', meaning: 'tại sao' }, { kr: '얼마', pronunciation: '[eolma]', meaning: 'bao nhiêu' }
        ],
        grammar: [
            { title: 'Câu hỏi Wh-', content: 'Từ để hỏi đứng ở vị trí thông tin cần hỏi. VD: 이름이 무엇입니까? 어디에 갑니까? 왜 공부합니까?' }
        ],
        examples: [
            { kr: '이름이 무엇입니까?', vi: 'Tên bạn là gì?' },
            { kr: '어디에 살아요?', vi: 'Sống ở đâu?' },
            { kr: '왜 한국어를 공부해요?', vi: 'Tại sao học tiếng Hàn?' }
        ]
    },
    {
        id: 10, title: 'Trợ từ: 은/는, 이/가, 을/를',
        description: 'Phân biệt trợ từ chủ đề, chủ ngữ, tân ngữ',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '은/는', pronunciation: '[eun/neun]', meaning: 'chủ đề' },
            { kr: '이/가', pronunciation: '[i/ga]', meaning: 'chủ ngữ' },
            { kr: '을/를', pronunciation: '[eul/reul]', meaning: 'tân ngữ' },
            { kr: '도', pronunciation: '[do]', meaning: 'cũng' }, { kr: '만', pronunciation: '[man]', meaning: 'chỉ' }
        ],
        grammar: [
            { title: 'Phân biệt 은/는 vs 이/가', content: '은/는: nhấn mạnh chủ đề, thông tin đã biết. 이/가: nhấn mạnh chủ ngữ, thông tin mới. VD: 이것은 책입니다 (cái này là sách). 이것이 책입니다 (CHÍNH cái này là sách).' }
        ],
        examples: [
            { kr: '저는 학생입니다.', vi: 'Tôi là học sinh.' },
            { kr: '이것이 제 책입니다.', vi: 'Đây chính là sách tôi.' },
            { kr: '저도 한국어를 공부해요.', vi: 'Tôi cũng học tiếng Hàn.' }
        ]
    },
    {
        id: 11, title: 'Trợ từ: 에, 에서, 부터, 까지',
        description: 'Địa điểm, thời gian, từ-đến',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '에', pronunciation: '[e]', meaning: 'tại, vào' }, { kr: '에서', pronunciation: '[eseo]', meaning: 'tại (hành động)' },
            { kr: '부터', pronunciation: '[buteo]', meaning: 'từ' }, { kr: '까지', pronunciation: '[kkaji]', meaning: 'đến' }
        ],
        grammar: [
            { title: '에 vs 에서', content: '에: nơi tồn tại/điểm đến (있다/없다, 가다/오다). 에서: nơi hành động (공부하다, 일하다). VD: 학교에 있어요. 학교에서 공부해요.' }
        ],
        examples: [
            { kr: '학교에 갑니다.', vi: 'Đi đến trường.' },
            { kr: '도서관에서 책을 읽습니다.', vi: 'Đọc sách ở thư viện.' },
            { kr: '9시부터 5시까지 일해요.', vi: 'Làm việc từ 9h đến 5h.' }
        ]
    },
    {
        id: 12, title: 'Thể thân mật 해요체',
        description: '~아/어요 — thể thân mật lịch sự hàng ngày',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '만나다', pronunciation: '[mannada]', meaning: 'gặp' }, { kr: '사다', pronunciation: '[sada]', meaning: 'mua' },
            { kr: '팔다', pronunciation: '[palda]', meaning: 'bán' }, { kr: '주다', pronunciation: '[juda]', meaning: 'cho' },
            { kr: '배우다', pronunciation: '[baeuda]', meaning: 'học' }, { kr: '가르치다', pronunciation: '[gareuchida]', meaning: 'dạy' }
        ],
        grammar: [
            { title: 'Chia ~아/어요', content: 'Nguyên âm ㅏ,ㅗ + 아요 (가다→가요, 보다→봐요). Nguyên âm khác + 어요 (먹다→먹어요, 읽다→읽어요). 하다→해요. Đây là thể thông dụng nhất.' }
        ],
        examples: [
            { kr: '학교에 가요.', vi: 'Tôi đi học.' },
            { kr: '김치를 먹어요.', vi: 'Tôi ăn kimchi.' },
            { kr: '한국어를 공부해요.', vi: 'Tôi học tiếng Hàn.' }
        ],
        dialogues: [
            { kr: '지금 뭐 해요?', vi: 'Bây giờ bạn làm gì?', role: 'a' },
            { kr: '학교에 가요.', vi: 'Tôi đi học.', role: 'b' },
            { kr: '뭐 공부해요?', vi: 'Bạn học gì?', role: 'a' },
            { kr: '한국어를 공부해요.', vi: 'Tôi học tiếng Hàn.', role: 'b' }
        ]
    },
    {
        id: 13, title: 'Thì quá khứ',
        description: '~았/었어요 — kể chuyện đã xảy ra',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '어제', pronunciation: '[eoje]', meaning: 'hôm qua' }, { kr: '오늘', pronunciation: '[oneul]', meaning: 'hôm nay' },
            { kr: '내일', pronunciation: '[naeil]', meaning: 'ngày mai' }, { kr: '지금', pronunciation: '[jigeum]', meaning: 'bây giờ' },
            { kr: '작년', pronunciation: '[jangnyeon]', meaning: 'năm ngoái' }
        ],
        grammar: [
            { title: 'Quá khứ ~았/었어요', content: 'ㅏ,ㅗ + 았어요: 가다→갔어요, 보다→봤어요. Khác + 었어요: 먹다→먹었어요. 하다→했어요.' }
        ],
        examples: [
            { kr: '어제 학교에 갔어요.', vi: 'Hôm qua tôi đã đi học.' },
            { kr: '아침을 먹었어요.', vi: 'Tôi đã ăn sáng.' },
            { kr: '친구를 만났어요.', vi: 'Tôi đã gặp bạn.' }
        ]
    },
    {
        id: 14, title: 'Thì tương lai',
        description: '~을/ㄹ 거예요 — dự định, kế hoạch',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '내일', pronunciation: '[naeil]', meaning: 'ngày mai' }, { kr: '다음 주', pronunciation: '[daeum ju]', meaning: 'tuần sau' },
            { kr: '담달', pronunciation: '[daemdal]', meaning: 'tháng sau' }, { kr: '나중에', pronunciation: '[najunge]', meaning: 'sau này' }
        ],
        grammar: [
            { title: 'Tương lai ~을/ㄹ 거예요', content: 'Nguyên âm + ㄹ 거예요: 가다→갈 거예요. Phụ âm + 을 거예요: 먹다→먹을 거예요.' }
        ],
        examples: [
            { kr: '내일 친구를 만날 거예요.', vi: 'Ngày mai tôi sẽ gặp bạn.' },
            { kr: '한국어를 공부할 거예요.', vi: 'Tôi sẽ học tiếng Hàn.' },
            { kr: '한국에 갈 거예요.', vi: 'Tôi sẽ đi Hàn Quốc.' }
        ]
    },
    {
        id: 15, title: 'Tổng ôn Sơ cấp 1',
        description: 'Ôn tập tất cả ngữ pháp và từ vựng đã học',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '연습', pronunciation: '[yeonseup]', meaning: 'luyện tập' }, { kr: '복습', pronunciation: '[bokseup]', meaning: 'ôn tập' },
            { kr: '시험', pronunciation: '[siheom]', meaning: 'bài thi' }, { kr: '합격', pronunciation: '[hapgyeok]', meaning: 'đỗ' }
        ],
        grammar: [
            { title: 'Ôn tập', content: 'Hãy ôn lại: ~입니다, ~은/는, ~이/가, ~을/를, ~에/에서, ~아/어요, ~았/었어요, ~을/ㄹ 거예요.' }
        ],
        examples: [
            { kr: '저는 학생입니다. 학교에 가요.', vi: 'Tôi là học sinh. Tôi đi học.' },
            { kr: '어제 한국어를 공부했어요.', vi: 'Hôm qua tôi đã học tiếng Hàn.' }
        ]
    },

    // ===== STAGE 3: SƠ CẤP 2 → TOPIK 1 (Bài 16-30) =====
    {
        id: 16, title: 'Động từ bất quy tắc ㄷ, ㅂ, ㅅ',
        description: 'ㄷ→ㄹ, ㅂ→ㅜ/ㅗ, ㅅ→rụng khi chia động từ',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '듣다', pronunciation: '[deutda]', meaning: 'nghe (ㄷ→ㄹ: 들어요)' },
            { kr: '걷다', pronunciation: '[geotda]', meaning: 'đi bộ (걸어요)' },
            { kr: '돕다', pronunciation: '[dopda]', meaning: 'giúp (ㅂ→와: 도와요)' },
            { kr: '춥다', pronunciation: '[chupda]', meaning: 'lạnh (추워요)' },
            { kr: '짓다', pronunciation: '[jitda]', meaning: 'xây (ㅅ탈락: 지어요)' },
            { kr: '깨닫다', pronunciation: '[kkaedatda]', meaning: 'nhận ra (깨달아요)' },
            { kr: '싣다', pronunciation: '[sitda]', meaning: 'chở, load (실어요)' },
            { kr: '가볍다', pronunciation: '[gabyeopda]', meaning: 'nhẹ (가벼워요)' },
            { kr: '덥다', pronunciation: '[deopda]', meaning: 'nóng (더워요)' },
            { kr: '붓다', pronunciation: '[butda]', meaning: 'đổ, sưng (부어요)' }
        ],
        grammar: [
            { title: 'Bất quy tắc ㄷ', content: 'ㄷ→ㄹ khi gặp nguyên âm: 듣다→들어요, 걷다→걸어요, 깨닫다→깨달아요. Ngoại lệ: 받다(nhận) KHÔNG đổi: 받아요.' },
            { title: 'Bất quy tắc ㅂ', content: 'ㅂ→ㅜ/ㅗ khi gặp nguyên âm: 돕다→도와요, 춥다→추워요, 가볍다→가벼워요. Ngoại lệ: 좁다(hẹp), 넓다(rộng) KHÔNG đổi: 좁아요.' },
            { title: 'Bất quy tắc ㅅ', content: 'ㅅ rụng (탈락) khi gặp nguyên âm: 짓다→지어요, 붓다→부어요. Ngoại lệ: 벗다(cởi) KHÔNG đổi: 벗어요.' }
        ],
        examples: [
            { kr: '음악을 들어요.', vi: 'Nghe nhạc.' },
            { kr: '날씨가 추워요.', vi: 'Thời tiết lạnh.' },
            { kr: '아침에 일어나서 학교에 걸어요.', vi: 'Sáng dậy và đi bộ đến trường.' },
            { kr: '집을 지어요.', vi: 'Xây nhà.' }
        ],
        reading: '안녕하세요, 저는 수진이에요. 오늘은 날씨가 추워요. 그래도 저는 학교에 걸어가요. 학교에서 음악을 들어요. 한국어를 공부해요. 친구를 도와요. 저는 집에서 한국 음식을 만들어요. 김치도 만들어요. 맛있어요!',
        readingQuestions: [
            { q: 'Sujin đi đến trường bằng cách nào?', options: ['Xe buýt', 'Đi bộ', 'Xe hơi', 'Tàu điện'], answer: 1 },
            { q: 'Thời tiết hôm nay thế nào?', options: ['Nóng', 'Mát', 'Lạnh', 'Mưa'], answer: 2 },
            { q: 'Sujin làm gì ở trường?', options: ['Nghe nhạc + học', 'Chơi game', 'Ngủ', 'Ăn'], answer: 0 },
            { q: 'Sujin làm món gì ở nhà?', options: ['Bánh mì', 'Kimchi', 'Cơm', 'Lẩu'], answer: 1 }
        ]
    },
    {
        id: 17, title: 'Bất quy tắc ㅎ, 르, 으',
        description: 'ㅎ→rụng, 르→ㄹㄹ, 으→어/아',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '빨갛다', pronunciation: '[ppalgata]', meaning: 'đỏ (빨개요)' },
            { kr: '그렇다', pronunciation: '[geureota]', meaning: 'như thế (그래요)' },
            { kr: '모르다', pronunciation: '[moreuda]', meaning: 'không biết (몰라요)' },
            { kr: '고르다', pronunciation: '[goreuda]', meaning: 'chọn (골라요)' },
            { kr: '예쁘다', pronunciation: '[yeppeuda]', meaning: 'đẹp (예뻐요)' },
            { kr: '이르다', pronunciation: '[ireuda]', meaning: 'sớm (일러요)' },
            { kr: '노랗다', pronunciation: '[norata]', meaning: 'vàng (노래요)' },
            { kr: '어떻다', pronunciation: '[eotteota]', meaning: 'thế nào (어때요)' },
            { kr: '슬프다', pronunciation: '[seulpeuda]', meaning: 'buồn (슬퍼요)' },
            { kr: '배고프다', pronunciation: '[baegopeuda]', meaning: 'đói (배고파요)' }
        ],
        grammar: [
            { title: 'Bất quy tắc ㅎ', content: 'ㅎ rụng khi gặp nguyên âm: 빨갛다→빨개요, 그렇다→그래요, 노랗다→노래요, 어떻다→어때요. Tính từ màu sắc thường bị ㅎ탈락.' },
            { title: 'Bất quy tắc 르', content: '르→ㄹㄹ (thêm ㄹ): 모르다→몰라요, 고르다→골라요, 이르다→일러요. Gốc 르 + 아/어 → ㄹ라/ㄹ러.' },
            { title: 'Bất quy tắc 으', content: '으 rụng, thêm 어/아 tùy nguyên âm trước: 예쁘다→예뻐요, 슬프다→슬퍼요, 배고프다→배고파요. Nếu gốc có ㅏ thì + 아, không thì + 어.' }
        ],
        examples: [
            { kr: '이름을 몰라요.', vi: 'Tôi không biết tên.' },
            { kr: '꽃이 예뻐요.', vi: 'Hoa đẹp.' },
            { kr: '노란 색이 좋아요. 그래요?', vi: 'Màu vàng tốt. Thế à?' },
            { kr: '배고파요. 밥 먹어요.', vi: 'Đói bụng quá. Ăn cơm thôi.' }
        ],
        reading: '오늘 친구와 함께 쇼핑을 해요. 옷 가게에 있어요. 빨간색 옷이 있어요. 노란색 옷도 있어요. 친구가 "어떤 색이 좋아요?"라고 물어봐요. 저는 "빨간색이 예뻐요"라고 대답해요. 그런데 가격을 몰라요. 점원에게 물어봐요. "이 옷은 얼마예요?" 점원이 "2만 원이에요"라고 해요. 비싸지 않아요. 저는 빨간색 옷을 골라요. 기분이 좋아요!',
        readingQuestions: [
            { q: 'Hai người đang ở đâu?', options: ['Trường học', 'Cửa hàng quần áo', 'Nhà hàng', 'Thư viện'], answer: 1 },
            { q: 'Người nói thích màu nào?', options: ['Vàng', 'Xanh', 'Đỏ', 'Đen'], answer: 2 },
            { q: 'Giá của chiếc áo là bao nhiêu?', options: ['1 vạn won', '2 vạn won', '3 vạn won', '5 vạn won'], answer: 1 },
            { q: 'Người nói có biết giá trước khi hỏi không?', options: ['Có biết', 'Không biết', 'Không quan tâm', 'Đã đoán'], answer: 1 }
        ]
    },
    {
        id: 18, title: '~고 있다: Đang làm gì',
        description: 'Thể tiếp diễn: đang...',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '읽다', pronunciation: '[ikda]', meaning: 'đọc' }, { kr: '쓰다', pronunciation: '[sseuda]', meaning: 'viết' },
            { kr: '말하다', pronunciation: '[malhada]', meaning: 'nói' }, { kr: '기다리다', pronunciation: '[gidarida]', meaning: 'đợi' },
            { kr: '전화하다', pronunciation: '[jeonhwahada]', meaning: 'gọi điện' },
            { kr: '운동하다', pronunciation: '[undonghada]', meaning: 'tập thể dục' },
            { kr: '청소하다', pronunciation: '[cheongsohada]', meaning: 'dọn dẹp' },
            { kr: '요리하다', pronunciation: '[yorihada]', meaning: 'nấu ăn' }
        ],
        grammar: [
            { title: '~고 있다', content: 'Động từ + 고 있다 = đang làm gì. VD: 먹고 있다(đang ăn), 공부하고 있다(đang học). Rút gọn trong văn nói: ~고 있어요. Phủ định: ~고 있지 않다.' },
            { title: 'Phân biệt ~는다 vs ~고 있다', content: '~는다: sự thật hiển nhiên/thói quen (매일 한국어를 공부한다). ~고 있다: đang làm ngay lúc nói (지금 한국어를 공부하고 있다).' }
        ],
        examples: [
            { kr: '지금 밥을 먹고 있어요.', vi: 'Bây giờ đang ăn cơm.' },
            { kr: '한국어를 공부하고 있어요.', vi: 'Đang học tiếng Hàn.' },
            { kr: '지금 무엇을 하고 있어요?', vi: 'Bây giờ đang làm gì thế?' }
        ],
        reading: '지금 오후 3시예요. 저는 도서관에 있어요. 한국어 책을 읽고 있어요. 친구는 옆에서 숙제를 하고 있어요. 그런데 오늘 날씨가 더워요. 도서관에 에어컨이 없어요. 그래서 좀 힘들어요. 그래도 저는 한국어 공부를 계속하고 있어요. 친구는 "같이 커피 마실래요?"라고 물어봐요. 저는 "네, 좋아요!"라고 대답해요. 지금 쉬고 있어요!',
        readingQuestions: [
            { q: 'Người nói đang ở đâu?', options: ['Nhà', 'Thư viện', 'Quán cà phê', 'Trường'], answer: 1 },
            { q: 'Người nói đang làm gì?', options: ['Viết thư', 'Đọc sách tiếng Hàn', 'Chơi game', 'Ngủ'], answer: 1 },
            { q: 'Bạn của người nói đang làm gì?', options: ['Đọc sách', 'Làm bài tập', 'Ăn', 'Nói chuyện'], answer: 1 },
            { q: 'Họ quyết định làm gì?', options: ['Về nhà', 'Đi uống cà phê', 'Đi ăn', 'Đi dạo'], answer: 1 }
        ]
    },
    {
        id: 19, title: '~아/어 보다 & ~(으)러 가다',
        description: 'Thử làm, đi để làm gì',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '입어 보다', pronunciation: '[ibeo boda]', meaning: 'thử mặc' },
            { kr: '먹어 보다', pronunciation: '[meogeo boda]', meaning: 'thử ăn' },
            { kr: '놀러 가다', pronunciation: '[nolleo gada]', meaning: 'đi chơi' },
            { kr: '배우러 가다', pronunciation: '[baeureo gada]', meaning: 'đi học' },
            { kr: '해 보다', pronunciation: '[hae boda]', meaning: 'thử làm' },
            { kr: '만나 보다', pronunciation: '[manna boda]', meaning: 'thử gặp' },
            { kr: '사러 가다', pronunciation: '[sareo gada]', meaning: 'đi mua' },
            { kr: '먹으러 가다', pronunciation: '[meogeureo gada]', meaning: 'đi ăn' },
            { kr: '경험', pronunciation: '[gyeongheom]', meaning: 'kinh nghiệm' },
            { kr: '추천', pronunciation: '[chucheon]', meaning: 'đề xuất' }
        ],
        grammar: [
            { title: '~아/어 보다', content: 'Thử làm gì: 먹어 보다(thử ăn), 입어 보다(thử mặc), 해 보다(thử làm). Dùng quá khứ: ~아/어 봤다(đã thử). Phủ định: ~아/어 보지 않다.' },
            { title: '~(으)러 가다/오다', content: 'Đi/đến để làm gì. Nguyên âm + 러: 가다→가러 가다(đi để đi). Phụ âm + 으러: 먹다→먹으러 가다(đi ăn). Chú ý: chỉ dùng với 가다, 오다, 다니다.' }
        ],
        examples: [
            { kr: '김치를 먹어 봤어요?', vi: 'Đã thử ăn kimchi chưa?' },
            { kr: '도서관에 공부하러 가요.', vi: 'Đi thư viện để học.' },
            { kr: '한국에 가 보고 싶어요.', vi: 'Muốn thử đến Hàn.' },
            { kr: '시장에 과일을 사러 가요.', vi: 'Đi chợ để mua trái cây.' }
        ]
    },
    {
        id: 20, title: 'Nguyên nhân ~아/어서',
        description: 'Vì... nên... — nối câu chỉ nguyên nhân',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '바쁘다', pronunciation: '[bappeuda]', meaning: 'bận' },
            { kr: '아프다', pronunciation: '[apeuda]', meaning: 'đau, ốm' },
            { kr: '피곤하다', pronunciation: '[pigonhada]', meaning: 'mệt' },
            { kr: '재미있다', pronunciation: '[jaemiitda]', meaning: 'thú vị' },
            { kr: '늦다', pronunciation: '[neutda]', meaning: 'muộn, chậm' },
            { kr: '힘들다', pronunciation: '[himdeulda]', meaning: 'vất vả' },
            { kr: '쉽다', pronunciation: '[swipda]', meaning: 'dễ' },
            { kr: '어렵다', pronunciation: '[eoryeopda]', meaning: 'khó' }
        ],
        grammar: [
            { title: '~아/어서', content: 'Vì... nên...: 바빠서 못 가요(vì bận nên không đi được). 아파서 병원에 가요(vì đau nên đi bệnh viện). Lưu ý: KHÔNG dùng với thì quá khứ/ tương lai. Không dùng với ~ㅂ니다/습니다.' },
            { title: 'So sánh ~아/어서 vs ~니까', content: '~아/어서: nguyên nhân khách quan, không dùng với câu mệnh lệnh/rủ rê. ~니까: nguyên nhân chủ quan, dùng được với mệnh lệnh, rủ rê. VD: 비가 오니까 우산을 가져가세요(Mưa rồi nên mang ô nhé).' }
        ],
        examples: [
            { kr: '바빠서 친구를 못 만나요.', vi: 'Vì bận nên không gặp bạn được.' },
            { kr: '재미있어서 봤어요.', vi: 'Vì thú vị nên đã xem.' },
            { kr: '아파서 병원에 가요.', vi: 'Vì ốm nên đi bệnh viện.' },
            { kr: '늦어서 죄송합니다.', vi: 'Xin lỗi vì đến muộn.' }
        ],
        readingsimple: '어제는 피곤해서 일찍 잤어요. 그런데 오늘은 아파서 병원에 가요. 병원이 집에서 멀어서 버스를 타요. 의사 선생님이 "약을 먹어야 해요"라고 말해요. 약을 먹고 좀 쉬었어요. 친구가 "같이 영화 볼래요?"라고 문자를 보냈어요. 그런데 저는 아파서 못 가요. "미안해요, 아파서 못 가요"라고 답장을 보냈어요. 친구가 "괜찮아, 다음에 보자"고 했어요. 좋은 친구가 있어서 다행이에요!',
        readingQuestions: [
            { q: 'Tại sao hôm qua người nói ngủ sớm?', options: ['Buồn ngủ', 'Mệt', 'Bận', 'Rảnh'], answer: 1 },
            { q: 'Người nói đi đến bệnh viện bằng gì?', options: ['Xe buýt', 'Tàu điện', 'Taxi', 'Đi bộ'], answer: 0 },
            { q: 'Tại sao người nói không đi xem phim?', options: ['Bận', 'Ốm', 'Không thích', 'Xa quá'], answer: 1 },
            { q: 'Cảm xúc của người nói về bạn mình thế nào?', options: ['Buồn', 'May mắn vì có bạn tốt', 'Giận', 'Thất vọng'], answer: 1 }
        ]
    },
    {
        id: 21, title: 'Mục đích ~기 위해(서)',
        description: 'Để làm gì — vì mục đích',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '위하다', pronunciation: '[wihada]', meaning: 'vì, cho' },
            { kr: '건강', pronunciation: '[geongang]', meaning: 'sức khỏe' },
            { kr: '다이어트', pronunciation: '[daieoteu]', meaning: 'ăn kiêng' },
            { kr: '꿈', pronunciation: '[kkum]', meaning: 'ước mơ' }
        ],
        grammar: [
            { title: '~기 위해(서)', content: 'Để làm gì: 한국어를 공부하기 위해 한국에 왔어요(Đến Hàn để học tiếng Hàn). 건강을 위해 운동해요(Tập thể dục vì sức khỏe).' }
        ],
        examples: [
            { kr: 'TOPIK에 합격하기 위해 공부해요.', vi: 'Học để đỗ TOPIK.' },
            { kr: '건강을 위해 운동해요.', vi: 'Tập thể dục vì sức khỏe.' }
        ]
    },
    {
        id: 22, title: 'Khả năng ~을/ㄹ 수 있다',
        description: 'Có thể/không thể làm gì',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '운전하다', pronunciation: '[unjeonhada]', meaning: 'lái xe' },
            { kr: '요리하다', pronunciation: '[yorihada]', meaning: 'nấu ăn' },
            { kr: '수영하다', pronunciation: '[suyeonghada]', meaning: 'bơi' },
            { kr: '춤추다', pronunciation: '[chumchuda]', meaning: 'nhảy' },
            { kr: '노래하다', pronunciation: '[noraehada]', meaning: 'hát' },
            { kr: '그림을 그리다', pronunciation: '[geurimeul geurida]', meaning: 'vẽ tranh' },
            { kr: '가능하다', pronunciation: '[ganeunghada]', meaning: 'có thể, khả thi' },
            { kr: '불가능하다', pronunciation: '[bulganeunghada]', meaning: 'không thể' }
        ],
        grammar: [
            { title: '~을/ㄹ 수 있다/없다', content: 'Có thể: 갈 수 있어요(có thể đi), 먹을 수 있어요(có thể ăn). Không thể: 못 가요 = 갈 수 없어요. Lưu ý: "못" chỉ khả năng không thể do hoàn cảnh. "안" là chủ động không làm.' },
            { title: 'Phân biệt 못 vs 안', content: '못: không thể do lý do khách quan (못 가요=không thể đi vì trời mưa). 안: chủ động không muốn làm (안 가요=không đi vì lười). Cả hai đều đứng trước động từ.' }
        ],
        examples: [
            { kr: '한국어를 할 수 있어요?', vi: 'Bạn có thể nói tiếng Hàn không?' },
            { kr: '운전할 수 있어요.', vi: 'Tôi có thể lái xe.' },
            { kr: '못 가요. 시간이 없어요.', vi: 'Không thể đi. Không có thời gian.' },
            { kr: '한국 음식을 먹을 수 있어요?', vi: 'Bạn có thể ăn đồ Hàn không?' }
        ],
        reading: '저는 한국어를 할 수 있어요. 하지만 아직 잘하지는 못해요. 매일 공부하고 있어요. 친구 중에 한국에서 3년 살았던 사람이 있어요. 그 친구는 한국어를 아주 잘할 수 있어요. 저도 그 친구처럼 잘하고 싶어요. 그래서 매일 한국어로 일기를 써요. 처음에는 어려웠어요. 하지만 지금은 좀 더 잘 쓸 수 있어요. 저는 한국 음식을 요리할 수 있어요. 김치찌개를 만들 수 있어요. 친구들이 맛있다고 해요!',
        readingQuestions: [
            { q: 'Người nói có thể làm gì bằng tiếng Hàn?', options: ['Nói chuyện', 'Viết nhật ký', 'Nấu ăn', 'Tất cả đáp án'], answer: 3 },
            { q: 'Bạn của người nói đã sống ở Hàn bao lâu?', options: ['1 năm', '2 năm', '3 năm', '5 năm'], answer: 2 },
            { q: 'Người nói đánh giá thế nào về việc viết nhật ký ban đầu?', options: ['Dễ', 'Khó', 'Buồn chán', 'Vui'], answer: 1 },
            { q: 'Người nói có thể nấu món gì?', options: ['Bibimbap', 'Kimchi jjigae', 'Bulgogi', 'Tteokbokki'], answer: 1 }
        ]
    },
    {
        id: 23, title: 'Trước/Sau khi ~기 전에/~ㄴ 후에',
        description: 'Diễn tả thứ tự hành động',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '전', pronunciation: '[jeon]', meaning: 'trước' },
            { kr: '후', pronunciation: '[hu]', meaning: 'sau' },
            { kr: '자다', pronunciation: '[jada]', meaning: 'ngủ' },
            { kr: '일어나다', pronunciation: '[ireonada]', meaning: 'thức dậy' }
        ],
        grammar: [
            { title: '~기 전에 / ~ㄴ/은 후에', content: 'Trước: 먹기 전에(trước khi ăn). Sau: 먹은 후에(sau khi ăn). 자요: 자기 전에(trước khi ngủ), 잔 후에(sau khi ngủ).' }
        ],
        examples: [
            { kr: '밥을 먹기 전에 손을 씻어요.', vi: 'Rửa tay trước khi ăn.' },
            { kr: '수업이 끝난 후에 도서관에 가요.', vi: 'Sau khi tan học, đi thư viện.' }
        ]
    },
    {
        id: 24, title: 'V + ~는 것 (Danh từ hóa)',
        description: 'Biến động từ thành danh từ: việc...',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '것', pronunciation: '[geot]', meaning: 'việc, điều' },
            { kr: '취미', pronunciation: '[chwimi]', meaning: 'sở thích' },
            { kr: '특기', pronunciation: '[teukgi]', meaning: 'sở trường' }
        ],
        grammar: [
            { title: '~는 것', content: 'Biến V thành N: 읽는 것(việc đọc), 노래하는 것(việc hát). 취미는 영화를 보는 것이에요(Sở thích là xem phim).' }
        ],
        examples: [
            { kr: '제 취미는 노래하는 거예요.', vi: 'Sở thích của tôi là hát.' },
            { kr: '한국어를 배우는 것이 재미있어요.', vi: 'Việc học tiếng Hàn thú vị.' }
        ]
    },
    {
        id: 25, title: 'So sánh: ~보다, ~처럼',
        description: 'Hơn, giống như — so sánh hơn và so sánh ngang bằng',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '더', pronunciation: '[deo]', meaning: 'hơn' }, { kr: '가장', pronunciation: '[kajang]', meaning: 'nhất' },
            { kr: '같다', pronunciation: '[gatda]', meaning: 'giống' }, { kr: '다르다', pronunciation: '[dareuda]', meaning: 'khác' }
        ],
        grammar: [
            { title: 'So sánh', content: 'Hơn: A > B: A가 B보다 더 커요(A to hơn B). Nhất: 가장/제일 커요(to nhất). Giống như: A가 B처럼 커요(A to như B).' }
        ],
        examples: [
            { kr: '한국어가 영어보다 더 어려워요?', vi: 'Tiếng Hàn khó hơn tiếng Anh không?' },
            { kr: '가장 좋아하는 음식이 뭐예요?', vi: 'Món ăn thích nhất là gì?' }
        ]
    },
    {
        id: 26, title: 'Nối câu: ~지만, ~고, ~거나',
        description: 'Nhưng, và, hoặc — nối các mệnh đề',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '그렇지만', pronunciation: '[geureochiman]', meaning: 'nhưng' },
            { kr: '그리고', pronunciation: '[geurigo]', meaning: 'và' },
            { kr: '또는', pronunciation: '[tto-neun]', meaning: 'hoặc' }
        ],
        grammar: [
            { title: 'Nối câu', content: '~지만(nhưng): 바쁘지만 공부해요. ~고(và): 사과를 사고 바나나를 샀어요. ~거나(hoặc): 커피를 마시거나 차를 마셔요.' }
        ],
        examples: [
            { kr: '바쁘지만 한국어를 공부해요.', vi: 'Bận nhưng vẫn học tiếng Hàn.' },
            { kr: '아침에 일어나서 샤워해요.', vi: 'Sáng dậy và tắm.' }
        ]
    },
    {
        id: 27, title: 'Câu điều kiện ~으면/면',
        description: 'Nếu... thì...',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '비', pronunciation: '[bi]', meaning: 'mưa' }, { kr: '눈', pronunciation: '[nun]', meaning: 'tuyết' },
            { kr: '시간', pronunciation: '[sigan]', meaning: 'thời gian' }, { kr: '돈', pronunciation: '[don]', meaning: 'tiền' }
        ],
        grammar: [
            { title: '~으면/면', content: 'Nếu... thì. Phụ âm + 으면: 먹으면(nếu ăn). Nguyên âm + 면: 가면(nếu đi). VD: 비가 오면 안 가요(Nếu mưa thì không đi).' }
        ],
        examples: [
            { kr: '시간이 있으면 같이 영화 볼까요?', vi: 'Nếu có thời gian thì cùng xem phim nhé?' },
            { kr: '돈이 많으면 여행할 거예요.', vi: 'Nếu có nhiều tiền thì sẽ đi du lịch.' }
        ]
    },
    {
        id: 28, title: 'Lịch sự kính ngữ ~(으)시',
        description: 'Kính ngữ với người lớn tuổi, cấp trên',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '계시다', pronunciation: '[gyesida]', meaning: 'ở (kính ngữ của 있다)' },
            { kr: '진지', pronunciation: '[jinji]', meaning: 'cơm (kính ngữ)' },
            { kr: '댁', pronunciation: '[daek]', meaning: 'nhà (kính ngữ)' }
        ],
        grammar: [
            { title: '~(으)시', content: 'Thêm (으)시 vào động từ/tính từ để kính trọng. VD: 가시다(đi ạ), 계시다(ở ạ). 밥→진지, 집→댁.' }
        ],
        examples: [
            { kr: '선생님, 어디에 가세요?', vi: 'Thưa thầy, thầy đi đâu ạ?' },
            { kr: '할머니, 진지 잡수세요.', vi: 'Bà ơi, mời bà dùng cơm.' }
        ]
    },
    {
        id: 29, title: 'Đề nghị & Mời ~을/ㄹ까요, ~읍시다',
        description: 'Rủ rê, đề nghị cùng làm',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '같이', pronunciation: '[gachi]', meaning: 'cùng nhau' },
            { kr: '함께', pronunciation: '[hamkke]', meaning: 'cùng' },
            { kr: '영화', pronunciation: '[yeonghwa]', meaning: 'phim' }
        ],
        grammar: [
            { title: 'Đề nghị', content: '~을/ㄹ까요? (rủ): 같이 먹을까요?(cùng ăn nhé?). ~읍시다(mời trang trọng): 함께 갑시다(cùng đi nào). Thân mật: ~아/어요: 같이 가요!' }
        ],
        examples: [
            { kr: '같이 영화 볼까요?', vi: 'Cùng xem phim nhé?' },
            { kr: '내일 다시 만나요!', vi: 'Mai gặp lại nhé!' }
        ]
    },
    {
        id: 30, title: 'TOPIK 1 Luyện đề',
        description: 'Làm quen đề TOPIK 1 — Đọc & Nghe',
        level: '🟡 GĐ 3: Sơ cấp 2 → TOPIK 1', stage: 3,
        vocab: [
            { kr: 'TOPIK', pronunciation: '[topik]', meaning: 'kỳ thi năng lực tiếng Hàn' },
            { kr: '문제', pronunciation: '[munje]', meaning: 'câu hỏi, vấn đề' },
            { kr: '정답', pronunciation: '[jeongdap]', meaning: 'đáp án đúng' },
            { kr: '오답', pronunciation: '[odap]', meaning: 'đáp án sai' },
            { kr: '점수', pronunciation: '[jeomsu]', meaning: 'điểm số' },
            { kr: '합격선', pronunciation: '[hapgyeokseon]', meaning: 'đường đỗ' },
            { kr: '시험 보다', pronunciation: '[siheom boda]', meaning: 'thi' },
            { kr: '준비하다', pronunciation: '[junbihada]', meaning: 'chuẩn bị' }
        ],
        grammar: [
            { title: 'Chiến thuật TOPIK 1', content: 'Đọc: đọc câu hỏi trước, tìm từ khóa trong đoạn văn. Nghe: tập trung vào từ đầu và cuối câu. Mục tiêu: đỗ cấp 2 (130 điểm+/200).' },
            { title: 'Cấu trúc đề TOPIK 1', content: 'Đọc(읽기): 40 câu - 70 phút. Nghe(듣기): 30 câu - 30 phút. Tổng 200 điểm. Cấp 1: 80 điểm+, Cấp 2: 140 điểm+. Dạng câu hỏi: chọn từ thích hợp, chủ đề, ý chính.' }
        ],
        examples: [
            { kr: 'TOPIK 1 시험: 읽기 40문제, 듣기 30문제', vi: 'TOPIK 1: 40 câu đọc, 30 câu nghe.' },
            { kr: '합격하려면 열심히 준비해야 해요.', vi: 'Để đỗ phải chuẩn bị chăm chỉ.' }
        ],
        reading: 'TOPIK 1 시험을 준비하고 있어요. 한국어를 공부한 지 6개월이 됐어요. 친구가 "TOPIK 1이 어때요?"라고 물어봐요. 저는 "생각보다 쉬워요. 하지만 문법이 좀 어려워요"라고 대답해요. 읽기 시험은 40문제예요. 70분 동안 풀어야 해요. 저는 읽기가 좋아요. 그런데 듣기가 좀 어려워요. 한국 사람이 빨리 말해서 잘 못 알아들어요. 그래서 매일 한국 드라마를 봐요. 한국어 노래도 들어요. 이 방법이 도움이 많이 돼요! 목표는 TOPIK 1 합격이에요. 6개월 후에 시험을 볼 거예요!',
        readingQuestions: [
            { q: 'Người nói đã học tiếng Hàn bao lâu?', options: ['3 tháng', '6 tháng', '1 năm', '2 năm'], answer: 1 },
            { q: 'Phần nào khó hơn đối với người nói?', options: ['Đọc', 'Nghe', 'Viết', 'Ngữ pháp'], answer: 1 },
            { q: 'Người nói làm gì để cải thiện kỹ năng?', options: ['Học thuộc lòng', 'Xem phim + nghe nhạc Hàn', 'Đi Hàn Quốc', 'Học với gia sư'], answer: 1 },
            { q: 'Bao lâu nữa người nói sẽ thi?', options: ['3 tháng', '6 tháng', '1 tháng', '1 năm'], answer: 1 }
        ]
    },

    // ===== STAGE 4: TRUNG CẤP → TOPIK 2 (Bài 31-45) =====
    {
        id: 31, title: 'Bị động: ~이/히/리/기',
        description: 'Câu bị động — bị, được làm gì',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '보이다', pronunciation: '[boida]', meaning: 'nhìn thấy (bị động của 보다)' },
            { kr: '들리다', pronunciation: '[deullida]', meaning: 'nghe thấy (듣다)' },
            { kr: '닫히다', pronunciation: '[dachida]', meaning: 'bị đóng (닫다)' },
            { kr: '열리다', pronunciation: '[yeollida]', meaning: 'được mở (열다)' },
            { kr: '쓰이다', pronunciation: '[sseuida]', meaning: 'được viết (쓰다)' },
            { kr: '팔리다', pronunciation: '[pallida]', meaning: 'được bán (팔다)' },
            { kr: '끊기다', pronunciation: '[kkeunkkida]', meaning: 'bị đứt (끊다)' },
            { kr: '잠기다', pronunciation: '[jamgida]', meaning: 'bị khóa (잠그다)' },
            { kr: '걸리다', pronunciation: '[geollida]', meaning: 'bị mắc (걸다)' },
            { kr: '바뀌다', pronunciation: '[bakkuda]', meaning: 'bị thay đổi (바꾸다)' }
        ],
        grammar: [
            { title: 'Bị động', content: 'Thêm 이/히/리/기 vào gốc động từ. Quy tắc: - 받침 ㄱ,ㄷ,ㅂ + 히: 닫다→닫히다. - 받침 ㄹ + 리: 열다→열리다. - 받침 khác + 이/기: 보다→보이다, 쓰다→쓰이다. Không phải động từ nào cũng có thể chia bị động.' },
            { title: 'Cách dùng bị động', content: 'Chủ ngữ là đối tượng bị tác động. VD: 문이 닫혔어요(Cửa đã bị đóng). Không cần nêu người thực hiện. Dùng nhiều trong văn viết và tin tức.' }
        ],
        examples: [
            { kr: '산이 보여요.', vi: 'Núi được nhìn thấy.' },
            { kr: '문이 열렸어요.', vi: 'Cửa đã được mở.' },
            { kr: '편지가 쓰였어요.', vi: 'Bức thư đã được viết.' },
            { kr: '그 책이 많이 팔렸어요.', vi: 'Cuốn sách đó đã bán được nhiều.' }
        ],
        reading: '어제 도서관에 갔어요. 그런데 도서관 문이 닫혔어요. "왜 문이 닫혔지?" 이상하다고 생각했어요. 휴일이 아니었거든요. 나중에 알게 됐어요. 오전에 수도관이 끊겨서 도서관이 갑자기 닫혔다고 해요. 그래서 집으로 돌아왔어요. 그런데 집에 가는 길에 예쁜 공원이 보였어요. 그 공원은 작년에 새로 열렸어요. 나무가 많이 심어졌고 꽃도 예뻤어요. 공원 벤치에 앉아서 책을 읽었어요. 조용하고 좋았어요!',
        readingQuestions: [
            { q: 'Tại sao thư viện đóng cửa?', options: ['Ngày lễ', 'Ống nước bị vỡ', 'Sửa chữa', 'Hết giờ'], answer: 1 },
            { q: 'Người nói nhìn thấy gì trên đường về?', options: ['Siêu thị', 'Công viên đẹp', 'Nhà hàng', 'Rạp phim'], answer: 1 },
            { q: 'Công viên đó được xây dựng khi nào?', options: ['Năm nay', 'Năm ngoái', 'Tháng trước', 'Tuần trước'], answer: 1 },
            { q: 'Người nói đã làm gì ở công viên?', options: ['Đi dạo', 'Đọc sách', 'Ăn trưa', 'Chụp ảnh'], answer: 1 }
        ]
    },
    {
        id: 32, title: 'Sai khiến: ~이/히/리/기/우/추',
        description: 'Khiến ai đó làm gì, để cho...',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '먹이다', pronunciation: '[meogida]', meaning: 'cho ăn' },
            { kr: '웃기다', pronunciation: '[utgida]', meaning: 'làm cười' },
            { kr: '죽이다', pronunciation: '[jugida]', meaning: 'giết' },
            { kr: '깨우다', pronunciation: '[kkaeuda]', meaning: 'đánh thức' }
        ],
        grammar: [
            { title: 'Sai khiến', content: 'Làm cho ai đó làm gì. 먹다→먹이다(cho ăn), 웃다→웃기다(làm cười), 깨다→깨우다(đánh thức).' }
        ],
        examples: [
            { kr: '아기에게 밥을 먹였어요.', vi: 'Đã cho em bé ăn.' },
            { kr: '너무 웃겨요!', vi: 'Cười quá!' }
        ]
    },
    {
        id: 33, title: 'Tường thuật gián tiếp',
        description: '~다고 하다, ~냐고 하다, ~라고 하다, ~자고 하다',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '말하다', pronunciation: '[malhada]', meaning: 'nói' },
            { kr: '물어보다', pronunciation: '[mureoboda]', meaning: 'hỏi' },
            { kr: '대답하다', pronunciation: '[daedaphada]', meaning: 'trả lời' }
        ],
        grammar: [
            { title: 'Tường thuật', content: 'Trần thuật: V+ㄴ/는다고 하다. Nghi vấn: V+냐고 하다. Mệnh lệnh: V+라고 하다. Đề nghị: V+자고 하다.' }
        ],
        examples: [
            { kr: '한국어가 어렵다고 했어요.', vi: 'Đã nói là tiếng Hàn khó.' },
            { kr: '뭐라고 했어요?', vi: 'Đã nói gì cơ?' }
        ]
    },
    {
        id: 34, title: '~는/은/ㄴ 것 같다',
        description: 'Hình như, có vẻ như — suy đoán',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '아마', pronunciation: '[ama]', meaning: 'có lẽ' },
            { kr: '어쩌면', pronunciation: '[eojjeomyeon]', meaning: 'biết đâu' },
            { kr: '분명', pronunciation: '[bunmyeong]', meaning: 'chắc chắn' }
        ],
        grammar: [
            { title: '~것 같다', content: 'Hiện tại: V+는 것 같다, A+은/ㄴ 것 같다. Quá khứ: V+은/ㄴ 것 같다. Tương lai: V+을/ㄹ 것 같다. VD: 비가 오는 것 같아요(hình như mưa).' }
        ],
        examples: [
            { kr: '비가 올 것 같아요.', vi: 'Hình như sắp mưa.' },
            { kr: '그 영화 재미있을 것 같아요.', vi: 'Chắc phim đó thú vị.' }
        ]
    },
    {
        id: 35, title: 'Nguyên nhân ~기 때문에',
        description: 'Vì... nên... (trang trọng hơn ~아/어서)',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '때문에', pronunciation: '[ttaemune]', meaning: 'vì... nên' },
            { kr: '이유', pronunciation: '[iyu]', meaning: 'lý do' },
            { kr: '원인', pronunciation: '[wonin]', meaning: 'nguyên nhân' }
        ],
        grammar: [
            { title: '~기 때문에', content: 'V/A + 기 때문에(sử dụng với cả quá khứ). N + 때문에. VD: 한국어를 공부하기 때문에 한국에 왔어요(Đến Hàn vì học tiếng Hàn).' }
        ],
        examples: [
            { kr: '날씨가 좋기 때문에 공원에 가요.', vi: 'Vì thời tiết đẹp nên đi công viên.' },
            { kr: '바쁘기 때문에 못 가요.', vi: 'Vì bận nên không đi được.' }
        ]
    },
    {
        id: 36, title: '~(으)ㄴ/는/(으)ㄹ 때',
        description: 'Khi... — diễn tả thời điểm',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '때', pronunciation: '[ttae]', meaning: 'khi, lúc' },
            { kr: '순간', pronunciation: '[sun-gan]', meaning: 'khoảnh khắc' }
        ],
        grammar: [
            { title: '~(으)ㄹ 때', content: 'Khi: V/A + (으)ㄹ 때 (hiện tại/tương lai). V/A + 은/는/던 때 (quá khứ). VD: 어렸을 때(khi còn nhỏ), 밥 먹을 때(khi ăn cơm).' }
        ],
        examples: [
            { kr: '어렸을 때 한국에 살았어요.', vi: 'Khi nhỏ tôi sống ở Hàn.' },
            { kr: '피곤할 때 커피를 마셔요.', vi: 'Khi mệt tôi uống cà phê.' }
        ]
    },
    {
        id: 37, title: '~다가: Đang... thì...',
        description: 'Hành động đang làm thì chuyển sang hành động khác',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '가다가', pronunciation: '[gadaga]', meaning: 'đang đi thì...' },
            { kr: '하다가', pronunciation: '[hadaga]', meaning: 'đang làm thì...' }
        ],
        grammar: [
            { title: '~다가', content: 'Hành động 1 đang làm thì chuyển sang hành động 2. VD: 공부하다가 친구를 만났어요(đang học thì gặp bạn). 집에 가다가 비가 왔어요(đang về nhà thì mưa).' }
        ],
        examples: [
            { kr: '길을 걷다가 친구를 만났어요.', vi: 'Đang đi thì gặp bạn.' },
            { kr: '텔레비전을 보다가 잠들었어요.', vi: 'Đang xem TV thì ngủ thiếp đi.' }
        ]
    },
    {
        id: 38, title: 'Nhượng bộ: ~아/어도',
        description: 'Dù... cũng...',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '괜찮다', pronunciation: '[gwaenchanta]', meaning: 'ổn, không sao' },
            { kr: '상관없다', pronunciation: '[sanggwaneopda]', meaning: 'không liên quan' }
        ],
        grammar: [
            { title: '~아/어도', content: 'Dù... cũng: 바빠도(dù bận), 비가 와도(dù mưa). VD: 바빠도 운동해요(Dù bận vẫn tập thể dục).' }
        ],
        examples: [
            { kr: '바빠도 한국어를 공부해요.', vi: 'Dù bận vẫn học tiếng Hàn.' },
            { kr: '비가 와도 갈 거예요.', vi: 'Dù mưa vẫn sẽ đi.' }
        ]
    },
    {
        id: 39, title: 'Càng ~ càng: ~(으)ㄹ수록',
        description: '(으)ㄹ수록 — So sánh kép',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '갈수록', pronunciation: '[galsurok]', meaning: 'càng đi càng...' },
            { kr: '많을수록', pronunciation: '[maneulsurok]', meaning: 'càng nhiều càng...' }
        ],
        grammar: [
            { title: '~(으)ㄹ수록', content: 'Càng... càng...: 공부할수록 재미있어요(Càng học càng thú vị). 많을수록 좋아요(Càng nhiều càng tốt).' }
        ],
        examples: [
            { kr: '한국어를 공부할수록 재미있어요.', vi: 'Càng học tiếng Hàn càng thú vị.' },
            { kr: '클수록 비싸요?', vi: 'Càng to càng đắt à?' }
        ]
    },
    {
        id: 40, title: 'Mục đích ~도록 & ~게',
        description: 'Để cho, đến mức...',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '듣도록', pronunciation: '[deutdorok]', meaning: 'để nghe được' },
            { kr: '보도록', pronunciation: '[bodorok]', meaning: 'để thấy được' }
        ],
        grammar: [
            { title: '~도록', content: 'Để cho, đến mức: 들을 수 있도록 크게 말해 주세요(Nói to để nghe được). Nhớ được: 잊지 않도록 메모해요.' }
        ],
        examples: [
            { kr: '늦지 않도록 일찍 가요.', vi: 'Đi sớm để không bị muộn.' },
            { kr: '건강하게 살도록 운동해요.', vi: 'Tập thể dục để sống khỏe.' }
        ]
    },
    {
        id: 41, title: 'Giả định ~았/었으면 좋겠다',
        description: 'Ước muốn, hy vọng điều gì xảy ra',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '소원', pronunciation: '[sowon]', meaning: 'điều ước' },
            { kr: '바라다', pronunciation: '[barada]', meaning: 'mong muốn' }
        ],
        grammar: [
            { title: '~았/었으면 좋겠다', content: 'Giá mà/ước gì: 시험이 쉬웠으면 좋겠어요(Giá mà đề thi dễ). V+았/었으면 좋겠다: 한국에 갔으면 좋겠어요(Mong được đi Hàn).' }
        ],
        examples: [
            { kr: 'TOPIK에 합격했으면 좋겠어요.', vi: 'Mong là đỗ TOPIK.' },
            { kr: '날씨가 좋았으면 좋겠어요.', vi: 'Mong thời tiết đẹp.' }
        ]
    },
    {
        id: 42, title: 'Thói quen & Kinh nghiệm',
        description: '~곤 하다, ~은/ㄴ 적이 있다',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '자주', pronunciation: '[jaju]', meaning: 'thường xuyên' },
            { kr: '가끔', pronunciation: '[gakkeum]', meaning: 'thỉnh thoảng' },
            { kr: '전혀', pronunciation: '[jeonhyeo]', meaning: 'hoàn toàn không' }
        ],
        grammar: [
            { title: 'Kinh nghiệm & Thói quen', content: '~은/ㄴ 적이 있다(đã từng): 한국에 간 적이 있어요(đã từng đi Hàn). ~곤 하다(thường): 어렸을 때 공원에 가곤 했어요(hồi nhỏ thường đi công viên).' }
        ],
        examples: [
            { kr: '한국 음식을 먹어 본 적이 있어요?', vi: 'Đã từng ăn đồ Hàn chưa?' },
            { kr: '어렸을 때 할머니 댁에 가곤 했어요.', vi: 'Hồi nhỏ thường về nhà bà.' }
        ]
    },
    {
        id: 43, title: 'Thành ngữ & Tục ngữ thông dụng',
        description: 'Thành ngữ tiếng Hàn thường gặp',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '고생 끝에 낙이 온다', pronunciation: '[gosaeng kkeute nagi onda]', meaning: 'Hết khổ tới sướng' },
            { kr: '시작이 반이다', pronunciation: '[sijagi banida]', meaning: 'Bắt đầu là một nửa' },
            { kr: '말이 씨가 된다', pronunciation: '[mari ssiga doenda]', meaning: 'Lời nói thành hạt giống' },
            { kr: '호랑이도 제 말 하면 온다', pronunciation: '[horangido je mal hamyeon onda]', meaning: 'Nói tới Tào Tháo, Tào Tháo tới' }
        ],
        grammar: [
            { title: 'Thành ngữ', content: 'Tiếng Hàn có nhiều thành ngữ hay. 고생 끝에 낙이 온다 = Sau cơn mưa trời lại sáng. 시작이 반이다 = Vạn sự khởi đầu nan.' }
        ],
        examples: [
            { kr: '시작이 반이에요. 포기하지 마세요!', vi: 'Bắt đầu là một nửa rồi. Đừng bỏ cuộc!' },
            { kr: '고생 끝에 낙이 온다고 했어요.', vi: 'Người ta nói hết khổ tới sướng.' }
        ]
    },
    {
        id: 44, title: 'TOPIK 2 — Chiến thuật Viết',
        description: 'Câu 51-54: Điền từ, viết đoạn, viết luận',
        level: '🟠 GĐ 4: Trung cấp → TOPIK 2', stage: 4,
        vocab: [
            { kr: '서론', pronunciation: '[seoron]', meaning: 'mở bài' },
            { kr: '본론', pronunciation: '[bollon]', meaning: 'thân bài' },
            { kr: '결론', pronunciation: '[gyeollon]', meaning: 'kết bài' }
        ],
        grammar: [
            { title: 'Chiến thuật Viết TOPIK 2', content: 'Câu 51-52: điền từ vào chỗ trống (ngữ pháp trung cấp). Câu 53: viết đoạn 200-300 từ. Câu 54: viết luận 600-700 từ. Cấu trúc: 서론-본론-결론.' }
        ],
        examples: [
            { kr: '먼저, ... 그리고, ... 마지막으로...', vi: 'Trước hết... Và... Cuối cùng...' }
        ]
    },
    {
        id: 45, title: '🏆 Tổng ôn TOPIK 2',
        description: 'Chiến thuật thi, luyện đề tổng hợp, mẹo làm bài',
        level: '🟠 GĐ 4: Trung cấp → TOPIK 2', stage: 4,
        vocab: [
            { kr: '합격', pronunciation: '[hapgyeok]', meaning: 'đỗ' },
            { kr: '불합격', pronunciation: '[bulhapgyeok]', meaning: 'trượt' },
            { kr: '성적', pronunciation: '[seongjeok]', meaning: 'thành tích' }
        ],
        grammar: [
            { title: 'Tổng kết hành trình', content: 'Đã học: 45 bài, ~4000 từ vựng, toàn bộ ngữ pháp trung cấp. Giờ bạn có thể: giao tiếp hàng ngày, đọc báo, viết luận, thi TOPIK 2.' }
        ],
        examples: [
            { kr: '한국어 공부 1년 동안 정말 수고하셨습니다!', vi: 'Cảm ơn bạn vì 1 năm học tiếng Hàn!' },
            { kr: 'TOPIK 2 합격을 축하합니다! 🎉', vi: 'Chúc mừng bạn đỗ TOPIK 2!' }
        ]
    }
];

// Tổng hợp từ vựng từ tất cả bài học
const allVocabulary = [];
lessonsData.forEach(lesson => {
    lesson.vocab.forEach(v => {
        allVocabulary.push({
            kr: v.kr,
            meaning: v.meaning,
            lesson: lesson.id,
            pronunciation: v.pronunciation || ''
        });
    });
});
