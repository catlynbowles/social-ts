import { useEffect, useState } from 'react';
import { fetchActivity } from './apiCalls';
import './App.css';
import Todo from './Todo';
import { stringify } from 'querystring';
import { Hobby } from './Interfaces';

type Activity = {
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number
}

function App() {
  const [activity, setActivity] = useState({
    accessibility: 0,
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '', 
  })

  useEffect(() => {
    fetchActivity()
      .then(data => setActivity(data))
  }, [])

  return (
    <div className="App">
      <Todo {...activity}/>
    </div>
  );
}

export default App;
