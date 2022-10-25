import { useEffect, useState } from 'react';
import { fetchActivity } from './apiCalls';
import './App.css';
import Todo from './Todo';

const App: React.FC = () => {
  const [doIt, setActivity] = useState({
    accessibility: 0,
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
  })
  const [num, setNum] = useState(0)

  useEffect(() => {
    fetchActivity()
      .then(data => setActivity(data))
  }, [num])

  return (
    <div className="App">
      <Todo nums={num} {...doIt} />
      <button onClick={() => setNum(num + 1)}>Choose another Random Activity</button>
    </div>
  );
}

export default App;
