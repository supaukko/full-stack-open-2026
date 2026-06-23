import Part from './Part.jsx';
import Summary from './Summary.jsx';

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <Summary parts={parts} />
    </div>
  );
};

export default Content;
