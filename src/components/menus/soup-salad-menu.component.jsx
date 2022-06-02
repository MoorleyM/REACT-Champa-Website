import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const SoupAndSaladMenu = () => {
    const { soupSaladMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Soup and Salad Menu</h1>
            </div>
            <div className='menus-card-container'>
                {soupSaladMenu.map(({
                    id, 
                    item, 
                    ingredients,
                    price,
                }) => (
                    <div key={id} className='menu-info'>
                        <h3>{item} - {id}</h3>
                        <p><span className='menu-titles'>Ingredients:</span> {ingredients}</p>
                        <p><span className='menu-titles'>Price:</span> ${price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default SoupAndSaladMenu;