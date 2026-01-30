import { useDispatch } from "react-redux";
import { startQuiz } from "../store/quizSlice";

function StartQuiz() {
  const dispatch = useDispatch();

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 text-center quiz-card">
        <h2 className="mb-3">📝 React Quiz</h2>
        <p className="text-muted">
          Test your React & Redux knowledge.  
          You have limited time to complete the quiz.
        </p>

        <ul className="list-group list-group-flush text-start mb-3">
          <li className="list-group-item">✔ 10 Multiple Choice Questions</li>
          <li className="list-group-item">✔ 2 Minutes Time Limit</li>
          <li className="list-group-item">✔ Auto Submit on Time End</li>
        </ul>

        <button
          className="btn btn-primary btn-lg mt-3"
          onClick={() => dispatch(startQuiz())}
        >
          Start Test
        </button>
      </div>
    </div>
  );
}

export default StartQuiz;
