const Part = ({ part }) => {
  return (
    <>
      <div>
        name: {part.name}
      </div>
      <div>
        exercises: {part.exercises}
      </div>
    </>
  );
};

export default Part;
