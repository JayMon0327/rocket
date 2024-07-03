export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    // JS [] Array 문법 = Java array임
    let 어레이 = [2,3,4]
    어레이.map((a, i)=>{
        console.log(a)
    })
    // JSX의 map() 기능 = for문
    // 1. 함수안의 코드 반복실행해줌
    // 2. 첫번째 파라미터: array안의 자료 출력해줌
    // 3. 두번째 파라미터: 반복될 때마다 0부터 1씩 커지는 정수
    // 4. return에 적은걸 array로 담아줌 [1,2,3] -> return 10 = [10, 10, 10]
    // 5. console.log가 아닌 실제로 사용할때는 return을 써줘야 출력을 해줌
    // -> <div> 태그 3개

    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            상품.map(()=>{
                return (
                    <div className="food">
                    <h4>{상품[0]} $40</h4>
                    </div>
                )
            })
        }
      </div>
    )
  }

  // Routing
  // URL과 페이지 만들고 싶으면
  // 1. app 폴더안에 폴더 만들고
  // 2. 그 안에 page.js 넣고
  // 3. 그 안에 레이아웃 넣기

  // 위와 같은 말인데 컴포넌트(page.js) 만드는법은
  // 1. function 이름명명() {return() } 형식을 취한다.
  // 2. function 앞에 export default를 붙힌다.
  // 3. 이런 과정을 전문 용어로 컴포넌트 만들어서 export default하기

  // 상단바 레이아웃같이 많이 사용하는 것들은 
  // layout.js 에서 작성하자.