import React, { Component } from 'react'

export default class StudentCard extends Component {
    
    render() {
        const {name} = this.props
        return (
            <div className="teacherbox">
            <div className="menber-card-box">
                <div className="menber-card-item"> 
                    <span className="menber-admin">学生</span>
                    {/* <span className="menber-job">学生</span> */}
                </div>
                <div className="menber-card-name">
                    <span>{name}</span>
                </div>
            </div>
        </div>
        )
    }
}
