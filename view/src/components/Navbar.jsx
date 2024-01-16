import {
    Link
} from "react-router-dom"
function Navbar() {
    return (
        <div
        ><ul className="flex">
                <li className="mr-6">
                    <Link to="/" className="text-blue-500 hover:text-blue-800" href="/">Movies</Link>
                </li>
                <li className="mr-6">
                    <Link to="/new" className="text-blue-500 hover:text-blue-800" href="/new">Add new movie</Link>
                </li>

            </ul></div>
    )
}

export default Navbar