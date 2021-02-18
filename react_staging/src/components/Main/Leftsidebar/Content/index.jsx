import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Content extends Component {
    render() {
        return (
            <ul className="l-content">
                <li>
                    <img src="pictures/l-logo3.png" alt=""/>
                    <a href="#!" className="l-content-item">其他内容</a>
                </li>
                <li>
                    <img src="pictures/l-logo4.png" alt=""/>
                    <a href="#!" className="l-content-item">其他内容</a>
                </li>
                <li>
                    <img src="pictures/l-logo5.png" alt=""/>
                    <Link to='/class' className="l-content-item">我的班级</Link>
                </li>
                <li>
                    <img src="pictures/l-logo6.png" alt="" className="l-content-item"/>
                    <a href="#!" className="l-content-item">其他内容</a>
                </li>
            </ul>
        )
    }
}
