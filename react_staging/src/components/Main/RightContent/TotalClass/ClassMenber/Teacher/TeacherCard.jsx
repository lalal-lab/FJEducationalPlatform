import React, { Component } from 'react'

export default class TeacherCard extends Component {
    
    render() {
        const {name} = this.props
        return (
            <div className="teacherbox">
            <div className="menber-card-box">
                <div className="menber-card-item"> 
                    <span className="menber-admin">管理员</span>
                    <span className="menber-job">物理老师</span>
                </div>
                <div className="menber-card-name">
                    <span>{name}</span>
                </div>
            </div>
        </div>
        )
    }
}
