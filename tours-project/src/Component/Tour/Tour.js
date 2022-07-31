import { useState } from "react";


function Tour({tour, removeTour}) {
    const [readMore, setReadMore] = useState(false);
    console.log(tour);
    return(
        <article className="my-8 mx-auto rounded-xl shadow-slate-900">
            <img src={tour.image} alt={tour.name} />
            <footer>
                <div>
                    <h4>{tour.name}</h4>
                    <h4>${tour.price}</h4>
                </div>
                <p>
                    {readMore ? tour.info : `${tour.info.substring(0,200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? "show less" : "show more"}
                    </button>
                </p>
                <button onClick={() => removeTour(tour.id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour;