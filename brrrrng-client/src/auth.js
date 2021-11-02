import React, { useEffect} from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
export default function checkAuth(
  SpecificComponent,
  option,
  adminRoute = null
) {
  function AuthenticationCheck(props) {
    const history = useHistory();
    useEffect(() => {
      try {
        async function response() {
          const responses = await axios.get(`${process.env.REACT_APP_API_URL}/auth`, {
            withCredentials: true,
          });

          if (!responses.data.isAuth) {
            if (option) {
              props.history.push("/login");
            }

            //true인경우 로그인이 되어있는 상태
          } else {
            //Logged in Status, but Try to go into log in page
            if (option === true) {
              props.history.push("/mypage");
            }
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      } catch (error) {
        history.push("/login");
        localStorage.removeItem("accessToken");
      }

    
    }, [SpecificComponent]);

    return <SpecificComponent {...props} />;
  }
  return AuthenticationCheck;
}
