import React, { Component } from 'react'

export default class App_functional_component extends Component {
    render() {
        return (
            <div>
                <Header message="555"/>
                <Content title="Funtional Component" subtitle="The best" />
            </div>
        )
    }
}

const Header = ({message}) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    )
}

const Content = ({ title, subtitle }) => {
    return (
        <div>
            <h1>Title : {title}</h1>
            <h3>Subtitle : {subtitle}</h3>
        </div>
    )
}
