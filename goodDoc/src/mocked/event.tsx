import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
const todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr,
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T09:00:00',
  },
  // {
  //   daysOfWeek: ['1', '2', '3', '4', '5'], // these recurrent events move separately
  //   startTime: '12:00:00',
  //   endTime: '13:00:00',
  //   color: 'orange',
  //   title: 'lunch',
  // },
]

export function createEventId() {
  return String(eventGuid++)
}
