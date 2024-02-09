import React,{useState} from 'react';

function MyComponent(){
    const [foods, setFoods] = useState(["Apple", "Orange", "banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(prevFoods => [...prevFoods, newFood ]);
    }

    function handleRemoveFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        if(foods.length > 0 && foods.includes(newFood)){
            setFoods(f => f.filter((f1) => f1 != newFood));
        }
    }
    function handleRemoveFood2(index){
        setFoods(foods.filter((_, i) => i !=index));
    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood2(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name:"/>
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    )

}

export default MyComponent