<template>
    <div>
        <navigation/>
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation
  }
};
</script>

<style>
</style>
