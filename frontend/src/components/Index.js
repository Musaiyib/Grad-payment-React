import React from 'react'
import Footer from './Footer'
import Free from './Free'
import Home from './Home'
import Release from './Release'
import Reason from './Reason'

const Index = ({ changeTheme, theme }) => {
    return (
        <div>
            <Home />
            <Free />
            <Release />
            <Reason />
            <Footer />
        </div>
    )
}

export default Index