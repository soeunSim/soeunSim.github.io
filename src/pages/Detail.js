import React from "react";
import { useParams } from "react-router-dom";

function Detail(props){
    const shoesList = props.shoes;
    console.log(shoesList);
    let {id} = useParams();

    let findItem = shoesList.find(


        
    );


    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{findItem.title}</h4>
                <p>{findItem.content}</p>
                <p>{findItem.price}</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div>
    ) 
}

export default Detail;