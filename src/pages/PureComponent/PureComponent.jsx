import { useState } from "react"
import Counter from "./Counter"

function Pure() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("Hello")

  return (
    <div>
      <Counter value={count} />
      <button onClick={() => setCount(count + 1)}>Tambah</button>

      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

export default Pure;
