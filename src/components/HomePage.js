import React from "react";
import { Link } from 'react-router-dom';

function Home () {
    return (

        <div>
            <h2> Welcome to the To-Do app </h2>
            <nav>
                <ul>
                    <li> <Link to="/todos"> Go to To-Do List </Link></li>
                    <li> <Link to="/categories"> Manage Categories </Link></li>
                </ul>
            </nav>
        </div>
    
    );
}

export default Home;