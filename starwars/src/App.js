import React from 'react'

import MoviesList from './components/MoviesList'
import AddMovie from './components/AddMovie'
import './App.css'

function App() {
    const [movies, setMovies] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const fetchMoviesHandler = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(
                'https://learn-react-http-2ee6e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
            )

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const data = await response.json()

            const loadedMovies = []
            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                })
            }

            setMovies(loadedMovies)
            setIsLoading(false)
        } catch (error) {
            setError(error.message)
        }
    }
    const addMovieHandler = async (movie) => {
        // Add the movie to the Firebase database
        try {
            const response = await fetch(
                'https://learn-react-http-2ee6e-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
                {
                    method: 'POST',
                    body: JSON.stringify(movie),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            if (!response.ok) {
                throw new Error('HTTP error ' + response.status)
            }

            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log('There was an error:', error)
        }
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : !movies.length ? (
                    <p>No movies found</p>
                ) : (
                    <MoviesList movies={movies} />
                )}
            </section>
        </React.Fragment>
    )
}

export default App
