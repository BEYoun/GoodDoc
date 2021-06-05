import React from 'react'

import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import MyCalendar from '../../components/Module/MyCalendar'

const Calendrier: React.FC = () => {
  return (
    <div className="m-5 flex h-full space-x-5">
      <div className="flex-1 flex flex-col bg-white rounded-md shadow divide-y divide-gray-200">
        <DayPicker className="w-full" />
        <div className="h-full flex justify-center items-center">
          <p>Supplement d&apos;inforamtion a disctuter</p>
        </div>
      </div>
      <div className="flex-4 max-h-full h-full p-2 rounded-md bg-white shadow">
        <div className="relative w-full overflow-auto overflow-hidden h-full">
          <div className="absolute w-full right-0 left-0 top-2 overscroll-none">
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendrier
