import React from 'react'

function TutorEarnest(props) {
  const {fullName, department, knowledgeContribution} = props
    return (
      <div>
        <h2>Earnest
          <button onClick=
            {() => props.moreInfoHandler
              (
                'Earnest',
                'Earnest Achayo',
                'Database Engineering',
                'Easy Database Audit'
              )
            }>
              More?
          </button>
        </h2>
      </div>
    )
}

export default TutorEarnest
