import axios from "axios";
import Swal from "sweetalert2";
import {
  getCourses,
  getCourseById,
  createCourse,
  favoriteCourse,
  getAllSchool,
  getSchoolId,
  createSchool,
  getAllUsers,
  getUserById,
  createUser,
  getVideos,
  getVideo,
  getForo,
  getForos,
  createVideo,
  clearVideo,
  getCourseByName,
  getSchoolsByName,
  getVideosByName,
  getCoursesByAZ,
  getCoursesByZA,
  getCourse10more,
  getCourse10h,
  getCourse5h,
  getCourse3h,
  getSession,
  getFavoriteCourse,
  getScoringCourse,
  getownPath,
  getNotifications,
  getAllUsersBanned,
  getChat,
  getUsersHome,
} from "./slice";

// ============================ Courses ============================

export const getAllCourses = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCourses(res.data)))
    .catch((e) => console.log(e));
};
//=======
export const getCourses10more = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCourse10more(res.data)))
    .catch((e) => console.log(e));
};

export const getCourses10h = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCourse10h(res.data)))
    .catch((e) => console.log(e));
};

export const getCourses5h = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCourse5h(res.data)))
    .catch((e) => console.log(e));
};

export const getCourses3h = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCourse3h(res.data)))
    .catch((e) => console.log(e));
};
//======
export const getAllCoursesAZ = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCoursesByAZ(res.data)))
    .catch((e) => console.log(e));
};

export const getAllCoursesZA = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/courses")
    .then((res) => dispatch(getCoursesByZA(res.data)))
    .catch((e) => console.log(e));
};

export const getCourse = (id) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/courses/${id}`)
    .then((res) => dispatch(getCourseById(res.data)))
    .catch((e) => console.log(e));
};
export const favorite = (course) => (dispatch) => {
  dispatch(favoriteCourse(course));
};

export const getFavorites = (id) => async (dispatch) => {
  const user = await axios.get(`https://pruebadeploypf.herokuapp.com/api/users/${id}`);
  // console.log(user);
  dispatch(getFavoriteCourse(user.data.favorites));
};

export const getScoring = (id) => async (dispatch) => {
  const user = await axios.get(`https://pruebadeploypf.herokuapp.com/api/users/${id}`);
  console.log("hola");
  console.log(user.data.scoring);
  dispatch(getScoringCourse(user.data.scoring));
};

export const getownPathCourse = (id) => async (dispatch) => {
  const user = await axios.get(`https://pruebadeploypf.herokuapp.com/api/users/${id}`);

  dispatch(getownPath(user.data.ownPath));
};

// export const createsCourse = (payload) => async (dispatch) => {
//   const response = await axios
//     .post("https://pruebadeploypf.herokuapp.com/api/courses", payload)
//     .then(() => {
//       Swal.fire({
//         title: "Create Course",
//         text: "Course Created Successfully",
//         icon: "success",
//         confirmButtonText: "Back",
//       });
//     })
//     .catch((error) =>
//       Swal.fire({
//         title: "Ups Something Happens",
//         // text: "Can't create video please try again",
//         text: error.response.data.error,
//         icon: "error",
//         confirmButtonText: "OK",
//       }).then(console.log(error))
//     );
//   return response;
// };

export const createsCourse = (payload) => async (dispatch) => {
  const response = await axios
    .post("https://pruebadeploypf.herokuapp.com/api/courses", payload)
    .then(() => {
      Swal.fire({
        text: "Create Course Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate("/userspa");
          window.location.reload();
        }
      });
    })
    .catch((error) =>
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      }).then(console.log(error))
    );

  return response;
};

export const getCoursesByName = (name) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/courses?name=${name}`)
    .then((res) => dispatch(getCourseByName(res.data)))
    .catch((e) => console.log(e));
};

// ============================ Schools ============================

export const getAllSchools = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/schools")
    .then((res) => dispatch(getAllSchool(res.data)))
    .catch((e) => console.log(e));
};

export const getAllSchoolByName = (name) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/schools?name=${name}`)
    .then((res) => dispatch(getSchoolsByName(res.data)))
    .catch((e) => console.log(e));
};

