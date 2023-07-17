import { Modal, Box, Button, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEventApi, closeEvent } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const Popping = ({
  open,
  handleClose,
  event,
  deleteEventApi,
  renderStatus,
  rerender,
}) => {
  const navigate = useNavigate();
  const { id, describe, title, start, end } = event;

  const handleDelete = async () => {
    await deleteEventApi(event.id);
    rerender(!renderStatus);
  };

  const modal = () => {
    return (
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            width: 500,
            borderRadius: 5
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontSize: 22, fontWeight: "bold", marginBottom: 2 }}
          >
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ fontSize: 18 }}>
            {describe ? describe : "No Descriptions Yet"}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Typography variant="caption" color="text.secondary" fontSize={16}>
              from: {start}
            </Typography>
            <Typography variant="caption" color="text.secondary" fontSize={16}>
              to: {end}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button
              color="warning"
              variant="contained"
              sx={{ marginRight: 2 }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Link to={`/event/${id}/update`}>
              <Button
                color="secondary"
                sx={{ marginRight: 2 }}
                variant="contained"
              >
                Update
              </Button>
            </Link>
            <Button
              color="error"
              variant="contained"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    );
  };

  if (id) {
    return modal();
  } 
};

function mapStateToProps({ event }) {
  return {
    event,
    //  modalStatus
  };
}

export default connect(mapStateToProps, { deleteEventApi, closeEvent })(
  Popping
);
