import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { signupRequest } from "../../_actions/authAction";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(5),
    },
  },
}));

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState("이메일을 입력하세요");
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const signupHandler = (e) => {
    e.preventDefault();

    const data = {
      username: name,
      email: email,
      password: password,
    };
    if (!name && !email && !password) {
      setOpen(true);
      setErrorMessage("이름을 입력하세요");
    } else if (!name) {
      setOpen(true);
      setErrorMessage("이름을 입력하세요");
    } else if (!email) {
      setOpen(true);
      setErrorMessage("이메일을 입력하세요");
    } else if (!password) {
      setOpen(true);
      setErrorMessage("비밀번호를 입력하세요");
    } else if (password !== passwordConfirm) {
      setOpen(true);
      setErrorMessage("비밀번호가 틀립니다.");
    } else {
      dispatch(signupRequest(data)).then((response) => {
        if (response.payload.data) {
          history.push("/login");
        } else if (response.payload.error) {
          console.log("errors");
        } else {
          setOpen(true);
          setErrorMessage("회원가입에 실패했습니다.");
        }
      });
    }
  };
  return (
    <div className='signupPage'>
      <div className='signupContainer'>
        <div className='signupImg-box'>
          <img id='login' src='../image/create.png' alt='create image' />
        </div>
        <div className='loginForm-box'>
          <ul className='loginForm'>
            <li>
              <input
                className='loginInput'
                type='text'
                placeholder='username'
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className='loginInput'
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className='loginInput'
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </li>
            <li>
              <input
                className='loginInput'
                type='password'
                placeholder='repeat your password'
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.currentTarget.value)}
              />
            </li>
            <li>
              <div className='loginBtn-group'>
                <button
                  className='loginBtn login_btn'
                  type='submit'
                  onClick={signupHandler}
                >
                  Sign up
                </button>
              </div>
              <div>
                <Link className='login_btn without_btn' id='back' to='/login'>
                  you have an account already?
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='carImg-box'>
        <img src='../image/footer_img.png' alt='drive' />
      </div>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Signup;
