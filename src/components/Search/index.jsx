import { FiSearch } from 'react-icons/fi'
import { Input } from '../Input'
import { SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <FiSearch />
      <Input type="search" placeholder="Busque por pratos ou ingredientes" />
    </SearchContainer>
  )
}
