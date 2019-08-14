<template >
    <mdb-container>
        <mdb-row class="mt-5 align-items-center justify-content-start">
            <h4 class="demo-title"><strong>Table Sort</strong></h4>
            <a href="https://mdbootstrap.com/docs/vue/tables/sort/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
        </mdb-row>
        <hr />
        <div class="mt-5 pt-5 mx-3">
            <h3>Basic example</h3>
            <br />
            <mdb-datatable
                    :data="data"
                    striped
            />
        </div>
    </mdb-container>
</template>

<script>
    define(function() {
        return Vue.component("Home", {
            template: template,
            data(){
                return {
                    ok:false,
                    data: {}
                }
            },
            created (){
                var url = getUrl("table");
                axios.get(url.url).then(function (response) {
                    this.ok = true;
                    this.data = response.data;
                }.bind(this));
            },
            components: {
                mdbTbl:mdbvue.mdbTbl,
                mdbTblHead:mdbvue.mdbTblHead,
                mdbTblBody:mdbvue.mdbTblBody,
                mdbDatatable:mdbvue.mdbDatatable,
                mdbContainer:mdbvue.mdbContainer,
                mdbRow:mdbvue.mdbRow,
                mdbIcon:mdbvue.mdbIcon
            }
        });
    });
</script>

<style scoped>

</style>