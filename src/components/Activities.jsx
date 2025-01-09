import { useState } from "react";

const Activities = () => {
    const [activities, setActivities] = useState([])
    return ( 
        <div className="activities">
            <h1>Activities</h1>
            <div className="activities-container">
                <div className="activity">
                    <h2>Activity 1</h2>
                    <p>Activity 1 description</p>
                </div>
            </div>
        </div>
     );
}
 
export default Activities;