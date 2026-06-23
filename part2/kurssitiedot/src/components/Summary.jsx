const Summary = ({ parts }) => {
  const count = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <b>total of {count} exercises</b>
    </p>
  );
};

export default Summary;
