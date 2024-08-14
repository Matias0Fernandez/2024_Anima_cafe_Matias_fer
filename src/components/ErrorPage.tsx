import { Routes, useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();
  console.error("this page does not exists");
  return (
    <div>
      this page does not exists
      <button onClick={() => navigate("/")}>return to home</button>
    </div>
  );
};
