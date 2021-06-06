import React from 'react'

import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import MyCalendar from '../../components/Module/MyCalendar'

const Calendrier: React.FC = () => {
  return (
    <div className="m-5 flex flex-col md:flex-row h-full space-y-5 space-x-0 md:space-y-0 space-x-5 overflow-hidden">
      <div className="flex-1 bg-white rounded-md shadow border p-2 overflow-auto">
        <div className="flex flex-col divide-y divide-gray-200 h-full">
          <DayPicker className="w-full" />
          <div className="h-full flex justify-center items-center">
            <p>Supplement d&apos;inforamtion a disctuter</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block flex-4 max-h-full h-full p-2 rounded-md bg-white shadow overflow-auto overflow-none border">
        <div className="relative">
          <div className="absolute w-full max-h-full right-0 left-0 top-2">
            <MyCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendrier
