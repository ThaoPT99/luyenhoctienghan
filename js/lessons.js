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
            { kr: '하다', pronunciation: '[hada]', meaning: 'làm' }, { kr: '공부하다', pronunciation: '[gongbuhada]', meaning: 'học' },
            { kr: '일하다', pronunciation: '[ilhada]', meaning: 'làm việc' }, { kr: '운동하다', pronunciation: '[undonghada]', meaning: 'tập thể dục' },
            { kr: '요리하다', pronunciation: '[yorihada]', meaning: 'nấu ăn' }, { kr: '청소하다', pronunciation: '[cheongsohada]', meaning: 'dọn dẹp' },
            { kr: '빨래하다', pronunciation: '[ppallaehada]', meaning: 'giặt quần áo' }, { kr: '휴식', pronunciation: '[hyusik]', meaning: 'nghỉ ngơi' },
            { kr: '보내다', pronunciation: '[bonaeda]', meaning: 'gửi, tiêu (thời gian)' }, { kr: '시작하다', pronunciation: '[sijakhada]', meaning: 'bắt đầu' },
            { kr: '끝나다', pronunciation: '[kkeunnada]', meaning: 'kết thúc' }, { kr: '사용하다', pronunciation: '[sayonghada]', meaning: 'sử dụng' },
            { kr: '필요하다', pronunciation: '[piryohada]', meaning: 'cần thiết' }, { kr: '좋아하다', pronunciation: '[joahada]', meaning: 'thích' }
        ],
        grammar: [
            { title: 'Thể ~습니다/ㅂ니다', content: 'Trang trọng lịch sự. Phụ âm cuối + 습니다 (먹다→먹습니다). Nguyên âm cuối + ㅂ니다 (가다→갑니다). 하다→합니다.' },
            { title: 'Cấu trúc SOV', content: 'Tiếng Hàn: Chủ ngữ - Tân ngữ - Động từ. VD: 저는 밥을 먹습니다 (Tôi cơm ăn).' },
            { title: 'Động từ 하다', content: '하다 = "làm". Rất nhiều động từ ghép với 하다: 공부하다, 일하다, 운동하다. Cách chia: 합니다 (trang trọng).' }
        ],
        examples: [
            { kr: '저는 학교에 갑니다.', vi: 'Tôi đi đến trường.' },
            { kr: '아침을 먹습니다.', vi: 'Tôi ăn sáng.' },
            { kr: '한국어를 공부합니다.', vi: 'Tôi học tiếng Hàn.' },
            { kr: '운동을 합니다. 건강이 좋아요.', vi: 'Tập thể dục. Sức khỏe tốt.' }
        ]
    },
    {
        id: 8, title: 'Câu phủ định',
        description: '안 + V, -지 않다, không có 없다',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '안', pronunciation: '[an]', meaning: 'không' }, { kr: '못', pronunciation: '[mot]', meaning: 'không thể' },
            { kr: '있다', pronunciation: '[itda]', meaning: 'có' }, { kr: '없다', pronunciation: '[eopda]', meaning: 'không có' },
            { kr: '좋다', pronunciation: '[jotda]', meaning: 'tốt, thích' }, { kr: '맛있다', pronunciation: '[masitda]', meaning: 'ngon' },
            { kr: '맛없다', pronunciation: '[madeopda]', meaning: 'không ngon' }, { kr: '재미없다', pronunciation: '[jaemieopda]', meaning: 'chán' },
            { kr: '바쁘지 않다', pronunciation: '[bappeuji anta]', meaning: 'không bận' }, { kr: '피곤하지 않다', pronunciation: '[pigonhaji anta]', meaning: 'không mệt' },
            { kr: '싫다', pronunciation: '[silta]', meaning: 'ghét, không thích' }, { kr: '모르다', pronunciation: '[moreuda]', meaning: 'không biết' },
            { kr: '아니다', pronunciation: '[anida]', meaning: 'không phải' }, { kr: '별로', pronunciation: '[byeollo]', meaning: 'không... lắm' },
            { kr: '전혀', pronunciation: '[jeonhyeo]', meaning: 'hoàn toàn không' }
        ],
        grammar: [
            { title: 'Phủ định với 안 và 못', content: '안 + V (ngắn): 안 가요(không đi). 못 + V: không thể do khách quan: 못 가요(không thể đi). -지 않다 (dài): 가지 않아요. 있다 → 없다 (có → không có).' },
            { title: 'Phân biệt 안 vs 못', content: '안: chủ động không muốn. 못: khách quan không thể. VD: 안 먹어요(không ăn - vì chán). 못 먹어요(không thể ăn - vì đau bụng).' }
        ],
        examples: [
            { kr: '안 가요. 바빠요.', vi: 'Không đi. Tôi bận.' },
            { kr: '김치가 맛있어요? 아니요, 별로예요.', vi: 'Kimchi ngon không? Không, không ngon lắm.' },
            { kr: '시간이 없어서 못 가요.', vi: 'Không có thời gian nên không thể đi.' },
            { kr: '그 영화 재미없어요. 안 봐요.', vi: 'Phim đó chán. Không xem.' }
        ]
    },
    {
        id: 9, title: 'Câu hỏi & Từ để hỏi',
        description: '누구, 무엇, 어디, 언제, 왜, 어떻게',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '누구', pronunciation: '[nugu]', meaning: 'ai' }, { kr: '무엇', pronunciation: '[mueot]', meaning: 'cái gì' },
            { kr: '어디', pronunciation: '[eodi]', meaning: 'đâu' }, { kr: '언제', pronunciation: '[eonje]', meaning: 'khi nào' },
            { kr: '왜', pronunciation: '[wae]', meaning: 'tại sao' }, { kr: '얼마', pronunciation: '[eolma]', meaning: 'bao nhiêu' },
            { kr: '어떻게', pronunciation: '[eotteoke]', meaning: 'thế nào' }, { kr: '무슨', pronunciation: '[museun]', meaning: 'loại gì' },
            { kr: '어느', pronunciation: '[eoneu]', meaning: 'nào' }, { kr: '몇', pronunciation: '[myeot]', meaning: 'mấy' },
            { kr: '얼마나', pronunciation: '[eolmana]', meaning: 'bao nhiêu (mức độ)' }, { kr: '머리', pronunciation: '[meori]', meaning: 'đầu, tóc' },
            { kr: '생일', pronunciation: '[saengil]', meaning: 'sinh nhật' }, { kr: '주말', pronunciation: '[jumal]', meaning: 'cuối tuần' },
            { kr: '취미', pronunciation: '[chwimi]', meaning: 'sở thích' }
        ],
        grammar: [
            { title: 'Câu hỏi Wh-', content: 'Từ để hỏi đứng ở vị trí thông tin cần hỏi. ~%EC%9D%B4/가 + 무엇입니까? N + 은/는 + 어디에 + V? VD: 이름이 무엇입니까? 생일이 언제예요? 취미가 무엇이에요?' },
            { title: 'Cấu trúc hỏi thăm', content: '몇 + từ đếm: 몇 시(mấy giờ), 몇 명(mấy người). 무슨: 무슨 음식(món gì). 어느: 어느 나라(nước nào). VD: 몇 시에 만나요?' }
        ],
        examples: [
            { kr: '이름이 무엇입니까?', vi: 'Tên bạn là gì?' },
            { kr: '어디에 살아요?', vi: 'Sống ở đâu?' },
            { kr: '왜 한국어를 공부해요?', vi: 'Tại sao học tiếng Hàn?' },
            { kr: '어떻게 왔어요?', vi: 'Đến bằng cách nào?' },
            { kr: '주말에 뭐 해요?', vi: 'Cuối tuần làm gì?' }
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
            { kr: '도', pronunciation: '[do]', meaning: 'cũng' }, { kr: '만', pronunciation: '[man]', meaning: 'chỉ' },
            { kr: '하고', pronunciation: '[hago]', meaning: 'với, và' }, { kr: '랑', pronunciation: '[rang]', meaning: 'với (thân mật)' },
            { kr: '에서', pronunciation: '[eseo]', meaning: 'tại (nơi hành động)' }, { kr: '에게', pronunciation: '[ege]', meaning: 'cho ai' },
            { kr: '한테', pronunciation: '[hante]', meaning: 'cho ai (thân mật)' }, { kr: '의', pronunciation: '[ui]', meaning: 'của' },
            { kr: '책', pronunciation: '[chaek]', meaning: 'sách' }, { kr: '가방', pronunciation: '[gabang]', meaning: 'cặp sách' },
            { kr: '연필', pronunciation: '[yeonpil]', meaning: 'bút chì' }, { kr: '컴퓨터', pronunciation: '[keompyuteo]', meaning: 'máy tính' }
        ],
        grammar: [
            { title: 'Phân biệt 은/는 vs 이/가', content: '은/는: nhấn mạnh chủ đề, thông tin đã biết hoặc so sánh. 이/가: nhấn mạnh chủ ngữ, thông tin mới. VD: 이것은 책입니다 (cái này là sách - giới thiệu). 이것이 책입니다 (CHÍNH cái này là sách - nhấn mạnh).' },
            { title: 'Các trợ từ khác', content: '을/를: tân ngữ. 도: cũng (저도 = tôi cũng). 만: chỉ (이것만 = chỉ cái này). 하고/랑: và/với. 의: của (제 친구의 = của bạn tôi).' }
        ],
        examples: [
            { kr: '저는 학생입니다.', vi: 'Tôi là học sinh.' },
            { kr: '이것이 제 책입니다.', vi: 'Đây chính là sách tôi.' },
            { kr: '저도 한국어를 공부해요.', vi: 'Tôi cũng học tiếng Hàn.' },
            { kr: '저는 영어만 할 수 있어요.', vi: 'Tôi chỉ có thể nói tiếng Anh.' }
        ]
    },
    {
        id: 11, title: 'Trợ từ: 에, 에서, 부터, 까지',
        description: 'Địa điểm, thời gian, từ-đến',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '에', pronunciation: '[e]', meaning: 'tại, vào' }, { kr: '에서', pronunciation: '[eseo]', meaning: 'tại (hành động)' },
            { kr: '부터', pronunciation: '[buteo]', meaning: 'từ' }, { kr: '까지', pronunciation: '[kkaji]', meaning: 'đến' },
            { kr: '도서관', pronunciation: '[doseogwan]', meaning: 'thư viện' }, { kr: '병원', pronunciation: '[byeongwon]', meaning: 'bệnh viện' },
            { kr: '은행', pronunciation: '[eunhaeng]', meaning: 'ngân hàng' }, { kr: '영화관', pronunciation: '[yeonghwagwan]', meaning: 'rạp phim' },
            { kr: '공원', pronunciation: '[gongwon]', meaning: 'công viên' }, { kr: '백화점', pronunciation: '[baekhwajeom]', meaning: 'trung tâm thương mại' },
            { kr: '시장', pronunciation: '[sijang]', meaning: 'chợ' }, { kr: '약속', pronunciation: '[yaksok]', meaning: 'hẹn, lời hứa' },
            { kr: '출발하다', pronunciation: '[chulbalhada]', meaning: 'khởi hành' }, { kr: '도착하다', pronunciation: '[dochakhada]', meaning: 'đến nơi' }
        ],
        grammar: [
            { title: '에 vs 에서', content: '에: nơi tồn tại/điểm đến (있다/없다, 가다/오다, 도착하다). 에서: nơi hành động diễn ra (공부하다, 일하다, 놀다). VD: 학교에 있어요(Ở trường). 학교에서 공부해요(Học ở trường).' },
            { title: '부터 ~까지', content: 'Từ ~ đến (thời gian/nơi chốn). VD: 9시부터 5시까지 일해요(Làm từ 9h đến 5h). 서울부터 부산까지 기차로 2시간 걸려요(Từ Seoul đến Busan mất 2h tàu).' }
        ],
        examples: [
            { kr: '학교에 갑니다.', vi: 'Đi đến trường.' },
            { kr: '도서관에서 책을 읽습니다.', vi: 'Đọc sách ở thư viện.' },
            { kr: '9시부터 5시까지 일해요.', vi: 'Làm việc từ 9h đến 5h.' },
            { kr: '약속이 3시에 있어요.', vi: 'Có hẹn lúc 3 giờ.' }
        ]
    },
    {
        id: 12, title: 'Thể thân mật 해요체',
        description: '~아/어요 — thể thân mật lịch sự hàng ngày',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '만나다', pronunciation: '[mannada]', meaning: 'gặp' }, { kr: '사다', pronunciation: '[sada]', meaning: 'mua' },
            { kr: '팔다', pronunciation: '[palda]', meaning: 'bán' }, { kr: '주다', pronunciation: '[juda]', meaning: 'cho' },
            { kr: '배우다', pronunciation: '[baeuda]', meaning: 'học' }, { kr: '가르치다', pronunciation: '[gareuchida]', meaning: 'dạy' },
            { kr: '쉬다', pronunciation: '[swida]', meaning: 'nghỉ' }, { kr: '놀다', pronunciation: '[nolda]', meaning: 'chơi' },
            { kr: '자다', pronunciation: '[jada]', meaning: 'ngủ' }, { kr: '일어나다', pronunciation: '[ireonada]', meaning: 'thức dậy' },
            { kr: '씻다', pronunciation: '[ssitda]', meaning: 'rửa, tắm' }, { kr: '입다', pronunciation: '[ipda]', meaning: 'mặc' },
            { kr: '신다', pronunciation: '[sinda]', meaning: 'đi (giày)' }, { kr: '벗다', pronunciation: '[beotda]', meaning: 'cởi' },
            { kr: '전화하다', pronunciation: '[jeonhwahada]', meaning: 'gọi điện' }
        ],
        grammar: [
            { title: 'Chia ~아/어요', content: 'Nguyên âm ㅏ,ㅗ + 아요 (가다→가요, 보다→봐요, 사다→사요). Nguyên âm khác + 어요 (먹다→먹어요, 읽다→읽어요, 씻다→씻어요). 하다→해요. Đây là thể thông dụng nhất trong giao tiếp hàng ngày.' },
            { title: 'Câu mệnh lệnh thân mật', content: 'Dùng ~아/어요 để rủ rê hoặc đề nghị nhẹ nhàng: 같이 가요!(Cùng đi nào!), 밥 먹어요!(Ăn cơm đi!). Thân mật hơn: ~아/어: 가!(Đi!), 먹어!(Ăn đi!).' }
        ],
        examples: [
            { kr: '학교에 가요.', vi: 'Tôi đi học.' },
            { kr: '김치를 먹어요.', vi: 'Tôi ăn kimchi.' },
            { kr: '한국어를 공부해요.', vi: 'Tôi học tiếng Hàn.' },
            { kr: '아침 7시에 일어나요.', vi: 'Sáng 7 giờ thức dậy.' }
        ],
        dialogues: [
            { kr: '지금 뭐 해요?', vi: 'Bây giờ bạn làm gì?', role: 'a' },
            { kr: '학교에 가요.', vi: 'Tôi đi học.', role: 'b' },
            { kr: '뭐 공부해요?', vi: 'Bạn học gì?', role: 'a' },
            { kr: '한국어를 공부해요.', vi: 'Tôi học tiếng Hàn.', role: 'b' },
            { kr: '몇 시에 수업이 시작해요?', vi: 'Mấy giờ lớp bắt đầu?', role: 'a' },
            { kr: '9시에 시작해요. 같이 가요!', vi: 'Bắt đầu lúc 9h. Cùng đi nào!', role: 'b' }
        ]
    },
    {
        id: 13, title: 'Thì quá khứ',
        description: '~았/었어요 — kể chuyện đã xảy ra',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '어제', pronunciation: '[eoje]', meaning: 'hôm qua' }, { kr: '오늘', pronunciation: '[oneul]', meaning: 'hôm nay' },
            { kr: '내일', pronunciation: '[naeil]', meaning: 'ngày mai' }, { kr: '지금', pronunciation: '[jigeum]', meaning: 'bây giờ' },
            { kr: '작년', pronunciation: '[jangnyeon]', meaning: 'năm ngoái' }, { kr: '지난 주', pronunciation: '[jinan ju]', meaning: 'tuần trước' },
            { kr: '방금', pronunciation: '[banggeum]', meaning: 'vừa mới' }, { kr: '아까', pronunciation: '[akka]', meaning: 'lúc nãy' },
            { kr: '벌써', pronunciation: '[beolsseo]', meaning: 'đã, rồi' }, { kr: '아직', pronunciation: '[ajik]', meaning: 'vẫn chưa' },
            { kr: '예전에', pronunciation: '[yejeone]', meaning: 'trước đây' }, { kr: '결혼하다', pronunciation: '[gyeolhonhada]', meaning: 'kết hôn' },
            { kr: '여행하다', pronunciation: '[yeohaenghada]', meaning: 'du lịch' }, { kr: '선물', pronunciation: '[seonmul]', meaning: 'quà tặng' }
        ],
        grammar: [
            { title: 'Quá khứ ~았/었어요', content: 'ㅏ,ㅗ + 았어요: 가다→갔어요, 보다→봤어요, 사다→샀어요. Khác + 었어요: 먹다→먹었어요, 읽다→읽었어요. 하다→했어요. Phủ định quá khứ: 안 갔어요, 못 먹었어요.' },
            { title: '아직 vs 벌써', content: '아직 안: vẫn chưa (아직 안 먹었어요=vẫn chưa ăn). 벌써: đã, rồi (벌써 먹었어요=đã ăn rồi). Cả hai đều dùng với thì quá khứ.' }
        ],
        examples: [
            { kr: '어제 학교에 갔어요.', vi: 'Hôm qua tôi đã đi học.' },
            { kr: '아침을 먹었어요.', vi: 'Tôi đã ăn sáng.' },
            { kr: '친구를 만났어요.', vi: 'Tôi đã gặp bạn.' },
            { kr: '아직 점심을 안 먹었어요.', vi: 'Tôi vẫn chưa ăn trưa.' },
            { kr: '작년에 한국에 여행했어요.', vi: 'Năm ngoái tôi đã du lịch Hàn.' }
        ]
    },
    {
        id: 14, title: 'Thì tương lai',
        description: '~을/ㄹ 거예요 — dự định, kế hoạch',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '내일', pronunciation: '[naeil]', meaning: 'ngày mai' }, { kr: '다음 주', pronunciation: '[daeum ju]', meaning: 'tuần sau' },
            { kr: '다음 달', pronunciation: '[daeum dal]', meaning: 'tháng sau' }, { kr: '나중에', pronunciation: '[najunge]', meaning: 'sau này' },
            { kr: '올해', pronunciation: '[olhae]', meaning: 'năm nay' }, { kr: '내년', pronunciation: '[naenyeon]', meaning: 'năm sau' },
            { kr: '계획', pronunciation: '[gyehoek]', meaning: 'kế hoạch' }, { kr: '약속', pronunciation: '[yaksok]', meaning: 'lời hứa' },
            { kr: '결정하다', pronunciation: '[gyeoljeonghada]', meaning: 'quyết định' }, { kr: '예약하다', pronunciation: '[yeyakhada]', meaning: 'đặt trước' },
            { kr: '준비하다', pronunciation: '[junbihada]', meaning: 'chuẩn bị' }, { kr: '아마', pronunciation: '[ama]', meaning: 'có lẽ' },
            { kr: '아마도', pronunciation: '[amado]', meaning: 'chắc là' }
        ],
        grammar: [
            { title: 'Tương lai ~을/ㄹ 거예요', content: 'Nguyên âm + ㄹ 거예요: 가다→갈 거예요, 보다→볼 거예요. Phụ âm + 을 거예요: 먹다→먹을 거예요, 읽다→읽을 거예요. Dùng cho dự định và dự đoán.' },
            { title: 'Phủ định tương lai', content: '안 + V + 을/ㄹ 거예요: 안 갈 거예요(sẽ không đi). 못 + V + 을/ㄹ 거예요: 못 먹을 거예요(sẽ không thể ăn).' }
        ],
        examples: [
            { kr: '내일 친구를 만날 거예요.', vi: 'Ngày mai tôi sẽ gặp bạn.' },
            { kr: '한국어를 공부할 거예요.', vi: 'Tôi sẽ học tiếng Hàn.' },
            { kr: '한국에 갈 거예요.', vi: 'Tôi sẽ đi Hàn Quốc.' },
            { kr: '내년에 TOPIK 시험을 볼 거예요.', vi: 'Năm sau tôi sẽ thi TOPIK.' },
            { kr: '아마 비가 올 거예요.', vi: 'Chắc trời sẽ mưa.' }
        ]
    },
    {
        id: 15, title: 'Tổng ôn Sơ cấp 1',
        description: 'Ôn tập tất cả ngữ pháp và từ vựng đã học',
        level: '🟢 GĐ 2: Sơ cấp 1', stage: 2,
        vocab: [
            { kr: '연습', pronunciation: '[yeonseup]', meaning: 'luyện tập' }, { kr: '복습', pronunciation: '[bokseup]', meaning: 'ôn tập' },
            { kr: '시험', pronunciation: '[siheom]', meaning: 'bài thi' }, { kr: '합격', pronunciation: '[hapgyeok]', meaning: 'đỗ' },
            { kr: '대답', pronunciation: '[daedap]', meaning: 'câu trả lời' }, { kr: '질문', pronunciation: '[jilmun]', meaning: 'câu hỏi' },
            { kr: '단어', pronunciation: '[daneo]', meaning: 'từ vựng' }, { kr: '문장', pronunciation: '[munjang]', meaning: 'câu văn' },
            { kr: '발음', pronunciation: '[bareum]', meaning: 'phát âm' }, { kr: '문법', pronunciation: '[munbeop]', meaning: 'ngữ pháp' },
            { kr: '의미', pronunciation: '[uimi]', meaning: 'ý nghĩa' }, { kr: '성적', pronunciation: '[seongjeok]', meaning: 'điểm số' },
            { kr: '목표', pronunciation: '[mokpyo]', meaning: 'mục tiêu' }, { kr: '도전', pronunciation: '[dojeon]', meaning: 'thử thách' },
            { kr: '성공', pronunciation: '[seonggong]', meaning: 'thành công' }
        ],
        grammar: [
            { title: 'Ôn tập', content: 'Hãy ôn lại: ~입니다, ~은/는, ~이/가, ~을/를, ~에/에서, ~아/어요, ~았/었어요, ~을/ㄹ 거예요, 안/못 phủ định.' },
            { title: 'Kiểm tra nhanh', content: 'Hãy tự dịch: 1. Tôi là sinh viên. 2. Hôm qua tôi đã đi chợ. 3. Ngày mai tôi sẽ gặp bạn. 4. Tôi không ăn cay được. 5. Bạn học tiếng Hàn ở đâu?' }
        ],
        examples: [
            { kr: '저는 학생입니다. 학교에 가요.', vi: 'Tôi là học sinh. Tôi đi học.' },
            { kr: '어제 한국어를 공부했어요.', vi: 'Hôm qua tôi đã học tiếng Hàn.' },
            { kr: '내일 시험이 있어요. 열심히 공부할 거예요.', vi: 'Ngày mai có bài thi. Tôi sẽ học chăm chỉ.' }
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
        ],
        reading: '주말에 친구와 함께 명동에 놀러 갔어요. 거기에서 여러 가지 재미있는 경험을 했어요. 먼저 한국 전통 옷인 한복을 입어 봤어요. 정말 예뻤어요! 그리고 길거리 음식을 먹어 봤어요. 떡볶이를 먹어 봤는데 매웠지만 맛있었어요. 그다음에 카페에 가서 한국 전통 차를 마셔 봤어요. 수정과를 마셔 봤는데 달콤하고 맛있었어요. 친구가 "한국 노래방에 가 볼래?"라고 물어봤어요. "좋아!" 우리는 노래방에 가서 한국 노래를 불러 봤어요. 처음이라 어려웠지만 재미있었어요! 명동에 놀러 가길 정말 잘했어요!',
        readingQuestions: [
            { q: 'Cuối tuần người nói đã đi đâu?', options: ['Hongdae', 'Myeongdong', 'Gangnam', 'Insadong'], answer: 1 },
            { q: 'Người nói đã thử mặc gì?', options: ['Áo dài', 'Hanbok', 'Kimono', 'Vest'], answer: 1 },
            { q: 'Người nói đã thử món gì?', options: ['Bánh gạo cay', 'Bibimbap', 'Samgyeopsal', 'Jajangmyeon'], answer: 0 },
            { q: 'Cuối cùng họ đi đâu?', options: ['Nhà hàng', 'Quán bar', 'Phòng hát', 'Rạp phim'], answer: 2 }
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
        reading: '어제는 피곤해서 일찍 잤어요. 그런데 오늘은 아파서 병원에 가요. 병원이 집에서 멀어서 버스를 타요. 의사 선생님이 "약을 먹어야 해요"라고 말해요. 약을 먹고 좀 쉬었어요. 친구가 "같이 영화 볼래요?"라고 문자를 보냈어요. 그런데 저는 아파서 못 가요. "미안해요, 아파서 못 가요"라고 답장을 보냈어요. 친구가 "괜찮아, 다음에 보자"고 했어요. 좋은 친구가 있어서 다행이에요!',
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
            { kr: '꿈', pronunciation: '[kkum]', meaning: 'ước mơ' },
            { kr: '목적', pronunciation: '[mokjeok]', meaning: 'mục đích' },
            { kr: '성공하다', pronunciation: '[seonggonghada]', meaning: 'thành công' },
            { kr: '노력하다', pronunciation: '[noryeokhada]', meaning: 'nỗ lực' },
            { kr: '열심히', pronunciation: '[yeolsimhi]', meaning: 'chăm chỉ' },
            { kr: '취직하다', pronunciation: '[chwijikhada]', meaning: 'có việc làm' },
            { kr: '유학 가다', pronunciation: '[yuhak gada]', meaning: 'đi du học' },
            { kr: '장학금', pronunciation: '[janghakgeum]', meaning: 'học bổng' },
            { kr: '대학교', pronunciation: '[daehakgyo]', meaning: 'đại học' },
            { kr: '졸업하다', pronunciation: '[joreophada]', meaning: 'tốt nghiệp' },
            { kr: '미래', pronunciation: '[mirae]', meaning: 'tương lai' }
        ],
        grammar: [
            { title: '~기 위해(서)', content: 'Để làm gì: V + 기 위해(서). VD: 한국어를 공부하기 위해 한국에 왔어요(Đến Hàn để học tiếng Hàn). 건강을 위해 운동해요(Tập thể dục vì sức khỏe). Danh từ + 를/을 위해: 꿈을 위해 노력해요(Vì ước mơ mà nỗ lực).' },
            { title: 'Phân biệt 위해 vs 위해서', content: 'Về cơ bản giống nhau. ~기 위해서 dài hơn, nhấn mạnh hơn một chút. Cả hai đều dùng được. VD: 합격하기 위해(서) 열심히 공부해요.' }
        ],
        examples: [
            { kr: 'TOPIK에 합격하기 위해 공부해요.', vi: 'Học để đỗ TOPIK.' },
            { kr: '건강을 위해 운동해요.', vi: 'Tập thể dục vì sức khỏe.' },
            { kr: '꿈을 위해 열심히 노력해요.', vi: 'Vì ước mơ mà nỗ lực chăm chỉ.' },
            { kr: '취직하기 위해 한국어를 배워요.', vi: 'Học tiếng Hàn để có việc làm.' }
        ],
        reading: '저는 한국에서 대학교에 다니고 싶어요. 그래서 한국어를 공부하기 위해 열심히 노력하고 있어요. 꿈을 위해 하루에 3시간씩 공부해요. 한국 드라마를 보면서 듣기 연습도 해요. 건강을 위해 매일 운동도 해요. 몸이 건강해야 공부를 잘할 수 있거든요. TOPIK 2에 합격하기 위해 준비하고 있어요. 합격하면 장학금을 받을 수 있어요. 꿈을 위해 포기하지 않을 거예요!',
        readingQuestions: [
            { q: 'Người nói muốn làm gì?', options: ['Đi làm', 'Học đại học ở Hàn', 'Du lịch Hàn', 'Làm việc ở Hàn'], answer: 1 },
            { q: 'Người nói học bao nhiêu tiếng mỗi ngày?', options: ['1 tiếng', '2 tiếng', '3 tiếng', '5 tiếng'], answer: 2 },
            { q: 'Tại sao người nói tập thể dục?', options: ['Vì thích', 'Vì muốn giảm cân', 'Vì sức khỏe', 'Vì bạn bè rủ'], answer: 2 },
            { q: 'Sau khi đỗ TOPIK 2, người nói có thể nhận được gì?', options: ['Việc làm', 'Học bổng', 'Phần thưởng', 'Bằng khen'], answer: 1 }
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
            { kr: '일어나다', pronunciation: '[ireonada]', meaning: 'thức dậy' },
            { kr: '씻다', pronunciation: '[ssitda]', meaning: 'tắm rửa' },
            { kr: '출근하다', pronunciation: '[chulgeunhada]', meaning: 'đi làm' },
            { kr: '퇴근하다', pronunciation: '[toegeunhada]', meaning: 'tan làm' },
            { kr: '끝나다', pronunciation: '[kkeunnada]', meaning: 'kết thúc' },
            { kr: '들어가다', pronunciation: '[deureogada]', meaning: 'đi vào' },
            { kr: '나가다', pronunciation: '[nagada]', meaning: 'đi ra' },
            { kr: '순서', pronunciation: '[sunseo]', meaning: 'thứ tự' },
            { kr: '먼저', pronunciation: '[meonjeo]', meaning: 'trước hết' },
            { kr: '그 다음에', pronunciation: '[geu daeume]', meaning: 'sau đó' }
        ],
        grammar: [
            { title: '~기 전에 / ~ㄴ/은 후에', content: 'Trước khi: V + 기 전에. 먹기 전에(trước khi ăn), 자기 전에(trước khi ngủ). Sau khi: V + ㄴ/은 후에. 먹은 후에(sau khi ăn), 잔 후에(sau khi ngủ). Lưu ý: "전에" dùng động từ nguyên thể + 기, "후에" dùng quá khứ + ㄴ/은.' },
            { title: 'Sau đó: ~고 나서', content: 'Làm hành động 1 xong rồi làm hành động 2. 밥을 먹고 나서 공부해요(Ăn cơm xong rồi học). 친구를 만나고 나서 영화를 봤어요(Gặp bạn xong rồi xem phim).' }
        ],
        examples: [
            { kr: '밥을 먹기 전에 손을 씻어요.', vi: 'Rửa tay trước khi ăn.' },
            { kr: '수업이 끝난 후에 도서관에 가요.', vi: 'Sau khi tan học, đi thư viện.' },
            { kr: '자기 전에 이를 닦아요.', vi: 'Trước khi ngủ thì đánh răng.' },
            { kr: '아침에 일어나고 나서 샤워해요.', vi: 'Sáng dậy xong rồi tắm.' }
        ],
        reading: '저의 아침 루틴을 소개할게요. 먼저 아침 7시에 일어나요. 일어나고 나서 세수하고 이를 닦아요. 그 다음에 아침을 먹어요. 아침을 먹기 전에 항상 물을 마셔요. 아침을 먹은 후에 옷을 갈아입어요. 그리고 8시 30분에 집에서 나가요. 학교에 가기 전에 커피를 사요. 수업은 9시에 시작해요. 수업이 끝난 후에 도서관에서 공부해요. 저는 이 루틴이 좋아요!',
        readingQuestions: [
            { q: 'Người nói thức dậy lúc mấy giờ?', options: ['6 giờ', '7 giờ', '8 giờ', '9 giờ'], answer: 1 },
            { q: 'Người nói làm gì trước khi ăn sáng?', options: ['Tập thể dục', 'Uống nước', 'Đọc sách', 'Xem TV'], answer: 1 },
            { q: 'Người nói làm gì sau khi ăn sáng?', options: ['Đi học', 'Thay quần áo', 'Đánh răng', 'Ngủ tiếp'], answer: 1 },
            { q: 'Người nói mua cà phê khi nào?', options: ['Sau khi đến trường', 'Trước khi đi học', 'Trong giờ học', 'Sau giờ học'], answer: 1 }
        ]
    },
    {
        id: 24, title: 'V + ~는 것 (Danh từ hóa)',
        description: 'Biến động từ thành danh từ: việc...',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '것', pronunciation: '[geot]', meaning: 'việc, điều' },
            { kr: '취미', pronunciation: '[chwimi]', meaning: 'sở thích' },
            { kr: '특기', pronunciation: '[teukgi]', meaning: 'sở trường' },
            { kr: '좋아하는 것', pronunciation: '[joahaneun geot]', meaning: 'điều thích' },
            { kr: '싫어하는 것', pronunciation: '[sireohaneun geot]', meaning: 'điều ghét' },
            { kr: '잘하는 것', pronunciation: '[jalhaneun geot]', meaning: 'điều giỏi' },
            { kr: '노래', pronunciation: '[norae]', meaning: 'bài hát' },
            { kr: '춤', pronunciation: '[chum]', meaning: 'điệu nhảy' },
            { kr: '운동', pronunciation: '[undong]', meaning: 'thể thao' },
            { kr: '요리', pronunciation: '[yori]', meaning: 'nấu ăn' },
            { kr: '여행', pronunciation: '[yeohaeng]', meaning: 'du lịch' },
            { kr: '독서', pronunciation: '[dokseo]', meaning: 'đọc sách' },
            { kr: '중요하다', pronunciation: '[jungyohada]', meaning: 'quan trọng' }
        ],
        grammar: [
            { title: '~는 것', content: 'Biến động từ thành danh từ: 읽는 것(việc đọc), 노래하는 것(việc hát). Dùng với: 좋아하다(제 취미는 영화를 보는 것이에요), 중요하다(한국어를 배우는 것이 중요해요), 쉽다/어렵다(한국어를 공부하는 것이 재미있어요).' },
            { title: '~는 것이/가 + tính từ', content: 'Cấu trúc đánh giá: V+는 것이 + tính từ. 한국어를 배우는 것이 재미있어요(Việc học tiếng Hàn thì thú vị). 매일 운동하는 것이 건강에 좋아요(Mỗi ngày tập thể dục thì tốt cho sức khỏe).' }
        ],
        examples: [
            { kr: '제 취미는 노래하는 거예요.', vi: 'Sở thích của tôi là hát.' },
            { kr: '한국어를 배우는 것이 재미있어요.', vi: 'Việc học tiếng Hàn thú vị.' },
            { kr: '매일 운동하는 것이 중요해요.', vi: 'Tập thể dục mỗi ngày rất quan trọng.' },
            { kr: '제가 가장 좋아하는 것은 여행이에요.', vi: 'Điều tôi thích nhất là du lịch.' }
        ],
        reading: '제 취미는 여러 가지가 있어요. 첫째, 노래하는 것을 좋아해요. 특히 한국 노래를 좋아해요. 둘째, 운동하는 것을 좋아해요. 매일 공원에서 달리기를 해요. 셋째, 요리하는 것을 좋아해요. 한국 음식을 만드는 것이 재미있어요. 그런데 제가 가장 좋아하는 것은 여행이에요. 새로운 곳에 가는 것이 정말 즐거워요. 작년에 한국 여행을 갔어요. 다음에는 일본에 가 보고 싶어요. 여행하는 것은 새로운 것을 배우는 좋은 방법이에요!',
        readingQuestions: [
            { q: 'Có mấy sở thích được kể đến?', options: ['2', '3', '4', '5'], answer: 2 },
            { q: 'Người nói thích loại nhạc nào?', options: ['Nhạc Mỹ', 'Nhạc Hàn', 'Nhạc Nhật', 'Nhạc Việt'], answer: 1 },
            { q: 'Người nói tập thể dục ở đâu?', options: ['Phòng gym', 'Công viên', 'Nhà', 'Trường'], answer: 1 },
            { q: 'Điều người nói thích nhất là gì?', options: ['Hát', 'Nấu ăn', 'Du lịch', 'Chạy bộ'], answer: 2 }
        ]
    },
    {
        id: 25, title: 'So sánh: ~보다, ~처럼',
        description: 'Hơn, giống như — so sánh hơn và so sánh ngang bằng',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '더', pronunciation: '[deo]', meaning: 'hơn' }, { kr: '가장', pronunciation: '[kajang]', meaning: 'nhất' },
            { kr: '같다', pronunciation: '[gatda]', meaning: 'giống' }, { kr: '다르다', pronunciation: '[dareuda]', meaning: 'khác' },
            { kr: '비슷하다', pronunciation: '[biseuthada]', meaning: 'tương tự' },
            { kr: '제일', pronunciation: '[jeil]', meaning: 'nhất' },
            { kr: '훨씬', pronunciation: '[hwolssin]', meaning: 'hơn nhiều' },
            { kr: '조금', pronunciation: '[jogeum]', meaning: 'một chút' },
            { kr: '키', pronunciation: '[ki]', meaning: 'chiều cao' },
            { kr: '나이', pronunciation: '[nai]', meaning: 'tuổi' },
            { kr: '크다', pronunciation: '[keuda]', meaning: 'to, lớn' },
            { kr: '작다', pronunciation: '[jakda]', meaning: 'nhỏ' },
            { kr: '비싸다', pronunciation: '[bissada]', meaning: 'đắt' },
            { kr: '싸다', pronunciation: '[ssada]', meaning: 'rẻ' }
        ],
        grammar: [
            { title: 'So sánh hơn', content: 'A + 이/가 + B + 보다 + 더 + tính từ. VD: A가 B보다 더 커요(A to hơn B). 한국어가 영어보다 더 어려워요? (Tiếng Hàn khó hơn tiếng Anh không?)' },
            { title: 'So sánh nhất & bằng', content: 'Nhất: 가장/제일 + tính từ. 가장 좋아요(tốt nhất). Giống: A가 B처럼 + tính từ. A가 B와/과 같이 + tính từ. VD: 저는 아버지처럼 키가 커요(Tôi cao như bố).' }
        ],
        examples: [
            { kr: '한국어가 영어보다 더 어려워요?', vi: 'Tiếng Hàn khó hơn tiếng Anh không?' },
            { kr: '가장 좋아하는 음식이 뭐예요?', vi: 'Món ăn thích nhất là gì?' },
            { kr: '이 가방이 저 가방보다 훨씬 비싸요.', vi: 'Cái cặp này đắt hơn cái kia nhiều.' },
            { kr: '저도 한국 사람처럼 한국어를 잘하고 싶어요.', vi: 'Tôi cũng muốn nói giỏi tiếng Hàn như người Hàn.' }
        ],
        reading: '저와 제 친구를 비교해 볼게요. 저는 친구보다 키가 더 커요. 그런데 친구는 저보다 나이가 두 살 많아요. 친구는 한국어를 저보다 훨씬 잘해요. 3년 동안 한국에서 살았거든요. 저는 친구처럼 한국어를 잘하고 싶어요. 그런데 한국어가 영어보다 더 어려운 것 같아요. 하지만 한국어가 베트남어보다 비슷한 점이 많아요. 발음이 비슷해서 배우기가 쉬워요. 제일 좋은 것은 한국 드라마를 원어로 볼 수 있다는 거예요!',
        readingQuestions: [
            { q: 'Ai cao hơn?', options: ['Người nói', 'Bạn', 'Bằng nhau', 'Không biết'], answer: 0 },
            { q: 'Ai lớn tuổi hơn?', options: ['Người nói', 'Bạn', 'Bằng nhau', 'Không biết'], answer: 1 },
            { q: 'Tại sao bạn nói tiếng Hàn giỏi hơn?', options: ['Học lâu hơn', 'Sống ở Hàn 3 năm', 'Có người yêu Hàn', 'Học chăm hơn'], answer: 1 },
            { q: 'Người nói thấy tiếng Hàn thế nào?', options: ['Giống tiếng Anh', 'Dễ hơn tiếng Anh', 'Khó hơn tiếng Anh', 'Giống tiếng Việt'], answer: 2 }
        ]
    },
    {
        id: 26, title: 'Nối câu: ~지만, ~고, ~거나',
        description: 'Nhưng, và, hoặc — nối các mệnh đề',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '그렇지만', pronunciation: '[geureochiman]', meaning: 'nhưng' },
            { kr: '그리고', pronunciation: '[geurigo]', meaning: 'và' },
            { kr: '또는', pronunciation: '[tto-neun]', meaning: 'hoặc' },
            { kr: '하지만', pronunciation: '[hajiman]', meaning: 'tuy nhiên' },
            { kr: '그래서', pronunciation: '[geuraeseo]', meaning: 'vì vậy' },
            { kr: '그러면', pronunciation: '[geureomyeon]', meaning: 'vậy thì' },
            { kr: '또', pronunciation: '[tto]', meaning: 'lại, còn' },
            { kr: '아니면', pronunciation: '[animyeon]', meaning: 'hoặc là' },
            { kr: '그런데', pronunciation: '[geureonde]', meaning: 'nhưng mà, vậy mà' }
        ],
        grammar: [
            { title: 'Nối câu với ~지만, ~고, ~거나', content: '~지만(nhưng): 바쁘지만 공부해요(Bận nhưng học). ~고(và): 사과를 사고 바나나를 샀어요(Mua táo và chuối). ~거나(hoặc): 커피를 마시거나 차를 마셔요(Uống cà phê hoặc trà).' },
            { title: 'Nối câu với ~서', content: '~서: hành động nối tiếp (rồi): 학교에 가서 공부해요(Đi học rồi học). 만나서 밥을 먹어요(Gặp nhau rồi ăn). Lưu ý: ~서 là dạng rút gọn của ~아/어서.' }
        ],
        examples: [
            { kr: '바쁘지만 한국어를 공부해요.', vi: 'Bận nhưng vẫn học tiếng Hàn.' },
            { kr: '아침에 일어나서 샤워해요.', vi: 'Sáng dậy và tắm.' },
            { kr: '주말에 영화를 보거나 친구를 만나요.', vi: 'Cuối tuần xem phim hoặc gặp bạn.' },
            { kr: '김치는 맵지만 맛있어요.', vi: 'Kimchi cay nhưng ngon.' }
        ],
        reading: '저는 한국어를 공부하는 것을 좋아해요. 하지만 가끔 어려울 때도 있어요. 특히 문법이 어렵지만 재미있어요. 매일 학교에 가서 한국어를 공부해요. 그리고 주말에는 한국 친구를 만나서 이야기해요. 처음에는 말하는 것이 어려웠지만 지금은 좀 더 쉬워요. 한국 드라마를 보거나 K-pop을 들으면서 공부해요. 이 방법이 정말 효과적이에요. 그래서 다른 친구들에게도 추천해요. 한국어를 배우고 싶은 친구가 있으면 저에게 물어봐요!',
        readingQuestions: [
            { q: 'Người nói thấy phần nào khó?', options: ['Từ vựng', 'Ngữ pháp', 'Phát âm', 'Viết'], answer: 1 },
            { q: 'Người nói làm gì vào cuối tuần?', options: ['Ngủ', 'Gặp bạn Hàn', 'Đi chơi', 'Ở nhà'], answer: 1 },
            { q: 'Người nói học như thế nào?', options: ['Chỉ học sách giáo khoa', 'Xem phim + nghe nhạc Hàn', 'Học với gia sư', 'Đi Hàn học'], answer: 1 },
            { q: 'Cảm xúc của người nói về việc học thế nào?', options: ['Chán nản', 'Thích nhưng khó', 'Rất dễ dàng', 'Muốn bỏ cuộc'], answer: 1 }
        ]
    },
    {
        id: 27, title: 'Câu điều kiện ~으면/면',
        description: 'Nếu... thì...',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '비', pronunciation: '[bi]', meaning: 'mưa' }, { kr: '눈', pronunciation: '[nun]', meaning: 'tuyết' },
            { kr: '시간', pronunciation: '[sigan]', meaning: 'thời gian' }, { kr: '돈', pronunciation: '[don]', meaning: 'tiền' },
            { kr: '만약', pronunciation: '[manyak]', meaning: 'nếu (giả định)' },
            { kr: '내일', pronunciation: '[naeil]', meaning: 'ngày mai' },
            { kr: '휴일', pronunciation: '[hyuil]', meaning: 'ngày nghỉ' },
            { kr: '날씨', pronunciation: '[nalssi]', meaning: 'thời tiết' },
            { kr: '맑다', pronunciation: '[makda]', meaning: 'trong, nắng' },
            { kr: '흐리다', pronunciation: '[heureuda]', meaning: 'u ám' },
            { kr: '늦다', pronunciation: '[neutda]', meaning: 'muộn' },
            { kr: '일찍', pronunciation: '[iljjik]', meaning: 'sớm' },
            { kr: '아프다', pronunciation: '[apeuda]', meaning: 'đau, ốm' },
            { kr: '걱정하다', pronunciation: '[geokjeonghada]', meaning: 'lo lắng' }
        ],
        grammar: [
            { title: '~으면/면', content: 'Nếu... thì. Phụ âm + 으면: 먹으면(nếu ăn), 받으면(nếu nhận). Nguyên âm + 면: 가면(nếu đi), 보면(nếu thấy). VD: 비가 오면 안 가요(Nếu mưa thì không đi). 시간이 있으면 같이 영화 볼까요?(Nếu có thời gian thì cùng xem phim nhé?)' },
            { title: '만약 ~으면', content: '만약 = nếu, thêm vào đầu câu để nhấn mạnh giả định. 만약 내일 비가 오면... (Nếu ngày mai trời mưa thì...)' }
        ],
        examples: [
            { kr: '시간이 있으면 같이 영화 볼까요?', vi: 'Nếu có thời gian thì cùng xem phim nhé?' },
            { kr: '돈이 많으면 여행할 거예요.', vi: 'Nếu có nhiều tiền thì sẽ đi du lịch.' },
            { kr: '내일 비가 오면 집에 있을 거예요.', vi: 'Nếu ngày mai mưa thì sẽ ở nhà.' },
            { kr: '늦으면 전화하세요.', vi: 'Nếu muộn thì hãy gọi điện.' }
        ],
        reading: '만약 제가 내일 시간이 있으면 친구를 만날 거예요. 날씨가 좋으면 공원에 가고 싶어요. 그런데 날씨가 흐리면 영화관에 갈 거예요. 시간이 없으면 다음 주에 만나기로 했어요. 만약 제가 돈이 많으면 한국 여행을 갈 거예요. 부산에도 가 보고 제주도에도 가고 싶어요. TOPIK 2에 합격하면 정말 좋을 것 같아요!',
        readingQuestions: [
            { q: 'Nếu có thời gian, người nói sẽ làm gì?', options: ['Ở nhà', 'Gặp bạn', 'Đi làm', 'Học bài'], answer: 1 },
            { q: 'Nếu thời tiết đẹp, họ sẽ đi đâu?', options: ['Nhà hàng', 'Công viên', 'Rạp phim', 'Siêu thị'], answer: 1 },
            { q: 'Nếu trời u ám, họ sẽ làm gì?', options: ['Đi công viên', 'Đi xem phim', 'Ở nhà', 'Đi chơi'], answer: 1 },
            { q: 'Người nói muốn đi đâu nếu có nhiều tiền?', options: ['Nhật Bản', 'Hàn Quốc', 'Mỹ', 'Úc'], answer: 1 }
        ]
    },
    {
        id: 28, title: 'Lịch sự kính ngữ ~(으)시',
        description: 'Kính ngữ với người lớn tuổi, cấp trên',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '계시다', pronunciation: '[gyesida]', meaning: 'ở (kính ngữ của 있다)' },
            { kr: '진지', pronunciation: '[jinji]', meaning: 'cơm (kính ngữ của 밥)' },
            { kr: '댁', pronunciation: '[daek]', meaning: 'nhà (kính ngữ của 집)' },
            { kr: '드시다', pronunciation: '[deusida]', meaning: 'ăn/uống (kính ngữ)' },
            { kr: '잡수시다', pronunciation: '[japsusida]', meaning: 'ăn (kính ngữ cao)' },
            { kr: '말씀하다', pronunciation: '[malsseumhada]', meaning: 'nói (kính ngữ)' },
            { kr: '여쭈다', pronunciation: '[yeojjuda]', meaning: 'hỏi (kính ngữ)' },
            { kr: '뵙다', pronunciation: '[boepda]', meaning: 'gặp (kính ngữ của 보다)' },
            { kr: '선생님', pronunciation: '[seonsaengnim]', meaning: 'thầy/cô' },
            { kr: '할머니', pronunciation: '[halmeoni]', meaning: 'bà' },
            { kr: '할아버지', pronunciation: '[harabeoji]', meaning: 'ông' },
            { kr: '어르신', pronunciation: '[eoreusin]', meaning: 'người lớn tuổi' },
            { kr: '부모님', pronunciation: '[bumonim]', meaning: 'bố mẹ (kính ngữ)' }
        ],
        grammar: [
            { title: '~(으)시', content: 'Thêm (으)시 vào gốc động từ/tính từ để thể hiện sự kính trọng chủ ngữ. Phụ âm + 으시: 먹다→먹으시다. Nguyên âm + 시: 가다→가시다. VD: 선생님, 어디에 가세요?(Thầy đi đâu ạ?) 할머니, 진지 드세요?(Bà dùng cơm ạ?)' },
            { title: 'Từ vựng kính ngữ', content: 'Một số từ có dạng kính ngữ riêng: 있다→계시다, 먹다/마시다→드시다/잡수시다, 말하다→말씀하다, 묻다→여쭈다, 보다→뵙다. 밥→진지, 집→댁, 나이→연세.' }
        ],
        examples: [
            { kr: '선생님, 어디에 가세요?', vi: 'Thưa thầy, thầy đi đâu ạ?' },
            { kr: '할머니, 진지 잡수세요.', vi: 'Bà ơi, mời bà dùng cơm.' },
            { kr: '부모님은 댁에 계세요?', vi: 'Bố mẹ có ở nhà không ạ?' },
            { kr: '선생님을 뵙고 싶어요.', vi: 'Em muốn gặp thầy/cô ạ.' }
        ],
        reading: '어제 할머니 댁에 갔어요. 할머니는 집에 계셨어요. 제가 "할머니, 안녕하세요?"라고 인사했어요. 할머니는 "오랜만이구나, 많이 컸다"라고 말씀하셨어요. 할머니는 진지를 잡수시고 계셨어요. 저는 할머니 옆에 앉아서 이야기했어요. 할머니가 "요즘 뭐 하고 지내니?"라고 여쭤보셨어요. "한국어를 공부하고 있어요"라고 대답했어요. 할머니가 "열심히 해라"라고 말씀하셨어요. 할머니 댁에 가면 항상 기분이 좋아요!',
        readingQuestions: [
            { q: 'Người nói đã gặp ai?', options: ['Ông', 'Bà', 'Mẹ', 'Bố'], answer: 1 },
            { q: 'Bà đang làm gì khi người nói đến?', options: ['Ngủ', 'Xem TV', 'Ăn cơm', 'Đọc sách'], answer: 2 },
            { q: 'Người nói đang học gì?', options: ['Tiếng Anh', 'Tiếng Hàn', 'Tiếng Nhật', 'Tiếng Trung'], answer: 1 },
            { q: 'Sau khi đến nhà bà, người nói cảm thấy thế nào?', options: ['Buồn', 'Vui', 'Mệt', 'Chán'], answer: 1 }
        ]
    },
    {
        id: 29, title: 'Đề nghị & Mời ~을/ㄹ까요, ~읍시다',
        description: 'Rủ rê, đề nghị cùng làm',
        level: '🟡 GĐ 3: Sơ cấp 2', stage: 3,
        vocab: [
            { kr: '같이', pronunciation: '[gachi]', meaning: 'cùng nhau' },
            { kr: '함께', pronunciation: '[hamkke]', meaning: 'cùng' },
            { kr: '영화', pronunciation: '[yeonghwa]', meaning: 'phim' },
            { kr: '식당', pronunciation: '[sikdang]', meaning: 'nhà hàng' },
            { kr: '카페', pronunciation: '[kape]', meaning: 'quán cà phê' },
            { kr: '산책', pronunciation: '[sanchaek]', meaning: 'đi dạo' },
            { kr: '초대하다', pronunciation: '[chodaehada]', meaning: 'mời' },
            { kr: '약속', pronunciation: '[yaksok]', meaning: 'cuộc hẹn' },
            { kr: '좋다', pronunciation: '[jotda]', meaning: 'tốt, được' },
            { kr: '괜찮다', pronunciation: '[gwaenchanta]', meaning: 'ổn, được' },
            { kr: '그러다', pronunciation: '[geureoda]', meaning: 'như thế' },
            { kr: '물론', pronunciation: '[mullon]', meaning: 'tất nhiên' }
        ],
        grammar: [
            { title: 'Đề nghị ~을/ㄹ까요?', content: 'Rủ rê, đề nghị nhẹ nhàng: 같이 먹을까요?(Cùng ăn nhé?), 뭐 먹을까요?(Chúng ta ăn gì?). Trả lời: 네 좋아요(Vâng tốt quá), 아니요 괜찮아요(Không, ổn rồi).' },
            { title: '~읍시다 / ~아/어요', content: '~읍시다(trang trọng): 함께 갑시다! (Cùng đi nào!). ~아/어요(thân mật): 같이 가요!(Cùng đi!). Câu rủ rê thường dùng ~아/어요 trong giao tiếp hàng ngày.' }
        ],
        examples: [
            { kr: '같이 영화 볼까요?', vi: 'Cùng xem phim nhé?' },
            { kr: '내일 다시 만나요!', vi: 'Mai gặp lại nhé!' },
            { kr: '같이 점심 먹을래요?', vi: 'Cùng ăn trưa không?' },
            { kr: '이번 주말에 산책할까요?', vi: 'Cuối tuần này đi dạo nhé?' }
        ],
        reading: '오늘은 금요일이에요. 친구가 "같이 영화 볼까요?"라고 물어봤어요. "네, 좋아요! 무슨 영화를 볼까요?" 제가 대답했어요. 친구가 "한국 영화 어때요?"라고 말했어요. "좋아요!" 그리고 영화를 보고 나서 "같이 저녁 먹을래요?"라고 친구가 물어봤어요. "네, 그럴까요?" 저는 친구와 함께 식당에 갔어요. 맛있는 한국 음식을 먹었어요. 정말 재미있는 하루였어요!',
        readingQuestions: [
            { q: 'Hôm nay là thứ mấy?', options: ['Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'], answer: 1 },
            { q: 'Bạn rủ người nói làm gì trước?', options: ['Ăn tối', 'Đi dạo', 'Xem phim', 'Uống cà phê'], answer: 2 },
            { q: 'Họ xem phim gì?', options: ['Phim Mỹ', 'Phim Hàn', 'Phim Nhật', 'Phim Việt'], answer: 1 },
            { q: 'Sau khi xem phim, họ làm gì?', options: ['Về nhà', 'Ăn tối cùng nhau', 'Đi dạo', 'Đi mua sắm'], answer: 1 }
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
            { kr: '깨우다', pronunciation: '[kkaeuda]', meaning: 'đánh thức' },
            { kr: '입히다', pronunciation: '[ipida]', meaning: 'mặc cho ai' },
            { kr: '보이다', pronunciation: '[boida]', meaning: 'cho xem' },
            { kr: '가르치다', pronunciation: '[gareuchida]', meaning: 'dạy' },
            { kr: '남기다', pronunciation: '[namgida]', meaning: 'để lại' },
            { kr: '속이다', pronunciation: '[sogida]', meaning: 'lừa' },
            { kr: '늘리다', pronunciation: '[neullida]', meaning: 'kéo dài, tăng' },
            { kr: '줄이다', pronunciation: '[jurida]', meaning: 'giảm' },
            { kr: '숨기다', pronunciation: '[sumgida]', meaning: 'giấu' },
            { kr: '없애다', pronunciation: '[eopsaeda]', meaning: 'xóa bỏ' }
        ],
        grammar: [
            { title: 'Sai khiến', content: 'Làm cho ai đó làm gì. Đuôi 이/히/리/기/우/추: 먹다→먹이다(cho ăn), 웃다→웃기다(làm cười), 죽다→죽이다(giết), 깨다→깨우다(đánh thức), 입다→입히다(mặc cho), 늘다→늘리다(tăng lên).' },
            { title: 'Cấu trúc câu sai khiến', content: 'A가 B에게 C을/를 V-게 하다. 엄마가 아이에게 밥을 먹게 해요(Mẹ cho em bé ăn). 또는 동사 하나로: 엄마가 아이에게 밥을 먹여요.' }
        ],
        examples: [
            { kr: '아기에게 밥을 먹였어요.', vi: 'Đã cho em bé ăn.' },
            { kr: '너무 웃겨요!', vi: 'Cười quá!' },
            { kr: '엄마가 아이에게 옷을 입혔어요.', vi: 'Mẹ đã mặc quần áo cho em bé.' },
            { kr: '선생님이 학생들에게 한국어를 가르쳐요.', vi: 'Cô giáo dạy tiếng Hàn cho học sinh.' }
        ],
        reading: '어제는 동생을 돌봤어요. 엄마가 회사에 가셨거든요. 아침에 동생을 깨웠어요. 동생에게 밥을 먹였어요. 그리고 옷을 입혔어요. 동생이 웃겨서 저도 같이 웃었어요. 오후에는 동생에게 한국어를 가르쳤어요. "안녕하세요"라고 말하게 했어요. 동생이 귀엽게 따라 했어요. 동생을 돌보는 것은 힘들지만 재미있어요. 엄마가 "고맙다"고 말씀하셨어요. 뿌듯했어요!',
        readingQuestions: [
            { q: 'Người nói đã làm gì cho em?', options: ['Cho ăn, mặc quần áo', 'Đưa đi học', 'Mua đồ chơi', 'Dẫn đi chơi'], answer: 0 },
            { q: 'Mẹ đã đi đâu?', options: ['Siêu thị', 'Công ty', 'Bệnh viện', 'Ngân hàng'], answer: 1 },
            { q: 'Người nói đã dạy em từ gì?', options: ['Cảm ơn', 'Xin chào', 'Tạm biệt', 'Xin lỗi'], answer: 1 },
            { q: 'Cảm xúc của người nói sau khi chăm em?', options: ['Mệt mỏi', 'Buồn', 'Tự hào', 'Chán nản'], answer: 2 }
        ]
    },
    {
        id: 33, title: 'Tường thuật gián tiếp',
        description: '~다고 하다, ~냐고 하다, ~라고 하다, ~자고 하다',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '말하다', pronunciation: '[malhada]', meaning: 'nói' },
            { kr: '물어보다', pronunciation: '[mureoboda]', meaning: 'hỏi' },
            { kr: '대답하다', pronunciation: '[daedaphada]', meaning: 'trả lời' },
            { kr: '전하다', pronunciation: '[jeonhada]', meaning: 'truyền đạt' },
            { kr: '주장하다', pronunciation: '[jujanghada]', meaning: 'chủ trương' },
            { kr: '설명하다', pronunciation: '[seolmyeonghada]', meaning: 'giải thích' },
            { kr: '약속하다', pronunciation: '[yaksokhada]', meaning: 'hứa' },
            { kr: '부탁하다', pronunciation: '[butakhada]', meaning: 'nhờ vả' },
            { kr: '권유하다', pronunciation: '[gwonyuhada]', meaning: 'khuyến khích' },
            { kr: '충고하다', pronunciation: '[chungohada]', meaning: 'khuyên bảo' },
            { kr: '소개하다', pronunciation: '[sogaehada]', meaning: 'giới thiệu' }
        ],
        grammar: [
            { title: 'Tường thuật gián tiếp', content: 'Trần thuật: V+ㄴ/는다고 하다(말했다). N+(이)라고 하다. Nghi vấn: V+냐고 하다. Mệnh lệnh: V+라고 하다. Đề nghị: V+자고 하다. VD: 한국어가 어렵다고 했어요(Đã nói là tiếng Hàn khó). 같이 가자고 했어요(Rủ đi cùng).' },
            { title: 'Rút gọn trong văn nói', content: 'Thường rút gọn ~고 하다 thành ~대(요)/냐고→냐대(요)/라고→래(요)/자고→재(요). VD: 한국어가 어렵대요(Nghe nói tiếng Hàn khó). 같이 가재요(Rủ đi cùng đấy).' }
        ],
        examples: [
            { kr: '한국어가 어렵다고 했어요.', vi: 'Đã nói là tiếng Hàn khó.' },
            { kr: '뭐라고 했어요?', vi: 'Đã nói gì cơ?' },
            { kr: '친구가 같이 영화 보자고 했어요.', vi: 'Bạn rủ đi xem phim.' },
            { kr: '선생님이 늦지 말라고 하셨어요.', vi: 'Cô giáo bảo đừng đến muộn.' }
        ],
        reading: '어제 친구를 만났어요. 친구가 "요즘 한국어 공부 어때?"라고 물어봤어요. 제가 "재미있어!"라고 대답했어요. 친구가 "나도 한국어를 배우고 싶어"라고 말했어요. 그래서 제가 "같이 공부하자!"고 했어요. 친구가 "좋아!"라고 대답했어요. 선생님께 물어봤더니 "같이 공부해도 괜찮아요"라고 하셨어요. 그래서 다음 주부터 친구와 함께 한국어를 공부하기로 했어요. 선생님이 "열심히 하면 TOPIK 2도 합격할 수 있어요"라고 말씀하셨어요. 우리 모두 화이팅!',
        readingQuestions: [
            { q: 'Bạn của người nói hỏi gì?', options: ['Học tiếng Hàn thế nào rồi', 'Đi đâu chơi', 'Ăn gì chưa', 'Mấy giờ rồi'], answer: 0 },
            { q: 'Người nói đã rủ bạn làm gì?', options: ['Đi xem phim', 'Học cùng nhau', 'Đi ăn', 'Đi du lịch'], answer: 1 },
            { q: 'Thầy/cô đã nói gì?', options: ['Không được', 'Có thể học cùng', 'Phải đóng tiền', 'Đợi tháng sau'], answer: 1 },
            { q: 'Mục tiêu cuối cùng là gì?', options: ['Thi TOPIK 1', 'Thi TOPIK 2', 'Đi Hàn', 'Giao tiếp'], answer: 1 }
        ]
    },
    {
        id: 34, title: '~는/은/ㄴ 것 같다',
        description: 'Hình như, có vẻ như — suy đoán',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '아마', pronunciation: '[ama]', meaning: 'có lẽ' },
            { kr: '어쩌면', pronunciation: '[eojjeomyeon]', meaning: 'biết đâu' },
            { kr: '분명', pronunciation: '[bunmyeong]', meaning: 'chắc chắn' },
            { kr: '아마도', pronunciation: '[amado]', meaning: 'chắc là' },
            { kr: '틀림없다', pronunciation: ['teullimeopda'], meaning: 'không sai, chắc chắn' },
            { kr: '짐작하다', pronunciation: '[jimjakhada]', meaning: 'đoán' },
            { kr: '추측하다', pronunciation: '[chucheukhada]', meaning: 'suy đoán' },
            { kr: '확실하다', pronunciation: '[hwaksilhada]', meaning: 'xác thực' },
            { kr: '날씨', pronunciation: '[nalssi]', meaning: 'thời tiết' },
            { kr: '구름', pronunciation: '[gureum]', meaning: 'mây' },
            { kr: '비', pronunciation: '[bi]', meaning: 'mưa' },
            { kr: '바람', pronunciation: '[baram]', meaning: 'gió' },
            { kr: '춥다', pronunciation: '[chupda]', meaning: 'lạnh' }
        ],
        grammar: [
            { title: '~것 같다', content: 'Diễn tả suy đoán, phỏng đoán. Hiện tại: V+는 것 같다, A+은/ㄴ 것 같다. Quá khứ: V+은/ㄴ 것 같다(đã... hình như). Tương lai: V+을/ㄹ 것 같다(sắp... có vẻ). VD: 비가 오는 것 같아요(Hình như mưa). 그 영화 재미있을 것 같아요(Chắc phim đó thú vị).' },
            { title: 'Phân biệt 것 같다 vs 나 보다', content: '것 같다: suy đoán chung chung. 나 보다: suy đoán dựa trên bằng chứng cụ thể. VD: 비가 오는 것 같아요(Có vẻ mưa). 비가 오나 봐요(Hình như mưa thật - thấy người ta cầm ô).' }
        ],
        examples: [
            { kr: '비가 올 것 같아요.', vi: 'Hình như sắp mưa.' },
            { kr: '그 영화 재미있을 것 같아요.', vi: 'Chắc phim đó thú vị.' },
            { kr: '그 사람은 한국 사람인 것 같아요.', vi: 'Người đó hình như là người Hàn.' },
            { kr: '벌써 집에 간 것 같아요.', vi: 'Hình như đã về nhà rồi.' }
        ],
        reading: '오늘 아침에 하늘이 흐렸어요. 비가 올 것 같았어요. 그래서 우산을 가져왔어요. 그런데 지금은 하늘이 맑아요. 비가 안 오는 것 같아요. 친구가 "오늘 날씨가 좀 추운 것 같지 않아?"라고 물어봤어요. 저도 그렇게 생각해요. 가을이 다 가고 겨울이 오는 것 같아요. 내일은 더 추울 것 같아요. 아마도 영하로 떨어질 것 같아요. 따뜻하게 입어야겠어요!',
        readingQuestions: [
            { q: 'Sáng nay bầu trời thế nào?', options: ['Nắng', 'U ám', 'Mưa', 'Tuyết'], answer: 1 },
            { q: 'Người nói đã mang gì theo?', options: ['Áo ấm', 'Ô', 'Mũ', 'Găng tay'], answer: 1 },
            { q: 'Người nói nghĩ thế nào về thời tiết?', options: ['Nóng', 'Mát', 'Lạnh', 'Ấm áp'], answer: 2 },
            { q: 'Người nói dự đoán ngày mai thế nào?', options: ['Ấm hơn', 'Lạnh hơn', 'Mưa', 'Nắng'], answer: 1 }
        ]
    },
    {
        id: 35, title: 'Nguyên nhân ~기 때문에',
        description: 'Vì... nên... (trang trọng hơn ~아/어서)',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '때문에', pronunciation: '[ttaemune]', meaning: 'vì... nên' },
            { kr: '이유', pronunciation: '[iyu]', meaning: 'lý do' },
            { kr: '원인', pronunciation: '[wonin]', meaning: 'nguyên nhân' },
            { kr: '결과', pronunciation: '[gyeolgwa]', meaning: 'kết quả' },
            { kr: '영향', pronunciation: '[yeonghyang]', meaning: 'ảnh hưởng' },
            { kr: '효과', pronunciation: '[hyogwa]', meaning: 'hiệu quả' },
            { kr: '이기다', pronunciation: '[igida]', meaning: 'thắng' },
            { kr: '지다', pronunciation: '[jida]', meaning: 'thua' },
            { kr: '성공', pronunciation: '[seonggong]', meaning: 'thành công' },
            { kr: '실패', pronunciation: '[silpae]', meaning: 'thất bại' },
            { kr: '노력', pronunciation: '[noryeok]', meaning: 'nỗ lực' },
            { kr: '덕분에', pronunciation: '[deokbune]', meaning: 'nhờ có' }
        ],
        grammar: [
            { title: '~기 때문에', content: 'V/A + 기 때문에(sử dụng với cả quá khứ). Dùng trong văn viết và nói trang trọng. N + 때문에. VD: 한국어를 공부하기 때문에 한국에 왔어요(Đến Hàn vì học tiếng Hàn). 날씨가 좋기 때문에 공원에 가요(Vì thời tiết đẹp nên đi công viên).' },
            { title: '덕분에 vs 때문에', content: '덕분에: nhờ có (kết quả tốt). 때문에: vì (kết quả trung tính/tích cực/tiêu cực). VD: 선생님 덕분에 합격했어요(Nhờ cô mà đỗ). 비 때문에 늦었어요(Vì mưa nên muộn).' }
        ],
        examples: [
            { kr: '날씨가 좋기 때문에 공원에 가요.', vi: 'Vì thời tiết đẹp nên đi công viên.' },
            { kr: '바쁘기 때문에 못 가요.', vi: 'Vì bận nên không đi được.' },
            { kr: '선생님 덕분에 한국어를 잘하게 됐어요.', vi: 'Nhờ cô giáo mà tôi nói tiếng Hàn tốt lên.' },
            { kr: '비 때문에 경기가 취소됐어요.', vi: 'Vì mưa nên trận đấu bị hủy.' }
        ],
        reading: '오늘은 시험 결과를 받았어요. 저는 TOPIK 1에 합격했어요! 정말 기뻐요. 매일 열심히 공부했기 때문에 좋은 결과가 나온 것 같아요. 그리고 선생님 덕분에 한국어를 잘하게 됐어요. 선생님이 항상 친절하게 가르쳐 주셨어요. 친구들 덕분도 있어요. 같이 공부해서 힘이 났어요. 하지만 날씨 때문에 힘들었던 적도 있었어요. 겨울에 너무 추워서 학교에 가기 싫었거든요. 그래도 포기하지 않았기 때문에 합격할 수 있었어요. 다음 목표는 TOPIK 2예요!',
        readingQuestions: [
            { q: 'Kết quả thi thế nào?', options: ['Trượt', 'Đỗ TOPIK 1', 'Đỗ TOPIK 2', 'Chưa thi'], answer: 1 },
            { q: 'Tại sao người nói đạt kết quả tốt?', options: ['Học chăm chỉ + nhờ cô giáo', 'May mắn', 'Thi dễ', 'Có bạn giúp'], answer: 0 },
            { q: 'Ai đã giúp người nói?', options: ['Bố mẹ', 'Giáo viên và bạn bè', 'Anh chị', 'Người yêu'], answer: 1 },
            { q: 'Mục tiêu tiếp theo là gì?', options: ['TOPIK 1', 'TOPIK 2', 'Đi Hàn', 'Đi làm'], answer: 1 }
        ]
    },
    {
        id: 36, title: '~(으)ㄴ/는/(으)ㄹ 때',
        description: 'Khi... — diễn tả thời điểm',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '때', pronunciation: '[ttae]', meaning: 'khi, lúc' },
            { kr: '순간', pronunciation: '[sun-gan]', meaning: 'khoảnh khắc' },
            { kr: '어리다', pronunciation: '[eorida]', meaning: 'trẻ, nhỏ' },
            { kr: '젊다', pronunciation: '[jeomda]', meaning: 'trẻ, thanh xuân' },
            { kr: '기회', pronunciation: '[gihoe]', meaning: 'cơ hội' },
            { kr: '경우', pronunciation: '[gyeong-u]', meaning: 'trường hợp' },
            { kr: '도중', pronunciation: '[dojung]', meaning: 'giữa chừng' },
            { kr: '중', pronunciation: '[jung]', meaning: 'đang, giữa' },
            { kr: '사이', pronunciation: '[sai]', meaning: 'giữa, lúc' },
            { kr: '동안', pronunciation: '[dongan]', meaning: 'trong lúc, suốt' },
            { kr: '까지', pronunciation: '[kkaji]', meaning: 'cho đến khi' }
        ],
        grammar: [
            { title: '~(으)ㄹ 때', content: 'Khi: V/A + (으)ㄹ 때 (hiện tại/tương lai: lúc nào đó). V/A + 은/는/던 때 (quá khứ: đã từng). VD: 어렸을 때(khi còn nhỏ), 밥 먹을 때(khi ăn cơm), 피곤할 때 커피를 마셔요(Khi mệt tôi uống cà phê).' },
            { title: '~는 중에 / 동안', content: '~는 중에: đang trong lúc (공부하는 중에=đang học). ~동안: suốt khoảng thời gian (3시간 동안=suốt 3 tiếng). ~까지: cho đến khi (밤 10시까지=đến tận 10h tối).' }
        ],
        examples: [
            { kr: '어렸을 때 한국에 살았어요.', vi: 'Khi nhỏ tôi sống ở Hàn.' },
            { kr: '피곤할 때 커피를 마셔요.', vi: 'Khi mệt tôi uống cà phê.' },
            { kr: '공부하는 중에 친구가 왔어요.', vi: 'Đang học thì bạn đến.' },
            { kr: '여행하는 동안 재미있는 경험을 많이 했어요.', vi: 'Suốt chuyến đi có nhiều trải nghiệm thú vị.' }
        ],
        reading: '어렸을 때 저는 한국에 살았어요. 아버지가 한국에서 일하셨거든요. 그때는 한국어를 몰랐지만 지금은 다시 배우고 있어요. 한국에 있을 때 자주 김치를 먹었어요. 처음에는 매워서 힘들었지만 지금은 좋아해요. 한국 드라마를 볼 때마다 그때 생각이 나요. 특히 겨울에 눈 오는 날이 생각나요. 눈이 올 때 친구들과 눈싸움을 했어요. 정말 재미있었어요. 다시 한국에 가고 싶을 때가 많아요. TOPIK 2에 합격했으면 좋겠어요!',
        readingQuestions: [
            { q: 'Khi nhỏ người nói sống ở đâu?', options: ['Việt Nam', 'Hàn Quốc', 'Nhật Bản', 'Mỹ'], answer: 1 },
            { q: 'Khi ở Hàn, người nói thường ăn gì?', options: ['Bánh mì', 'Kimchi', 'Cơm', 'Mì'], answer: 1 },
            { q: 'Khi tuyết rơi, người nói đã làm gì?', options: ['Ở nhà', 'Đi dạo', 'Ném tuyết với bạn', 'Ngủ'], answer: 2 },
            { q: 'Người nói nhớ nhất mùa nào?', options: ['Xuân', 'Hè', 'Thu', 'Đông'], answer: 3 }
        ]
    },
    {
        id: 37, title: '~다가: Đang... thì...',
        description: 'Hành động đang làm thì chuyển sang hành động khác',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '가다가', pronunciation: '[gadaga]', meaning: 'đang đi thì...' },
            { kr: '하다가', pronunciation: '[hadaga]', meaning: 'đang làm thì...' },
            { kr: '보다가', pronunciation: '[bodaga]', meaning: 'đang xem thì...' },
            { kr: '먹다가', pronunciation: '[meokdaga]', meaning: 'đang ăn thì...' },
            { kr: '듣다가', pronunciation: '[deutdaga]', meaning: 'đang nghe thì...' },
            { kr: '쉬다가', pronunciation: '[swidaga]', meaning: 'nghỉ một lúc rồi...' },
            { kr: '갑자기', pronunciation: '[gapjagi]', meaning: 'đột nhiên' },
            { kr: '갓', pronunciation: '[gat]', meaning: 'vừa mới' },
            { kr: '그때', pronunciation: '[geuttae]', meaning: 'lúc đó' },
            { kr: '순간', pronunciation: '[sun-gan]', meaning: 'khoảnh khắc' }
        ],
        grammar: [
            { title: '~다가', content: 'Hành động 1 đang làm thì chuyển sang hành động 2 (thường là bất ngờ). V + 다가 + V2. VD: 공부하다가 친구를 만났어요(đang học thì gặp bạn). 집에 가다가 비가 왔어요(đang về nhà thì mưa). Cũng có thể dùng để chỉ sự chuyển hướng: 쉬다가 다시 공부해요(Nghỉ một lúc rồi học lại).' },
            { title: 'Phân biệt ~다가 vs ~았/었다가', content: '~다가: hành động 1 chưa kết thúc. ~았다가: hành động 1 đã kết thúc rồi chuyển sang hành động 2. VD: 공부하다가 잤어요(đang học thì ngủ - chưa học xong). 공부했다가 잤어요(học xong rồi ngủ).' }
        ],
        examples: [
            { kr: '길을 걷다가 친구를 만났어요.', vi: 'Đang đi thì gặp bạn.' },
            { kr: '텔레비전을 보다가 잠들었어요.', vi: 'Đang xem TV thì ngủ thiếp đi.' },
            { kr: '밥을 먹다가 김치가 매워서 물을 마셨어요.', vi: 'Đang ăn thì kimchi cay quá nên uống nước.' },
            { kr: '공부하다가 좀 쉬었어요.', vi: 'Đang học thì nghỉ một chút.' }
        ],
        reading: '어제는 정말 재미있는 일이 있었어요. 집에 걸어가다가 갑자기 비가 내리기 시작했어요. 우산이 없어서 비를 맞았어요. 그런데 그때 옆에 있던 한국 할머니가 "학생, 같이 들어가자"라고 하셨어요. 할머니 우산 속으로 들어갔어요. 할머니가 "어디 사니?"라고 물어보셨어요. "저 한국어를 공부하고 있어요"라고 말했어요. 할머니가 "열심히 해라!"라고 말씀하셨어요. 집에 도착해서 옷을 갈아입다가 할머니 생각이 났어요. 정말 감동이었어요!',
        readingQuestions: [
            { q: 'Trên đường về nhà, chuyện gì xảy ra?', options: ['Gặp bạn', 'Trời mưa', 'Bị ngã', 'Lạc đường'], answer: 1 },
            { q: 'Ai đã giúp người nói?', options: ['Bạn cùng lớp', 'Một bà cụ', 'Người bán hàng', 'Tài xế'], answer: 1 },
            { q: 'Người nói đã nói gì với bà cụ?', options: ['Cảm ơn', 'Đang học tiếng Hàn', 'Xin lỗi', 'Tạm biệt'], answer: 1 },
            { q: 'Cảm xúc của người nói thế nào?', options: ['Giận', 'Cảm động', 'Buồn', 'Sợ'], answer: 1 }
        ]
    },
    {
        id: 38, title: 'Nhượng bộ: ~아/어도',
        description: 'Dù... cũng...',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '괜찮다', pronunciation: '[gwaenchanta]', meaning: 'ổn, không sao' },
            { kr: '상관없다', pronunciation: '[sanggwaneopda]', meaning: 'không liên quan' },
            { kr: '아무리', pronunciation: '[amuri]', meaning: 'dù có... đến đâu' },
            { kr: '아무리 ~아/어도', pronunciation: '[amuri ~ado]', meaning: 'dù có thế nào đi nữa' },
            { kr: '비록', pronunciation: '[birok]', meaning: 'dù cho' },
            { kr: '항상', pronunciation: '[hangsang]', meaning: 'luôn luôn' },
            { kr: '언제나', pronunciation: '[eonjena]', meaning: 'lúc nào cũng' },
            { kr: '절대', pronunciation: '[jeoldae]', meaning: 'tuyệt đối' },
            { kr: '반드시', pronunciation: '[bandeusi]', meaning: 'nhất định' },
            { kr: '꼭', pronunciation: '[kkok]', meaning: 'chắc chắn' }
        ],
        grammar: [
            { title: '~아/어도', content: 'Dù... cũng: V/A + 아/어도. 바빠도(dù bận), 비가 와도(dù mưa), 싸도(dù rẻ). VD: 바빠도 운동해요(Dù bận vẫn tập thể dục). 비가 와도 갈 거예요(Dù mưa vẫn sẽ đi).' },
            { title: '아무리 ~아/어도', content: 'Dù có... đến đâu cũng: 아무리 바빠도(dù bận đến đâu cũng), 아무리 어려워도(dù khó thế nào cũng). VD: 아무리 바빠도 한국어 공부는 해요(Dù bận thế nào vẫn học tiếng Hàn).' }
        ],
        examples: [
            { kr: '바빠도 한국어를 공부해요.', vi: 'Dù bận vẫn học tiếng Hàn.' },
            { kr: '비가 와도 갈 거예요.', vi: 'Dù mưa vẫn sẽ đi.' },
            { kr: '아무리 어려워도 포기하지 마세요.', vi: 'Dù khó thế nào cũng đừng bỏ cuộc.' },
            { kr: '늦어도 괜찮아요.', vi: 'Dù muộn cũng không sao.' }
        ],
        reading: '한국어 공부는 쉽지 않아요. 아무리 바빠도 매일 30분씩 공부해요. 가끔 피곤해도 공부를 해요. 왜냐하면 꼭 TOPIK 2에 합격하고 싶거든요. 가족들이 "힘들면 쉬어"라고 말하지만 저는 계속하고 있어요. 아무리 어려워도 포기하지 않을 거예요. 처음에는 발음이 어려웠어요. 그래도 연습하면 좋아질 거라고 생각해요. 한국어는 어렵지만 재미있어요. 어려워도 재미있으니까 계속할 수 있어요!',
        readingQuestions: [
            { q: 'Mỗi ngày người nói học bao lâu?', options: ['15 phút', '30 phút', '1 tiếng', '2 tiếng'], answer: 1 },
            { q: 'Người nói học ngay cả khi nào?', options: ['Ốm', 'Mệt', 'Bận', 'Cả mệt và bận'], answer: 3 },
            { q: 'Gia đình khuyên người nói điều gì?', options: ['Học thêm', 'Nghỉ nếu mệt', 'Đi Hàn', 'Đổi phương pháp'], answer: 1 },
            { q: 'Tại sao người nói tiếp tục học?', options: ['Vì bị bắt buộc', 'Vì thú vị dù khó', 'Vì dễ', 'Vì có bạn học'], answer: 1 }
        ]
    },
    {
        id: 39, title: 'Càng ~ càng: ~(으)ㄹ수록',
        description: '(으)ㄹ수록 — So sánh kép',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '갈수록', pronunciation: '[galsurok]', meaning: 'càng đi càng...' },
            { kr: '많을수록', pronunciation: '[maneulsurok]', meaning: 'càng nhiều càng...' },
            { kr: '공부할수록', pronunciation: '[gongbuhalsurok]', meaning: 'càng học càng...' },
            { kr: '높을수록', pronunciation: '[nopeulsurok]', meaning: 'càng cao càng...' },
            { kr: '깊다', pronunciation: '[gipda]', meaning: 'sâu' },
            { kr: '넓다', pronunciation: '[neopda]', meaning: 'rộng' },
            { kr: '자주', pronunciation: '[jaju]', meaning: 'thường xuyên' },
            { kr: '점점', pronunciation: '[jeomjeom]', meaning: 'dần dần' },
            { kr: '더욱', pronunciation: '[deouk]', meaning: 'hơn nữa' },
            { kr: '갈수록 태산', pronunciation: '[galsurok taesan]', meaning: 'càng đi càng khó' }
        ],
        grammar: [
            { title: '~(으)ㄹ수록', content: 'Càng... càng...: V/A + (으)ㄹ수록. Phụ âm + 을수록, nguyên âm + ㄹ수록. VD: 공부할수록 재미있어요(Càng học càng thú vị). 많을수록 좋아요(Càng nhiều càng tốt). 한국어를 배울수록 한국이 좋아져요(Càng học tiếng Hàn càng thích Hàn).' },
            { title: 'Cấu trúc nhấn mạnh', content: '~(으)면 ~(으)ㄹ수록: Nếu càng... thì càng... 배우면 배울수록 더 알고 싶어요(Càng học càng muốn biết thêm).' }
        ],
        examples: [
            { kr: '한국어를 공부할수록 재미있어요.', vi: 'Càng học tiếng Hàn càng thú vị.' },
            { kr: '클수록 비싸요?', vi: 'Càng to càng đắt à?' },
            { kr: '한국 드라마를 볼수록 한국에 가고 싶어져요.', vi: 'Càng xem phim Hàn càng muốn đi Hàn.' },
            { kr: '자주 연습할수록 실력이 늘어요.', vi: 'Càng luyện tập thường xuyên thì trình độ càng tăng.' }
        ],
        reading: '한국어를 공부한 지 1년이 됐어요. 처음에는 정말 어려웠는데 공부할수록 재미있어져요. 특히 K-pop을 들을수록 가사가 더 잘 들려요. 한국 드라마를 볼수록 한국 문화를 더 잘 알게 돼요. 그리고 친구들과 한국어로 대화할수록 말하는 게 더 편해져요. 아직 부족하지만 연습할수록 좋아질 거예요. 매일 매일 하는 것이 중요해요. 많이 연습할수록 실력이 늘어요. 저는 한국어를 사랑하게 됐어요!',
        readingQuestions: [
            { q: 'Người nói đã học tiếng Hàn bao lâu?', options: ['6 tháng', '1 năm', '2 năm', '3 năm'], answer: 1 },
            { q: 'Người nói càng học càng thấy thế nào?', options: ['Chán', 'Khó hơn', 'Thú vị hơn', 'Nhàm chán'], answer: 2 },
            { q: 'Càng nghe K-pop thì điều gì xảy ra?', options: ['Càng thích nhảy', 'Càng nghe rõ lời', 'Càng buồn ngủ', 'Càng ồn ào'], answer: 1 },
            { q: 'Theo người nói, điều gì quan trọng?', options: ['Học nhiều 1 lúc', 'Làm mỗi ngày', 'Chỉ học ngữ pháp', 'Chỉ học từ vựng'], answer: 1 }
        ]
    },
    {
        id: 40, title: 'Mục đích ~도록 & ~게',
        description: 'Để cho, đến mức...',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '듣도록', pronunciation: '[deutdorok]', meaning: 'để nghe được' },
            { kr: '보도록', pronunciation: '[bodorok]', meaning: 'để thấy được' },
            { kr: '늦지 않도록', pronunciation: '[neutji antorok]', meaning: 'để không muộn' },
            { kr: '건강하게', pronunciation: '[geonganghage]', meaning: 'một cách khỏe mạnh' },
            { kr: '재미있게', pronunciation: '[jaemiitge]', meaning: 'một cách thú vị' },
            { kr: '쉽게', pronunciation: '[swipge]', meaning: 'một cách dễ dàng' },
            { kr: '꼭', pronunciation: '[kkok]', meaning: 'nhất định' },
            { kr: '잊다', pronunciation: '[itda]', meaning: 'quên' },
            { kr: '기억하다', pronunciation: '[gieokhada]', meaning: 'nhớ' },
            { kr: '메모', pronunciation: '[memo]', meaning: 'ghi chú' },
            { kr: '준비', pronunciation: '[junbi]', meaning: 'chuẩn bị' }
        ],
        grammar: [
            { title: '~도록', content: 'Để cho, để có thể: V + 도록. 들을 수 있도록 크게 말해 주세요(Nói to để nghe được). 늦지 않도록 일찍 가요(Đi sớm để không bị muộn). 건강하게 살도록 운동해요(Tập thể dục để sống khỏe).' },
            { title: '~게 (phó từ hóa)', content: 'Biến tính từ thành trạng từ: 쉽게(dễ dàng), 재미있게(thú vị), 건강하게(một cách khỏe mạnh). VD: 쉽게 설명해 주세요(Hãy giải thích dễ hiểu). 즐겁게 공부해요(Học một cách vui vẻ).' }
        ],
        examples: [
            { kr: '늦지 않도록 일찍 가요.', vi: 'Đi sớm để không bị muộn.' },
            { kr: '건강하게 살도록 운동해요.', vi: 'Tập thể dục để sống khỏe.' },
            { kr: '잊지 않도록 메모해요.', vi: 'Ghi chú lại để không quên.' },
            { kr: '쉽게 설명해 주세요.', vi: 'Hãy giải thích dễ hiểu.' }
        ],
        reading: 'TOPIK 시험 준비를 위해 제가 하는 방법을 소개할게요. 첫째, 매일 공부할 수 있도록 시간표를 만들어요. 둘째, 모르는 단어가 나오면 바로 메모해서 잊지 않도록 해요. 셋째, 쉽게 이해할 수 있도록 한국 드라마를 자막과 함께 봐요. 그리고 건강하게 지내기 위해 운동도 해요. 시험장에 늦지 않도록 전날에 준비를 다 해요. 이렇게 준비하면 좋은 결과가 있을 거예요!',
        readingQuestions: [
            { q: 'Người nói làm gì để không quên từ mới?', options: ['Học thuộc lòng', 'Ghi chú lại', 'Viết nhiều lần', 'Đọc to'], answer: 1 },
            { q: 'Người nói xem phim Hàn với gì?', options: ['Không sub', 'Phụ đề', 'Âm thanh', 'Bạn bè'], answer: 1 },
            { q: 'Người nói tập thể dục để làm gì?', options: ['Giảm cân', 'Khỏe mạnh', 'Cơ bắp', 'Giải trí'], answer: 1 },
            { q: 'Người nói chuẩn bị gì trước ngày thi?', options: ['Mua đồ', 'Chuẩn bị trước để không muộn', 'Ngủ sớm', 'Ăn nhiều'], answer: 1 }
        ]
    },
    {
        id: 41, title: 'Giả định ~았/었으면 좋겠다',
        description: 'Ước muốn, hy vọng điều gì xảy ra',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '소원', pronunciation: '[sowon]', meaning: 'điều ước' },
            { kr: '바라다', pronunciation: '[barada]', meaning: 'mong muốn' },
            { kr: '기대하다', pronunciation: '[gidaehada]', meaning: 'kỳ vọng' },
            { kr: '희망', pronunciation: '[huimang]', meaning: 'hy vọng' },
            { kr: '꿈', pronunciation: '[kkum]', meaning: 'giấc mơ' },
            { kr: '이루다', pronunciation: '[iruda]', meaning: 'đạt được' },
            { kr: '휴가', pronunciation: '[hyuga]', meaning: 'kỳ nghỉ' },
            { kr: '방학', pronunciation: '[banghak]', meaning: 'kỳ nghỉ học' },
            { kr: '여유', pronunciation: '[yeoyu]', meaning: 'thoải mái, rảnh' },
            { kr: '편안하다', pronunciation: '[pyeonanhada]', meaning: 'thoải mái, yên bình' },
            { kr: '행복하다', pronunciation: '[haengbokhada]', meaning: 'hạnh phúc' }
        ],
        grammar: [
            { title: '~았/었으면 좋겠다', content: 'Giá mà/ước gì: V/A + 았/었으면 좋겠어요. Diễn tả ước muốn, hy vọng điều gì đó xảy ra. VD: 시험이 쉬웠으면 좋겠어요(Giá mà đề thi dễ). 한국에 갔으면 좋겠어요(Mong được đi Hàn).' },
            { title: 'Phân biệt với ~(으)면 좋겠다', content: '~(으)면 좋겠다: ước muốn đơn giản (날씨가 좋으면 좋겠어요=Giá mà thời tiết đẹp). ~았/었으면 좋겠다: ước muốn mạnh hơn, nhấn mạnh kết quả (TOPIK에 합격했으면 좋겠어요=Mong là đỗ TOPIK).' }
        ],
        examples: [
            { kr: 'TOPIK에 합격했으면 좋겠어요.', vi: 'Mong là đỗ TOPIK.' },
            { kr: '날씨가 좋았으면 좋겠어요.', vi: 'Mong thời tiết đẹp.' },
            { kr: '한국에 갔으면 좋겠어요.', vi: 'Mong được đi Hàn Quốc.' },
            { kr: '모든 사람이 행복했으면 좋겠어요.', vi: 'Mong mọi người đều hạnh phúc.' }
        ],
        reading: '저에게는 소원이 있어요. 바로 한국에 가서 대학교를 다니는 거예요. 그래서 TOPIK 2에 꼭 합격했으면 좋겠어요. 한국 음식을 더 많이 먹어 봤으면 좋겠어요. 한국 친구도 많이 사귀었으면 좋겠어요. 그리고 부모님께 좋은 선물을 드릴 수 있었으면 좋겠어요. 부모님이 항상 저를 응원해 주시거든요. 내년에는 꼭 모든 소원이 이루어졌으면 좋겠어요. 다들 행복하게 살았으면 좋겠어요!',
        readingQuestions: [
            { q: 'Điều ước của người nói là gì?', options: ['Du lịch Hàn', 'Học đại học ở Hàn', 'Làm việc ở Hàn', 'Sống ở Hàn'], answer: 1 },
            { q: 'Người nói muốn đỗ kỳ thi nào?', options: ['TOPIK 1', 'TOPIK 2', 'IELTS', 'HSK'], answer: 1 },
            { q: 'Người nói muốn làm gì cho bố mẹ?', options: ['Mua nhà', 'Tặng quà', 'Đưa đi Hàn', 'Gửi tiền'], answer: 1 },
            { q: 'Khi nào người nói hy vọng mọi điều ước thành hiện thực?', options: ['Tháng sau', 'Năm sau', '5 năm nữa', '10 năm nữa'], answer: 1 }
        ]
    },
    {
        id: 42, title: 'Thói quen & Kinh nghiệm',
        description: '~곤 하다, ~은/ㄴ 적이 있다',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '자주', pronunciation: '[jaju]', meaning: 'thường xuyên' },
            { kr: '가끔', pronunciation: '[gakkeum]', meaning: 'thỉnh thoảng' },
            { kr: '전혀', pronunciation: '[jeonhyeo]', meaning: 'hoàn toàn không' },
            { kr: '보통', pronunciation: '[botong]', meaning: 'thông thường' },
            { kr: '늘', pronunciation: '[neul]', meaning: 'luôn' },
            { kr: '대부분', pronunciation: '[daebubun]', meaning: 'phần lớn' },
            { kr: '어렸을 때', pronunciation: '[eoryeosseul ttae]', meaning: 'khi còn nhỏ' },
            { kr: '예전에', pronunciation: '[yejeone]', meaning: 'trước đây' },
            { kr: '작년', pronunciation: '[jangnyeon]', meaning: 'năm ngoái' },
            { kr: '지난번', pronunciation: '[jinanbeon]', meaning: 'lần trước' },
            { kr: '경험', pronunciation: '[gyeongheom]', meaning: 'kinh nghiệm' },
            { kr: '추억', pronunciation: '[chueok]', meaning: 'kỷ niệm' }
        ],
        grammar: [
            { title: 'Kinh nghiệm ~은/ㄴ 적이 있다', content: 'Đã từng: V + 은/ㄴ 적이 있다. 한국에 간 적이 있어요(Đã từng đi Hàn). 김치를 먹어 본 적이 있어요?(Đã từng ăn kimchi chưa?). Phủ định: ~은/ㄴ 적이 없다(chưa từng).' },
            { title: 'Thói quen ~곤 하다', content: 'Thường (trong quá khứ): V + 곤 했다. 어렸을 때 공원에 가곤 했어요(Hồi nhỏ thường đi công viên). Lưu ý: ~곤 하다 chỉ thói quen trong quá khứ, không dùng cho hiện tại.' }
        ],
        examples: [
            { kr: '한국 음식을 먹어 본 적이 있어요?', vi: 'Đã từng ăn đồ Hàn chưa?' },
            { kr: '어렸을 때 할머니 댁에 가곤 했어요.', vi: 'Hồi nhỏ thường về nhà bà.' },
            { kr: '한국에 가 본 적이 있어요?', vi: 'Đã từng đi Hàn Quốc bao giờ chưa?' },
            { kr: '대학교 때 늦게까지 공부하곤 했어요.', vi: 'Hồi đại học tôi thường học đến khuya.' }
        ],
        reading: '제가 한국어를 처음 배우기 시작했을 때가 생각나요. 2년 전이었어요. 처음에는 한글이 너무 어려워서 매일 연습하곤 했어요. 그때는 친구들과 한국어로 대화해 본 적이 없었어요. 6개월 후에 처음으로 한국 드라마를 자막 없이 본 적이 있어요. 완전히는 이해하지 못했지만 기분이 좋았어요. 작년에는 한국 친구를 만난 적이 있어요. 그 친구랑 이야기하면서 한국어 실력이 많이 늘었어요. 지금은 한국 음식을 만들어 본 적도 있어요. 김치찌개를 만들었는데 맛있었어요!',
        readingQuestions: [
            { q: 'Người nói bắt đầu học tiếng Hàn khi nào?', options: ['1 năm trước', '2 năm trước', '3 năm trước', '6 tháng trước'], answer: 1 },
            { q: 'Lúc đầu người nói thường làm gì?', options: ['Xem phim', 'Luyện viết Hangul', 'Nghe nhạc', 'Nói chuyện'], answer: 1 },
            { q: 'Sau 6 tháng, người nói đã làm gì?', options: ['Đi Hàn', 'Xem phim không sub', 'Thi TOPIK', 'Gặp bạn Hàn'], answer: 1 },
            { q: 'Người nói đã từng nấu món gì?', options: ['Bibimbap', 'Kimchi jjigae', 'Bulgogi', 'Tteokbokki'], answer: 1 }
        ]
    },
    {
        id: 43, title: 'Thành ngữ & Tục ngữ thông dụng',
        description: 'Thành ngữ tiếng Hàn thường gặp',
        level: '🟠 GĐ 4: Trung cấp', stage: 4,
        vocab: [
            { kr: '고생 끝에 낙이 온다', pronunciation: '[gosaeng kkeute nagi onda]', meaning: 'Hết khổ tới sướng' },
            { kr: '시작이 반이다', pronunciation: '[sijagi banida]', meaning: 'Bắt đầu là một nửa' },
            { kr: '말이 씨가 된다', pronunciation: '[mari ssiga doenda]', meaning: 'Lời nói thành hạt giống (cẩn thận lời nói)' },
            { kr: '호랑이도 제 말 하면 온다', pronunciation: '[horangido je mal hamyeon onda]', meaning: 'Nói tới Tào Tháo, Tào Tháo tới' },
            { kr: '가는 날이 장날', pronunciation: '[ganeun nari jangnal]', meaning: 'Ngày đi gặp ngày chợ (tình cờ)' },
            { kr: '낮말은 새가 듣고 밤말은 쥐가 듣는다', pronunciation: '[nanmareun saega deutgo bammareun jwiga deunneunda]', meaning: 'Tai vách mạch rừng' },
            { kr: '천 리 길도 한 걸음부터', pronunciation: '[cheon ri gildo han georeumbuteo]', meaning: 'Vạn sự khởi đầu nan' },
            { kr: '소 잃고 외양간 고친다', pronunciation: '[so ilko oeyanggan gochinda]', meaning: 'Mất bò mới lo làm chuồng' },
            { kr: '김칫국부터 마시다', pronunciation: '[kimchitgukbuteo masida]', meaning: 'Vui mừng quá sớm' },
            { kr: '발이 넓다', pronunciation: '[bari neopda]', meaning: 'Có mối quan hệ rộng' }
        ],
        grammar: [
            { title: 'Thành ngữ & Tục ngữ', content: 'Tiếng Hàn có nhiều thành ngữ hay. 고생 끝에 낙이 온다 = Sau cơn mưa trời lại sáng. 시작이 반이다 = Vạn sự khởi đầu nan. 가는 날이 장날 = Oái oăm thay. 천 리 길도 한 걸음부터 = Ngàn dặm cũng bắt đầu từ một bước chân.' },
            { title: 'Dùng thành ngữ trong TOPIK', content: 'Đề TOPIK 2 thường có câu hỏi về thành ngữ. Học 5-10 câu mỗi tuần. Quan trọng: hiểu ngữ cảnh sử dụng chứ không chỉ học nghĩa đen.' }
        ],
        examples: [
            { kr: '시작이 반이에요. 포기하지 마세요!', vi: 'Bắt đầu là một nửa rồi. Đừng bỏ cuộc!' },
            { kr: '고생 끝에 낙이 온다고 했어요.', vi: 'Người ta nói hết khổ tới sướng.' },
            { kr: '천 리 길도 한 걸음부터니까 오늘부터 시작해요.', vi: 'Vạn sự khởi đầu nan, hãy bắt đầu từ hôm nay.' },
            { kr: '소 잃고 외양간 고치지 말고 미리 준비해요.', vi: 'Đừng mất bò mới lo làm chuồng, hãy chuẩn bị trước.' }
        ],
        reading: '한국어를 배우면서 재미있는 속담을 많이 알게 됐어요. 제가 가장 좋아하는 속담은 "시작이 반이다"예요. 처음에 한국어를 시작할 때는 자신이 없었거든요. 그런데 일단 시작하니까 생각보다 괜찮았어요. 친구가 "참, 호랑이도 제 말 하면 온다더니!"라고 농담한 적이 있어요. 그날 한국에 사는 친구한테서 전화가 왔거든요. 정말 웃겼어요! 한국어 공부도 "천 리 길도 한 걸음부터"라고 생각해요. 매일 조금씩 하다 보면 언젠가는 "고생 끝에 낙이 온다"처럼 좋은 날이 올 거예요!',
        readingQuestions: [
            { q: 'Người nói thích câu thành ngữ nào nhất?', options: ['Hết khổ tới sướng', 'Bắt đầu là một nửa', 'Ngàn dặm bắt đầu từ bước đầu', 'Tai vách mạch rừng'], answer: 1 },
            { q: 'Tại sao người nói thích câu đó?', options: ['Dễ nhớ', 'Đã trải nghiệm sự khó khăn lúc bắt đầu', 'Hay quá', 'Bạn bè nói'], answer: 1 },
            { q: 'Chuyện gì xảy ra với câu "nói tới Tào Tháo"?', options: ['Bạn đến thăm', 'Bạn ở Hàn gọi điện', 'Gặp bạn cũ', 'Nhận được quà'], answer: 1 },
            { q: 'Người nói tin vào điều gì?', options: ['Học nhanh là tốt nhất', 'Kiên trì mỗi ngày sẽ thành công', 'Chỉ cần thông minh', 'Cần gia sư giỏi'], answer: 1 }
        ]
    },
    {
        id: 44, title: 'TOPIK 2 — Chiến thuật Viết',
        description: 'Câu 51-54: Điền từ, viết đoạn, viết luận',
        level: '🟠 GĐ 4: Trung cấp → TOPIK 2', stage: 4,
        vocab: [
            { kr: '서론', pronunciation: '[seoron]', meaning: 'mở bài' },
            { kr: '본론', pronunciation: '[bollon]', meaning: 'thân bài' },
            { kr: '결론', pronunciation: '[gyeollon]', meaning: 'kết bài' },
            { kr: '문제', pronunciation: '[munje]', meaning: 'câu hỏi, vấn đề' },
            { kr: '논리', pronunciation: '[nolli]', meaning: 'logic' },
            { kr: '의견', pronunciation: '[uigyeon]', meaning: 'ý kiến' },
            { kr: '근거', pronunciation: '[geungeo]', meaning: 'căn cứ' },
            { kr: '예를 들면', pronunciation: '[yereul deulmyeon]', meaning: 'ví dụ' },
            { kr: '첫째', pronunciation: '[cheotjjae]', meaning: 'thứ nhất' },
            { kr: '둘째', pronunciation: '[duljjae]', meaning: 'thứ hai' },
            { kr: '셋째', pronunciation: '[setjjae]', meaning: 'thứ ba' },
            { kr: '마지막으로', pronunciation: '[majimageuro]', meaning: 'cuối cùng' },
            { kr: '요약하다', pronunciation: '[yoyakhada]', meaning: 'tóm tắt' }
        ],
        grammar: [
            { title: 'Chiến thuật Viết TOPIK 2', content: 'Câu 51-52: điền từ vào chỗ trống (ngữ pháp trung cấp như ~도록, ~기 위해, ~다가). Câu 53: viết đoạn 200-300 từ mô tả biểu đồ. Câu 54: viết luận 600-700 từ trình bày ý kiến. Cấu trúc: 서론(quan điểm) - 본론(lý do + ví dụ) - 결론(tóm tắt).' },
            { title: 'Mẫu câu viết luận', content: '서론: 요즘...에 대한 관심이 높아지고 있습니다. 본론: 첫째/둘째/셋째... 예를 들면... 이에 반해... 결론: 따라서... 마지막으로... 라고 생각합니다.' }
        ],
        examples: [
            { kr: '먼저, ... 그리고, ... 마지막으로...', vi: 'Trước hết... Và... Cuối cùng...' },
            { kr: '요즘 외국어 학습에 대한 관심이 높아지고 있습니다.', vi: 'Ngày nay sự quan tâm đến việc học ngoại ngữ đang tăng lên.' },
            { kr: '이에 대한 제 의견은 다음과 같습니다.', vi: 'Ý kiến của tôi về điều này như sau.' }
        ],
        reading: 'TOPIK 2 쓰기 시험은 총 4문제예요. 51번과 52번은 빈칸에 알맞은 말을 쓰는 문제예요. 주로 문법을 보고 정답을 찾아요. 53번은 표나 그래프를 보고 설명하는 문제예요. 200-300자 정도로 써야 해요. 54번은 주제에 대한 자신의 의견을 쓰는 문제예요. 600-700자 정도로 써야 하고 서론-본론-결론 구조가 중요해요. 시간이 부족할 수 있으니까 연습하는 것이 중요해요. 매일 한 문제씩 연습하면 실력이 많이 늘 거예요!',
        readingQuestions: [
            { q: 'TOPIK 2 Viết có bao nhiêu câu?', options: ['2 câu', '3 câu', '4 câu', '5 câu'], answer: 2 },
            { q: 'Câu 51-52 là dạng gì?', options: ['Viết luận', 'Điền vào chỗ trống', 'Miêu tả biểu đồ', 'Đọc hiểu'], answer: 1 },
            { q: 'Câu 54 yêu cầu viết bao nhiêu từ?', options: ['200-300', '400-500', '600-700', '800-1000'], answer: 2 },
            { q: 'Theo người nói, làm thế nào để cải thiện?', options: ['Học thuộc lòng', 'Luyện mỗi ngày', 'Chỉ học ngữ pháp', 'Đọc nhiều'], answer: 1 }
        ]
    },
    {
        id: 45, title: '🏆 Tổng ôn TOPIK 2',
        description: 'Chiến thuật thi, luyện đề tổng hợp, mẹo làm bài',
        level: '🟠 GĐ 4: Trung cấp → TOPIK 2', stage: 4,
        vocab: [
            { kr: '합격', pronunciation: '[hapgyeok]', meaning: 'đỗ' },
            { kr: '불합격', pronunciation: '[bulhapgyeok]', meaning: 'trượt' },
            { kr: '성적', pronunciation: '[seongjeok]', meaning: 'thành tích' },
            { kr: '준비', pronunciation: '[junbi]', meaning: 'chuẩn bị' },
            { kr: '전략', pronunciation: '[jeollyak]', meaning: 'chiến lược' },
            { kr: '집중', pronunciation: '[jipjung]', meaning: 'tập trung' },
            { kr: '실력', pronunciation: '[sillyeok]', meaning: 'thực lực' },
            { kr: '향상', pronunciation: '[hyangsang]', meaning: 'cải thiện' },
            { kr: '자신감', pronunciation: '[jasin-gam]', meaning: 'tự tin' },
            { kr: '포기', pronunciation: '[pogi]', meaning: 'bỏ cuộc' },
            { kr: '도전', pronunciation: '[dojeon]', meaning: 'thử thách' },
            { kr: '성공', pronunciation: '[seonggong]', meaning: 'thành công' },
            { kr: '축하', pronunciation: '[chukha]', meaning: 'chúc mừng' },
            { kr: '수고하다', pronunciation: '[sugohada]', meaning: 'vất vả' },
            { kr: '고생하다', pronunciation: '[gosaenghada]', meaning: 'chịu khổ' },
            { kr: '이루다', pronunciation: '[iruda]', meaning: 'đạt được' },
            { kr: '자랑스럽다', pronunciation: '[jarangseureopda]', meaning: 'đáng tự hào' },
            { kr: '멋지다', pronunciation: '[meotjida]', meaning: 'tuyệt vời' }
        ],
        grammar: [
            { title: 'Tổng kết hành trình', content: 'Đã học: 45 bài, ~3000+ từ vựng, toàn bộ ngữ pháp sơ cấp và trung cấp. Giờ bạn có thể: giao tiếp hàng ngày, đọc báo đơn giản, viết đoạn văn ngắn, thi thử TOPIK 2.' },
            { title: 'Chiến thuật thi TOPIK 2', content: 'Đọc(읽기): 50 câu - 70 phút. Nghe(듣기): 50 câu - 60 phút. Viết(쓰기): 4 câu - 50 phút. Tổng 300 điểm. Cấp 3: 120점, Cấp 4: 150점, Cấp 5: 190점, Cấp 6: 230점. Mẹo: làm câu dễ trước, câu khó sau.' },
            { title: 'Lời khuyên cuối cùng', content: '1. Mỗi ngày 30 phút còn hơn 5 tiếng 1 tuần. 2. Luyện nghe mỗi ngày (drama, K-pop, news). 3. Đọc to giúp nhớ lâu hơn. 4. Viết nhật ký tiếng Hàn mỗi ngày. 5. Tự tin và đừng bỏ cuộc! 화이팅!' }
        ],
        examples: [
            { kr: '한국어 공부 1년 동안 정말 수고하셨습니다!', vi: 'Cảm ơn bạn vì 1 năm học tiếng Hàn!' },
            { kr: 'TOPIK 2 합격을 축하합니다! 🎉', vi: 'Chúc mừng bạn đỗ TOPIK 2!' },
            { kr: '포기하지 않고 끝까지 공부한 당신이 자랑스러워요!', vi: 'Bạn thật đáng tự hào vì đã không bỏ cuộc!' },
            { kr: '새로운 도전을 시작해 보세요! 한국어 실력으로 더 많은 것을 할 수 있어요!', vi: 'Hãy thử thách mới! Với tiếng Hàn bạn có thể làm nhiều hơn nữa!' }
        ],
        reading: `드디어 마지막 수업이에요! 45개의 모든 수업을 듣느라 정말 수고 많았어요.
처음에는 한글도 몰랐지만 지금은 한국어로 말하고, 읽고, 쓸 수 있게 됐어요.
정말 대단한 일이에요! 한국어 공부는 여기서 끝나는 게 아니에요.
이제부터가 진짜 시작이에요. 한국 드라마를 볼 때, K-pop을 들을 때,
한국 친구와 대화할 때마다 실력이 늘 거예요.

TOPIK 2 시험을 준비하고 있다면 자신감을 가져요.
여러분은 이미 많은 것을 배웠어요. 천천히, 하지만 꾸준히 공부하면
꼭 합격할 수 있어요. 여러분의 한국어 공부를 항상 응원할게요! 화이팅! 🎉🔥`,
        readingQuestions: [
            { q: 'Có tất cả bao nhiêu bài học?', options: ['30', '45', '50', '60'], answer: 1 },
            { q: 'Sau khi học xong bạn có thể làm gì?', options: ['Chỉ đọc', 'Nói, đọc, viết tiếng Hàn', 'Chỉ nghe', 'Dịch thuật'], answer: 1 },
            { q: 'Học tiếng Hàn có kết thúc ở đây không?', options: ['Có', 'Không, mới bắt đầu', 'Tạm dừng', 'Chưa biết'], answer: 1 },
            { q: 'Thông điệp chính là gì?', options: ['Học nhanh', 'Kiên trì và tự tin', 'Chỉ cần thông minh', 'Cần đến trường'], answer: 1 }
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
