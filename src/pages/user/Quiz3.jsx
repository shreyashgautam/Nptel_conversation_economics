import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const originalQuizData = [
  {
    question: "___ is used to identify which potential impacts are relevant to assess. (Fill in the blank)",
    options: ["screening", "scoping", "reporting", "review"],
    correctAnswer: "scoping",
  },
  {
    question: "“the potential or capacity of a material to have adverse effects on living organisms” is",
    options: ["vulnerability", "susceptibility", "sustainability", "toxicity"],
    correctAnswer: "toxicity",
  },
  {
    question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with soil and                      species of deciduous forest planted again. This is an example of",
    options: ["recovery", "restoration", "enhancement", "replacement"],
    correctAnswer: "restoration",
  },
  {
    question: "Hydrocarbons derived from incomplete burning of mineral oils are",
    options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
    correctAnswer: "pyrogenic hydrocarbons",
  },
  {
    question: "A deciduous forest in Madhya Pradesh was converted to a mine. After the mining operations were over, the pits were filled up with water and a               lake was created. It is now visited by several migratory birds. This is an example of",
    options: ["recovery", "restoration", "enhancement", "replacement"],
    correctAnswer: "replacement",
  },
  {
    question: "“the relative effect of exposure” is",
    options: ["vulnerability", "sensitivity", "sustainability", "toxicity"],
    correctAnswer: "sensitivity",
  },
  {
    question: "___ determines which projects or developments require a full or partial impact assessment study. (Fill in the blank)",
    options: ["screening", "scoping", "reporting", "review"],
    correctAnswer: "screening",
  },
  {
    question: "“the extent to which a chemical is available for uptake into an organism” is",
    options: ["bioavailability", "bioaccumulation", "biomagnification", "bioresponse"],
    correctAnswer: "bioavailability",
  },
  {
    question: "Hydrocarbons derived from biological processes acting on mineral oils are",
    options: ["petrogenic hydrocarbons", "pyrogenic hydrocarbons", "biogenic hydrocarbons", "chemoenic hydrocarbons"],
    correctAnswer: "biogenic hydrocarbons",
  },
  {
    question: "“Any changes in natural or human systems that inadvertently increase vulnerability to climatic stimuli; an adaptation that does not succeed in                reducing vulnerability but increases it instead” is a definition for",
    options: ["adaptation", "mitigation", "maladaptation", "malmitigation"],
    correctAnswer: "maladaptation",
  },
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
              🌐 Week 3 Quiz
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
