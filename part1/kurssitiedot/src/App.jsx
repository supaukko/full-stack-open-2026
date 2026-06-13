const Header = (props) => <h1>{props.course}</h1>;

const Content = (props) => {
  console.log(props.contentData);
  return (
    <>
      {props.data?.length > 0 &&
        props.data.map((item) => <Part key={item.id} data={item} />)}
    </>
  );
};

const Part = ({ data }) => (
  <p>
    {data.part} {data.exercises}
  </p>
);

const Total = (props) => <p>Number of exercises {props.total}</p>;

const App = () => {
  const course = 'Half Stack application development';
  const contentData = [
    { id: 1, part: 'Fundamentals of React', exercises: 10 },
    { id: 2, part: 'Using props to pass data', exercises: 7 },
    { id: 3, part: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content data={contentData} />
      <Total
        total={contentData.reduce((acc, item) => acc + item.exercises, 0)}
      />
    </div>
  );
};

export default App;
