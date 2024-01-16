
import Card from './Card'
import { useNavigate } from "react-router-dom"

function List({ movies }) {
    const navigate = useNavigate()

    return <> <div style={{
        display: "flex",
        justifyContent: "center"
    }}>{movies.map((item, index) => {
        return <button key={index}
            onClick={() => {
                navigate(`/movie/${item.id}`)
            }}

        > <Card movie={item} /> </button>
    })} </div>

    </>
}

export default List
