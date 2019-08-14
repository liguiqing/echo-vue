<template v-if="ok">
    <mdb-navbar id="main-navbar" dark position="top" color="stylish" scrolling :scrollingOffset="20">
        <mdb-navbar-brand to="/" waves class="font-weight-bold">
            Echo Vue
        </mdb-navbar-brand>
        <mdb-navbar-toggler>
            <mdb-navbar-nav left >
                <mdb-nav-item v-for="item of navItems" :exact=item.exact :to=item.to><strong>{{item.text}}</strong></mdb-nav-item>
            </mdb-navbar-nav>
        </mdb-navbar-toggler>
    </mdb-navbar>
</template>

<script>
    define(function() {
        return Vue.component("echo-nav", {
            template: template,
            data(){
                return {
                    ok:false,
                    navItems:null
                }
            },
            mounted (){
                var url = getUrl("nav");
                axios.get(url.url).then(function (response) {
                    this.ok = true;
                    this.navItems = response.data.navs;
                }.bind(this));
            },
            components: {
                mdbNavbar:mdbvue.mdbNavbar,
                mdbNavbarNav:mdbvue.mdbNavbarNav,
                mdbNavItem:mdbvue.mdbNavItem,
                mdbNavbarToggler:mdbvue.mdbNavbarToggler,
                mdbNavbarBrand:mdbvue.mdbNavbarBrand
            }
        });
    });
</script>

<style scoped>

</style>