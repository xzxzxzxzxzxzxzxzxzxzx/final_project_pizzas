import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addToBasket, clearItem } from '../redux/slices/basketSlice';

const CartItem = ({ title, price, imageUrl, type, size,id, count }) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addToBasket({id}))
  }

  const onClickMinus = () => {
    dispatch(removeItem({id}))
  }

  const onClickClear = () => {
    dispatch(clearItem({id}))
  }


  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>{type}, {size} см.</p>
      </div>
      <div className="cart__item-count">
        <div className="button button--outline button--circle cart__item-count-minus">
          <span onClick={()=>onClickMinus()} className="material-symbols-outlined">remove</span>
        </div>
        <b>{count}</b>
        <div onClick={()=> handleAdd()} className="button button--outline button--circle cart__item-count-plus">
          <span className="material-symbols-outlined">add</span>
        </div>
      </div>
      <div className="cart__item-price">
        <b>{price} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div onClick={()=> onClickClear()} className="button button--outline button--circle">
          <span className="material-symbols-outlined close">close</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
