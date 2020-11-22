import React, { Component } from "react";

class Child1 extends Component {
    state = {
        nama: "Farhan Mazario",
        nim: "21120117140005"
    }

    componentDidMount() {
        alert(`Mount triggered!`)
    }

    changeName = () => {
            this.setState((state) => {
                if (state.nama === "Farhan Mazario" && state.nim === "21120117140005") {
                    return {
                        nama: "Tasya Chandra Icha P",
                        nim: "21120117130059"
                    }
                } else {
                    return {
                        nama: "Farhan Mazario",
                        nim: "21120117140005"
                    }
                }
            })
        }
        // componentDidUpdate(prevProps, prevState, snapshot) {
        //     alert(`Component Updates! State nama sebelumnya: ${prevState.nama}`)
        // }
        // shouldComponentUpdate(nextProps, nextState, nextContext) {
        //     return window.confirm('Haruskah Component ini di-Update?');
        // }
    componentWillUnmount() {
        alert('sorry..Child 1 will be gone :(')
    }

    render() {
        return ( <
            div >
            <
            h3 > Hello World..This is Child 1 < /h3> <
            button onClick = { this.changeName } > Tekan apabila ingin mengubah nama dan nim mahasiswa! < /button> <
            br / >
            <
            h5 > { this.state.nama } < /h5> <
            h5 > { this.state.nim } < /h5> < /
            div >
        );
    }
}
export default Child1;