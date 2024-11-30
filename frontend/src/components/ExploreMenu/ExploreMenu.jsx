import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Discover Our Menu</h1>
            <p className="explore-menu-text">
                Enjoy delicious meals delivered to your door. From comfort food
                to international dishes, every bite is crafted to perfection.
                Satisfy your cravings with our fast, convenient delivery—hot and
                fresh!
            </p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div
                            onClick={() =>
                                setCategory((prev) =>
                                    prev === item.menu_name
                                        ? "All"
                                        : item.menu_name
                                )
                            }
                            key={index}
                            className="explore-menu-list-item"
                        >
                            <img
                                className={
                                    category === item.menu_name ? "active" : ""
                                }
                                src={item.menu_image}
                                alt="menu_list"
                            />
                            <p className="items" id="item">
                                {item.menu_name}
                            </p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
