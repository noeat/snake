export default class LoginControl extends Laya.Script {
    private socket:Laya.Socket;
    private byte:Laya.Byte;
    private nickname:string;
    constructor() {
        super();
        this.byte = new Laya.Byte();
        this.byte.endian = Laya.Byte.LITTLE_ENDIAN;
        this.socket = new Laya.Socket();
        this.socket.endian = Laya.Byte.LITTLE_ENDIAN;
    }

    login(nickname:string, url:string) {
        this.nickname = nickname;
        this.socket.connectByUrl(url);
        this.socket.on(Laya.Event.OPEN, this, this.openHandler);
        this.socket.on(Laya.Event.MESSAGE, this, this.receiveHandler);
        this.socket.on(Laya.Event.CLOSE, this, this.closeHandler);
        this.socket.on(Laya.Event.ERROR, this, this.errorHandler);
    }

    private openHandler(event: any = null): void {
        let l = new login.LoginReq();
        l.account = this.nickname;
        this.send_msg("login.LoginReq", login.LoginReq.encode(l).finish());
    }

    private receiveHandler(msg: any = null): void {
        this.byte.clear();
        this.byte.writeArrayBuffer(msg);
        let head = common.MsgHead.decode(this.byte.getUint8Array(0, this.byte.length));
        this.byte.clear();
    }
    
    private closeHandler(e: any = null): void {
        
    }

    private errorHandler(e: any = null): void {
       
    }

    private send_msg(msgname:string, msgdata:Uint8Array):void {
        let head = new common.MsgHead();
        head.proto = msgname;
        head.data = msgdata;
        
        this.byte.writeArrayBuffer(common.MsgHead.encode(head).finish());
        this.socket.send(this.byte.buffer);
        this.byte.clear();
    }
}