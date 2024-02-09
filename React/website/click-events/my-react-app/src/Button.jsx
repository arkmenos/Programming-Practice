
function Button(){

    // let count = 0;
    // const handleClick = (name) => {
    //     if(count <3){
    //         count ++;
    //         console.log("owww");
    //     }
    //     else{
    //         console.log(`${name} stop`)
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "ouch";
    return (
        <button onDoubleClick={(e) =>handleClick(e)}>Click me</button>
    );

}

export default Button