import React, {useState, useEffect, useCallback} from 'react';

function UseRadio(initialList = []) {

  const [ itemList, setItemList ] = useState(initialList);

  const onChange = e => {
    const { id } = e.target;
    const newItemList = itemList.map((item, idx) => {
      // console.log(item);
      return item.id.toString() === id.toString()
        ? { ...item, checked: !item.checked }
        : { ...item, checked: false };
    });
    setItemList(newItemList);
  };

  return {
    itemList,
    item: itemList.filter(item => item.checked)[0],
    onChange,
  }

//   let idx = -1;
//   initialList.forEach((item, index) => {
//     item.checked ? idx = index : idx = -1;
//   });
//
//   const [ index, setIndex ] = useState(idx);
//   const onChange = useCallback(e => {
//     const { id, name } = e.target;
//     const index = initialList.findIndex(item => item.id === id || item.name === name);
//     if (index > -1) {
//       setIndex(index);
//     }
//   }, [index]);
//
//   // useEffect(() => {
//   //
//   // }, [index]);
//
//   return {
//     item: index > -1 ? initialList[index]: null,
//     onChange,
//   }
//
}

export default UseRadio;
