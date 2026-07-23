# 🎓 Trang Web Lễ Tốt Nghiệp — Nguyễn Anh Huy

Trang web cá nhân giới thiệu lễ tốt nghiệp và hướng dẫn đường đi đến trường bằng Google Maps, thiết kế theo phong cách **Elegant — tối giản, tinh tế**.

## 📋 Thông tin đã nhúng

| Trường | Giá trị |
|---|---|
| Tên tân cử nhân | Nguyễn Anh Huy |
| Trường | Đại học Ngoại ngữ - Tin học TP.HCM (HUFLIT) |
| Khoa / Ngành | Công nghệ Thông tin · Khoa học Dữ liệu |
| Bậc | Cử nhân |
| Niên khóa | 2022 — 2026 |
| Khóa | K28 |
| Ngày lễ | Thứ Sáu, 31/07/2026 |
| Khung giờ chụp ảnh | 09:30 — 11:30 |
| Địa điểm | Cơ sở Hóc Môn — 806 Lê Quang Đạo, Trung Chánh, Trung Mỹ Tây, TP. Hồ Chí Minh |
| Tọa độ GPS | 10.8654655, 106.6010124 |

## ✨ Tính năng

- **Hero section** với hiệu ứng parallax nhẹ theo chuột
- **Countdown timer** đếm ngược đến 09:30 ngày 31/07/2026 (drift-free)
- **Hiệu ứng confetti** rơi khi vào trang
- **Embedded Google Maps** với 3 nút: Chỉ đường / Mở trong Google Maps / Tìm trên bản đồ
- **AOS scroll animations** cho mọi section
- **Nhạc nền** với nút play/pause nổi (góc phải-dưới) — fade-in nhẹ, lưu lựa chọn vào localStorage
- **Nút nhạc nền** với nút play/pause nổi (góc phải-dưới) — fade-in nhẹ, lưu lựa chọn vào localStorage
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
├── note.md                 # Ghi chú (URL Canva gốc)
└── README.md               # File này
```

## 🚀 Cách chạy / mở trang

Cách đơn giản nhất:

1. **Mở trực tiếp**: Double-click file `index.html` để mở trong trình duyệt.

2. **Khuyến nghị**: Dùng local server (để Google Maps & CDN load đầy đủ):
   ```bash
   # Nếu có Python:
   python -m http.server 8080

   # Hoặc với Node.js:
   npx serve .
   ```
   Sau đó mở `http://localhost:8080`.

## 🖼️ Cách thay ảnh cá nhân

1. Chuẩn bị ảnh chân dung (PNG/JPG, nên là ảnh tỷ lệ 4:5, tối đa ~500 KB)
2. Đặt file vào thư mục `assets/` với tên `portrait.jpg`
3. Mở file `index.html`, tìm dòng có comment `TODO: Thay bằng <img src="assets/portrait.jpg" ...>`, sửa lại thành:
   ```html
   <img src="assets/portrait.jpg" alt="Nguyễn Anh Huy — Tân Cử nhân K28">
   ```
   và xoá/sửa dòng `<img src="assets/portrait-placeholder.svg" ...>` phía dưới (hoặc thay thẳng).

## ✏️ Cách chỉnh sửa thông tin

Tất cả thông tin hiển thị đều nằm trong file `index.html` ở các section:

- Hero (#hero) → tên, lời chào, ngày giờ
- Lời mời (#loi-moi) → trích dẫn lời mời
- Thông tin tân cử nhân (#thong-tin) → bảng thông tin + ảnh
- Buổi lễ (#buoi-le) → 3 card ngày/giờ/địa điểm
- Bản đồ (#ban-do) → iframe + các nút
- Lời tri ân (#loi-tri-an) → 3 khối tri ân
- Footer (#footer) → chữ ký

**Không cần build tools** — chỉ cần text editor (VS Code, Notepad++).

## 🎵 Cách đổi nhạc nền

Mặc định dùng nhạc SoundHelix (royalty-free, có thể load trực tiếp). Để đổi sang bài khác:

**Cách 1 — Đổi URL trực tiếp:**
Mở `index.html`, tìm thẻ `<audio>` ở cuối file, sửa thuộc tính `src`:

```html
<audio id="bgm" loop preload="none" crossorigin="anonymous">
  <source src="URL_NHẠC_MỚI_CỦA_BẠN" type="audio/mpeg">
</audio>
```

**Cách 2 — Dùng file MP3 riêng (khuyến nghị):**

1. Đặt file nhạc `.mp3` vào `assets/music.mp3` (nên dưới 5 MB)
2. Sửa `<source src="...">` thành `<source src="assets/music.mp3" type="audio/mpeg">`

**Gợi ý nguồn nhạc piano/instrumental miễn phí:**
- [pixabay.com/music](https://pixabay.com/music/) — CC0, không cần ghi credit
- [mixkit.co/free-stock-music](https://mixkit.co/free-stock-music/) — miễn phí thương mại
- [bensound.com](https://www.bensound.com) — bài piano nhẹ nhàng (cần ghi credit)
- [soundhelix.com/audio-examples](https://www.soundhelix.com/audio-examples.html) — multi-track instrumental

**Lưu ý**:
- Một số trình duyệt chặn autoplay — đó là lý do phải bấm nút mới phát nhạc
- Lựa chọn play/pause được lưu vào `localStorage` của trình duyệt
- Trang không load nhạc trước (`preload="none"`) để tiết kiệm băng thông

## 🌐 Deploy lên mạng (chia sẻ bạn bè & gia đình)

Có nhiều cách miễn phí:

### Cách 1: Netlify Drop (dễ nhất)
1. Truy cập [app.netlify.com/drop](https://app.netlify.com/drop)
2. Kéo thả cả thư mục `graduation/` vào
3. Nhận URL HTTPS ngay lập tức, ví dụ: `https://random-name-123.netlify.app`

### Cách 2: Vercel
1. Truy cập [vercel.com](https://vercel.com), đăng nhập GitHub
2. Tạo repo, push code, kết nối Vercel → tự động deploy

### Cách 3: GitHub Pages
1. Push code lên GitHub repo (public)
2. Vào Settings → Pages → Source: `main` branch, `/ (root)` → Save
3. Truy cập `https://<username>.github.io/<repo-name>/`

### Cách 4: Cloudflare Pages
1. Truy cập [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repo → Deploy

> **Tip**: Sau khi deploy, dùng [qr-code-generator.com](https://www.qr-code-generator.com/) để tạo QR code từ URL, in ra thiệp mời cho khách quét.

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
| Google Maps iframe trống | Mở DevTools → check Network → có thể bị chặn bởi extension. Tắt ad-blocker |
| Countdown sai | Mở `script.js`, đổi `CEREMONY_TARGET` thành ngày/giờ đúng |
| Font tiếng Việt bị lỗi | Đảm bảo file lưu UTF-8 (VS Code: click "UTF-8" ở status bar) |
| AOS không chạy | Kiểm tra console, đảm bảo AOS CDN load được |

## 📞 Tác giả

Nguyễn Anh Huy · K28 · Khoa Công nghệ Thông tin · HUFLIT
Lễ Tốt Nghiệp 2026 · Cơ sở Hóc Môn, TP.HCM

---

_Nếu cần chỉnh sửa gì thêm, cứ nói với tôi nhé!_ 🎓
# graduation
