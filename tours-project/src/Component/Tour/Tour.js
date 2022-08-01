import { useState } from "react";


function Tour({tour, removeTour}) {
    const [readMore, setReadMore] = useState(false);
    console.log(tour);
    return(
        <article className="my-8 mx-auto pb-6 rounded-xl shadow-slate-900 bg-white shadow-lg">
            <img className="rounded-t-lg w-full h-[400px] object-cover" src={tour.image} alt={tour.name} />
            <footer className="mx-6">
                <div className="mt-6 flex justify-between " >
                    <h4 className="text-indigo-700 font-semibold tracking-widest">{tour.name}</h4>
                    <h4 className="bg-[#EBF7FF] text-[#49A6EA] px-2 rounded-md">${tour.price}</h4>
                </div>
                <p className="mt-8 text-indigo-400">
                    {readMore ? tour.info : `${tour.info.substring(0,200)}... `}
                    <button onClick={() => setReadMore(!readMore)} className="text-[#8FD0FC]">
                        {readMore ? "Show less" : "Read more"}
                    </button>
                </p>
                <button onClick={() => removeTour(tour.id)} className="block mt-3 mx-auto rounded-lg ring-1 ring-red-400 w-[200px] text-red-400 ">Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour;