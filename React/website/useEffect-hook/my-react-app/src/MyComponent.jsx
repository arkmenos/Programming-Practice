import React, {useEffect, useState} from 'react';


function MyComponent(){

    const[width,setWidth] = useState(window.innerWidth);
    const[height,setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event added");

        return () =>{
            window.removeEventListener("resize", handleResize);
            console.log("event removed");
        }
    },[]);

    useEffect(()=>{
        document.title = `Size: ${width}  x ${height}`;
    },[width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}
// function MyComponent(){

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("green");

//     useEffect(()=>{
//         document.title = `Count: ${count} ${color}`

//         return () => {
//             //SOME CLEANUP CODE
//         }
//     }, [count, color]);

//     function addCount(){
//         setCount(c=>c+1);
//     }
//     function substractCount(){
//         setCount(c=>c-1);
//     }

//     function changeColor(){
//         setColor(c => c==="green" ? "red" : "green");
//     }

//     return(<>
//         <p style={{color: color}}>Count: {count}</p>
//         <button onClick={addCount}>Add</button>
//         <button onClick={substractCount}>Substract</button>
//         <button onClick={changeColor}>Change Color</button>
        
//     </>)
// }

export default MyComponent