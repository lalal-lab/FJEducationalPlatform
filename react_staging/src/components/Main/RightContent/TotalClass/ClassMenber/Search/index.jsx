import React, { Component } from 'react'
import axios from 'axios'
import {nanoid} from 'nanoid'
import TeacherCard from '../Teacher/TeacherCard'
import StudentCard from '../Student/StudentCard'
import ParentCard from '../Parent/ParentCard'
export default class Search extends Component {
    state = {teacherName:[],studentName:[],parentName:[],searchName:''}

    render() {
        const {id,searchName}=this.props.match.params;
        axios.get(`http://localhost:3004/comments/${id}`)
        .then( response=> {
            if(searchName !== this.state.searchName)
                this.setState({
                    teacherName:response.data.teacherName,
                    studentName:response.data.studentName,
                    parentName:response.data.parentName,
                    searchName:searchName
                })
        })
        const {teacherName,studentName,parentName} = this.state
        const long = teacherName.length+studentName.length+parentName.length
        var isNull = 0
        var test = new RegExp(searchName , "g")
        return (
            <div>
            {                        
            teacherName.map((teachers)=>{
                if(test.test(teachers))
                {   
                    return  <TeacherCard key={nanoid()} name={teachers}/>
                }
                else {
                    isNull++
                    return ''
                }
            })}
            {                        
            studentName.map((students)=>{
                if(test.test(students))
                {
                    return  <StudentCard key={nanoid()} name={students}/>
                }
                else {
                    isNull++
                    return ''
                }
            })}
            {                        
            parentName.map((parents)=>{
                if(test.test(parents))
                {
                    return  <ParentCard key={nanoid()} name={parents}/>
                }
                else {
                    isNull++
                    return ''
                }
            })
            }
            {   
                (isNull===long&&isNull>0)?<span>查无此人</span>:""
            }
            </div>
        )
    }
}