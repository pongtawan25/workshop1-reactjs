import React, { Component } from 'react'
import './../App.css'

export default class App_prop extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Facehook</h1>
                <Entry label="Username " type="text"/>
                <Entry label="Password " type="password"/>
            </div>
        )
    }
}

class Entry extends Component {
    render() {

        return (
            <div>
                {this.props.label}
                <input type={this.props.type}></input>
            </div>
        )
    }
}

