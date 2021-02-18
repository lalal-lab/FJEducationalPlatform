import React, { Component } from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import axios from 'axios'
import Teacher from './Teacher'
import Parent from './Parent'
import Student from './Student'
import Search from './Search'
export default class ClassMenber extends Component {
    state = {teacherName:[],studentName:[],parentName:[],searchName:''}
    changeColor=(event)=>{
        var buttons=document.getElementsByClassName("menber-item")
            for(var i = 0 ; i<buttons.length;i++)
           {
            buttons[i].style.background = "#f5f5f5"
            buttons[i].style.color = "black"
           }
            event.target.style.background= "white"
            event.target.style.color= "#3ba8f0"
    }

    render() {
        const {id}=this.props.match.params;
        const {teacherName,studentName,parentName} = this.state
        
        axios.get(`http://localhost:3004/comments/${id}`)
        .then( response=> {
            if((teacherName.length+studentName.length+parentName.length)<(response.data.teacherName.length+response.data.studentName.length+response.data.parentName.length))
                this.setState({
                    teacherName:response.data.teacherName,
                    studentName:response.data.studentName,
                    parentName:response.data.parentName,
                })
        })
        
        return (
        <div className="classmenber">
            
            <div className="mainhead">
                
                <span className="main-title">我的班级</span>
                <button className="return" onClick={()=>this.props.history.replace('/calss')}>
                        返回上一级
                </button>
            </div>
            <div className="class-title clearfix">
                <h1 className="class-name">折纸兴趣班</h1>
                <form action="">
                    <div className="searchbox">
                        <input type="text" onChange={()=>{this.setState({searchName:document.getElementById('searchName').value})}} placeholder="快捷查找" className="search-name" id="searchName" />
                        <Link to={`/class/${id}/search/${id}/${this.state.searchName}`}><button className="searchbutton"></button></Link>
                    </div>
                </form>
            </div>
            <div className="menber-info">
                <div className="menber-box">
                    <div className="menber-chose">
                        <Link to={`/class/${id}/teacher/${id}`}><button onClick={this.changeColor} className="menber-item">所有老师({teacherName.length})</button></Link>
                        <Link to={`/class/${id}/student/${id}`}><button onClick={this.changeColor} className="menber-item">所有学生({studentName.length})</button></Link>
                        <Link to={`/class/${id}/parent/${id}`}><button onClick={this.changeColor} className="menber-item">所有家长({parentName.length})</button></Link>
                    </div>
                    <Switch>
                    <Route path={`/class/${id}/teacher/:id`} component={Teacher}/>
                    <Route path={`/class/${id}/student/:id`} component={Student}/>
                    <Route path={`/class/${id}/parent/:id`} component={Parent}/>
                    <Route path={`/class/${id}/search/:id/:searchName`} component={Search}/>
                    </Switch>

                </div>
            </div>
        </div>
        )
    }
}
