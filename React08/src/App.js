import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {Routes , Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail'
import { useState } from 'react';
import Storage from './components/Storage';

function App() {

 const [list, setList] = useState([])

  /* 미션 수행 순서!
    1) Route 처리
    -BrowserRouter,Routes,Route,...etc
    -import / export

    2) App.js에 list state 관리해주기!
    -tip! 함수 또한 props 로 보낼 수 있다는 것을 명심!
    ex) const[list,serList] = useState([])
    ...
    <Main liser={list} setList{setList} />

    3) Header Mission!
    4) Produce List Miossion!
    4) Produce Item Miossion!
    4) Produce Detail Miossion!
    
  */
  return (
    <div className="container">
      <Header/>

    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/list' element={<ProductList list={list} setList={setList}/>}></Route>
      <Route path='/detail/:num' element={<ProductDetail list={list}/>}></Route>
      <Route path='/storage' element={<Storage/>}></Route>
    </Routes>

    

      <Footer/>
    </div>
  );
}

export default App;