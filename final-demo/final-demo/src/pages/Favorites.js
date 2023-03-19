import { useContext } from "react"
import CitiesList from "../components/cities/CitiesList"
import FavoritesContext from "../store/favorites-context"

function Favorites(){
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have 0 favorite Cities</p>;
    } else {
        content = <CitiesList cities={favoritesCtx.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}


export default Favorites