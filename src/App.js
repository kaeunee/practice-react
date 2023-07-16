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

      {/*
      return()안에는 병렬 태그 2개 이상 기입 금지
      
      state는 언제 사용?->변동사항이 생기면 state쓰는 html도 자동으로 재렌더링
      자주 바뀌는 값들은 state로 만들면 좋음
      state만드는 법
      1. import {useState}
      2. useState(보관할 자료)
      3. let[작명,작명] (*작명은 두 개까지 가능!)
      let [a, b] = useState('저널 리스트')
      a는 state안에 보관했던 자료 출력 시 '저널 리스트'가 나옴
      b는 state변경용 함수 *사용 시 변경용 함수 b뒤에 소괄호 반드시 븉이자. b()
      즉, state변경함수(갈아치울state)
      state가 변경이 되어야 html이 재렌더링이 됨
      *그래서 항상 변경함수를 써야 됨*
      이벤트 핸들러 onClick={}안엔 함수이름을 넣어야 됨
      function(){}을 간단히 ()=>{}

      *참고 array/object 다룰 때 원본은 보존하는 게 좋음(let copy=[...];)
      배열 원본데이터를 다시 되돌리기 힘드므로 복제해서 수정
      [state 변경함수 특징]
      기존 state, 신규 state 같은 경우 에너지 절약의 이유로 변경 안해줌
      [array/ocject데이터의 특징]
      array/ocject 데이터를 담은 변수엔 실데이터가 아닌 화살표만 저장됨
      즉, 데이터가 어딨는지 알려주는 화살표만(데이터는 RAM에 저장)

      컴포넌트 만드는 법
      1. function 만들고
      2. return() 안에 html담기
      3. <함수명></함수명>쓰기
      *컴포넌트의 단점: state가져다쓸 때 에러 App()내 함수에 없기 때문

      [동적인 UI 만드는 step]
      1. html/css로 미리 디자인
      2. UI의 현재상태 state로 저장(우측 useState();소괄호 안. 형식은 자료형이기만 하면 됨.)
      3. state에 따라 UI 어떻게 보일지 작성

      모달창의 예로 state가 false면 <Modal> 안보이게 state가 true면 <Modal>보이게 *삼항연산자
      {
        modal == true ? <Modal/> : null 
      }
      *null은 비어있는 html용으로 자주 사용함

      map() 함수 사용법
      :자바스크립트 기본함수로 모든 array자료 우측엔 map() 함수를 붙일 수 있다.

      기능 1. array에 들어있는 자료개수만큼 코드를 반복 실행
      기능 2. 콜백함수(=function)에 파라미터를 작명하면
             해당 파라미터는 array안에 있던 모든 자료를 하나씩 출력 즉 하나의 데이터들이 됨.
             (소괄호 안에 있는 함수를 콜백함수라고 함.)
      기능 3. return을 추가할 경우 함수값(a), return값(a * 20) 입력 시
             자료들을 array에 배열수만큼 담아줌.
             **여기서 (a)의 파라미터 a는 반복문이 돌때마다 array안에 있던 하나하나의 돌아다니는 데이터 
             파라미터를 두 개까지 작명이 가능한데 function(a, i)i는 반복문이 돌 때 마다 0부터 1씩 증가하는 정수
      
      이렇게 3가지 기능을 하는 함수가 map함수.


      props
      부모 -> 자식 state 전송하는 법
      1. <자식컴포넌트 작명={state이름}>
      2. props 파라미터 등록 후 props.작명 사용
    

      */}

      {/* <button onClick={ ()=> {
        let copy = [...글제목];
        copy[0] = 'React 문법에 대하여';
        글제목변경(copy);
      }}>글수정</button> */}

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
        modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경}/> : null
      }

    </div>
  );
}

// 동적 UI 만드는 방법
// 1. html/css 미리 디자인
// 2. 현재 UI 상태를 state로 만들어두고
// 3. state 종류에 따라 UI가 어떻게 보일지 작성

function Modal(props){
  return (
    <div className="modal">
    <h4>{props.글제목[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button>글수정</button>
    </div>
  )
}

export default App;