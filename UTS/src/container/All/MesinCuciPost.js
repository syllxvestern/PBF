import React, {Component} from "react";
import MesinCuci from "./MesinCuci";

class MesinCuciPost extends Component{
    state = {                   //Komponen state dari react untuk statefull Component
        listMesinCuci: []       //variable array yang digunakan untuk menyimpan data API
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/mesincuci') // alamat URL API yang ingin diambil datanya
            .then(Response => Response.json()) // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listMahasiswa
                this.setState({
                    listMesinCuci: jsonHasilAmbilDariAPI
                })
            }) 
    }

    componentDidMount() {
        this.ambilDataDariServerAPI();
    }

    handleAddToCart = (data) => {
        fetch(`http://localhost:3002/mesincuci/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataMesinCuci = { ...this.state.insertKeranjang };
                dataMesinCuci["id"] = res["id"];
                dataMesinCuci["image"] = res["image"];
                dataMesinCuci["nama"] = res["nama"];
                dataMesinCuci["harga"] = res["harga"];
                dataMesinCuci["stok"] = res["stok"];
                dataMesinCuci["qty"] = 1;
                this.setState({
                    insertKeranjang: dataMesinCuci
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            });
    }

    handleCekKeranjang = (data) => {
        fetch(`http://localhost:3003/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3003/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                image: res["image"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3003/keranjang', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang) // Kirimkan ke body request untuk data MesinCuci yang akan ditambahkan
        })
            .then(response => {
                this.ambilDataDariServerAPI()
            });
    }
    
    render(){
        return(
            <div className="container post-mahasiswa mt-3 mb-3">
                
                <div className="row justify-content-center">
                    {
                        this.state.listMesinCuci.map(mesincuci => {
                            return (
                                <MesinCuci 
                                    key={mesincuci.id} 
                                    idMesinCuci={mesincuci.id} 
                                    image={mesincuci.image} 
                                    harga={mesincuci.harga} 
                                    nama={mesincuci.nama}
                                    stok={mesincuci.stok}  
                                    addKeranjang={this.handleAddToCart} /> 
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MesinCuciPost;