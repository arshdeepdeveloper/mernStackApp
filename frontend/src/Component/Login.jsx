import React from "react";
import { Link } from "react-router-dom";
import Login1 from "./Login1";

function Login() {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box flex justify-center">
        <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <Login1 />
        </div>
      </dialog>
    </>
  );
}

export default Login;
