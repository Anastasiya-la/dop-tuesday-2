import React from 'react';
import {PagesType} from "../../data/dataState";
import Content from "../Content";
import {Params, useParams} from "react-router-dom";

type PageType = {
    pages: Array<PagesType>
}


const Page = (props: PageType) => {
    const params = useParams()
    const paramsId = Number(params.id)

    return (

        <Content page={props.pages[paramsId]}/>

    );
};

export default Page;