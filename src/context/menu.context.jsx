import { createContext, useState } from 'react';

import MENU from '../data/menu.data.json'

export const MenuContext = createContext({
    starterMenu: [],
    traditionalMenu: [],
    soupSaladMenu: [],
    phoNoodleMenu: [],
    curryMenu: [],
    mainMenu: [],
    noodleLoverMenu: [],
    vegetarianMenu: [],
    sideDishesMenu: [],
    hotDrinksMenu: [],
    coldDrinksMenu: [],
    lunchMenu: [],
});

export const MenuProvider = ({children}) => {
    const [starterMenu, setStarterMenu] = useState(MENU.starterMenu);
    const [traditionalMenu, setTraditionalMenu] = useState(MENU.traditionalMenu);
    const [soupSaladMenu, setSoupSaladMenu] = useState(MENU.soup_salad);
    const [phoNoodleMenu, setPhoNoodleMenu] = useState(MENU.pho_noodle);
    const [curryMenu, setCurryMenu] = useState(MENU.curry);
    const [mainMenu, setMainMenu] = useState(MENU.main_course);
    const [noodleLoverMenu, setNoodleLoverMenu] = useState(MENU.noodle_lover);
    const [vegetarianMenu, setVegetarianMenu] = useState(MENU.vegetarian);
    const [sideDishesMenu, setSideDishesMenu] = useState(MENU.side_dishes);
    const [hotDrinksMenu, setHotDrinksMenu] = useState(MENU.hot_drinks);
    const [coldDrinksMenu, setColdDrinksMenu] = useState(MENU.cold_drinks);
    const [lunchMenu, setLunchMenu] = useState(MENU.lunch_menu);

    const value = {
        starterMenu,
        traditionalMenu,
        soupSaladMenu,
        phoNoodleMenu,
        curryMenu,
        mainMenu,
        noodleLoverMenu,
        vegetarianMenu,
        sideDishesMenu,
        hotDrinksMenu,
        coldDrinksMenu,
        lunchMenu
    }
    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    );
};