import React from 'react';
import styles from './Site.module.css'
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import Page from "./pages/Page";
import {dataState} from "../data/dataState";

type IsActiveType = {
    isActive: boolean
}

export const Site = () => {
    const isActive = ({isActive}: IsActiveType) => {
        return isActive ? styles.active : styles.navLink
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                <div className={styles.nav}>
                    <NavLink to={'/page/0'} className={isActive}>Page One</NavLink>
                    <NavLink to={'page/1'} className={isActive}> Page Two</NavLink>
                    <NavLink to={'page/2'} className={isActive}> Page Three</NavLink>
                    <div><a href={'/page/0'}>Page3</a></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page-one'}/>}/>
                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>
                        {/*
                  <Route path={'/page-one'} element={<PageOne/>}/>
                  <Route path={'/page-two'} element={<PageTwo/>}/>
                  <Route path={'/page-three'} element={<PageThree/>}/>*/}
                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

