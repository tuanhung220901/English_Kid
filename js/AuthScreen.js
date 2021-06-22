const $template = document.createElement('template');
$template.innerHTML = `
<div class="web">
    <div class="auth-screen">
            <div class = "border">
                <div class ="contain-auth-screen">
                    <login-form></login-form>
                <div>
            </div>
            <!--<div class ="contain-auth-screen">
                <register-form></register-form>
            <div>
            -->  
    </div>   
</div>
    
`;

export default class AuthScreen extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));
    }
}

window.customElements.define('auth-screen', AuthScreen);