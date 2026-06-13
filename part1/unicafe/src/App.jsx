import { useState } from 'react';

const Button = ({ name, onClick }) => <button onClick={onClick}>{name}</button>;

const Feedback = ({ handleGood, handleNeutral, handleBad }) => (
  <div>
    <h1>Give feedback</h1>
    <Button name="good" onClick={handleGood} />
    <Button name="neutral" onClick={handleNeutral} />
    <Button name="bad" onClick={handleBad} />
  </div>
);

const Statistic = ({ name, value }) => (
  <div>
    {name} {value}
  </div>
);

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h1>Statistics</h1>
      <Statistic name="good" value={good} />
      <Statistic name="neutral" value={neutral} />
      <Statistic name="bad" value={bad} />
    </>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Feedback
        handleGood={handleGood}
        handleNeutral={handleNeutral}
        handleBad={handleBad}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
