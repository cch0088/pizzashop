import React from "react";

function Form({handleForm, showForm, setShowForm, type, setType, toppings, setToppings, setOrders}) {

    function handleSubmit(event) {
        event.preventDefault();

        const newPizzaOrder = {
            name: event.target.name.value,
            type: event.target.type.value,
            toppings: event.target.toppings.value,
        }

        fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(newPizzaOrder)
        })

        setOrders(prev => [...prev, newPizzaOrder])
    }
    
    return (
    <div>
        <form onSubit={handleSubmit}>
            <h3>Order A Pizza</h3>
            <label for="name">Name:</label>
            <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input-text"
            >     
            </input>
            <label for="type">Selected Pizza Type</label>
            <input id="pizza-type-input"
            type="text"
            value={type}
            name="type"
            className="pizza-type-input" 
            >
            </input>
            <label for="toppings">Selected Pizza Toppings</label>
            <input
            type="text"
            value={toppings}
            name="toppings"
            className="input-text"
            >
            </input>
            <input
            type="submit"
            name="submit"
            value="Order Now"
            className="submit"
            >
            </input>

        </form>

    </div>
    
    );
}

export default Form;


//div class content 