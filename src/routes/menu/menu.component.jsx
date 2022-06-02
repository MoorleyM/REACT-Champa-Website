
import { useContext } from 'react';

import { MenuContext } from '../../context/menu.context';

const Menu = () => {
    const { starterMenu } = useContext(MenuContext)
    return (
        <div>
            {starterMenu.map(({
                id, 
                item, 
                ingredients, 
                quantity, 
                price, 
                meat, 
                sauces,
                side
            }) => (
                <div key={id}>
                    <h3>{item} - {id}</h3>

                </div>
            ))}
        </div>
    );
};
export default Menu;