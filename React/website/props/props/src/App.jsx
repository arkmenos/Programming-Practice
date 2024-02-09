import Student from "./Student"

function App() {

  return (
    <>
      <Student name="SpongeBob" age={30} isStudent={true}/>
      <Student name="Patrick" age={35} isStudent={false}/>
      <Student name="Squidward" age={49} isStudent={false}/>
      <Student name="Sandy" age={25} isStudent={true}/>
      <Student></Student>
    </>
  )
}

export default App
