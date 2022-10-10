import React, { useState, useEffect } from "react";
import "./styles.css";
import { Card } from "../../components/Card";
import { LocalDiningTwoTone } from "@material-ui/icons";

function Home() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name:'', avatar:'', repositories:'', location: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

    useEffect (() => {
      fetch('https://api.github.com/users/robs-am')
      .then(response => response.json())
      .then(data => {
          setUser({
          name: data.name,
          avatar: data.avatar_url,
          repositories: data.public_repos,
          location: data.location,
        })
      })
      
    }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>

        <div className="card-info">
          <div className="user">
            <strong>{user.name}</strong>
            <img src={user.avatar} alt="foto de perfil" />
          </div>
          <div className="info">
          <span><h5 className="repositories">Public Repositories:</h5><p className="repositories">{user.repositories}</p></span>
            <p className="location">{user.location}</p>
          </div>
        </div>
      </header>

      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={(e) => setStudentName(e.target.value)}
      />
      <div className="input-border"></div>

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>
      {students.map((student) => (
        <Card key={student.time} name={student.name} time={student.time} />
      ))}
    </div>
  );
}

export default Home;
