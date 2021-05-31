import React from 'react'

const App = () => {
  const course = 'mea(r)n'
  const part1 = 'intro to react'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header g={course} />
      <Content ef={part1} fg={part2} gh={part3} hi={exercises1} ij={exercises2} jk={exercises3} />
      <Total Tl={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=prop=>{
  return(
    <div>
      <h1>{prop.g}</h1>
    </div>
  );
}
const Content=props=>{
  return(
    <div>
      <p>
        {props.ef} {props.fg}
      </p>
      <p>
        {props.gh} {props.hi}
      </p>
      <p>
        {props.ij} {props.jk}
      </p>
    </div>
  )
}

const Total=tl=>{
  return(
    <div>
      <p>No:Of:Exercises:{tl.Tl}</p>
    </div>
  )
}
export default App