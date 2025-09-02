# PDF Tools Backend (32 Tools)

This repository is a **GitHub-ready starter** for a backend that provides many PDF utilities (32 endpoints planned).  
It includes working implementations for the most common tools and **stubs** with instructions for adding the rest.

## ✅ Implemented endpoints (ready)
- `POST /api/convert/html`  — JSON `{ html }` or `{ url }` → returns PDF (uses Puppeteer)
- `POST /api/convert/images` — multipart `images[]` → images merged into single PDF
- `POST /api/convert/office` — multipart `file` → converts DOCX/PPTX/XLSX to PDF (requires LibreOffice / soffice)
- `POST /api/merge` — multipart `files[]` → merge PDFs
- `POST /api/split` — multipart `file`, form fields `start`, `end` → split PDF
- `POST /api/compress` — multipart `file` → compress via Ghostscript (must be installed)

## ⚠️ Stub / Not-yet-implemented endpoints
This starter includes 26 stub endpoints (501) for features that need additional system libs or external services:
- PDF→Word, OCR, Protect/Unlock, Watermark, Rotate, Metadata, Extract images, PDF→Image, etc.

See `server.js` for the full endpoint list.

## 🔧 System dependencies (install on VPS / server)
To enable all implemented features you should install:
- LibreOffice (for Office → PDF)
  ```bash
  sudo apt-get update && sudo apt-get install -y libreoffice
  ```
- Puppeteer/Chromium is handled by the package but may need `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true` if you have system Chrome.
- Ghostscript (for compression)
  ```bash
  sudo apt-get install -y ghostscript
  ```
- Tesseract (for OCR) — optional
  ```bash
  sudo apt-get install -y tesseract-ocr
  ```

## 🚀 Quick start
1. Clone:
   ```bash
   git clone https://github.com/yourusername/pdf-tools-backend.git
   cd pdf-tools-backend
   ```
2. Install:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   node server.js
   ```
4. Use endpoints from your Blogspot front-end forms. Example (office conversion):
   ```html
   <form method="post" enctype="multipart/form-data" action="https://yourapp.onrender.com/api/convert/office">
     <input type="file" name="file" accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx" required>
     <button type="submit">Convert to PDF</button>
   </form>
   ```

## 🔐 Security & Production notes
- Set CORS to your domain only in production.
- Validate file types and sizes (Multer limits).
- Clean up `/tmp` periodically.
- Use HTTPS and reverse proxy (Nginx) if exposing publicly.

## 🧭 Next steps to complete all 32 tools
- Add `pdf-parse`, `poppler-utils`, or external APIs for PDF→Word and PDF→HTML.
- Use `pdf-lib` drawing for watermark/header/footer and password operations (or `qpdf`/`pdftk`).
- Implement OCR flow with `tesseract` + image pre-processing (sharp).
- Add job queue (Bull/Redis) for heavy conversions to avoid request timeouts.

## 👨‍💻 Author
Made with ❤️ — modify and adapt for your Blogspot site.
