import { ref } from 'vue'

class Post {
    constructor(title, link, author, img) {
      this.title = title;
      this.link = link;
      this.author = author;
      this.img = img;
    }
  }
  
  const app = new Vue ({
    el: '#app',
    data: {
      search: '',
      postList : [
        new Post(
          'Vue.js', 
          'https://vuejs.org/', 
          'Chris', 
          'https://vuejs.org//images/logo.png'
        ),
        new Post(
          'React.js', 
          'https://facebook.github.io/react/', 
          'Tim',
          'https://daynin.github.io/clojurescript-presentation/img/react-logo.png'
        ),
        new Post(
          'Feathers.js', 
          'http://feathersjs.com/', 
          'Chuck',
          'https://cdn.worldvectorlogo.com/logos/feathersjs.svg'
        ),
  ]
    },
    computed: {
      filteredList() {
        return this.postList.filter(post => {
          return post.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
  })