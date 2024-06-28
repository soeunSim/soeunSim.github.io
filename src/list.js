import React from "react";

function ListList(props){
    const shoesList = props.shoes;
    return(
        <div className="row listList">
            {shoesList.map((it, i) => {
                return (
                    <div className="col-md-4">
                        <img src={'https://codingapple1.github.io/shop/shoes' + (it.id + 1) + '.jpg'} width="80%"/>
                        {/* <img src={process.env.PUBLIC_URL + '/shoes' + (it.id + 1) + '.jpg'} width="80%"></img> */}
                        <h4>{it.title}</h4>
                        <p>{it.price}</p>
                    </div>
                )
            })}
        </div> 
    );
}

export default ListList;