import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: ``, isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "INPUT_PASSWORD") {
    return { value: action.value, isValid: action.value.length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.length > 6 };
  }

  return { value: ``, isValid: false };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: ``,
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: ``,
    isValid: null,
  });

  // useEffect(() => {
  //   console.log(`useEffect running 11111111111111111`);
  //   return () => console.log(`clean up function executed`);
  // }, []);

  const ctx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  // we are assignnig the validation into a differetn variable which will help us
  // updaate the validation only when the isvalid property changes.
  useEffect(() => {
    const timeIdetifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 300);
    return () => {
      clearTimeout(timeIdetifier);
    };
  }, [emailIsValid, passwordIsValid]);

  //  useEffect deals with side effects, in this case when we store some data ures request an http request.
  // in this application we are refactoring the use of the validation form which was triggered every time
  //  we entered an email or password .. so checking every key stroke in order to trigger an actio is alos a side effect

  // The re is a aslo a clena up function... itis the value retturned by the useEffect..
  // it runs before the useEffect is evaluated for the first time. before it does not run.
  //  it help us to stop some unnecessary network traffic.

  //  if there is a clean up function and not dependencies, it will be executed when the compenent is removed.

  // This i calle ebouncing  ----> which means deactivating any unwanted traffic or sideEffect.

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "INPUT_PASSWORD", value: event.target.value });
    // setFormIsValid(emailState.isValid && event.target.value.length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogIn(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          isValid={emailIsValid}
          type="email"
          id="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          isValid={passwordIsValid}
          type="password"
          id="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
