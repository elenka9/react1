export function UserCard(props){
    return (
        <div>
            <h1>Имя: {props.name}</h1>
            <h1>Возраст: {props.age}</h1>
        </div>
    )
}