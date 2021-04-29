const app = new Vue({

    el: `#vueContainer`,
    data: {
        vueOutputText: `Hello from VUE!!!!`,
        vueOutputImg: `https://www.astroguide.it/wp-content/uploads/2020/06/Pesci-web.jpg`,
        ben: false,
        brightness: false,
    },

    methods: {
        schiarisci: function(){
            if(!this.brightness){
                this.brightness = true;
            }else{
                this.brightness = false;
            }

           
        },

        desatura: function(){
         
            if(!this.ben){
                this.ben = true;
            }else{
                this.ben = false;
            }
        }

    },
})


