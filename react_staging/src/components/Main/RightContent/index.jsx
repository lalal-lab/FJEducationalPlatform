import React, { Component } from 'react'
import {Route,Redirect,Switch} from 'react-router-dom'
import TotalClass from './TotalClass'
import NewClass from './TotalClass/NewClass'
import ClassMenber from './TotalClass/ClassMenber'
export default class RightContent extends Component {

    render() {
        
        return (
        <div className="ep-rightcontent">
            <div className="myclass">
                

                <Switch>
                            
							<Route Route exact={true} path='/class' component={TotalClass}/>
                            <Route path='/newClass' component={NewClass} />
                            <Route path={`/class/:id`} component={ClassMenber} />
                            
							<Redirect to='/class'/>
				</Switch>
            </div>
        </div>
        )
    }
}
