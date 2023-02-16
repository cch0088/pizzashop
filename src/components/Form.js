import React from "react";

function Form({type, toppings, setOrders}) {

    function handleSubmit(event) {
        event.preventDefault();

        const newPizzaOrder = {
            name: event.target.name.value,
            type: type,
            toppings: toppings
        }

        const API_ORDER = "http://localhost:3000/orders";

        fetch(API_ORDER, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPizzaOrder)
        }).then(r => r.json())

        setOrders(prev => [...prev, newPizzaOrder])
    }
    
    return (
    <div className="order-form">
        <form onSubmit={handleSubmit}>
            <h3>Check Out</h3>
            <div className="form-field-container">
                <label for="name">Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-field"
                >     
                </input>
            </div>
            <div className="form-field-container">
                <label for="phone">Phone: </label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone number"
                    className="form-field"
                >     
                </input>
            </div>
            <div className="form-field-container">
                <label for="name">Address: </label>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    className="form-field"
                >     
                </input>
            </div>
            <div className="form-field-container">
                City: New York
            </div>
            <div className="form-field-container">
                State: NY
            </div>
            <div className="form-field-container">
                <label for="name">Zip code: </label>
                <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter your zip"
                    className="form-field"
                >     
                </input>
            </div>
            <div className="form-field-container">
                <label for="name">Credit card number: </label>
                <input
                    type="text"
                    name="creditcard"
                    placeholder="Enter your credit card number"
                    className="form-field"
                >     
                </input>
            </div>
            <div className="form-field-container">You are ordering a {type} pizza.</div>
            <div className="form-field-container">Pizza contents:
                <ul>
                    {toppings.map((topping, index) => 
                    {return <li key={index}>{topping.charAt(0).toUpperCase() + topping.slice(1)}</li>})}
                </ul>
            </div>
            
            <input type="submit" name="submit" value="Order Now" style={{"font-weight": "bold"}}>
            </input>

        </form>

    </div>
    
    );
}

export default Form;
