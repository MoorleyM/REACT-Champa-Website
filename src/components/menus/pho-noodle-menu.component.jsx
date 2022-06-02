import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const PhoNoodleMenu = () => {
    const { phoNoodleMenu } = useContext(MenuContext)
    return (
        <div className='menus-container'>
            <div className="menus-header">
                <h1>Pho Noodle Menu</h1>
            </div>
            <div className='menus-card-container'>
                {phoNoodleMenu.map(({
                    id, 
                    item, 
                    ingredients,
                    side,
                    price,
                }) => (
                    <div key={id} className='menu-info'>
                        <h3>{item} - {id}</h3>
                        <p><span className='menu-titles'>Side:</span> {side}</p>
                        <p><span className='menu-titles'>Ingredients:</span> {ingredients}</p>
                        <p><span className='menu-titles'>Price:</span> ${price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PhoNoodleMenu;