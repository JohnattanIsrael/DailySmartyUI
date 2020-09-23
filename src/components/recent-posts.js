import React, { Component } from 'react';

export default class RecentPosts extends Component {
    render() {
        return (
            <div className='recent-posts'>
                <div className='recent-post-wrapper'>

                    <div className='recent-post-heading'>
                        Recent posts
                    </div>
                    <ul className='recent-posts-posts'>
                        <li>Recent Post 0</li>
                        <li>Recent Post 1</li>
                        <li>Recent Post 2</li>
                    </ul>

                </div>
                
            </div>
        );
    }
}
