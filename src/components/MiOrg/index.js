import "./MiOrg.css";

const MiOrg = (props) => {
  // Estado - hook
  // useState
  // const [nombre Variable, funcionActualiza] = useState(valorInicial)

  return (
    <section className="orgSection">
      <h3 className="title">Mi Organización</h3>
      <img
        onClick={props.manejoFormulario}
        src="./img/add.png"
        alt="Agregar Miembro"
      />
    </section>
  );
};
export default MiOrg;
