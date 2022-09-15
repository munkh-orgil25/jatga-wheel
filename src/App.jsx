import { useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import Wheel from './components/Wheel'
import gsap from 'gsap'
import Indicator from './components/Indicator'
import { indicatorAnim } from './animations'

function App() {
  const [start, setStart] = useState(false)
  const wheel = useRef()
  const [incrementor, setIncrementor] = useState({ value: 0 })
  const [duration, setDuration] = useState(0)
  const [pressed, setPressed] = useState(false)
  const [prize, setPrize] = useState(0)
  const [current, setCurrent] = useState(0)

  const wheelAnim = gsap.timeline()

  const prizes = [
    { order: 0, name: 'LIME дугаар', chance: 0.1 },
    { order: 9, name: 'asdasd', chance: 0.1 },
    { order: 8, name: 'LIME дугаар', chance: 0.1 },
    { order: 7, name: 'LIME дугаар', chance: 0.1 },
    { order: 6, name: 'LIME дугаар', chance: 0.1 },
    { order: 5, name: 'LIME дугаар', chance: 0.1 },
    { order: 4, name: 'LIME дугаар', chance: 0.1 },
    { order: 3, name: 'LIME дугаар', chance: 0.1 },
    { order: 2, name: 'LIME дугаар', chance: 0.1 },
    { order: 1, name: 'LIME дугаар', chance: 0.1 },
  ]

  const durationAnim = gsap.to(incrementor, {
    value: 6,
    paused: true,
    duration: 3,
    onUpdate: () => setDuration(incrementor.value),
    onComplete: () => setIncrementor({ value: 0 }),
  })

  // Spin animation
  useEffect(() => {
    if (start) {
      console.log(
        'speed',
        Math.floor(duration),
        'prize',
        prize,
        'current',
        current
      )
      const distance = prize > current ? prize - current : prize + 10 - current

      wheelAnim
        .to('#wheel', {
          duration: 6,
          rotate: `+= ${
            360 * Math.floor(duration) + distance * 36 + (Math.random() * 8 - 4)
          }`,
          ease: 'power4.easeOut',
          onUpdate: () => {
            const currRotation = wheel.current.style.transform.slice(34, -4)
            const tolerance = wheelAnim.progress() <= 0.3 ? 10 : 0
            if (
              Math.round(currRotation) % 36 <= tolerance &&
              currRotation !== ''
            ) {
              if (
                indicatorAnim('#indicator').progress() > 0.3 ||
                indicatorAnim('#indicator').progress() === 0
              ) {
                indicatorAnim('#indicator').play(0)
              }
            }
          },
          onComplete: () => {
            setStart(false)
          },
        })
        .to('.texts_wrapper', {
          duration: 6,
          rotate: `+= ${
            360 * Math.floor(duration) + distance * 36 + (Math.random() * 8 - 4)
          }`,
          ease: 'power4.easeOut',
          delay: -6,
        })
    }
  }, [start])

  const handlePressDown = () => {
    if (!start) {
      durationAnim.play()
      setPressed(true)
    }
  }

  const handlePressUp = () => {
    if (!start) {
      setPressed(false)
      durationAnim.kill()
      setPrize(Math.round(Math.random() * 9))
      setCurrent(prize)
    }
    setStart(true)
  }

  return (
    <div className="main">
      <div className="title_wrapper">
        <p>duration: {incrementor.value}</p>
        <p>prize: {prize}</p>
      </div>
      <div className="wheel_wrapper">
        <Wheel ref={wheel} />
        <div className="indicator_wrapper">
          <Indicator />
        </div>
        <div className="button_wrapper">
          <Button
            onMouseDown={handlePressDown}
            onMouseUp={handlePressUp}
            pressed={pressed}
          />
        </div>
        <div className="texts_wrapper">
          {prizes.map((prize, index) => (
            <div key={prize.order} className="text_wrapper">
              <p
                className="text"
                style={{ transform: `rotate(${36 * index}deg)` }}
              >
                {prize.order}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
