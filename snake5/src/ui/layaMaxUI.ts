/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui {
    export class loginUI extends Scene {
		public nick_input:Laya.TextInput;
		public url_input:Laya.TextInput;
		public login_btn:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("login");
        }
    }
    REG("ui.loginUI",loginUI);
}