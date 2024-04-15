import { HomeContainer, Banner } from './styles'
import foots100 from '../../assets/foots-100.svg'
import foots200 from '../../assets/foots-200.svg'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <picture>
          <source media="(max-width: 768px)" srcSet={foots100} />
          <img src={foots200} alt="imagem de macarrons e frutos vermelhos" />
        </picture>
        <div>
          <h2>Sabores inigualáveis</h2>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </div>
      </Banner>

      <main>
        <section>
          Refeição
          <Card />
        </section>
        <section>
          Sobremesas
          <Card />
        </section>
        <section>
          Bebidas
          <Card />
        </section>
      </main>
    </HomeContainer>
  )
}
