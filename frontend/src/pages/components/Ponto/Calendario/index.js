import React, { useState } from 'react'
import { ptBR } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from 'react-nice-dates'

import 'react-nice-dates/build/style.css'
import './styles-calendario.css'


export default function Calendario() {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()


  return (
    <DateRangePicker
      startDate={startDate}
      endDate={endDate}
      onStartDateChange={setStartDate}
      onEndDateChange={setEndDate}
      minimumDate={new Date()}
      minimumLength={1}
      format='dd MMM yyyy'
      locale={ptBR}
    >
      {({ startDateInputProps, endDateInputProps, focus }) => (
        <div className='date-range'>
          <input
            className={'input' + (focus === START_DATE ? ' -focused' : '')}
            {...startDateInputProps}
            placeholder='Data de inicio'
          />
         <span className='date-range_arrow' />
          <input
            className={'input' + (focus === END_DATE ? ' -focused' : '')}
            {...endDateInputProps}
            placeholder='Data de fim'
          />
        </div>
      )}
    </DateRangePicker>
  )
}


