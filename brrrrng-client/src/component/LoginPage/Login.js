import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../_actions/authAction";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import "./login.css";

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

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  const loginHandler = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    if (!email && !password) {
      setOpen(true);
    } else if (!email) {
      setOpen(true);
      setErrorMessage("이메일을 입력하세요");
    } else if (!password) {
      setOpen(true);
      setErrorMessage("비밀번호를 입력하세요");
    } else {
      dispatch(loginRequest(data)).then((response) => {
        if (response.payload.data) {
          localStorage.setItem("id", response.payload.data.userInfo._id);
          history.push("/search");
        } else if (response.payload.error) {
        } else {
          setOpen(true);
          setErrorMessage("이메일 또는 비밀번호이 틀렸습니다.");
        }
      });
    }
  };

  return (
    <div className='loginPage'>
      <div className='loginContainer'>
        <div className='loginImg-box'>
          <img id='login' src='../image/login.png' alt='login image' />
        </div>
        <div className='loginForm-box'>
          <ul className='loginForm'>
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
                placeholder='pw'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </li>
            <li>
              <div className='loginBtn-group'>
                <button
                  className='loginBtn login_btn'
                  type='submit'
                  onClick={loginHandler}
                >
                  Login
                </button>
                <Link className='login_btn signup_btn' to='/signup' type>
                  Sign up
                </Link>
                <Link
                  className='login_btn without_btn'
                  id='without'
                  to='/search'
                >
                  Start without Login
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

export default Login;
