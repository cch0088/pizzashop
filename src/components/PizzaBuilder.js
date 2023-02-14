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
            <PizzaDisplay type={type} image={image} />
            <Options toppings={toppings} setToppings={setToppings} allToppings={allToppings} setAllToppings={setAllToppings}/>
            <Menu setToppings={setToppings} setType={setType} setImage={setImage} pizzas={pizzas} />
        </div>    
    );
}
export default PizzaBuilder;
