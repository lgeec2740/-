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


const routes = [
    { path: '/', component: Main },
    { path: '/all', component: All },
  ]
  const router = new VueRouter({
    routes // сокращённая запись для routes: routes
  })
var app = new Vue({
    el: '#app',
    router
    }
)