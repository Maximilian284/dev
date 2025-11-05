import Lenis from 'lenis'

let lenis

export function useLenis() {
  if (!lenis) {
    lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  return lenis
}