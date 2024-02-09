import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const buttonRef = useRef(null);
  const divRef = useRef('null');

  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('clicked')
    setCount(count + 1);
    if (divRef.current === 'null') {
      divRef.current = 'not null more'
    }
  }

  useEffect(() => {
    console.log(buttonRef);
    console.log(divRef);
    console.log('USE EFFECT WORKS ON MOUNT')
    if (typeof divRef.current !== 'number') {
      divRef.current = 0;
    }


    // if (buttonRef.current) {
    //   buttonRef.current.addEventListener('click', handleClick)
    // }

    return () => {
      console.log('USE EFFECT WORKS ON UNMOUNT')
      divRef.current += 1;
      // if (buttonRef.current) {
      //   buttonRef.current.removeEventListener('click', handleClick)
      // }
    }
  }, [buttonRef, divRef])

  return (
    <>
      <div>
        Started React
      </div>
      <button ref={buttonRef} onClick={handleClick}>
        Test
      </button>
      <div>
        {count}
      </div>
      <div>
        { divRef.current

        }
      </div>
    </>
  )
}

export default App
