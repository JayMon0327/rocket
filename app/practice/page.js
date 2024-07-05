'use client';

import Image from "next/image";
import { useState } from "react";

export default function Practice() {
    let 상품 = ['토마토', '마늘', '파스타']
    let [수량, 수량변경] = useState([0, 0, 0])
    
    return(
        <div>
            <h4 className="title">파스타 조합</h4>
            {상품.map((a, i)=>{
                return(
                    <div className="food" key={i}>
                        <img src={`/food${i}.png`} className="food-img"/>
                    <h4>{a} $40</h4>
                    <button onClick={()=>{
                        let food = [...수량]
                        food[i]--
                        수량변경(food)
                    }}>-</button>
                    <span>{수량[i]}</span>
                    <button onClick={()=>{
                        let food = [...수량]
                        food[i]++
                        수량변경(food)
                    }}>+</button>      

                    </div>
                )
            })}


        </div>
    )
}