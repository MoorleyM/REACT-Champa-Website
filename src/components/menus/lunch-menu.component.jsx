import { useContext, Fragment } from 'react';

import { MenuContext } from '../../context/menu.context';

const LunchMenu = () => {
    const { lunchMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Lunch Menu</h1>
            </div>
            <div className='menus-card-container'>
                {lunchMenu.map(({
                    id, 
                    item,
                    meat,
                    side, 
                    ingredients, 
                    quantity,
                    sauces,
                    price,
                }) => (
                    <div key={id} className='menu-info'>
                        <h3>{item} - {id}</h3>
                        <p><span className='menu-titles'>Ingredients:</span> {ingredients}</p>
                        <Fragment>
                            {
                                meat && (
                                    <p><span className='menu-titles'>Meat:</span> {meat}</p>
                                )
                            }
                            {
                                sauces && (
                                    <p><span className='menu-titles'>Sauces:</span> {sauces}</p>
                                )
                            }
                            {
                                side && (
                                    <p><span className='menu-titles'>Side:</span> {side}</p>
                                )
                            }
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
export default LunchMenu;