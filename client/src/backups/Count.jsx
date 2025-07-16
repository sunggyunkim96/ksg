import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  //export 는 기본적으로 모듈의 모든 것을 내보내는 것이고,
  //export default 는 모듈의 기본값을 내보내는 것이다.
  //export default 는 모듈당 하나만 존재할 수 있다.
  //export 는 여러 개를 내보낼 수 있다.

  function increase() {
    setCount(count + 1)
  }

  function decrease() {
    setCount(count - 1)
  }

  return (
    <>
      <div>Hello {count}?</div>
      <button onClick={increase}> 증가</button>
      <button onClick={decrease}> 감소</button>
    </>
  )
}

// import {} from 는 모듈에서 특정한 것만 가져오는 것이다.
// import * as 는 모듈에서 모든 것을 가져오는 것이다.
// import 는 모듈에서 기본값을 가져오는 것이다.
