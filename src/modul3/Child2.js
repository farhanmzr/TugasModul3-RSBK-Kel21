import React, { Component } from "react";

class Child2 extends Component {

    state = {
        angka: 0
    }

    componentDidMount() {
        alert(`Mount triggered!`)
    }

    minNumber = () => {
        this.setState((state) => { return { angka: state.angka - 1 } })
    }

    plusNumber = () => {
        this.setState((state) => { return { angka: state.angka + 1 } })
    }

    componentWillUnmount() {
        alert('sorry..Child2 will be gone :(')
    }

    render() {
        return ( <
            div >
            <
            h3 > Hello World..This is Child 2 < /h3> <
            button onClick = { this.minNumber } > Decrement < /button> <
            button onClick = { this.plusNumber } > Increment < /button> <
            br / >
            <
            p > { this.state.angka } < /p> < /
            div >
        );
    }

}

export default Child2;