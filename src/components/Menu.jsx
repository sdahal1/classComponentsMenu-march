// import React, { Component } from 'react';
    
    
// class SomeClassComponent extends Component {
//     render() {
//         return <div>This is our first class component.</div>;
//     }
// }
    
// export default SomeClassComponent;


import React, {Component} from 'react';

class Menu extends Component{

    
    render(){
        const { itemName, desc, price, orders } = this.props;

        return <div className="menuItem">
            <h1>{itemName}</h1>
            <p>Description: {this.props.desc}</p>
            <p>Price: ${this.props.price}</p>
            <p>Number of orders today: {this.props.orders}</p>
           
        </div>
    }
}

export default Menu;

