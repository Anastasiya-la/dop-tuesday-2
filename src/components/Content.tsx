import React from 'react';
import {PagesType} from "../data/dataState";
import {Route} from "react-router-dom";


type ContentType = {
    page: PagesType
}


const Content = (props: ContentType) => {
    return (
        <div>
            <h2>{props.page.heading}</h2>
            <p>{props.page.heading}</p>
        </div>
    );
};

export default Content;
