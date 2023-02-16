import React from "react";

function Filters({filters, setFilters}) {

    function handleFilter(event){
        const selectedType = event.target.value
        setFilters({vegetarian: selectedType})
    }

    return(

        <div>
            <h3 className="veg">Vegetarian Pizzas</h3>
            <div className="veggie">
                <select onChange={handleFilter} name="vegetarian" id="veggie" aria-label="vegetarian">
                    <option value="all">All</option>
                    <option value="yes">Vegetarian</option>
                    <option value="no">Not Vegetarian</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;