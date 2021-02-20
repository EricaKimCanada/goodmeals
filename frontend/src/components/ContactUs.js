import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import "../pages/IconPage.css";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import ChatIcon from "@material-ui/icons/Chat";
import Modal from "@material-ui/core/Modal";

export default function ContactUs() {
  const [open, setOpen] = React.useState(false);
  const [Iopen, setIOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleIconOpen = () => {
    setIOpen(true);
  };

  const handleIconClose = () => {
    setIOpen(false);
  };

  return (
    <div>
      <Tooltip
        title="contact"
        style={{ float: "right", marginRight: "1%", marginTop: "1%" }}
      >
        <Fab>
          <Button style={{ fontSize: 40 }} onClick={handleIconOpen}>
            <ChatIcon />
          </Button>
        </Fab>
      </Tooltip>
      <Modal open={Iopen} onClose={handleIconClose}>
        <div className="iconinfo">
          <h1>Contact US</h1>
          <div className="emaildiv">
            <label className="titlelable">Email</label>
            <input></input>
          </div>
          <br />
          <div className="emaildiv">
            <label className="titlelable">title</label>
            <input></input>
          </div>
          <br />
          <div className="msgdiv">
            <label>Message</label>
            <textarea className="textSize"></textarea>
          </div>
          <br />
          <div>
            <Button onClick={handleClickOpen} type="submit">
              {" "}
              Submit
            </Button>
            <Dialog
              open={open}
              onClose={handleClose, handleIconClose}
              aria-labelledby="title"
              aria-describedby="description"
            >
              <DialogTitle id="title">{"Successfully Send Email"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="description">
                  Thank you for contacting the GoodMeals. We are going to reply
                  it in 2 business day.
                </DialogContentText>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Modal>
    </div>
  );
}
