import React from 'react';

function Options({toppings, setToppings, allToppings, setAllToppings}) {

  const handleChange = (e) => {
    //(e.target.checked) ? e.target.checked=true : e.target.checked=false;
  };

  return (
    <div>
      <form>
        <div>Select Toppings</div>
          <div className="options">
            {allToppings.map(t => 
              {
                return (<div key={t.id}>
                          {<input type="checkbox"
                                  id={t.topping}
                                  defaultChecked={false}
                                  onChange={handleChange}>
                           </input>}
                          {toppings.includes(t.topping)}
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