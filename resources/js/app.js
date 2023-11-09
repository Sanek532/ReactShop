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
        if (queryDeleteOrder(id)) this.queryGetOrders();
        //this.setState({ orders: this.state.orders.filter(el => el.order.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if (item.id === el.order.id) isInArray = true;
        });
        if (!isInArray)
        {
            if (queryStoreOrder(item.id)) this.queryGetOrders();

            //this.setState({orders: [...this.state.orders, item]})
        }
    }

    queryGetOrders() {
        const urlOrders = "api/orders";
        axios.get(urlOrders)
            .then(res => {
                const orders = res.data.data;
                this.setState({orders: orders});
                console.log(orders);
            })
            .catch(error => {
                console.log('Ошибка при получении данных из корзины' + error);
            });
    }
}

    const queryDeleteOrder = (id) => {
    const url = `api/orders/${id}`;
    return axios.delete(url)
        .then(res => {
            console.log('элемент успешно удален' + res.data);
            return 1;
        })
        .catch(error => {
            console.log('Ошибка при удалении элемента из корзины' + error);
            return 0;
        })
}

    const queryStoreOrder = (id) => {
        const url = "api/orders";
        return axios.post(url, {id: id})
            .then(res => {
                console.log('Товар успешно добавлен в корзину' + res);
                return 1;
            })
            .catch(error => {
                console.log('Не удалось добавить товар в корзину' + error);
                return 0;
            });
    }

export default App;
