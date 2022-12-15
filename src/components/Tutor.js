import React, { Component } from'react'


class Tutor extends Component{
    constructor(props){
        super(props)
        const {name, fullName, department, knowledgeContribution} = this.props
        this.state = {
            name:name,
            fullName:"",
            department:"",
            knowledgeContribution:"",
        }

    }

    describeClickHandler = () => {
        this.setState({
            fullName:this.props.fullName,
            department:this.props.department,
            knowledgeContribution:this.props.knowledgeContribution,
        })
    }


    render(){
        const {name, fullName, department, knowledgeContribution, age} = this.state
        return(
            <div>
                <h1>{name}<button onClick={this.describeClickHandler}>Know More</button></h1>
                <p>Full Name: {fullName}</p>
                <p>Department: {department}</p>
                <p>Knowledge Contribution: {knowledgeContribution}</p>
            </div>
        )            
    }
}

export default Tutor;