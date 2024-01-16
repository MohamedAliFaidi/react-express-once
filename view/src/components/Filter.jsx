
function Filter({ movies, setFiltred }) {


    const handleRating = (e) => {
        console.log(e.target.value, typeof e.target.value)
        const filtred = movies.filter((el) => {
            return el.rating >= parseFloat(e.target.value) && el.rating <= parseFloat(e.target.value)+0.9
        })
        console.log(filtred)
        setFiltred(filtred)


    }


    const handleTitleSearch = (e) => {
        console.log(e)
        const titleRegex = new RegExp(e.target.value, "i");

        const filtred = movies.filter((el) => {
            return titleRegex.test(el.title)

        })
        console.log(filtred)
        setFiltred(filtred)

    }




    return (
        <div>
            <input type="text" onChange={handleTitleSearch} placeholder="search with a title" />
            <input type="text" placeholder="search with rating" onChange={handleRating} />

        </div>
    )
}

export default Filter