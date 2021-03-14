import React, { Component } from 'react'
import axios from 'axios'
const url = 'http://localhost:8900/transport'
const durl = "http://localhost:8900/deletetransport"

class Transport extends Component {
    constructor() {
        super()
        this.state = {
            transport: "",
            delete: ""
        }
    }

    renderdel = (event) => {
        if (window.confirm('Are you sure?')) {
            fetch(`${durl}/${event.target.value}`, {
                method: 'DELETE',
                'Accept': 'application/json',
                'Content-type': 'application/json'
            })

            axios.get(url).then((response) => {
                this.setState({ transport: response.data })
            })
        }
    }

    rendertable = (data) => {
        if (data) {
            return data.map((i) => {
                return (
                    <tr>
                        <td>{i.Title}</td>
                        <td>{i.Capc}</td>
                        <td>{i.Capy}</td>
                        <td>{i.Capm}</td>
                        <td>{i.Balance}</td>
                        <td><button className='btn1' value={i._id} onClick={this.renderdel}>Delete</button></td>
                    </tr>
                )
            })
        }
    }
    render() {
        return (
            <div>
                <div>

                    <div>
                        <div className='container'>
                            <div className='med'>
                                <div className="med1">
                                    <i class="fa fa-car"></i> Transport
                                    <i data-toggle="collapse" data-target="#demo1" className='ab2 dropdown-toggle'></i>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <span className='sb'>Starting Balance: <i className='sb1'>500.00 SGD</i></span>
                                        </div>
                                        <div className='col-6'>
                                            <span className='sb2'>Available Balance: <i className='sb1'>280.80 </i>

                                            </span>


                                        </div>


                                    </div>
                                    <hr />

                                </div>

                                <div className='collapse' id='demo1'>
                                    <table className="table table-borderless  table-hover table-responsive-md ">
                                        <thead className='ttxt'>
                                            <tr>
                                                <th>Title</th>
                                                <th>Cap per claim</th>
                                                <th>Cap per year</th>
                                                <th>Cap per month</th>
                                                <th>Available Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.rendertable(this.state.transport)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div >
            </div>
        )
    }

    componentDidMount() {
        axios.get(`${url}`).then((response) => {
            this.setState({ transport: response.data })
        })
    }
}

export default Transport