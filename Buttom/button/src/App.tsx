import { useState } from 'react';
import './App.css';

type Person = {
  name: string;
  lastname: string;
};

function App() {
  const [person, setPerson] = useState<Person>({
    name: '',
    lastname: '',
  });

  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
    console.log(e.target.value);
    setPerson({ ...person, [target]: e.target.value });
  };

  const onSave = () => {
    console.log(person);
  };

  return (
    <div>
      <input
        onChange={(e) => onChangeText(e, 'name')}
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => onChangeText(e, 'lastname')}
        type="text"
        placeholder="Lastname"
      />
      <button onClick={onSave}>Save</button>
      {(person.name && person.lastname) ? person.name + ' ' + person.lastname : null}
    </div>
  ); 
}

export default App;
