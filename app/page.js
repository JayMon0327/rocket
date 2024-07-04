import Link from "next/link" // <a>href</a>와 비슷한놈
import Image from 'next/image'
import 이미지 from '/public/test1.png'

export default function Home() {
  let name = 'park'
  return ( //1. return 안에는 1개의 <태그>만이 존재해야 함
    <div>
      <Image src={이미지} alt="테스트 1" width="500" height="300"/>
      <h4 className="title">애플후레시</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}

// 2. CSS 작업을 위해 class를 쓰고 싶으면 className으로 적어줘야 함
// -> JS 문법중에 class 문법이 있기 때문에 겹치지 않기 위해

// 3. HTML 안에 변수를 넣으려면 return 전에 
// 변수를 선언하고 {} 를 사용하자.

// 4. style 속성 넣으려면 style ={{어쩌구:저쩌구}}
// 대쉬 기호가 있는(font-size) 녀석들은 카멜표기법으로 교체해서사용
// fontSize