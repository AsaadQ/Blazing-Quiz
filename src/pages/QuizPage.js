import React, { useReducer } from 'react';
import Progress from '../quizComponents/Progress';
import Question from '../quizComponents/Question';
import Answers from '../quizComponents/Answers';
import QuizContext from '../quizcontext/QuizContext';
import {
  SET_ANSWERS,
  SET_CURRENT_QUESTION,
  SET_CURRENT_ANSWER,
  SET_ERROR,
  SET_SHOW_RESULTS,
  RESET_QUIZ,
} from '../quizreducers/types.js';
import quizReducer from '../quizreducers/QuizReducer';

import './Quiz.css';
import Confirm from '../quizComponents/Confirm';

function Quiz() {
  const questions = [
    {
  id: 1,
    question: '1. How many startups fail (bankruptcy, closedown, inactive)?',
      answer_a: '30%',
        answer_b: '50%',
          answer_c: '70%',
            answer_d: '90%',
              correct_answer: 'd',
    Comment:<p>There are different statistics about startup failure. But the common number is that nine out of ten new startups fail. <a className="FeedBack1" href="https://www.forbes.com/sites/neilpatel/2015/01/16/90-of-startups-will-fail-heres-what-you-need-to-know-about-the-10/#6f2fa9bd6679">Read more.</a></p>
},
{
  id: 2,
    question:
  '2. What are the major reason for startups failure in their early-stage?',
    answer_a: 'Develop a product nobody wants',
      answer_b: 'Running out of cash',
        answer_c: 'Conflicts among founders',
          answer_d: 'Lack of business insight',
            correct_answer: 'a',
  Comment: <p>One of the largest waste in startups is to develop products that nobody finds useful. It’s because we’re usually designing for our idea of people, rather than people themselves.<a className="FeedBack1" href='https://arxiv.org/abs/1709.0474a'>Read more.</a></p>
},
{
  id: 3,
    question: '"3. How many startups are profitable in a short/mid-term?',
      answer_a: '20%',
        answer_b: '40%',
          answer_c: '60%',
            answer_d: '80%',
              correct_answer: 'b',
  Comment: <p>Only 2 in 5 startups are profitable, and other startups will either break even (1 in 3) or continue to lose money (1 in 3). <a className="FeedBack1" href="https://www.embroker.com/blog/startup-statistics#ss-2'">Read more.</a> </p>
},
{
  id: 4,
    question: '4. How is startup doing with initial capital?',
      answer_a:
  '33% of startup capital for employer firms is less than $10,000 in the early-stage',
    answer_b: 'Startups often acquire a lot of money in the beginning',
      answer_c: 'Startups acquire initial capital mainly from angle investors',
        answer_d:
  '50% of startups have initial capital more than $100000 in the early-stag',
    correct_answer: 'a',
  Comment: <p>33% of startup capital for employer firms is less than $10,000 in the early-stage. <a className="FeedBack1" href="https://www.sba.gov/sites/default/files/Capital_Access_Fact_Sheet_FINAL.pdf "> Read more. </a></p>
},
{
  id: 5,
    question: '5. The portion of startups turning to unicorns?',
      answer_a: '0.01%',
        answer_b: '0.1%',
          answer_c: '1%',
            answer_d: '10%',
              correct_answer: 'c',
  Comment: <p>About 1% of startups evolve into a unicorn startup, like Uber, Airbnb, Slack, Stripe, and Docker.<a className="FeedBack1" href="https://www.statista.com/statistics/893437/china-leading-unicorn-companies-based-on-valuation/">Read more.</a></p>
},
{
  id: 6,
    question: '6.	How long does it take to hire someone for a startup?',
      answer_a: '1 week',
        answer_b: '1 month',
          answer_c: '6 month',
            answer_d: '1 year',
              correct_answer: 'c',
  Comment: <p>Team dynamics are central to the success or failure of a startup. Great startup team members can be found in unusual places because they are less likely to be looking for a standard career path. </p>
},
{
  id: 7,
    question: '7.	How do CEOs spend their time on their business?',
      answer_a:
  'Startup CEOs spend most of their time to hire the right people',
    answer_b:
  'Startup CEOs can spend around 40% of their working hours on tasks that do not generate income such as hiring, HR tasks, and payroll',
    answer_c: 'CEOs of a software startup should be a good developer',
      answer_d:
  'CEOs should spend 50% on business activities and 50% on technical activities',
    correct_answer: 'b',
  Comment: <p>The difference between some of the best CEOs and the mediocre ones are not necessarily that they do different activities, but rather they do them in different proportions. Startup CEOs can spend around 40% of their working hours on tasks that do not generate income such as hiring, HR tasks, and payroll. <a className="FeedBack1" href="https://blog.cardash.com/how-startup-ceos-spend-their-time-769148c1a705">Read more.</a></p>
},
{
  id: 8,
    question: '8.	How many co-founders do you need for your startups?',
      answer_a: '“Zero” – You don’t need a cofounder.',
        answer_b: '“One” – You have to have a cofounder. ',
          answer_c: '“Two” – You have to have three founders. ',
            answer_d: '“Three or more” – the more the merrier.',
              correct_answer: 'a',
                correct_answer1: 'c',
                  correct_answer2: 'b',
  Comment: <p>Two founders increase the odds of a startup’s success with 30% more investment, three times the customer growth rate, and a higher likelihood the startup will not scale too fast. VCs don’t fund sole founders and, if you are alone, you’ve either got too much ego or you can’t convince someone to join you. Decisions need to be made fast in startups and you have to ensure you can have a tie-breaker.<a className="FeedBack1" href=" https://thenextweb.com/entrepreneur/2013/10/10/how-many-cofounders-does-your-startup-need/">Read more.</a> </p>
},
{
  id: 9,
    question: '9.	What makes a successful startup team?',
      answer_a: 'The most important success factor is “technical stars”',
        answer_b:
  'Prior startup experience, product knowledge, and industry skills are all needed for a successful startup',
    answer_c:
  'Shared entrepreneurial passion and shared strategic vision are required to get to superior team performance',
    answer_d: 'Technical skills are more important than teamwork',
      correct_answer: 'c',
  Comment:<p>Greater team experience only leads to better performance if team members share a strategic vision for the company. Thus, when team members don’t agree on the future strategy of the firm, the knowledge and skills they have will only marginally contribute to team performance.<a className="FeedBack1" href=" https://hbr.org/2019/03/what-makes-a-successful-startup-team">Read more.</a> </p>
},
{
  id: 10,
    question:
  '10.	The Average Age of a US Successful Startup Founder according to statistic?',
    answer_a: '25',
      answer_b: '37',
        answer_c: '42',
          answer_d: '52',
            correct_answer: 'c',
  Comment: <p>It’s widely believed that the most successful entrepreneurs are young. However, according to an analysis of confidential administrative data sets from the U.S. Census Bureau, the average age of entrepreneurs at the time they founded their companies is 42. In software startups, the average age is 40, and younger founders aren’t uncommon. However, young people are less common in other industries such as oil and gas or biotechnology, where the average age is closer to 47.<a className="FeedBack1" href="https://hbr.org/2018/07/research-the-average-age-of-a-successful-startup-founder-is-45">Read more.</a></p>
},
{
  id: 11,
    question: '11.	What is true about startup learning?',
      answer_a: 'Take an entrepreneurial course',
        answer_b: 'Read books written by successful entrepreneurs',
          answer_c:
  'Start a company with awareness of available tools and methods in hand',
    answer_d: 'Work for a high flying startup',
      correct_answer: 'c',
  Comment: <p>Preponderance of people believe that the best way to learn more about entrepreneurship is to start a company. Could the high failure rate in entrepreneurship be explained by the belief that the best way to learn entrepreneurship is through trial-and-error? <a className="FeedBack1" href="https://smallbiztrends.com/2015/06/learning-by-doing-entrepreneurship.html">Read more.</a></p>
},
{
  id: 12,
    question:
  '12.	What is among the biggest factor impacting the time needed to raise capital for your startups?',
    answer_a: 'The time of year when you pitch',
      answer_b: 'The number of cofounders in your team',
        answer_c: 'The application domain of your product',
          answer_d: 'The appetite for startup investment',
            correct_answer: 'a',
              correct_answer1: 'd',
  Comment: <p>The time of year you are raising is the most important factor. Besides, you also the strength and depth of your data, the quality of your pitch, the strength of your relationship with investors, the due diligence, your locations, market trends, availability of capital and appetite for startup investments <a className="FeedBack1" href=" https://www.forbes.com/sites/alejandrocremades/2019/01/03/how-long-it-takes-to-raise-capital-for-a-startup/#7bbf240c7a41">Read more.</a></p>
},
{
  id: 13,
    question:
  '13. What does it mean to create a Minimum Viable Product (MVP)?',
    answer_a:
  'Making a running prototype of your software with some frontend/ backend in place',
    answer_b:
  'Using different approaches to demonstrate how your future product can satisfy a customers/ fit to a market',
    answer_c: 'MVP is used barely for testing an idea',
      answer_d: 'Creating MVPs do not need quality in place',
        correct_answer: 'b',
  Comment: <p>Every startup should start with building a Minimum viable product (MVP), and use it to validate their hypotheses about customer needs. An MVP can be simply a landing page, a mockup by Adobe XD or a simple mobile app with a single feature. MVP is created for multiple purposes, including communication and fund raising. MVP focuses on speed, but it does not mean ignoring key quality attribute and throwing garbage to customers. <a className="FeedBack1" href="https://link.springer.com/chapter/10.1007/978-3-319-33515-5_10">Read more.</a></p>
},
{
  id: 14,
    question: '14. How you should build confidence on your startup?',
      answer_a: 'Invest on the idea you strongly believe',
        answer_b:
  'Forming hypotheses about your products, collecting data to support/ reject it',
    answer_c: 'Getting positive feedback from your family and friends',
      answer_d: 'Get the first dollar paid in your product',
        correct_answer: 'b',
  Comment: <p>Why all of the options are reasonably acceptable, we would focus on the ability of forming hypotheses and the journey of validating them. It is done via a Build-Measure-Learn loop.<a className="FeedBack1" href="http://theleanstartup.com/principles">Read more.</a></p>
},
{
  id: 15,
    question: '15. What does Crossing the Chasm mean in a startup journey?',
      answer_a:
  'Marketing a new product should be done as early as possible in your startup',
    answer_b:
  'The most important gap is the one between early adopters and the rest of the market',
    answer_c: 'Chasm is not a challenge for many startups',
      answer_d: 'Marketing should aim at a broad range of customers',
        correct_answer: 'b',
  Comment: <p>Technology adoption journey starts with innovators, early adopters, early majority, then late majority and finally laggards. Marketing should focus on one group of customers at a time, using each group as a base for marketing to the next group. The most difficult step is making the transition between visionaries (early adopters) and pragmatists (early majority) <a className="FeedBack1" href="https://www.businessinsider.com/crossing-the-chasm-is-a-major-startup-challenge-2012-12?r=US&IR=T">Read more.</a> </p>
},
{
  id: 16,
    question: '16. What does Customer development mean to you?',
      answer_a: 'There Are No Facts Inside Your Building, So Get Outside',
        answer_b: 'Failure is an Integral Part of the Search For Right Customers',
          answer_c: 'Design Experiments and Test to Validate Your Hypothesis',
            answer_d: 'Startup Job Titles Are Very Different from a Large Companys',
              correct_answer: 'a',
                correct_answer1: 'b',
                  correct_answer2: 'c',
                    correct_answer3: 'd',
  Comment: <p>Startups are not simply smaller versions of larger, more developed companies. While larger companies execute known and proven business strategies, startups must search for new business models. Customer Development guides the search for a repeatable and scalable business model.<a className="FeedBack1" href="https://steveblank.com/2009/08/31/the-customer-development-manifesto-reasons-for-the-revolution-part-1/">Read more.</a></p> 
},
{
  id: 17,
    question: '17. What do you know about startup pivot?',
      answer_a:
  'A pivot is a shift in business strategy to test a new approach or product after receiving feedback',
    answer_b:
  'We’ve got a great name. We’ve got a great team. Now we just need an idea. Let’s pivot',
    answer_c: 'Pivot can be interpreted as a startup failure',
      answer_d:
  'Changing a mobile app from iOS-based to Android-based can also considered as a pivot',
    correct_answer: 'a',
      correct_answer1: 'b',
        correct_answer2: 'd',
  Comment: <p>A lot of successful startups launched with a different business model, and when they ran into trouble they pivoted to something new. A pivot is a shift in business strategy to test a new approach or product after receiving market feedback. There are different types of pivot according to changing product or market factors.<a className="FeedBack1" href="https://arxiv.org/ftp/arxiv/papers/1710/1710.04037.pdf">Read more.</a> </p>
},
{
  id: 18,
    question:
  '18. What do you know about technical debt in software startups?',
    answer_a:
  'Technical debt reflects the implied cost of additional rework caused by choosing an easy solution in an urgent demand instead of using a better approach that would take longer',
    answer_b:
  'Like your debt in banks, if you do not pay your debt it is a bad thing',
    answer_c:
  'In startups, accumulated technical debt in early stages will hinder product performance in later stages',
    answer_d:
  'In startup context, focusing on speed is the only reason leading to accumulated debts',
    correct_answer: 'a',
      correct_answer1: 'c',
  Comment: <p>Technical debt describes a situation that developers sometimes produce a quick solution to an issue or a feature to meet an urgent demand in some other aspects (e.g., a deadline), and that leads to a “debt” on which “interest” has to be paid and which the “principal” should be repaid at some point for the long-term health of the project. Technical debt is not necessarily a bad thing, and sometimes (e.g., as a proof-of-concept) is required to move projects forward. In startup context, team competence, focusing on speed and lack of sufficient debt management can lead to a negative impact of technical debts.<a className="FeedBack1" href="https://www.researchgate.net/publication/286376207_Software_Development_in_Startup_Companies_The_Greenfield_Startup_Model?enrichId=rgreq-bd05ef364a5fba52d8654f7204a36732-XXX&enrichSource=Y292ZXJQYWdlOzI4NjM3NjIwNztBUzo1NjQxNTAxMjQ2NjI3ODRAMTUxMTUxNTI3OTg2MA%3D%3D&el=1_x_3&_esc=publicationCoverPdf">Read more.</a></p>
},
{
  id: 19,
    question: '19. Revenue models in startups?',
      answer_a:
  'Ad-based revenue model is an easy way of making money without harms',
    answer_b:
  'You can start in the beginning by collecting transaction fee on using your products or services.',
    answer_c:
  'Revenue from subscription mainly depend on having a large customer base.',
    answer_d:
  'Freemium model does not generate revenue for your startups in early phases',
    correct_answer: 'c',
      Comment: <p>Ad-based revenue model entails creating ads for a specific website or product and placing them on your high-traffic websites or apps. In order to generate sufficient revenue to withhold a business, you will need to attract millions of users. In addition, most people find ads annoying, which can lead to low clickthrough rates, and therefore, lower revenue. In a transactional revenue model, consumers are more attracted to this experience because of its simplicity and the wider set of options.However, many companies can employ this model, which leads to a price competition. The subscription model can generate recurring revenue, and can even benefit from customers who are simply too lazy to cancel their subscription to your company.However, it’s critical to maintain a higher subscribe rate than an unsubscribe rate The freemium model is one in which a company’s basic services are free, yet users must pay for additional premium features, extensions, functions, etc.One of the biggest companies to use this model is Linkedin, the most popular business/social media platform. <a className="FeedBack1" href="https://fi.co/insight/the-10-most-popular-startup-revenue-models">Read more.</a></p>
},
{
  id: 20,
    question:
  '20. You want to test the User Interface of your new product. How many test user is sufficient ?',
    answer_a: '2',
      answer_b: '5',
        answer_c: '10',
          answer_d: 'As many as possible in a given timeframe',
            correct_answer: 'b',
    Comment:<p>Testing with 5 people lets you find around 85% of usability problems you would detected with no limited number of test participants. <a className="FeedBack1" href=" https://www.nngroup.com/articles/how-many-test-users/">More read</a></p>
}
  ];

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
    error: ''
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  
  const question = questions[currentQuestion];

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>;
  };

  const renderResultMark = (question, answer) => {
    if (question.correct_answer  === answer.answer) 
      return <span className="correct">Correct</span>;
    
    if(question.correct_answer1 ===answer.answer)
    return <span className="correct">Correct</span>;

    if(question.correct_answer2 ===answer.answer)
    return <span className="correct">Correct</span>;

    if(question.correct_answer3 ===answer.answer)
    return <span className="correct">Correct</span>;
    
    
    return <span className="failed">Failed</span>;
    
  };
  
  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionId
      );

      return (
        <>
          <br/>
        <div key={question.id} className="result">
                    {question.question} - {renderResultMark(question, answer)} -
                    
                <div key={question.Comment} className="FeedBack">
                    { question.Comment}
                    <br/>
                </div>
        </div>
        </>
      );
    });
  };

  const restart = () => {
    dispatch({ type: RESET_QUIZ });
  };

  const next = () => {
    const answer = { questionId: question.id, answer: currentAnswer};
      
    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: 'Please select an option' });
      return;
    }

    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

    if (currentQuestion + 1 < questions.length) {
      dispatch({
        type: SET_CURRENT_QUESTION,
        currentQuestion: currentQuestion + 1
      });
      return;
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  };
  
  const confirm = () => {
    const answer = {
      questionId: question.id,
      answer: currentAnswer,
      Comment: question.Comment
    };

    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER });

    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
    return;
  };
  if (showResults) {
    return (
      <div className="container1 results">
        <div className="result"> 
        <h1 className="quiz">Results</h1>
        <ul className="quiz">{renderResultsData()}</ul>
        <button className="btn btn-primary" onClick={restart}>
          Restart
        </button>
        </div>
      </div>
    );
  } else {
    return (
      <body className="body">
      <QuizContext.Provider value={{ state, dispatch }}>
        <div className="container1">
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers />
          <Confirm />
          <button className="btn btn-primary" onClick={confirm}>
            Confirm 
          </button>
     
          <button className="btn btn-primary" onClick={next}>
            Confirm and Continue
          </button>
        </div>
        
      </QuizContext.Provider>
      </body>
    );
  }
}

export default Quiz;
