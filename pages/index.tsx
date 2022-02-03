import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import { IPokemonALLData } from '../interface/pokemon'

import FormValidation from '../components/molecule/exam-validation'
import CategoryType from '../components/molecule/category/category'
import Function3 from '../components/molecule/exam-function-3'
import Function2 from '../components/molecule/exam-function-2'
import Pokemon from '../components/oranism/pokemon'

export enum IOnSelected {
  FORM_TYPE = 1,
  POKEMON_TYPE = 2,
  FUNCTION_ONE_TYPE = 3,
  FUNCTION_TWO_TYPE = 4,
  FUNCTION_THREE_TYPE = 5,
}

const Home: NextPage = () => {
  const [PokemonData, setPokemon] = useState<IPokemonALLData[]>([]);
  const [onSelected, setOnSelected] = useState<IOnSelected>(0)


  const callbackState = useCallback((stateData: IOnSelected) => {
    setOnSelected(stateData)
  }, [])

  const onSelectedType = (selected: IOnSelected) => {
    switch (selected) {
      case (selected = IOnSelected.FORM_TYPE): {
        return <FormValidation />;
      }
      case (selected = IOnSelected.POKEMON_TYPE): {
        return <Pokemon />;
      }
      case (selected = IOnSelected.FUNCTION_ONE_TYPE): {
        return;
      }
      case (selected = IOnSelected.FUNCTION_TWO_TYPE): {
        return <Function2 />;
      }
      case (selected = IOnSelected.FUNCTION_THREE_TYPE): {
        return <Function3 />;
      }
      default: {
        return <FormValidation />;
      }
    }
  }

  return (
    <>
      <Container fluid="xl" className='d-flex flex-column justify-content-center mt-4'>

        <CategoryType callbackState={callbackState} />

        <div className='d-flex justify-content-center my-5'>
          {onSelectedType(onSelected)}
        </div>

      </Container>
    </>
  )
}

export default Home;