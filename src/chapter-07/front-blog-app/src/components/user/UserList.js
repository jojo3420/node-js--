import React from 'react';
import PropTypes from 'prop-types';


UserList.propTypes = {
  thList: PropTypes.array,
  list: PropTypes.array,
}


// list :[{name: 'aa', age: 11}, {name: 'bb', age: 20}]
function UserList( { thList, list }) {
  if (!list) return <div>loading...</div>;
  if (list && Array.isArray(list) && list.length === 0) {
    return <div>data is empty..</div>;
  }
  return (
    <table>
      <thead>
        <tr>
          {thList.map((item, index) => (
            <th key={item.id || index}>{item.th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {list.map((item, index) => {
        const { id  } = item;
        return (
          <tr key={id || index}>
            {Object.keys(item).map((key, idx) => {
              return (<td key={idx}>{item[key]}</td>)
            })}
          </tr>
        );
      })}
      </tbody>
    </table>
  );
}

export default UserList;
