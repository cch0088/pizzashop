import React, {useState} from 'react';
import PizzaDisplay from './PizzaDisplay';
import Options from './Options';
import Menu from './Menu';
import Form from './Form';

function PizzaBuilder({pizzas, allToppings, handleForm, orders, setOrders}) {

    const [toppings, setToppings] = useState([]);
    const [type, setType] = useState("Select Your Pizza");
    const [image, setImage] = useState("./assets/default.png");
    const [showForm, setShowForm] = useState(false)

    function handleForm(){
        setShowForm((showForm) => !showForm);
    }


    return (
        <div>{(type !== "")
            ? (<div className="content">
                <PizzaDisplay toppings={toppings}
                            allToppings={allToppings} />
                <Options toppings={toppings}
                        setToppings={setToppings}
                        allToppings={allToppings}
                        type={type}
                        handleForm={handleForm} />
                
                        {showForm ? <Form
                        handleForm={handleForm}
                        showForm={showForm}
                        setShowForm={setShowForm} 
                        type={type}
                        setType={setType}
                        toppings={toppings}
                        setToppings={setToppings}
                        orders={orders}
                        setOrders={setOrders}
                        /> : null}
            </div>)
            : (<div className="content">
                <h1>Select Your Pizza</h1>
            </div>)}
            <div className="lower-content">
                <Menu setToppings={setToppings}
                    setType={setType}
                    setImage={setImage} 
                    pizzas={pizzas} />
            <div>
            </div>        
            </div>
        </div>
    );
}
export default PizzaBuilder;
