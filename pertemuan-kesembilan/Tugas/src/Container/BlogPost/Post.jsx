import React from "react";

const Post = (props) => {
    return(
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-article-content-writing-paper-storytelling-write-icon-for-web-png-image_5225632.jpg" alt="Gambar Tumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p className="isi-artikel">{props.isi}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusArtikel(props.idArtikel)}>Hapus</button>
            </div>
        </div>
    )
}

export default Post;