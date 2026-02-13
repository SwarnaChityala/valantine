import { useState, useEffect } from 'react'
import './ValentinePage.css'
import bg from './assets/cupcakes.jpg'
import babImg from './assets/bab.jpeg'
import girlImg from './assets/girl.jpeg'

function ValentinePage() {
    const [showModal, setShowModal] = useState(false)
    const [showNoAlert, setShowNoAlert] = useState(false)
    const [confetti, setConfetti] = useState([])
    const [floatingHearts, setFloatingHearts] = useState([])

    useEffect(() => {
        // Create floating hearts on mount
        const hearts = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            animationDuration: 10 + Math.random() * 10,
            delay: Math.random() * 5,
            size: 20 + Math.random() * 30
        }))
        setFloatingHearts(hearts)
    }, [])

    const handleYes = () => {
        setShowModal(true)
        createConfetti()
    }

    const handleNo = () => {
        setShowNoAlert(true)
        setTimeout(() => setShowNoAlert(false), 3000)
    }

    const closeModal = () => {
        setShowModal(false)
        setConfetti([])
    }

    const createConfetti = () => {
        const newConfetti = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 0.5,
            duration: 2 + Math.random() * 2,
            emoji: ['💕', '💖', '💗', '💝', '💓', '🌹', '✨', '🎉'][Math.floor(Math.random() * 8)]
        }))
        setConfetti(newConfetti)
    }

    return (
        <div
            className="valentine-container"
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

            <div className="valentine-box">
                <h1 className="valentine-title"> Will You Be My Valentine?</h1>
                <div className="love-image-container">
                    <img src={babImg} alt="Love" className="love-image" />
                </div>
                <p className="valentine-text">
                    You are the reason my heart smiles every single day ❤️
                </p>


                {showNoAlert && (
                    <div className="error-alert">
                        <span className="error-icon">⚠️</span>
                        <span className="error-text">You don't have another option!</span>
                    </div>
                )}

                <div className="button-group">
                    <button className="yes-button" onClick={handleYes}>
                        Yes! 💕
                    </button>
                    <button className="no-button" onClick={handleNo}>
                        No 💔
                    </button>
                </div>
            </div>

            {/* Creative Modal */}
            {showModal && (
                <div className="modal-overlay" onClick={closeModal}>
                    {/* Confetti */}
                    {confetti.map(item => (
                        <div
                            key={item.id}
                            className="confetti"
                            style={{
                                left: `${item.left}%`,
                                animationDelay: `${item.delay}s`,
                                animationDuration: `${item.duration}s`
                            }}
                        >
                            {item.emoji}
                        </div>
                    ))}

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>

                        <h2 className="modal-title">
                            <span className="letter">H</span>
                            <span className="letter">a</span>
                            <span className="letter">p</span>
                            <span className="letter">p</span>
                            <span className="letter">y</span>
                            <span className="space"> </span>
                            <span className="letter">V</span>
                            <span className="letter">a</span>
                            <span className="letter">l</span>
                            <span className="letter">e</span>
                            <span className="letter">n</span>
                            <span className="letter">t</span>
                            <span className="letter">i</span>
                            <span className="letter">n</span>
                            <span className="letter">e</span>
                            <span className="letter">'</span>
                            <span className="letter">s</span>
                            <span className="space"> </span>
                            <span className="letter">D</span>
                            <span className="letter">a</span>
                            <span className="letter">y</span>
                            <span className="letter">!</span>
                        </h2>

                        <div className="rose-line">🌹 🌹 🌹</div>

                        <p className="modal-text">
                            <span className="sparkle-text">✨ Yay! You made my day! ✨</span><br />
                            <div className="love-image-container">
                                <img src={girlImg} alt="Love" className="love-image" />
                            </div>
                            <span className="love-message">Thank you for being my Valentine Shiva!</span>
                        </p>

                        {/* Floating hearts animation */}
                        <div className="hearts-animation">
                            <span className="heart-1">💖</span>
                            <span className="heart-2">💗</span>
                            <span className="heart-3">💕</span>
                            <span className="heart-4">💝</span>
                            <span className="heart-5">💓</span>
                        </div>

                        {/* Cute message */}
                        <div className="cute-message">
                            <p>Together we're sweeter than cupcakes! 🧁</p>
                        </div>

                        <button className="modal-close-button" onClick={closeModal}>
                            <span className="button-shine-modal"></span>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ValentinePage