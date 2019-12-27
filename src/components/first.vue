<template>
<div class="main">
  <div class="banner">
  <h2>Would you recommend our service to others?</h2>
      <div class="wrap">
  <span class="numb"
        v-for="el in $options.numbs"
        :key="el"
        :class="{active : el === activeItem}"
        @click="selectItem(el)"
      >{{el}}</span>
      </div>
  </div>

    <router-view/>

</div>

</template>
<script>
    import gql from 'graphql-tag'
    const ADD_FEEDBACK_RATE = gql`
    mutation sendRate($rate : Int) {
    insert_feedbacks(objects: {rate: $rate, options: "", comment: ""}) {
        returning {
        id
        }
     }
    }
    `
export default {


    numbs : [1,2,3,4,5,6,7,8,9,10],
  data : function () {
  return {
     activeItem : null
  }
  },

    methods: {
        selectItem(rate) {
            this.activeItem = rate
            setTimeout(() =>{
             this.$router.push('second')
                this.$apollo.mutate({
                    mutation : ADD_FEEDBACK_RATE,
                    variables : {
                        rate
                    }
                }).then(data =>{
                    this.$cache.x

                    console.log(data.data.insert_feedbacks.returning[0].id)
                })

            },1000)
        },
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.active {
    background-color: yellow;
    border:none!important;
}
.wrap{
    margin-top: 50px;
}
.banner {
  margin-top:400px;
    height:150px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.numb {
  padding:7px;
  border: 1px solid black;
  margin-left:10px;
    cursor: pointer;

    height:70px;
}
a {
  color: #42b983;
    text-decoration: none;
    margin-bottom:40px;
}
</style>
