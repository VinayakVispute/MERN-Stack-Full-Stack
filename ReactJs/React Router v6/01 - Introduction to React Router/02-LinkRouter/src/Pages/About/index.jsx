import React from 'react'

const About = (props) => {
    console.log(props);
    let value = props.value;
    let increaseHandler = props.increaseHandler;
    let currentUser = props.currentUser;
    let userHandler = props.userHandler;


    return (
        <div>
            <h1>This is About Page</h1>
            <button onClick={() => {
                increaseHandler();
                alert(value);
            }} > Increase from About</button>
            <fieldset>
                <legend>User:</legend>
                <strong>{currentUser ? currentUser : 'No User'}</strong>
                <br />
                <br />
                <button onClick={userHandler}>Update User</button>
            </fieldset>
        </div>

    )
}

export default About
