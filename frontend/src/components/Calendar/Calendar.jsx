import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Popping from "./Popping";
import { closeEvent, ShowEventApi, ShowEventsApi } from "../../Redux/actions";
import { connect } from "react-redux";
import Header from "../Header";
import {
  Box,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const MyCalendar = ({ events, ShowEventApi, closeEvent, ShowEventsApi }) => {
  const [open, setOpen] = useState(false);
  const [renderStatus, rerender] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    ShowEventsApi();
    console.log("i renderd because of refresh or start");
  }, []);

  useEffect(() => {
    ShowEventsApi();
    console.log("i renderd");
  }, [renderStatus]);

  const openEventClick = (event) => {
    setOpen(true);
    if (event.id) {
      ShowEventApi(event.id);
    }
    return;
  };

  const closeEventClick = () => {
    setOpen(false);
    setTimeout(() => closeEvent(), 300);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header
          title="Calendar"
          subtitle="Halaman Input Event Kalender Koperasi Arrester"
        />
        <Link to="/events/add">
          <Button
            type="button"
            variant="contained"
            color="secondary"
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
              marginTop: 5,
            }}
          >
            Add Event
          </Button>
        </Link>
      </Box>

      <Popping
        open={open}
        handleOpen={openEventClick}
        handleClose={closeEventClick}
        renderStatus={renderStatus}
        rerender={rerender}
      />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600, fontSize: 16 }}
        onSelectEvent={openEventClick}
      />
    </Box>
  );
};

function mapStateToProps({ event, events }) {
  return {
    event,
    events,
  };
}

export default connect(mapStateToProps, {
  ShowEventApi,
  closeEvent,
  ShowEventsApi,
})(MyCalendar);
