

function ProfilePicture(){
    const pic = './src//assets/myimg.jpg';

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img src={pic} onClick={(e)=> handleClick(e)}></img>
    );
}

export default ProfilePicture