import './ListFood.css';
import FoodItem from './FoodItem';

const ListFood = (props) => {
    const {products, onAddToCart}  = props; // products = props.products
    return (
        <div className="container">
            <div className="list_food_item">
            {
                products.map((product) => {
                    return <FoodItem key={product.id} food={product} onAddToCart={onAddToCart}/>;
                })
            }
            </div>
        </div>
    )
}

export default ListFood;