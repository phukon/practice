import React, {useState, useEffect} from 'react'

export function UseEffectExample1() {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const [windowHeight, setwindowHeight] = useState(window.innerHeight);

  const handleResize1 = () => {
    setwindowWidth(window.innerWidth)
  }

  const handleResize2 = () => {
    setwindowHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize1)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleResize2)
  }, [])


  return (
   <div>
      <h1>This is the window width and height👇🏽</h1>
      {windowWidth} X {windowHeight}
  </div>
  )
}
