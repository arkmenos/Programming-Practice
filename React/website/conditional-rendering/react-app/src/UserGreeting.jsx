import PropTypes from'prop-types';

function UserGreeting(props){
    const loginMessage = <h2 className="login-prompt">Please log in</h2>;
 
    if(props.isLoggedIn){
        return <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else{
        return loginMessage;
    }

}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting