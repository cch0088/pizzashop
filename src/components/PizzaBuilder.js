import React, {useState} from 'react';
import PizzaDisplay from './PizzaDisplay';
import Options from './Options';
import Menu from './Menu';
import Form from './Form';
import Filters from './Filters';

function PizzaBuilder({pizzas, allToppings, handleForm, orders, setOrders, filters, setFilters}) {

    const [toppings, setToppings] = useState([]);
    const [type, setType] = useState("");
    const [image, setImage] = useState("");
    const [showForm, setShowForm] = useState(false)

    function handleForm(){
        setShowForm((showForm) => !showForm);
    }


    return (
        <div>
            {(type !== "")
            ? (<div className="content">
                <PizzaDisplay toppings={toppings}
                            allToppings={allToppings} />
                <Options toppings={toppings}
                        setToppings={setToppings}
                        allToppings={allToppings}
                        type={type}
                        handleForm={handleForm} />
                
                        {showForm ? <Form
                        type={type}
                        toppings={toppings}
                        setOrders={setOrders}
                        /> : null}
            </div>)
            : (<div className="content">
                <h1>Select Your Pizza Below</h1>
            </div>)}
            <div className="filler"><Filters filters={filters} setFilters={setFilters} /></div>
            <div className="lower-content">
                <Menu setToppings={setToppings}
                    setType={setType}
                    setImage={setImage} 
                    pizzas={pizzas}
                    filters={filters}
                    setFilters={setFilters}/>       
            </div>
        </div>
    );
}
export default PizzaBuilder;
