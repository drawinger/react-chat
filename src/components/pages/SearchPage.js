import React from "react";
import './SearchPage.css';
import { Link } from "react-router-dom";
import Users from "./../../store/usersStore"


const SearchPage = () => {

    const [text, onChangeText] = React.useState('');
    const [searchResult, handleSearchReult] = React.useState([]);

    const searchName = () => {
        const searchResult = Users.filter((user)=> user.name === text ? user.name : '')
        handleSearchReult(searchResult)
        console.log(searchResult); 
        // return frmdetails
    }
    

    return(
        <div>
            <Link to="./*">This is Search Page</Link>

            <input type="text" name="name" onChange={e => onChangeText(e.target.value)} />
            <button onClick={searchName}>Submit</button>

            <div>
                <h2>{searchResult === [] ? `Пользователей не найдено` : `${2}`}</h2>
            </div>


        </div>

    )
};

export default SearchPage