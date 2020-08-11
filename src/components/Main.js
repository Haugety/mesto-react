import React from "react";
import api from '../utils/api.js';
import Card from './Card.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
      setCards(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return (

    <main className="content">

      <section className="profile">
        <div className="profile__avatar">
          <img alt="Аватар профиля" src={userAvatar} className="profile__image" />
          <button type="button" className="profile__edit-avatar" onClick={onEditAvatar}>
            <svg className="profile__edit-avatar_icon" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26 3.45351L6.76981 22.7932L3.33585 19.2903L22.517 0L26 3.45351ZM0 26L5.10189 24.4706L1.52075 21.0171L0 26Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="profile__info">
          <div className="profile__row">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="edit-button" onClick={onEditProfile}>
              <svg className="edit-button__icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1.328L2.604 8.767 1.283 7.419 8.66 0 10 1.328zM0 10l1.962-.588L.585 8.083 0 10z" fill="#fff" />
              </svg>
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="add-button" onClick={onAddPlace}>
          <svg className="add-button__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 9.77778H12.2222V0H9.77778V9.77778H0V12.2222H9.77778V22H12.2222V12.2222H22V9.77778Z" fill="white" />
          </svg>
        </button>
      </section>

      <ul className="cards list">
        {cards.map((item) => <Card key={item._id} cardImage={item.link} cardTitle={item.name} cardLikes={item.likes.length} onCardClick={onCardClick} />)}
      </ul>

    </main>

  );
}

export default Main;
