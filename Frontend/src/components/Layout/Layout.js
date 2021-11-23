import React from 'react'

import Navbar from 'components/Layout/Navbar.jsx'
import Footer from "components/Layout/Footer.jsx";

function Layout (props) {
    return (
        <React.Fragment>
            <Navbar/>
            { props.children }
            <Footer />
        </React.Fragment>
    )
}

export default Layout