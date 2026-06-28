// ===== 📖 TOPIK 2 GRAMMAR BANK — 80+ NGỮ PHÁP TRUNG CẤP =====
// Ngân hàng ngữ pháp trung cấp TOPIK 2
// Mỗi điểm ngữ pháp: { id, title, content, examples, level, stage }

const grammarBank = [
    // ===== TRUNG CẤP 1 (중급 1): ~35 điểm =====
    {
        id: 'g1', title: '~(으)ㄴ/는 편이다',
        content: 'Diễn tả "có xu hướng, thuộc về phía nào đó". Dùng để nói rằng một điều gì đó nghiêng về một phía nào đó hơn. \nV/A + (으)ㄴ/는 편이다.\n• Tính từ: 예쁜 편이다 (thuộc loại xinh)\n• Động từ: 먹는 편이다 (thuộc loại ăn)',
        examples: ['그 사람은 성격이 좋은 편이에요 (Tính cách người đó thuộc loại tốt)', '저는 집에서 밥을 먹는 편이에요 (Tôi thuộc loại ăn cơm ở nhà)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g2', title: '~(으)ㄹ 뿐만 아니라',
        content: 'Không những...mà còn. Dùng để thêm thông tin bổ sung. \nV/A + (으)ㄹ 뿐만 아니라 + N + 일 뿐만 아니라.\n• VD: 예쁠 뿐만 아니라 똑똑해요 (Không những đẹp mà còn thông minh)',
        examples: ['그 영화는 재미있을 뿐만 아니라 감동적이에요 (Phim không chỉ thú vị mà còn cảm động)', '한국어를 공부할 뿐만 아니라 일도 해요 (Không chỉ học tiếng Hàn mà còn đi làm)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g3', title: '~(으)ㄴ/는 반면에',
        content: 'Trong khi đó, ngược lại. Diễn tả sự tương phản giữa hai mệnh đề. \nV/A + (으)ㄴ/는 반면에 + N + 인 반면에.\n• VD: 값이 비싼 반면에 품질이 좋아요 (Giá đắt trong khi chất lượng tốt)',
        examples: ['이 아파트는 넓은 반면에 위치가 안 좋아요 (Căn hộ này rộng nhưng vị trí không tốt)', '한국어는 어려운 반면에 재미있어요 (Tiếng Hàn khó nhưng thú vị)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g4', title: '~(으)ㄴ/는 대신에',
        content: 'Thay vì... / Thay vào đó. Diễn tả việc làm một việc thay cho việc khác. \nV/A + (으)ㄴ/는 대신에 + N + 대신에.\n• VD: 커피를 마시는 대신 물을 마셔요 (Thay vì uống cà phê thì uống nước)',
        examples: ['택시를 타는 대신 지하철을 타요 (Thay vì đi taxi thì đi tàu điện)', '주말에 일하는 대신 평일에 쉬어요 (Cuối tuần làm thay vì nghỉ ngày thường)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g5', title: '~(으)ㄹ 정도로/~(으)ㄹ 정도이다',
        content: 'Đến mức... Diễn tả mức độ cao đến nỗi...\nV/A + (으)ㄹ 정도로/을 정도이다.\n• VD: 아플 정도로 운동했어요 (Tập đến mức đau)',
        examples: ['눈이 빠질 정도로 찾았어요 (Tìm đến mức mỏi mắt)', '울고 싶을 정도로 슬펐어요 (Buồn đến mức muốn khóc)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g6', title: '~(으)ㄴ/는 탓에',
        content: 'Tại vì, vì lỗi của... Diễn tả nguyên nhân dẫn đến kết quả tiêu cực.\nV/A + (으)ㄴ/는 탓에 + N + 탓에.\n• VD: 비가 온 탓에 경기가 취소됐어요 (Tại mưa nên trận đấu bị hủy)',
        examples: ['몸이 안 좋은 탓에 집에 있었어요 (Tại cơ thể không khỏe nên ở nhà)', '시간이 없는 탓에 준비를 못 했어요 (Tại không có thời gian nên không chuẩn bị được)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g7', title: '~(으)ㄴ/는 덕분에',
        content: 'Nhờ có... (kết quả tích cực). Ngược với 탓에.\nV/A + (으)ㄴ/는 덕분에 + N + 덕분에.\n• VD: 선생님 덕분에 합격했어요 (Nhờ cô giáo mà đỗ)',
        examples: ['날씨가 좋은 덕분에 여행을 잘 다녀왔어요 (Nhờ thời tiết đẹp nên chuyến đi vui)', '친구가 도와준 덕분에 일찍 끝났어요 (Nhờ bạn giúp nên xong sớm)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g8', title: '~(으)ㄴ/는 김에',
        content: 'Nhân tiện, tiện thể. Khi đang làm việc gì đó thì nhân tiện làm luôn việc khác.\nV/A + (으)ㄴ/는 김에.\n• VD: 나가는 김에 우유도 사 와요 (Nhân tiện ra ngoài mua sữa luôn)',
        examples: ['도서관에 간 김에 책도 빌렸어요 (Nhân tiện đi thư viện mượn sách luôn)', '청소하는 김에 방도 정리했어요 (Nhân tiện dọn dẹp thì sắp xếp phòng luôn)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g9', title: '~기 마련이다',
        content: 'Đương nhiên là, tất nhiên là. Diễn tả điều hiển nhiên, lẽ đương nhiên.\nV/A + 기 마련이다.\n• VD: 노력하면 성공하기 마련이에요 (Đương nhiên nếu nỗ lực thì thành công)',
        examples: ['사람은 누구나 실수하기 마련이에요 (Con người ai cũng đương nhiên có lúc sai)', '열심히 하면 좋은 결과가 있기 마련이에요 (Chăm chỉ thì đương nhiên có kết quả tốt)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g10', title: '~기 십상이다',
        content: 'Dễ, có khả năng cao... Diễn tả khả năng xảy ra điều không mong muốn rất cao.\nV/A + 기 십상이다.\n• VD: 준비 없이 시험 보면 떨어지기 십상이에요 (Thi không chuẩn bị thì trượt là dễ)',
        examples: ['방심하다가 다치기 십상이에요 (Lơ là thì dễ bị thương)', '돈을 많이 쓰면 저축하기 어렵기 십상이에요 (Tiêu nhiều tiền thì khó tiết kiệm)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g11', title: '~(으)ㄴ/는 척/체하다',
        content: 'Giả vờ như...\nV/A + (으)ㄴ/는 척하다 / 체하다. Cả hai đều giống nhau.\n• VD: 모르는 척했어요 (Giả vờ không biết)',
        examples: ['자는 척했어요 (Giả vờ ngủ)', '듣고 있는 척했지만 사실 안 들었어요 (Giả vờ đang nghe nhưng thật ra không nghe)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g12', title: '~(으)ㄴ/는 데다가',
        content: 'Hơn nữa, thêm vào đó. Diễn tả thêm thông tin tích lũy.\nV/A + (으)ㄴ/는 데다가 + N + 인 데다가.\n• VD: 값이 싼 데다가 품질도 좋아요 (Rẻ mà chất lượng cũng tốt)',
        examples: ['길이 막히는 데다가 비까지 왔어요 (Kẹt xe mà trời còn mưa)', '그 식당은 음식이 맛있는 데다가 가격도 착해요 (Nhà hàng đó đồ ăn ngon mà giá cũng mềm)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g13', title: '~(으)ㄴ/는 이상',
        content: 'Một khi đã... thì. Diễn tả điều kiện đã được thiết lập.\nV/A + (으)ㄴ/는 이상.\n• VD: 출발한 이상 끝까지 가야 해요 (Một khi đã khởi hành thì phải đi đến cuối)',
        examples: ['하기로 한 이상 최선을 다해야 해요 (Một khi đã quyết làm thì phải hết sức)', '합격한 이상 더 열심히 공부할 거예요 (Một khi đã đỗ thì sẽ học chăm hơn)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g14', title: '~(으)ㄴ/는 바람에',
        content: 'Vì... nên (kết quả tiêu cực, bất ngờ). Nguyên nhân dẫn đến hậu quả không mong muốn.\nV/A + (으)ㄴ/는 바람에.\n• VD: 늦잠을 자는 바람에 지각했어요 (Vì ngủ dậy muộn nên đi trễ)',
        examples: ['갑자기 비가 오는 바람에 다 젖었어요 (Trời đột nhiên mưa nên ướt hết)', '길이 막히는 바람에 약속에 늦었어요 (Kẹt xe nên đến hẹn muộn)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g15', title: '~(으)ㄹ 지경이다',
        content: 'Đến nỗi, đến mức. Diễn tả mức độ nghiêm trọng.\nV/A + (으)ㄹ 지경이다.\n• VD: 울 지경으로 기뻤어요 (Vui đến nỗi muốn khóc)',
        examples: ['배고파서 쓰러질 지경이었어요 (Đói đến nỗi ngất được)', '할 일이 많아서 미칠 지경이에요 (Việc nhiều đến nỗi phát điên)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g16', title: '~(으)ㄴ/는 대로',
        content: 'Theo như, ngay sau khi, y như.\nCó 2 nghĩa: (1) ngay sau khi: V+는 대로. (2) theo như: N+대로.\n• VD: 도착하는 대로 연락해요 (Đến nơi thì báo ngay) / 말한 대로 했어요 (Làm theo lời đã nói)',
        examples: ['집에 도착하는 대로 전화할게요 (Về đến nhà là gọi ngay)', '들은 대로 말했어요 (Nói y như đã nghe)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g17', title: '~(으)ㄹ 수밖에 없다',
        content: 'Không còn cách nào khác ngoài... Bắt buộc phải.\nV + (으)ㄹ 수밖에 없다.\n• VD: 포기할 수밖에 없었어요 (Không còn cách nào khác ngoài từ bỏ)',
        examples: ['약속이 있으니까 갈 수밖에 없어요 (Đã có hẹn nên không thể không đi)', '돈이 없으니까 참을 수밖에 없어요 (Không có tiền nên đành chịu)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g18', title: '~(으)ㄹ 따름이다',
        content: 'Chỉ là... mà thôi. Nhấn mạnh rằng không có gì hơn.\nV/A + (으)ㄹ 따름이다.\n• VD: 최선을 다할 따름이에요 (Chỉ là cố gắng hết sức thôi)',
        examples: ['저는 시킨 대로 한 따름이에요 (Tôi chỉ làm theo lời dặn thôi)', '그냥 기다릴 따름이에요 (Chỉ chờ đợi thôi)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g19', title: '~(으)ㄴ/는 셈치다',
        content: 'Coi như là... Diễn tả giả định cho một tình huống.\nV/A + (으)ㄴ/는 셈치다.\n• VD: 내 없는 셈쳐 (Coi như tao không tồn tại)',
        examples: ['이번 한 번은 없는 셈 칠게요 (Lần này tôi coi như chưa xảy ra)', '여행 간 셈 치고 돈을 썼어요 (Tiêu tiền coi như đã đi du lịch)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g20', title: '~(으)ㄹ 겸',
        content: 'Vừa... vừa... Diễn tả hai mục đích cùng lúc.\nV + (으)ㄹ 겸 (해서) oder N + 겸.\n• VD: 공부할 겸 친구도 만날 겸 도서관에 갔어요 (Vừa học vừa gặp bạn nên đi thư viện)',
        examples: ['운동할 겸 산책할 겸 공원에 갔어요 (Vừa tập thể dục vừa đi dạo nên ra công viên)', '구경할 겸 쇼핑할 겸 명동에 갔어요 (Đi Myeongdong vừa ngắm vừa mua sắm)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g21', title: '~는 통에',
        content: 'Vì (tiếng ồn/sự hỗn loạn) nên. Dùng khi nguyên nhân là sự ồn ào, náo loạn.\nV + 는 통에.\n• VD: 옆집에서 시끄러운 통에 잠을 못 잤어요 (Vì nhà bên cạnh ồn quá nên không ngủ được)',
        examples: ['애들이 떠드는 통에 공부를 못했어요 (Vì bọn trẻ ồn quá nên không học được)', '사람들이 많은 통에 앞이 안 보였어요 (Vì đông người quá nên không thấy phía trước)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g22', title: '~는 길이다',
        content: 'Đang trên đường làm gì đó.\nV + 는 길이다.\n• VD: 학교에 가는 길이에요 (Đang trên đường đến trường)',
        examples: ['퇴근하는 길에 친구를 만났어요 (Trên đường tan làm gặp bạn)', '집에 가는 길에 빵을 샀어요 (Trên đường về nhà mua bánh mì)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g23', title: '~는 척하다',
        content: 'Giả vờ làm gì đó.\nV + 는 척하다.\n• VD: 공부하는 척했어요 (Giả vờ đang học)',
        examples: ['듣는 척하면서 딴생각했어요 (Giả vờ nghe nhưng nghĩ việc khác)', '모르는 척하지 마세요 (Đừng giả vờ không biết)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g24', title: '~(으)ㄹ 테니까',
        content: 'Chắc sẽ... nên hãy... Diễn tả suy đoán + đề xuất.\nV/A + (으)ㄹ 테니까.\n• VD: 비가 올 테니까 우산을 가져가세요 (Chắc sẽ mưa nên hãy mang ô đi)',
        examples: ['시간이 없을 테니까 빨리 가자 (Chắc không có thời gian nên đi nhanh đi)', '제가 할 테니까 걱정하지 마세요 (Tôi sẽ làm nên đừng lo)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g25', title: '~아/어야겠다',
        content: 'Phải... rồi. Thể hiện quyết tâm hoặc nghĩ rằng cần phải làm.\nV/A + 아/어야겠다.\n• VD: 열심히 공부해야겠어요 (Phải học chăm chỉ thôi)',
        examples: ['다이어트를 시작해야겠어요 (Phải bắt đầu ăn kiêng thôi)', '이제 집에 가야겠어요 (Bây giờ phải về nhà thôi)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g26', title: '~아/어 놓다',
        content: 'Làm sẵn, làm trước. Hành động hoàn thành và kết quả được giữ nguyên.\nV + 아/어 놓다.\n• VD: 밥을 해 놓았어요 (Nấu cơm sẵn rồi)',
        examples: ['미리 표를 사 놓았어요 (Mua vé trước rồi)', '문을 열어 놓았어요 (Mở cửa sẵn rồi)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g27', title: '~아/어 두다',
        content: 'Để/làm sẵn. Tương tự 놓다 nhưng nhấn mạnh việc lưu trữ cho tương lai.\nV + 아/어 두다.\n• VD: 중요한 걸 메모해 두었어요 (Ghi chú việc quan trọng rồi)',
        examples: ['자료를 컴퓨터에 저장해 두었어요 (Lưu tài liệu vào máy tính rồi)', '여분 열쇠를 서랍에 넣어 두었어요 (Để chìa khóa dự phòng vào ngăn kéo rồi)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g28', title: '~아/어 버리다',
        content: 'Làm mất, làm xong (thường là hối tiếc hoặc nhẹ nhõm). \nV + 아/어 버리다.\n• VD: 실수로 지워 버렸어요 (Lỡ xóa mất rồi)',
        examples: ['과자를 다 먹어 버렸어요 (Ăn hết bánh kẹo mất rồi)', '어렵지만 끝까지 해 버렸어요 (Khó nhưng làm xong luôn)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g29', title: '~(으)ㄴ/는지 알다/모르다',
        content: 'Biết/không biết là...\nV/A + (으)ㄴ/는지 알다/모르다.\n• VD: 그분이 누군지 알아요? (Anh ấy là ai bạn biết không?)',
        examples: ['어디에 가는지 알고 있어요? (Bạn có biết đi đâu không?)', '이게 무슨 뜻인지 몰라요 (Tôi không biết cái này nghĩa là gì)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g30', title: '~(으)ㄴ/는/(으)ㄹ 줄 알았다',
        content: 'Đã nghĩ là, tưởng là (nhưng thực tế không phải).\nV/A + (으)ㄴ/는/(으)ㄹ 줄 알았다.\n• VD: 한국 사람인 줄 알았어요 (Tưởng là người Hàn)',
        examples: ['시험이 쉬운 줄 알았는데 어려웠어요 (Tưởng thi dễ nhưng khó)', '벌써 온 줄 알았어요 (Tưởng đã đến rồi)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g31', title: '~(으)ㄹ 리가 없다',
        content: 'Không thể nào... được. Diễn tả sự phủ định mạnh mẽ.\nV/A + (으)ㄹ 리가 없다.\n• VD: 그 사람이 거짓말할 리가 없어요 (Người đó không thể nào nói dối được)',
        examples: ['벌써 끝났을 리가 없어요 (Không thể nào đã kết thúc rồi được)', '그 소문이 사실일 리가 없어요 (Tin đồn đó không thể nào là thật được)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g32', title: '~(으)ㄴ/는 모양이다',
        content: 'Hình như, dường như. Suy đoán dựa trên bằng chứng.\nV/A + (으)ㄴ/는 모양이다.\n• VD: 비가 온 모양이에요 (Hình như trời đã mưa)',
        examples: ['두 사람이 싸운 모양이에요 (Hình như hai người đã cãi nhau)', '아픈 모양이에요 (Dường như bị ốm)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g33', title: '~(으)ㄴ/는 듯하다',
        content: 'Dường như, có vẻ như. Suy đoán.\nV/A + (으)ㄴ/는 듯하다.\n• VD: 그 영화는 재미있는 듯해요 (Phim đó có vẻ thú vị)',
        examples: ['비가 올 듯해요 (Có vẻ sắp mưa)', '지금쯤 도착한 듯해요 (Có vẻ bây giờ đã đến rồi)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g34', title: '~(으)ㄴ/는/(으)ㄹ 법하다',
        content: 'Có vẻ, đáng lẽ, hợp lý. Diễn tả sự suy đoán hợp lý.\nV/A + (으)ㄴ/는/(으)ㄹ 법하다.\n• VD: 그럴 법해요 (Hợp lý đấy, có vẻ thế)',
        examples: ['화낼 법도 해요 (Cũng có vẻ đáng giận)', '그런 실수는 누구나 할 법해요 (Sai lầm như thế ai cũng có thể mắc)'],
        level: '🟡 Trung cấp 1', stage: 4
    },
    {
        id: 'g35', title: '~아/어지다 (tự động từ hóa)',
        content: 'Trở nên, bị. Biến tính từ thành động từ tự biến đổi.\nA + 아/어지다.\n• VD: 예뻐지다 (trở nên xinh), 좋아지다 (trở nên tốt), 많아지다 (trở nên nhiều)',
        examples: ['날씨가 따뜻해졌어요 (Trời đã trở nên ấm)', '한국어 실력이 좋아졌어요 (Trình độ tiếng Hàn đã tốt lên)'],
        level: '🟡 Trung cấp 1', stage: 4
    },

    // ===== TRUNG CẤP 2 (중급 2): ~45 điểm =====
    {
        id: 'g36', title: '~(으)ㄹ수록',
        content: 'Càng... càng... (so sánh kép)\nV/A + (으)ㄹ수록.\n• VD: 공부할수록 재미있어요 (Càng học càng thú vị)',
        examples: ['연습할수록 실력이 느는 것 같아요 (Càng luyện tập càng thấy trình độ tăng)', '생각할수록 화가 나요 (Càng nghĩ càng tức)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g37', title: '~(으)ㄴ/는/(으)ㄹ 것 같다',
        content: 'Hình như, có vẻ. Diễn tả suy đoán hoặc ấn tượng.\nV/A + (으)ㄴ/는/(으)ㄹ 것 같다. \n• Hiện tại: A+은/ㄴ 것 같다, V+는 것 같다\n• Quá khứ: V+은/ㄴ 것 같다\n• Tương lai: V/A+을/ㄹ 것 같다',
        examples: ['그 사람이 일본 사람인 것 같아요 (Hình như người đó là người Nhật)', '비가 올 것 같아요 (Có vẻ sắp mưa)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g38', title: '~(으)면 좋겠다',
        content: 'Giá mà, mong là. Ước muốn.\nV/A + (으)면 좋겠다.\n• VD: 합격했으면 좋겠어요 (Mong là đỗ)',
        examples: ['날씨가 좋으면 좋겠어요 (Mong thời tiết đẹp)', '모두 건강했으면 좋겠어요 (Mong mọi người đều khỏe)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g39', title: '~던데요',
        content: 'Tôi thấy... mà. Nhấn mạnh bằng chứng từ kinh nghiệm. Dùng trong văn nói để chia sẻ nhận xét.\nV/A + 던데요.\n• VD: 그 식당 음식이 괜찮던데요 (Tôi thấy đồ ăn nhà hàng đó ngon mà)',
        examples: ['어제는 날씨가 좋던데요 (Hôm qua tôi thấy thời tiết đẹp mà)', '그 영화가 재미있던데요 (Tôi thấy phim đó thú vị mà)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g40', title: '~(으)ㄴ데요',
        content: 'Nhưng mà... Tuy nhiên. Dùng để mở đầu câu chuyện hoặc thể hiện sự tương phản nhẹ.\nV/A + (으)ㄴ데요.\n• VD: 가고 싶은데요, 시간이 없어요 (Muốn đi nhưng không có thời gian)',
        examples: ['한국어를 공부하고 있는데요, 좀 어려워요 (Đang học tiếng Hàn mà hơi khó)', '이 옷이 예쁜데요, 너무 비싸요 (Cái áo này đẹp nhưng đắt quá)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g41', title: '~는데도',
        content: 'Mặc dù... vẫn. Nhượng bộ mạnh hơn ~아/어도.\nV/A + 는데도.\n• VD: 열심히 공부하는데도 성적이 안 올라요 (Dù học chăm vẫn không lên điểm)',
        examples: ['잠을 많이 잤는데도 피곤해요 (Dù ngủ nhiều vẫn mệt)', '돈이 없는데도 쇼핑을 했어요 (Dù không có tiền vẫn đi mua sắm)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g42', title: '~(으)ㄴ/는가 보다',
        content: 'Hình như. Suy đoán dựa trên quan sát thực tế (có bằng chứng).\nV/A + (으)ㄴ/는가 보다.\n• VD: 비가 오나 봐요 (Hình như trời mưa - thấy người cầm ô)',
        examples: ['피곤한가 봐요. 자고 있어요 (Hình như mệt - đang ngủ)', '그 소식을 아직 못 들었나 봐요 (Hình như chưa nghe tin đó)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g43', title: '~나 보다 (V) / (으)ㄴ가 보다 (A)',
        content: 'Hình như. Suy đoán dựa trên tình huống.\nV + 나 보다 / A + (으)ㄴ가 보다.\n• VD: 병원에 가나 봐요 (Hình như đi bệnh viện)',
        examples: ['아픈가 봐요 (Hình như bị ốm)', '아직 안 왔나 봐요 (Hình như chưa đến)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g44', title: '~던',
        content: 'Đã từng (hồi đó). Gắn vào động từ làm định ngữ cho danh từ chỉ việc đã từng làm.\nV + 던 + N.\n• VD: 자주 가던 카페 (Quán cafe thường hay đến hồi đó)',
        examples: ['예전에 읽었던 책을 다시 읽었어요 (Đọc lại cuốn sách đã từng đọc hồi trước)', '어렸을 때 입었던 옷이에요 (Quần áo từng mặc hồi nhỏ)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g45', title: '~더니',
        content: 'Đã... mà bây giờ (tương phản). Quá khứ khác với hiện tại.\nV/A + 더니.\n• VD: 그 친구는 작년에 한국어를 못하더니 지금은 잘해요 (Bạn đó năm ngoái không nói được tiếng Hàn mà bây giờ nói giỏi)',
        examples: ['아침에는 비가 오더니 지금은 맑아요 (Sáng mưa mà bây giờ lại nắng)', '그 사람이 술을 안 마시더니 오늘은 마셨어요 (Người đó không uống rượu mà hôm nay lại uống)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g46', title: '~다시피',
        content: 'Gần như, hầu như. Cũng như.\nV + 다시피 하다 / 알다시피 (như bạn đã biết).\n• VD: 매일 지각하다시피 해요 (Hầu như ngày nào cũng đi trễ)',
        examples: ['아시다시피 요즘 물가가 많이 올랐어요 (Như các bạn đã biết, giá cả đã tăng nhiều)', '알다시피 저는 바쁜 사람이에요 (Như bạn đã biết, tôi là người bận rộn)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g47', title: '~(으)ㅁ',
        content: 'Việc... (danh từ hóa, văn viết). Dùng trong văn viết trang trọng.\nV/A + (으)ㅁ.\n• VD: 출석하지 않음 (Vắng mặt - ghi chú vắng mặt)',
        examples: ['다음과 같음 (Như sau)', '위와 같음 (Như trên)', '자세한 내용은 별지와 같음 (Nội dung chi tiết như phụ lục)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g48', title: '~기로 하다',
        content: 'Quyết định làm gì đó.\nV + 기로 하다.\n• VD: 한국어를 공부하기로 했어요 (Đã quyết định học tiếng Hàn)',
        examples: ['내일 친구를 만나기로 했어요 (Quyết định ngày mai gặp bạn)', '다이어트를 하기로 했어요 (Đã quyết định ăn kiêng)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g49', title: '~기로 하다 (quá khứ) / ~기로 했다',
        content: 'Đã quyết định. Dạng quá khứ của 기로 하다.\nV + 기로 했다.\n• VD: 유학 가기로 했어요 (Đã quyết định đi du học)',
        examples: ['한국에 가기로 했어요 (Đã quyết định đi Hàn)', '매일 운동하기로 했어요 (Đã quyết định mỗi ngày tập thể dục)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g50', title: '~(으)ㄹ걸요',
        content: 'Có lẽ, chắc là (suy đoán, không chắc lắm). Dùng trong văn nói.\nV/A + (으)ㄹ걸요.\n• VD: 비가 올걸요 (Chắc trời mưa đấy)',
        examples: ['그 영화 재미있을걸요 (Chắc phim đó thú vị đấy)', '그 사람은 벌써 갔을걸요 (Chắc người đó đi rồi đấy)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g51', title: '~(으)ㄹ게요',
        content: 'Sẽ... (hứa hẹn). Người nói hứa hẹn hoặc cam kết sẽ làm. Chỉ dùng ngôi thứ nhất.\nV + (으)ㄹ게요.\n• VD: 제가 할게요 (Tôi sẽ làm)',
        examples: ['내일 전화할게요 (Mai tôi gọi điện nhé)', '먼저 갈게요 (Tôi đi trước nhé)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g52', title: '~(으)ㄹ래요',
        content: 'Sẽ... (ý định). Hỏi ý định hoặc nói về ý định của mình.\nV + (으)ㄹ래요.\n• VD: 나는 집에 있을래요 (Tôi sẽ ở nhà) / 같이 갈래요? (Cùng đi không?)',
        examples: ['뭐 먹을래요? (Muốn ăn gì?)', '저는 커피 마실래요 (Tôi sẽ uống cà phê)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g53', title: '~아/어도 되다',
        content: 'Có thể, được phép.\nV + 아/어도 되다.\n• VD: 들어가도 돼요? (Vào được không ạ?)',
        examples: ['여기 앉아도 돼요? (Ngồi đây được không?)', '먼저 가도 돼요 (Có thể về trước)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g54', title: '~아/어서는 안 되다',
        content: 'Không được phép, không thể.\nV + 아/어서는 안 되다.\n• VD: 여기에서 담배를 피워서는 안 돼요 (Không được hút thuốc ở đây)',
        examples: ['시험 중에 말해서는 안 돼요 (Không được nói chuyện trong khi thi)', '늦어서는 안 돼요 (Không được đến muộn)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g55', title: '~지 그래요?',
        content: 'Sao không...? Gợi ý nhẹ nhàng.\nV + 지 그래요?\n• VD: 같이 가지 그래요? (Sao không đi cùng?)',
        examples: ['쉬지 그래요? (Sao không nghỉ đi?)', '선생님께 물어보지 그래요? (Sao không hỏi cô giáo?)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g56', title: '~잖아요',
        content: 'Mà, đấy mà. Nhấn mạnh điều hiển nhiên, người nghe cũng biết.\nV/A + 잖아요.\n• VD: 제가 말했잖아요 (Tôi đã nói rồi mà)',
        examples: ['한국어가 어렵잖아요 (Tiếng Hàn khó mà)', '그 사람은 착한 사람이잖아요 (Người đó là người tốt mà)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g57', title: '~네요',
        content: 'Thật là... nhỉ! Thể hiện sự ngạc nhiên hoặc cảm thán.\nV/A + 네요.\n• VD: 날씨가 좋네요! (Thời tiết đẹp nhỉ!)',
        examples: ['한국어를 정말 잘하시네요! (Bạn nói tiếng Hàn giỏi thật nhỉ!)', '음식이 맛있네요! (Đồ ăn ngon nhỉ!)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g58', title: '~군요/구나',
        content: 'À thì ra là... Thể hiện sự nhận ra, hiểu ra điều gì.\nV/A + 군요 (kính) / 구나 (thân).\n• VD: 그렇군요! (À ra thế!)',
        examples: ['벌써 왔군요! (À ra đã đến rồi!)', '참 예쁘구나! (À đẹp thật!)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g59', title: '~다니요',
        content: 'Sao cơ? Ngạc nhiên trước thông tin vừa nghe.\nV/A + 다니요.\n• VD: 그 사람이 떠났다니요? (Sao cơ? Người đó đi rồi ư?)',
        examples: ['시험이 쉽다니요? (Thi dễ sao cơ?)', '내일 안 온다니요? (Sao cơ? Mai không đến ư?)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g60', title: '~는/(으)ㄴ 법이다',
        content: 'Là lẽ đương nhiên, là quy luật.\nV/A + 는/(으)ㄴ 법이다.\n• VD: 노력하는 자가 성공하는 법이에요 (Người nỗ lực thành công là lẽ đương nhiên)',
        examples: ['인생은 살아 보는 법이에요 (Đời là phải trải nghiệm)', '사람은 누구나 변하는 법이에요 (Con người ai cũng thay đổi là lẽ thường)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g61', title: '~는다고/ㄴ다고 하다',
        content: 'Nói rằng. Tường thuật gián tiếp - câu trần thuật.\nV + 는다고 하다 / A + 다고 하다 / N + (이)라고 하다.\n• VD: 한국어가 어렵다고 했어요 (Đã nói là tiếng Hàn khó)',
        examples: ['내일 비가 온다고 해요 (Nghe nói ngày mai mưa)', '그 식당이 맛있다고 들었어요 (Nghe nói nhà hàng đó ngon)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g62', title: '~냐고 하다',
        content: 'Hỏi rằng. Tường thuật gián tiếp - câu nghi vấn.\nV + 냐고 하다 / A + (으)냐고 하다 / N + (이)냐고 하다.\n• VD: 어디에 가냐고 물어봤어요 (Đã hỏi là đi đâu)',
        examples: ['뭐 먹을 거냐고 물어봤어요 (Đã hỏi là sẽ ăn gì)', '시간이 있냐고 물었어요 (Đã hỏi là có thời gian không)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g63', title: '~라고 하다 (mệnh lệnh)',
        content: 'Bảo rằng. Tường thuật gián tiếp - câu mệnh lệnh.\nV + (으)라고 하다.\n• VD: 일찍 오라고 했어요 (Bảo là đến sớm)',
        examples: ['늦지 말라고 했어요 (Bảo là đừng đến muộn)', '밥을 먹으라고 했어요 (Bảo là hãy ăn cơm)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g64', title: '~자고 하다',
        content: 'Rủ rằng, đề nghị rằng. Tường thuật gián tiếp - câu đề nghị.\nV + 자고 하다.\n• VD: 같이 영화 보자고 했어요 (Rủ đi xem phim)',
        examples: ['같이 점심 먹자고 했어요 (Rủ ăn trưa cùng)', '내일 만나자고 했어요 (Hẹn ngày mai gặp)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g65', title: '~다며/라며',
        content: 'Nói là... mà? (xác nhận lại thông tin).\nV/A + 다며 / N + (이)라며.\n• VD: 내일 쉰다며? (Nói là mai nghỉ mà phải không?)',
        examples: ['한국에 간다며? (Bảo đi Hàn mà?', '그 영화 재미있다며? (Bảo phim đó hay mà?)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g66', title: '~(으)면서',
        content: 'Vừa... vừa... Hai hành động xảy ra đồng thời.\nV + (으)면서.\n• VD: 밥을 먹으면서 TV를 봐요 (Vừa ăn vừa xem TV)',
        examples: ['노래를 들으면서 운동해요 (Vừa nghe nhạc vừa tập thể dục)', '걸으면서 생각해요 (Vừa đi vừa suy nghĩ)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g67', title: '~(으)니까',
        content: 'Vì... nên (chủ quan). Dùng được với câu đề nghị, rủ rê.\nV/A + (으)니까.\n• VD: 비가 오니까 우산을 가져가세요 (Vì trời mưa nên hãy mang ô)',
        examples: ['늦었으니까 빨리 가요 (Trễ rồi nên đi nhanh)', '친구가 오니까 같이 기다려요 (Bạn sẽ đến nên cùng đợi)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g68', title: '~다가',
        content: 'Đang... thì. Hành động 1 đang làm thì chuyển sang hành động 2.\nV + 다가.\n• VD: 공부하다가 잠들었어요 (Đang học thì ngủ thiếp đi)',
        examples: ['집에 가다가 비를 만났어요 (Đang về nhà thì gặp mưa)', '길을 걷다가 친구를 만났어요 (Đang đi bộ thì gặp bạn)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g69', title: '~았/었다가',
        content: 'Làm xong việc 1 rồi... (việc 1 kết thúc mới chuyển sang việc 2).\nV + 았/었다가.\n• VD: 공부했다가 잤어요 (Học xong rồi ngủ)',
        examples: ['병원에 갔다가 약을 샀어요 (Đi bệnh viện xong rồi mua thuốc)', '친구를 만났다가 영화를 봤어요 (Gặp bạn xong rồi xem phim)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g70', title: '~아/어다가',
        content: 'Làm rồi mang đến/dùng để... Hành động 1 để phục vụ cho hành động 2.\nV + 아/어다가.\n• VD: 시장에서 과일을 사다가 먹었어요 (Mua trái cây ở chợ về ăn)',
        examples: ['빵을 사다가 친구에게 줬어요 (Mua bánh rồi cho bạn)', '커피를 타다가 마셨어요 (Pha cà phê rồi uống)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g71', title: '~고 보니',
        content: 'Sau khi làm xong thì thấy...\nV + 고 보니.\n• VD: 생각해 보니 제가 틀렸어요 (Nghĩ lại thì thấy tôi đã sai)',
        examples: ['와 보니까 아무도 없었어요 (Đến xong thì thấy chẳng có ai)', '듣고 보니까 그게 아니었어요 (Nghe xong mới thấy không phải thế)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g72', title: '~고 나서',
        content: 'Sau khi làm xong...\nV + 고 나서.\n• VD: 밥을 먹고 나서 공부해요 (Sau khi ăn cơm xong thì học)',
        examples: ['씻고 나서 잤어요 (Tắm xong rồi ngủ)', '일이 끝나고 나서 친구를 만났어요 (Sau khi công việc kết thúc thì gặp bạn)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g73', title: '~다 보면',
        content: 'Cứ... thì sẽ. Nếu tiếp diễn hành động thì sẽ có kết quả.\nV + 다 보면.\n• VD: 연습하다 보면 잘하게 될 거예요 (Cứ luyện tập thì sẽ giỏi lên)',
        examples: ['자주 듣다 보면 귀에 익어요 (Cứ nghe nhiều thì sẽ quen tai)', '살다 보면 좋은 일도 생겨요 (Sống rồi thì chuyện tốt cũng xảy ra)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g74', title: '~다 보니까',
        content: 'Cứ... nên là. Do tiếp tục hành động nên dẫn đến kết quả.\nV + 다 보니까.\n• VD: 공부하다 보니까 밤 12시가 됐어요 (Cứ học thì thành ra 12 giờ đêm)',
        examples: ['이야기하다 보니까 시간 가는 줄 몰랐어요 (Cứ nói chuyện không biết thời gian trôi)', '같이 있다 보니까 정이 들었어요 (Cứ ở cạnh nhau nên nảy sinh tình cảm)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g75', title: '~는 통에',
        content: 'Vì... (ồn ào, náo động) nên. Nguyên nhân gây khó chịu.\nV + 는 통에.\n• VD: 시끄러운 통에 집중이 안 돼요 (Ồn quá nên không tập trung được)',
        examples: ['옆방에서 노래하는 통에 잠을 못 잤어요 (Phòng bên hát ồn quá không ngủ được)', '애들이 우는 통에 정신이 없었어요 (Bọn trẻ khóc ầm lên nên đầu óc rối tung)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g76', title: '~(으)나',
        content: 'Nhưng (văn viết). Tương tự ~지만 trong văn viết trang trọng.\nV/A + (으)나.\n• VD: 노력했으나 실패했어요 (Đã nỗ lực nhưng thất bại)',
        examples: ['그는 부지런하나 가난해요 (Anh ấy siêng năng nhưng nghèo)', '여러 번 시도했으나 성공하지 못했어요 (Đã thử nhiều lần nhưng không thành công)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g77', title: '~(으)며',
        content: 'Và, trong khi (văn viết). Liệt kê đồng thời.\nV/A + (으)며.\n• VD: 이 제품은 값이 싸며 품질도 좋습니다 (Sản phẩm này vừa rẻ vừa chất lượng tốt)',
        examples: ['그는 친절하며 재미있는 사람이에요 (Anh ấy vừa thân thiện vừa thú vị)', '날씨가 좋으며 경치도 아름다워요 (Thời tiết đẹp và phong cảnh cũng tươi đẹp)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g78', title: '~거니와',
        content: 'Không những... mà còn (văn viết).\nV/A + 거니와.\n• VD: 음식이 맛있거니와 서비스도 좋아요 (Đồ ăn ngon mà dịch vụ cũng tốt)',
        examples: ['그는 학식이 깊거니와 덕도 있어요 (Ông ấy không chỉ học thức sâu rộng mà còn có đức)', '이 책은 내용이 좋거니와 가격도 싸요 (Sách này nội dung tốt mà giá cũng rẻ)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g79', title: '~(으)ㄹ진대',
        content: 'Vì đã... (văn viết cổ, trang trọng).\nV/A + (으)ㄹ진대.\n• VD: 그가 약속을 했을진대 반드시 올 것이다 (Vì nó đã hứa nên nhất định sẽ đến)',
        examples: ['태도가 이럴진대 앞으로가 기대된다 (Vì thái độ như thế này nên tương lai thật đáng mong đợi)', '결심이 확고할진대 성공할 것이라 믿는다 (Vì quyết tâm vững chắc nên tin sẽ thành công)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g80', title: '~기 위해(서)',
        content: 'Để làm gì. Diễn tả mục đích.\nV + 기 위해(서). N + 를/을 위해(서).\n• VD: 한국어를 공부하기 위해 한국에 왔어요 (Đến Hàn để học tiếng Hàn)',
        examples: ['합격하기 위해 열심히 공부해요 (Học chăm để đỗ)', '건강을 위해 매일 운동해요 (Vì sức khỏe mà tập thể dục mỗi ngày)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g81', title: '~에 비해(서)',
        content: 'So với. Dùng khi so sánh.\nN + 에 비해서.\n• VD: 작년에 비해서 물가가 많이 올랐어요 (So với năm ngoái thì giá cả tăng nhiều)',
        examples: ['예전에 비해 실력이 늘었어요 (So với trước đây thì trình độ tăng lên)', '다른 회사에 비해 월급이 적어요 (So với công ty khác thì lương thấp)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g82', title: '~에 따라(서)',
        content: 'Tùy theo, theo như.\nN + 에 따라서.\n• VD: 상황에 따라서 결정하겠습니다 (Tùy tình hình mà quyết định)',
        examples: ['날씨에 따라서 일정이 바뀔 수 있어요 (Tùy thời tiết mà lịch trình có thể thay đổi)', '결과에 따라서 전략을 수정하겠습니다 (Tùy kết quả mà sẽ điều chỉnh chiến lược)'],
        level: '🟠 Trung cấp 2', stage: 4
    },
    {
        id: 'g83', title: '~에 불과하다',
        content: 'Chỉ là, chỉ có... mà thôi (văn viết).\nN + 에 불과하다.\n• VD: 그것은 시작에 불과해요 (Đó chỉ là sự bắt đầu mà thôi)',
        examples: ['이것은 전체의 일부에 불과해요 (Cái này chỉ là một phần của toàn bộ)', '그는 겉으로만 친절할 뿐 인간적으로는 빈 껍데기에 불과해요 (Anh ấy chỉ bề ngoài tử tế, thực chất chỉ là vỏ rỗng)'],
        level: '🟠 Trung cấp 2', stage: 4
    }
];

// Flatten helper
const grammarBankTotal = grammarBank.length;
console.log(`📖 Grammar Bank: ${grammarBankTotal} ngữ pháp TOPIK 2 loaded`);
