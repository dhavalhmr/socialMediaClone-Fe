import { getDatabase, ref, set } from 'firebase/database';
import { app } from './lib/firebase';

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, 'users/demo'), {
      id: 1,
      name: 'bhumi',
      age: 24
    });
  };

  return (
    <div style={{ alignItems: 'center', justifyItems: 'center' }}>
      <h1>Firebase React App</h1>
      <button type="submit" onClick={putData}>
        submit
      </button>
    </div>
  );
}

export default App;
