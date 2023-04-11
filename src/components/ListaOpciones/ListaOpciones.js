import "./ListaOpciones.css";
const ListaOpciones = (props) => {
  // Metodo Map
  const manejarValor = (e) => {
    props.actualizarValor(e.target.value);
  };
  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarValor}>
        <option value="" defaultValue="" hidden disabled>
          Seleccionar Equipo
        </option>
        {props.equipos.map((equipo, index) => {
          return (
            <option key={index} value={equipo}>
              {equipo}
              {""}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default ListaOpciones;
