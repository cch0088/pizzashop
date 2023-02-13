import React from "react";

function Pizza({toppings, image, type}) {

    return(
        <div className="menuNav">
            <img src={image} />
            <>{type}</>
            <>{toppings}</>
        </div>
    )

}
export default Pizza;
