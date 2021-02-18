import React, { Component } from 'react'

export default class ClassCard extends Component {
    render() {
        const {name,grade,headTeacher,number,isAdClass} = this.props
        return (
            <div className="class-card-box"> 
            <img src="pictures/class.png" alt="" className="class-card-picture"/>
            <div className="class-card-info">
            <ul>                 
                    <li><span className="class-card-txt">{grade}</span></li>
                    <li>班级：<span className="class-card-txt">{name}</span></li>
                    <li>班主任：<span className="class-card-txt">{headTeacher}</span></li>
                    <li>学生：<span className="class-card-txt">{number}人</span></li>
                </ul>
            </div>
            {
                isAdClass ? <div className="class-card-mark">行政班</div>:''
            }
        </div>
        )
    }
}