export const getSchool = (id) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/schools/${id}`)
    .then((res) => dispatch(getSchoolId(res.data)))
    .catch((e) => console.log(e));
};

export const createsSchool = (payload) => async (dispatch) => {
  const response = await axios.post(
    "https://pruebadeploypf.herokuapp.com/api/schools",
    payload
  );
  return response;
};

export const createSchoolUser = (payload, id) => async (dispatch) => {
  const response = await axios.post(
    `https://pruebadeploypf.herokuapp.com/api/schools/${id}`,
    payload
  );
  return response;
};

// ============================ Users ============================
export const getUsers = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/users")
    .then((res) => dispatch(getAllUsers(res.data)))
    .catch((e) => console.log(e));
};
export const getUserHome = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/users")
    .then((res) => dispatch(getUsersHome(res.data)))
    .catch((e) => console.log(e));
};

export const getUser = (id) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/users/${id}`)
    .then((res) => dispatch(getUserById(res.data)))
    .catch((e) => console.log(e));
};

export const userOpinion = (id, payload) => async (dispatch) => {
  await axios
    .put(`https://pruebadeploypf.herokuapp.com/api/users/userOpinion/${id}`, payload)
    .then((res) => dispatch(getUserById(res.data)))
    .catch((e) => console.log(e));
};

export const createsUser = (payload) => async (dispatch) => {
  const response = await axios.post(
    "https://pruebadeploypf.herokuapp.com/api/users/register",
    payload
  );
  return response;
};

export const userLogin = (payload) => async (dispatch) => {
  const response = await axios
    .post("https://pruebadeploypf.herokuapp.com/api/users/login", payload)
    .then((res) => {
      window.localStorage.setItem("user", JSON.stringify(res.data));

      dispatch(getSession(res.data.user));
    })
    .catch((error) =>
      Swal.fire({
        title: "Login Error",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      })
    );

  return response;
};

export const googleUserLogin = (payload) => async (dispatch) => {
  const response = await axios
    .post("https://pruebadeploypf.herokuapp.com/api/users/google_login", payload)
    .then((res) => {
      if (res.data.newUser === true) {
        Swal.fire({
          title: "Thans for register",
          // text: "Can't create video please try again",
          text: "Pending Account. Please Verify Your Email!",
          icon: "warning",
          confirmButtonText: "OK",
        });
        return;
      }
      if (res.data.user.status === "active") {
        Swal.fire({
          title: "Successful login",
          text: "You are being redirected to the home",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // navigate("/");
            window.location.href = "https://programando-ando-deploy.vercel.app/";
          }
        });
        dispatch(getSession(res.data));
        window.localStorage.setItem("user", JSON.stringify(res.data));
      }
    })
    .catch((error) =>
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      })
    );
  return response;
};
export const gitHubLogin = () => async (dispatch) => {
  const response = await axios
    .get("https://pruebadeploypf.herokuapp.com/api/auth/github_login")
    .then((res) => {
      console.log(res.data);
      dispatch(getSession(res.data));
      window.localStorage.setItem("user", JSON.stringify(res.data));
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      });
    });
  return response;
};

export const verifyUser = async (code) => {
  const response = await axios.get(
    `https://pruebadeploypf.herokuapp.com/api/users/ath/confirm/${code}`
  );
  return response.data;
};

// ============================ Videos ============================
export const getAllVideos = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/videos")
    .then((res) => dispatch(getVideos(res.data)))
    .catch((e) => console.log(e));
};

