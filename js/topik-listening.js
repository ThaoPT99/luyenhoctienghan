// ===== 🎧 TOPIK 2 LISTENING — 50 CÂU NGHE CHUẨN =====
// Mỗi câu: script (TTS đọc), question, options, answer, translation
// Dạng: hội thoại ngắn, thông báo, bài giảng, phỏng vấn (đúng format TOPIK)

const topikListening = [
    // === Section 1: Basic conversations (câu 1-10) ===
    {
        id: 'L01', type: 'basic',
        script: '가: 오늘 같이 영화 볼래요? 나: 미안해요. 오늘은 약속이 있어요. 다음에 봐요.',
        question: 'Người nói sẽ làm gì hôm nay?',
        options: ['Đi xem phim', 'Có hẹn', 'Ở nhà', 'Đi học'],
        answer: 1, level: 3
    },
    {
        id: 'L02', type: 'basic',
        script: '가: 한국 음식 중에서 뭐가 제일 좋아요? 나: 저는 비빔밥을 제일 좋아해요.',
        question: 'Người nói thích món Hàn nào nhất?',
        options: ['Kimchi', 'Bibimbap', 'Bulgogi', 'Tteokbokki'],
        answer: 1, level: 3
    },
    {
        id: 'L03', type: 'basic',
        script: '가: 주말에 뭐 할 거예요? 나: 친구랑 같이 등산할 거예요.',
        question: 'Người nói sẽ làm gì cuối tuần?',
        options: ['Đi leo núi', 'Xem phim', 'Đi mua sắm', 'Học bài'],
        answer: 0, level: 3
    },
    {
        id: 'L04', type: 'basic',
        script: '가: 왜 그렇게 피곤해 보여요? 나: 어제 밤 늦게까지 공부했어요.',
        question: 'Tại sao người nói trông mệt?',
        options: ['Ngủ ít', 'Tập thể dục nhiều', 'Bị ốm', 'Đi chơi khuya'],
        answer: 0, level: 3
    },
    {
        id: 'L05', type: 'basic',
        script: '가: 내일 몇 시에 만날까요? 나: 10시는 어때요? 가: 좋아요. 그때 봐요.',
        question: 'Mấy giờ họ hẹn gặp?',
        options: ['9 giờ', '10 giờ', '11 giờ', '12 giờ'],
        answer: 1, level: 3
    },
    {
        id: 'L06', type: 'basic',
        script: '가: 어디에서 한국어를 배웠어요? 나: 학교에서 배웠어요. 1년 동안 배웠어요.',
        question: 'Người nói đã học tiếng Hàn ở đâu?',
        options: ['Học viện', 'Trường học', 'Trực tuyến', 'Tự học'],
        answer: 1, level: 3
    },
    {
        id: 'L07', type: 'basic',
        script: '가: 이 가방 얼마예요? 나: 3만 원이에요. 그런데 지금 20% 할인하고 있어요.',
        question: 'Giá của chiếc cặp sau giảm giá là bao nhiêu?',
        options: ['24,000 won', '20,000 won', '15,000 won', '30,000 won'],
        answer: 0, level: 3
    },
    {
        id: 'L08', type: 'basic',
        script: '가: 다음 주에 일본에 여행 가요. 나: 정말요? 부럽다. 저도 가고 싶어요.',
        question: 'Người nói sẽ đi đâu vào tuần sau?',
        options: ['Hàn Quốc', 'Nhật Bản', 'Trung Quốc', 'Mỹ'],
        answer: 1, level: 3
    },
    {
        id: 'L09', type: 'basic',
        script: '가: 한국어를 얼마나 공부했어요? 나: 6개월 공부했어요. 아직 잘 못해요.',
        question: 'Người nói đã học tiếng Hàn bao lâu?',
        options: ['3 tháng', '6 tháng', '1 năm', '2 năm'],
        answer: 1, level: 3
    },
    {
        id: 'L10', type: 'basic',
        script: '가: 이번 주말에 뭐 할 거예요? 나: 집에서 쉴 거예요. 요즘 너무 바빴어요.',
        question: 'Cuối tuần này người nói sẽ làm gì?',
        options: ['Đi chơi', 'Nghỉ ở nhà', 'Làm việc', 'Học bài'],
        answer: 1, level: 3
    },

    // === Section 2: Daily conversations (câu 11-20) ===
    {
        id: 'L11', type: 'daily',
        script: '가: 점심 뭐 먹을까요? 나: 저는 김치찌개 먹고 싶어요. 가: 저는 비빔밥 먹을래요.',
        question: 'Người nói thứ hai muốn ăn gì?',
        options: ['Kimchi jjigae', 'Bibimbap', 'Ramen', 'Bulgogi'],
        answer: 1, level: 3
    },
    {
        id: 'L12', type: 'daily',
        script: '가: 이번 주말에 시간 있어요? 나: 토요일은 괜찮은데 일요일은 약속이 있어요.',
        question: 'Khi nào người nói rảnh?',
        options: ['Thứ bảy', 'Chủ nhật', 'Cả hai', 'Không ngày nào'],
        answer: 0, level: 3
    },
    {
        id: 'L13', type: 'daily',
        script: '가: 어떻게 학교에 와요? 나: 지하철을 타고 와요. 30분 걸려요.',
        question: 'Người nói đến trường bằng phương tiện gì?',
        options: ['Xe buýt', 'Tàu điện ngầm', 'Xe hơi', 'Đi bộ'],
        answer: 1, level: 3
    },
    {
        id: 'L14', type: 'daily',
        script: '가: 어제 뭐 했어요? 나: 집에서 청소하고 빨래했어요. 좀 피곤했어요.',
        question: 'Hôm qua người nói đã làm gì?',
        options: ['Dọn dẹp và giặt giũ', 'Đi làm', 'Học bài', 'Đi chơi'],
        answer: 0, level: 3
    },
    {
        id: 'L15', type: 'daily',
        script: '가: 커피 마실래요? 나: 저는 커피보다 차가 더 좋아요. 가: 그럼 녹차 마실래요? 나: 네, 좋아요.',
        question: 'Người nói thích uống gì hơn?',
        options: ['Cà phê', 'Trà', 'Nước ép', 'Sữa'],
        answer: 1, level: 3
    },
    {
        id: 'L16', type: 'daily',
        script: '가: 생일이 언제예요? 나: 다음 달 5일이에요. 가: 선물을 준비할게요.',
        question: 'Sinh nhật người nói là khi nào?',
        options: ['Tháng này', 'Tháng sau ngày 5', 'Tuần sau', 'Hôm nay'],
        answer: 1, level: 3
    },
    {
        id: 'L17', type: 'daily',
        script: '가: 왜 한국어를 공부해요? 나: 한국 회사에 취직하고 싶어요. 그래서 공부하고 있어요.',
        question: 'Tại sao người nói học tiếng Hàn?',
        options: ['Vì thích Hàn Quốc', 'Để xin việc ở công ty Hàn', 'Để đi du lịch', 'Vì bạn bè'],
        answer: 1, level: 4
    },
    {
        id: 'L18', type: 'daily',
        script: '가: 몇 시에 일어나요? 나: 보통 7시에 일어나요. 그런데 주말에는 늦게 일어나요.',
        question: 'Người nói thường dậy lúc mấy giờ?',
        options: ['6 giờ', '7 giờ', '8 giờ', '9 giờ'],
        answer: 1, level: 3
    },
    {
        id: 'L19', type: 'daily',
        script: '가: 한국에서 뭐가 가장 기억에 남아요? 나: 부산의 바다가 정말 아름다웠어요.',
        question: 'Điều gì đáng nhớ nhất ở Hàn Quốc?',
        options: ['Đồ ăn', 'Biển Busan', 'Con người', 'Văn hóa'],
        answer: 1, level: 4
    },
    {
        id: 'L20', type: 'daily',
        script: '가: 요즘 한국 드라마 뭐 봐요? 나: 요즘 \"이상한 변호사\"를 보고 있어요. 정말 재미있어요.',
        question: 'Người nói đang xem bộ phim nào?',
        options: ['Phim cổ trang', 'Luật sư kỳ lạ', 'Phim tình cảm', 'Phim hành động'],
        answer: 1, level: 4
    },

    // === Section 3: Longer dialogues (câu 21-30) ===
    {
        id: 'L21', type: 'dialogue',
        script: '가: 실례합니다, 시청에 어떻게 가요? 나: 이 길로 쭉 가다가 두 번째 사거리에서 왼쪽으로 가세요. 10분쯤 걸려요.',
        question: 'Để đến tòa thị chính, cần làm gì?',
        options: ['Rẽ phải ở ngã tư thứ 2', 'Đi thẳng rồi rẽ trái ở ngã tư thứ 2', 'Đi thẳng 5 phút', 'Đi xe buýt'],
        answer: 1, level: 4
    },
    {
        id: 'L22', type: 'dialogue',
        script: '가: 날씨가 참 좋네요. 나: 네, 바람도 시원하고 하늘도 맑아요. 산책하기 좋은 날씨예요.',
        question: 'Thời tiết hôm nay thế nào?',
        options: ['Mưa và lạnh', 'Nắng đẹp và mát', 'Nóng và ẩm', 'Có bão'],
        answer: 1, level: 3
    },
    {
        id: 'L23', type: 'dialogue',
        script: '가: 어제 도서관에 갔는데 사람이 많았어요. 나: 시험 기간이니까 그렇겠네요. 저도 다음 주에 시험이 있어요.',
        question: 'Tại sao thư viện đông người?',
        options: ['Có sự kiện', 'Đang mùa thi', 'Ngày cuối tuần', 'Giảm giá'],
        answer: 1, level: 4
    },
    {
        id: 'L24', type: 'dialogue',
        script: '가: 한국어가 어때요? 나: 처음엔 어려웠는데 점점 재미있어져요. 특히 한글은 배우기 쉬워요.',
        question: 'Người nói nghĩ gì về tiếng Hàn?',
        options: ['Luôn dễ', 'Ban đầu khó nhưng dần thú vị', 'Rất khó', 'Nhàm chán'],
        answer: 1, level: 4
    },
    {
        id: 'L25', type: 'dialogue',
        script: '가: 어렸을 때 꿈이 뭐였어요? 나: 저는 선생님이 되는 게 꿈이었어요. 그래서 지금 교육을 공부하고 있어요.',
        question: 'Ước mơ của người nói khi nhỏ là gì?',
        options: ['Bác sĩ', 'Giáo viên', 'Ca sĩ', 'Luật sư'],
        answer: 1, level: 4
    },
    {
        id: 'L26', type: 'dialogue',
        script: '가: 이번 방학에 뭐 할 거예요? 나: 한국에 어학연수를 갈 거예요. 2달 동안 한국어를 배울 거예요.',
        question: 'Người nói sẽ làm gì trong kỳ nghỉ?',
        options: ['Đi Hàn học tiếng', 'Đi làm thêm', 'Ở nhà', 'Du lịch'],
        answer: 0, level: 4
    },
    {
        id: 'L27', type: 'dialogue',
        script: '가: 취미가 뭐예요? 나: 사진 찍는 걸 좋아해요. 주말마다 카메라 들고 나가요. 가: 어떤 걸 주로 찍어요? 나: 풍경 사진을 제일 좋아해요.',
        question: 'Sở thích của người nói là gì?',
        options: ['Vẽ tranh', 'Chụp ảnh phong cảnh', 'Du lịch', 'Nấu ăn'],
        answer: 1, level: 4
    },
    {
        id: 'L28', type: 'dialogue',
        script: '가: 요즘 한국 노래 중에 어떤 게 인기 있어요? 나: 아이돌 노래가 인기 많아요. 특히 BTS 노래가 전 세계적으로 유명해요.',
        question: 'Thể loại nhạc nào đang phổ biến?',
        options: ['Ballad', 'Nhạc idol (K-pop)', 'Rock', 'Hip-hop'],
        answer: 1, level: 4
    },
    {
        id: 'L29', type: 'dialogue',
        script: '가: 비가 오는데 우산 있어요? 나: 아니요, 없어요. 가: 제 우산을 같이 써요. 나: 고마워요. 정말 다행이에요.',
        question: 'Chuyện gì đang xảy ra?',
        options: ['Trời nắng', 'Trời mưa', 'Có tuyết', 'Có gió'],
        answer: 1, level: 3
    },
    {
        id: 'L30', type: 'dialogue',
        script: '가: 이 옷이 어때요? 나: 색깔은 예쁜데 좀 큰 것 같아요. 작은 사이즈는 없어요? 가: 한번 찾아볼게요.',
        question: 'Vấn đề với chiếc áo là gì?',
        options: ['Màu không đẹp', 'Hơi to', 'Đắt quá', 'Hỏng rồi'],
        answer: 1, level: 3
    },

    // === Section 4: Announcements & News (câu 31-40) ===
    {
        id: 'L31', type: 'announce',
        script: '안내 말씀 드립니다. 오늘 오후 2시부터 4시까지 도서관 보수 공사가 있습니다. 도서관을 이용하시는 분들은 참고해 주시기 바랍니다.',
        question: 'Thông báo nói về điều gì?',
        options: ['Thư viện đóng cửa', 'Sửa chữa thư viện từ 2-4h', 'Mở cửa muộn', 'Sự kiện đặc biệt'],
        answer: 1, level: 4
    },
    {
        id: 'L32', type: 'announce',
        script: '다음 주 월요일은 국경일로 학교가 쉽니다. 화요일부터 정상 수업이 있습니다. 즐거운 주말 보내세요.',
        question: 'Khi nào trường học lại bình thường?',
        options: ['Thứ hai', 'Thứ ba', 'Chủ nhật', 'Thứ sáu'],
        answer: 1, level: 4
    },
    {
        id: 'L33', type: 'announce',
        script: '지하철 안내입니다. 긴급 공사로 인해 2호선 일부 구간이 운행을 중단합니다. 대체 버스를 이용해 주시기 바랍니다.',
        question: 'Tại sao tàu điện ngầm tuyến 2 ngừng chạy?',
        options: ['Sự cố', 'Công trình khẩn cấp', 'Bão', 'Hỏng tàu'],
        answer: 1, level: 4
    },
    {
        id: 'L34', type: 'announce',
        script: '오늘의 날씨입니다. 서울은 맑고 기온은 25도까지 올라가겠습니다. 하지만 오후부터 비가 내리겠으니 우산을 꼭 챙기시기 바랍니다.',
        question: 'Thời tiết buổi chiều thế nào?',
        options: ['Nắng', 'Có mưa', 'Có tuyết', 'Nhiều mây'],
        answer: 1, level: 4
    },
    {
        id: 'L35', type: 'announce',
        script: '기차 안내입니다. 서울발 부산행 KTX가 15분 늦어지고 있습니다. 승객 여러분의 양해 부탁드립니다.',
        question: 'Chuyện gì xảy ra với tàu KTX?',
        options: ['Đến sớm', 'Chậm 15 phút', 'Hủy chuyến', 'Đúng giờ'],
        answer: 1, level: 4
    },
    {
        id: 'L36', type: 'announce',
        script: '한국 문화 체험 행사 안내입니다. 이번 주 토요일 오전 10시부터 한국 전통 문화원에서 한복 입기 체험 행사가 있습니다. 참가비는 무료입니다.',
        question: 'Sự kiện gì được tổ chức?', 
        options: ['Học nấu ăn', 'Trải nghiệm mặc Hanbok', 'Học tiếng Hàn', 'Triển lãm tranh'],
        answer: 1, level: 4
    },
    {
        id: 'L37', type: 'announce',
        script: '학생 여러분, 한국어 말하기 대회가 다음 달 15일에 열립니다. 참가를 원하는 학생은 다음 주 금요일까지 신청해 주세요. 1등 상금은 50만 원입니다.',
        question: 'Hạn đăng ký cuộc thi nói là khi nào?',
        options: ['Ngày 15 tháng sau', 'Thứ sáu tuần sau', 'Cuối tháng', 'Hôm nay'],
        answer: 1, level: 4
    },
    {
        id: 'L38', type: 'announce',
        script: '구인 공고: 우리 회사에서 함께 일할 한국어-베트남어 통역사를 찾고 있습니다. 자격 조건은 TOPIK 4급 이상, 경력 1년 이상입니다. 관심 있으신 분은 이메일로 지원해 주세요.',
        question: 'Công ty đang tìm ai?',
        options: ['Giáo viên', 'Phiên dịch Hàn-Việt', 'Lập trình viên', 'Kế toán'],
        answer: 1, level: 4
    },
    {
        id: 'L39', type: 'announce',
        script: '오늘 밤 11시부터 내일 아침 6시까지 수도관 공사로 인해 단수가 예정되어 있습니다. 미리 물을 받아 놓으시기 바랍니다.',
        question: 'Khi nào nước bị cắt?',
        options: ['Sáng mai', 'Tối nay 11h đến sáng 6h', 'Cả ngày', 'Chiều nay'],
        answer: 1, level: 4
    },
    {
        id: 'L40', type: 'announce',
        script: 'TOPIK 시험 일정 안내입니다. 올해 제2회 TOPIK 시험은 7월 21일에 있습니다. 원서 접수는 6월 1일부터 6월 10일까지입니다.',
        question: 'Kỳ thi TOPIK lần 2 năm nay diễn ra khi nào?',
        options: ['Tháng 6', 'Ngày 21 tháng 7', 'Ngày 1 tháng 6', 'Tháng 8'],
        answer: 1, level: 4
    },

    // === Section 5: Lectures & Interviews (câu 41-50) TOPIK 2 level ===
    {
        id: 'L41', type: 'lecture',
        script: '오늘은 한국의 명절에 대해 이야기해 보겠습니다. 한국의 가장 큰 명절은 설날과 추석입니다. 설날은 음력 1월 1일이고, 추석은 음력 8월 15일입니다. 이때 가족들이 모여서 음식을 먹고 제사를 지냅니다.',
        question: 'Hai ngày lễ lớn nhất của Hàn Quốc là gì?',
        options: ['Seollal và Chuseok', 'Seollal và Christmas', 'Chuseok và Halloween', 'Tết và Giáng sinh'],
        answer: 0, level: 4
    },
    {
        id: 'L42', type: 'lecture',
        script: '한국어의 특징 중 하나는 높임말이 발달했다는 것입니다. 나이나 지위에 따라 사용하는 말이 달라집니다. 예를 들어 친구에게는 \"밥 먹었어?\"라고 하지만 선생님에게는 \"진지 잡수셨어요?\"라고 말해야 합니다.',
        question: 'Đặc điểm của tiếng Hàn là gì?',
        options: ['Phát âm khó', 'Kính ngữ phát triển', 'Từ vựng phong phú', 'Ngữ pháp đơn giản'],
        answer: 1, level: 4
    },
    {
        id: 'L43', type: 'lecture',
        script: '제가 한국에 처음 왔을 때 가장 놀랐던 것은 길거리 음식 문화였습니다. 떡볶이, 어묵, 김밤 등을 길에서 쉽게 살 수 있습니다. 가격도 싸서 부담 없이 먹을 수 있습니다.',
        question: 'Điều gì làm người nói ngạc nhiên nhất khi đến Hàn?',
        options: ['Giao thông', 'Văn hóa ẩm thực đường phố', 'Nhà cửa', 'Thời tiết'],
        answer: 1, level: 4
    },
    {
        id: 'L44', type: 'lecture',
        script: '한국 회사에서 일하려면 한국의 직장 문화를 이해해야 합니다. 특히 상사와의 관계가 중요합니다. 회식 문화도 한국 직장의 큰 특징입니다. 회식을 통해 동료들과 친해질 수 있습니다.',
        question: 'Điều gì quan trọng khi làm việc ở công ty Hàn?',
        options: ['Lương cao', 'Hiểu văn hóa công sở và cấp trên', 'Giờ làm việc', 'Kỹ năng chuyên môn'],
        answer: 1, level: 4
    },
    {
        id: 'L45', type: 'lecture',
        script: '한국 드라마의 인기는 세계적입니다. 넷플릭스에서 한국 드라마를 보는 외국인이 점점 늘고 있습니다. \"오징어 게임\"은 전 세계에서 가장 많이 본 시리즈 중 하나가 되었습니다.',
        question: 'Tại sao phim Hàn nổi tiếng thế giới?',
        options: ['Diễn viên đẹp', 'Ngày càng nhiều người xem trên Netflix', 'Kinh phí lớn', 'Đạo diễn nổi tiếng'],
        answer: 1, level: 4
    },
    {
        id: 'L46', type: 'lecture',
        script: '스마트폰 사용 시간이 점점 늘어나고 있습니다. 한국인의 하루 평균 스마트폰 사용 시간은 5시간입니다. 전문가들은 너무 오래 사용하면 건강에 좋지 않다고 경고합니다.',
        question: 'Người Hàn Quốc dùng điện thoại bao nhiêu giờ mỗi ngày?',
        options: ['3 giờ', '5 giờ', '7 giờ', '10 giờ'],
        answer: 1, level: 4
    },
    {
        id: 'L47', type: 'lecture',
        script: '한국은 4계절이 뚜렷합니다. 봄에는 벚꽃이 아름답고 여름은 덥고 습합니다. 가을은 단풍이 예쁘고 겨울은 춥고 건조합니다. 계절마다 다른 즐거움이 있습니다.',
        question: 'Mùa nào ở Hàn có hoa anh đào đẹp?',
        options: ['Hè', 'Thu', 'Xuân', 'Đông'],
        answer: 2, level: 4
    },
    {
        id: 'L48', type: 'lecture',
        script: '외국어를 배울 때 중요한 것은 꾸준함입니다. 매일 10분씩 공부하는 것이 한 번에 2시간 공부하는 것보다 효과적입니다. 그리고 언어는 공부하는 것이 아니라 사용하는 것이 중요합니다.',
        question: 'Điều gì quan trọng khi học ngoại ngữ?',
        options: ['Học nhiều một lúc', 'Kiên trì mỗi ngày', 'Chỉ học ngữ pháp', 'Học thuộc lòng'],
        answer: 1, level: 4
    },
    {
        id: 'L49', type: 'lecture',
        script: '인터뷰: \"한국에서 가장 기억에 남는 경험은 무엇입니까?\" \"작년에 경복궁에 갔을 때 한복을 입고 사진을 찍었어요. 정말 특별한 경험이었어요.\"',
        question: 'Kinh nghiệm đáng nhớ nhất ở Hàn là gì?',
        options: ['Ăn đồ Hàn', 'Mặc Hanbok chụp ảnh ở Gyeongbokgung', 'Đi chợ', 'Học tiếng Hàn'],
        answer: 1, level: 4
    },
    {
        id: 'L50', type: 'lecture',
        script: 'TOPIK 시험을 준비하는 학생들에게 조언합니다. 첫째, 기출 문제를 많이 풀어보세요. 둘째, 시간을 재면서 연습하세요. 셋째, 틀린 문제를 복습하는 것이 중요합니다. 이렇게 하면 좋은 결과가 있을 것입니다.',
        question: 'Lời khuyên nào KHÔNG được đưa ra?',
        options: ['Làm nhiều đề cũ', 'Luyện tập tính giờ', 'Ôn lại câu sai', 'Học thuộc từ điển'],
        answer: 3, level: 4
    }
];

// Helper: get questions by level
function getListeningQuestions(level) {
    if (level === 'all') return topikListening;
    return topikListening.filter(q => q.level === parseInt(level));
}

// Helper: get total count
const listeningTotal = topikListening.length;
console.log(`🎧 TOPIK Listening: ${listeningTotal} câu nghe chuẩn loaded`);
