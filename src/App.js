import { useState } from 'react';
import { data } from './data';
import './App.css';


function App() {
  const [gifts, setGifts] = useState(data);

  const removeItem = (id) => {
    let newGifts = gifts.filter (item => item.id !== id);
    setGifts(newGifts);  
  }

  return (
    <div>
      <div className='container'>
        <h1>List of {gifts.length} gifts</h1>
      </div>

      {gifts.map((item => {
        const {id, gift, image} = item;

      return (
          <div key={id}>
            <div className='container'>
              <h2>{gift}</h2>
            </div>

            <div className='container'>
              <img src={image} alt='item' width='300px'/>
            </div>

            <div className='container'>
              <button onClick={() => removeItem(id)}>remove</button>
            </div>
          </div>
        )
      }))}


      <div className='container'>
        <button onClick={() => setGifts([])}>delete all</button>
      </div>
    </div>
  );
}

export default App;
