import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

// defines environmental variables DE
const backendBaseUrl = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_DEVELOPMENT : process.env.REACT_APP_PRODUCTION

const postEndpoint = '/api/orders';

class ShowOrder extends Component {

    constructor(props){
        super(props);
        this.state = {
            orderArray: [],
            redirect: false
        }

        this.handleDeleteOrder = this.handleDeleteOrder.bind(this);
    }

    handleDeleteOrder = event => {
        this.setState({redirect: true})
        axios.delete(backendBaseUrl + postEndpoint + "/" + this.props.match.params.id)
    }



    componentDidMount(){

        axios({
            method:'get',
            url: backendBaseUrl + postEndpoint
            })
            .then((orderArray) => this.setState({orderArray: orderArray.data}))
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to={'/confirm'} />
        }

        let orderList = this.state.orderArray
        let orderResult = orderList.filter( order => order._id === this.props.match.params.id)
        let order = orderResult[0]

        if(typeof order != "undefined"){
            return (    
                <div className="showOrder">
                    <h1>Thank you for your order, {order.name}!</h1>
                    <h2>Confirmation Number</h2>
                    <h3>{order._id}</h3>
                    <h2>Pickup Address</h2>
                    <h3>{order.pickUpAddress}</h3>
                    <h2>Dropoff Address </h2>
                    <h3>{order.dropOffAddress}</h3>
                    <h2>Pickup Time</h2>
                    <h3>{order.time}</h3>
                    <form onSubmit={this.handleDeleteOrder}>
                        <input type="submit" value="cancel order"></input>
                    </form>
                </div>
            );
          } else {
              return (
                 <h2>Order empty</h2>
              )
            } 
            
    }

}


export default ShowOrder;

