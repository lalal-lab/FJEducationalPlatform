import React, { Component } from 'react'

export default class SearchCard extends Component {
    
    render() {
        const {name} = this.props
        return (
            <div className="teacherbox">
            <div className="menber-card-box">
                <div className="menber-card-item"> 
                    {/* <span className="menber-admin">家长</span> */}
                    {/* <span className="menber-job"></span> */}
                </div>
                <div className="menber-card-name">
                    <span>{name}</span>
                </div>
            </div>
        </div>
        )
    }
}
