import React from 'react'

const CircleGraphic: React.FC = () => {
  return (
    <div className="hidden lg:block h-72 w-72 absolute right-0 bottom-0">
      <div className="h-52 w-52 bg-blue-circleLight rounded-full absolute -right-20 -bottom-20"></div>
      <div className="h-32 w-32 bg-blue-circleDark rounded-full absolute right-10 bottom-10 opacity-95"></div>
    </div>
  ) 
}

export default CircleGraphic
