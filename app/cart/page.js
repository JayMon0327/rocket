import {age, name} from './data.js'

export default function Cart() {
    let 장바구니 = ['Tomatoes', 'Pasta']
    let 카드사= ['현대카드', '롯데카드', '하나카드']
    // function 안에서 만든 변수는 여기서만 사용가능(지역변수)
    // 이처럼 부모 컴포넌트에서 만든 변수를 자식 컴포넌트에서
    // 사용하게끔 데이터 전송하는걸 props 문법이라함

    // props사용방법
    // 1. <자식Component 작명="전할데이터" />
    // 2. 자식은 {props.작명} 사용
    // 부모측에서 중괄호 열고 데이터 넣으면
    // 변수, 함수 등 아무거나 전송가능 ex) 작명={장바구니}
    // 결론 - 부모 -> 자식은 props로 해결 가능 !
    // 자식 -> 부모 패륜전송 불가능
    // 컴포넌트 1 -> 컴포넌트 2 옆집으로 불륜전송 불가능
    // 데이터가 많은 컴포넌트에서 필요하면 그들 중 최고 부모 컴포넌트에 보관해야 좋음

    return (
      <div>
        <h4 className="title">Cart</h4>
        <CartItem item={장바구니[0]}/>
        <CartItem item={장바구니[1]}/>
        <CartItem/>
        <Banner card={카드사[0]}/>
        <Banner card={카드사[1]}/>
        <Banner card={카드사[2]}/>
      </div>
    )
  }

  // 지저분한 HTML은 component로 묶어서 관리한다.
  // 단점은 component끼리 데이터 공유가 어려움
  // 재사용이 잦은 html들은 component로 바꾸는게 좋음
  // function 문법 쓰는 이유
  // 1. 더러운 코드 한 단어로 축약 2.같은 코드 재사용

  //Next.js 컴포넌트는 종류가 2개
  // 아무데나 대충 만든건 server component - html에 자바스크립트 기능X
  // 파일 맨위에 'use client' 넣고 만든건 client component
  // client component는 html에 자바스크립트 가능, useState, useEffect등 사용가능
  // 결론 - 큰 페이지는 Sever Component, JS기능 필요한 곳만 Client component

  function CartItem(props){
    return(
        <div className="cart-item">
          <p>{props.item}</p>
          <p>$40</p>
          <p>1개</p>
        </div>
    )
  }

  function Banner(props){
    return <h5>{props.card} 결제 행사중</h5>
  }