import axios from 'axios'
import { HiOutlineFilter } from 'react-icons/hi'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Filter } from '../../components/Filter'
import { Modal } from '../../components/Modal'
import { FilterCityForm } from '../../components/FilterCityForm'

import { useEffect, useRef, useState } from 'react'

import { Container } from './styles'

export function SchoolsView() {
  const dataFetchedRef = useRef(false)

  const [initialData, setInitialData] = useState([])
  const [time, setTime] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState({
    title: '',
    icon: null,
    customContent: null
  })

  const handleListWithNameFiltered = async (value) => {
    try {
      let response;

      if (value.length === 0) {
        response = await axios.get(`/api/schools`)
      } else {
        response = await axios.get(`/api/schools?name=${value}`)
      }
      
      setInitialData(response.data[1])
    } catch (error) {
      console.log(error);
    }
  }

  const onSearch = (event) => {
    const value = event.target.value
    
    if (time) clearTimeout(time)
    const tempTime = setTimeout(() => {
      handleListWithNameFiltered(value)
    }, 2000)
    setTime(tempTime)
  }

  const handleFetchData = async () => {
    try {
      const response = await axios.get('/api/schools')
      setInitialData(response.data[1])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (initialData.length === 0 && !dataFetchedRef.current) {
      dataFetchedRef.current = true
      handleFetchData();
    }
  }, [initialData, dataFetchedRef.current])

  return (
    <Container>
      <Header title="Escolas Cadastradas" />

      <div>
        <div id="search">
          <Input placeholder="Nome da escola..." type="text" onChange={onSearch} />
        </div>

        <div id="options">
          <Filter 
            onClick={() => {
              setModalData({
                title: 'Filtro',
                icon: HiOutlineFilter,
                customContent: FilterCityForm
              })
              setShowModal(true)
            }}
          />
          <Button 
            title="Cadastrar Escola" 
            onClick={() => {
              setModalData({
                title: 'Nova Escola',
                icon: null,
                customContent: null
              })
              setShowModal(true)
            }} 
          />
        </div>
      </div>

      {initialData.length > 0 && (
        <ul>
          {initialData.map(school => (
            <li key={school.cod}>{school.nome}</li>
          ))}
        </ul>
      )}

      {initialData.length === 0 && (
        <span>Nenhum dado encontrado</span>
      )}

      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)} 
          title={modalData.title} 
          icon={modalData.icon}
          customContent={modalData.customContent} 
        />
      )}
    </Container>
  )
}
