import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import PokemonFetching from '../components/molecule/exam-fetching'
import { IPokemonALLData } from '../interface/pokemon'
import styles from '../styles/Home.module.css'
import client from '../util/client'

import FormValidation from '../components/molecule/exam-validation'
import CategoryType from '../components/molecule/category/category'

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
  // const [PokemonData, setPokemon] = useState<IPokemonALLData[]>([]);

  const callbackState = useCallback((stateData: IOnSelected) => {
    setOnSelected(stateData)
  }, [])

  const onSelectedType = (selected: IOnSelected) => {
    switch (selected) {
      case (selected = IOnSelected.FORM_TYPE): {
        return <FormValidation />;
      }
      case (selected = IOnSelected.POKEMON_TYPE): {
        return;
      }
      case (selected = IOnSelected.FUNCTION_ONE_TYPE): {
        return;
      }
      case (selected = IOnSelected.FUNCTION_TWO_TYPE): {
        return;
      }
      case (selected = IOnSelected.FUNCTION_THREE_TYPE): {
        return;
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

export default Home
