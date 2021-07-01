import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Container, Texto } from './style'

import { ThemeProvider } from 'styled-components/native'


const opcoesCores = {
    branco: '#FFFFFF',
    azul: '#223688'
}


var cores = {
    background: opcoesCores.azul,
    texto: '#ffffff'
};

function Botao(props) {

    return (
        <TouchableOpacity>
            <ThemeProvider theme={cores}>
                <Container >
                    <Texto >{props.titulo}</Texto>
                </Container>
            </ThemeProvider>
        </TouchableOpacity >
    )
}

export default Botao;