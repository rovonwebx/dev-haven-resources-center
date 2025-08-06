import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Users, Award, Calendar, Target, Zap, Server, Camera, Check, X, FileDown, Percent } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Analytics } from '@vercel/analytics/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import clsx from 'clsx';

// --- DATA FOR APTITUDE & HR QUESTIONS ---

const aptitudeQuestions = [
    { id: 'apt1', question: 'A man buys an item for Rs. 500 and sells it for Rs. 600. What is his profit percentage?', options: ['10%', '15%', '20%', '25%'], answer: '20%' },
    { id: 'apt2', question: 'If A can do a job in 10 days and B can do it in 15 days, how long will they take together?', options: ['5 days', '6 days', '8 days', '9 days'], answer: '6 days' },
    { id: 'apt3', question: 'Find the next term in the sequence: 1, 4, 9, 16, ?', options: ['20', '25', '30', '36'], answer: '25' },
    { id: 'apt4', question: 'Two numbers are in the ratio 3:5. If their sum is 80, find the numbers.', options: ['30 and 50', '24 and 56', '36 and 44', '20 and 60'], answer: '30 and 50' },
    { id: 'apt5', question: 'A train 100m long is running at a speed of 30 km/hr. Find the time it takes to pass a man standing near the railway line.', options: ['10 seconds', '12 seconds', '15 seconds', '18 seconds'], answer: '12 seconds' },
    // Add more questions to reach 50
    ...Array.from({ length: 45 }, (_, i) => ({ id: `apt${i + 6}`, question: `Sample Aptitude Question ${i + 6}`, options: ['A', 'B', 'C', 'D'], answer: 'A' }))
];

const hrQuestions = [
    { id: 'hr1', question: 'Which of the following best describes your approach to handling stress?', options: ['Take short breaks to refocus', 'Thrive under pressure', 'Prioritize tasks and tackle them one by one', 'Seek support from colleagues'], answer: 'Prioritize tasks and tackle them one by one' },
    { id: 'hr2', question: 'When faced with a difficult team member, what is your first step?', options: ['Report them to the manager', 'Avoid working with them', 'Try to understand their perspective through open communication', 'Do their work for them'], answer: 'Try to understand their perspective through open communication' },
    { id: 'hr3', question: 'Where do you see yourself professionally in the next 5 years?', options: ['In a leadership role within this company', 'Starting my own business', 'Having mastered the skills for this role and taking on more responsibility', 'I have not planned that far ahead'], answer: 'Having mastered the skills for this role and taking on more responsibility' },
    { id: 'hr4', question: 'What is your greatest weakness?', options: ['I am a perfectionist', 'I sometimes take on too much work', 'Public speaking', 'I am not a great team player'], answer: 'I sometimes take on too much work' },
    { id: 'hr5', question: 'How do you prefer to receive feedback?', options: ['Direct and to the point', 'In a formal written report', 'Blended with positive reinforcement', 'I do not like receiving feedback'], answer: 'Blended with positive reinforcement' },
    // Add more questions to reach 50
    ...Array.from({ length: 45 }, (_, i) => ({ id: `hr${i + 6}`, question: `Sample HR Question ${i + 6}`, options: ['A', 'B', 'C', 'D'], answer: 'A' }))
];


