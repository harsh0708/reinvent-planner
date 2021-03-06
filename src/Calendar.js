import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import Event from "./Event";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = BigCalendar.momentLocalizer(moment);

export default ({ events }) => {
  if (!events) {
    return null;
  }

  return (
    <div className="Calendar">
      <BigCalendar
        localizer={localizer}
        defaultDate={new Date(2018, 10, 25)}
        defaultView="week"
        scrollToTime={new Date(2018, 10, 25, 8)}
        tooltipAccessor="tooltip"
        events={events}
        components={{ event: Event }}
        onDoubleClickEvent={event => {
          if (event.link) {
            window.open(event.link, "_blank");
          }
        }}
        eventPropGetter={event => {
          const locationColors = {
            park: "#f9f7dd",
            aria: "#93b21f",
            vdara: "#eae7af",
            cosmopolitan: "#fbc88a",
            bellagio: "#f6a035",
            mirage: "#e5ce41",
            treasure: "#ff7abc",
            mgm: "#568af9",
            signature: "#ef4035",
            linq: "#f37735",
            "harrah's": "#fff797",
            venetian: "#45b9f2",
            wynn: "#7ac142",
            encore: "#7f3f97"
          };
          const styles = {};
          try {
            if (event.deleted) {
              styles.backgroundColor = "#bbb";
              styles.borderColor = "#888";
              styles.color = "#eee";
            } else {
              styles.backgroundColor =
                locationColors[event.location.split(" ")[0].toLowerCase()];
            }
          } catch (error) {}
          return { style: styles };
        }}
      />
    </div>
  );
};
