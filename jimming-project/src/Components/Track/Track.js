

function Track() {
    
    return(
        <div className="Track flex items-center border-b-[2px] border-indigo-600">
            <div className="Track-information flex flex-grow flex-col justify-center h-[4.5rem]">
                <h3 className="mb-[0.2rem]">Track name will go here</h3>
                <p className="text-[0.8rem] font-light text-gray-500">Track artist will go here | Track album will go here</p>
            </div>
            <button className="Track-action cursor-pointer p-[0.5rem] text-base transition text-black hover:text-gray-500 duration-500">+ - will go here</button>
        </div>
    )
}

export default Track;