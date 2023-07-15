import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addEventApi } from "../../Redux/actions";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { Box, FormLabel, TextField, Button } from "@mui/material";
import Header from "../Header";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const schema = yup
  .object({
    title: yup.string().required("Can't Be Empty"),
    start: yup.date().required("Please specify the time to start"),
    end: yup.date().required("Please specify the time to end"),
  })
  .required();

const AddEvents = ({ addEventApi }) => {
  const navigate = useNavigate();
  const [rerender, setRerender] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    setFirstRender(false);
    addEventApi(values).then(() => {
      setRerender(!rerender);
      navigate("/events");
    });
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <Header
        title="Kalender"
        subtitle="Form Input Event Kalender Koperasi Arrester"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" align-content-center m-5"
      >
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <FormLabel sx={{ gridColumn: "span 3" }} className="label">
            Event Title
          </FormLabel>
          <TextField
            {...register("title")}
            fullWidth
            variant="filled"
            type="text"
            name="title"
            placeholder="title"
            sx={{ gridColumn: "span 4" }}
            required={true}
          />
          <FormLabel sx={{ gridColumn: "span 3" }} className="label">
            Start Date
          </FormLabel>
          <TextField
            {...register("start")}
            fullWidth
            variant="filled"
            type="datetime-local"
            name="start"
            placeholder="start date"
            sx={{ gridColumn: "span 4" }}
            required={true}
          />
          <FormLabel sx={{ gridColumn: "span 3" }} className="label">
            End Date
          </FormLabel>
          <TextField
            {...register("end")}
            fullWidth
            variant="filled"
            type="datetime-local"
            name="end"
            placeholder="end date"
            sx={{ gridColumn: "span 4" }}
            required={true}
          />
          <FormLabel sx={{ gridColumn: "span 3" }} className="label">
            Deskripsi Event (optional)
          </FormLabel>
          <TextField
            {...register("describe")}
            fullWidth
            variant="filled"
            type="text"
            name="describe"
            placeholder="describe your event"
            sx={{ gridColumn: "span 4" }}
          />
        </Box>

        <Box display="flex" justifyContent="end" mt="20px">
          <SnackbarProvider>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              onClick={() => {
                enqueueSnackbar("Berhasil Menambah Event!", {
                  variant: "success",
                });
              }}
              sx={{ marginBottom: 5 }}
            >
              Buat Event
            </Button>
          </SnackbarProvider>
        </Box>
      </form>
    </Box>
  );
};

function mapStateToProps({ event, events }) {
  return {
    event,
    events,
  };
}

export default connect(mapStateToProps, { addEventApi })(AddEvents);
