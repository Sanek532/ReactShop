import React from 'react'
import Item from "./Item";

const Items = (props) => {
        return (
            <main>
                {props.items.map(item => (
                    <Item item={item} key={item.id} onAdd={props.onAdd} onShowFullItem={props.onShowFullItem}/>
                ))}
            </main>
        );
}

export default Items;
