import React from 'react';

function Options({toppings, setToppings}) {

  console.log(toppings);

  return (
    <div>
    <div>Select Toppings</div>
    <div className="options">
      <div><input type="checkbox" id="pepperoni" />Pepperoni</div>
      <div><input type="checkbox" id="olives" />Olives</div>
      <div><input type="checkbox" id="meatball" />Meatball</div>
      <div><input type="checkbox" id="mushroom" />Mushroom</div>
    </div>
    <div><button>Check Out</button></div>
    </div>
  )
}

export default Options;