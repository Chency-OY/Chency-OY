import React, { useState } from 'react';

const PsychologicalTest = ({ onClose }) => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      text: "最近感到压力大吗？",
      options: [
        { label: "从不", score: 1 },
        { label: "偶尔", score: 2 },
        { label: "经常", score: 3 },
        { label: "总是", score: 4 }
      ]
    },
    {
      id: 2,
      text: "对当前状态满意吗？",
      options: [
        { label: "非常满意", score: 1 },
        { label: "满意", score: 2 },
        { label: "一般", score: 3 },
        { label: "不满意", score: 4 },
        { label: "非常不满意", score: 5 }
      ]
    }
  ];

  const handleSelect = (qId, option) => {
    setAnswers(prev => ({ ...prev, [qId]: option }));
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, item) => sum + item.score, 0);
    if (totalScore <= 4) return "状态极佳，继续保持！";
    if (totalScore <= 7) return "状态良好，适当放松。";
    return "注意休息，劳逸结合。";
  };

  const isAllAnswered = questions.every(q => answers[q.id]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white w-full max-w-md mx-4 p-8 rounded-2xl shadow-xl transform transition-all duration-300 scale-100">
        <h3 className="text-2xl font-light text-gray-800 mb-6 text-center" style={{ fontFamily: "'Helvetica Neue Light', sans-serif" }}>
          {showResult ? "测评结果" : "每日心情"}
        </h3>

        {!showResult ? (
          <div className="space-y-8">
            {questions.map((q) => (
              <div key={q.id} className="space-y-3">
                <p className="text-gray-600 font-light text-lg">{q.text}</p>
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleSelect(q.id, opt)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-200 border ${
                        answers[q.id]?.label === opt.label
                          ? 'bg-green-500 text-white border-green-500 shadow-md'
                          : 'bg-white text-gray-500 border-gray-200 hover:border-green-300 hover:text-green-600'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="pt-4 flex justify-end gap-4">
              <button 
                onClick={onClose}
                className="px-6 py-2 text-gray-400 hover:text-gray-600 text-sm transition-colors"
              >
                跳过
              </button>
              <button
                onClick={() => setShowResult(true)}
                disabled={!isAllAnswered}
                className={`px-8 py-2 rounded-lg text-white text-sm transition-all duration-300 ${
                  isAllAnswered 
                    ? 'bg-green-500 hover:bg-green-600 shadow-lg cursor-pointer' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                查看结果
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center space-y-8 animate-fade-in">
            <div className="py-8">
              <p className="text-3xl text-gray-700 font-light mb-2">
                {calculateResult()}
              </p>
              <p className="text-sm text-gray-400 mt-4">
                感谢参与，祝你拥有美好的一天
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl transition-colors duration-200"
            >
              关闭
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PsychologicalTest;