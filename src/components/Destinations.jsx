import DestinationCard from "./DestinationCard";

const Destination = (props) => {
    const { destinations } = props;
    return ( 
        <div className="destination">
            <h1>Destinations</h1>
            <div className="destination__container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {destinations.map((destination) => (
                     <div className="destination__item" key={destination.id}>
                        {/* Pass destination properties to DestinationCard */}
                        <DestinationCard 
                            name={destination.name}
                            description={destination.description}
                            image_url={destination.image_url}
                            location={destination.location}
                            rating={destination.rating}
                            category={destination.category}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Destination;
