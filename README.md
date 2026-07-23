# 🎓 Trang Web Lễ Tốt Nghiệp

Trang web tĩnh giới thiệu lễ tốt nghiệp và tích hợp Google Maps để dẫn đường, thiết kế theo phong cách **Elegant — tối giản, tinh tế**.

## ✨ Tính năng

- **Hero section** với hiệu ứng parallax nhẹ theo chuột
- **Countdown timer** đếm ngược đến giờ khai mạc (drift-free)
- **Hiệu ứng confetti** rơi khi vào trang
- **Embedded Google Maps** với 3 nút: Chỉ đường / Mở trong Google Maps / Tìm trên bản đồ
- **AOS scroll animations** cho mọi section
- **Nhạc nền** với nút play/pause nổi (góc phải-dưới) — fade-in nhẹ, lưu lựa chọn vào `localStorage`
- **Responsive** hoàn toàn (mobile / tablet / desktop)
- **Phong cách Elegant**: tone trắng ngà / đen mực / vàng antique, font Cormorant Garamond + Be Vietnam Pro

## 📂 Cấu trúc file

```
graduation/
├── index.html              # Trang chính — chứa toàn bộ nội dung
├── style.css               # Theme, layout, responsive, animations
├── script.js               # Countdown + AOS init + Confetti + Smooth scroll
├── assets/
│   ├── portrait-placeholder.svg   # Ảnh tạm — thay bằng ảnh cá nhân
│   ├── og-cover.svg               # Ảnh preview Facebook/Zalo
│   └── favicon.svg                # Icon mũ tốt nghiệp
├── note.md                 # Ghi chú
└── README.md               # File này
```

## 🚀 Cách chạy / mở trang

1. **Mở trực tiếp**: Double-click `index.html` để mở trong trình duyệt.
2. **Khuyến nghị**: Dùng local server (để Google Maps & CDN load đầy đủ):
   ```bash
   python -m http.server 8080
   # hoặc
   npx serve .
   ```
   Sau đó mở `http://localhost:8080`.

## 🖼️ Thay ảnh cá nhân

1. Chuẩn bị ảnh chân dung (PNG/JPG, tỷ lệ 4:5, tối đa ~500 KB).
2. Đặt file vào `assets/portrait.jpg`.
3. Trong `index.html`, thay thẻ `<img src="assets/portrait-placeholder.svg" ...>` thành `<img src="assets/portrait.jpg" ...>`.

## ✏️ Chỉnh sửa nội dung

Mọi thông tin đều nằm trong `index.html` theo từng section:

- Hero (#hero) — tên, lời chào, ngày giờ
- Lời mời (#loi-moi) — trích dẫn lời mời
- Thông tin tân cử nhân (#thong-tin) — bảng thông tin + ảnh
- Buổi lễ (#buoi-le) — 3 card ngày/giờ/địa điểm
- Bản đồ (#ban-do) — iframe + các nút
- Lời tri ân (#loi-tri-an) — 3 khối tri ân
- Footer (#footer) — chữ ký

**Không cần build tools** — chỉ cần text editor.

## 🎵 Đổi nhạc nền

Mặc định dùng nhạc SoundHelix (royalty-free). Để đổi:

**Cách 1 — Sửa URL trực tiếp** trong thẻ `<audio>` cuối `index.html`:

```html
<audio id="bgm" loop preload="none" crossorigin="anonymous">
  <source src="URL_NHẠC_MỚI" type="audio/mpeg">
</audio>
```

**Cách 2 — Dùng MP3 riêng:** đặt file vào `assets/music.mp3` (dưới 5 MB), sửa `src` thành `assets/music.mp3`.

**Nguồn nhạc miễn phí gợi ý:**

- [pixabay.com/music](https://pixabay.com/music/) — CC0, không cần credit
- [mixkit.co/free-stock-music](https://mixkit.co/free-stock-music/) — miễn phí thương mại
- [bensound.com](https://www.bensound.com) — piano nhẹ nhàng (cần credit)
- [soundhelix.com/audio-examples](https://www.soundhelix.com/audio-examples.html) — multi-track instrumental

**Lưu ý:**
- Một số trình duyệt chặn autoplay — phải bấm nút mới phát nhạc.
- Lựa chọn play/pause được lưu vào `localStorage`.
- Trang không load nhạc trước (`preload="none"`) để tiết kiệm băng thông.

## 🌐 Deploy

**Cách 1 — Netlify Drop (dễ nhất):** kéo cả thư mục vào [app.netlify.com/drop](https://app.netlify.com/drop) → nhận URL HTTPS ngay.

**Cách 2 — Vercel:** push code lên GitHub, kết nối repo tại [vercel.com](https://vercel.com), tự động deploy.

**Cách 3 — GitHub Pages:** push code lên repo public → Settings → Pages → Source: `main`, `/ (root)`.

**Cách 4 — Cloudflare Pages:** kết nối GitHub repo tại [pages.cloudflare.com](https://pages.cloudflare.com).

> **Tip:** Sau khi deploy, tạo QR code từ URL qua [qr-code-generator.com](https://www.qr-code-generator.com/) để in lên thiệp mời.

## 🛠️ Tech stack

| Thành phần | Nguồn |
|---|---|
| HTML5 (lang="vi") | Native |
| CSS3 (Custom Properties + clamp + Grid) | Native |
| JavaScript (Vanilla) | Native |
| Cormorant Garamond + Be Vietnam Pro | [Google Fonts](https://fonts.google.com) |
| AOS — Animate On Scroll | [michalsnik.github.io/aos](https://michalsnik.github.io/aos/) |
| canvas-confetti | [github.com/catdad/canvas-confetti](https://github.com/catdad/canvas-confetti) |
| Font Awesome 6 | [fontawesome.com](https://fontawesome.com) |
| Google Maps Embed | [developers.google.com/maps/embed](https://developers.google.com/maps/documentation/embed) |

Không cần `npm`, không cần build step, không cần backend.

## 🐛 Troubleshooting

| Vấn đề | Cách xử lý |
|---|---|
| Confetti không hiển thị | Kiểm tra console, đảm bảo CDN `canvas-confetti` load được |
| Google Maps iframe trống | Tắt ad-blocker / extension chặn; check Network trong DevTools |
| Countdown sai | Mở `script.js`, đổi `CEREMONY_TARGET` thành ngày/giờ đúng |
| Font tiếng Việt bị lỗi | Đảm bảo file lưu UTF-8 (VS Code: click "UTF-8" ở status bar) |
| AOS không chạy | Kiểm tra console, đảm bảo AOS CDN load được |
