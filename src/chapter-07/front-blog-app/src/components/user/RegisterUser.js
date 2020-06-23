import React  from 'react';
import useInput from  '../../hooks/useInput';
import useCheckbox from  '../../hooks/useCheckbox';
import useRadio from '../../hooks/useRadio';

const userList = [
  {id: 1, name: '음악 듣기', checked: false },
  {id: 2, name: '조깅', checked: false },
  {id: 3, name: '책보기', checked: false },
];

function RegisterUser({ onSubmit }) {
  const username = useInput('', '이름');
  const age = useInput('', '나이');
  const married =  useCheckbox(false, '결혼 여부');
  const { itemList, item, onChange } = useRadio(userList);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div><input type="text" { ...username } /></div>
        <div><input type="text" { ...age } /></div>
        <div>
          <label>
            {married.label}
            <input type="checkbox" { ...married } />
          </label>
        </div>
        <div>
          <span>취미: </span>
          {itemList.map(user => {
            const { id, name, checked } = user;
            return (
              <>
                <label key={id}>{name}
                  <input type="radio"
                         name={name}
                         checked={checked}
                         id={id}
                         onChange={onChange}
                  />
                </label>
              </>
            )
          })}
        </div>
        <div>selected: {item && item.name}</div>
        <div><button type="submit">submit</button></div>
      </form>
    </div>
  );
}

export default RegisterUser;
