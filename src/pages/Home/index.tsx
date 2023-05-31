import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../containers/BarraLeteral'
import ListaDeTarefas from '../../containers/ListaDeTarefas'

const Home = () => {
  return (
    <>
      <BarraLateral mostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
