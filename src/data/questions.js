const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "Backend framework",
      "JavaScript library",
      "Database",
      "Operating system"
    ],
    correctAnswer: "JavaScript library"
  },
  {
    id: 2,
    question: "What is JSX in React?",
    options: [
      "JavaScript XML",
      "JSON format",
      "HTML only",
      "CSS preprocessor"
    ],
    correctAnswer: "JavaScript XML"
  },
  {
    id: 3,
    question: "Which hook is used to manage state in a functional component?",
    options: [
      "useEffect",
      "useRef",
      "useState",
      "useMemo"
    ],
    correctAnswer: "useState"
  },
  {
    id: 4,
    question: "What is Redux mainly used for?",
    options: [
      "Routing",
      "State management",
      "Styling UI",
      "Form validation"
    ],
    correctAnswer: "State management"
  },
  {
    id: 5,
    question: "Which method is used to dispatch actions in Redux?",
    options: [
      "send()",
      "emit()",
      "dispatch()",
      "trigger()"
    ],
    correctAnswer: "dispatch()"
  },
  {
    id: 6,
    question: "What does useEffect hook do?",
    options: [
      "Handles events",
      "Manages side effects",
      "Creates components",
      "Updates Redux store"
    ],
    correctAnswer: "Manages side effects"
  },
  {
    id: 7,
    question: "Which library connects React with Redux?",
    options: [
      "redux-thunk",
      "react-redux",
      "redux-saga",
      "axios"
    ],
    correctAnswer: "react-redux"
  },
  {
    id: 8,
    question: "What is the default state container for Redux?",
    options: [
      "Component state",
      "Props",
      "Store",
      "Context API"
    ],
    correctAnswer: "Store"
  },
  {
    id: 9,
    question: "Which hook is used to access Redux state in React?",
    options: [
      "useState",
      "useEffect",
      "useDispatch",
      "useSelector"
    ],
    correctAnswer: "useSelector"
  },
  {
    id: 10,
    question: "What happens when the quiz timer reaches zero?",
    options: [
      "Quiz resets",
      "User logged out",
      "Quiz auto-submits",
      "Timer restarts"
    ],
    correctAnswer: "Quiz auto-submits"
  }
];

export default questions;
