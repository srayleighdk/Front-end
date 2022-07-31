import Tour from "../Tour/Tour";

function Tours({tours, removeTour}) {
    return(
        <div>
            {tours.map((tour) => {
                return(
                    <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
                )
            })}
        </div>
    )
}

export default Tours;