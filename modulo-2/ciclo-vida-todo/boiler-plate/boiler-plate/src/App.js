import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [

        {

        id: Date.now(),
        texto:"faxina",
        completa: false

        },
        {
          
        id: Date.now(),
        texto:"arrumar",
        completa: true

        },
      ],

      inputValue: '',
      filtro: ''
    }

 
  componentDidUpdate = () => {
    localStorage.setItem("texto", this.state.texto)
  
  };

  componentDidMount = () => {
    const textoStorage = localStorage.getItem("texto")

    this.setState({
      texto: textoStorage || ''
    })
    
  };

  onChangeInput = (event) => {
    this.setState ({inputValue: event.target.value})

  }

  criaTarefa = () => {

    const tarefaNova = [... this.state.tarefas]

    tarefaNova.push({
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    })

    this.setState({
      tarefas: tarefaNova
    })
  }

  selectTarefa = (texto) => {
    const selecaoDeTarefa = this.state.tarefas.map(tarefa => {
      if(texto === tarefa.texto){
        const tarefaExcluida = {... tarefa, completa: !tarefa.completa}
      return tarefaExcluida
      }
      return tarefa
    })
    
    this.setState({tarefas: selecaoDeTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
  


    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa} onChange={this.componentDidUpdate}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="nenhum">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>

          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.texto)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
