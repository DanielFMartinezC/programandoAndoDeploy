import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Puntuation from "./Puntuation";
import PuntuationNotLogged from "./PuntuationNotLogged";
import Foro from "./Foro";
import ForoNotLogged from "./ForoNotLogged";
import SearchBar from "./SearchBar";
import {
  getVideoById,
  clearFilter,
  getAllNotifications,
  getUser,
  getFavorites,
} from "../redux/actions";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "./Carousel";
import img from "../utils/images/LAPTOPVIDEOS.png";
import axios from "axios";
import Chat from "./Chat";
import PWA from "./PWA";
import RankUserHome from "./RankUserHome";

function Home() {
  const { video } = useSelector((state) => state.programandoando);
  const { idVideo } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.programandoando);

  let userLocal = window.localStorage.getItem("user");
  let userObj = JSON.parse(userLocal);

  const incomingFavorites = user.favorites;

  let verified = userObj && userObj.user.status;

  // console.log(document.cookie);

  // delete_cookie("github-jwt")

  useEffect(() => {
    // dispatch(getVideoById(idVideo));
    dispatch(getAllNotifications());
    if (userObj) {
      dispatch(getUser(userObj.user._id));
      dispatch(getFavorites(userObj.user._id));
    }
  }, [dispatch]);

  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`https://pruebadeploypf.herokuapp.com/api/auth/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);
      if (usr) {
        // console.log(usr.decoded._id);
        dispatch(getUser(usr.decoded._id));
        dispatch(getFavorites(usr.decoded._id));
        window.localStorage.setItem(
          "user",
          JSON.stringify({ token: usr.tokenJwt, user })
        );
      }
    })();
  }, [Object.keys(user).length !== 0]);

  const stat = useSelector((state) => state.programandoando);
  // window.location.href = "/";

  // console.log(stat);
  return (
    <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
      <NavBar />
      <div class="py-10">
        <div
          style={{ backgroundColor: "rgb(17, 52, 82)" }}
          class="px-10 py-2 container m-auto sm:px-24 sm:py-6 rounded-xl"
        >
          <div class="lg:flex justify-between items-center">
            <div class="lg:w-6/12 lg:p-0 p-7">
              <h1
                style={{ color: "rgb(201, 196, 184)" }}
                class="text-xl sm:text-3xl font-bold leading-tight mb-3 capitalize "
              >
                {" "}
                YOU ONLY NEED TO MAKE THE DECISION TO START STUDYING. WE SHOW YOU HOW.{" "}
              </h1>
              <br />
              <p
                style={{ color: "rgb(201, 196, 184)" }}
                class="text-xs font-light sm:text-lg"
              >
                {" "}
                Free and organized platform with thousands of hours of videos from committed and reputable creators. We scowered the internet so you don’t have to. We’ve found the best tutorials so you spend all your time studying and coding.
                <br /> Go ahead! Register and take a class!{" "}
              </p>
            </div>
            <div class="lg:w-5/12 order-2">
              <img src={img} alt="" class="rounded" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 my-24">
        <div className="mb-10 lg:mb-0 flex justify-center">
          {userObj ? <Puntuation /> : <PuntuationNotLogged />}
        </div>
        <div className="flex justify-center">
          <RankUserHome />
        </div>
      </div>
      <div className="flex justify-center">
        {userObj ? <Foro /> : <ForoNotLogged />}
      </div>
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
        }}
      >
        <Chat />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