const Assignments = () => {
  const [view, setView] = useState('selection'); // 'selection', 'instructions', 'test', 'results'
  const [currentTest, setCurrentTest] = useState(null);
  const [testData, setTestData] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  const timerRef = useRef(null);

  useEffect(() => {
    if (view === 'test' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(timerRef.current);
      submitTest();
    }
    return () => clearInterval(timerRef.current);
  }, [view, timeLeft]);

  const handleSelectTest = (testType) => {
    setCurrentTest(testType);
    setTestData(testType === 'Aptitude' ? aptitudeQuestions : hrQuestions);
    setView('instructions');
  };

  const startTest = () => {
    // Here you would implement camera access logic
    // For now, we'll simulate it with a confirmation
    if (window.confirm("This test requires camera access for proctoring. Please grant permission.")) {
        setView('test');
        setTimeLeft(30 * 60); // Reset timer
        setCurrentQuestionIndex(0);
        setAnswers({});
    }
  };

  const handleAnswerSelect = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const submitTest = () => {
    clearInterval(timerRef.current);
    setView('results');
  };

  const calculateScore = () => {
    return testData.reduce((score, question) => {
      if (answers[question.id] === question.answer) {
        return score + 1;
      }
      return score;
    }, 0);
  };
  
  const downloadMarkSheet = () => {
    const doc = new jsPDF();
    const score = calculateScore();
    const percentage = (score / testData.length) * 100;

    doc.setFontSize(22);
    doc.text(`${currentTest} Assessment Mark Sheet`, 105, 20, { align: 'center' });
    doc.setFontSize(12);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
    
    doc.autoTable({
        startY: 50,
        head: [['Metric', 'Result']],
        body: [
            ['Test Type', currentTest],
            ['Total Questions', testData.length],
            ['Correct Answers', score],
            ['Incorrect Answers', testData.length - score],
            ['Final Percentage', `${percentage.toFixed(2)}%`],
            ['Result', percentage >= 60 ? 'Pass' : 'Fail'],
        ],
        theme: 'grid',
        headStyles: { fillColor: [22, 163, 74] }
    });
    
    doc.autoTable({
        startY: doc.previousAutoTable.finalY + 10,
        head: [['#', 'Question', 'Your Answer', 'Correct Answer', 'Result']],
        body: testData.map((q, i) => [
            i + 1,
            q.question,
            answers[q.id] || 'Not Answered',
            q.answer,
            answers[q.id] === q.answer ? 'Correct' : 'Incorrect'
        ]),
        theme: 'striped',
        columnStyles: {
            0: { cellWidth: 10 },
            1: { cellWidth: 80 },
        },
    });

    doc.save(`${currentTest}_Mark_Sheet.pdf`);
  };

  // --- Render Functions for Each View ---

  const renderSelection = () => (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Assessment Center
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Choose an assessment to test your skills. Each test consists of 50 MCQ questions and is proctored.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card onClick={() => handleSelectTest('Aptitude')} className="bg-neutral-900 border-neutral-800 hover:border-blue-500/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-8 text-center flex flex-col items-center">
                    <Zap className="w-16 h-16 text-blue-400 mb-4 transition-transform group-hover:scale-110" />
                    <h2 className="text-2xl font-bold text-white mb-2">Aptitude Test</h2>
                    <p className="text-neutral-400">Quantitative, Logical & Verbal Reasoning.</p>
                </CardContent>
            </Card>
            <Card onClick={() => handleSelectTest('HR Round')} className="bg-neutral-900 border-neutral-800 hover:border-purple-500/80 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-8 text-center flex flex-col items-center">
                    <Users className="w-16 h-16 text-purple-400 mb-4 transition-transform group-hover:scale-110" />
                    <h2 className="text-2xl font-bold text-white mb-2">HR Round Assessment</h2>
                    <p className="text-neutral-400">Situational Judgement & Personality Analysis.</p>
                </CardContent>
            </Card>
        </div>
    </div>
  );

  const renderInstructions = () => (
    <div className="max-w-3xl mx-auto">
        <Card className="bg-neutral-900 border-neutral-800 p-8">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">{currentTest} Test Instructions</h1>
            <ul className="space-y-4 text-neutral-300 mb-8 list-disc list-inside">
                <li>This test consists of <strong>{testData.length} multiple-choice questions</strong>.</li>
                <li>You will have <strong>30 minutes</strong> to complete the test.</li>
                <li>The test is proctored and requires <strong>camera access</strong>. Please ensure you are in a quiet, well-lit environment.</li>
                <li>You cannot pause the test once it begins.</li>
                <li>Your score and results will be displayed immediately after submission.</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={startTest} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    <Camera className="mr-2 h-5 w-5"/> Allow Camera & Start Test
                </Button>
                <Button onClick={() => setView('selection')} size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">Go Back</Button>
            </div>
        </Card>
    </div>
  );

  const renderTest = () => {
    const question = testData[currentQuestionIndex];
    return (
        <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader className="flex flex-row justify-between items-center">
                    <CardTitle>Question {currentQuestionIndex + 1}/{testData.length}</CardTitle>
                    <div className="text-lg font-mono bg-red-800/80 text-white px-4 py-1 rounded-lg">
                        <Clock className="inline mr-2 h-5 w-5"/>{`${Math.floor(timeLeft / 60)}:${('0' + timeLeft % 60).slice(-2)}`}
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <p className="text-xl text-white mb-8 min-h-[60px]">{question.question}</p>
                    <div className="space-y-4">
                        {question.options.map((option, index) => (
                            <div
                                key={index}
                                onClick={() => handleAnswerSelect(question.id, option)}
                                className={clsx("p-4 border rounded-lg cursor-pointer transition-all", {
                                    'bg-blue-600 border-blue-500 text-white': answers[question.id] === option,
                                    'border-neutral-700 hover:bg-neutral-800': answers[question.id] !== option
                                })}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-8">
                        <Button onClick={() => setCurrentQuestionIndex(p => p - 1)} disabled={currentQuestionIndex === 0}>Previous</Button>
                        {currentQuestionIndex < testData.length - 1 ? (
                            <Button onClick={() => setCurrentQuestionIndex(p => p + 1)}>Next</Button>
                        ) : (
                            <Button onClick={submitTest} className="bg-green-600 hover:bg-green-700">Submit Test</Button>
                        )}
                    </div>
                    <Progress value={((currentQuestionIndex + 1) / testData.length) * 100} className="mt-6 h-2 [&>*]:bg-blue-600" />
                </CardContent>
            </Card>
        </div>
    );
  };
  
  const renderResults = () => {
      const score = calculateScore();
      const percentage = (score / testData.length) * 100;
      return (
        <div className="max-w-4xl mx-auto">
            <Card className="bg-neutral-900 border-neutral-800 text-center">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold text-white">Test Completed!</CardTitle>
                    <p className="text-neutral-400 text-lg">Here are your results for the {currentTest} Assessment.</p>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="relative w-48 h-48 mx-auto mb-8">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#374151" strokeWidth="3"></path>
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2563eb" strokeWidth="3" strokeDasharray={`${percentage}, 100`}></path>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-white">{percentage.toFixed(0)}<span className="text-3xl">%</span></span>
                            <span className="text-neutral-400">Score</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <Card className="bg-neutral-800 p-4">
                            <h3 className="text-3xl font-bold text-white">{score}</h3>
                            <p className="text-neutral-400">Correct Answers</p>
                        </Card>
                        <Card className="bg-neutral-800 p-4">
                            <h3 className="text-3xl font-bold text-white">{testData.length - score}</h3>
                            <p className="text-neutral-400">Incorrect Answers</p>
                        </Card>
                        <Card className={clsx("p-4", percentage >= 60 ? 'bg-green-800/50' : 'bg-red-800/50')}>
                            <h3 className="text-3xl font-bold text-white">{percentage >= 60 ? 'Pass' : 'Fail'}</h3>
                            <p className={clsx(percentage >= 60 ? 'text-green-300' : 'text-red-300')}>Result</p>
                        </Card>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={downloadMarkSheet} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                           <FileDown className="mr-2 h-5 w-5" /> Download Mark Sheet
                        </Button>
                        <Button onClick={() => setView('selection')} size="lg" variant="outline" className="border-neutral-700 text-neutral-300 hover:bg-neutral-800">
                            Take Another Test
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      )
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      <Analytics />
      <header className="sticky top-0 w-full border-b border-neutral-800 bg-neutral-950/90 backdrop-blur-xl z-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                        <Server className="w-6 h-6 text-white" />
                    </div>
                    <div className="hidden sm:block">
                        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Center of Knowledge & Resources</h1>
                        <p className="text-xs text-neutral-400 font-medium tracking-wider uppercase">Professional Resource Hub</p>
                    </div>
                </Link>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" asChild className="text-neutral-300 hover:bg-neutral-800 hover:text-white">
                        <Link to="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Hub
                        </Link>
                    </Button>
                </div>
            </div>
      </header>
      
      <main className="flex-1 w-full pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {view === 'selection' && renderSelection()}
            {view === 'instructions' && renderInstructions()}
            {view === 'test' && renderTest()}
            {view === 'results' && renderResults()}
        </div>
      </main>
    </div>
  );
};

export default Assignments;
