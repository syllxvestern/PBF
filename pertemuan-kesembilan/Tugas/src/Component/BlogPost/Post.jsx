import React from "react";

const Post = (props) => {
    return (
        <div className="mahasiswa">
            <div className="gambar-artikel">
                <img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-user-icon-png-image_5097430.jpg" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-mahasiswa">
            <div className="nim-mahasiswa"><b>Nim : {props.nimMahasiswa}</b></div>
                    <p className="nama-mahasiswa"><b>Nama: {props.nama}</b></p>
                    <p className="alamat-mahasiswa"><b>Alamat : {props.alamat}</b></p>
                    <p className="hp-mahasiswa"><b>HP: {props.hp}</b></p>
                    <p className="angkatan-mahasiswa"><b>Angkatan: {props.angkatan}</b></p>
                    <p className="status-mahasiswa"><b>Status: {props.status}</b></p>
                    <button className="btn btn-sm btn-warning" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
            </div>
        </div>
    )
}
export default Post;