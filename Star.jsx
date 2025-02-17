import starFilled from "./estrela_full.png"
import starEmpty from "./estrela_nao_full.jpg"

export default function Star({ isFilled, onClick }) {
    let starIcon = isFilled ? starFilled : starEmpty

    return (
        <button
            onClick={onClick}
            aria-pressed={isFilled}
            aria-label={isFilled ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={starIcon}
                alt={isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}