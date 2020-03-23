const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        const now = new Date().toISOString();
        const date = now.replace(/:/g, '-');
        cb(null, date + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'audio/mpeg' ||
        file.mimetype === 'audio/mp4' ||
        file.mimetype === 'audio/m4a' ||
        file.mimetype === 'audio/x-m4a'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const router = express.Router();

// Upload Image
router.post('/', upload.single('file'), (req, res, next) => {
    return res.json({
        file: req.file.path,
    });
});

module.exports = router;
