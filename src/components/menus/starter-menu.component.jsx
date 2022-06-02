import { useContext, Fragment } from 'react';

import { MenuContext } from '../../context/menu.context';

const StarterMenu = () => {
    const { starterMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Starter Menu</h1>
            </div>
            <div className='menus-card-container'>
                {starterMenu.map(({
                    id, 
                    item, 
                    ingredients, 
                    quantity, 
                    price,
                }) => (
                    <div key={id} className='menu-info'>
                        <h3>{item} - {id}</h3>
                        <p><span className='menu-titles'>Ingredients:</span> {ingredients}</p>
                        <Fragment>
                            {
                                quantity && (
                                    <p><span className='menu-titles'>Quantity:</span> {quantity}</p>
                                )
                            }
                        </Fragment>
                        <p><span className='menu-titles'>Price:</span> ${price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default StarterMenu;