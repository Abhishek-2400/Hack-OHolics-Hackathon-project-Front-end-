import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function CardItem(props) {
    const { src, text, label, path } = props;
    return (
        <div className='card'>
        <li className='cards__item'>
            <Link className='cards__item__link' to={path}>

                <figure className='cards__item__pic-wrap' data-category={label}>
                    <img src={src} className='cards__item__img' alt='dubai' />

                </figure>

                <div className='cards__item__info'>
                    <h5 className='cards__item__text' color='white'>{props.text}</h5>
                </div>
            </Link>

        </li>
        </div>
    )
}

export default CardItem