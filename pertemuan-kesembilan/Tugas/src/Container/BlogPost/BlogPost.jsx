import { Component } from "react";
import './BlogPost.css';
import Post from "../../Component/BlogPost/Post";
import API from "../../Services/index";

class BlogPost extends Component {
    state = {                   // komponen state dari React untuk stateful component
        listMahasiswa: [],         // variable array yang digunakan untuk menyimpan data API
        insertMahasiswa: {        // variable yang digunakan untuk menampung sementara data yang akan di inserrt
            id: "",          // kolom userId, id, title, dan body sama, mengikuti kolom yang ada pada listArtikel.jso        
            nim: "",          
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {        // fungsi untuk mengambil data dari API dengan penambahan sort dan order
        API.getNewsMhs().then(result => {
            this.setState({
                listMahasiswa: result,
            })
        })
    }
    
    componentDidMount() {   // komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()  //  ambil data dari server API lokal
    }

    handleHapusMahasiswa = (data) => {  // function yang meng-handle button action hapus data
        API.deleteNewsMhs(data);
        this.ambilDataDariServerAPI()  
    }

    handleTambahMahasiswa = (event) => {      // fungsi untuk meng-handle form tambag data artikel
        let formInsertMahasiswa = {...this.state.insertMahasiswa};  // cloning data state insertArtikel ke dalam variable formInsertArtikel
        let timestamp = new Date().getTime();       // digunakan untuk menyimpan watu (sebagai ID artikel)
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;  // menyimpan data onChange ke formInsertArtikel sesuai dengan target yang diisi
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {    // fungsi untuk meng-handle tombol simpan
        API.postNewsMhs(this.state.insertMahasiswa)
            .then( (Response) => {
                this.ambilDataDariServerAPI();      // reload/refresh data
            });
    }

    render() {
        return (
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <textarea className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambahMahasiswa}></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">HP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {  // looping dan masukkan untuk setiap data yang ada di listArtikel ke variable artikel
                        return <Post key={mahasiswa.id} nama={mahasiswa.nama} alamat={mahasiswa.alamat} 
                        hp={mahasiswa.hp} angkatan={mahasiswa.angkatan} status={mahasiswa.status} 
                        nimMahasiswa={mahasiswa.nim} idMahasiswa={mahasiswa.id} hapusMahasiswa={this.handleHapusMahasiswa}/>  // mappingkan data JSON dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }   
}
export default BlogPost;