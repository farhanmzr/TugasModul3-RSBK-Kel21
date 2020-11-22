import { Component } from "react";
import React from "react";
import Child from "./Child";
import Child2 from "./Child2";

class Parent extends Component {

    state = {
        component1: false,
        component2: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`Component Updates! prevState child: ${prevState.component1} -- prevState child2: ${prevState.component2}`)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('Apakah anda yakin');
    }

    changeComponent1 = () => {
        this.setState((state) => {
            return { component1: !this.state.component1 }
        })
    }

    changeComponent2 = () => {
        this.setState((state) => {
            return { component2: !this.state.component2 }
        })
    }

    render() {
            return ( <
                    div >
                    <
                    h3 > Informasi Mahasiswa < /h3> { this.state.component1 ? < Child / >: ''
                } <
                button onClick = { this.changeComponent1 } > { this.state.component1 ? 'Sembunyikan ' : 'Tampilkan ' }
            Child 1. < /button> <
            br / > < br / >
                <
                h3 > Penjumlahan dan Pengurangan Angka < /h3> { this.state.component2 ? < Child2 / >: ''
        } <
        button onClick = { this.changeComponent2 } > { this.state.component2 ? 'Sembunyikan ' : 'Tampilkan ' }
    Child 2. < /button> < /
        div >
);
}
}

export default Parent;