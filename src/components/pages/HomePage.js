import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div>
            This is Home Page
            <p><Link to="./auth">This is Auth Page</Link></p>
            <p><Link to="./search">This is Search Page</Link></p>
        </div>
    )


};

export default HomePage