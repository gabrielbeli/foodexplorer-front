import { RequestContainer } from './styles'

export function Requests() {
  return (
    <RequestContainer>
      <h1>Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
          </tr>
        </thead>
      </table>
    </RequestContainer>
  )
}
