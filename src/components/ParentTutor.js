import React, { Component } from 'react'
import TutorEarnest from './TutorEarnest'
import TutorSeth from './TutorSeth'
import TutorSylvester from './TutorSylvester'
import 'materialize-css/dist/css/materialize.min.css'

class ParentTutor extends Component {
    constructor(props) {
      super(props)
      const {name} = this.props
    
      this.state = {
        about:'About',
        name:name,
        fullName:"",
        department:"",
        knowledgeContribution:"",
      }
      this.moreInfo = this.moreInfo.bind(this)
    }

    moreInfo(name, fullName, department, knowledgeContribution){
        this.setState({
            name:name,
            fullName:fullName,
            department:department,
            knowledgeContribution:knowledgeContribution,
        })
    }
    
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s4'>
           <TutorSeth moreInfoHandler={this.moreInfo}/>
          </div>
          <div className='col s4'>
          <TutorSylvester moreInfoHandler={this.moreInfo}/>
          </div>
          <div className='col s4'>
          <TutorEarnest moreInfoHandler={this.moreInfo}/>
          </div>
        </div>
        <h2>{this.state.about} {this.state.name}</h2>
        <p>Full Name: {this.state.fullName}</p>
        <p>Department: {this.state.department}</p>
        <p>Knowledge Contribution: {this.state.knowledgeContribution}</p>
      </div>
    )
  }
}

export default ParentTutor
