import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="295" y="355" rx="2" ry="2" width="104" height="104" />
    <circle cx="596" cy="550" r="28" />
    <circle cx="141" cy="126" r="125" />
    <circle cx="188" cy="210" r="24" />
    <rect x="1" y="271" rx="10" ry="10" width="280" height="27" />
    <rect x="9" y="433" rx="10" ry="10" width="99" height="27" />
    <rect x="3" y="313" rx="10" ry="10" width="280" height="91" />
    <rect x="148" y="421" rx="23" ry="23" width="134" height="44" />
  </ContentLoader>
);

export default MyLoader;
