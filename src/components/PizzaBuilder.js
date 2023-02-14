import React, {useState} from 'react';
import PizzaDisplay from './PizzaDisplay';
import Options from './Options';
import Menu from './Menu';

function PizzaBuilder({pizzas, allToppings, setAllToppings}) {

    const [toppings, setToppings] = useState([]);
    const [type, setType] = useState("");
    const [image, setImage] = useState("");

    return (
        <div>
            <div className="content">
                <PizzaDisplay type={type}
                            image={image} />
                <Options toppings={toppings}
                        setToppings={setToppings}
                        allToppings={allToppings}
                        setAllToppings={setAllToppings} />
            </div>
            <div className="lower-content">
                <Menu setToppings={setToppings}
                    setType={setType}
                    setImage={setImage} 
                    pizzas={pizzas} />
            </div>
        </div>
    );
}
export default PizzaBuilder;
