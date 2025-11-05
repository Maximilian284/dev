import Lenis from 'lenis'

let lenis : Lenis | null

export function useLenis() {
  if (!lenis) {
    lenis = new Lenis({
      lerp: 0.1,
    })

    function raf(time: number) {
      lenis!.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }

  return lenis
}