import React from 'react'
import { styled } from 'styled-components'


const Welcome = ({ currentUser }) => {
    return (
        <Container>
            <img src="https://media.tenor.com/CigpzapemsoAAAAj/hi-robot.gif" alt="robot" />
            <h1>Welcome, <span>{currentUser.username}!</span></h1>
            <h3>Please select a chat to Start Messaging.</h3>
        </Container>
    )
}

const Container = styled.div`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: white;
img {
    height: 20rem;
}
span {
    color: #4e0eff;
}
`

export default Welcome
