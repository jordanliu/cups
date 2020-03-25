const express = require('express');
const multer = require('multer');

/**
 * Upload.
 * @namespace upload
 */

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

/**
 *  @name fileFilter
 *  @description Filters all file types using mime
 *  @memberof upload
 */
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

/**
 *  @name postUpload
 *  @description /api/upload - This is a POST request for file upload
 *  @access public
 *  @memberof upload
 */
router.post('/', upload.single('file'), (req, res, next) => {
    return res.json({
        file: req.file.path,
    });
});

module.exports = router;
