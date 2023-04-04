const Main = Vue.component('Main', { 
  template: '<div class="container"><section class="py-5"><div class="mb-4 d-flex justify-content-between align-items-center">   <h1>Актуальное</h1>   <router-link class="btn btn-sm btn-primary" to="/all">Все статьи</router-link> </div>  <div class="row">   <div v-for="item in articles.slice(0,4)"    class="col-3">     <div class="card">       <img class="card-img-top" :src="item.image" alt="placeholder">       <div class="card-body">         <p class="card-text">           <small class="text-muted">{{item.date}}</small>         </p         <h5 class="card-title">{{item.name}}</h5>         <p class="card-text">{{item.description}}</p>         <router-link class="btn btn-primary" to="/post">Читать</router-link>       </div>     </div>   </div> </div></section><section class="py-5">  <div class="mb-4 d-flex justify-content-between align-items-center">    <h2> Случайная статья</h2>  </div><a v-for="item in randomArticle" href="#" class="card bg-dark text-white"> <img class="card-img" :src="item.image" alt="placeholder"> <router-link class="card-img-overlay" to="/post"><h5 class="card-title">{{item.name}}</h5></router-link></a></section> </div>',
  data(){
    return {
      articles:articles,
      randomArticle:[

      ]
    }
  },
  methods:{
  randArticle:
  function(){
    let randomNumb=Math.floor(Math.random() * (this.articles.length - 0)) + 0
    this.randomArticle.push(this.articles[randomNumb])
    console.log(this.randomArticle);
  }
},
created: function(){
  this.randArticle()
}
}
)

const All = Vue.component('All', {template:'<div class="container"><section class="py-5">  <div class="mb-4 d-flex  align-items-baseline">    <h2>Все статьи</h2>  </div  <div class="row">    <div  class="cards">      <div class="card" v-for="item in articles">        <img class="card-img-top" :src="item.image" alt="placeholder">        <div class="card-content">          <p class="card-text">            <small class="text-muted">{{item.date}}</small>          </p          <h5 class="card-title">{{item.name}}</h5>          <p class="card-text">{{item.description}}</p>          <button class="btn btn-primary">Читать</button>         </div>      </div>    </div>  </div></section></div>',
  data(){
    return {
      articles: articles,
    }
  }
})

const Create = Vue.component('Create', {template:'<div class="container"> <section class="py-5"> <div class="mb-4 d-flex justify-content-between align-items-center"> <h2>Добавление статьи</h2> </div>  <form>  <div class="mb-3"> <label>Название</label> <input type="text" class="form-control" placeholder="Придумайте название статьи"> </div> <div class="mb-3"> <label>Описание</label> <textarea class="form-control" placeholder="Напишите описание статьи" rows="5"></textarea> </div> <div class="mb-4"> <label>Изображение</label> <input type="file" class="form-control">  <img src="assets/images/placeholder-blue.png" class="w-100 mt-4" alt="preview"> </div>  <router-link class="btn btn-success" to="/manage">Добавить статью</router-link> </form> </section> </div>',
   data(){
    return{

    }
   }
})

const Edit = Vue.component('Edit',{template:'<div class="container"> <section class="py-5"> <div class="mb-4 d-flex justify-content-between align-items-center"> <h2>Изменение статьи</h2> </div>  <form>  <div class="mb-3"> <label>название</label> <input type="text" class="form-control" placeholder="придумайте название статьи"> </div> <div class="mb-3"> <label>описание</label> <textarea class="form-control" placeholder="напишите описание статьи" rows="5"></textarea> </div> <div class="mb-4"> <label>изображение</label> <input type="file" class="form-control">  <img src="assets/images/placeholder-blue.png" class="w-100 mt-4" alt="preview"> </div>  <button class="btn btn-success">Сохранить</button> </form> </section> </div>',
  data(){
    return{

    }
  }
})

const Manage = Vue.component('Manage',{template:'<div class="container"> <section class="py-5"> <div class="mb-4 d-flex justify-content-between align-items-center"> <h2>Управление статьями</h2> <router-link class="btn btn-sm btn-success" to="/create">Добавить статью</router-link> </div>  <table class="table" v-for="(item, index) in articles" :key="index"> <tr> <th>#</th> <th>Название</th> <th>Дата и время</th> <th>Действия</th> </tr> <tr> <td>{{item.id}}</td> <td>{{item.name}}</td> <td>{{item.date}}</td> <td> <button class="btn btn-primary btn-sm">Редактировать</button> <button class="btn btn-danger btn-sm" v-on:click="deleteitem(index)">Удалить</button> </td> </tr> </table> </section> </div>',
  data(){
    return{

    }
  },
  methods:{

  }
})

const Post = Vue.component('Post',{template:'<div class="container"> <section class="py-5"> <h2 class="mb-4">Название статьи</h2>  <img class="mb-4 w-100" src="assets/images/placeholder-blue.png" alt="placeholder">  <p> lorem ipsum dolor sit amet, consectetur adipisicing elit. cum dignissimos sequi similique. asperiores atque autem cumque eius expedita id illo incidunt laborum libero magni neque nostrum nulla quaerat quam quas repellat repudiandae sed soluta, totam veniam. accusantium at commodi consequatur, dolore est facere fugiat maiores modi, nemo perspiciatis placeat, quae quaerat quas quibusdam quos reiciendis rem sunt tenetur ut voluptatibus. aspernatur, autem blanditiis, commodi consequuntur culpa cumque, deserunt dignissimos eius expedita illo ipsam iste officiis quam quasi qui quidem recusandae sint soluta. aliquam aliquid consectetur dolores id? animi, aut doloremque error illo labore laudantium, maxime molestias nesciunt porro, sunt ut! </p> </section> </div>',
data(){
  return{

  }
}
})

const routes = [
    { path: '/', component: Main },
    { path: '/all', component: All },
    { path: '/create', component: Create },
    { path: '/edit', component: Edit },
    { path: '/manage', component: Manage },
    { path: '/:post', component: Post }
 
  ]
  const router = new VueRouter({
    routes // сокращённая запись для routes: routes
  })
var app = new Vue({
    el: '#app',
    router
    }
)