import rewards from '../rewards.json'

export default function getRandomPrize() {
  const randomNum = Math.round(Math.random() * (rewards.length - 1))
  return rewards[randomNum]
}
