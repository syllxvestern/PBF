import photo from '../../foto.jpg';

const About = () => {
    return(
        <div className="container mb-5">
            <div className="d-flex justify-content-left">
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Pemrograman Berbasis Framework</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nama :</th>
      <td>M.Rahmat Samudra Anugrah</td>
    </tr>
    <tr>
      <th scope="row">Kelas :</th>
      <td>TI-3F</td>
    </tr>
    <tr>
      <th scope="row">Prodi :</th>
      <td>D-IV Teknik Informatika</td>
    </tr>
  </tbody>
</table>
                <div className="card" style={{width: "9.6rem"}}>
                    <img className="card-img-top w-100" src={photo} alt="Card" />
                </div>
            </div>
        </div>
    )
}

export default About;