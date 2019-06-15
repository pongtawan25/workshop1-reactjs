import React, { Component } from 'react'

export default class App_component_lifecycle extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={()=>{this.setState({count: this.state.count + 1})}} type="button" class="btn btn-danger">Click</button>
                <Content num={this.state.count}/>
            </div>
        )
    }
}

class Content extends Component {
    componentWillMount(){
        console.log("component WillMount");
    }
    componentWillUpdate(){
        console.log("component WillUpdate");
    }
    componentDidUpdate(){
        console.log("component DidUpdate");
    }
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
            </div>
        )
    }
}



