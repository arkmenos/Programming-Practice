import profilePic from './assets/myimg.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Arc</h2>
            <p className='card-text'>software engineer</p>
        </div>

    );
}
export default Card