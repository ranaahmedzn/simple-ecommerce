import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id, img, name, price, shipping} = product;

    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-detail'>
                <h6>{name}</h6>
                <p>Price: <span className="orange-text">${price}</span></p>
                <p>Shipping Charge: <span className="orange-text">${shipping}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;