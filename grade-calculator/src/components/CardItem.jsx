import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {
  // props is given object taht has all data need for a crad's creation

  // <Link className='cards__item__link' to ={props.path}> 
  // passes in given data to be formatted by the CardItem function

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}> 
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img 
              className='cards__item__img'
              alt='Travel Image' 
              src={props.src} 
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>
              {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
