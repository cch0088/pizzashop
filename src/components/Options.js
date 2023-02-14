import React from 'react';

function Options({toppings, setToppings, allToppings}) {

  const updateToppings = (e) => {
    console.log(e.target.checked, e.target.id);
  };

  return (
    <div>
      <form>
        <div>Select Toppings</div>
          <div className="options">
            {allToppings.map((t) => 
              {
                return (<div key={t.id}>
                          <input type="checkbox"
                                  id={t.topping}
                                  defaultChecked={toppings.includes(t.topping)}
                                  onChange={updateToppings}>
                           </input>
                           {t.topping.charAt(0).toUpperCase() + t.topping.slice(1)}
                        </div>);
              })}
          </div>
        <div><input type="submit" value="Check Out"></input></div>
      </form>
    </div>
  )
}

export default Options;