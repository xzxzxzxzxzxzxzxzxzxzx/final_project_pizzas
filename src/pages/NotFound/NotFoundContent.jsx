import React from 'react';
import './NotFoundPage.scss'

const NotFoundContent = () => {
  return (
    <div className='notfound__block'>
      <span className='notfound__img'>😕</span>
          <h1>Ничего не найдено</h1>
          <p className='notfound__text'>К сожалению, данная страница отсутствует</p>
          <a href="/" class="button button--black">
              <span>Вернуться назад</span>
            </a>
    </div>
  );
};

export default NotFoundContent;
