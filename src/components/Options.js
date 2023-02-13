import React from 'react';

function Options({toppings, setToppings, allToppings, setAllToppings}) {

  return (
    <div>
    <div>Select Toppings</div>
    <div className="options">
      {allToppings.map(t => 
        {
          return (<div key={t.id}><input type="checkbox"></input>{t.topping.charAt(0).toUpperCase() + t.topping.slice(1)}</div>);
        })}
    </div>
    <div><button>Check Out</button></div>
    </div>
  )
}

export default Options;