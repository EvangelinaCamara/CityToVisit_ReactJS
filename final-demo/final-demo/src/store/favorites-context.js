import { useState, createContext } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteCity) => { },
    removeFavorite: (cityId) => { },
    itemIsFavorite: (cityId) => { }
});

export function FavoritesContextProvider(props){

    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteCity) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteCity);
        });
    }

    function removeFavoriteHandler(cityId) {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(city => city.id !== cityId);
        });
    }

    function itemIsFavoriteHandler(cityId) {
        return userFavorites.some(city => city.id === cityId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext



