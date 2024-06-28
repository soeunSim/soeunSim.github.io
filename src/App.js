/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button , Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios'
import data from './data.js';
import Detail from './pages/Detail.js';
import ListList from './list.js';
import Cart from './pages/Cart.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(0);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={()=>{navigate('/')}}>shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>  

      <Routes>
        <Route path="/" element={
          <>
          <div className='main-bg'></div> 
          <div className="container">
            <ListList shoes={shoes} setShoes={setShoes}></ListList>
            <Button onClick={()=>{
              setClickCount( clickCount + 1);
              console.log(clickCount);
              if( clickCount === 1){
                axios.get('https://codingapple1.github.io/shop/data2.json').then((item)=>{
                  let pushData = [...shoes];
                  pushData.push(...item.data);
                  setShoes(pushData);
                }).catch(()=>{
                  //실패 시 문구 
                  alert('데이터를 가져올 수 없습니다.')
                })
              }else if(clickCount === 2){
                alert('상품이 더 존재하지 않습니다.')
                return false;
              }
            }} variant="primary">더보기</Button>
          </div>      
          </>
        }/>   
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>}/>  
        <Route path="/cart" element={ <Cart></Cart>}/> 

        <Route path="/event" element={<Event></Event>}>   
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰 증정</div>}></Route>
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>}/>     
      </Routes>

    </div>
  );
}



function Event(){
  const navigate = useNavigate();
  
  const navigateToEvent01 = () => {
    navigate("/event/one");
  };
  const navigateToEvent02 = () => {
    navigate("/event/two");
  };  
  return(
    <div style={{padding:"30px"}}>
      <h4>🎈오늘의 이벤트🎈</h4>
      <Button variant="primary" style={{margin:"20px 0px 30px 10px"}} onClick={navigateToEvent01}>01. Event</Button>
      <Button variant="primary" style={{margin:"20px 0px 30px 10px"}} onClick={navigateToEvent02}>02. Event</Button>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
