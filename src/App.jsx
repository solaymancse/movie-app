import { useEffect } from 'react';
import './App.css'
import { fetchDataFromApi } from './utils/Api'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Details } from './pages/details/Details';
import { SearchResult } from './pages/searchResult/SearchResult';
import { Explore } from './pages/explore/Explore';
import { Footer } from './components/footer/Footer';

function App() {
const dispatch = useDispatch();
const {url} = useSelector((state)=> state.home)
console.log(url);
useEffect(() => {
  fetchApiConfig();
}, [])

  const fetchApiConfig = ()=> {
     fetchDataFromApi("/configuration").then((res)=>{ 
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      
      }
     
     dispatch(getApiConfiguration(url))}
     );



  }

  return (
    <BrowserRouter>
    {/* <Headers/> */}
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/:mediaType/:id' element={<Details/>}/>
    <Route path='/search/:query' element={<SearchResult/>}/>
    <Route path='/explore/:mediaType' element={<Explore/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   <Footer/>
    </BrowserRouter>
  )
}

export default App
