import React,{useState} from 'react';
function MyComponent(){
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    
    function handleNameChage(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChage}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"></input>
            <p>Quantity: {quantity}</p>

            <input value={comment} onChange={handleCommentChange}
                placeholder='Enter delivery Instructions'></input>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">GiftCard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick Up"} 
                    onChange={handleShippingChange}/>
                Pick Up
            </label>
            
            <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"} 
                    onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping {shipping}</p>
        </div>

    );
}
export default MyComponent