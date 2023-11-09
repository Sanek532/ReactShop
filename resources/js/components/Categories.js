import React from 'react'
import axios from 'axios'

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
        };

    }

    componentDidMount() {
        const urlCategories = 'api/categories';
        axios.get(urlCategories)
            .then(res => {
                let categories = res.data.data;
                this.setState({categories: categories});
            })
            .catch(error => {
                console.log('Ошибка при получении данных');
            });
    }

    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <h2 key={el.id} onClick={() => this.props.chooseCategory(el.id)}>{el.name}</h2>
                ))}
            </div>
        );
    }
}


export default Categories;
