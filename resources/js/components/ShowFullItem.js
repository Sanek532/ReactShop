import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";


class ShowFullItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="full-item">
                <div>
                    <img src={"./image/" + this.props.item.img} />
                    <div className="item-desc">
                        <h2>{this.props.item.title}</h2>
                        <p>{this.props.item.description}</p>
                        <b>{this.props.item.price}$</b>
                        <div className="add-to-cart" onClick={() => {this.props.onAdd(this.props.item)}}>+</div>
                        <AiFillCloseCircle className="close-icon" onClick={() => {this.props.onShowFullItem(this.props.item)}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;
