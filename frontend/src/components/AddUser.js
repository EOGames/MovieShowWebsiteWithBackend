import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [info, setInfo] = useState(""); 
  const [link, setLink] = useState(""); 
  const navigate = useNavigate();

//const url = "mongodb+srv://superuser:superuser@crud.a1359sv.mongodb.net/?retryWrites=true&w=majority"

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        pic,
        info,
        link
      });
      navigate("/database");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Pic</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pic}
                onChange={(e) => setPic(e.target.value)}
                placeholder="pic Link"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Info</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                placeholder="Info"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Link</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="link To Video"
              />
            </div>
          </div>
          

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
