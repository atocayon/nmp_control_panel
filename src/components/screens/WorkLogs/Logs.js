import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));
export default function Logs(props) {
  const classes = useStyles();
  return (
    <div>
      <Stepper activeStep={props.activeStep} orientation="vertical">
        {props.steps.map((label, index) => (
          <Step key={label.dateTime}>
            <StepLabel
              StepIconComponent={FiberManualRecordIcon}
              style={{ color: "#2196F3" }}
            >
              {label.status.charAt(0).toUpperCase() + label.status.slice(1)}
            </StepLabel>
            <StepContent>
              <Typography>
                {label.dateTime}
                <br />
                {label.remarks}
              </Typography>
              <br />
              <div className={classes.actionsContainer}>
                <div>
                  <button
                    disabled={props.activeStep === 0}
                    onClick={props.handleBack}
                    className={"btn btn-sm btn-outlined-primary"}
                  >
                    Back
                  </button>
                  <button
                    variant="contained"
                    color="primary"
                    onClick={props.handleNext}
                    className={"btn btn-sm btn-primary"}
                  >
                    {props.activeStep === props.steps.length - 1
                      ? "Reset"
                      : "Next"}
                  </button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {props.activeStep === props.steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>Last</Typography>
          <button
            onClick={props.handleReset}
            className={"btn btn-sm btn-primary"}
          >
            Back to top
          </button>
        </Paper>
      )}
    </div>
  );
}
