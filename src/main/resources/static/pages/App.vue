<template>
<div class="container">
    <nav   class=" navigation-bar mt-5 navbar navbar-expand-lg navbar-light bg-light">
<!--        <p class="navbar-brand"> Экспресс ремонт</p>-->
        <a class="navbar-brand" href="#">  Экспресс ремонт</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class=" 1 collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="nav-item active mr-3">
                    <router-link to="/">
                        <a class="nav-link" href="#">Главная<span class="sr-only">(current)</span></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/dekor">   <a class="nav-link mr-3" href="#">Декор</a></router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-3" href="#">Кухня</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-3" href="#">Спальня</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">О нас</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-3" href="#">Контакты</a>
                </li>


            </ul>
            <form class="form-inline my-2 ml-auto my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Поиск">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Поиск</button>
            </form>
        </div>
    </nav>
<div>
    <router-view></router-view>
</div>
</div>
</template>

<script>

    export default {
        components: {

        },
        data() {
            return {

            }
        }
    }
</script>

<style>
.navigation-bar{
  background-color: rgba(4, 4, 1, 1);;
}
</style>