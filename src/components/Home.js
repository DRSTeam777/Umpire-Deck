import React from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center" style={{ height: "100vh" }}>
      <iframe
        src="https://umpiredash.netlify.app/"
        title="TeamAcc Website"
        style={{ width: "calc(100vw - 40px)", height: "calc(100vh - 40px)", border: "none" }}
      ></iframe>
      <div className="logout-btn-container position-absolute top-0 end-0 m-3">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;