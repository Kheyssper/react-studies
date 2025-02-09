export default function Joke(props) {
    return (
        <>
            <div className="card">
                <p>{props.setup}</p>
                <p>{props.punchline}</p>
                <label>E engracado: {props.funny}</label>
            </div>
        </>
    )
}