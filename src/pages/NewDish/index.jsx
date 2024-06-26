import { api } from '../../services/api'

import { NewDishContainer, Form, Textarea } from './styles'

import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Select } from '../../components/Select'
import { AddIngredients } from '../../components/AddIngredients'
import { TextLink } from '../../components/TextLink'

export function NewDish() {
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      photo: null,
      name: '',
      category: 'meal',
      price: 0,
    },
  })

  const photoFile = watch('photo')

  function handleNewIngredient() {
    if (newIngredient) {
      const isNewIngredient = !ingredients.includes(newIngredient)
      if (isNewIngredient) {
        setIngredients((prevState) => [...prevState, newIngredient])
      } else {
        toast.warn('Ingrediente já Adicionado!')
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

  async function handleCreateNewDishForm(data) {
    const photo = data.photo ? data.photo[0] : null
    const { name, category, price, description } = data

    const notANumber = isNaN(price) || price === ''
    if (!name || price < 0 || notANumber) {
      return
    }

    if (newIngredient !== '') {
      return toast.warn(
        `Clique no + para adicionar o ingrediente tag: ${newIngredient}. ou limpe o campo!`,
      )
    }

    if (ingredients.length === 0) {
      return toast.warn('Informe ao menos o ingrediente principal do prato!')
    }

    const response = await api.post('/dishes', {
      name,
      category,
      price,
      description,
      ingredients,
    })

    const id = response.data.id

    if (photo) {
      const fileUploadForm = new FormData()
      fileUploadForm.append('photo', photo)

      await api.patch(`dishes/photo/${id}`, fileUploadForm)
    }

    toast.success('Prato adicionado!')
    navigate('/')
    reset()
    setIngredients([])
  }

  return (
    <NewDishContainer>
      <div className="wrapper">
        <TextLink name="voltar" icon={FiChevronLeft} to={-1} />
      </div>

      <main>
        <Form onSubmit={handleSubmit(handleCreateNewDishForm)}>
          <h1>Novo Prato</h1>

          <div className="columns">
            <div className="input-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <div>
                <span>
                  <FiUpload />{' '}
                  {photoFile ? photoFile[0].name : 'Selecione a imagem'}
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
                <option value="dessert">Sobremesa</option>
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
              id="buttonAdd"
              title="Adicionar prato"
              onClick={handleSubmit(handleCreateNewDishForm)}
            />
          </div>
        </Form>
      </main>
    </NewDishContainer>
  )
}
