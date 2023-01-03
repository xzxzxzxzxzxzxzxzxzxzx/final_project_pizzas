import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cart from '../assets/img/cart.svg';
import arrowLeft from '../assets/img/grey-arrow-left.svg';
import CartItem from '../components/CartItem';
import basketImg from '../assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
import { clearBasket } from '../redux/slices/basketSlice';

const Cart = () => {
  const basketArray = useSelector((state) => state.basket.basketPizzas);
  const totalPrice = useSelector((state) => state.basket.totalPrice);
  const totalCount = useSelector((state) => state.basket.totalCount);
  const dispatch = useDispatch();

  return (
    <>
      {basketArray?.length === 0 ? (
        <div className="container container--cart">
          <div className="cart cart--empty">
            <h2>
              Корзина пустая <icon>😕</icon>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={basketImg} alt="Empty cart" />
            <a href="/" className="button button--black">
              <span>Вернуться назад</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="container container--cart">
          <div className="cart">
            <div className="cart__top">
              <h2 className="content__title">
                <img className="cart-img" src={cart} alt="" /> Корзина
              </h2>
              <div onClick={() => dispatch(clearBasket())} className="cart__clear">
                <span className="material-symbols-outlined trash">delete</span>
                <span>Очистить корзину</span>
              </div>
            </div>
            <div className="cart__items">
              {basketArray?.map((cart) => (
                <CartItem {...cart} />
              ))}
            </div>
            <div className="cart__bottom">
              <div className="cart__bottom-details">
                <span>
                  Всего пицц: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice} ₽</b>
                </span>
              </div>
              <div className="cart__bottom-buttons">
                <Link to="/" className="button button--outline button--add go-back-btn">
                  <img src={arrowLeft} alt="" />
                  <span>Вернуться назад</span>
                </Link>
                <div className="button pay-btn">
                  <span>Оплатить сейчас</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
