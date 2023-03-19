import { useContext } from "react";
import { Link } from "react-router-dom"
import FavoritesContext from "../../store/favorites-context";
import classes from "./Layout.module.css"


function MainNavigation() {
    const favoriteContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Travel</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            All Cities
                        </Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            Favorites
                            <span className={classes.badge}>
                                {favoriteContext.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation