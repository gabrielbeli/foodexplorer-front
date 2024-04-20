import { api } from '../../services/api'

import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { EditDishContainer, Form, Textarea } from './styles'
import { FiChevronLeft, FiUpload } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { AddIngredients } from '../../components/AddIngredients'
import { Select } from '../../components/Select'

export function EditDish() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()
  const { id } = useParams()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm()

  const photoFile = watch('photo')

  async function handleUpdateDishForm(data) {
    const photo = data.photo ? data.photo[0] : null
    const { name, category, price, description } = data

    const notANumber = isNaN(price) || price === ''

    try {
      await api.put(`/dishes/${id}`, {
        name,
        category,
        price,
        description,
        ingredients,
      })

      if (photo) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('photo', photo)

        await api.patch(`dishes/photo/${id}`, fileUploadForm)
      }
    } catch (error) {}
  }

  async function removeDish() {
    const confirmation = confirm(`Certeza que deseja remover o ${name}`)
    if (confirmation) {
      await api.delete(`/dishes/${id}`)
      navigate('/')
    }
  }

  function handleNewIngredient() {
    if (newIngredient) {
      const isNewIngredient = !ingredients.includes(newIngredient)
      if (isNewIngredient) {
        setIngredients((prevState) => [...prevState, newIngredient])
      }
    }

    setNewIngredient('')
    document.getElementById('add').focus()
  }

  function handleRemoveIngredient(ingredientDeleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== ingredientDeleted),
    )
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      const dish = response.data

      setIngredients(dish.ingredients.map((ingredient) => ingredient.name))

      if (dish) {
        reset({
          name: dish.name,
          price: dish.price,
          description: dish.description,
          category: dish.category,
          photo: null,
        })
      }
    }

    fetchDish()
  }, [id, reset])

  return (
    <EditDishContainer>
      <div className="wrapper">
        <a href="/" to={-1}>
          <FiChevronLeft /> Voltar
        </a>
      </div>

      <main>
        <Form onSubmit={handleSubmit(handleUpdateDishForm)}>
          <h1>Editar Prato</h1>

          <div className="columns">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <FiUpload />{' '}
                  {photoFile ? photoFile[0]?.name : 'Selecione a imagem'}
                </span>
                <Input
                  id="image"
                  accept="image/png, image/jpeg"
                  type="file"
                  style={{ cursor: 'pointer' }}
                  {...register('photo')}
                />
              </div>
            </div>

            <Input
              id="name"
              label="Nome"
              placeholder="Salada Ceaser"
              required
              {...register('name')}
            />

            <div>
              <label htmlFor="category">Categoria</label>
              <Select id="category" {...register('category')}>
                <option value="meal">Refeição</option>
                <option value="desserts">Sobremesa</option>
                <option value="drink">Bebida</option>
              </Select>
            </div>
          </div>

          <div className="columnTwo">
            <div>
              <label htmlFor="add">Ingredientes</label>
              <div>
                {ingredients.map((ingredient, index) => (
                  <AddIngredients
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                    size={String(ingredient.length)}
                  />
                ))}

                <AddIngredients
                  id="add"
                  isNew={true}
                  size="6"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleNewIngredient}
                />
              </div>
            </div>

            <Input
              id="price"
              type="number"
              label="Preço"
              placeholder="R$ 00,00"
              min="0"
              step="0.010"
              {...register('price')}
            />
          </div>
          <div className="textarea">
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              placeholder="Sobre o prato, seus ingredientes e composição"
              {...register('description')}
            />
          </div>

          <div className="buttons">
            <Button
              type="button"
              id="buttonRemove"
              title="Excluir prato"
              onClick={removeDish}
            />
            <Button
              type="button"
              id="buttonAdd"
              title="Salvar alterações"
              onClick={handleSubmit(handleUpdateDishForm)}
            />
          </div>
        </Form>
      </main>
    </EditDishContainer>
  )
}
