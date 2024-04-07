import React from 'react'
import { Link } from 'react-router-dom';
import Assignment from './Assignment';

function CardItem(props) {
  // props is given object taht has all data need for a card's creation

  // <Link className='cards__item__link' to ={props.path}> 
  // passes in given data to be formatted by the CardItem function

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}> 
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* <img src='./images/netherPortal.jpeg'></img> */}
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
