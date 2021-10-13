import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModalWindow.module.css";
import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const OverLay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2> {props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onClosingmodal}>Ok</Button>
      </footer>
    </Card>
  );
};
const ErrorModalWindow = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop className={props.className}></BackDrop>,
        document.getElementById(`backdrop-root`)
      )}
      {ReactDOM.createPortal(
        <OverLay
          title={props.title}
          message={props.message}
          onClosingmodal={props.onClosingmodal}
        ></OverLay>,
        document.getElementById(`overlay-root`)
      )}
    </React.Fragment>
  );
};

export default ErrorModalWindow;
