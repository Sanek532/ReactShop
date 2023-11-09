import Items from "./components/Items";

require('./bootstrap');
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: [],
            currentItems: [],
            items: [],
            isShowFullItem: false,
            fullItem: [],
        };

        this.deleteOrder = this.deleteOrder.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.queryGetOrders = this.queryGetOrders.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowFullItem = this.onShowFullItem.bind(this);
    }

    componentDidMount() {
        const url = 'api/products';
        axios.get(url)
            .then(res => {
                let products = res.data.data;
                this.setState({items: products, currentItems: products});
                console.log(products)
            })
            .catch(error => {
                console.log('Ошибка при получении данных');
            });

        this.queryGetOrders();
    }

    render() {
        return (
            <div className="wrapper">
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowFullItem={this.onShowFullItem}/>
                {this.state.isShowFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowFullItem={this.onShowFullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowFullItem(item) {
        this.setState({fullItem: item})
        this.setState({isShowFullItem: !this.state.isShowFullItem})
    }

    chooseCategory(category) {
        if (category === "all") {
            this.setState({
                currentItems: this.state.items,
            });
            return;
        }


        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }


    deleteOrder(id) {
        if (queryDeleteOrder(id)) {
            const orders = this.state.orders.filter(order => order.order.id !== id);
            this.setState({orders: orders});
        }
    }

    async addToOrder(item) {
        const isInArray = this.state.orders.some(
            (order) => order.order.id === item.id
        );
        if (!isInArray) {
            const product = await queryStoreOrder(item.id);
            if (product) this.setState({orders: [...this.state.orders, {order: item}]});
        }
    }

    async queryGetOrders() {
        const url = "api/orders";
        const {data, status} = await axios.get(url);
        if (status === 200) {
            this.setState({orders: data.data});
            console.log(data.data);
        }
        else console.log('Не удалось получить список корзины status='+status);
    }
}

    async function queryDeleteOrder(id) {
    const url = `api/orders/${id}`;
    const {data, status} = await axios.delete(url);
    if (status === 200) {
        console.log(data);
        return data;
    }
    else {
        console.log('Не удалось удалить товар из корзины');
        return null;
    }
}

    async function queryStoreOrder(id) {
        const url = "api/orders";
        const { data, status } = await axios.post(url, {id: id});
        if (status === 200) return data;
        else {
            console.log('Не удалось добавить товар в корзину');
            return null;
        }
    }

export default App;
