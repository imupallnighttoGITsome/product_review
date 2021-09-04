import './App.css';
import React, {useState} from 'react';
import UserInfo from './components/reviews/ReviewUserDescription'
import ReviewPhotos from './components/reviews/ReviewPhotos'
import Modal from './components/reviews/Modal';


function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <Modal onClose={ () => setShow(false) } show={show}/>
      <UserInfo onOpen={ () => setShow(true) } show={show} setShow={setShow}/>
      <ReviewPhotos />
    </div>
  );
}




export default App;
