import { ui } from "./ui/layaMaxUI";
import LoginControl from "./LoginControl";

export default class LoginUI extends ui.loginUI {
    static instance: LoginUI;
    private control:LoginControl;
    constructor() {
        super();
        LoginUI.instance = this;
    }

    onEnable() :void {
        this.control = new LoginControl();
        this.login_btn.on(Laya.Event.CLICK, this, this.onLoginClick);
    }

    onLoginClick(e: Laya.Event): void {
        let nickname = this.nick_input.text;
        let url = this.url_input.text;
        this.control.login(nickname, "ws://"+url);
    }
}