import React from 'react';
import { Link } from "react-router-dom";
import "./ProjectBrief.css";

function GiphyAPIBrief() {
    return (
        <div className="wrapper">
            <h1>Giphy API w/ Axios Demo</h1>
            <div class="d-flex bg-light text-dark mx-5">
                <div class="p-4 m-auto">
                    <p className="text-justify p-4 m-2 briefText">
                        This page uses a bootstrap form to accept text input from the user and send it to the "Giphy" API via Axios.
                        The below client side map function displays the first 10 results in neat boxes with custom styling.</p>
                    <img src={require('./giphyDemo.png')} alt="Match Game Demo" className="demoImage" />
                    <Link className="projectsLink" to={'/giphy'}><strong className="text-primary border border-dark bg-dark p-3 m-2">Go To Live Page</strong></Link>
                </div>
            </div>
        </div>
    );
}

export default GiphyAPIBrief;