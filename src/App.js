import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Programacion",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false,
    },
    {
      id: uuid(),
      equipo: "Innovacion y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false,
    },
  ]);
  // Lista de Equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9",
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2",
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      id: uuid(),
      titulo: "Innovacion y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ]);

  console.log(uuid());
  const manejoMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  // Registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarColaboradores([...colaboradores, colaborador]);
  };

  // Actualizar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  };

  // Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }]);
  };

  // Eliminar Colaboradores
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id);
    const nuevoColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    actualizarColaboradores(nuevoColaboradores);
  };
  // Colaborador liked

  const like = (id) => {
    console.log("Favorito", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav;
      }
      return colaborador;
    });
    actualizarColaboradores(colaboradoresActualizados);
  };

  return (
    <div>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg manejoFormulario={manejoMostrar} />

      {equipos.map((equipo) => (
        <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
