import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class App_prop_validating extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            count1: 0,   
            count2: 0,   
        }
    }
    
    render() {
        const {count1,count2} = this.state
        return (
            <div>
                <button onClick={()=>this.setState({count1: count1+10})} type="button" class="btn btn-outline-primary">SetState V1 : {count1}</button>
                <button onClick={()=>this.setState(prevState => {return {count2: prevState.count1 + prevState.count2}})} type="button" class="btn btn-outline-primary">SetState V2 : {count2}</button>
                <button onClick={()=>{this.forceUpdate()}} type="button" class="btn btn-outline-primary">ForceUpdate {Math.random()*100}</button>
                
                <button onClick={()=>{
                    var myDiv = document.getElementById('comment');
                    ReactDOM.findDOMNode(myDiv).style.color = 'red';
                }} 
                type="button" class="btn btn-outline-primary">FindDomNode
                </button>

                <div id="comment">Hello React</div>
            </div>
        )
    }
}
