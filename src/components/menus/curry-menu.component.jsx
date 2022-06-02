import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const CurryMenu = () => {
    const { curryMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Curry Menu</h1>
            </div>
            <div className='menus-card-container'>
                {curryMenu.map(({
                    id, 
                    item, 
                    ingredients,
                    meat,
                    price,
                }) => (
                    <div key={id} className='menu-info'>
                        <h3>{item} - {id}</h3>
                        <p><span className='menu-titles'>Meat:</span> {meat}</p>
                        <p><span className='menu-titles'>Ingredients:</span> {ingredients}</p>
                        <p><span className='menu-titles'>Price:</span> ${price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CurryMenu;