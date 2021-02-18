import React, { Component } from 'react'

export default class Hander extends Component {
    render() {
        return (
        <div className="ep-header">
            <div className="top-sidebar clearfix">
                <div className="top-logo">
                    <img src="./pictures/logo.png" alt="logo1"/>
                    <img src="./pictures/logo2.png" alt="logo2"/>
                    <img src="./pictures/logo3.png" alt="logo3"/>
                </div>
                <ul className="top-main">
                    <li><a href="#!" className="top-main-item">首页</a></li>
                    <li><a href="#!" className="top-main-item">教学管理</a></li>
                    <li><a href="#!" className="top-main-item">学习</a></li>
                    <li><a href="#!" className="top-main-item">资源超市</a></li>   
                    <li><a href="#!" className="top-main-item">教育应用</a></li>
                    <li><a href="#!" className="top-main-item">新闻</a></li>
                    <li><a href="#!" className="top-main-item">名师名校</a></li>      
                </ul>
                <div className="newfunction">新功能</div>
                <div className="top-search"><img src="./pictures/search.png" alt="search" className="search-mark"/></div>
                <div className="user">
                    <img src="pictures/new2.png" alt="" className="newsd"/>
                    <img src="pictures/user1.png" alt="" className="user-profile"/>
                    <span className="user-name">Coco</span>
                </div>
            </div>
        </div>
        )
    }
}
