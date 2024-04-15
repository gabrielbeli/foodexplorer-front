import { EditDishContainer, Form, Textarea } from './styles'
import { FiChevronLeft, FiUpload } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { AddIngredients } from '../../components/AddIngredients'

export function EditDish() {
  return (
    <EditDishContainer>
      <div className="wrapper">
        <a href="/">
          <FiChevronLeft /> Voltar
        </a>
      </div>

      <main>
        <Form onSubmit={''}>
          <h1>Editar Prato</h1>

          <div className="columns">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <FiUpload /> Selecione a imagem
                </span>
                <Input
                  id="image"
                  accept="image/png, image/jpeg"
                  type="file"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <Input
              id="name"
              label="Nome"
              placeholder="Salada Ceaser"
              required
            />

            <div>
              <label htmlFor="category">Categoria</label>
              <select id="category">
                <option value="meal">Refeição</option>
                <option value="desserts">Sobremesa</option>
                <option value="drink">Bebida</option>
              </select>
            </div>
          </div>

          <div className="columnTwo">
            <div>
              <label htmlFor="add">Ingredientes</label>
              <div>
                <AddIngredients />
              </div>
            </div>

            <Input
              id="price"
              type="number"
              label="Preço"
              placeholder="R$ 00,00"
              min="0"
              step="0.010"
            />
          </div>
          <div className="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Sobre o prato, seus ingredientes e composição"
            />
          </div>

          <div className="buttons">
            <Button
              type="button"
              id="buttonRemove"
              title="Excluir prato"
              onClick={''}
            />
            <Button
              type="button"
              id="buttonAdd"
              title="Salvar alterações"
              onClick={''}
            />
          </div>
        </Form>
      </main>
    </EditDishContainer>
  )
}
