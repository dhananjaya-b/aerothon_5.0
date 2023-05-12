import React from "react";
import googleLog from "../assets/Vector.png"

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to the app!</h1>
            <button style={{ width: '30%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}> <img src={googleLog} /> Login</div>
            </button>
        </div>
    );
};

export default Welcome;
