import React from 'react';
import useInput from 'src/chapter-07/front-blog-app/src/hooks/useInput';

function RegisterComment({ onSubmit }) {

  const userId = useInput('', '사용자 아이디');
  const comment = useInput('', '댓글');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      userId: userId.value,
      comment: comment.value,
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" { ...userId} />
        </div>
        <div>
          <input type="text" { ...comment} />
        </div>
        <div>
          <button type="submit">등록</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterComment;
