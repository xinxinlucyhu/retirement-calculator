import React, { Component } from "react";
import './style.css';

class Calculate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            income: " ",
            expense: " ",
            amount: " "
        }
        this.calculate.bind(this);
    }
    calculate() {
        this.setState({
            income: parseFloat(this.refs.incomeContent.value),
            expense: parseFloat(this.refs.expenseContent.value),
        })
    }

    render() {
        let amount = `${12 * ((this.state.expense) - (this.state.income)) / 0.03}`
        let incomeElement = <input ref="incomeContent" className="income" defaultValue={this.state.income}></input>
        let expenseElement = <input ref="expenseContent" className="expense" defaultValue={this.state.expense}></input>
        let amountElement = <input className="amount" readOnly value={amount}></input>
        let btnElement = <button className="btn btn-success" onClick={this.calculate.bind(this)}>Submit</button>;

        return (
            <div >
                <nav className="navbar">
                    <span className="navbar-brand mb-0 h1">Retirement Calculator</span>
                </nav>
                <div className="container-fluid">
                    <div className="items">
                        <label>Income: </label>{incomeElement}
                        <label>Expense: </label>{expenseElement}
                        <label>401K Amount: </label>{amountElement}
                        {btnElement}
                    </div>
                </div>
              
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-interval="10000">
                                <img src="https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item" data-interval="2000">
                                <img src="https://www.planetware.com/wpimages/2020/11/europe-top-attractions-colosseum-rome.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src="https://data.1freewallpapers.com/download/cinque-terre-1680x1260.jpg" className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </button>
                    </div>
                </div>
        );
    }


}

export default Calculate;