import React from 'react';

function Options({toppings, type, setToppings, allToppings, handleForm})
{
  const toppingsExist = [];

  const toggleTopping = (e) => {
    const index = toppingsExist.indexOf(e.target.name);

    if (index > -1) {toppingsExist.splice(index, 1);}
    else {toppingsExist.push(e.target.name);}

    setToppings(toppings => toppingsExist);
  }

    return (
      <div className="options-menu">
          <div className="select-toppings-heading">Select Toppings</div>
            <div className="options">
              {allToppings.map((x, index) => 
                {
                  if (toppings.includes(x.topping)) {toppingsExist.push(x.topping)};
                  return (<div key={index}>
                            <button className="pizza-topping-toggle" id={x.topping} name={x.topping} onClick={toggleTopping}>
                              {toppings.includes(x.topping) ? "✅" : "❎"}
                            </button>
                            {x.topping.charAt(0).toUpperCase() + x.topping.slice(1)}
                          </div>);
                })}
            </div>
          <div><button style={{"font-weight": "bold"}} onClick={handleForm}>Check Out</button></div>
      </div>
    )

}

export default Options;