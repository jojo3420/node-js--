const fs = require('fs');

fs.access('./folder',
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, error => {
  if (error) {
    console.log('폴더가 없으므로 새로 폴더를 만듭니다.');
    fs.mkdir('./folder', err => {
      if (err) throw err;
      console.log('폴더 만들기가 성공했습니다.');
      fs.open('./folder/file.js', 'w', (err2, fileId) => {
        if (err2) throw err2;
        console.log('빈파일 만들기 성공: ', fileId);
        fs.rename('./folder/file.js', './folder/new-file.js', error3 => {
          if (error3) throw error3;
          console.log('파일 이름 변경 성공.');
        })

      });


    });

  } else {
    console.log('이미 같은 폴더가 있네요..');
  }

})
