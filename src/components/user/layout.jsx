import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Boxes } from "../ui/background-boxes";
import Dashboard from "../../pages/user/Dashboard";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <NavBar></NavBar>
      <main className="p-6">
       <Dashboard></Dashboard>
        <Footer></Footer>
      </main>
     
    </div>
  );
};

export default UserLayout;
