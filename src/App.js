import './App.css'
import {useState} from 'react'
import AnimalShow from './AnimalShow.js'


function generateRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']

    return animals[Math.floor(Math.random() * animals.length)]
}


function App () {

    const [animals,setAnimals] = useState([])

    const handleClick = () => {
        setAnimals([...animals,generateRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal,index) => {
        return <AnimalShow key={index} type={animal} />
    })
    

    return (
        <div>
            <div className='header'>
                <button onClick={handleClick}>Add Animal</button>
            </div>
            <div className='animals'>
                {renderedAnimals}
            </div>
        </div>

    )
   


}

export default App