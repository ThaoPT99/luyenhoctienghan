// ===== 🇰🇷 Korean Quest - API Proxy cho DeepSeek AI =====
// File này chạy trên Vercel, giữ API key an toàn ở server
// Key được đặt trong Vercel Environment Variables: DEEPSEEK_API_KEY

export default async function handler(req, res) {
    // Chỉ cho phép POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Chỉ hỗ trợ POST' });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;
    if (!apiKey) {
        return res.status(500).json({
            error: '⚠️ DeepSeek API Key chưa được cấu hình trên Vercel.',
            hint: 'Vào Vercel Dashboard → Settings → Environment Variables → thêm DEEPSEEK_API_KEY'
        });
    }

    try {
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        // Trả về lỗi chi tiết từ DeepSeek nếu có
        if (!response.ok) {
            return res.status(response.status).json({
                error: data.error?.message || 'Lỗi từ DeepSeek API',
                status: response.status
            });
        }

        // Thành công
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({
            error: `Lỗi kết nối: ${error.message}`
        });
    }
}
