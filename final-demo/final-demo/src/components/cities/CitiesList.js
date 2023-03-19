import CityItem from "./CityItem";
import classes from "./Cities.module.css"

function CitiesList(props){
    return (
        <ul className={classes.list}>
            {props.cities.map(city =>
                <CityItem 
                key={city.id}
                id={city.id}
                image={city.image}
                name={city.name}
                country={city.country}
                description={city.description}
                />)}
        </ul>
    )
}

export default CitiesList