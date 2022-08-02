import { API_POSTS, DATA_POSTS } from "../../constants/api";
import { ROOT_POSTS } from "../../constants/root";
import { getDataCtatalog } from "../../utils/getDataApiCatalog";
import getFormData from "../../utils/getFormData";

class Posts {
  renderPosts(data) {
    let htmlPostForm = "";
    htmlPostForm = `
      <form class="post-form" action="/" method="POST" id="formAddPost">           
      <div class="mb-3">
      <input type="text" name='title' class="form-control" id="exampleFormControlInput1" placeholder="Тема поста">
      </div>
      <div class="mb-3">
      <textarea class="form-control" name='text' id="exampleFormControlTextarea1" placeholder="Текст" rows="3"></textarea>
      <div class="d-grid gap-2 col-6 mx-auto" style='margin-top: 10px;'>
      <button class="btn btn-primary" type='submit'>Добавить пост</button>
      </div>
      </div>
      <form/>
      `;

    let htmlPosts = "";
    data.forEach(({ _id, title, text, date }) => {
      htmlPosts += `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
           
            <div class="post-row row">
            <div class="posts-col s12 m8 offset-m2 16 offset-l3" id="posts">
            <div class="card z-depth-4">
            <div class="card-content">
            <span class="card-title">${title}</span>
            <p style='white-space: pre-line'>${text}</p>
            <small>${new Date(date).toLocaleDateString()}</small>
            </div>
            <div class="card-action">
            <div class="btn btn-small red">
            <i class="material-icons js-remove" data-id='${_id}'>delete</i>
            </div>
            </div>
            </div>  
            </div>
            </div>
           
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        `;
    });
    const html = `
    <div class="posts-container container" style="padding-top: 50px;">
    ${htmlPostForm}
    ${htmlPosts}
    </div>
    `;
    ROOT_POSTS.innerHTML = html;
    getFormData.getFormPostData(formAddPost, API_POSTS);

    document.getElementById("posts").addEventListener("click", (event) => {
      if (event.target.classList.contains("js-remove")) {
        const id = event.target.getAttribute("data-id");
        getDataCtatalog.removeData(API_POSTS, id);
      }
    });
  }
  async render() {
    const data = await DATA_POSTS;
    data ? this.renderPosts(data) : error.render(ROOT_POSTS);
  }
}

const postsProducts = new Posts();
export default postsProducts;
