import BarraLateral from '../../containers/BarraLeteral'
import Formulario from '../../containers/Formulario'

const Cadastro = () => {
  return (
    <>
      {/*Barra lateral*/}
      <BarraLateral mostrarFiltros={false} />

      <Formulario />
    </>
  )
}

export default Cadastro
