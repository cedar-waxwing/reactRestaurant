import FoodItem from "./FoodItem.js"

function MenuSection(props) {
    return (
        <div className="card-body">
            {props.section.type}
            <div>
                {props.section.menuItems && props.section.menuItems.map((food, index) => <FoodItem key={index} food={food} />)}
            </div>
        </div>
    )
}


export default MenuSection
