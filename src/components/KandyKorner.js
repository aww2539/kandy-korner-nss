import React from "react";
import { Redirect, Route } from "react-router-dom";
import { ApplicationViews } from "../ApplicationViews";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { NavBar } from "../nav/NavBar";

export const KandyKorner = () => (
    <>
    <Route
      render={() => {
        if (localStorage.getItem("kandy_customer")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)