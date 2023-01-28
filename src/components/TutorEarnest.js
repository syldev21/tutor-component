import React from 'react'

function TutorEarnest(props) {
  const {moreInfoHandler} = props
    return (
      <div>
        <h2>Earnest
          <button onClick=
            {() => moreInfoHandler
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
