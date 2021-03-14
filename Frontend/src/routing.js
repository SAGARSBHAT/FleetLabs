import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Content from './content'

class Routing extends Component{
    constructor() {
        super()
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                   <Route path='/' component={Content}></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routing