export const getVideoById = (id) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/videos/${id}`)
    .then((res) => dispatch(getVideo(res.data)))
    .catch((e) => console.log(e));
};

export const createsVideo = (payload) => async (dispatch) => {
  const response = await axios
    .post("https://pruebadeploypf.herokuapp.com/api/videos", payload)
    .then(() => {
      Swal.fire({
        title: "Create Video",
        text: "Create Video Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate("/userspa");
          window.location.reload();
        }
      });
      return dispatch({
        type: "DELETE_SCHOOL",
      });
    })
    .catch((error) =>
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      }).then(console.log(error))
    );
  return response;
};

export const getVideoByName = (name) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/schools?name=${name}`)
    .then((res) => dispatch(getVideosByName(res.data)))
    .catch((e) => console.log(e));
};

// =========================== Foro del video, utiliza el id de foro que trae el video ===================

export const getForoById = (id) => (dispatch) => {
  axios
    .get(`https://pruebadeploypf.herokuapp.com/api/foros/${id}`)
    .then((res) => dispatch(getForo(res.data)))
    .catch((e) => console.log(e));
};

export const getAllForos = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/foros")
    .then((res) => dispatch(getForos(res.data)))
    .catch((e) => console.log(e));
};

export const updateForo = (idForo, payload) => (dispatch) => {
  axios
    .put(`https://pruebadeploypf.herokuapp.com/api/foros/${idForo}`, payload)
    .then((res) => dispatch(getForo(res.data)))
    .catch((e) => console.log(e));
};

export const updateDeleteCommentorAnswer = (idForo, payload) => (dispatch) => {
  axios
    .patch(`https://pruebadeploypf.herokuapp.com/api/foros/${idForo}`, payload)
    .then((res) => dispatch(getForo(res.data)))
    .catch((e) => console.log(e));
};

// ============================ Order ============================
export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

// =========================== Update ===========================
export const updateVideo = (payload, id) => async (dispatch) => {
  const response = await axios
    .put(`https://pruebadeploypf.herokuapp.com/api/videos/${id}`, payload)
    .then(() => {
      Swal.fire({
        title: "Update Video",
        text: "Update Video Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate("/userspa");
          window.location.reload();
        }
      });
    })
    .catch((error) =>
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      }).then(console.log(error))
    );
  return response;
};

export const updateCourse = (payload, id) => async (dispatch) => {
  const response = await axios
    .put(`https://pruebadeploypf.herokuapp.com/api/courses/${id}`, payload)
    .then(() => {
      Swal.fire({
        title: "Update Course",
        text: "Update Course Successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate("/userspa");
          window.location.reload();
        }
      });
    })
    .catch((error) =>
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.msg,
        icon: "error",
        confirmButtonText: "OK",
      }).then(console.log(error))
    );
  return response;
};

export const updateSchool = (payload, id) => async (dispatch) => {
  const response = await axios.put(
    `https://pruebadeploypf.herokuapp.com/api/schools/${id}`,
    payload
  );
  return response;
};

export const updateUser = (payload, id) => async (dispatch) => {
  const response = await axios.put(
    `https://pruebadeploypf.herokuapp.com/api/users/${id}`,
    payload
  );
  return response;
};

// =========================== Delete ===========================
export function deleteSchoolById(id) {
  return async function(dispatch) {
    await axios
      .delete(`https://pruebadeploypf.herokuapp.com/api/schools/${id}`)
      .then(() => {
        Swal.fire({
          title: "Delete School",
          text: "Delete School Successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // navigate("/userspa");
            window.location.reload();
          }
        });
        return dispatch({
          type: "DELETE_SCHOOL",
        });
      })
      .catch((error) => console.log(error));
  };
}

export function deleteCourseById(id) {
  return async function(dispatch) {
    await axios
      .delete(`https://pruebadeploypf.herokuapp.com/api/courses/${id}`)
      .then(() => {
        Swal.fire({
          title: "Course Delete",
          text: "Course Deleted Successfully",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            // navigate("/userspa");
            window.location.reload();
          }
        });
        return dispatch({
          type: "DELETE_COURSE",
        });
      })
      .catch((error) => console.log(error));
  };
}

