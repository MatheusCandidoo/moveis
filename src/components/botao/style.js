import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${props => props.theme.background};
    font-family: helvetica;
    width: 200px;
    height: 50px;
    justify-Content: center;
    align-items: center;
`

export const Texto = styled.Text`
    font-family: helvetica;
    font-weight: bold;
    color: ${props => props.theme.texto};
`