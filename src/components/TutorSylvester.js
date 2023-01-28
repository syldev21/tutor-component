import React from 'react'

function TutorSylvester(props) {
  const {moreInfoHandler} = props
  return (
    <div>
      <h2>Sylvester
        <button onClick=
          {() => moreInfoHandler
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
