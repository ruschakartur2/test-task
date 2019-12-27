<template>

    <div class="main">
        <div class="banner">
            <h2>Please specify</h2>
            <div class="wrap-sec">
            <span
            class = "elements"
    v-for="el in $options.categoryes"
    :key="el"
    @click="toggle(el)"

    :class="{active : activeItems.includes(el) }">{{el}}</span>
    </div>
        </div>
        <div class="paginators">
        <router-link to="/" class="paginate">Previous</router-link>
        <router-link to="third" class="paginate">Next</router-link>
        </div>
        </div>

</template>

<script>



export default {
    categoryes : ["simple to use", "easy to understand", "fair price", "good customer support", "real time capabilities", "site speed", "happy to use", "user interface"],
    data() {
    return {
        activeItems : []
    }

    },
    methods : {
        toggle(el) {
            if(this.activeItems.includes(el)){
                this.activeItems.splice(this.activeItems.indexOf(el),1);
            }
            else {
                this.activeItems.push(el);
            }
        }
    }
}
</script>
<style>
    .main {
        display:flex;
        flex-direction: column;
    }
    .banner {
        margin-top:400px;
        height:150px;
        width:600px;
        margin: 0 auto;
    }
    .wrap-sec{
        margin-top: 70px;
        display:flex;
        flex-direction: row;
        flex-wrap:wrap;
    }
    .elements {
        padding:7px;
        border:1px solid black;
        margin-left: 7px;
        border-radius: 10px ;
        cursor: pointer;
        margin-bottom:20px;
    }
    .paginate {
        padding-top: 20px;
        margin-left: 20px;
    }
    .paginators {
        margin-top: 50px;
    }
    .active {
        background-color: yellow;
    }
</style>
