import PropTypes from 'prop-types';

const Hello = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello world, {name} {age}
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();

  return (
    <div>
      <p>Creetings, it is {now.toString()}</p>
      <Hello name="Hemmo" age={26 + 4} />
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.numbers.isRequired,
};

export default App;
