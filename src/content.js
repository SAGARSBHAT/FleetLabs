import React, { Component } from 'react'
import axios from 'axios'
import Transport from './transport'

const url = 'http://localhost:8900/'
const durl = 'http://localhost:8900/deletemedical'

class Content extends Component {
    constructor() {
        super()

        this.state = {
            medical: "",
            delete: "",
         

        }
    }
    renderdel = (event) => {
        if (window.confirm('Are you sure?')) {
            fetch(`${durl}/${event.target.value}`, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json'
            }
            })
            fetch(url, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    this.setState({ medical: data })
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
                <style>{'body { background-color:#F2F3F6; }'}</style>
                <div>
                    <div className='ben'>
                        <u>My Benifits</u>
                        <hr />
                    </div>
                    <div>
                        <div className='container'>
                            <div className='med'>
                                <div className="med1">
                                    <i class="fa fa-ambulance"></i> Medical
                                    <i data-toggle="collapse" data-target="#demo" className='ab2 dropdown-toggle'></i>


                                <div className='row'>
                                        <div className='col-6'>
                                            <span className='sb'>Starting Balance: <i className='sb1'>500.00 SGD</i></span>
                                        </div>
                                        <div className='col-6'>
                                            <span className='sb2'>Available Balance: <i className='sb1'>280.80 </i>

                                            </span>


                                        </div>


                                    </div>
                                    <hr/>

                                </div>

<div className='collapse' id='demo'>
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
                                        {this.rendertable(this.state.medical)}
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
               
             
                </div >
                <Transport/>
                </div>
        )
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ medical: data })
            })

        

    }
}



export default Content