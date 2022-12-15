import React from 'react'

function TutorSylvester(props) {
  const {fullName, department, knowledgeContribution} = props
  return (
    <div>
      <h2>Sylvester
        <button onClick=
          {() => props.moreInfoHandler
            (
              'Sylvester',
              'Sylvester Ouma',
              'Software Engineering',
              'Syntactic'
            )
          }>
            More?
        </button>
      </h2>
    </div>
  )
}

export default TutorSylvester
