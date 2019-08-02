<template>
    <div id="app" class="flyout">
        <echo-nav></echo-nav>
        <main :style="{marginTop: '60px'}">
            <transition name="fade">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>
        </main>

        <mdb-footer color="stylish-color">
            <p class="footer-copyright mb-0 py-3 text-center">
                &copy; {{new Date().getFullYear()}} Copyright: <a href="#"> Echo.io</a>
            </p>
        </mdb-footer>
    </div>
</template>

<script>

    define(["vue!components/Navbar"], function(navbar) {
        return Vue.component("App", {
            template: template,
            data:{},
            components: {
                navbar:navbar,
                mdbFooter:mdbvue.mdbFooter
            }
        });
    });
</script>

<style>
    .flyout {
        display:flex;
        flex-direction: column;
        min-height:100vh;
        justify-content: space-between;
    }
    .active{
        background-color: rgba(255, 255, 255, 0.1);
    }
    .demo-section {
        padding: 20px 0;
    }
    .demo-section > section {
        border: 1px solid #e0e0e0;
        padding: 15px;
    }
    .demo-section > h4 {
        font-weight: bold;
        margin-bottom: 20px;
    }
    .demo-title {
        color: #9e9e9e;
        font-weight: 700;
        margin-bottom: 0;
        padding-left: 15px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease-out;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
</style>