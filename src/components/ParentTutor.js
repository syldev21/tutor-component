import React, { Component } from 'react'
import TutorEarnest from './TutorEarnest'
import TutorSeth from './TutorSeth'
import TutorSylvester from './TutorSylvester'

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
      <div>
        <TutorSeth moreInfoHandler={this.moreInfo}/>
        <br />
        <TutorSylvester moreInfoHandler={this.moreInfo}/>
        <br />
        <TutorEarnest moreInfoHandler={this.moreInfo}/>
        <br />
        <h2>{this.state.about} {this.state.name}</h2>
        <p>Full Name: {this.state.fullName}</p>
        <p>Department: {this.state.department}</p>
        <p>Knowledge Contribution: {this.state.knowledgeContribution}</p>
      </div>
    )
  }
}

export default ParentTutor
