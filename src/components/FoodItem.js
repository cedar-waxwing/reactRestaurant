

function FoodItem(props) {

    

    return (
        <h1>{props.food.name} {Math.floor(Math.random() * 30) + 10}</h1>
    )
}

export default FoodItem
