import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Tours from "../Tours/Tour";


const url = 'https://course-api.com/react-tours-project'; 

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setIsLoading(false);
      setTours(tours);
    } catch(error){
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, []);

  if(isLoading) {
    return(
      <main className="w-[90vw] mx-auto">
        <Loading />
      </main>
    )
  }

  if(tours.length === 0) {
    return(
      <div>
        <h1 className='mt-8 mb-1 mx-auto text-center w-full text-3xl font-bold text-indigo-700'>No Tours left</h1>
        <button onClick={() => fetchTours()} className="mx-auto bg-teal-400 px-2 py-1 rounded-md cursor-pointer inline-block text-white">Refesh</button>
      </div>
    )
  }

  return (
    <div className="bg-gray-300">
      <div className="App w-[90vw] mx-auto max-w-2xl ">
        <h1 className='mt-8 mb-1 mx-auto text-center w-full text-3xl font-bold text-indigo-700'>Our Tours</h1>
        <div className="w-[6rem] h-[0.25rem] bg-slate-800 mx-auto"></div>
        <Tours tours={tours} removeTour={removeTour}/>
      </div>
    </div>
    );
};

export default App;
