import React from 'react'
import { FaTrash } from 'react-icons/fa';



class Order extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="item">
                <img src={"./image/" + this.props.item.img}/>
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price}$</b>
                <FaTrash className="delete-icon" onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}

export default Order;
