function PizzaDisplay (props) {
    return (
    <div className="picture">
        <img className="pizza-display" src={props.image} alt={props.type} />
    </div>
    );
}

export default PizzaDisplay;