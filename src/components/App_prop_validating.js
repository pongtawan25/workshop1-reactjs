import React, { Component } from 'react'
import PropsTypes from 'prop-types'

export default class App_prop_validating extends Component {
    render() {
        return (
            <div>
                {this.props.message}
                {this.props.count}
            </div>
        )
    }
}

App_prop_validating.propTypes ={
    message:PropsTypes.string,
    count: PropsTypes.number
}

App_prop_validating.defaultProps = {
    message: "Hello",
    count: 1
}

