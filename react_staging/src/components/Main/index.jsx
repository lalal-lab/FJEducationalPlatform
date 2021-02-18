import React, { Component } from 'react'
import Leftsidebar from './Leftsidebar';
import RightContent from './RightContent'
export default class Main extends Component {
    render() {
        return (
        <div className="ep-main">
            <div className="ep-content clearfix">
                <Leftsidebar/>
                <RightContent/>
            

            </div>
        </div>
        )
    }
}
