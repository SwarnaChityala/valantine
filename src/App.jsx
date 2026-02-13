import { useEffect, useState } from 'react'
import './App.css'
import bg from './assets/cupcakes.jpg'
import loveImg from './assets/loveimg.jpeg'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const [floatingHearts, setFloatingHearts] = useState([])

  useEffect(() => {

    const hearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 10,
      delay: Math.random() * 5,
      size: 20 + Math.random() * 30 
    }))
    setFloatingHearts(hearts)
  }, [])

  const handleClick = () => {
    navigate('/valentine')
  }

  return (
    <div 
      className="app-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Floating hearts background */}
      {floatingHearts.map(heart => (
        <div
          key={heart.id}
          className="bg-floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`
          }}
        >
          ♥
        </div>
      ))}

      <div className="white-box">
        <h1 className="greeting">Hai Shiva Shanmukh 💕</h1>

        <div className="love-image-container">
          <img src={loveImg} alt="Love" className="love-image" />
        </div>
        <p className="subtitle">Please click here ⬇️</p>
        <button className="click-button" onClick={handleClick}>
          Click Here →
        </button>
      </div>
    </div>
  )
}

export default App