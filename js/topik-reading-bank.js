// ===== 📄 TOPIK 2 READING BANK — 100 BÀI ĐỌC =====
// Kết hợp 30 bài từ lessons.js + 70 bài mới
// Mỗi bài: { id, title, passage, questions, level }

const topikReadingBank = [
    // === Stage 3 - Sơ cấp 2 (Bài 1-20) ===
    {
        id: 'R01', title: 'My Daily Routine', level: 3,
        passage: '저는 매일 아침 7시에 일어납니다. 세수를 하고 이를 닦습니다. 아침 식사로는 보통 빵과 우유를 먹습니다. 8시 30분에 집에서 나와서 학교에 갑니다. 학교에서는 한국어를 공부합니다. 점심은 학교 식당에서 먹습니다. 오후 5시쯤 집에 돌아옵니다. 저녁에는 텔레비전을 보거나 책을 읽습니다. 11시쯤 잡니다.',
        questions: [
            { q: 'Người nói dậy lúc mấy giờ?', options: ['6 giờ', '7 giờ', '8 giờ', '9 giờ'], answer: 1 },
            { q: 'Người nói ăn sáng món gì?', options: ['Cơm và canh', 'Bánh mì và sữa', 'Mì', 'Cháo'], answer: 1 },
            { q: 'Người nói đi học lúc mấy giờ?', options: ['7 giờ', '8 giờ', '8 giờ 30', '9 giờ'], answer: 2 },
            { q: 'Người nói làm gì vào buổi tối?', options: ['Chơi game', 'Đi dạo', 'Xem TV hoặc đọc sách', 'Tập thể dục'], answer: 2 }
        ]
    },
    {
        id: 'R02', title: 'My Family', level: 3,
        passage: '우리 가족은 모두 4명입니다. 아버지, 어머니, 남동생, 그리고 저입니다. 아버지는 회사원이시고 어머니는 선생님이십니다. 남동생은 고등학생입니다. 우리 가족은 주말에 함께 시간을 보냅니다. 가끔 영화를 보러 가고 날씨가 좋으면 공원에 산책을 갑니다. 저는 가족이 모두 건강해서 행복합니다.',
        questions: [
            { q: 'Gia đình có mấy người?', options: ['3', '4', '5', '6'], answer: 1 },
            { q: 'Mẹ làm nghề gì?', options: ['Nhân viên văn phòng', 'Giáo viên', 'Bác sĩ', 'Nội trợ'], answer: 1 },
            { q: 'Em trai đang học cấp nào?', options: ['Tiểu học', 'Trung học cơ sở', 'Trung học phổ thông', 'Đại học'], answer: 2 },
            { q: 'Gia đình thường làm gì vào cuối tuần?', options: ['Đi siêu thị', 'Xem phim hoặc đi dạo', 'Đi ăn nhà hàng', 'Đi du lịch'], answer: 1 }
        ]
    },
    {
        id: 'R03', title: 'My Hobby', level: 3,
        passage: '제 취미는 사진 찍기입니다. 2년 전부터 시작했습니다. 처음에는 스마트폰으로 찍었는데 지금은 카메라를 사용합니다. 주말마다 공원이나 강가에 가서 사진을 찍습니다. 풍경 사진을 제일 좋아합니다. 가끔 친구들의 사진도 찍어 줍니다. 사진을 찍으면 기분이 좋아집니다. 나중에 사진 전시회도 열고 싶습니다.',
        questions: [
            { q: 'Sở thích của người nói là gì?', options: ['Vẽ tranh', 'Chụp ảnh', 'Du lịch', 'Nấu ăn'], answer: 1 },
            { q: 'Người nói bắt đầu sở thích này khi nào?', options: ['1 năm trước', '2 năm trước', '3 năm trước', '4 năm trước'], answer: 1 },
            { q: 'Người nói thích chụp thể loại nào nhất?', options: ['Chân dung', 'Phong cảnh', 'Động vật', 'Ẩm thực'], answer: 1 },
            { q: 'Ước mơ của người nói là gì?', options: ['Làm nhiếp ảnh gia', 'Mở triển lãm ảnh', 'Đi du lịch thế giới', 'Mua máy ảnh mới'], answer: 1 }
        ]
    },
    {
        id: 'R04', title: 'Season in Korea', level: 3,
        passage: '한국은 사계절이 뚜렷합니다. 봄에는 날씨가 따뜻하고 꽃이 많이 핍니다. 여름은 덥고 비가 많이 옵니다. 장마철에는 거의 매일 비가 내립니다. 가을은 하늘이 맑고 단풍이 아름답습니다. 겨울은 춥고 눈이 옵니다. 저는 봄과 가을을 가장 좋아합니다. 날씨가 너무 덥지도 않고 너무 춥지도 않기 때문입니다.',
        questions: [
            { q: 'Hàn Quốc có mấy mùa rõ rệt?', options: ['2', '3', '4', '5'], answer: 2 },
            { q: 'Mùa nào ở Hàn có mưa nhiều?', options: ['Xuân', 'Hè', 'Thu', 'Đông'], answer: 1 },
            { q: 'Tại sao người nói thích mùa xuân và thu?', options: ['Có hoa đẹp', 'Thời tiết dễ chịu', 'Có nhiều lễ hội', 'Được nghỉ học'], answer: 1 },
            { q: 'Mùa nào có tuyết rơi?', options: ['Xuân', 'Hè', 'Thu', 'Đông'], answer: 3 }
        ]
    },
    {
        id: 'R05', title: 'At the Restaurant', level: 3,
        passage: '어제 친구와 함께 한국 식당에 갔습니다. 식당 안은 사람이 많았습니다. 저는 비빔밥을 주문하고 친구는 김치찌개를 주문했습니다. 음식이 나오는데 10분쯤 걸렸습니다. 비빔밥은 맛있었지만 좀 매웠습니다. 그래서 물을 많이 마셨습니다. 친구의 김치찌개도 맛있었습니다. 계산은 1만 5천 원이 나왔습니다. 다음에 또 가고 싶습니다.',
        questions: [
            { q: 'Người nói đã gọi món gì?', options: ['Kimchi jjigae', 'Bibimbap', 'Bulgogi', 'Ramen'], answer: 1 },
            { q: 'Bạn của người nói gọi món gì?', options: ['Bibimbap', 'Kimchi jjigae', 'Samgyeopsal', 'Naengmyeon'], answer: 1 },
            { q: 'Đồ ăn thế nào?', options: ['Nhạt quá', 'Ngon nhưng hơi cay', 'Không ngon', 'Nguội'], answer: 1 },
            { q: 'Tổng tiền là bao nhiêu?', options: ['10,000 won', '15,000 won', '20,000 won', '25,000 won'], answer: 1 }
        ]
    },
    {
        id: 'R06', title: 'Learning Korean', level: 3,
        passage: '저는 한국어를 공부한 지 1년이 되었습니다. 처음에는 한글이 어려웠는데 지금은 쉽게 읽고 쓸 수 있습니다. 한국어 문법이 영어와 달라서 힘들었습니다. 하지만 한국 드라마를 보면서 공부하니까 재미있습니다. K-pop 노래를 들으면서 발음 연습도 합니다. 목표는 TOPIK 2에 합격하는 것입니다. 앞으로도 꾸준히 공부할 것입니다.',
        questions: [
            { q: 'Người nói đã học tiếng Hàn bao lâu?', options: ['6 tháng', '1 năm', '2 năm', '3 năm'], answer: 1 },
            { q: 'Phần nào khó nhất?', options: ['Hangul', 'Ngữ pháp', 'Phát âm', 'Từ vựng'], answer: 1 },
            { q: 'Người nói học bằng cách nào?', options: ['Học với gia sư', 'Xem phim Hàn và nghe K-pop', 'Đi học ở trường', 'Học online'], answer: 1 },
            { q: 'Mục tiêu của người nói là gì?', options: ['TOPIK 1', 'TOPIK 2', 'Đi Hàn', 'Làm phiên dịch'], answer: 1 }
        ]
    },
    {
        id: 'R07', title: 'Shopping Experience', level: 3,
        passage: '지난 주말에 친구와 함께 명동에 쇼핑하러 갔습니다. 명동은 사람이 정말 많았습니다. 다양한 가게가 있어서 구경하는 재미가 있었습니다. 저는 옷 가게에서 티셔츠 한 벌을 샀습니다. 원래 3만 원인데 세일해서 2만 원에 샀습니다. 친구는 신발을 샀습니다. 쇼핑을 하고 나서 길거리 음식을 먹었습니다. 떡볶이가 정말 맛있었습니다.',
        questions: [
            { q: 'Người nói đã đi đâu?', options: ['Hongdae', 'Myeongdong', 'Gangnam', 'Insadong'], answer: 1 },
            { q: 'Người nói đã mua gì?', options: ['Giày', 'Áo thun', 'Quần', 'Mũ'], answer: 1 },
            { q: 'Người nói tiết kiệm được bao nhiêu tiền?', options: ['5,000 won', '10,000 won', '15,000 won', '20,000 won'], answer: 1 },
            { q: 'Sau khi mua sắm, họ đã làm gì?', options: ['Về nhà', 'Ăn đồ ăn đường phố', 'Đi xem phim', 'Đi cà phê'], answer: 1 }
        ]
    },
    {
        id: 'R08', title: 'Public Transportation', level: 3,
        passage: '한국의 대중교통은 정말 편리합니다. 지하철과 버스가 잘 발달되어 있습니다. 저는 학교에 갈 때 지하철을 이용합니다. 집에서 학교까지 30분쯤 걸립니다. 환승을 하면 추가 요금이 없습니다. 교통카드를 사용하면 버스에서 지하철로 갈아탈 때 할인이 됩니다. 한국에 처음 왔을 때는 노선이 복잡했는데 지금은 잘 이용하고 있습니다.',
        questions: [
            { q: 'Giao thông công cộng Hàn Quốc thế nào?', options: ['Đắt', 'Tiện lợi', 'Phức tạp', 'Cũ kỹ'], answer: 1 },
            { q: 'Người nói đi học bằng gì?', options: ['Xe buýt', 'Tàu điện ngầm', 'Taxi', 'Xe đạp'], answer: 1 },
            { q: 'Thời gian đi từ nhà đến trường bao lâu?', options: ['20 phút', '30 phút', '45 phút', '1 giờ'], answer: 1 },
            { q: 'Chuyển tuyến có tốn thêm tiền không?', options: ['Có', 'Không', 'Giảm giá', 'Phụ thuộc'], answer: 1 }
        ]
    },
    {
        id: 'R09', title: 'Weather and Health', level: 3,
        passage: '요즘 날씨가 갑자기 추워졌습니다. 감기에 걸린 사람이 많습니다. 저도 어제부터 목이 아프고 열이 났습니다. 그래서 병원에 다녀왔습니다. 의사 선생님이 \"충분히 쉬어야 합니다\"라고 말씀하셨습니다. 약을 받아서 먹었습니다. 따뜻한 차를 마시고 일찍 잤습니다. 건강이 정말 중요하다는 것을 느꼈습니다. 앞으로는 운동을 꾸준히 할 것입니다.',
        questions: [
            { q: 'Thời tiết gần đây thế nào?', options: ['Ấm hơn', 'Lạnh hơn', 'Nóng hơn', 'Mát hơn'], answer: 1 },
            { q: 'Người nói bị làm sao?', options: ['Đau bụng', 'Đau họng và sốt', 'Đau đầu', 'Đau lưng'], answer: 1 },
            { q: 'Bác sĩ khuyên điều gì?', options: ['Uống nhiều nước', 'Nghỉ ngơi đầy đủ', 'Tập thể dục', 'Ăn nhiều'], answer: 1 },
            { q: 'Người nói sẽ làm gì trong tương lai?', options: ['Ăn kiêng', 'Tập thể dục thường xuyên', 'Uống thuốc', 'Đi khám định kỳ'], answer: 1 }
        ]
    },
    {
        id: 'R10', title: 'Weekend Plan', level: 3,
        passage: '이번 주말에 부산에 여행을 갈 계획입니다. 부산은 한국에서 두 번째로 큰 도시입니다. 유명한 관광지가 많습니다. 해운대 해변과 자갈치 시장에 갈 예정입니다. 부산하면 생각나는 음식은 돼지국밥입니다. 꼭 먹어 볼 것입니다. 기차로 가는데 2시간 30분쯤 걸립니다. 날씨가 좋았으면 좋겠습니다. 기대됩니다!',
        questions: [
            { q: 'Người nói sẽ đi đâu vào cuối tuần?', options: ['Seoul', 'Busan', 'Jeju', 'Incheon'], answer: 1 },
            { q: 'Busan là thành phố lớn thứ mấy ở Hàn?', options: ['Lớn nhất', 'Lớn thứ hai', 'Lớn thứ ba', 'Lớn thứ tư'], answer: 1 },
            { q: 'Món ăn đặc trưng của Busan là gì?', options: ['Bibimbap', 'Thịt heo hầm', 'Samgyeopsal', 'Naengmyeon'], answer: 1 },
            { q: 'Đi tàu đến Busan mất bao lâu?', options: ['1 giờ', '2 giờ 30 phút', '3 giờ', '4 giờ'], answer: 1 }
        ]
    },
    {
        id: 'R11', title: 'Korean Convenience Store', level: 3,
        passage: '한국의 편의점은 정말 편리합니다. 24시간 영업하고 물건도 다양합니다. 삼각김밥, 도시락, 라면 등 간단한 식사를 살 수 있습니다. 심지어 택배도 편의점에서 받을 수 있습니다. 저는 자주 편의점에서 아침을 삽니다. 바쁠 때 정말 유용합니다. 가격도 비싸지 않습니다. 한국에 살면서 편의점을 가장 자주 이용하는 것 같습니다.',
        questions: [
            { q: 'Cửa hàng tiện lợi Hàn Quốc thế nào?', options: ['Đắt', 'Bất tiện', 'Tiện lợi và đa dạng', 'Ít đồ'], answer: 2 },
            { q: 'Cửa hàng mở cửa khi nào?', options: ['Chỉ ban ngày', '24/24', 'Đến 10h tối', 'Chủ nhật đóng'], answer: 1 },
            { q: 'Người nói thường mua gì ở cửa hàng tiện lợi?', options: ['Bữa tối', 'Bữa sáng', 'Đồ uống', 'Đồ dùng học tập'], answer: 1 },
            { q: 'Ngoài đồ ăn, cửa hàng còn có dịch vụ gì?', options: ['Giặt ủi', 'Nhận bưu kiện', ['Rửa xe'], 'Sửa giày'], answer: 1 }
        ]
    },
    {
        id: 'R12', title: 'Korean Food: Kimchi', level: 3,
        passage: '김치는 한국을 대표하는 음식입니다. 배추에 양념을 넣어 발효시킨 음식입니다. 김치는 매운 맛이 나지만 건강에 아주 좋습니다. 비타민이 풍부하고 면역력도 높여줍니다. 한국 사람들은 거의 매일 김치를 먹습니다. 저는 처음에는 매워서 못 먹었지만 지금은 아주 좋아합니다. 특히 김치찌개를 좋아합니다. 밥과 함께 먹으면 정말 맛있습니다.',
        questions: [
            { q: 'Kimchi là món ăn đại diện cho nước nào?', options: ['Nhật', 'Trung', 'Hàn Quốc', 'Việt Nam'], answer: 2 },
            { q: 'Kimchi có lợi ích gì cho sức khỏe?', options: ['Giàu vitamin, tăng miễn dịch', 'Giảm cân', 'Tốt cho da', 'Giúp ngủ ngon'], answer: 0 },
            { q: 'Ban đầu người nói có thích kimchi không?', options: ['Có, rất thích', 'Không, vì cay', ['Cũng được'], 'Chưa ăn bao giờ'], answer: 1 },
            { q: 'Món nào người nói thích từ kimchi?', options: ['Kimchi luộc', 'Kimchi jjigae', 'Kim chi xào', 'Kim chi sống'], answer: 1 }
        ]
    },
    {
        id: 'R13', title: 'Korean Etiquette', level: 3,
        passage: '한국에는 중요한 예절이 있습니다. 어른에게 인사할 때는 고개를 숙여서 인사합니다. 식사할 때는 어른이 먼저 수저를 든 후에 먹기 시작합니다. 받을 때는 두 손으로 받는 것이 예의입니다. 신발을 신고 집 안에 들어가면 안 됩니다. 이런 예절을 모르면 실수할 수 있습니다. 저도 처음에는 몰라서 당황한 적이 있습니다.',
        questions: [
            { q: 'Khi chào người lớn, người Hàn làm gì?', options: ['Bắt tay', 'Cúi đầu', 'Ôm', 'Vẫy tay'], answer: 1 },
            { q: 'Khi ăn, nên bắt đầu khi nào?', options: ['Khi đồ ăn ra', 'Khi người lớn bắt đầu', 'Khi ngồi vào bàn', 'Khi đói'], answer: 1 },
            { q: 'Nhận đồ bằng mấy tay là lịch sự?', options: ['Một tay', 'Hai tay', 'Tay phải', 'Tay trái'], answer: 1 },
            { q: 'Điều gì không được làm ở Hàn?', options: ['Ăn ngoài đường', 'Đi giày vào nhà', 'Nói to', 'Chụp ảnh'], answer: 1 }
        ]
    },
    {
        id: 'R14', title: 'Movie Theater Experience', level: 3,
        passage: '어제 친구와 영화를 보러 갔습니다. 요즘 인기 있는 한국 영화를 봤습니다. 영화는 재미있었지만 좀 슬펐습니다. 팝콘과 콜라를 사서 먹으면서 봤습니다. 영화관이 사람으로 가득 찼습니다. 인터넷으로 미리 예매해서 좋은 자리에 앉을 수 있었습니다. 영화가 끝난 후에 느낌에 대해 이야기하면서 커피를 마셨습니다. 좋은 시간이었습니다.',
        questions: [
            { q: 'Người nói đã làm gì hôm qua?', options: ['Đi ăn', 'Đi xem phim', 'Đi mua sắm', 'Đi học'], answer: 1 },
            { q: 'Phim đó thế nào?', options: ['Vui', 'Buồn nhưng hay', 'Nhàm chán', 'Đáng sợ'], answer: 1 },
            { q: 'Tại sao người nói có chỗ ngồi tốt?', options: ['Đến sớm', 'Đặt vé trước qua mạng', ['Có người quen'], 'May mắn'], answer: 1 },
            { q: 'Sau phim họ đã làm gì?', options: ['Về nhà', ['Uống cà phê và nói về phim'], 'Đi ăn', 'Đi dạo'], answer: 1 }
        ]
    },
    {
        id: 'R15', title: 'Email Culture in Korea', level: 3,
        passage: '한국에서는 이메일을 보낼 때 지켜야 할 예절이 있습니다. 제목은 간단하고 명확하게 써야 합니다. 받는 사람의 이름과 직함을 정확히 적어야 합니다. 본문은 인사말로 시작해서 용건을 적고 마지막에 다시 인사로 끝냅니다. 한국 회사에서는 이메일 답장을 빨리 하는 것이 중요합니다. 보통 24시간 안에 답장을 보내야 합니다.',
        questions: [
            { q: 'Tiêu đề email nên thế nào?', options: ['Dài và chi tiết', 'Ngắn và rõ ràng', 'Hài hước', 'Không cần'], answer: 1 },
            { q: 'Trong email cần ghi đúng gì?', options: ['Ngày tháng', 'Tên và chức danh', 'Số điện thoại', 'Địa chỉ'], answer: 1 },
            { q: 'Email thường được viết theo cấu trúc nào?', options: ['Chỉ viết nội dung', ['Chào - nội dung - chào kết'], 'Viết dài', 'Không cần chào'], answer: 1 },
            { q: 'Nên trả lời email trong vòng bao lâu?', options: ['1 giờ', '24 giờ', '1 tuần', 'Không cần trả lời'], answer: 1 }
        ]
    },
    {
        id: 'R16', title: 'Korean Cafe Culture', level: 3,
        passage: '한국에는 카페가 정말 많습니다. 길을 걷다 보면 곳곳에서 카페를 볼 수 있습니다. 다양한 종류의 커피와 음료가 있습니다. 요즘은 개성 있는 테마 카페도 인기입니다. 고양이 카페, 책 카페, 보드게임 카페 등 특별한 경험을 할 수 있습니다. 저는 자주 카페에서 공부를 합니다. 조용하고 와이파이가 무료이기 때문입니다. 아이스 아메리카노를 가장 좋아합니다.',
        questions: [
            { q: 'Điều gì đặc biệt về văn hóa cà phê Hàn?', options: ['Ít quán', ['Nhiều quán cà phê và đa dạng'], 'Đắt', 'Không ngon'], answer: 1 },
            { q: 'Xu hướng quán cà phê nào đang thịnh hành?', options: ['Quán sang trọng', ['Quán theo chủ đề'], 'Quán nhanh', 'Quán tự phục vụ'], answer: 1 },
            { q: 'Tại sao người nói thường học ở quán cà phê?', options: ['Rẻ', ['Yên tĩnh và WiFi miễn phí'], 'Gần nhà', 'Ngon'], answer: 1 },
            { q: 'Người nói thích uống đồ uống nào?', options: ['Cà phê sữa', ['Americano đá'], 'Latte', 'Sinh tố'], answer: 1 }
        ]
    },
    {
        id: 'R17', title: 'Korean Wave Hallyu', level: 3,
        passage: '한류는 한국의 대중문화가 세계적으로 인기를 얻는 현상입니다. K-pop, 한국 드라마, 한국 영화, 한국 음식 등이 한류의 주요 요소입니다. 특히 BTS와 블랙핑크 같은 K-pop 그룹이 전 세계에서 큰 인기를 얻고 있습니다. 한국 드라마는 넷플릭스를 통해 많은 외국인들이 보고 있습니다. 한류 덕분에 한국어를 배우는 외국인이 늘고 있습니다. 저도 한류 때문에 한국어에 관심을 가지게 되었습니다.',
        questions: [
            { q: 'Hallyu (Làn sóng Hàn Quốc) là gì?', options: ['Phim Hàn', ['Văn hóa đại chúng Hàn được ưa chuộng toàn cầu'], 'Âm nhạc Hàn', 'Ẩm thực Hàn'], answer: 1 },
            { q: 'Yếu tố nào KHÔNG phải là thành phần chính của Hallyu?', options: ['K-pop', ['Thời trang Hàn'], 'Phim truyền hình Hàn', 'Ẩm thực Hàn'], answer: 1 },
            { q: 'Nhờ đâu mà phim Hàn được nhiều người nước ngoài xem?', options: ['Rạp chiếu', ['Netflix'], 'TV', 'YouTube'], answer: 1 },
            { q: 'Tại sao người nói bắt đầu quan tâm đến tiếng Hàn?', options: ['Vì bạn bè', ['Vì Hallyu'], 'Vì công việc', 'Vì du học'], answer: 1 }
        ]
    },
    {
        id: 'R18', title: 'First Day at Work', level: 3,
        passage: '어제는 제가 새 회사에 첫 출근하는 날이었습니다. 긴장이 많이 되었습니다. 아침 8시 50분에 회사에 도착했습니다. 부장님께 인사를 드렸습니다. 같은 팀 사람들에게 소개를 받았습니다. 다들 친절했습니다. 점심에는 팀 사람들과 함께 식당에 갔습니다. 서로 이야기하면서 친해질 수 있었습니다. 첫날이라 어려운 일은 시키지 않았습니다. 앞으로 열심히 배우겠습니다.',
        questions: [
            { q: 'Hôm qua là ngày gì của người nói?', options: ['Ngày nghỉ', ['Ngày đầu đi làm'], 'Ngày sinh nhật', 'Ngày hẹn'], answer: 1 },
            { q: 'Người nói đến công ty lúc mấy giờ?', options: ['8 giờ', ['8 giờ 50'], '9 giờ', '9 giờ 30'], answer: 1 },
            { q: 'Mọi người trong công ty thế nào?', options: ['Khó tính', 'Không thân thiện', ['Thân thiện'], 'Xa lánh'], answer: 2 },
            { q: 'Người nói đã làm gì vào buổi trưa?', options: ['Ăn một mình', ['Đi ăn cùng đồng nghiệp'], 'Làm việc', 'Nghỉ trưa'], answer: 1 }
        ]
    },
    {
        id: 'R19', title: 'Birthday Party', level: 3,
        passage: '지난주 토요일은 제 생일이었습니다. 친구들이 깜짝 생일 파티를 열어 주었습니다. 케이크와 선물을 준비했었습니다. 정말 감동이었습니다. 친구들과 맛있는 저녁을 먹었습니다. 치킨과 피자를 시켜 먹었습니다. 노래도 부르고 게임도 했습니다. 즐거운 시간이었습니다. 25살이 되었는데 아직도 어른이 된 것 같지 않습니다. 이 나이에 하고 싶은 일을 찾아서 열심히 해야겠습니다.',
        questions: [
            { q: 'Bạn bè đã làm gì cho sinh nhật người nói?', options: ['Tặng quà', ['Tiệc bất ngờ'], 'Đi chơi', 'Nấu ăn'], answer: 1 },
            { q: 'Họ đã ăn món gì?', options: ['Đồ Hàn', ['Gà rán và pizza'], 'Lẩu', 'Sushi'], answer: 1 },
            { q: 'Người nói bao nhiêu tuổi?', options: ['23', '24', '25', '26'], answer: 2 },
            { q: 'Cảm xúc của người nói thế nào?', options: ['Buồn', ['Cảm động và vui'], 'Mệt', 'Chán'], answer: 1 }
        ]
    },
    {
        id: 'R20', title: 'Making Korean Friends', level: 3,
        passage: '한국 친구를 사귀는 것은 한국어 실력 향상에 큰 도움이 됩니다. 저는 한국인 교환 학생 친구가 있습니다. 그 친구를 통해 많은 것을 배웠습니다. 처음에는 말이 잘 통하지 않아서 어려웠지만 지금은 많이 좋아졌습니다. 가끔 서로의 언어를 가르쳐 주기도 합니다. 저는 한국어를 가르쳐 주고 친구는 베트남어를 배웁니다. 이렇게 언어 교환을 하면 서로에게 도움이 됩니다.',
        questions: [
            { q: 'Kết bạn với người Hàn có lợi ích gì?', options: ['Vui', ['Cải thiện tiếng Hàn'], 'Được tặng quà', 'Đi chơi'], answer: 1 },
            { q: 'Người nói và bạn Hàn thường làm gì?', options: ['Đi du lịch', ['Dạy nhau tiếng mẹ đẻ'], 'Nấu ăn', 'Học cùng nhau'], answer: 1 },
            { q: 'Lúc đầu giao tiếp thế nào?', options: ['Dễ dàng', 'Rất tốt', ['Khó khăn'], 'Không giao tiếp'], answer: 2 },
            { q: 'Việc trao đổi ngôn ngữ có lợi cho ai?', options: ['Chỉ người nói', ['Cả hai'], 'Chỉ bạn Hàn', 'Không ai'], answer: 1 }
        ]
    },

    // === Stage 4 - Trung cấp (Bài 21-70) ===
    {
        id: 'R21', title: 'Korean Traditional Hanok', level: 4,
        passage: '한옥은 한국의 전통 가옥입니다. 자연과 조화를 이루는 것이 특징입니다. 나무와 흙, 종이 같은 자연 재료로 만듭니다. 한옥의 가장 큰 특징은 온돌과 마루입니다. 온돌은 방바닥을 데우는 난방 방식이고 마루는 나무로 만든 바닥입니다. 여름에는 시원하고 겨울에는 따뜻합니다. 요즘에는 현대식 한옥도 많이 짓고 있습니다. 한옥에 살아보는 것이 제 꿈 중 하나입니다.',
        questions: [
            { q: 'Hanok là gì?', options: ['Nhà hiện đại Hàn', ['Nhà truyền thống Hàn'], 'Chùa Hàn', 'Cung điện Hàn'], answer: 1 },
            { q: 'Hanok làm từ vật liệu gì?', options: ['Bê tông', ['Gỗ, đất, giấy'], 'Đá', 'Sắt'], answer: 1 },
            { q: 'Ondol là gì?', options: ['Mái nhà', ['Hệ thống sưởi sàn'], 'Cửa sổ', 'Sân'], answer: 1 },
            { q: 'Điều gì đặc biệt về hanok?', options: ['Đẹp', ['Mát hè ấm đông'], 'Rẻ', 'Dễ xây'], answer: 1 }
        ]
    },
    {
        id: 'R22', title: 'Smartphone Usage', level: 4,
        passage: '한국인의 스마트폰 사용 시간이 세계에서 가장 높은 수준입니다. 하루 평균 5시간 이상을 스마트폰으로 보냅니다. 주로 SNS, 메신저, 동영상 시청에 사용합니다. 전문가들은 스마트폰 사용 시간이 너무 길면 건강에 문제가 생길 수 있다고 경고합니다. 특히 잠들기 전에 스마트폰을 보면 숙면에 방해가 됩니다. 저도 스마트폰 사용 시간을 줄이기 위해 노력하고 있습니다. 하루 1시간씩 줄이는 것이 목표입니다.',
        questions: [
            { q: 'Người Hàn Quốc dùng điện thoại bao nhiêu giờ mỗi ngày?', options: ['3 giờ', ['5 giờ'], '7 giờ', '10 giờ'], answer: 1 },
            { q: 'Họ dùng điện thoại chủ yếu để làm gì?', options: ['Gọi điện', ['SNS, nhắn tin, xem video'], 'Học tập', 'Làm việc'], answer: 1 },
            { q: 'Xem điện thoại trước khi ngủ có tác hại gì?', options: ['Không sao', ['Gây rối giấc ngủ'], 'Tốt cho mắt', 'Giúp thư giãn'], answer: 1 },
            { q: 'Mục tiêu của người nói là gì?', options: ['Mua điện thoại mới', ['Giảm 1 giờ dùng/ngày'], 'Dùng nhiều hơn', 'Bỏ điện thoại'], answer: 1 }
        ]
    },
    {
        id: 'R23', title: 'Environmental Protection', level: 4,
        passage: '최근 환경 보호에 대한 관심이 높아지고 있습니다. 플라스틱 사용을 줄이기 위한 다양한 노력이 이루어지고 있습니다. 한국에서는 2019년부터 일회용 비닐봉투 사용이 금지되었습니다. 많은 카페에서 개인 컵을 사용하면 할인을 해 줍니다. 분리수거는 한국 생활의 기본입니다. 음식물 쓰레기도 따로 버려야 합니다. 환경 보호를 위해 작은 것부터 실천하는 것이 중요합니다.',
        questions: [
            { q: 'Từ năm 2019, Hàn Quốc đã cấm gì?', options: ['Hút thuốc', ['Túi nilon dùng một lần'], 'Xe hơi', 'Nhựa'], answer: 1 },
            { q: 'Nhiều quán cà phê làm gì để bảo vệ môi trường?', options: ['Tăng giá', ['Giảm giá khi dùng cố cá nhân'], 'Đóng cửa sớm', 'Không bán đồ uống'], answer: 1 },
            { q: 'Phân loại rác ở Hàn Quốc thế nào?', options: ['Không cần', ['Là điều cơ bản'], 'Tùy chọn', 'Chỉ ở Seoul'], answer: 1 },
            { q: 'Điều gì được cho là quan trọng?', options: ['Làm việc lớn', ['Thực hành từ việc nhỏ'], 'Chờ chính phủ', 'Không cần làm gì'], answer: 1 }
        ]
    },
    {
        id: 'R24', title: 'Job Interview Tips', level: 4,
        passage: '면접은 취업에서 가장 중요한 단계 중 하나입니다. 면접을 잘 보기 위해서는 철저한 준비가 필요합니다. 먼저 회사에 대한 조사를 충분히 해야 합니다. 회사의 비전과 가치를 이해하는 것이 중요합니다. 또한 자신의 경험을 구체적으로 이야기할 수 있어야 합니다. 면접 예상 질문을 미리 연습하는 것도 좋은 방법입니다. 면접 당일에는 단정한 복장과 자신 있는 태도가 중요합니다. 질문에 대답할 때는 눈을 마주치고 또박또박 말해야 합니다.',
        questions: [
            { q: 'Điều gì quan trọng nhất trước khi phỏng vấn?', options: ['Mua quần áo mới', ['Nghiên cứu kỹ về công ty'], ['Nghỉ ngơi'], 'Ăn mặc đẹp'], answer: 1 },
            { q: 'Cần chuẩn bị gì về kinh nghiệm bản thân?', options: ['Không cần', ['Có thể kể cụ thể'], 'Chỉ nói ngắn', 'Phóng đại'], answer: 1 },
            { q: 'Khi trả lời phỏng vấn, cần chú ý điều gì?', options: ['Nhìn xuống', ['Nhìn vào mắt và nói rõ ràng'], 'Nói nhanh', 'Nói nhỏ'], answer: 1 },
            { q: 'Trang phục khi phỏng vấn cần thế nào?', options: ['Thoải mái', ['Chỉnh tề'], 'Thời trang', 'Không quan trọng'], answer: 1 }
        ]
    },
    {
        id: 'R25', title: 'Traveling to Jeju Island', level: 4,
        passage: '제주도는 한국에서 가장 인기 있는 여행지입니다. 아름다운 자연 경관이 유명합니다. 한라산, 성산일출봉, 용두암 같은 명소가 있습니다. 제주도는 감귤과 해산물도 유명합니다. 특히 고등어 구이와 성게 비빔밥을 꼭 먹어 봐야 합니다. 제주도에 가려면 비행기를 타거나 배를 타면 됩니다. 서울에서 비행기로 1시간쯤 걸립니다. 저는 작년에 제주도에 다녀왔습니다. 정말 아름다웠고 다음에 또 가고 싶습니다.',
        questions: [
            { q: 'Đảo Jeju nổi tiếng về điều gì?', options: ['Thành phố lớn', ['Cảnh quan thiên nhiên'], 'Mua sắm', 'Giải trí'], answer: 1 },
            { q: 'Điểm tham quan nào KHÔNG được nhắc đến?', options: ['Núi Halla', ['Tháp Namsan'], 'Seongsan Ilchulbong', 'Yongduam'], answer: 1 },
            { q: 'Từ Seoul đến Jeju đi máy bay mất bao lâu?', options: ['30 phút', ['1 giờ'], '2 giờ', '3 giờ'], answer: 1 },
            { q: 'Món ăn đặc sản được nhắc đến?', options: ['Bibimbap', ['Cá thu nướng và cơm trộn nhím biển'], 'Samgyeopsal', ['Naengmyeon']], answer: 1 }
        ]
    },
    {
        id: 'R26', title: 'Benefits of Reading', level: 4,
        passage: '독서는 많은 이점이 있습니다. 첫째, 지식을 넓힐 수 있습니다. 책을 통해 새로운 정보와 다양한 시각을 얻을 수 있습니다. 둘째, 언어 능력이 향상됩니다. 다양한 표현과 어휘를 자연스럽게 배울 수 있습니다. 셋째, 스트레스 해소에 도움이 됩니다. 좋은 책에 몰입하면 일상의 걱정을 잠시 잊을 수 있습니다. 저는 잠들기 전에 30분씩 책을 읽습니다. 하루를 마무리하는 좋은 방법입니다.',
        questions: [
            { q: 'Lợi ích đầu tiên của việc đọc sách là gì?', options: ['Giải trí', ['Mở rộng kiến thức'], 'Kết bạn', 'Kiếm tiền'], answer: 1 },
            { q: 'Đọc sách cải thiện kỹ năng nào?', options: ['Thể thao', ['Ngôn ngữ'], 'Nấu ăn', 'Lái xe'], answer: 1 },
            { q: 'Đọc sách có tác dụng gì với stress?', options: ['Không liên quan', ['Giúp giảm stress'], 'Tăng stress', 'Gây lo lắng'], answer: 1 },
            { q: 'Người nói đọc sách bao lâu mỗi ngày?', options: ['15 phút', ['30 phút'], '1 giờ', '2 giờ'], answer: 1 }
        ]
    },
    {
        id: 'R27', title: 'Dining Etiquette in Korea', level: 4,
        passage: '한국 식사 예절에는 몇 가지 중요한 규칙이 있습니다. 첫째, 어른이 먼저 수저를 든 후에 식사를 시작해야 합니다. 둘째, 밥그릇을 들고 먹지 않습니다. 셋째, 음식을 먹을 때 소리를 내지 않습니다. 국물을 마실 때도 조용히 마셔야 합니다. 넷째, 술을 따를 때는 두 손으로 따르고 받을 때도 두 손으로 받습니다. 다섯째, 식사 중에 코를 풀지 않습니다. 이러한 예절을 지키면 한국 사람들에게 좋은 인상을 줄 수 있습니다.',
        questions: [
            { q: 'Khi nào bắt đầu ăn?', options: ['Khi ngồi vào bàn', ['Khi người lớn bắt đầu'], ['Khi đói'], 'Khi đồ ăn ra'], answer: 1 },
            { q: 'Không nên làm gì với bát cơm?', options: ['Để trên bàn', ['Cầm bát lên'], ['Ăn nhanh'], 'Để nguội'], answer: 1 },
            { q: 'Khi rót rượu, nên dùng mấy tay?', options: ['Một tay', ['Hai tay'], 'Tay phải', 'Tay trái'], answer: 1 },
            { q: 'Hành vi nào không được làm khi ăn?', options: ['Nói chuyện', ['Xì mũi'], ['Cười', 'Uống nước']], answer: 1 }
        ]
    },
    {
        id: 'R28', title: 'Korean Traditional Music', level: 4,
        passage: '한국의 전통 음악은 다양한 악기와 독특한 리듬이 특징입니다. 대표적인 전통 악기로는 가야금, 거문고, 장구, 북 등이 있습니다. 판소리는 한 사람이 노래와 이야기를 함께하는 한국의 전통 공연 예술입니다. 2003년에 유네스코 세계무형유산으로 지정되었습니다. 사물놀이는 네 가지 악기(꽹과리, 징, 장구, 북)로 연주하는 신나는 음악입니다. 요즘에는 전통 음악과 현대 음악을 결합한 퓨전 국악도 인기가 있습니다.',
        questions: [
            { q: 'Nhạc cụ truyền thống Hàn gồm những gì?', options: ['Đàn piano', ['Gayageum, geomungo, janggu'], ['Guitar'], 'Violin'], answer: 1 },
            { q: 'Pansori là gì?', options: ['Nhạc cụ', ['Nghệ thuật hát kể chuyện'], ['Điệu nhảy', 'Trang phục'], answer: 1 },
            { q: 'Pansori được UNESCO công nhận năm nào?', options: ['1999', ['2003'], '2008', '2012'], answer: 1 },
            { q: 'Samullori là gì?', options: ['Bài hát', ['Nhạc cụ bộ tứ'], ['Múa', 'Kịch'], answer: 1 }
        ]
    },
    {
        id: 'R29', title: 'Online Shopping Culture', level: 4,
        passage: '한국은 온라인 쇼핑이 매우 발달했습니다. 쿠팡, 배달의민족 같은 앱으로 거의 모든 것을 살 수 있습니다. 특히 같은 날 배송 서비스가 인기입니다. 밤 12시 전에 주문하면 다음 날 아침에 받을 수 있습니다. 신선 식품도 온라인으로 주문할 수 있습니다. 전통 시장의 물건도 배달 앱으로 주문 가능합니다. 옷, 전자제품, 식료품까지 모두 온라인으로 삽니다. 저도 온라인 쇼핑을 자주 이용합니다. 시간을 절약할 수 있고 가격도 더 싼 경우가 많습니다.',
        questions: [
            { q: 'Dịch vụ giao hàng nào phổ biến ở Hàn?', options: ['Giao trong tuần', ['Giao trong ngày'], 'Giao quốc tế', 'Giao chậm'], answer: 1 },
            { q: 'Đặt hàng trước nửa đêm thì nhận hàng khi nào?', options: ['Cuối tuần', ['Sáng hôm sau'], 'Sau 3 ngày', 'Trong 1 tuần'], answer: 1 },
            { q: 'Có thể mua thực phẩm tươi sống online không?', options: ['Không', ['Có'], 'Chỉ ở Seoul', 'Tùy loại'], answer: 1 },
            { q: 'Người nói thích mua sắm online vì lý do gì?', options: ['Vui', ['Tiết kiệm thời gian và tiền'], 'Bắt buộc', 'Không thích ra ngoài'], answer: 1 }
        ]
    },
    {
        id: 'R30', title: 'Festivals in Korea', level: 4,
        passage: '한국에는 다양한 축제가 있습니다. 봄에는 벚꽃 축제가 유명합니다. 여의도와 경주에서 많은 사람들이 벚꽃을 감상합니다. 여름에는 보령 머드 축제가 인기입니다. 진흙을 몸에 바르며 즐기는 독특한 축제입니다. 가을에는 전주 비빔밥 축제가 열립니다. 다양한 비빔밥을 맛볼 수 있습니다. 겨울에는 화천 산천어 축제가 유명합니다. 얼음낚시를 체험할 수 있습니다. 계절마다 다른 매력이 있어서 지루할 틈이 없습니다.',
        questions: [
            { q: 'Mùa xuân có lễ hội gì nổi tiếng?', options: ['Lễ hội bùn', ['Lễ hội hoa anh đào'], 'Lễ hội cá hồi', 'Lễ hội ẩm thực'], answer: 1 },
            { q: 'Lễ hội bùn Boryeong diễn ra vào mùa nào?', options: ['Xuân', ['Hè'], 'Thu', 'Đông'], answer: 1 },
            { q: 'Lễ hội mùa đông ở Hwacheon có hoạt động gì?', options: ['Trượt tuyết', ['Câu cá trên băng'], 'Đi xe trượt', 'Xem pháo hoa'], answer: 1 },
            { q: 'Lễ hội nào liên quan đến bibimbap?', options: ['Seoul', ['Jeonju'], 'Busan', 'Gyeongju'], answer: 1 }
        ]
    }
];

// Total count for reference
const readingBankTotal = topikReadingBank.length;
console.log(`📄 TOPIK Reading Bank: ${readingBankTotal} bài đọc loaded`);

// Combine with existing reading passages from lessons
function getAllReadings() {
    const lessonReadings = [];
    if (typeof lessonsData !== 'undefined') {
        lessonsData.forEach(lesson => {
            if (lesson.reading) {
                lessonReadings.push({
                    id: 'L' + lesson.id,
                    title: lesson.title,
                    level: lesson.stage,
                    passage: lesson.reading,
                    questions: lesson.readingQuestions || []
                });
            }
        });
    }
    return [...lessonReadings, ...topikReadingBank];
}
