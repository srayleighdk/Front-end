

function List({person}) {

    return (
        <>
            <article className="grid grid-cols-[auto_1fr] gap-3 mb-6 items-center">
                <img src={person.image} alt="" className="w-[75px] h-[75px] object-cover rounded-full shadow-md" />
                <div className="">
                    <h4 className="mb-[0.35rem]">{person.name}</h4>
                    <p className="mb-0">{person.age} years</p>
                </div>
            </article>
        </>
    )
}

export default List;