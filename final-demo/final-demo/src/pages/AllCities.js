import CitiesList from "../components/cities/CitiesList";


const DUMMY_DATA = [
    {
        id: '1',
        name: 'Cape Town',
        image:
            'https://media.cntraveller.com/photos/6321d3d462fbe32d299c9a91/master/w_1920%2Cc_limit/Cape%2520Town%2C%2520South%2520Africa-GettyImages-1056988264.jpeg',
        country: 'South Africa',
        description:
            'On pristine beaches, penguins waddle about their business while leaping dolphins frame spectacular sunsets – and thrill-seekers head out on boats to come face-to-face with fearsome sharks. Away from the ocean, guests check into world-renowned hotels such as The Silo, the recognisable property where rooms feature contemporary African art and 360-degree views of the city. Table Mountain views are enjoyed over supper, especially during trips to Delaire Graff Estate for wine-swirling and impeccable tasting menus.',
    },
    {
        id: '2',
        name: 'Tokyo',
        image:
            'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=1600',
        country: 'Japan',
        description:
            'Often viewed as the gate to the rest of Japan’s wonders, the bustling metropolis of Tokyo (population 13.96 million at the last count) has a lot to offer as a destination in itself. That Tokyo hotels have been joined by smart chains speaks volumes, with 2021’s Tokyo Edition Toranomon and the upcoming Bulgari Tokyo attracting increased interest. Japan was closed to visitors for almost two years due to the pandemic, but recent figures show the country as a whole is having no issues pulling in the international crowds once again.',
    },
    {
        id: '3',
        name: 'Paris',
        image:
            'https://afar.brightspotcdn.com/dims4/default/8ab4f64/2147483647/strip/true/crop/1300x868+0+0/resize/1440x961!/format/webp/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2Fb1%2F68%2Fed509c216d2176cb6de726ee59b2%2Foriginal-paris-catarina-belova-shutterstock-1029106939.jpg',
        country: 'France',
        description:
            'Paris is one of the most beautiful cities in the world. It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and the Eiffel tower. It has a reputation of being a romantic and cultural city. The city is also known for its high-quality gastronomy and the terraces of its cafés.'   
    },
    {
        id: '4',
        name: 'Dubai',
        image:
            'https://www.planetware.com/wpimages/2021/11/united-arab-emirates-dubai-in-pictures-beautiful-places-to-photograph-dubai-skyline.jpg',
        country: 'United Arab Emirates',
        description:
            'Dubai needs no introduction. From skyscrapers to ultra-modern architecture, this place is the engineering epitome. Known for its ultra-rich and luxurious lifestyle, the city boasts of being the possessor of some of the finest architectural masterpieces attracting travelers from all around the globe. The tallest building in the world Burj Khalifa, the largest hotel in the world Burj al Arab Jumeirah, world\'s largest mall The Dubai Mall are among the priceless treasures of the city.'   
    },
    {
        id: '5',
        name: 'Moncton',
        image:
            'https://www.tinyadventuresjourney.com/wp-content/uploads/2019/09/City-of-Moncton-Ben-Champoux-1024x683.jpg',
        country: 'New Brunswick, Canada',
        description:
            'Moncton boasts a vibrant arts and culture scene, sporting competitions and unique community activities that take place year-round. Discover the many sights and activities the city offers. View sculpture and large colourful murals located in the downtown core. Anglophone and Acadian heritage provide a rich tapestry of cultural activities to enjoy.'   
    },
];

function Allcities(){
    return (
        <section>
            <h1>Cities to visit</h1>
            <CitiesList cities={DUMMY_DATA} />
        </section>
    )
}


export default Allcities