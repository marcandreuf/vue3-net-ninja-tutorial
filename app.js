const app = Vue.createApp({
    data(){
        return{
            url: 'https://www.itqualab.com',
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.jpg', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.jpg', isFav: true},
            ]
        }
    },
    methods: {
        changeTitle(title){
            this.title = title;
        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        handleEvent(event, dataParam2){
            console.log("Event triggered", event, event.type, dataParam2);
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }   
    },
});

app.mount('#app');
