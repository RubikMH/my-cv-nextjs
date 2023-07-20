import React, { useEffect, useRef } from 'react'

const Main: React.FC<{ children: React.JSX.Element | React.JSX.Element[] }> = ({
  children,
}) => {
  const mainSection: any = useRef(null)
  useEffect(() => {
    const result = mainSection.current.className.split(' ')
    result[0] = 'opacity-100'
    mainSection.current.className = result.join(' ')
    console.log(mainSection.current.className)
  }, [])

  return (
    <main
      className="opacity-0 transition-all duration-500 relative "
      ref={mainSection}
    >
      {children}
    </main>
  )
}

export default Main
