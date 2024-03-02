import { ReactElement, useState } from 'react'
import Shelf from './componenets/Shelf'
import './App.css'

const ShelvesArray: ReactElement<any, any>[] = [];
for (var i = 0; i < 3; i++) {
  ShelvesArray.push(<Shelf />)
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="shelf-wrapper">
      Max Amount of Books: 10
      {
        ShelvesArray.map((shelf, index)=> {
          return (
            <div key={index} id={"shelf" + String(index)}>
              {shelf}
            </div>
          );
        })
      }
      </div>
    </>
  )
}

export default App
