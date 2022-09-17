import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUsers } from "../redux/actions";
import Error404 from "./Error404";
import Loader from "./Loader";

function InternalChat() {
  const dispatch = useDispatch();
  // necesito el user con la sesión activa, y los usuarios disponibles para chatear
  const currentUser = JSON.parse(localStorage.getItem("user"));
  const idGet = currentUser !== null ? currentUser.user._id : null;
  const { user, users } = useSelector((state) => state.programandoando);

  useEffect(() => {
    dispatch(getUsers());
    if (currentUser !== null) {
      dispatch(getUser(idGet));
    }
  });
  if (currentUser === null) {
    return <Error404 />;
  } else if (Object.keys(users).length !== 0) {
    return (
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "3px solid cadetblue",
          }}
        >
          <span style={{ color: "#21252B", background: "cadetblue" }}>
            USERS AVAILABLE
          </span>
          {
            <ol>
              {users.map((user) => (
                <div>
                  <span>{user.username}</span>
                  <hr />
                </div>
              ))}
            </ol>
          }
        </div>
        <div style={{ paddingLeft: "2vh", borderLeft: "5px solid gray" }}>
          CHATS
        </div>
      </div>
      /*   <div>
        <div>Hola mundo!</div>
        <h1 style={{ fontSize: "1.3rem", color: "cadetblue" }}>
          Welcome to the internal chat
        </h1>
        {user.chats.map((chat) => (
          <div>
            <span>
              {chat.content.map((con) => (
                <div>
                  <strong>{con.author.username}: </strong>
                  <span>{con.content}</span>
                </div>
              ))}
            </span>
            <br />
            <hr />
            <br />
          </div>
        ))}
      </div> */
    );
  }
}

export default InternalChat;
