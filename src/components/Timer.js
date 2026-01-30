import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuiz } from "../store/quizSlice";

function Timer() {
  const [time, setTime] = useState(120);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev === 1) {
          dispatch(submitQuiz());
          clearInterval(interval);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alert alert-warning text-center fw-bold">
      ⏰ Time Left: {Math.floor(time / 60)}:
      {(time % 60).toString().padStart(2, "0")}
    </div>
  );
}

export default Timer;
