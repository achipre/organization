import "./Colaborador.css";
import { RiCloseCircleFill } from "react-icons/ri";

import { BsHeart, BsHeartFill } from "react-icons/bs";

const Colaborador = (props) => {
  const { nombre, foto, puesto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;

  return (
    <div className="colaborador">
      <RiCloseCircleFill
        onClick={() => eliminarColaborador(id)}
        className="eliminar"
      />
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre}></img>
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        {fav ? (
          <BsHeartFill color="red" onClick={() => like(id)} />
        ) : (
          <BsHeart color="red" onClick={() => like(id)} />
        )}
      </div>
    </div>
  );
};

export default Colaborador;
