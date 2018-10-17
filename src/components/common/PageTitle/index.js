import React from 'react';

import s from './styles.scss';

const PageTitle = (props) => {
  const {
    title,
    rightSide
  } = props;

  console.log(rightSide);

  return (
    <div className={s.title}>
      <div>
        <h1>{title}</h1>
      </div>

      <div className={s.rightSide}>
        {[rightSide]}
      </div>
    </div>
  );
};

export default PageTitle;
