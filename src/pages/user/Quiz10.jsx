import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const originalQuizData = [

  {
    question: "“an absolute level of income set by the government for each family size below which a family is deemed to be in poverty” is known as",
    options: ["deprivation line", "poverty line", "deprivation index", "poverty index"],
    correctAnswer: "poverty line"
  },
  {
    question: "Absolute poverty depends",
    options: [
      "on income but not on access to social services",
      "not on income but on access to social services",
      "on income and on access to social services",
      "neither on income nor on access to social services"
    ],
    correctAnswer: "on income and on access to social services"
  },
  {
    question: "“the equipment and structures used to produce goods and services” is the definition of",
    options: ["tools", "machinery", "capital", "factors of production"],
    correctAnswer: "capital"
  },
  {
    question: "“above-equilibrium wages paid by firms to increase worker productivity” are known as",
    options: ["compensating wage", "efficiency wage", "productivity wage", "retention wage"],
    correctAnswer: "efficiency wage"
  },
  {
    question: "“government policy aimed at protecting people against the risk of adverse events” is",
    options: ["Social protection", "Social insurance", "Social security", "Socialism"],
    correctAnswer: "Social insurance"
  },
  {
    question: "“a difference in wages that arises to offset the non-monetary characteristics of different jobs” is known as",
    options: [
      "differentiating differential",
      "compensating differential",
      "differentiating integral",
      "compensating integral"
    ],
    correctAnswer: "compensating differential"
  },
  {
    question: "For a competitive and profit-maximising firm,",
    options: [
      "each factor’s rental price < the value of the marginal product for that factor",
      "each factor’s rental price = the value of the marginal product for that factor",
      "each factor’s rental price > the value of the marginal product for that factor",
      "each factor’s rental price = the value of the average product for that factor"
    ],
    correctAnswer: "each factor’s rental price = the value of the marginal product for that factor"
  },
  {
    question: "“a condition characterised by severe deprivation of basic human needs, including food, safe drinking water, sanitation facilities, health, shelter, education and information” is known as",
    options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
    correctAnswer: "absolute poverty"
  },
  {
    question: "“a condition where a household’s income is lower than the median income in the particular country” is known as",
    options: ["absolute poverty", "relative poverty", "median poverty", "poverty line"],
    correctAnswer: "relative poverty"
  },
  {
    question: "“the increase in the amount of output from an additional unit of labor” is",
    options: [
      "marginal product of labour",
      "marginal product of input",
      "average product of labour",
      "average product of input"
    ],
    correctAnswer: "marginal product of labour"
  }
];


const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

const QuizPage1 = () => {
  const [shuffledQuiz, setShuffledQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledQuestions = shuffleArray(originalQuizData).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuiz(shuffledQuestions);
    setAnswers(Array(shuffledQuestions.length).fill(''));
    setLoading(false);
  }, []);

  const handleOptionSelect = (qIndex, option) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[qIndex] = option;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    let total = 0;
    answers.forEach((ans, i) => {
      if (ans === shuffledQuiz[i].correctAnswer) total += 1;
    });
    setScore(total);
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleReset = () => {
    const reshuffledQuestions = shuffleArray(originalQuizData).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuiz(reshuffledQuestions);
    setAnswers(Array(reshuffledQuestions.length).fill(''));
    setSubmitted(false);
    setScore(0);
    setShowToast(false);
  };

  const handleNavigate = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6 sm:p-10 relative">
      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50 font-semibold text-lg ${
              score > 8 ? 'bg-green-600 text-white' : 'bg-yellow-500 text-black'
            }`}
          >
            {score > 8
              ? `🎉 Doing well! You scored ${score}/${shuffledQuiz.length}`
              : `📘 Needs more practice. You scored ${score}/${shuffledQuiz.length}`}
          </motion.div>
        )}
      </AnimatePresence>

      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center z-20">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-solid"></div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="flex justify-between items-center mb-10">
            <button
              onClick={handleNavigate}
              className="bg-blue-600 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Go to Dashboard
            </button>
            <h1 className="text-4xl font-bold text-blue-400 text-center">
              🌐 Week 10 Quiz
            </h1>
          </div>

          {/* Score at top */}
          {submitted && (
            <div className="text-center text-xl font-semibold text-yellow-400">
              🎯 You scored {score} out of {shuffledQuiz.length}
            </div>
          )}

          {shuffledQuiz.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.correctAnswer;

            return (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Q{index + 1}. {q.question}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {q.options.map((option, optIndex) => {
                    const selected = userAnswer === option;
                    let style =
                      "p-3 rounded-lg border text-sm sm:text-base cursor-pointer transition-all duration-200";

                    if (submitted) {
                      if (selected && option === q.correctAnswer)
                        style += " border-green-500 bg-green-800";
                      else if (selected && option !== q.correctAnswer)
                        style += " border-red-500 bg-red-800";
                      else if (option === q.correctAnswer)
                        style += " border-green-500 bg-green-900";
                      else style += " border-gray-700 bg-gray-800";
                    } else {
                      style += selected
                        ? " border-blue-500 bg-blue-800"
                        : " border-gray-700 hover:bg-gray-800";
                    }

                    return (
                      <div
                        key={optIndex}
                        onClick={() => handleOptionSelect(index, option)}
                        className={style}
                      >
                        {option}
                      </div>
                    );
                  })}
                </div>

                {submitted && (
                  <p
                    className={`mt-4 font-semibold ${
                      isCorrect ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {isCorrect
                      ? "✅ Correct!"
                      : `❌ Incorrect. Correct answer: ${q.correctAnswer}`}
                  </p>
                )}
              </div>
            );
          })}

          <div className="text-center mt-8 space-x-4">
            {!submitted ? (
              <button
                onClick={handleSubmit}
                className="bg-blue-600 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="bg-green-600 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-green-700 transition"
              >
                Retake Quiz
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage1;
