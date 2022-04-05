import React from "react";
import { Routes, Route , Link} from "react-router-dom";
import SearchPage from "./SearchPage";

const HomePage = () => {
    return(
        <>
        <div>
            This is Home Page
            <p><Link to="./auth">This is Auth Page</Link></p>
            <p><Link to="./search">This is Search Page</Link></p>
        </div>
        <div>
            This is place for Sidebar with Profile and Contacts
        </div>
        <Routes>
            <Route path='/*' element={<div>Select dialog to start messaging</div>}/>
            <Route path='/search' element={<SearchPage />}/>
            <Route path='/dialog/*' element={<div>Dialog</div>}/>
        </Routes>
        </>
    )


};

export default HomePage