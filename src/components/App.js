import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: '',
    name: ''
  });


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleCardClick(selectedCard) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard({
      link: selectedCard.link,
      name: selectedCard.name
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (

    <div className="page">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__set">
          <label className="popup__field">
            <input type="url" placeholder="Ссылка на картинку" autoComplete="off" className="popup__input popup__input_text_link" id="link-avatar-input" name="avatarInput" required />
            <span className="popup__input-error" id="link-avatar-input-error"></span>
          </label>
          <button type="submit" className="popup__save-button" disabled>Сохранить</button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__set">
          <label className="popup__field">
            <input type="text" placeholder="Введите имя" autoComplete="off" className="popup__input popup__input_text_name" id="name-input" name="nameInput" minLength="2" maxLength="40" required pattern="[A-Za-zА-ЯЁа-яё -]{1,}" />
            <span className="popup__input-error" id="name-input-error"></span>
          </label>
          <label className="popup__field">
            <input type="text" placeholder="Введите описание" autoComplete="off" className="popup__input popup__input_text_description" id="description-input" name="descriptionInput" minLength="2" maxLength="200" required />
            <span className="popup__input-error" id="description-input-error"></span>
          </label>
          <button type="submit" className="popup__save-button popup__save-button_inactive" disabled>Сохранить</button>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__set">
          <label className="popup__field">
            <input type="text" placeholder="Название" autoComplete="off" className="popup__input popup__input_text_place" id="place-input" name="placeInput" minLength="1" maxLength="30" required />
            <span className="popup__input-error" id="place-input-error"></span>
          </label>
          <label className="popup__field">
            <input type="url" placeholder="Ссылка на картинку" autoComplete="off" className="popup__input popup__input_text_link" id="link-input" name="linkInput" required />
            <span className="popup__input-error" id="link-input-error"></span>
          </label>
          <button type="submit" className="popup__save-button" disabled>Создать</button>
        </fieldset>
      </PopupWithForm>

      <ImagePopup
        isOpen={isImagePopupOpen}
        selectedCardLink={selectedCard.link}
        selectedCardName={selectedCard.name}
        onClose={closeAllPopups}
      />

      <Footer />

    </div>

  );
}

export default App;
