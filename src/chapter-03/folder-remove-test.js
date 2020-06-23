const fs = require('fs');


try {
  fs.readdir('./folder', (err, dir) => {
    if (err) {
      console.error(err);
      throw err;
    }
    if (dir && dir.length > 0) {
      console.log('폴더 내용확인: ', dir.toString());
    }
    // fs.access('.folder/new-file.js', err)
    fs.unlink('./folder/new-file.js',  err => {
      if (err) {
        console.error(err);
        return err;
      }
      console.log('파일이 정상적으로 삭제 되었습니다.');
      fs.rmdir('./folder', err => {
        if (err) {
          console.error(err);
          return err;
        }
        console.log('폴더가 정상적으로 삭제 되었습니다.');
      })
    })

  })
} catch (e) {
  console.error(e);
}

