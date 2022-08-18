import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer';
import { TOKEN } from '../../utils/utils';
import HeaderLogin from './Header/HeaderLogin';


export default function HomeTemplate(props) {
    const token = window.localStorage.getItem(TOKEN);

    const { Component, ...resRoute } = props
    return <Route { ...resRoute } render={ (propsRoute) => {
        return <Fragment>
            { token ? <Header  { ...propsRoute } /> : <HeaderLogin  { ...propsRoute } /> }
            <Component { ...propsRoute } />
            <Footer  { ...propsRoute } />
        </Fragment>
    } }
    />
}
