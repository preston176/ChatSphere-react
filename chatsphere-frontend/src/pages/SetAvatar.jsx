import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import loader from '../assets/loader.gif'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { setAvatarRoute } from '../utils/APIRoutes';

const SetAvatar = () => {
    const api = 'https://api.multiavatar.com/45678945'
    const naviage = useNavigate();

    return (
        <>
            <Container>
                rererer
                <ToastContainer />
            </Container>
        </>
    )
}

const Container = styled.div``

export default SetAvatar
