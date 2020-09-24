import React, { Component } from 'react';

export default class RecentPosts extends Component {
    render() {
        return (
            <div className='recent-posts'>
                <div className='recent-posts-wrapper'>
                    <div className='recent-post-heading'>
                        Recent Post
                    </div>
                    <ul className='recent-posts_posts'>
                        <li>recent Post 0</li>
                        <li>recent Post 1</li>
                        <li>recent Post 2</li>
                    </ul>

                </div>

            </div>
        );
    }
}
