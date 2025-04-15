import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";

const originalQuizData = [
 
  {
    question: "In the word root for conservation, con stands for",
    options: ["together", "to keep", "house", "manage"],
    correctAnswer: "together",
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["environmental variation", "forest fire", "death rate", "diseases"],
    correctAnswer: "death rate",
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
    correctAnswer: "allelopathy",
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
    correctAnswer: "diffusion",
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
    options: [
      "Liebig’s law of the minimum",
      "Liebig’s law of the maximum",
      "Shelford’s law of tolerance",
      "Shelford’s law of intolerance"
    ],
    correctAnswer: "Shelford’s law of tolerance",
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "migration",
  },
  {
    question: "Which of these is a stochastic factor?",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    correctAnswer: "environmental fluctuation",
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "dispersal",
  },
  {
    question: "Scarcity of food is a",
    options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
    correctAnswer: "push factor",
  },
  {
    question: "In the word root for conservation, con stands for",
    options: ["together", "to keep", "house", "manage"],
    correctAnswer: "together",
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["environmental variation", "forest fire", "death rate", "diseases"],
    correctAnswer: "death rate",
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
    correctAnswer: "allelopathy",
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
    correctAnswer: "diffusion",
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
    options: [
      "Liebig’s law of the minimum",
      "Liebig’s law of the maximum",
      "Shelford’s law of tolerance",
      "Shelford’s law of intolerance"
    ],
    correctAnswer: "Shelford’s law of tolerance",
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "migration",
  },
  {
    question: "Which of these is a stochastic factor?",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    correctAnswer: "environmental fluctuation",
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "dispersal",
  },
  {
    question: "Scarcity of food is a",
    options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
    correctAnswer: "push factor",
  },
  {
    question: "In the word root for conservation, con stands for",
    options: ["together", "to keep", "house", "manage"],
    correctAnswer: "together",
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["environmental variation", "forest fire", "death rate", "diseases"],
    correctAnswer: "death rate",
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
    correctAnswer: "allelopathy",
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
    correctAnswer: "diffusion",
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
    options: [
      "Liebig’s law of the minimum",
      "Liebig’s law of the maximum",
      "Shelford’s law of tolerance",
      "Shelford’s law of intolerance"
    ],
    correctAnswer: "Shelford’s law of tolerance",
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "migration",
  },
  {
    question: "Which of these is a stochastic factor?",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    correctAnswer: "environmental fluctuation",
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "dispersal",
  },
  {
    question: "Scarcity of food is a",
    options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
    correctAnswer: "push factor",
  },

  {
    question: "In the word root for conservation, con stands for",
    options: ["together", "to keep", "house", "manage"],
    correctAnswer: "together",
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["environmental variation", "forest fire", "death rate", "diseases"],
    correctAnswer: "death rate",
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
    correctAnswer: "allelopathy",
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
    correctAnswer: "diffusion",
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
    options: [
      "Liebig’s law of the minimum",
      "Liebig’s law of the maximum",
      "Shelford’s law of tolerance",
      "Shelford’s law of intolerance"
    ],
    correctAnswer: "Shelford’s law of tolerance",
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "migration",
  },
  {
    question: "Which of these is a stochastic factor?",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    correctAnswer: "environmental fluctuation",
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "dispersal",
  },
  {
    question: "Scarcity of food is a",
    options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
    correctAnswer: "push factor",
  },{
    question: "In the word root for conservation, con stands for",
    options: ["together", "to keep", "house", "manage"],
    correctAnswer: "together",
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["environmental variation", "forest fire", "death rate", "diseases"],
    correctAnswer: "death rate",
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
    correctAnswer: "allelopathy",
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
    correctAnswer: "diffusion",
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
    options: [
      "Liebig’s law of the minimum",
      "Liebig’s law of the maximum",
      "Shelford’s law of tolerance",
      "Shelford’s law of intolerance"
    ],
    correctAnswer: "Shelford’s law of tolerance",
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "migration",
  },
  {
    question: "Which of these is a stochastic factor?",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    correctAnswer: "environmental fluctuation",
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "dispersal",
  },
  {
    question: "Scarcity of food is a",
    options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
    correctAnswer: "push factor",
  },

  {
    question: "In the word root for conservation, con stands for",
    options: ["together", "to keep", "house", "manage"],
    correctAnswer: "together",
  },
  {
    question: "Which of these is a deterministic factor?",
    options: ["environmental variation", "forest fire", "death rate", "diseases"],
    correctAnswer: "death rate",
  },
  {
    question: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
    options: ["autophagy", "allelophagy", "autopathy", "allelopathy"],
    correctAnswer: "allelopathy",
  },
  {
    question: "The movement of lions across the Gir landscape is an example of",
    options: ["diffusion", "secular dispersal", "jump dispersal", "drifting"],
    correctAnswer: "diffusion",
  },
  {
    question: "\"The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance.\" This is the statement for",
    options: [
      "Liebig’s law of the minimum",
      "Liebig’s law of the maximum",
      "Shelford’s law of tolerance",
      "Shelford’s law of intolerance"
    ],
    correctAnswer: "Shelford’s law of tolerance",
  },
  {
    question: "The regular, seasonal movement of animals, often along fixed routes is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "migration",
  },
  {
    question: "Which of these is a stochastic factor?",
    options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
    correctAnswer: "environmental fluctuation",
  },
  {
    question: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
    options: ["translocation", "migration", "dispersal", "drifting"],
    correctAnswer: "dispersal",
  },
  {
    question: "Scarcity of food is a",
    options: ["chemical factor", "demographic factor", "push factor", "pull factor"],
    correctAnswer: "push factor",
  },
  {
    question: "Which of these correctly represents the process of habitat fragmentation and loss?",
    options: [
      "Original forest → Dissection → Perforation → Fragmentation → Attrition",
      "Original forest → Dissection → Attrition → Fragmentation → Perforation",
      "Original forest → Dissection → Perforation → Attrition → Fragmentation",
      "Original forest → Dissection → Fragmentation → Perforation → Attrition"
    ],
    correctAnswer: "Original forest → Dissection → Perforation → Fragmentation → Attrition",
  },
  {
    question: "A root zone treatment plant is an example of",
    options: ["phytoremediation", "biological control", "biomagnification", "bioaccumulation"],
    correctAnswer: "phytoremediation",
  },
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
  {
    question: "\"a measure of the responsiveness of quantity demanded or quantity supplied to a change in one of its determinants\" is",
    options: ["elasticity", "responsivity", "demand-supply equilibrium", "pricing"],
    correctAnswer: "elasticity",
  },
  {
    question: "\"the ability to produce a good using fewer inputs than another producer\" is",
    options: ["comparative advantage", "absolute advantage", "production advantage", "resource advantage"],
    correctAnswer: "absolute advantage",
  },
  {
    question: "Common resource goods are",
    options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
    correctAnswer: "non-excludable, rival in consumption",
  },
  {
    question: "\"If private parties can bargain without cost over the allocation of resources, they can solve the problem of externalities on their own.\" This is a statement for",
    options: ["Allocation theorem", "Phillips theorem", "Coase theorem", "Nash theorem"],
    correctAnswer: "Coase theorem",
  },
  {
    question: "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs is known as",
    options: ["Good development", "Sustainable development", "Futuristic development", "Gandhian development"],
    correctAnswer: "Sustainable development",
  },
  {
    question: "Club goods are",
    options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
    correctAnswer: "excludable, non-rival in consumption",
  },
  {
    question: "Which of these is not a method of internalisation of externalities?",
    options: ["tradable pollution permits", "charities to social causes", "command-and-control policies", "free market"],
    correctAnswer: "free market",
  },
  {
    question: "Private goods are",
    options: ["excludable, rival in consumption", "non-excludable, rival in consumption", "excludable, non-rival in consumption", "non-excludable, non-rival in consumption"],
    correctAnswer: "excludable, rival in consumption",
  },
  {
    question: "\"a simplified description, especially a mathematical one, of a system or process, to assist calculations and predictions\" is the definition of a / an",
    options: ["equation", "model", "philosophy", "process dynamics"],
    correctAnswer: "model",
  },
  {
    question: "\"the impact of one person’s actions on the well-being of a bystander\" is",
    options: ["actor-observer effect", "externality", "internality", "benefits principle"],
    correctAnswer: "externality",
  },
  {
    question: "The claim that, other things being equal, the quantity demanded of a good falls when the price of the good rises” is a statement of",
    options: ["law of demand", "law of supply", "law of quantity demanded", "law of quantity supplied"],
    correctAnswer: "law of demand",
  },
  {
    question: "\"a legal maximum on the price at which a good can be sold\" is",
    options: ["price ceiling", "price floor", "selling ceiling", "selling floor"],
    correctAnswer: "price ceiling",
  },
  {
    question: "\"a good for which, other things being equal, an increase in income leads to a decrease in demand\" is",
    options: ["normal good", "inferior good", "Giffen good", "common good"],
    correctAnswer: "inferior good",
  },
  {
    question: "\"a table that shows the relationship between the price of a good and the quantity supplied\" is",
    options: ["demand table", "demand schedule", "supply table", "supply schedule"],
    correctAnswer: "supply schedule",
  },
  {
    question: "\"a graph of the relationship between the price of a good and the quantity demanded\" is",
    options: ["demand curve", "supply curve", "Laffer's curve", "Phillips curve"],
    correctAnswer: "demand curve",
  },
  {
    question: "\"a table that shows the relationship between the price of a good and the quantity demanded\" is",
    options: ["demand table", "demand schedule", "supply table", "supply schedule"],
    correctAnswer: "demand schedule",
  },
  {
    question: "\"a measure of how much the quantity demanded of one good responds to a change in the price of another good, computed as the percentage change in quantity demanded of the first good divided by the percentage change in price of the second good\" is",
    options: ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
    correctAnswer: "cross-price elasticity of demand",
  },
  {
    question: "Rice and wheat are",
    options: ["substitutes", "complements", "club goods", "public goods"],
    correctAnswer: "substitutes",
  },
  {
    question: "\"a good for which, other things being equal, an increase in income leads to an increase in demand\" is",
    options: ["normal good", "inferior good", "Giffen good", "common good"],
    correctAnswer: "normal good",
  },
  {
    question: "\"a measure of how much the quantity demanded of a good responds to a change in the price of that good, computed as the percentage change in quantity demanded divided by the percentage change in price\" is",
    options: ["price elasticity of demand", "income elasticity of demand", "cross-price elasticity of demand", "price elasticity of supply"],
    correctAnswer: "price elasticity of demand",
  },
  {
    question: "\"the price of a good that prevails in the world market for that good\" is the definition of",
    options: ["export price", "import price", "world price", "domestic price"],
    correctAnswer: "world price",
  },
  {
    question: "The area between the demand curve and the price is an indicator of",
    options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
    correctAnswer: "consumer surplus",
  },
  {
    question: "\"the amount a buyer is willing to pay for a good minus the amount the buyer actually pays for it\" is",
    options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
    correctAnswer: "consumer surplus",
  },
  {
    question: "\"the amount a seller is paid for a good minus the seller’s cost of providing it\" is",
    options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
    correctAnswer: "producer surplus",
  },
  {
    question: "Value to buyers - Cost to sellers is",
    options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
    correctAnswer: "total surplus",
  },
  {
    question: "\"the fall in total surplus that results from a market distortion, such as a tax\" is",
    options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
    correctAnswer: "deadweight loss",
  },
  {
    question: "Laffer's curve is the relationship between",
    options: ["inflation and unemployment", "tax size and tax revenue", "producer surplus and consumer surplus", "tax size and deadweight loss"],
    correctAnswer: "tax size and tax revenue",
  },
  {
    question: "Imposition of tariff",
    options: ["increases producer surplus and government revenue", "increases consumer surplus and government revenue", "increases producer surplus, consumer surplus and government revenue", "increases total surplus"],
    correctAnswer: "increases producer surplus and government revenue",
  },
  {
    question: "\"the maximum amount that a buyer will pay for a good\" is",
    options: ["willingness to pay", "market demand", "demand curve", "buyer’s surplus"],
    correctAnswer: "willingness to pay",
  },
  {
    question: "The area between the supply curve and the price is an indicator of",
    options: ["consumer surplus", "producer surplus", "total surplus", "deadweight loss"],
    correctAnswer: "producer surplus",
  },
  {
    question: "For a positive consumption externality,",
    options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
    correctAnswer: "SMB = PMB + MB",
  },
  {
    question: "For a positive production externality,",
    options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
    correctAnswer: "SMB = PMB",
  },
  {
    question: "\"The direct cost to producers of producing an additional unit of a good\" is",
    options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
    correctAnswer: "private marginal cost (PMC)",
  },
  {
    question: "For a negative production externality,",
    options: ["SMC = PMC + MD", "SMC = PMC - MD", "SMC = PMC", "SMC = PMC - MB"],
    correctAnswer: "SMC = PMC + MD",
  },
  {
    question: "\"The private marginal cost to producers plus any costs associated with the production of the good that are imposed on others\" is",
    options: ["private marginal cost (PMC)", "social marginal cost (SMC)", "private marginal benefit (PMB)", "social marginal benefit (SMB)"],
    correctAnswer: "social marginal cost (SMC)",
  },
  {
    question: "Partying with loud noise is an example of",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    correctAnswer: "negative consumption externality",
  },
  {
    question: "\"When an individual’s consumption increases the well-being of others, but the individual is not compensated by those others,\" we have",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    correctAnswer: "positive consumption externality",
  },
  {
    question: "\"When a firm’s production increases the well-being of others but the firm is not compensated by those others,\" we have",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    correctAnswer: "positive production externality",
  },
  {
    question: "\"When an individual’s consumption reduces the well-being of others who are not compensated by the individual,\" we have",
    options: ["negative production externality", "positive production externality", "negative consumption externality", "positive consumption externality"],
    correctAnswer: "negative consumption externality",
  },
  {
    question: "For a negative consumption externality,",
    options: ["SMB = PMB", "SMB = PMB − MD", "SMB = PMB + MB", "SMC = PMC / MD"],
    correctAnswer: "SMB = PMB − MD",
  },
  // Add 69 more questions here to make it 70
  {
    question: "Which of these is true?",
    options: [
      "Wants are unlimited, resources are unlimited",
      "Wants are limited, resources are limited",
      "Wants are unlimited, resources are limited",
      "Wants are limited, resources are unlimited",
    ],
    correctAnswer: "Wants are unlimited, resources are limited",
  },
  // Add more questions here...
];const shuffleArray = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
};

