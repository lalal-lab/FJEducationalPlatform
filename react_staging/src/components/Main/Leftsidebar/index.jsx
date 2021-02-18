import React, { Component } from 'react'
import Content from './Content'
import Title from './Title'

export default class Leftsidebar extends Component {
    render() {
        return (
        <div className="ep-leftsidebar clearfix">
            <Title/>
            <Content/>
            
        </div>
        )
    }
}
