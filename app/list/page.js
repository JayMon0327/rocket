'use client';

import Image from 'next/image'
import { useState } from "react"

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량, 수량변경] = useState([0, 0, 0])

    // JS [] Array 문법 = Java array임
    // JSX의 map() 기능 = for문
    // 1. 함수안의 코드 반복실행해줌
    // 2. 첫번째 파라미터: array안의 자료 출력해줌
    // 3. 두번째 파라미터: 반복될 때마다 0부터 1씩 커지는 정수(자바의 반복문 i와 같음)
    // 4. return에 적은걸 array로 담아줌 [1,2,3] -> return 10 = [10, 10, 10]
    // 5. console.log가 아닌 실제로 사용할때는 return을 써줘야 출력을 해줌
    // -> <div> 태그 3개


    // 변수: 데이터 잠깐 저장 가능
    // state: 데이터 잠깐 저장 가능
    // state 는 client component에서만 사용가능
    // 1. state 선언시 import 해줘야 함
    // 2. let [작명1, 작명2] = useState(0) 이런식의 선언
    // 3. 작명2에 해당하는 부분은 state 변경을 도와주는 함수
    // 4. state 변경할땐 state변경함수() 를 써야함
    // 5. state변경함수(여기123) 괄호안에 넣은걸로 바꿔줌

    // state는 변수랑 똑같다고 생각하면 되지만 장점이 있다.
    // -> state 변경되면 state 쓰는 html부분도 ! 자동 재랜더링 !
    // 

    // 기존 방식대로 만들면 수량을 변경할때 수량 1,2,3모두 같이 변경됨
    // 버튼들만 <span>, <button> 태그를 이용해서 바깥에서 작업
    // 수량 변수를 Array 자료형태로 만듬
    // 태그 안에서는 자료형태를 카피 해서 변수로 만들어 사용 [...수량] 
    // ! 동작원리 !
    // state 변경함수를 가져다 쓸때 내부적으로 동작하는 로직이 있음
    // 항상 실행시키는게 아니라 기존 state != 새 state 이어야 작동
    // JS는 변수를 만들면 주소값만을 가짐
    // 변수를 복사해도 주소값만을 복사하기 때문에 서로 값은 값을 가지게됨
    // 고로 == 결과 true 나옴
    // [...수량] 의 뜻은 완전히 독립적인 새로운 Array를 만들어주세요.임
  
    // state 사용법만 간단히 말하자면
    // array는 [...수량], object는 {...수량} 으로 복사해서 수정하고 state 변경함수 사용
    // Array나 Object가 아니라 숫자, 문자일 경우 복사본을 만들필요없음


    return (
      <div>
        <h4 className="title">상품목록</h4>

        {
            상품.map((a, i)=>{
                return (
                    <div className="food" key={i}>
                      <img src={`/food${i}.png`} className="food-img" />
                    <h4>{a} $40</h4>
                    <button onClick={()=>{
                      let food = [...수량]
                      food[i]-- 
                      수량변경(food) 
                      }}>-</button>
                    <span> {수량[i]} </span>
                    <button onClick={()=>{
                       let food = [...수량]
                       food[i]++
                       수량변경(food) 
                       }}>+</button>
                    </div>
                )
            })
        }
      </div>
    )
  }