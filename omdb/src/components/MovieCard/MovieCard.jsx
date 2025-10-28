import { useNavigate } from 'react-router'
import './MovieCard.css'

const MovieCard = ({Title, Year, imdbId, Poster}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/movie/${imdbId}')
    }
    return (
        <div onClick={handleClick} className="movie-card">
            <h4 className="movie-card__title">{Title}</h4>
            <img src={Poster} alt="" className="movie-card__image" />
            <div className="movie-card__year">{Year}</div>
        </div>
    )
}

export default MovieCard