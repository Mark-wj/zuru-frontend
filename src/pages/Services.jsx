// import ServiceList from "../components/ServiceList";

import CarouselComponent from "../components/Carousel";

const Services = () => {
    const [services, setServices] = ([]);
    
    return ( 
        <div className="services">
            <h1>Our Services</h1>
            {/* <ServiceList services={services}/> */}
            <CarouselComponent />
        </div>
     );
}
 
export default Services;