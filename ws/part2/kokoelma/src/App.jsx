import { useState } from 'react';
import Note from './components/Note.jsx';

const App = ({ notes }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
};

export default App;
