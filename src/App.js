import React, { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState([])
  const [images, setImages] = useState([])


const imageHandler = ()=>{
const url = `https://api.unsplash.com/search/photos?client_id=8885LVGQ1jCcljvkeAi7XWOGWUviF3vtvp9YZHWLYjg&query=${value}&per_page=334&orientation=squarish`
fetch(url)
.then(response => response.json())
.then(data => setImages(data.results))
.catch(error => console.error(error))

}
  return (
    <div className="App">
     <div className="header">
       <h2 className="h2">Welcome To Your Image Gallery</h2>
       <input type="text" className="input" onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={()=> imageHandler()} className="button">Search</button>
     </div>
     <div className="gallery">
       {
         images.map((item) =>{
           return <img className="image" key={item.id} src={item.urls.regular}/>
         } )
       }
     </div>
    </div>
  );
}

export default App;
