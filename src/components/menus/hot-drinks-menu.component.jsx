import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const HotDrinks = () => {
    const { hotDrinksMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Hot Drinks</h1>
            </div>
            <div className='menus-card-container'>
                {hotDrinksMenu.map(({
                    item,
                    price,
                }) => (
                    <div key={item} className='menu-info'>
                        <h3>{item}</h3>
                        <p><span className='menu-titles'>Price:</span> ${price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default HotDrinks;