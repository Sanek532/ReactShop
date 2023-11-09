import React, { useState } from 'react';
import { FaShoppingCart} from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
    let summ = 0;
    props.orders.forEach(el => summ += Number.parseFloat(el.order.price))
    return (
        <div>
            {props.orders.map(item => (
                <Order key={item.order.id} item={item.order} onDelete={props.onDelete}/>
            ))}
            <p className="summ">Общая сумма: {new Intl.NumberFormat().format(summ)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className="empty">
            <h2>Товаров пока нет</h2>
        </div>
    )
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div className="head">
                <div>
                    <span className="logo">House Staff</span>
                </div>
                <div>
                    <ul className="nav">
                        <li>О нас</li>
                        <li>Контакты</li>
                        <li>Кабинет</li>
                    </ul>
                    <FaShoppingCart className={`shop-cart-button ${cartOpen && `active` }`} onClick={() => setCartOpen(cartOpen = !cartOpen)}/>
                </div>
            </div>

            {cartOpen && (
                <div className="shop-cart">
                    {props.orders.length > 0 ?
                        showOrders(props) : showNothing()}
                </div>
            )}
            <div className="presentation"></div>
        </header>
    );
}

export default Header;
