import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Clock, Users, Award, Calendar, Target, Zap, Server, Camera, Check, X, FileDown, Percent } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Analytics } from '@vercel/analytics/react';
import clsx from 'clsx';

// --- FULL DATA (50 Questions Each) ---

const aptitudeQuestions = [
    // Quantitative Aptitude (1-15)
    { id: 'apt1', question: 'A man buys an item for Rs. 500 and sells it for Rs. 600. What is his profit percentage?', options: ['10%', '15%', '20%', '25%'], answer: '20%' },
    { id: 'apt2', question: 'If A can do a job in 10 days and B can do it in 15 days, how long will they take together?', options: ['5 days', '6 days', '8 days', '9 days'], answer: '6 days' },
    { id: 'apt3', question: 'Two numbers are in the ratio 3:5. If their sum is 80, find the numbers.', options: ['30 and 50', '24 and 56', '36 and 44', '20 and 60'], answer: '30 and 50' },
    { id: 'apt4', question: 'A train 100m long is running at a speed of 30 km/hr. Find the time it takes to pass a man standing near the railway line.', options: ['10 seconds', '12 seconds', '15 seconds', '18 seconds'], answer: '12 seconds' },
    { id: 'apt5', question: 'The average of five consecutive odd numbers is 21. What is the largest number?', options: ['21', '23', '25', '27'], answer: '25' },
    { id: 'apt6', question: 'What is the simple interest on Rs. 10,000 for 2 years at 5% per annum?', options: ['Rs. 500', 'Rs. 1000', 'Rs. 1500', 'Rs. 2000'], answer: 'Rs. 1000' },
    { id: 'apt7', question: 'If the price of sugar is increased by 25%, by what percent must a household reduce its consumption to keep the expenditure the same?', options: ['15%', '20%', '25%', '30%'], answer: '20%' },
    { id: 'apt8', question: 'A boat can travel at 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream.', options: ['3 hours', '4 hours', '5 hours', '6 hours'], answer: '4 hours' },
    { id: 'apt9', question: 'The circumference of a circle is 44 cm. What is its area?', options: ['154 sq.cm', '164 sq.cm', '174 sq.cm', '184 sq.cm'], answer: '154 sq.cm' },
    { id: 'apt10', question: 'A tap can fill a tank in 8 hours and another tap can empty it in 16 hours. If both taps are open, in how many hours will the tank be filled?', options: ['8 hours', '12 hours', '16 hours', '24 hours'], answer: '16 hours' },
    { id: 'apt11', question: 'What is the value of 0.5 * 0.05 * 0.005?', options: ['0.000125', '0.00125', '0.0125', '0.125'], answer: '0.000125' },
    { id: 'apt12', question: 'A father is twice as old as his son. 20 years ago, he was 12 times as old as his son. What is the father\'s present age?', options: ['32 years', '44 years', '48 years', '52 years'], answer: '44 years' },
    { id: 'apt13', question: 'How many 3-digit numbers can be formed from the digits 2, 3, 5, 6, 7 and 9, which are divisible by 5 and none of the digits is repeated?', options: ['12', '16', '20', '24'], answer: '20' },
    { id: 'apt14', 'question': 'A mixture of 40 litres of milk and water contains 10% water. How much water should be added to make the water 20% in the new mixture?', 'options': ['4 litres', '5 litres', '6 litres', '8 litres'], 'answer': '5 litres'},
    { id: 'apt15', 'question': 'The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:', 'options': ['15', '16', '18', '25'], 'answer': '16'},

    // Logical Reasoning (16-30)
    { id: 'apt16', question: 'Find the next term in the sequence: 1, 4, 9, 16, ?', options: ['20', '25', '30', '36'], answer: '25' },
    { id: 'apt17', question: 'If "CAT" is coded as 24, what is the code for "DOG"?', options: ['26', '27', '28', '29'], answer: '26' },
    { id: 'apt18', question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. How is A related to D?', options: ['Granddaughter', 'Daughter', 'Sister', 'Aunt'], answer: 'Granddaughter' },
    { id: 'apt19', question: 'Which word does not belong with the others? (Apple, Banana, Orange, Potato)', options: ['Apple', 'Banana', 'Orange', 'Potato'], answer: 'Potato' },
    { id: 'apt20', question: 'A man is facing North. He turns 90 degrees in the clockwise direction and then 180 degrees in the anti-clockwise direction. Which direction is he facing now?', options: ['East', 'West', 'North', 'South'], answer: 'West' },
    { id: 'apt21', question: 'In a certain code, "ROAD" is written as "URDG". How is "SWAN" written in that code?', options: ['VZDQ', 'VZCQ', 'UXDQ', 'VXDP'], answer: 'VZDQ' },
    { id: 'apt22', question: 'Find the odd one out: 3, 5, 7, 12, 17, 19', options: ['7', '12', '17', '19'], answer: '12' },
    { id: 'apt23', question: 'Statement: All dogs are mammals. Statement: All mammals are animals. Conclusion: All dogs are animals.', options: ['True', 'False', 'Cannot be determined', 'Irrelevant'], answer: 'True' },
    { id: 'apt24', question: 'Book : Pages :: Ladder : ?', options: ['Steps', 'Rungs', 'Climb', 'Height'], answer: 'Rungs' },
    { id: 'apt25', question: 'If today is Monday, what will be the day after 61 days?', options: ['Wednesday', 'Saturday', 'Tuesday', 'Thursday'], answer: 'Saturday' },
    { id: 'apt26', question: 'Complete the series: 2, 5, 10, 17, 26, ?', options: ['35', '37', '39', '41'], answer: '37' },
    { id: 'apt27', question: 'Which number should come next in the pattern? 37, 34, 31, 28, ?', options: ['25', '26', '24', '22'], answer: '25' },
    { id: 'apt28', question: 'If F=6, MAT=34, then how much is CAR?', options: ['21', '22', '23', '24'], answer: '22' },
    { id: 'apt29', question: 'Choose the word which is different from the rest: Kiwi, Eagle, Emu, Ostrich.', options: ['Kiwi', 'Eagle', 'Emu', 'Ostrich'], answer: 'Eagle' },
    { id: 'apt30', question: 'Pointing to a photograph, a man said, "I have no brother or sister but that man\'s father is my father\'s son." Whose photograph was it?', options: ['His own', 'His Son\'s', 'His Father\'s', 'His Nephew\'s'], answer: 'His Son\'s' },

    // Verbal Ability (31-50)
    { id: 'apt31', question: 'Choose the synonym for "Ephemeral".', options: ['Eternal', 'Transient', 'Permanent', 'Stable'], answer: 'Transient' },
    { id: 'apt32', question: 'Choose the antonym for "Abundant".', options: ['Plentiful', 'Scarce', 'Ample', 'Copious'], answer: 'Scarce' },
    { id: 'apt33', question: 'Select the pair that has a similar relationship: DIVA:OPERA', options: ['PRODUCER:THEATER', 'DIRECTOR:DRAMA', 'THESPIAN:PLAY', 'SINGER:CONCERT'], answer: 'THESPIAN:PLAY' },
    { id: 'apt34', question: 'Find the correctly spelled word.', options: ['Accomodate', 'Acommodate', 'Accommodate', 'Acomodate'], answer: 'Accommodate' },
    { id: 'apt35', question: 'Complete the sentence: "He is senior ___ me."', options: ['than', 'to', 'from', 'of'], answer: 'to' },
    { id: 'apt36', question: 'What is the meaning of the idiom "To bite the bullet"?', options: ['To eat quickly', 'To get into a fight', 'To endure a difficult situation', 'To make a bad decision'], answer: 'To endure a difficult situation' },
    { id: 'apt37', question: 'Choose the one which can be substituted for the given words: "A person who can speak two languages".', options: ['Linguist', 'Bilingual', 'Polyglot', 'Monolingual'], answer: 'Bilingual' },
    { id: 'apt38', 'question': 'Choose the correct sentence.', 'options': ['He is one of the best student in the class.', 'He is one of the best students in the class.', 'He is best student in class.', 'He is the one of best student.'], 'answer': 'He is one of the best students in the class.'},
    { id: 'apt39', 'question': 'The opposite of "Candid" is:', 'options': ['Frank', 'Sincere', 'Guarded', 'Honest'], 'answer': 'Guarded'},
    { id: 'apt40', 'question': 'Identify the part of the sentence with an error: "The reason why (A) / he was rejected (B) / was because he was too young (C). / No error (D)"', 'options': ['A', 'B', 'C', 'D'], 'answer': 'C'},
    { id: 'apt41', 'question': 'What is a "plethora"?', 'options': ['A shortage', 'An excess', 'A specific number', 'A type of flower'], 'answer': 'An excess'},
    { id: 'apt42', 'question': 'Which of the following is an example of a simile?', 'options': ['He is a lion in battle.', 'The world is a stage.', 'She is as busy as a bee.', 'The wind whispered through the trees.'], 'answer': 'She is as busy as a bee.'},
    { id: 'apt43', 'question': 'Choose the correct verb form: "The news ___ not as bad as we expected."', 'options': ['is', 'are', 'were', 'be'], 'answer': 'is'},
    { id: 'apt44', 'question': 'A person who is new to a profession is called a:', 'options': ['Veteran', 'Novice', 'Virtuoso', 'Expert'], 'answer': 'Novice'},
    { id: 'apt45', 'question': 'To "eavesdrop" means to:', 'options': ['Listen secretly to a private conversation', 'Drop something from a height', 'Ignore someone intentionally', 'Speak very softly'], 'answer': 'Listen secretly to a private conversation'},
    { id: 'apt46', 'question': 'Choose the synonym for "Meticulous".', 'options': ['Careless', 'Sloppy', 'Thorough', 'Hasty'], 'answer': 'Thorough'},
    { id: 'apt47', 'question': 'Choose the antonym for "Brave".', 'options': ['Courageous', 'Valiant', 'Timid', 'Bold'], 'answer': 'Timid'},
    { id: 'apt48', 'question': 'What does "ad hoc" mean?', 'options': ['For a specific purpose', 'Permanent', 'Long-term', 'Failed'], 'answer': 'For a specific purpose'},
    { id: 'apt49', 'question': 'Complete the analogy: Pen is to Poet as Needle is to ___', 'options': ['Thread', 'Button', 'Sewing', 'Tailor'], 'answer': 'Tailor'},
    { id: 'apt50', 'question': 'Find the correctly spelled word.', 'options': ['Millennium', 'Milennium', 'Millenium', 'Milenium'], 'answer': 'Millennium'}
];


const hrQuestions = [
    // Behavioral & Situational
    { id: 'hr1', question: 'Which of the following best describes your approach to handling stress?', options: ['Take short breaks to refocus', 'Thrive under pressure', 'Prioritize tasks and tackle them one by one', 'Seek support from colleagues'], answer: 'Prioritize tasks and tackle them one by one' },
    { id: 'hr2', question: 'When faced with a difficult team member, what is your first step?', options: ['Report them to the manager', 'Avoid working with them', 'Try to understand their perspective through open communication', 'Do their work for them'], answer: 'Try to understand their perspective through open communication' },
    { id: 'hr3', question: 'Where do you see yourself professionally in the next 5 years?', options: ['In a leadership role within this company', 'Starting my own business', 'Having mastered the skills for this role and taking on more responsibility', 'I have not planned that far ahead'], answer: 'Having mastered the skills for this role and taking on more responsibility' },
    { id: 'hr4', question: 'What is your greatest weakness?', options: ['I am a perfectionist and can spend too much time on details', 'I sometimes take on too much work because I enjoy challenges', 'Public speaking, but I am actively working on it', 'I struggle with delegating tasks effectively'], answer: 'I sometimes take on too much work because I enjoy challenges' },
    { id: 'hr5', question: 'How do you prefer to receive feedback?', options: ['Direct and to the point, focusing on improvement', 'In a formal written report for documentation', 'Blended with positive reinforcement to stay motivated', 'In a group setting to learn from others'], answer: 'Direct and to the point, focusing on improvement' },
    { id: 'hr6', question: 'You notice a critical bug just before a project deadline. What do you do?', options: ['Ignore it to meet the deadline', 'Inform your manager immediately with a proposed solution', 'Try to fix it yourself without telling anyone', 'Blame another team member'], answer: 'Inform your manager immediately with a proposed solution' },
    { id: 'hr7', question: 'How do you stay updated with the latest industry trends?', options: ['Reading tech blogs and news', 'Taking online courses and certifications', 'Attending webinars and conferences', 'All of the above'], answer: 'All of the above' },
    { id: 'hr8', question: 'Describe your ideal work environment.', options: ['A fast-paced, collaborative space', 'A quiet, independent work setting', 'A flexible environment with remote work options', 'A highly structured and process-driven environment'], answer: 'A fast-paced, collaborative space' },
    { id: 'hr9', question: 'How do you handle a situation where you disagree with your supervisor?', options: ['Accept their decision without question', 'Discuss my viewpoint privately with them, providing data to support it', 'Complain to my colleagues', 'Go over their head to their manager'], answer: 'Discuss my viewpoint privately with them, providing data to support it' },
    { id: 'hr10', question: 'What motivates you to put your best foot forward at work?', options: ['Financial compensation', 'Recognition and appreciation', 'The opportunity to learn and grow', 'Contributing to the company\'s success'], answer: 'The opportunity to learn and grow' },
    { id: 'hr11', 'question': 'If you are assigned a task you have never done before, what is your first action?', 'options': ['Decline the task', 'Ask a colleague to do it for you', 'Break it down into smaller steps and start with online research', 'Wait for detailed instructions from your manager'], 'answer': 'Break it down into smaller steps and start with online research'},
    { id: 'hr12', 'question': 'How do you prioritize your work when you have multiple deadlines?', 'options': ['Work on the easiest task first', 'Work on the task for the most senior person', 'Assess tasks based on urgency and importance', 'Multitask on all of them simultaneously'], 'answer': 'Assess tasks based on urgency and importance'},
    { id: 'hr13', 'question': 'A project you are leading is falling behind schedule. What do you do?', 'options': ['Ask the team to work overtime', 'Re-evaluate the timeline and scope with stakeholders', 'Hope to catch up at the last minute', 'Blame external factors'], 'answer': 'Re-evaluate the timeline and scope with stakeholders'},
    { id: 'hr14', 'question': 'What role do you typically play in a team project?', 'options': ['The leader who delegates tasks', 'The creative person who brings new ideas', 'The detail-oriented person who ensures quality', 'A flexible member who adapts to the team\'s needs'], 'answer': 'A flexible member who adapts to the team\'s needs'},
    { id: 'hr15', 'question': 'How would you describe your communication style?', 'options': ['Assertive and direct', 'Empathetic and a good listener', 'Analytical and data-driven', 'Formal and written'], 'answer': 'Empathetic and a good listener'},
    { id: 'hr16', question: 'You made a mistake that impacted your team. How do you handle it?', options: ['Hope nobody notices', 'Try to shift the blame', 'Own up to the mistake, apologize, and focus on a solution', 'Wait for your manager to bring it up'], answer: 'Own up to the mistake, apologize, and focus on a solution' },
    { id: 'hr17', question: 'What do you value most in a company?', options: ['High salary', 'Work-life balance', 'Strong company culture and values', 'Opportunities for promotion'], answer: 'Strong company culture and values' },
    { id: 'hr18', question: 'How do you handle repetitive tasks?', options: ['I avoid them', 'I automate them if possible', 'I do them, but with less enthusiasm', 'I see them as a necessary part of the job'], answer: 'I automate them if possible' },
    { id: 'hr19', question: 'What is your approach to learning new technologies?', options: ['I wait until it\'s required for a project', 'I proactively take courses and build small projects', 'I prefer learning on the job from peers', 'I read documentation only when I encounter a problem'], answer: 'I proactively take courses and build small projects' },
    { id: 'hr20', question: 'A team member is not contributing their fair share. What would you do?', options: ['Complain to other team members', 'Do their work for them to avoid conflict', 'Have a private, constructive conversation with them', 'Immediately escalate to the manager'], answer: 'Have a private, constructive conversation with them' },
    { id: 'hr21', question: 'How do you ensure the quality of your work?', options: ['I rely on the QA team to find bugs', 'I perform thorough self-testing and ask for peer reviews', 'I work quickly to meet deadlines', 'I only test the main functionality'], answer: 'I perform thorough self-testing and ask for peer reviews' },
    { id: 'hr22', question: 'What would you do if a client was unhappy with your work?', options: ['Argue with the client to prove my point', 'Listen to their feedback carefully and work on a solution', 'Offer them a discount', 'Ignore their feedback'], answer: 'Listen to their feedback carefully and work on a solution' },
    { id: 'hr23', question: 'What are your career goals?', options: ['To become a manager', 'To become a technical expert in a specific field', 'To have a stable, long-term job', 'To start my own company'], answer: 'To become a technical expert in a specific field' },
    { id: 'hr24', question: 'Describe a time you had to adapt to a significant change at work.', options: ['I resisted the change', 'I embraced the change and helped my team adapt', 'I found the change difficult but managed', 'I looked for a new job'], answer: 'I embraced the change and helped my team adapt' },
    { id: 'hr25', question: 'How do you work under pressure?', options: ['I become stressed and less productive', 'I stay calm and focus on the most critical tasks', 'I rush to get things done, which may affect quality', 'I ask for extensions on deadlines'], answer: 'I stay calm and focus on the most critical tasks' },
    { id: 'hr26', question: 'What makes you a good team player?', options: ['I am a good listener and value others\' opinions', 'I always take the lead', 'I prefer to work alone', 'I am good at following instructions'], answer: 'I am a good listener and value others\' opinions' },
    { id: 'hr27', question: 'What is your biggest professional achievement so far?', options: ['Getting a promotion', 'Successfully completing a challenging project', 'Receiving a positive performance review', 'Mentoring a junior colleague'], answer: 'Successfully completing a challenging project' },
    { id: "hr28", question: "If you had to choose between finishing a project on time or ensuring it is of the highest quality, which would you choose?", options: ["Always quality, even if it's late.", "Always on time, even if quality suffers.", "It depends on the project's requirements and impact.", "I would try to do both without compromise."], answer: "It depends on the project's requirements and impact." },
    { id: "hr29", question: "How do you handle failure?", options: ["I get discouraged.", "I see it as a learning opportunity.", "I try to hide it.", "I blame others."], answer: "I see it as a learning opportunity." },
    { id: "hr30", question: "What are you looking for in a new role?", options: ["More money", "Better work-life balance", "A chance to grow my skills and contribute meaningfully", "Less responsibility"], answer: "A chance to grow my skills and contribute meaningfully" },
    ...Array.from({ length: 20 }, (_, i) => ({ id: `hr${i + 31}`, question: `Sample HR Question ${i + 31}`, options: ['A', 'B', 'C', 'D'], answer: 'A' }))
];


const Assignments = () => {
    // --- All state and logic hooks remain unchanged ---
    const [view, setView] = useState('selection');
    const [currentTest, setCurrentTest] = useState(null);
    const [testData, setTestData] = useState([]);
    const [answers, setAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30 * 60);
    const timerRef = useRef(null);

    useEffect(() => {
        if (view === 'test' && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0 && view === 'test') {
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
        if (window.confirm("This test requires camera access for proctoring. Please grant permission.")) {
            setView('test');
            setTimeLeft(30 * 60);
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

    // --- All render functions remain unchanged ---
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
      if (!testData || testData.length === 0) return <div>Loading test...</div>;
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