const FullTest = () => {
  const [shuffledQuiz, setShuffledQuiz] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [numQuestions, setNumQuestions] = useState(50);
  const [inputError, setInputError] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const shuffledQuestions = shuffleArray(originalQuizData)
      .slice(0, numQuestions)
      .map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));
    setShuffledQuiz(shuffledQuestions);
    setAnswers(Array(shuffledQuestions.length).fill(""));
    setSubmitted(false);
    setScore(0);
  }, [numQuestions]);

  const handleOptionSelect = (qIndex, option) => {
    if (!submitted) {
      const newAnswers = [...answers];
      newAnswers[qIndex] = option;
      setAnswers(newAnswers);
    }
  };

  const handleSubmit = () => {
    if (answers.includes("")) {
      toast({
        variant: "destructive",
        title: "Incomplete Quiz",
        description: "Please answer all questions before submitting.",
        className: "bg-white text-black border border-red-500", // 👈 custom white toast
      });
      return;
    }
  
    let total = 0;
    answers.forEach((ans, i) => {
      if (ans === shuffledQuiz[i].correctAnswer) total += 1;
    });
    setScore(total);
    setSubmitted(true);
  
    toast({
      title: "Quiz Submitted ✅",
      description: `You scored ${total} out of ${shuffledQuiz.length}`,
      className: "bg-gray-900 text-white border border-green-600", // optional: make this look nice too
    });
  };
  
  const handleReset = () => {
    const reshuffledQuestions = shuffleArray(originalQuizData)
      .slice(0, numQuestions)
      .map((q) => ({
        ...q,
        options: shuffleArray(q.options),
      }));
    setShuffledQuiz(reshuffledQuestions);
    setAnswers(Array(reshuffledQuestions.length).fill(""));
    setSubmitted(false);
    setScore(0);
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  const handleQuestionCountChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 10 && value <= 100) {
      setNumQuestions(value);
      setInputError('');
    } else {
      setInputError('Please enter a value between 10 and 100');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-8 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={handleNavigate}
            className="bg-blue-600 px-6 py-2 text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-blue-400 text-center">🌐 Quiz</h1>
        </div>

        <div className="text-center mb-6">
          <label htmlFor="numQuestions" className="mr-4 text-lg font-semibold">
            Select number of questions (10-100):
          </label>
          <input
            id="numQuestions"
            type="number"
            value={numQuestions}
            onChange={handleQuestionCountChange}
            className="bg-gray-800 text-white border border-gray-600 p-2 rounded-lg w-24"
            min="10"
            max="100"
          />
          {inputError && <p className="text-red-400 mt-2">{inputError}</p>}
        </div>

        {shuffledQuiz.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-6 rounded-2xl shadow-lg border border-gray-700 transition-transform hover:scale-[1.01]"
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
                    ? "✅ Yes, the answer is correct."
                    : `❌ Wrong answer. Correct answer is: ${q.correctAnswer}`}
                </p>
              )}
            </div>
          );
        })}

        <div className="text-center mt-10 space-x-4">
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 px-8 py-3 text-lg font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              Submit Quiz
            </button>
          ) : (
            <>
              <p className="text-2xl font-semibold text-yellow-400 mb-4">
                🎯 You scored {score} out of {shuffledQuiz.length}
              </p>
              <button
                onClick={handleReset}
                className="bg-green-600 px-8 py-3 text-lg font-semibold rounded-xl hover:bg-green-700 transition"
              >
                Reset Quiz
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullTest;