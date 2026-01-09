import Student from "./Student.jsx";
import Button from "./button.jsx";

function App() {
  return (
    <>
      <Student name="John Doe" age={20} isStudent={true} />
      <Button />
    </>
  );
}

export default App;