require('dotenv').config();
const express = require('express');
const multer = require('multer');
const app = express();
const port = process.env.PORT || 3000;

// File upload setup
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
  res.send('PDF Tools Backend is running ✅');
});

// Dummy endpoints for 32 PDF tools
const tools = [
  'pdf-to-word', 'pdf-to-excel', 'merge', 'split', 'compress', 'encrypt', 
  'decrypt', 'add-watermark', 'remove-watermark', 'rotate', 'extract-text', 
  'extract-images', 'add-page', 'remove-page', 'html-to-pdf', 'image-to-pdf',
  'pdf-to-image', 'sign', 'verify-sign', 'replace-text', 'stamp', 'add-header',
  'add-footer', 'optimize', 'convert-to-blackwhite', 'convert-to-color', 
  'extract-metadata', 'edit-metadata', 'resize-page', 'duplicate-page', 
  'pdf-info', 'pdf-properties'
];

tools.forEach(tool => {
  app.post(`/api/${tool}`, upload.single('file'), (req, res) => {
    res.json({ message: `${tool} endpoint working ✅`, file: req.file?.originalname || null });
  });
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
