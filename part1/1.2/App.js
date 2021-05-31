import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content ef={part1} fg={part2} gh={part3} hi={exercises1} ij={exercises2} jk={exercises3} />
      <Total tl={exercises1+exercises2+exercises3}/>
    </div>  )
}

const Header=course=>{
  return(
    <div>
      <h1>{course.course}</h1>
    </div>
  );
}
const Content=details=>{
  return(
    <div>
      
        <Part P={details.ef} tl={details.hi}/>
     
      
        <Part P={details.fg} tl={details.ij}/>
      
     
        <Part P={details.gh} tl={details.jk}/>
      
    </div>
  )
}
const Part=prop=>{
  return(
    <p>{prop.P} {prop.E}</p>
  )
}

const Total=total=>{
  return(
    <div>
      <p>No:Of:Exercises:{total.tl}</p>
    </div>
  )
}

export default App