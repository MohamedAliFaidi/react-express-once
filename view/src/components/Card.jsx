





function Card({ movie }) {


    return <>
        <div  style={{cursor:"pointer"}} className="w-full p-4 shadow-md lg:max-w-lg">
            <div className="space-y-2">
                <img src={movie.posterURL}></img>
                <h3 className="text-2xl font-semibold">
                    {movie.title}
                </h3>
                <p className="text-gray-600">
                    {movie.description}
                </p>
                {movie.rating}
            </div>
        </div>
    </>
}

export default Card
