import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from '../demoData/appointments';
import './scheduleTutor.css';

const ScheduleTutor = () => {
  const [data, setData] = useState(appointments);
  // const [currentDate, setCurrentDate] = useState('2018-06-27');
  const currentDate = '2018-06-27';
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointmentChanges, setAppointmentChanges] = useState({});
  // const [editingAppointment, setEditingAppointment] = useState(undefined);

  const changeAddedAppointment = (addedAppointment) => {
    setAddedAppointment(addedAppointment);
  };

  const changeAppointmentChanges = (appointmentChanges) => {
    setAppointmentChanges(appointmentChanges);
  };

  // const changeEditingAppointment = (editingAppointment) => {
  //   setEditingAppointment(editingAppointment);
  // };

  const commitChanges = (added, changed, deleted) => {
    let data;
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
      data = [...data, { id: startingAddedId, ...added }];
    }
    if (changed) {
      data = data.map((appointment) =>
        changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment
      );
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted);
    }
    setData(data);
  };

  return (
    <div id='schedule'>
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState currentDate={currentDate} />
          <EditingState
            onCommitChanges={() => commitChanges()}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={() => changeAddedAppointment()}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={() => changeAppointmentChanges()}
            // editingAppointment={editingAppointment}
            // onEditingAppointmentChange={changeEditingAppointment()}
          />
          <WeekView startDayHour={9} endDayHour={17} />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default ScheduleTutor;
