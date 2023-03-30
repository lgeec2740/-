const Main = Vue.component('Main', { 
  template: '<div class="container"><section class="py-5"><div class="mb-4 d-flex justify-content-between align-items-center">   <h1>Актуальное</h1>   <button class="btn btn-sm btn-primary" to="/all.html">Все статьи</button> </div>  <div class="row">   <div v-for="item in articles"    class="col-3">     <div class="card">       <img class="card-img-top" :src="item.image" alt="placeholder">       <div class="card-body">         <p class="card-text">           <small class="text-muted">{{item.date}}</small>         </p         <h5 class="card-title">{{item.name}}</h5>         <p class="card-text">{{item.description}}</p         <a href="#" class="btn btn-primary" to="/post.html">Читать</a>       </div>     </div>   </div> </div></section><section class="py-5">  <div class="mb-4 d-flex justify-content-between align-items-center">    <h2>Случайная статья</h2>  </div><a href="#" class="card bg-dark text-white"> <img class="card-img" src="assets/images/placeholder-blue.png" alt="placeholder"> <div class="card-img-overlay" to="/post.html"><h5 class="card-title">Название статьи</h5></div></a></section></div>',
  data(){
    return {
      articles:[
        {
          id: 1,
          name: 'Задачи организации',
          description: 'Не следует, однако забывать, что консультация с широким активом влечет за собой процесс внедрения и модернизации направлений прогрессивного развития. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.',
          image: 'assets/images/placeholder-blue.png',
          date: '2021-04-10 16:00:00'
        },
        {
          id: 2,
          name: 'Формирование позиции',
          description: 'С другой стороны начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке форм развития. Таким образом консультация с широким активом требуют от нас анализа новых предложений.',
          image: 'assets/images/placeholder-blue.png',
          date: '2021-04-09 16:00:00'
        },
        {
          id: 3,
          name: 'Значимость проблем',
          description: 'Значимость этих проблем настолько очевидна, что рамки и место обучения кадров играет важную роль в формировании существенных финансовых и административных условий.',
          image: 'assets/images/placeholder-blue.png',
          date: '2021-04-08 16:00:00'
        },
        {
          id: 4,
          name: 'Важность консультаций',
          description: 'Повседневная практика показывает, что консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании соответствующий условий активизации.',
          image: 'assets/images/placeholder-blue.png',
          date: '2021-04-12 16:00:00'
        }
      ]
    }
  }
}
)

const All = Vue.component('All', {template:'<div class="container"><section class="py-5">  <div class="mb-4 d-flex  align-items-baseline">    <h2>Все статьи</h2>  </div  <div class="row">    <div  class="cards">      <div class="card" v-for="item in articles">        <img class="card-img-top" :src="item.image" alt="placeholder">        <div class="card-content">          <p class="card-text">            <small class="text-muted">{{item.date}}</small>          </p          <h5 class="card-title">{{item.name}}</h5>          <p class="card-text">{{item.description}}</p          <a href="#" class="btn btn-primary" to="/post.html">Читать</a>        </div>      </div>    </div>  </div></section></div>',
  data(){
    return {
      articles: articles,
    }
  }
})

const Create = Vue.component('Create', {template:'<div class="container"> <section class="py-5"> <div class="mb-4 d-flex justify-content-between align-items-center"> <h2>добавление статьи</h2> </div>  <form>  <div class="mb-3"> <label>название</label> <input type="text" class="form-control" placeholder="придумайте название статьи"> </div> <div class="mb-3"> <label>описание</label> <textarea class="form-control" placeholder="напишите описание статьи" rows="5"></textarea> </div> <div class="mb-4"> <label>изображение</label> <input type="file" class="form-control">  <img src="assets/images/placeholder-blue.png" class="w-100 mt-4" alt="preview"> </div>  <button class="btn btn-success">добавить статью</button> </form> </section> </div>',
   data(){
    return{

    }
   }
})

const Edit = Vue.component('Edit',{template:'<div class="container"> <section class="py-5"> <div class="mb-4 d-flex justify-content-between align-items-center"> <h2>изменение статьи</h2> </div>  <form>  <div class="mb-3"> <label>название</label> <input type="text" class="form-control" placeholder="придумайте название статьи"> </div> <div class="mb-3"> <label>описание</label> <textarea class="form-control" placeholder="напишите описание статьи" rows="5"></textarea> </div> <div class="mb-4"> <label>изображение</label> <input type="file" class="form-control">  <img src="assets/images/placeholder-blue.png" class="w-100 mt-4" alt="preview"> </div>  <button class="btn btn-success">сохранить</button> </form> </section> </div>',
  data(){
    return{

    }
  }
})

const Manage = Vue.component('Manage',{template:'<div class="container"> <section class="py-5"> <div class="mb-4 d-flex justify-content-between align-items-center"> <h2>управление статьями</h2> <button class="btn btn-sm btn-success" to="/create">добавить статью</button> </div>  <table class="table" v-for="(item, index) in articles" :key="index"> <tr> <th>#</th> <th>название</th> <th>дата и время</th> <th>действия</th> </tr> <tr> <td>{{item.id}}</td> <td>{{item.name}}</td> <td>{{item.date}}</td> <td> <button class="btn btn-primary btn-sm">редактировать</button> <button class="btn btn-danger btn-sm" v-on:click="deleteitem(index)">удалить</button> </td> </tr> </table> </section> </div>',
  data(){
    return{

    }
  }
})

const Post = Vue.component('Post',{template:'<div class="container"> <section class="py-5"> <h2 class="mb-4">название статьи</h2>  <img class="mb-4 w-100" src="assets/images/placeholder-blue.png" alt="placeholder">  <p> lorem ipsum dolor sit amet, consectetur adipisicing elit. cum dignissimos sequi similique. asperiores atque autem cumque eius expedita id illo incidunt laborum libero magni neque nostrum nulla quaerat quam quas repellat repudiandae sed soluta, totam veniam. accusantium at commodi consequatur, dolore est facere fugiat maiores modi, nemo perspiciatis placeat, quae quaerat quas quibusdam quos reiciendis rem sunt tenetur ut voluptatibus. aspernatur, autem blanditiis, commodi consequuntur culpa cumque, deserunt dignissimos eius expedita illo ipsam iste officiis quam quasi qui quidem recusandae sint soluta. aliquam aliquid consectetur dolores id? animi, aut doloremque error illo labore laudantium, maxime molestias nesciunt porro, sunt ut! </p> </section> </div>',
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
    { path: '/post', component: Post }
 
  ]
  const router = new VueRouter({
    routes // сокращённая запись для routes: routes
  })
var app = new Vue({
    el: '#app',
    router
    }
)