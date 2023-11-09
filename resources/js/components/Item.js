import React from 'react'

const Item = (props) => {

        return (
            <div className="item">
                <img src={"./image/" + props.item.img} onClick={() => {props.onShowFullItem(props.item)}}/>
                <div className="item-desc">
                    <h2>{props.item.title}</h2>
                    <p>{props.item.description}</p>
                    <b>{props.item.price}$</b>
                    <div className="add-to-cart" onClick={() => {props.onAdd(props.item)}}>+</div>
                </div>

            </div>
        );

}

export default Item;
