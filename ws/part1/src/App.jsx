import { useState } from 'react';

const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };

  return (
    <div>
      <p>
        Hello world, {name} {age}
      </p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  );
};

const Display = ({ name, counter }) => {
  return (
    <div>
      {name}: {counter}
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const History = (props) => {
  if (props.allClicks?.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(' ')}</div>;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
  };

  setTimeout(() => setCounter(counter + 1), 5000);

  const handleClick = () => {
    console.log('clicked');
    setCounter2(counter2 + 1);
  };

  return (
    <>
      <Display name="Timer" counter={counter} />
      <Display name="Handler" counter={counter2} />

      <Hello name="Hemmo" age={26 + 4} />

      <Button onClick={handleClick} text="plus" />
      <Button onClick={() => setCounter2(counter2 - 1)} text="minus" />
      <Button onClick={() => setCounter2(0)} text="zero" />

      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}

      <History allClicks={allClicks} />
    </>
  );
};

export default App;
