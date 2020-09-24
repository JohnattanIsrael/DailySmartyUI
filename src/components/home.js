import React, { Component } from 'react';
import Logo from '../components/logo';
import SearchBar from '../components/searchBar';
import RecentPosts from '../components/recentPosts';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                  <Logo />
                  <SearchBar />
                  <RecentPosts />
                </div>
            </div>
        );
    }
}
