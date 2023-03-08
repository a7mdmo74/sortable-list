import { useCallback, useEffect, useState } from 'react';
import update from 'immutability-helper';
import List from '../List';
let result = [];
const DndContainer = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      text: 'JavaScript',
    },
    {
      id: 1,
      text: 'TypeScript',
    },
    {
      id: 2,
      text: 'C++',
    },
    {
      id: 3,
      text: 'Python',
    },
    {
      id: 4,
      text: 'C#',
    },
  ]);
  const moveItem = useCallback((dragIndex, hoverIndex) => {
    setItems((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);
  const renderItem = useCallback((item, index) => {
    result.push({ id: item.id, order: index + 1 });
    return (
      <List
        key={item.id}
        index={index}
        id={item.id}
        text={item.text}
        moveItem={moveItem}
      />
    );
  }, []);
  useEffect(() => {
    console.log(result.slice(-6, -1));
  });
  return (
    <div className="w-[400px]">
      {items.map((item, i) => {
        return renderItem(item, i);
      })}
    </div>
  );
};

export default DndContainer;
