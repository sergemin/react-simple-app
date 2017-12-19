import React, { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard';
import fetchJSON from './helpers/fetch-json';

import { Link } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    getPosts() {
        let userID = this.props.match.params.userID ? this.props.match.params.userID : 1;
        fetchJSON(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
            .then(response => {
                this.setState({
                    posts: response
                })
            })
            .catch(error => {
                console.log('request failed', error)
            });
    }
    componentDidMount() {
        this.getPosts();
    }
    render() {
        return (
            <div className="App">
                <h1 className="section-title">My React app with fake REST API</h1>
                <div className="container">
                    <ul className="block-list">
                        {this.state.posts.map((item) => (
                            <li key = {item.id}
                                className="post-list__item">
                                <PostCard post = {item} />
                            </li> 
                        ))}
                    </ul>
                    <ul className="pagination">
                        <li className="pagination__item"><Link className='pagination__link' to="/">1</Link></li>
                        <li className="pagination__item"><Link className='pagination__link' to="/2">2</Link></li>
                        <li className="pagination__item"><Link className='pagination__link' to="/3">3</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
