import { API_POSTS, DATA_POSTS } from "../../constants/api";
import { ROOT_POSTS } from "../../constants/root";
import deleteItem from "../../utils/deleteItem";
import { sendRequest } from "../../utils/getDataApiCatalog";


class Posts {
  constructor() {


  }
  renderPosts(data) {

    let htmlPostForm = "";
    htmlPostForm = `
    <div class='post-form__close' id='form-close'>
    <div class='post-form__close-element js-close' >Х</div>
    </div>
    <div class='post-form__container'>
    <form class="post-form" action="/" method="POST" id='formAddPost'>           
    <div class="post-form__title">
    <input type="text" name='title' class="post-form__title-item" placeholder="Тема поста">
    </div>
    <div class="post-form__text">
    <textarea class="post-form__text-item" name='text' placeholder="Текст"></textarea>
      </div>
      <div class='post-form__btn'>
      <button class="post-form__btn-item" type='submit'>Добавить пост</button>
      </div>
      <form/>
      </div>
      `;

    let htmlPosts = "";
    data.forEach(({ _id, title, text, date }) => {
      htmlPosts += `
        <div class="posts-card">
        <div class='posts-card__container'>
        <div class="posts-card__content">
        <span class="posts-card__content-title">Тема поста: ${title}</span>
        <p class='posts-card__content-text'>Текст: ${text}</p>
        <span class='posts-card__content-date'>Дата создания: ${new Date(
          date
          ).toLocaleDateString()}</span>
          </div>
          <div class="posts-card__content-action">
          <button class='posts-card__content-btn js-remove' data-id='${_id}'>Удалить пост</button>
          </div>  
          </div>
          </div>
          `;
        });
        const html = `
        <div class="posts-container">
        ${htmlPostForm}
        ${htmlPosts}
        </div>
        `;
        ROOT_POSTS.innerHTML = html;
        deleteItem.removeItem(API_POSTS, 'js-remove');
        
        function getFormPostData( ) {
          formAddPost.addEventListener("submit", async (e) => {
            e.preventDefault();
      
            const formData = new FormData(formAddPost);
            const data = Object.fromEntries(formData.entries());
      
            await sendRequest(API_POSTS, "POST", data)
              .then(() => formAddPost.reset())
              .catch((err) => console.log(err));
          });
        }
        getFormPostData(); 

      }
      async render() {
        const data = await DATA_POSTS;
        data ? this.renderPosts(data) : error.render(ROOT_POSTS);
      }

     

  closePosts() {
    document.querySelector(".post-form__close");
    addEventListener("click", (event) => {
      if (event.target.classList.contains("js-close")) {
        ROOT_POSTS.innerHTML = "";
      }    
    });
    
  }
}

const postsProducts = new Posts();
export default postsProducts;

