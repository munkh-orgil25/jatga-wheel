import rewards from '../rewards.json'

export default function getRandomPrize() {
  const randomNum = Math.round(Math.random() * (rewards.length - 1))
  // const results = [
  //   { id: 0, count: 0 },
  //   { id: 1, count: 0 },
  //   { id: 2, count: 0 },
  //   { id: 3, count: 0 },
  //   { id: 4, count: 0 },
  //   { id: 5, count: 0 },
  //   { id: 6, count: 0 },
  //   { id: 7, count: 0 },
  //   { id: 8, count: 0 },
  //   { id: 9, count: 0 },
  // ]

  // for (let i = 0; i < 500; i++) {
  //   const randomN = rewards[Math.round(Math.random() * (rewards.length - 1))]
  //   results[randomN].count++
  // }
  // console.log(results)
  return rewards[randomNum]
}
