// import React, { Component } from 'react';
    
    
// class SomeClassComponent extends Component {
//     render() {
//         return <div>This is our first class component.</div>;
//     }
// }
    
// export default SomeClassComponent;


import React, {Component} from 'react';

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderCount: this.props.orders
        };
    }
    

    
    render(){

        const doSomething = ()=>{
            console.log("you clicked on the order button, for the price of")
            // alert(`You just clicked to order more ${itemName}`)
            // alert("wazzzaaaa")
            this.setState({orderCount: this.state.orderCount+1 })
            // this.setState({ position: "Off" })
        }
        const { itemName, desc, price, orders } = this.props;

        return <div className="menuItem">
            
            <h1>{itemName}</h1>
            {this.props.children}
            <p>Description: {this.props.desc}</p>
            <p>Price: ${this.props.price}</p>
            <p>Number of orders today: {this.state.orderCount}</p>
            <button onClick={doSomething}>Order more {itemName}</button>
            {/* <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button> */}
           
        </div>
    }
}

export default Menu;

