  
import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";


const getNewsMhs = () => GetAPI("mahasiswa?_sort=id&_order=desc");

const postNewsMhs = (dataYgDiKirim) => PostAPI("mahasiswa", dataYgDiKirim);

const deleteNewsMhs = (dataYgDiHapus) => DeleteAPI("mahasiswa", dataYgDiHapus);

const API = {   
  getNewsMhs,
  postNewsMhs,
  deleteNewsMhs,
};

export default API;