import './FoodItem.css';
import { useState } from 'react';

const FoodItem = (props) => {
    const {food, onAddToCart} = props;

    const [amount, setAmount] = useState(1);

    const handleAddToCart = () => {
        onAddToCart(food, +amount);
    }
    return (
        <div className="food_item_container">
            <div className="food_item_info">
                <div className="food_item_name">{food.name}</div>
                <div className="food_item_description">{food.description}</div>
                <div className="food_item_price">${food.price}</div>
            </div>
            <div className="food_item_form">
                <div className="food_item_form_item">
                    <div className="food_item_form_label">Amount</div>
                    <input className="food_item_form_input" type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <button className="food_item_add_to_cart" onClick={handleAddToCart}>Add +</button>
            </div>
        </div> 
    );
};

export default FoodItem;
