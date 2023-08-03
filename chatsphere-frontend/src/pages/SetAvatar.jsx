import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import loader from '../assets/loader.gif'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { setAvatarRoute } from '../utils/APIRoutes';
import { Buffer } from 'buffer'

const SetAvatar = () => {
    const api = 'https://api.multiavatar.com/45678945'
    const navigate = useNavigate(); // Fixed typo in the variable name

    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [selectedAvatar, setSelectedAvatar] = useState(undefined)

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
    }

    const setProfilePicture = async () => {
       if(selectedAvatar === undefined) {
        toast.error("Please select an avatar", toastOptions)
       } else {
        const user = await JSON.parse(localStorage.getItem("chat-app-user"))
        const {data} = await axios.post(`${setAvatarRoute}/${user._id}`,
        {
            image: avatars[selectedAvatar]
        })
        if(data.isSet) {
            user.isAvatarImageSet = true;
            user.avatarImage = data.image;
            localStorage.setItem("chat-app-user", JSON.stringify(user))
            navigate('/')
        } else {
            toast.error("Error setting avatar. Please try again", toastOptions)
        }
       }
    }

    useEffect(() => { // Removed async from here as useEffect callback should not be an async function
        const fetchData = async () => { // Created a separate async function to fetch data
            try {
                const data = [];
                for (let i = 0; i < 4; i++) {
                    const image = await axios.get(`${api}/${Math.round(Math.random() * 1000)}`); // Fixed the Math.random() call
                    const buffer = new Buffer(image.data);
                    data.push(buffer.toString("base64"));
                };
                setAvatars(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching avatars:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
        {
            isLoading ? <Container>
                <img src={loader} alt="loader" />
            </Container> : (

           
            <Container>
                <div className="title-container">
                    <h1>Select your profile avatar</h1>
                </div>
                <div className="avatars">
                    {
                        avatars.map((avatar, index) => {
                            return (
                                <div key={index} className={`avatar ${selectedAvatar === index ? "selected" : ""}`} >
                                    <img src={`data:image/svg+xml;base64, ${avatar}`} alt="" onClick={() => setSelectedAvatar(index)} />
                                </div>
                            )
                        })
                    }
                </div> 
                <button className='submit-btn' onClick={setProfilePicture}>Set as Profile Picture</button>
                 </Container>
                 )
        }
                <ToastContainer />
          
        </>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;
  .loader {
    max-inline-size: 100%;
  }
  .title-container {
    h1 {
      color: white;
    }
  }
  .avatars {
    display: flex;
    gap: 2rem;
    .avatar {
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.15s ease-in-out;
      img {
        height: 6rem;
      }
    }
    .selected {
      border: 0.4rem solid #4e0eff; /* Added the styles for the .selected class */
    }
  }
  button {
    background-color: rgba(0, 212, 255, 0.75);
    color: #fff;
    padding: 1rem 2rem;
    border: none;
    font-weight: bolder;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #00d9ff;
      color: #000;
      box-shadow: 0px 1px 47px -3px rgba(0, 212, 255, 0.75);
      transition: all 0.15s ease-in-out;
    }
  }
`;

export default SetAvatar
