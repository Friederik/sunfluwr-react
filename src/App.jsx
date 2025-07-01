import { useState } from "react"
import myImage from './assets/sunflower.png'

function App() {
    const [color, setColor] = useState(true)

    return (
        <>
            <div style={{transition: 'all 0.3s',backgroundColor: color ? 'orange' : 'black', 
                width: '100%', height: '100dvh', display: 'flex', flexDirection: 'column', 
                justifyContent: 'center', alignItems: 'center', gap: '1rem'}}>
                
                <h1 style={{fontSize: '4rem', color: color ? 'black' : 'white'}}>sunfluwr React</h1>
                <button style={{background: 'transparent', border: 0, borderRadius: '50%'}} onClick={() => setColor((color) => !color)}>
                    <img style={{width: '200px', cursor: 'pointer', filter: `drop-shadow(0 0 10px ${color ? 'black' : 'orange'})`}} src={myImage} alt="sunflower" />
                </button>
                <p style={{fontSize: '1.25rem', color: color ? 'black' : 'white'}}>
                    © sunfluwr
                </p>
            </div>
        </>
    )
}

export default App
