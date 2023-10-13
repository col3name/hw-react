'use client';
import React from 'react';
import cn from 'classnames';

import FilmInfo from '@/components/Film/FilmSearch/FilmInfo';

import styles from './stylesCartList.module.css'

import {FilmOnCart} from '@/redux/features/cart/slice';
import {useFilmsSelector} from '@/redux/features/film/hooks';

export type CartListPropsType = {
  className?: string,
}

const CartList: React.FC<CartListPropsType> = ({
  className,
}) => {
  const films = useFilmsSelector();

  return <div className={ cn(styles.cartContainer, className) }>
    { films.map((film: FilmOnCart) => (
      <FilmInfo
        key={ film.id }
        film={ {...film, quantity:undefined} }
      />
    )) }
  </div>
};

export default CartList;
