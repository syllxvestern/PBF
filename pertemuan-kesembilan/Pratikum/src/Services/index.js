import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";


const getNewsBlog = () => GetAPI("posts?_sort=id&_order=desc");

const postNewsBlog = (dataYgDiKirim) => PostAPI("posts", dataYgDiKirim);

const deleteNewsBlog = (dataYgDiHapus) => DeleteAPI("posts", dataYgDiHapus);

const API = {   
  getNewsBlog,
  postNewsBlog,
  deleteNewsBlog,
};

export default API;