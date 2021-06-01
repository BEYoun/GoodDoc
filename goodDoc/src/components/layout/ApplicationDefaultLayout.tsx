import React from 'react'

const ApplicationDefaultLayout: React.FC = ({ children }) => {
  return <main className="flex-1 relative z-0 overflow-y-auto">{children}</main>
}

export default ApplicationDefaultLayout
