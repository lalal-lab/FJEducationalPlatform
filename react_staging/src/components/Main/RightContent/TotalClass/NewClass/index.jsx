import React, { Component } from 'react'
import axios from 'axios'
export default class NewClass extends Component {
    state = {classList:
        [{id:{},name:{},grade:{},headTeacher:{},number:{},isAdClass:{}},

]}
    newClass = () =>{
        const schoolName = document.getElementById("input-school").value
        const name = document.getElementById("input-clname").value
        if(document.getElementById("level").value ==="")
        { 
            alert("请选择学段")
            return
        }
        else if(document.getElementById("grade").value ==="")
        {
            alert("请选择年级")
            return
        }
        else if(name === ""){
            alert("班级名不能为空")
            return
        }
        else if(name.indexOf('%')>=0 || name.indexOf('_')>=0)
        {
            alert("班级名不支持输入%或_")
            return
        }
        else if(name.length >20)
        {
            alert("班级名不支持超过二十个字符")
            return
        }
        const grade = document.getElementById("level").value + (document.getElementById("grade").value === '一年级'?'-2015级':(document.getElementById("grade").value ==='二年级'?'-2014级':'-2013级'))
        const headTeacher = '刘老师'
        
        var obj = document.getElementsByName('input-kind')
        var item
        for (let i = 0; i < obj.length; i++) {  
            if (obj[i].checked) {
                item = obj[i].value;                   
            }
        }
        const isAdClass = item
        obj = document.getElementsByName('input-out')
        for (let i = 0; i < obj.length; i++) {  
            if (obj[i].checked) {
                item = obj[i].value;                   
            }
        }
        const exitpermission = item
        axios.post('http://localhost:3004/posts',{"grade":grade,"name":name,"headTeacher":headTeacher,"number":0,"isAdClass":isAdClass,"schoolname":schoolName,"exitpermission":exitpermission})
        .then(response=>{
            axios.post('http://localhost:3004/comments',{"teacherName":['刘老师'],"studentName":[],"parentName":[]})    
            .then(response=>{})

        })

 
         this.props.history.replace(`/class`)
         
    }
    back = () =>{
        return this.props.history.replace('/calss')
    }
    shouldComponentUpdate() {
        
        return !this.state.isLoaded
    } 
    render() {
        const _this=this;    
        axios.get('http://localhost:3004/posts')
        .then(function (response) {
          _this.setState({
           classList:response.data,
           isLoaded:true
          });
        })
        
        
        return (
            <div className="newclass">
                <div className="mainhead">
                    <span className="main-title">我的班级</span>
                    <button className="return" onClick={this.back}>
                            返回上一级
                    </button>
                </div>
                <div className="input-info">
                    <div className="input-title">尊敬的<span className="wteacher">老师(刘老师)</span>，请填写班级信息：</div >
                    <form action="">
                        <div className="input-item">
                            <label htmlFor="input-school" className="input-school-label input-label">学校</label>
                            <input ref='school' type="text" placeholder="请选择学校" className="input-school-input input-input" id="input-school"/>
                        </div>  
                        <div className="input-item">
                            <label htmlFor="input-section" className="input-section-label input-label Required">学段</label>

                            <select className='input-section-input' ref='' name="" id="level" >
                                <option value="">请选择学段</option>
                                <option value="小学">小学</option>
                                <option value="初中">初中</option>
                                <option value="高中">高中</option>
                                <option value="大学">大学</option>
                            </select>
                        </div>
                        <div className="input-item">
                            <label htmlFor="input-grade" className="input-grade-label input-label Required">年级</label>

                            <select className='input-grade-input' ref='' name="" id="grade" >
                                <option value="">请选择年级</option>
                                <option value="一年级">一年级</option>
                                <option value="二年级">二年级</option>
                                <option value="三年级">三年级</option>
                            </select>
                        </div>
                        <div className="input-item">
                            <label htmlFor="input-clname" className="input-clname-label input-label Required">班级名</label>
                            <input type="text" placeholder="请输入班级名称，限20个字符，不支持输入_和%" className="input-clname-input input-input" id="input-clname"/>
                        </div>
                        <div className="input-item">
                            <label htmlFor="" className="input-kind-label input-label">类别</label>
                            <input id='kind1' defaultChecked type="radio" className="input-kind-input" name="input-kind" value='true'/>
                            <label className='radiolabel' htmlFor="kind1"></label>行政班
                            <input id='kind2' type="radio" className="input-kind-input" name="input-kind" value='false' />
                            <label className='radiolabel' htmlFor="kind2"></label>教学班
                        </div>
                        <div className="input-item">
                            <label htmlFor="" className="input-out-label input-label">退出权限设置</label>
                            <input id='out1' defaultChecked type="radio" className="input-out-input" name="input-out" value='allow'/>
                            <label className='radiolabel' htmlFor="out1"></label>允许退出
                            <input id='out2' type="radio" className="input-out-input" name="input-out" value='verify'/>
                            <label className='radiolabel' htmlFor="out2"></label>通过班级管理员审核后退出
                            <input id='out3' type="radio" className="input-out-input" name="input-out" value='forbid'/>
                            <label className='radiolabel' htmlFor="out3"></label>禁止退出
                        </div>
                        <div className="input-item">
                            <button className="class-save" onClick={()=>this.newClass()}>保存</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
