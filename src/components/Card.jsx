import { Card } from "flowbite-react";

const CardComponent = ({image}) => {
    return ( 
        <Card className="max-w-sm" imgSrc={image} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Card title 
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                Some quick example text to build on the card title and make up the bulk of the card's
            </p>
        </Card>
     );
}
 
export default CardComponent;