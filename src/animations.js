import gsap from 'gsap'

const indicatorAnim = (target) =>
  gsap
    .timeline()
    .to(target, {
      duration: 0.13,
      rotate: -7,
    })
    .to(target, {
      duration: 0.13,
      rotate: 0,
    })

const buttonAnim = (target) =>
  gsap.to(target, {
    duration: 3,
    scale: 0.7,
  })

export { indicatorAnim, buttonAnim }
