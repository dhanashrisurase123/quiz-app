import { useSelector } from "react-redux";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Result from "./components/Result";

function App() {
   const { started, submitted } = useSelector(state => state.quiz);

  if (!started) return <StartQuiz />;
  return (
    <>
      {!submitted && <Timer />}
      <Quiz />
      <Result />
    </>
  );
}

export default App;
