import React from "react";
import {FaCartPlus} from 'react-icons/fa'

const MesinCuci = (props) => {
    return (
        <div className="col-lg-3 col-sm-3 portofolio-item mt-2">
            <div className="card h-100">
                <img src={props.image} alt="Gambar MesinCuci" className="card-img-top mh-100"/>
                <div className="card-body">
                    <h4 className="card-title mb-4">{props.nama}</h4>
                    <button className="btn btn-md btn-dark btn-block" onClick={props.addKeranjang.bind(this, props.idMesinCuci)}>Add To Cart</button>
                    <br/>
                    <hr/>
                    <p className="card-text">Harga : Rp. {props.harga}</p>
                    <p className="card-text"> Stok : {props.stok} </p>
                </div>
            </div>
        </div>
    )
}

export default MesinCuci;
