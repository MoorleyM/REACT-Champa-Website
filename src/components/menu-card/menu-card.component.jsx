import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const MenuCard = ({ menu }) => {
    const {id, item, ingredients, quantity, price} = menu;
    return (
        <div key={id} className='menu-card-container'>
            <h3>{item} - {id}</h3>
            <p>Ingredients: {ingredients}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
        </div>
    );
};

export default MenuCard;