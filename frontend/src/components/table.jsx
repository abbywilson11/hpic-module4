import { useState } from "react"
import "./table.css"

function Table() {
  const [city, setCity] = useState("") 
  const [hospitals, setHospitals] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const API_KEY = "48880ae7bc084367b7342a79560b95c5"

  const handleSearch = async () => {
    if (!city) return //if city is empty do nothing
    setLoading(true) //makes the loading sign show up
    setError("") // clears previous errors before starting the new request
    setHospitals([]) // clears previous reults

    try {
// gets the latitude and longitude of the entered city
      const geoResponse = await fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(city)}&apiKey=${API_KEY}`
      )
      const geoData = await geoResponse.json()
      // checks in features is empty 
      if (!geoData.features.length) {
        setError("City not found")
        setLoading(false)
        return
      }

      const { lat, lon } = geoData.features[0].properties // destructures lat an long from first location result

      // looks for hospitals in a 5km radius 
      const placesUrl = `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:${lon},${lat},5000&apiKey=${API_KEY}`

      const placesResponse = await fetch(placesUrl)
      const placesData = await placesResponse.json()

      // filters out the irrelevent places
      const onlyHospitals = placesData.features.filter((f) => {
        const name = f.properties.name?.toLowerCase() || ""
        return (
          !name.includes("pharmacy") &&
          !name.includes("veterinary") &&
          !name.includes("clinic") &&
          !name.includes("beauty") &&
          !name.includes("dentist")
        )
      })

      setHospitals(onlyHospitals)
    } catch (err) { // runs if any error occurs in the try block
      console.error(err)
      setError("Something went wrong.")
    } finally { // runs after try or catch
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <h1>Find Hospitals</h1>

{/* input box and search button */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter a city (e.g., Toronto)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
{/* displays loading message */}
      {loading && <p>Searching hospitals in {city}...</p>}
      {/* displays error message if any */}
      {error && <p className="error">{error}</p>}

{/* displays the results in a table */}
      {!loading && hospitals.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Hospital Name</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {hospitals.map((h, idx) => (
              <tr key={idx}>
                <td>{h.properties.name || "Unnamed Hospital"}</td> 
                <td>{h.properties.address_line2 || "Address unavailable"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
{/* displays message when no results */}
      {!loading && hospitals.length === 0 && !error && (
        <p>Enter a city and click search.</p>
      )}
    </div>
  )
}

export default Table
