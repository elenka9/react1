export function Button({onClick}) {
          // почему через запятую нельзя передать аргумент props
          // почему вставляем onClick - 'onClick' is missing in props validationeslin
    return (
        <button onClick={onClick}>
            Кнопка 
        </button> // как через props вставить название и оставить onClick не поняла 
    )
}