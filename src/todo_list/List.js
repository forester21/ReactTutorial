import React, {Component} from "react"

import todoItems from "./TodoJson"

class TodoItem extends Component {

    render() {
        return (
            <div className='todo-item'>
                <input onChange={() => this.props.toggleList(this.props.item.id)} type="checkbox"
                       checked={this.props.item.completed}/>
                <p style={this.props.item.completed ? {textDecoration: 'line-through'} : null}>
                    {this.props.item.text}
                </p>
            </div>
        )
    }
}

class List extends Component {

    constructor() {
        super();
        this.state = {
            items: todoItems
        };
        this.toggleList = this.toggleList.bind(this);
    }

    toggleList(id) {
        this.setState(state => {
            state.items = state.items.map(el => {
                if (el.id === id) {
                    el.completed = !el.completed;
                }
                return el;
            });
            return state;
        });
    }

    getItems() {
        return this.state.items.map(it => <TodoItem key={it.id} item={it} toggleList={this.toggleList}/>)
    }

    render() {
        return (
            <div className="todo-list">
                {this.getItems()}
            </div>
        )
    }
}

export default List