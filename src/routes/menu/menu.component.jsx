import StarterMenu from "../../components/menus/starter-menu.component";
import TraditionalMenu from "../../components/menus/traditional-menu.component";
import SoupAndSaladMenu from "../../components/menus/soup-salad-menu.component";
import PhoNoodleMenu from "../../components/menus/pho-noodle-menu.component";
import CurryMenu from "../../components/menus/curry-menu.component";
import MainCourseMenu from "../../components/menus/main-menu.component";
import NoodleLoverMenu from "../../components/menus/noodler-lover-menu.component";
import VegetarianMenu from "../../components/menus/vegetarian-menu.component";
import SideDishesMenu from "../../components/menus/side-dishes-menu.component";
import HotDrinks from "../../components/menus/hot-drinks-menu.component";
import ColdDrinks from "../../components/menus/cold-drinks-menu.component";
import LunchMenu from "../../components/menus/lunch-menu.component";

import './menu.styles.scss'

const Menu = () => {
    return (
        <div>
            <StarterMenu />
            <TraditionalMenu />
            <SoupAndSaladMenu />
            <PhoNoodleMenu />
            <CurryMenu />
            <MainCourseMenu />
            <NoodleLoverMenu />
            <VegetarianMenu />
            <SideDishesMenu />
            <HotDrinks />
            <ColdDrinks />
            <LunchMenu />
        </div>
    );
};
export default Menu;