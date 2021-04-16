import React, {Component} from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";
import API from "../../Services/index";

class BlogPost extends Component {
    state = {                   // komponen state dari React untuk stateful component
        listArtikel: [],         // variable array yang digunakan untuk menyimpan data API
        insertArtikel: {        // variable yang digunakan untuk menampung sementara data yang akan di inserrt
            userId: 1,          // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.json
            id: 1,
            title: "",
            body: ""
        }
    }
    
    ambilDataDariServerAPI = () => {        // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result,
            })
        })
    }

    componentDidMount() {   // komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  //  ambil data dari server API lokal
    }

    handleHapusArtikel = (data) => {  // function yang meng-handle button action hapus data
        API.deleteNewsBlog(data);
        this.ambilDataDariServerAPI()  
    }

    handleTambahArtikel = (event) => {      // fungsi untuk meng-handle form tambag data artikel
        let formInsertArtikel = {...this.state.insertArtikel};  // cloning data state insertArtikel ke dalam variable formInsertArtikel
        let timestamp = new Date().getTime();       // digunakan untuk menyimpan watu (sebagai ID artikel)
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;  // menyimpan data onChange ke formInsertArtikel sesuai dengan target yang diisi
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    handleTombolSimpan = () => {    // fungsi untuk meng-handle tombol simpan
        API.postNewsBlog(this.state.insertArtikel)
            .then( (Response) => {
                this.ambilDataDariServerAPI();      // reload/refresh data
            });
    }

    render() {
        return (
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm-2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="body" name="body" rows="3" onChange={this.handleTambahArtikel}>
                            </textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variable artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} 
                        hapusArtikel={this.handleHapusArtikel}/>  // mappingkan data JSON dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }   
}
export default BlogPost;