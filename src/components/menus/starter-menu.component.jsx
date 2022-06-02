import { 
    React,
    useContext, 
    Fragment, 
    useState
} from 'react';

import { MenuContext } from '../../context/menu.context';

const StarterMenu = () => {
    const { starterMenu } = useContext(MenuContext)

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='menus-container'>
            <div className="menus-header" onClick={() => setClick(false)}>
                <h1>Starter Menu</h1>
            </div>
            <div onClick={handleClick} className={click ? 'menus-card-container clicked' : 'menus-card-container'}>
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