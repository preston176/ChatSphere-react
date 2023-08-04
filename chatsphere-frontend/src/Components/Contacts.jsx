import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [isContactsOpen, setIsContactsOpen] = useState(true);

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
    // Close the contacts list when a contact is selected
    setIsContactsOpen(false);
  };

  const toggleContacts = () => {
    setIsContactsOpen((prevState) => !prevState);
  };

  return (
    <>
      {currentUserImage && currentUserImage && (
        <Wrapper>
          <ToggleIcon onClick={toggleContacts}>
            <FontAwesomeIcon icon={isContactsOpen ? faChevronUp : faChevronDown} />
          </ToggleIcon>
          <Container>
            <div className="brand">
              <img src={Logo} alt="logo" />
              <h3>chatsphere</h3>
              <p>select a chat</p>
            </div>
            <div className={`contacts ${isContactsOpen ? "open" : ""}`}>
              {contacts.map((contact, index) => (
                <div
                  key={contact._id}
                  className={`contact ${index === currentSelected ? "selected" : ""}`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img src={`data:image/svg+xml;base64,${contact.avatarImage}`} alt="" />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="current-user">
              <div className="avatar">
                <img src={`data:image/svg+xml;base64,${currentUserImage}`} alt="avatar" />
              </div>
              <div className="username">
                <h2>{currentUserName}</h2>
              </div>
            </div>
          </Container>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 0;
`;

const ToggleIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  @media screen and (max-width: 600px){
    padding: 1px;
    }
  overflow: auto;
  background-color: #010101;
  .brand {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: none;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    gap: 0.8rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
 
      background-color: #00ff99;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      &:hover{
        box-shadow: 1px -1px 37px -10px rgba(0,212,255,0.75);
        transition: all 0.05s ease-in-out;
        transform: scale(1.03);
      };
      &:active{
        box-shadow: 1px -1px 37px -10px rgba(0,212,255,0.75);
        transition: all 0.05s ease-in-out;
      };
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
       
        h3 {
          color: #000;
 
        }
      }
    }
    .selected {
      background-color: #00d9ff;
    }
    &.open {
      display: flex;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    @media screen and (max-width: 600px){
      display: none;
    }
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
      @media screen and (max-width: 600px){
      display: none;
    }
    }
    .username {
      h2 {
        color: white;
       
      }
      @media screen and (max-width: 600px){
      display: none;
    }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
