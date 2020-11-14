// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import EditDivision from "./EditDivision";
import EditSection from "./EditSection";
import EditDocType from "./EditDocType";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DeleteDivision from "./DeleteDivision";
import DeleteDocType from "./DeleteDocType";
import DeleteSection from "./DeleteSection";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogModal(props) {
  return (
    <div>
      <Dialog
        open={props.data.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleDialogModal.bind(null, { route: "", id: "" })}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <InfoOutlinedIcon />
          &nbsp;
          {props.data.from.charAt(0).toUpperCase() + props.data.from.slice(1) ||
            ""}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props.data.type === "edit" && (
              <>
                {props.data.from === "division" && (
                  <EditDivision
                    data={props.data}
                    input_change={props.input_change}
                  />
                )}

                {props.data.from === "section" && (
                  <EditSection
                    data={props.data}
                    input_change={props.input_change}
                    divisions={props.divisions}
                    sections={props.sections}
                  />
                )}

                {props.data.from === "docType" && <EditDocType />}
              </>
            )}

            {props.data.type === "delete" && (
              <>
                {props.data.from === "division" && <DeleteDivision />}
                {props.data.from === "section" && <DeleteSection />}
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={props.handleDialogModal.bind(null, { id: "" })}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              if (props.data.type === "edit") {
                return props.update(props.data.data);
              }

              if (props.data.type === "delete") {
                return props.delete(props.data.data);
              }
            }}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
