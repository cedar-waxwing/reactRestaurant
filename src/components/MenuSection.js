import FoodItem from "./FoodItem"

function MenuSection(props) {
    return (
        <>
            <div className="accordion-item">
                <h1 className="accordion-header" id={"flush-heading" + props.index}>
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse" + props.index} aria-expanded="false" aria-controls={"flush-collapse" + props.index}> {props.section.type} </button>
                </h1>
                <div id={"flush-collapse" + props.index} className="accordion-collapse collapse" aria-labelledby={"flush-heading" + props.index} data-bs-parent={"#accordionFlushExample"}>
                    <div className="accordion-body"> {props.section.menuItems && props.section.menuItems.map((food, index) => <FoodItem key={index} food={food} parentid={props.section.id} />)}</div>
                </div>
            </div>
        </>
    )

}



export default MenuSection

