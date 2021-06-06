import React from 'react'
import FullCalendar, { DateSelectArg } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { createEventId, INITIAL_EVENTS } from '../../mocked/event'

export default class MyCalendar extends React.Component {
  render() {
    return (
      <FullCalendar
        viewClassNames="absolute w-full max-h-full right-0 left-0 top-2"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        select={this.handleDateSelect}
        businessHours={[
          {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '08:00',
            endTime: '12:00',
          },
          {
            daysOfWeek: [1, 2, 3, 4, 5],
            startTime: '13:00',
            endTime: '18:00',
          },
        ]}
        firstDay={1}
        slotMinTime={{ hour: 7 }}
        initialEvents={INITIAL_EVENTS}
        eventAdd={function () {
          console.log(`Add`)
        }}
        eventChange={function () {
          console.log(`change`)
        }}
        eventRemove={function () {
          console.log(`Removed`)
        }}
      />
    )
  }
  handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      })
    }
  }
}
