import { useEffect, useRef, useState } from 'react'
import Button from './components/Button'
import Wheel from './components/Wheel'
import gsap from 'gsap'
import Indicator from './components/Indicator'
import { indicatorAnim } from './animations'
import getRandomPrize from './utils/getRandomPrize'
import { AiOutlineGift as GiftIcon } from 'react-icons/ai'
import { BiBookAlt as BookIcon } from 'react-icons/bi'
import { TbShirt as ShirtIcon } from 'react-icons/tb'
import { FaRegHeart as HeartIcon } from 'react-icons/fa'
import Title from './components/Title'
import Confetti from 'react-confetti'
import Wheel12 from './components/Wheel12'

function App() {
  const [start, setStart] = useState(false)
  const wheel = useRef()
  const [incrementor, setIncrementor] = useState({ value: 0 })
  const [duration, setDuration] = useState(0)
  const [pressed, setPressed] = useState(false)
  const [prize, setPrize] = useState(0)
  const [current, setCurrent] = useState(0)
  const [won, setWon] = useState(false)
  const [lastPrize, setLastPrize] = useState(13)

  const wheelAnim = gsap.timeline()

  const prizes = [
    { order: 0, name: 'Хөргөгчний наалт', icon: <GiftIcon /> },
    { order: 11, name: 'Flashcard', icon: <GiftIcon /> },
    { order: 10, name: 'Баярлалаа', icon: <HeartIcon /> },
    { order: 9, name: 'IELTS 800 ном', icon: <BookIcon /> },
    { order: 8, name: 'Hippocards 2 сар', icon: <GiftIcon /> },
    { order: 7, name: 'Tote Bag', icon: <GiftIcon /> },
    { order: 6, name: 'Буддаг/Хүүхдийн ном', icon: <BookIcon /> },
    { order: 5, name: "50'000₮", icon: <GiftIcon /> },
    { order: 4, name: 'LIME дугаар', icon: <GiftIcon /> },
    { order: 3, name: 'Hippocards 6 сар', icon: <GiftIcon /> },
    { order: 2, name: 'Cardholder', icon: <BookIcon /> },
    { order: 1, name: 'Түлхүүрийн оосор', icon: <GiftIcon /> },
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
      // dont touch!! :)
      const distance = prize > current ? prize - current : prize + 12 - current
      setCurrent(prize)
      wheelAnim.to('.wheel', {
        duration: 0.5,
        rotate: `+= ${
          360 * Math.floor(duration) + distance * 30 + (Math.random() * 3 - 1.5)
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
          setWon(true)
        },
      })
    }
  }, [start])

  const handlePressDown = () => {
    setWon(false)
    if (!start) {
      durationAnim.play()
      setPressed(true)
    }
  }

  const handlePressUp = () => {
    if (!start) {
      setPressed(false)
      durationAnim.kill()
      let prize = getRandomPrize()
      if (prize === lastPrize) {
        prize = getRandomPrize()
      }
      setPrize(prize)
      setLastPrize(prize)
    }
    setStart(true)
  }

  return (
    <div className="main">
      <div className="logo">
        <div className="left">
          <img src="/digital.png" />
        </div>
        <div className="right">
          <img src="/hippo.png" />
        </div>
      </div>
      {/* <div className="title_wrapper">
        <Title />
      </div> */}
      <div className="wheel_wrapper">
        <div className="wheel">
          {/* <Wheel ref={wheel} /> */}
          <Wheel12 ref={wheel} />
          <div className="texts_wrapper">
            {prizes.map((prize, index) => (
              <div key={prize.order} className="text_wrapper">
                <p
                  className="text"
                  style={{
                    transform: `rotate(${30 * index}deg)`,
                  }}
                >
                  {prize.name}
                  <span className="icon">{prize.icon}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
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
      </div>

      {won && (
        <>
          <div className="confetti_wrapper">
            <Confetti recycle={true} numberOfPieces={2000} />
          </div>
          <div className="prize_modal_wrapper">
            <div className="prize_modal">
              <div className="subheading_wrapper">
                <h4>Баяр хүргэе!</h4>
              </div>
              <div className="prize">
                <h1>{prizes.find((p) => p.order === prize).name}</h1>
                <span className="icon">
                  {prizes.find((p) => p.order === prize).icon}
                </span>
              </div>
            </div>
          </div>
          <div className="black_filter" onClick={() => setWon(false)} />
        </>
      )}
    </div>
  )
}

export default App
