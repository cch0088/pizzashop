function PizzaBuilder () {

    return (<div>
        <div className="heading">Heading</div>
        <div className="navigation">Navigation Menu</div>
        <div className="spacer">Blank space</div>
        <div className="content">
            <div className="picture">
                <img className="pizza-display" src="./assets/pies/plain.png" alt="Pizza" />
            </div>
            <div className="options">Options</div>
        </div>
        <div className="lower-content">Lower Content</div>
        <div className="footer">Footer</div>
    </div>);
}

export default PizzaBuilder;
