import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IPokemonALLData, IPokemonData } from '../../../interface/pokemon';
import client from '../../../util/client';
import PokemonFetching from '../../molecule/exam-fetching';

const Pokemon = () => {

    const [pokemonAllData, setPokemonAllData] = useState<IPokemonALLData[]>([]);
    const [pokemonData, setPokemonData] = useState<IPokemonData[]>([]);

    const fetchingAllData = () => {
        client
            .get(`/pokemon`, {
                params: {
                    limit: 104
                }
            })
            .then((res) => {
                setPokemonAllData(res.data.results)
            })
    }

    const fetchingPokemon = () => {
        pokemonAllData.map((data, index) => {
            axios.get(data.url)
                .then((res) => {
                    setPokemonData(pokemonData => [...pokemonData, res.data])
                })
                .catch((e: any) => {
                    console.log();
                })
        })

    }

    useEffect(() => {
        fetchingAllData()
    }, [])

    useEffect(() => {
        fetchingPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemonAllData])

    return (
        <>
            <Row>
                {
                    pokemonData.map((data, index) => {
                        return (
                            <>
                                <Col sm={2} key={index}>
                                    <PokemonFetching
                                        className={'my-2'}
                                        name={data.name}
                                        srcImg={data.sprites.front_default}
                                    />
                                </Col>
                            </>
                        )
                    })
                }
            </Row>
        </>
    );
};

export default Pokemon;