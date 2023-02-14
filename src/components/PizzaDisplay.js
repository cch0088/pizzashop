function PizzaDisplay ({toppings, allToppings}) {
    const baseImage = "./assets/pies/base.png";
    
    return (
        <div className="picture">
            <img className="pizza-display" src={baseImage} alt="Pizza" />
            {allToppings.map((x) => {
                if (toppings.includes(x.topping)) {
                    return <img className="pizza-display" src={x.image} alt={x.topping} />
                }
            })}
        </div>
        );
}

export default PizzaDisplay;