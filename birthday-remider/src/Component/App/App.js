import { useState } from 'react';
import data from '../../data';
import List from '../List/List';

function App() {
  const [people, setPeopele] = useState(data);

  const onRemoveAll = () => {
    setPeopele([]);
  }

  return (
    <div className="App bg-teal-400 min-h-screen flex justify-center align-middle ">
      <section className='w-[90vw] h-auto my-[5rem] mx-auto max-w-[450px] px-[2rem] py-6 bg-white rounded-md shadow-2xl'>
        <h3 className='text-base normal-case mb-8'>{people.length} birthday to day</h3>
        {people.map(person => {
          return <List person={person}/>
        })}
        <button onClick={onRemoveAll} className='w-full block capitalize border-transparent mt-8 mb-0 mx-auto cursor-pointer tracking-[0.1rem] text-[1.2rem] py-[0.5rem] px-0 outline outline-1 outline-teal-400 bg-teal-400 rounded-lg text-white '>Clear all</button>
      </section>
    </div>
  );
}

export default App;
