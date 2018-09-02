<template>
    <div>
        <div class="alert alert-warning alert-dismissible margin-bt">
            <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
            Customer Updated.
        </div>
        <h1>Customers</h1>
        <hr>
        <input type="text" class="form-control" id="search" placeholder="Enter Last Name">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                    <td><button type="button" class="btn btn-default btn-sm">View</button></td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                    <td><button type="button" class="btn btn-default btn-sm">View</button></td>
                </tr>
                <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                    <td><button type="button" class="btn btn-default btn-sm">View</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {

}
</script>

<style scope>
    .margin-bt {
        margin-bottom: 3em;
    }

    td {
        vertical-align: middle !important;
    }

    table {
        margin-top: 20px;
    }
</style>
