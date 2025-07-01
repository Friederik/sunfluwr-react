import { useState } from "react"

export default useHook = () => {
    const [count, setCount] = useState(0)

    return count, setCount
}