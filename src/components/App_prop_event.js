import React, { Component } from 'react'

export default class App_prop_event extends Component {
    onClickbtn2 = ()=> {
        alert("Hello World")
    }

    render() {
        return (
            <div>
                <h1>Timtan</h1>
                <button type="button" onClick={()=>alert("Happy Enter")} class="btn btn-danger">Enter</button>
                <button type="button" onClick={this.onClickbtn2} class="btn btn-primary">Hello</button>
                <MyButton onSubmit={()=>{alert("My Button")}}/>
            </div>
        )
    }
}

class MyButton extends Component {
    render() {
        return (
            <div>
                <button type="button" onClick={this.props.onSubmit} class="btn btn-success">Alpajahay</button>
            </div>
        )
    }
}

