import React, { Component } from 'react'
import axios from 'axios'
import StudentCard from './StudentCard'
import {nanoid} from 'nanoid'
export default class Student extends Component {
    state = {classList:[],studentName:[]}
    shouldComponentUpdate() {
        return !this.state.isLoaded
    } 
    render() {
        const {id}=this.props.match.params;
        const _this=this; 

        axios.get(`http://localhost:3004/comments/${id}`)
        .then(function (response) {
          _this.setState({
           studentName:response.data.studentName,
           isLoaded:true
          })
        })
        const {studentName} = this.state

        return (
            <div>
            {                        
            studentName.map((students)=>{
                return  <StudentCard key={nanoid()} name={students}/>
            })}
            </div>
        )
    }
}
