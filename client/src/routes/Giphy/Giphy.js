import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Giphysearch from "../../components/Giphysearch/Search";
import ProjectsNavBar from "../../components/ProjectsNavBar/ProjectsNavBar";

function Giphy() {
    return (
        <div className="wrapper">
            <header className="App-header">
                <h1 className="siteTitle">Giphy</h1>
                <Navbar />
            </header>
            <ProjectsNavBar />
            <div className="App-body">
                <Giphysearch />
            </div>
        </div>
    );
}

export default Giphy;