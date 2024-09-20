export function Product(props){
    return (
        <div>
            <h1>Название: {props.name}</h1>
            <p>Описание: {props.description}</p>
            <p>Цена: {props.price}</p>
        </div>
    )
}