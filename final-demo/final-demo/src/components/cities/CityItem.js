import { useContext } from "react"
import FavoritesContext from "../../store/favorites-context"
import Card from "../ui/Card"
import classes from "./Cities.module.css"


function CityItem(props) {
    const favoriteContext = useContext(FavoritesContext);

    const itemIsFavorite = favoriteContext.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteContext.removeFavorite(props.id)
        } else {
            favoriteContext.addFavorite({
                id: props.id,
                name: props.name,
                image: props.image,
                country: props.country,
                description: props.description
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.name} />
                </div>
                <div className={classes.content}>
                    <h2>{props.name}</h2>
                    <h4>{props.country}</h4>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite ? 'Remove From Favorites' : 'To Favorites'}
                    </button>
                </div>
            </Card>
        </li>
    )
}


export default CityItem