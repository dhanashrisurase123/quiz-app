import { useSelector, useDispatch } from "react-redux";
import { selectAnswer, submitQuiz } from "../store/quizSlice";

function Quiz() {
  const { questions, answers, submitted } = useSelector(state => state.quiz);
  const dispatch = useDispatch();

  if (submitted) return null;

  return (
    <div className="container mt-4">
      {questions.map((q, index) => (
        <div key={q.id} className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title">
              Q{index + 1}. {q.question}
            </h5>

            {q.options.map((opt) => (
              <div className="form-check mt-2" key={opt}>
                <input
                  className="form-check-input"
                  type="radio"
                  name={`q-${q.id}`}
                  checked={answers[q.id] === opt}
                  onChange={() =>
                    dispatch(selectAnswer({ questionId: q.id, answer: opt }))
                  }
                />
                <label className="form-check-label">
                  {opt}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="text-center">
        <button
          className="btn btn-success btn-lg"
          onClick={() => dispatch(submitQuiz())}
        >
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default Quiz;
