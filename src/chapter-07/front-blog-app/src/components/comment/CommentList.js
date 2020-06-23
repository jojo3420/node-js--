import React from 'react';

function CommentList({th, list}) {
  if (!list) return <div>loading...</div>;
  if (list && Array.isArray(list) && list.length === 0) return <div>data is empty...</div>;

  return (
    <table>
      <thead>
      <tr>
        {th.map((item, index) => <th key={item.id || index}>{item.th}</th>)}
      </tr>
      </thead>
      <tbody>
      {list.map((item, index) => {
        const { id } = item;
        return (
          <tr key={id || index}>
            {Object.keys(item).map((key, idx) => (<td key={idx}>{item[key]}</td>))}
          </tr>
        )
      })}
      </tbody>
    </table>
  );
}

export default CommentList;
