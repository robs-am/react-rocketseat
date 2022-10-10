import './styles.css'

export function Card(props) {
    return (
        <div className='card'>
            <strong className='card-name'>{props.name}</strong>
            <small className='card-hour'>{props.time}</small>
        </div>
    )
}