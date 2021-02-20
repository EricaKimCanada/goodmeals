import React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import "./IconPage.css";

export default function Iconpage() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
        <div
        style={{
          backgroundImage: "url(/images/marbleimg.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "5%",
          marginTop: "-2%",
          paddingBottom: "3%",
          height: "100%",
        }}
        >
          <div className="iconinfo">
            <h1>Contact US</h1>
            <div className="emaildiv">
                <label className="titlelable">Email</label>
                <input>
                </input>
            </div>
            <br />
            <div className="emaildiv">
                <label className="titlelable">title</label>
                <input>
                </input>
            </div>
            <br />
            <div className="msgdiv">
                <label>Message</label>
                <textarea className="textSize">
                </textarea >
            </div>
            <br />
            <div>
                <Button  onClick={handleClickOpen} type="submit"> Submit
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="title"
                  aria-describedby="description"
                >
              <DialogTitle id="title">{"Successfully Send Email"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="description">
                    Thank you for contacting the GoodMeals. 
                    We are going to reply it in 2 business day. 
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </div>
            </div>
        </div>
    );
}