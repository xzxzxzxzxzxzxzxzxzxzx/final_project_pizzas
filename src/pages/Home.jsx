import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortType);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    fetch(
      `https://6356dd009243cf412f8f24e5.mockapi.io/items?${
        categoryId > 0 ? 'category=' + categoryId : ''
      }${
        sortType.sortProperty === 'title'
          ? `&sortBy=${sortType.sortProperty}&order=asc`
          : `&sortBy=${sortType.sortProperty}&order=desc`
      }`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setPizzas(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          onClickCategory={(id) => {
            onChangeCategory(id);
          }}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(10)].map((item, index) => <Skeleton key={index} />)
          : pizzas.map((item) => <PizzaBlock {...item} key={item.id}/>)}
      </div>
    </>
  );
};

export default Home;
