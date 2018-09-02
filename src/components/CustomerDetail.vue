<template>
    <div>
        <button type="button" class="btn btn-link">Back</button>
        <h1>
            Tom Doe
            <div class="float-rt">
                <button type="button" class="btn btn-primary btn-sm">Edit</button>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
            </div>
        </h1>
        <hr>
        <ul class="list-group">
            <li class="list-group-item">
                <span class="glyphicon glyphicon-modal-window"></span>
                444-444-4444
            </li>
            <li class="list-group-item">
                <span class="glyphicon glyphicon-envelope"></span>
                tom@gmail.com
            </li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item">44 Newmark st</li>
            <li class="list-group-item">Lynn</li>
            <li class="list-group-item">MA</li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .float-rt {
        float: right;
    }

    .btn-link {
        padding-left: 0 !important;
    }
</style>
