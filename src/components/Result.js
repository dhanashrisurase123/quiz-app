import { useSelector } from "react-redux";

function Result() {
  const { score, questions, submitted } = useSelector(state => state.quiz);

  if (!submitted) return null;

  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4 text-center result-card">
        <h2 className="mb-3">🎉 Quiz Completed</h2>

        <h3 className="text-success">
          Score: {score} / {questions.length}
        </h3>

        <h5 className="mt-2">Percentage: {percentage}%</h5>

        <div
          className={`alert mt-3 ${
            percentage >= 50 ? "alert-success" : "alert-danger"
          }`}
        >
          {percentage >= 50 ? "✅ Passed" : "❌ Failed"}
        </div>
      </div>
    </div>
  );
}

export default Result;
