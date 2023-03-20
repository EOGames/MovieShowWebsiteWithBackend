import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [info, setInfo] = useState(""); 
  const [link, setLink] = useState(""); 
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setPic(response.data.pic);
    setInfo(response.data.info);
    setLink(response.data.link);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        pic,
        info,
        link,
      });
      navigate("/database");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
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
                placeholder="Pic Link"
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
                placeholder="Info Link"
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
                placeholder="Video Link"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
