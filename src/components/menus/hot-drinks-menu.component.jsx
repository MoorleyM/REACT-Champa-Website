import { 
    React,
    useContext,
    useState
} from 'react';

import { MenuContext } from '../../context/menu.context';

const HotDrinks = () => {
    const { hotDrinksMenu } = useContext(MenuContext)

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='menus-container'>
            <div className="menus-header" onClick={() => setClick(false)}>
                <h1>Hot Drinks</h1>
            </div>
            <div onClick={handleClick} className={click ? 'menus-card-container clicked' : 'menus-card-container'}>
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