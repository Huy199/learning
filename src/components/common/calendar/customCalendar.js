import  React from 'react';
import { MultiViewCalendar } from '@progress/kendo-react-dateinputs';
export const CustomCalendar = (props) => {
  return <MultiViewCalendar views={1} value={props.value} onChange={props.onChange} />;
};
