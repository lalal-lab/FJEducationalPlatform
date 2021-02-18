import React, { Component } from 'react'
import axios from 'axios'
import TeacherCard from './TeacherCard'
import {nanoid} from 'nanoid'
export default class Teacher extends Component {
    state = {teacherName:[],classList:[]}
    shouldComponentUpdate() {
        return !this.state.isLoaded
    } 
    render() {
        const {id}=this.props.match.params;
        const _this=this; 

        axios.get(`http://localhost:3004/comments/${id}`)
        .then(function (response) {
          _this.setState({
           teacherName:response.data.teacherName,
           isLoaded:true
          })
        })
        const {teacherName} = this.state

        

        return (
                <div>
                {                        
                teacherName.map((teachers)=>{
                    return  <TeacherCard key={nanoid()} name={teachers}/>
                })}
                </div>
        )
    }
}
