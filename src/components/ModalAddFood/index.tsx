import { FormEvent, useRef, useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { IFood } from '../../types/IFood';

interface ModalAddFoodProps {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (food: FoodSubmit) => void
}

type FoodSubmit = Omit<IFood, 'id'>

function ModalAddFood({ isOpen, setIsOpen, handleAddFood }: ModalAddFoodProps) {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const formRef = useRef(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    handleAddFood({image, name, price, description});
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input
          name="image"
          placeholder="Cole o link aqui"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        <Input
          name="name"
          placeholder="Ex: Moda Italiana"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          name="price"
          placeholder="Ex: 19.90"
          value={price}
          onChange={e => setPrice(Number(e.target.value))}
        />

        <Input
          name="description"
          placeholder="Descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
}

export default ModalAddFood;
