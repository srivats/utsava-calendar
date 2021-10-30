import React from "react";
import {Calendar, dateFnsLocalizer} from 'react-big-calendar';
import enIN from 'date-fns/locale/en-IN';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import getDay from 'date-fns/getDay';
import startOfWeek from 'date-fns/startOfWeek';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import UtsavaDates from './UtsavaDates';
import CustomToolBar from "./CustomToolbar";
const locales={
    'en-IN':enIN
}
const localizer=dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});
const utsavaEvents=UtsavaDates;

export const UtsavaCalendarMobile=(props)=>{
    return(
        <div>
        <h1>{props.title}</h1>
        <Calendar localizer={localizer}
         startAccessor="start"
         endAccessor="end"
         events={utsavaEvents}
         style={{ height: 500 }}
         views={['month','week','agenda']}
         defaultView='month'
         components={{toolbar:CustomToolBar}}
        />
        </div>
    );
}
export default UtsavaCalendarMobile; 