import React from 'react'

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">{children}</div>
  )
}

export default DefaultLayout
