import React, {Component} from 'react';
import Cart from './Cart';

class CartPost extends Component{
    state = {
        listCart :[]
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3003/keranjang') // alamat URL API yang ingin diambil datanya
            .then(Response => Response.json()) // ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => { // data json hasil ambil dari API dimasukkan ke listMahasiswa
                this.setState({
                    listCart: jsonHasilAmbilDariAPI
                })
            }) 
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3003/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    handleHapusCart = (data) => {
        fetch(`http://localhost:3003/keranjang/${data}`, {method:'DELETE'}) // Alamat url API yang ingin dihapus datanya
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    render() {
        var no = 0;
        var total = 0;
        return (
            <div className="container">
                <left><h2>Cart</h2></left>
                <table className="table table-striped" cellPadding="5" width="100%" >
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" colSpan="1">No</th>
                            <th scope="col">ID Produk</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Qty</th>
                            <th scope="col">SubTotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listCart.map(cart => {
                                no += 1;
                                total += cart.harga * cart.qty
                                return (
                                    <Cart
                                        no={no}
                                        key={cart.id}
                                        id={cart.id}
                                        image={cart.image}
                                        nama={cart.nama}
                                        harga={cart.harga}
                                        gambar={cart.gambar}
                                        stok={cart.stok}
                                        qty={cart.qty}
                                        hapusCart = {this.handleHapusCart}
                                        />
                                )
                            })
                        }
                        <tr>
                            <td align="right" colSpan="6">Total</td>
                            <td>Rp. {total}</td>
                            {/* <td>Total : {total}</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CartPost;