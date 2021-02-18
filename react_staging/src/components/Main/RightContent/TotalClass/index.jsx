import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {nanoid} from 'nanoid'
import axios from 'axios'
import ClassCard from './ClassCard'
export default class TotalClass extends Component {
    state = {classList:
        [{id:{},name:{},grade:{},headTeacher:{},number:{},isAdClass:{}},
]}

    render() {

          
        
        axios.get('http://localhost:3004/posts')
        .then(response=> {
            if(response.data.length > this.state.classList.length)
            {
                this.setState({
                classList:response.data,
                });
             }
        })
        .catch(error=>{
        })
        
        
        const {classList} = this.state
        return (
            <div className="totalclass" >
                <div className="mainhead">
                    <span className="main-title" >我的班级</span>
                    <Link to='/newClass'>
                    <button className="newclass-button">
                            创建班级
                    </button>
                    </Link>

                </div>
                <div className="class-info clearfix" >
                    <h1 className="class-card-title" >行政班是为学生管理和教学管理而设置的班级</h1>
                    {
                        classList.map( classLists => {
                        if(classLists.isAdClass === true || classLists.isAdClass === 'true')
                        return <Link to={{pathname:`/class/${classLists.id}`}} key={nanoid()}><ClassCard key={classLists.id} {...classLists}  /></Link>
                        else
                        return ''
                    })}
                </div>

                <div className="class-info clearfix" >
                    <h1 className="class-card-title" >教学班是根据课程教学要求而设置的班级</h1>
                    {
                        classList.map( classLists => {
                        if(classLists.isAdClass === false || classLists.isAdClass === 'false' )
                        return <Link to={{pathname:`/class/${classLists.id}`}} key={nanoid()}><ClassCard key={classLists.id} {...classLists}  /></Link>
                        else return ''
                    })}
                </div>
            </div>
        )
    }
}
