import React, { useState } from 'react';

function Categories({ categoryId, onClickCategory }) {
  // console.log(categoryId);

  const categoriesArr = ['Все', 'Мясные', 'Вегетeрианские', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categoriesArr.map((value, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={categoryId === index ? 'active' : ''}
            key={index}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
