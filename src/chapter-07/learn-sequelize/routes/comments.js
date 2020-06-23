var express = require('express');
var {User, Comment} = require('../models');


var router = express.Router();


// 현재 등록 되어 있는 유저 목록 조회
router.get('/', async function (req, res, next) {
  try {
    // User.findAll()
    //   .then(users => {
    //     res.render('sequelize', { users });
    //   });

    const users = await User.findAll();
    res.render('sequelize', {users});

  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 댓글 작성자의 모든 댓글 조회
router.get('/:id', async (req, res, next) => {
  const { id } = req.params; // id is user_id
  try {
    const comments = await Comment.findAll({
      include: {  // hasMany, belongsTo 연결되었을 경우 사용 가능
        model: User,
        where: { id }
      }
    });
    res.json(comments);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 작성자의 댓글 등록
router.post('/', async (req, res, next) => {
  const { comment, id } = req.body; // id is user id
  try {
    const result = Comment.create({
      commenter: id, // user_id
      comment,
    });
    res.status(201).json(result);

  } catch (e) {
    console.error(e);
    next(e);
  }
});

// 작성자의 댓글 수정하기
router.patch('/:id', async (req, res, next) => {
  const {  comment } = req.body;
  const { id } = req.params; //id is comment id

  try {
    const r =  Comment.update({
     comment,
    }, {
      where: { id }
    });
    res.json(r);

  } catch(e) {
    console.error(e);
    next(e);
  }
});


// 작성자의 댓글 삭제 하기
router.delete('/:id', async (req, res, next) => {
  const {  id } = req.params; // id is comment id
  try {
    const r = await Comment.destroy({
      where: { id }
    });
    res.json(r);

  } catch (e) {
    console.error(e);
    next(e);
  }
});


module.exports = router;
