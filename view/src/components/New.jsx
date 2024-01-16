import { useState } from "react"
import toast from "react-hot-toast"

function New({ setMovies }) {
  const [preview, setPreview] = useState("")
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const newMovie = {
        title: e.target.title.value,
        description: e.target.Description.value,
        posterURL: e.target.PosterUrl.value,
        rating: e.target.Rating.value
      }
      await fetch('http://localhost:3000/movies', {
        method: "POST",
        body: JSON.stringify(newMovie)
      })

      setTimeout(()=>{
        window.location.pathname="/"

      },1500)
    toast.success('movie created')
    } catch (error) {
      toast.error("error while creacting new movie")
    }

 

  }

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
    ><div className="w-full max-w-xs">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Title
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Description
            </label>
            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Description" type="text" placeholder="" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              PosterUrl
            </label>
            <input onChange={(e) => {
              setPreview(e.target.value)
            }} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="PosterUrl" type="text" placeholder="" />
          </div>
          <img src={preview || ""} alt="" />
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Rating
            </label>
            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Rating" type="number" placeholder="" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
              Create
            </button>

          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div></div>
  )
}

export default New