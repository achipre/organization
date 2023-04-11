import { useState } from "react";
import "./Formulario.css";
import Input from "../Inputs/Inputs";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
  const [equipo, actualizarEquipo] = useState("");

  const [titulo, actualizarTitulo] = useState("");
  const [color, actualizarColor] = useState("");

  const { registrarColaborador, crearEquipo } = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    registrarColaborador(datosAEnviar);
  };

  const manejoNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({ titulo, colorPrimario: color });
  };
  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Llena el Formulario para crear el colaborador.</h2>
        <Input
          titulo="Nombre"
          placeholder="Ingresa el nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Input
          titulo="Puesto"
          placeholder="Ingresa el Puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Input
          titulo="Foto"
          placeholder="Ingresa enlace de Foto"
          required
          valor={foto}
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones
          valor={equipo}
          actualizarValor={actualizarEquipo}
          equipos={props.equipos}
        />
        <Boton texto="Crear" />
      </form>
      <form onSubmit={manejoNuevoEquipo}>
        <h2>Llena el Formulario para crear el equipo.</h2>
        <Input
          titulo="Titulo"
          placeholder="Ingresa titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Input
          titulo="Color"
          placeholder="Ingresa el Color en Hexadecimal"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Boton texto="Registrar Equipo"></Boton>
      </form>
    </section>
  );
};
export default Formulario;
