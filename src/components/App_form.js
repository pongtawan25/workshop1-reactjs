import React, { Component } from 'react'

export default class App_form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }


    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <form action="" onSubmit={()=>alert(JSON.stringify(this.state))}>
                            <legend>Login</legend>
                            <div class="form-group">
                                <label>Username</label>
                                <div class="col">
                                    <input
                                        onChange={u => {
                                            this.setState({ username: u.target.value })
                                        }}
                                        value={this.state.username}
                                        type="text" class="form-control" />
                                </div>
                                <label>Password</label>
                                <div class="col">
                                    <input
                                        onChange={u => {
                                            this.setState({ password: u.target.value })
                                        }}
                                        value={this.state.password}
                                        type="password" class="form-control" />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-outline-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
