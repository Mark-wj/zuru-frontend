import { useState } from "react";
import Destination from "../components/Destinations";



const DestinationPage = () => {
    const [destinations, setDestination] = useState([
        {
          "name": "Serene Beach",
          "description": "A tranquil beach perfect for relaxation with clear blue waters and golden sand.",
          "location": "Malindi, Kenya",
          "image_url": "https://tinyurl.com/3hm2h3tj",
          "rating": 4.5,
          "category": 1,
          "created_at": "2025-01-09T08:00:00Z"
        },
        {
          "name": "Mountain Peaks",
          "description": "A challenging mountain trail offering breathtaking views at the summit.",
          "location": "Mount Kenya, Kenya",
          "image_url": "hhttps://tinyurl.com/2zd97vhu",
          "rating": 4.7,
          "category": 2,
          "created_at": "2025-01-09T08:00:00Z"
        },
        {
          "name": "City Park",
          "description": "A vibrant park in the heart of the city with lush greenery and picnic spots.",
          "location": "Nairobi, Kenya",
          "image_url": "https://tinyurl.com/4nb2bhmk",
          "rating": 4.2,
          "category": 3,
          "created_at": "2025-01-09T08:00:00Z"
        },
        {
          "name": "Safari Adventure",
          "description": "An exciting safari experience to observe wildlife in their natural habitat.",
          "location": "Masai Mara, Kenya",
          "image_url": "/public/WhatsApp Image 2024-12-26 at 17.44.04.jpeg",
          "rating": 5.0,
          "category": 4,
          "created_at": "2025-01-09T08:00:00Z"
        }
      ]
      );

    
    // useEffect(() => {
    //     fetch('')
    //     .then(res => {
    //         if(!res.ok){
    //             throw new Error('Failed to fetch data')
    //         }
    //     })
    //     .then(data =>{
    //         setDestination(data)
    //     })
    //     .catch((err) => {
    //         console.error(err.message)
    //     })
    // })

    return (
    <section className="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
         <div className="destination">
         <Destination destinations={destinations}/>
         </div>

      </div>
    </section>
    );
}
 
export default DestinationPage;
