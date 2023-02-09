import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const ProjectDialog = ({ open, handleClose, maxWidth, item }) => {
  return (
    <Dialog
      fullWidth={Boolean(true)}
      maxWidth={maxWidth}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle>
        <h3>{item.name}</h3>
      </DialogTitle>
      <DialogContent>
        <p style={{ textAlign: "center", marginBottom: 2 }}>
          {item.description}
        </p>
        <p style={{ textAlign: "center", marginBottom: 4 }}>
          <a href={item.url} target="_blank">
            {item.urlText}
          </a>
        </p>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            alt={item.name}
            src={item.imgurl}
            className="item-img"
            width={400}
          />
        </div>
      </DialogContent>

      {/* <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions> */}
    </Dialog>
  );
};

export default ProjectDialog;
