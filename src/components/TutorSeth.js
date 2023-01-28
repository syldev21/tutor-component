import React from 'react'

function TutorSeth(props) {
  const {moreInfoHandler} = props
  return (
    <div>
      <h2>Seth
        <button onClick=
          {() => moreInfoHandler
            (
              'Seth',
              'Seth Okeyo',
              'Systems Security',
              'Going the Bitwise way'
            )
          }>
            More?
        </button>
      </h2>
    </div>
  )
}

export default TutorSeth