export function deleteVideoById(id) {
  return async function(dispatch) {
    await axios
      .delete(`https://pruebadeploypf.herokuapp.com/api/videos/softDelete/${id}`)
      .then(() => {
        Swal.fire({
          title: "Delete Video",
          text: "Delete Video Successfully",
          icon: "success",
          confirmButtonText: "Back",
        }).then((result) => {
          if (result.isConfirmed) {
            // navigate("/userspa");
            window.location.reload();
          }
        });

        return dispatch({
          type: "DELETE_VIDEO",
        });
      })
      .catch((error) => console.log(error));
  };
}

export function deleteUserById(id) {
  return async function(dispatch) {
    await axios
      .delete(`https://pruebadeploypf.herokuapp.com/api/users/${id}`)
      .then(() => {
        // alert("Se elimino");
        return dispatch({
          type: "DELETE_USER",
        });
      })
      .catch((error) => console.log(error));
  };
}

// =========================== Notification ===========================

export function deleteNotificationById(id) {
  return async function(dispatch) {
    await axios
      .delete(`https://pruebadeploypf.herokuapp.com/api/notifications/${id}`)
      .then(() => {
        alert("Se elimino");
        return dispatch({
          type: "DELETE_NOTIFICATION",
        });
      })
      .catch((error) => console.log(error));
  };
}

export const getAllNotifications = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/notifications")
    .then((res) => dispatch(getNotifications(res.data)))
    .catch((e) => console.log(e));
};

export const createNotification = (payload) => async (dispatch) => {
  const response = await axios.post(
    "https://pruebadeploypf.herokuapp.com/api/notifications",
    payload
  );
  return response;
};

// =========================== Password ===========================

export const forgetPasswordUpdate = (payload) => async (dispatch) => {
  console.log(payload);
  const response = await axios
    .post("https://pruebadeploypf.herokuapp.com/api/users/forget_password", payload)

    .catch((e) => console.log(e));

  return response;
};

export const submitPasswordUpdate = (payload, code) => async (dispatch) => {
  console.log(payload);
  const response = await axios
    .post(`https://pruebadeploypf.herokuapp.com/api/users/auth/modify/${code}`, payload)
    .then(() => {
      Swal.fire({
        title: "Success",
        text: "Password changed successfully",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          // navigate("/userspa");
          // window.location.reload();
          window.location.href = "https://programando-ando-deploy.vercel.app";
        }
      });
    })
    .catch((error) =>
      Swal.fire({
        title: "Ups Something Happens",
        // text: "Can't create video please try again",
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: "OK",
      }).then(console.log(error))
    );
  return response;
};

// ======================== Banned ========================================
export const getUsersBanned = () => (dispatch) => {
  axios
    .get("https://pruebadeploypf.herokuapp.com/api/users/banned")
    .then((res) => dispatch(getAllUsersBanned(res.data)))
    .catch((e) => console.log(e));
};

export const restoreUser = (id, payload) => async (dispatch) => {
  const response = await axios.patch(
    `https://pruebadeploypf.herokuapp.com/api/users/${id}`,
    payload
  );
  return response;
};

// ================== functional chat ==================
export const getChatById = (id) => async (dispatch) => {
  await axios
    .get(`https://pruebadeploypf.herokuapp.com/api/chat/${id}`)
    .then((res) => dispatch(getChat(res.data)));
};

export const update_getChat = (id, payload) => async (dispatch) => {
  //update
  await axios.put(`https://pruebadeploypf.herokuapp.com/api/chat/${id}`, payload);
  //get again
  await axios
    .get(`https://pruebadeploypf.herokuapp.com/api/chat/${id}`)
    .then((r) => dispatch(getChat(r.data)));
};

export const create_getChat = (payload) => async (dispatch) => {
  await axios
    .post(`https://pruebadeploypf.herokuapp.com/api/chat`, payload)
    .then(
      async (r) =>
        await axios.get(`https://pruebadeploypf.herokuapp.com/api/chat/${r.data._id}`)
    )
    .then((r) => dispatch(getChat(r.data)));
};
