import React, { Component } from 'react'

export default class App_stateless extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Pongtawan</h1>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div style={styles.header}>
                <h1>Header</h1>
            </div>
        )
    }
}

const styles = {
    header: { backgroundColor: '#ff1111' }
}