import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge , changeNum } from "./../store";

function Cart(){
    let state = useSelector((state)=> { return state.cartData})
    let stateTest = useSelector((state)=> { return state.user})
    console.log(state);
    let dispatch = useDispatch();
    return(
        <div>
            <div>{stateTest.name} 의 장바구니</div>
            <p>{stateTest.age}</p>
            <button onClick={()=>{
                dispatch(changeAge())
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((a, i)=>
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.count}</td>
                                <td><button onClick={()=>{
                                    dispatch(changeNum(state[i].id))
                                }}>+</button></td>
                            </tr>                            
                        )
                    }                  
                </tbody>
            </Table> 
        </div>
    )
}


export default Cart;