<template>
    <div class="user-card">
        <h2>
            {{ name }}
        </h2>
        <p>
            Id : {{ id }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        id: {
            type: Number, 
            required: true
        }
    }
}
</script>

<style scoped>
.user-card {
    border: 1px solid #e39090;
    padding: 10px;
    margin: 5px;
    border-radius: 4px;
}
</style>
