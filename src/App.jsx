import { useState, useRef, useEffect } from 'react'
import './App.css'

/**
   * Home Work:
   * 1 -- Сделать изменения счетчика с button onClick
   * 2 -- При изменнии count -- ставить фокус на input (нужен useRef)
   * 3 -- При повторном клике - записывать в input значение count
   */
function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    console.log(count, 'callback'); // 1
    // if (countRef.current && count % 2 == 1) {
    //   countRef.current.focus();
    // }

    return () => {
      console.log(count, 'return') // 2
      setTimeout(() => {
        console.log('return timeout') // 4
      }, 200)
      Promise.resolve().then(() => {
        console.log('return promise') // 3
      })
      queueMicrotask(() => {
        console.log('return queue')
      })
    }
  }, [count]);

  const handleClick = () => {
    // setTimeout(() => {
      // setCount(count + 1);
      setCount((prevCount) => {
        countRef.current.value = prevCount;
        return prevCount + 1;
      });
    // }, 5000);

  };

  return (
    <>
      <div>
        {count}
      </div>
      <button onClick={handleClick}>
        click me
      </button>
      <br />
      <input
        ref={countRef}
        type='text'
        placeholder='Только четные значения'
        // value={count}
        readOnly
      />
    </>
  )
}

export default App
