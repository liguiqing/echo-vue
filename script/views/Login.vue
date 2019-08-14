<template>
    <mdb-container>
        <h2 class="my-5">Form login</h2>
        <mdb-row>
            <mdb-col md="6">
                <form>
                    <p class="h4 text-center mb-4">Sign in</p>
                    <div class="grey-text">
                        <mdb-input label="Your email" icon="envelope" type="email"/>
                        <mdb-input label="Your password" icon="lock" type="password"/>
                    </div>
                    <div class="text-center">
                        <mdb-btn color="default" @click="login">Login</mdb-btn>
                    </div>
                </form>
            </mdb-col>
        </mdb-row>
    </mdb-container>
</template>

<script>
    define(function () {
        return Vue.component("Login", {
            template: template,
            components: {
                mdbContainer: mdbvue.mdbContainer,
                mdbRow: mdbvue.mdbRow,
                mdbCol: mdbvue.mdbCol,
                mdbInput: mdbvue.mdbInput,
                mdbBtn: mdbvue.mdbBtn
            },
            data() {
                return {
                    authorized: false,
                    account: '',
                    password: ''
                }
            },
            methods: {
                login() {
                    this.$router.push('/home');
                }
            }
        });
    });
</script>

<style scoped>
    #loginForm {
        padding: 100px;
    }
</style>