import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../utilities/firebase";
import { Fragment } from "react";
import Notification from "../Helpers/Notification";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  //Aqui se almacenara los datos e informacion que esta logeado en la sesion
  const [currentUser, setCurrentUser] = useState();

  const logOutUser = () => {
    return {
      type: "LOGOUT_USER",
    };
  };

  //Notificaciones de firebase creations
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  //Referencia de colleciones
  const usersCollectionRef = db.collection("usersCollection");

  //Registrar usuario
  const signUpUser = (userData) => {
    auth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .then((cred) => {
        usersCollectionRef
          .doc(cred.user.uid)
          .set({
            userName: userData.userName,
            email: userData.email,
            universidad: userData.universidad,
            carrera: userData.carrera,
            forumInteractions: userData.forumInteractions,
          })
          .then(() => {
            setNotify({
              isOpen: true,
              message: "Se creo el Cliente correctamente",
              type: "success",
            });
          })
          .catch((error) => {
            console.error(error);
            setNotify({
              isOpen: true,
              message: "Hubo un error al crear usuario",
              type: "error",
            });
          });
      });
  };

  //Actalizar informacion del usuario
  const updateUser = () => {};
  //Iniciar sesion
  const logIn = (userInfo) => {
    return auth
      .signInWithEmailAndPassword(userInfo.email, userInfo.password)
      .then((userCredential) => {
        setCurrentUser(userCredential.user);
        auth.setPersistence(auth.Auth.Persistence.LOCAL);
        setNotify({
          isOpen: true,
          message: "Se inició sesión correctamente",
          type: "success",
        });
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: "Hubo un error al iniciar sesion intentalo mas tarde",
          type: "error",
        });
      });
  };

  //Cerrar sesion
  const logOut = () => {
    return auth
      .signOut()
      .then(() => {
        setCurrentUser("Anonimo");
        setNotify({
          isOpen: true,
          message: "Sesión terminada correctamente",
          type: "success",
        });
        logOutUser();
      })
      .catch(() => {
        setNotify({
          isOpen: true,
          message: "Error al momento de cerrar sesión intentalo mas tarde",
          type: "error",
        });
      });
  };
  //reiniciar contraseña
  const resetPassword = (email) => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "Revise su correo electronico para restaurar su contraseña ",
          type: "success",
        });
      })
      .catch(() => {
        setNotify({
          isOpen: true,
          message:
            "Hubo un error al cambiar la contraseña, intentalo mas tarde",
          type: "error",
        });
      });
  };

  const fetchUniversityList = () => {};
  const getUniversity = () => {};
  const fetchCarrersList = () => {};
  const getCarrer = () => {};
  const fetchAsignatureList = () => {};
  const getAsignature = () => {};
  const fetchForumList = () => {};
  const getForumData = () => {};

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user.uid);
      } else {
        setCurrentUser("Anonimo");
      }
    });
  });

  const value = {
    currentUser,
    signUpUser,
    updateUser,
    resetPassword,
    logIn,
    logOut,
  };

  return (
    <Fragment>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </Fragment>
  );
};
