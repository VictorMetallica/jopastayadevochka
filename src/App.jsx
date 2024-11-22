  import React from 'react'
  import './index.css'
  import Header from './Components/Header'
  import Footer from './Components/Footer'
  import Items from './Components/Items'
  import Categories from './Components/Categories'

  class App extends React.Component  {
    constructor(props) { 
      super(props)
      this.state = {
        currentItems: [],
        orders: [],
        items: [

          {
            id: 1,
            title:'Rascheska',
            image:'./img/Rascheska.jpg',
            desc: "klassnaya))",
            category:"Tool",
            price:"200"
          },
          {
            id:2,
            title:'Kurica Grill',
            image:'./img/Grill.jpg',
            desc: "Vkusnaaa",
            category:"Food",
            price:"1700"
            },
            {
              id:3,
              title:'Vodyanoi Sharik',
              image:'./img/sharik.jpeg',
              desc: "Veselo i mokro",
              category:"Tool",
              price:"50"
              },
              {
                id:4,
                title:'Gorshok dlya cvetka ',
                image:'./img/33.jpeg',
                desc: "polezno dlya cvetka mamy",
                category:"Tool",
                price:"400"
              },
              {
                id:5,
                title:'Aceton',
                image:'./img/aceton.jpg',
                desc: "Osvejauet letom",
                category:"Food",
                price:"300"
              },
              {
                id:6,
                title:'Soska s lezviamy detskaya',
                image:'./img/vlad.jpg',
                desc: "Uspokaivaet rebenka",
                category:"Food",
                price:"150"
              },
              {
              id:7,
              title:'Saperskaya lopata',
              image:'./img/lopata.jpeg',
              desc: "mechta lubogo pacana",
              category:"Tool",
              price:"700"
              },
              {
                id:8,
                title:'Abrikos',
                image:'./img/apricot.jpg',
                desc: "yagoda",
                category:"Food",
                price:"20"
              },
              {
                id:9,
                title:'Buterbrod s maslom i najdachkoi',
                image:'./img/hleb.jpg',
                desc: "neplohoi perekus",
                category:"Food",
                price:"250"
              },
              {
                id:10,
                title:'Bukva P(paravoz)',
                image:'./img/p.jpeg',
                desc: "prodam bukvu",
                category:"NFT",
                price:"600"
              },
              {
                id:11,
                title:'popka ogurca',
                image:'./img/popka.jpg',
                desc: "vse chto ostalos)",
                category:"NFT",
                price:"1000.50"
              },
              {
                id:12,
                title:'tin tin tompson',
                image:'./img/tintin.jpg',
                desc: "govnoedka",
                category:"Tvar",
                price:"1"
              },
              {
                id:13,
                title:'udobrenie',
                image:'./img/navoz.jpg',
                desc: "kakashki jivotnyh",
                category:"Food",
                price:"120"
              },
              {
                id:14,
                title:'pelmeni s opilkami',
                image:'./img/pelmen.jpg',
                desc: "smakota",
                category:"Food",
                price:"500"
              },
              {
                id:15,
                title:'klizma',
                image:'./img/klizma.jpeg',
                desc: "rezinovaya",
                category:"Tool",
                price:"200"
              },
              {
                id:16,
                title:'shashlyk iz shin',
                image:'./img/shina.jpg',
                desc: "ochen sochnyi",
                category:"Food",
                price:"900"
              },
              {id:17,
              title:'gubka',
              image:'./img/gubka.jpg',
              desc: "bob kvadratniye shtany",
              category:"NFT",
              price:"150"
              },
              { id:18,
                title:'armatura',
                image:'./img/armatura.jpeg',
                desc: "jelezyaka prikool",
                category:"Tool",
                price:"350"
                },
                {
                  id:19,
                  title:'klavisha ] ot klaviatury',
                  image:'./img/].jpeg',
                  desc: "poleznaya vesh v hozuaistve",
                  category:"NFT",
                  price:"500"
                },
                {
                  id:20,
                  title:'kolpachok ot ruchki',
                  image:'./img/kolpachok.jpg',
                  desc: "multitool",
                  category:"Tool",
                  price:"130"
                },
                {
                  id:21,
                  title:'kovrik soseda',
                  image:'./img/kovrik.jpg',
                  desc: "viteret sopli mojna",
                  category:"Tool",
                  price:"225"
                },
     
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}
  
    export default App

    