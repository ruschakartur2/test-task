<template>

    <div class="main">
        <div class="banner">
            <h2>Have something to write?</h2>
            <textarea name="" id="" v-model="comment" cols="75" rows="7"></textarea>
            <button >Submit</button>
        </div>

        <router-link to="second">Previous</router-link>

    </div>

</template>

<script>


    export default {
        data() {
            return {
                comment : ""
            }

        },
        methods : {
        }
    }
</script>
<style>
    .banner {
        margin-top:400px;
        height:200px;
    }

    .active {
        background-color: orange;
    }
</style>
