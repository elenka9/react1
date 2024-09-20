import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserCard } from './UserCard'
import { Product } from './Product'
import { Article } from './Article'
import { Button } from './Button'

function App() {
  
  const handleClick = () => {
    console.log('Кнопка была нажата')
  }

  return (
   <div>
      <UserCard name = "Маша" age={20}/> <br/>
      <Product name = "Молоко" description= "Кокосовое" price = "100"/> <br/>
      <Article title = 'Заголовок 1' text= 'Первый текст'/>
      <Article title = 'Заголовок 2' text= 'Второй текст'/>
      <Article title = 'Заголовок 3' text= 'Третий текст'/> <br/>
      <Button onClick={handleClick} text = 'button'/>
    </div>
  )
}

export default App
