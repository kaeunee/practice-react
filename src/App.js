/* eslint-diasble */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = 'Component';
  let [글제목, 글제목변경] = useState(['JSX 문법에 대하여', '리액트 state 변경하기', 'build & Github Pages']);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  [1,2,3].map(function(){
    console.log(1)
  })

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button onClick={ ()=> {
        let copy = [...글제목];
        copy[0] = 'React 문법에 대하여';
        글제목변경(copy);
      }}>글수정</button>


      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>{ 좋아요변경(좋아요+1) }}>🩵</span> { 좋아요 } </h4>
        <p>1월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 20일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(true); }} >{ 글제목[2] }</h4>
        <p>3월 22일 발행</p>
      </div> */}

      {/* {
        글제목.map(function(a, i){
          return (
          <div className="list">
            <h4> { 글제목[i] }
              <span onClick={()=>{
                let copy = [...좋아요];
                copy[i] = copy[i]+1;
                좋아요변경(copy);
                }}>🩵</span> {좋아요[i]} 
            </h4>
            <p>2월 20일 발행</p>
          </div>
          )
        }) 
      } */}


    {
      글제목.map(function(a,i){
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(true)}}>{ 글제목[i] }
            <span onClick={()=>{ 좋아요변경(좋아요+1)}} > 🩵</span> {좋아요}
            </h4>
            <p>3월 10일 발행</p>
          </div>
        )
      })
    }

      {
        modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목}/> : null
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
    <h4>{props.글제목[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=>{
      props.글제목변경(['리액트 환경', '글발행 기능', '동적인 UI']);
    }}>글수정</button>
    </div>
  )
}

export default App;