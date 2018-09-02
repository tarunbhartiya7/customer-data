<template>
    <div>
        <h1>Add Customer</h1>
        <hr>
        <div class="well">
            <p for="">Customer Info</p>
            <div class="form-group">
                <label for="fname">First Name</label>
                <input type="text" class="form-control" id="fname" placeholder="First Name">
            </div>
            <div class="form-group">
                <label for="lname">Last Name</label>
                <input type="text" class="form-control" id="lname" placeholder="Last Name">
            </div>
        </div>
        <div class="well">
            <p for="">Customer Contact</p>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="Phone">
            </div>
        </div>
        <div class="well">
            <p for="">Customer Location</p>
            <div class="form-group">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Address">
            </div>
            <div class="form-group">
                <label for="city">City</label>
                <input type="text" class="form-control" id="city" placeholder="City">
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input type="text" class="form-control" id="state" placeholder="State">
            </div>
        </div>
        <button type="button" class="btn btn-primary">Submit</button>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
    label {
        font-size: .9em;
    }
    p {
        font-size: 1.1em;
    }

    button {
        border-radius: 0;
        margin-bottom: 50px;
    }

</style>
