import React, { Component } from 'react'
import axios from 'axios'
import ParentCard from './ParentCard'
import {nanoid} from 'nanoid'
export default class Parent extends Component {
    state = {classList:[],parentName:[]}
    shouldComponentUpdate() {
        return !this.state.isLoaded
    } 
    render() {
        const {id}=this.props.match.params;
        const _this=this; 

        axios.get(`http://localhost:3004/comments/${id}`)
        .then(function (response) {
          _this.setState({
           parentName:response.data.parentName,
           isLoaded:true
          })
        })
        const {parentName} = this.state
        return (
            
            <div>
            {                        
            parentName.map((parents)=>{
                return  <ParentCard key={nanoid()} name={parents}/>
            })}
            </div>
        )
    }
}
