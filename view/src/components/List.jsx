
import Card from './Card'

function List({ movies }) {

    return <> <div style={{
        display:"flex",
        justifyContent:"center"
    }}>{movies.map((item, index) => { return <Card key={index} movie={item} /> })} </div>

    </>
}

export default List
