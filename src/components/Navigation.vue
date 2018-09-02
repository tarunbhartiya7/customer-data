<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/home" class="navbar-brand">vCustomers</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link activeClass="active" to="/home" tag="li"><a>Home</a></router-link>
                    <router-link activeClass="active" to="/about" tag="li"><a>About</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <router-link activeClass="active" to="/updateCustomers" tag="li"><a>Add Customer</a></router-link>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
