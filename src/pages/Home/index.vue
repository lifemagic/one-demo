<template>
    <div class="box">
        <section class="g-img first-img">IMG1</section>
        <div>
            sd
            <h1>a11</h1>
            <h1>a11</h1>
            <h1>a11</h1>
            <h1>{{ home }}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            home: "1234"
        }
    },

}
</script>
<style lang="less">
.box {
    height: 10000px;

    section {
        height: 70vh;
    }

    .first-img {
        background-image: url("./images/home1.jpg");
        background-attachment: fixed;
        background-size: cover;
        background-position: center center;
    }
}
</style>