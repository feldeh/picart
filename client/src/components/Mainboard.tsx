//rfce
import React from 'react'
// import { Container, styled } from '@mui/system'
import styled from 'styled-components'
//Pin is inside mainboard
import Pin from './Pin';

function Mainboard() {
  return (
    <div>
        <Wrapper>
            <Container>
                <Pin />

            </Container>

        </Wrapper>
        

    </div>
  )
}

export default Mainboard

const Wrapper = styled.div`
background-color: white;
display: flex;
width: 100%;
height: 100%;
margin-top: 15px;
justify-content: center;
`

const Container = styled.div`
display: flex;
width: 80%;
background-color: white;
`