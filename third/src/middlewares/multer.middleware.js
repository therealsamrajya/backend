import multer from "multer";
//diskstorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //keep the original name of the file uploaded by user
  },
});

export const upload = multer({ storage });
