const express = require("express");
const user = require("../controller/Cvisitor");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')

router.get("/", user.index);
// router.get("/get_data", user.get_data);

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'static/board/');
      },
      filename: function (req, file, cb) {
        var ext = path.extname(file.originalname);  //ext확장자명을 오리지널 파일이름으로 올라오도록 바굼!
        
        if(ext !== '.mp3' ) cb(new Error('PNG, JPG만 업로드하세요')) //확장자ext가 mp3가 아니면 png,jpg만 업로드하세요 라고 띄우고
        else cb(null, file.originalname); //그게 아니면~~ 확장자가 mp3인 경우 파일의 원래이름을 띄운다!
      }
    })
  });


router.get("/write", user.write);
router.post("/write",upload.single('boardfile'), user.write_data);

router.get("/read", user.read);

router.get("/update", user.update_number);  //첨에 /update?number=<%=data.number%>넣어서 안됐었는데 ?뒤에있는건 쿼리스트링이라서...컨트롤러에서 쿼리로 받아야됨.//이건 리드보드에서 업데이트보드로 url number쿼리 넘겨주는 라우터임!
router.patch("/update", user.update);
// router.post("/update", user.update_data);

router.delete("/delete", user.delete);

module.exports = router;