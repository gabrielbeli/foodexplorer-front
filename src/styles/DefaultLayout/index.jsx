import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DefaultLayoutContainer } from './styles'

import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  const [search, setSearch] = useState('')

  function handleSearch(query) {
    setSearch(query)
  }

  return (
    <DefaultLayoutContainer>
      <Header onSetSearch={handleSearch} />
      <div>
        <Outlet context={[search, setSearch]} />
      </div>
      <Footer />
    </DefaultLayoutContainer>
  )
}
