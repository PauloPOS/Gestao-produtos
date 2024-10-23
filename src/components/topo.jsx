
// eslint-disable-next-line react/prop-types
function Topo({ isList }) {
    return (
      <div className="Topo">
        {isList ? 'Cadastro' : 'Listagem'}
      </div>
    );
  }
  
  export default Topo;
  