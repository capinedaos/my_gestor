import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { ButtonReturn } from "../components";
import { localizer, getMessages } from "../../helpers";
import "react-big-calendar/lib/css/react-big-calendar.css";

const events = [
  {
    title: "salir a rodar",
    notes: "ruta a la mansa",
    start: new Date(),
    end: addHours(new Date(), 2),
  },
];

const CalendarPage = () => {
  return (
    <div>
      <ButtonReturn route={"/talent-management/home"} />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc( 100vh - 150px )" }}
        messages={getMessages()}
      />
    </div>
  );
};

export default CalendarPage;
