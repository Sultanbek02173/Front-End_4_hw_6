import React, { Component } from 'react';

class Buttons extends Component {

    state = {
        input1: "",
        input2: "",
        result: "",
    }

    render() {
        const { input1, input2, result } = this.state;
        return (
            <div className='calc'>
                <input placeholder='input-1' type="text" onChange={(event) => {
                    this.setState({ input1: event.target.value })
                }} />
                <input placeholder='input-2' type="text" onChange={(event) => {
                    this.setState({ input2: event.target.value })
                }} />

                <div className='result'>:{result}</div>

                <div className='btn'>

                    <button onClick={() => {
                        if (input1 !== '' && input2 !== '') {
                            this.setState({ result: Number(input1) + Number(input2) })
                        } else {
                            this.setState({ result: 'Заполните поля!' })
                        }
                    }}>+</button>

                    <button onClick={() => {
                        if (input1 !== '' && input2 !== '') {
                            this.setState({ result: Number(input1) - Number(input2) })
                        } else {
                            this.setState({ result: 'Заполните поля!' })
                        }
                    }}>-</button>

                    <button onClick={() => {
                        if (input1 !== '' && input2 !== '') {
                            this.setState({ result: Number(input1) * Number(input2) })
                        } else {
                            this.setState({ result: 'Заполните поля!' })
                        }
                    }}>*</button>

                    <button onClick={() => {
                        if (input1 !== '' && input2 !== '') {
                            if (Number(input2) === 0) {
                                this.setState({ result: "На ноль делить нельзя!" })
                            } else {
                                this.setState({ result: (Number(input1) / Number(input2)).toFixed(2) })
                            }
                        } else {
                            this.setState({ result: 'Заполните поля!' })
                        }
                    }}>/</button>

                    <button onClick={() => {
                        if (input1 !== '' && input2 !== '') {
                            this.setState({ result: Number(input1) ** Number(input2) })
                        } else {
                            this.setState({ result: 'Заполните поля!' })
                        }
                    }}>x<sup>2</sup></button>

                    <button onClick={() => {
                        if (input1 !== '' && input2 !== '') {
                            this.setState({ result: Number(input1) ** (1 / Number(input2)) })
                        } else {
                            this.setState({ result: 'Заполните поля!' })
                        }
                    }}>√</button>
                </div>

            </div>
        );
    }
}

export default Buttons;
