import React, { useEffect } from "react";
import './SearchPage.css';
import { Link } from "react-router-dom";
import Users from "./../../store/usersStore"


const SearchPage = () => {

    const [text, onChangeText] = React.useState('');
    const [searchResult, handleSearchReult] = React.useState(Users);

    function handleChangeText(event){
        onChangeText(event.target.value)
    }

    React.useEffect(()=>{
        searchName()
    },[text]);


    const searchName = () => {
        const searchResult = Users.filter((user)=> user.name.toLowerCase().indexOf(text.toLowerCase()) !== -1)
        handleSearchReult(searchResult)
        console.log(searchResult); 
    }

   let resultToPrint = Users

    if(searchResult.length === 0){
        console.log('empty search')
        resultToPrint = <div>Not found</div>
        
    } else {
        resultToPrint = searchResult.map((user) => {
            return(
                <li key={user.id}>{`Пользователь ${user.name} с id: ${user.id}`}</li>
            )
        })
    }


    return(
        <div>
            <Link to="./*">This is Search Page</Link>

            <input type="text" name="name" onChange={handleChangeText} />
            {/* <button onClick={searchName}>Submit</button> */}

            {resultToPrint}
        </div>

    )
};

export default SearchPage