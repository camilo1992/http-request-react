import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModalWindow from "../UI/ErrorModalWindow";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [error, setError] = useState();

  const inputNumber = useRef();
  const inputName = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const userName = inputName.current.value;
    const userNumber = inputNumber.current.value;

    if (userName.trim().length === 0 || userNumber.trim().length === 0) {
      // alert("Invalid name or number. Please type a valid input.");
      setError({
        title: "Invalid name",
        message: " Please enter a name",
      });
      return;
    }

    if (+userNumber <= 0) {
      // alert("Your age can not be equal to 0 or less than so.");
      setError({
        title: "Invalid age",
        message: " Please enter a age (>0)",
      });
      return;
    }

    props.onInfHandler({ name: userName, age: userNumber });

    inputName.current.value = "";
    inputNumber.current.value = "";
  };

  const closeModal = () => {
    setError();
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModalWindow
          onClosingmodal={closeModal}
          title={error.title}
          message={error.message}
        ></ErrorModalWindow>
      )}

      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="InputName"> Name</label>
          <input id="InputName" type="text" ref={inputName} />
          <label htmlFor="InputAge"> Age</label>
          <input id="InputAge" type="number" ref={inputNumber} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
