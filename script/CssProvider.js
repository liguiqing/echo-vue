class CssProvider {
    constructor() {
        this.bootstrapCss = "css!https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css";
        this.fontAwesomeCss = "css!https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css";
        this.mdbCss = "css!https://cdn.jsdelivr.net/npm/mdbvue/build/css/mdb.min.css";
        this.mdbvueCss = "css!https://cdn.jsdelivr.net/npm/mdbvue/lib/mdbvue.css";
    }
}

let p = new CssProvider();
let bootstrapCss = p.bootstrapCss;
let fontAwesomeCss = p.fontAwesomeCss;
let mdbCss = p.mdbCss;
let mdbvueCss = p.mdbvueCss;
export {fontAwesomeCss,bootstrapCss,mdbCss,mdbvueCss};