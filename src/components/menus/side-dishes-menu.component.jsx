import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const SideDishesMenu = () => {
    const { sideDishesMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Side Dishes</h1>
            </div>
            <div className='menus-card-container'>
                {sideDishesMenu.map(({
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
export default SideDishesMenu;