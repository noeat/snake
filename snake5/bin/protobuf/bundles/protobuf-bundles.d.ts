type Long = protobuf.Long;

/** Namespace common. */
declare namespace common {

    /** Properties of a MsgHead. */
    interface IMsgHead {

        /** MsgHead proto */
        proto?: (string|null);

        /** MsgHead data */
        data?: (Uint8Array|null);
    }

    /** Represents a MsgHead. */
    class MsgHead implements IMsgHead {

        /**
         * Constructs a new MsgHead.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IMsgHead);

        /** MsgHead proto. */
        public proto: string;

        /** MsgHead data. */
        public data: Uint8Array;

        /**
         * Creates a new MsgHead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgHead instance
         */
        public static create(properties?: common.IMsgHead): common.MsgHead;

        /**
         * Encodes the specified MsgHead message. Does not implicitly {@link common.MsgHead.verify|verify} messages.
         * @param message MsgHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IMsgHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MsgHead message, length delimited. Does not implicitly {@link common.MsgHead.verify|verify} messages.
         * @param message MsgHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IMsgHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MsgHead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.MsgHead;

        /**
         * Decodes a MsgHead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.MsgHead;

        /**
         * Verifies a MsgHead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** ErrorCode enum. */
    enum ErrorCode {
        ERR_SUCCESS = 0,
        ERR_FAILED = 1,
        ERR_REPEATED = 2,
        ERR_AUTHTIMEOUT = 3,
        ERR_ACCOUNTORPASSWD = 4,
        ERR_AUTHFAILED = 5,
        ERR_SESSIONKEY = 6,
        ERR_ROLENAME = 7,
        ERR_INTERNAL_0 = 500,
        ERR_INTERNAL_1 = 501,
        ERR_INTERNAL_2 = 502,
        ERR_INTERNAL_3 = 503,
        ERR_INTERNAL_4 = 504,
        ERR_INTERNAL_5 = 505
    }

    /** Properties of an Error. */
    interface IError {

        /** Error error_code */
        error_code?: (number|null);

        /** Error error_msg */
        error_msg?: (string|null);

        /** Error op */
        op?: (string|null);
    }

    /** Represents an Error. */
    class Error implements IError {

        /**
         * Constructs a new Error.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IError);

        /** Error error_code. */
        public error_code: number;

        /** Error error_msg. */
        public error_msg: string;

        /** Error op. */
        public op: string;

        /**
         * Creates a new Error instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Error instance
         */
        public static create(properties?: common.IError): common.Error;

        /**
         * Encodes the specified Error message. Does not implicitly {@link common.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link common.Error.verify|verify} messages.
         * @param message Error message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IError, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.Error;

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.Error;

        /**
         * Verifies an Error message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** ServerStatus enum. */
    enum ServerStatus {
        STATUS_NORMAL = 0,
        STATUS_NEW = 1,
        STATUS_HOT = 2,
        STATUS_MAINTAIN = 3,
        STATUS_CLOSED = 4
    }

    /** Namespace server. */
    namespace server {

        /** Properties of an Identity. */
        interface IIdentity {

            /** Identity name */
            name?: (string|null);

            /** Identity id */
            id?: (number|null);
        }

        /** Represents an Identity. */
        class Identity implements IIdentity {

            /**
             * Constructs a new Identity.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IIdentity);

            /** Identity name. */
            public name: string;

            /** Identity id. */
            public id: number;

            /**
             * Creates a new Identity instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Identity instance
             */
            public static create(properties?: common.server.IIdentity): common.server.Identity;

            /**
             * Encodes the specified Identity message. Does not implicitly {@link common.server.Identity.verify|verify} messages.
             * @param message Identity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IIdentity, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified Identity message, length delimited. Does not implicitly {@link common.server.Identity.verify|verify} messages.
             * @param message Identity message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IIdentity, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an Identity message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Identity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.Identity;

            /**
             * Decodes an Identity message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Identity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.Identity;

            /**
             * Verifies an Identity message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RemoteCall. */
        interface IRemoteCall {

            /** RemoteCall proto */
            proto?: (string|null);

            /** RemoteCall data */
            data?: (Uint8Array|null);
        }

        /** Represents a RemoteCall. */
        class RemoteCall implements IRemoteCall {

            /**
             * Constructs a new RemoteCall.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IRemoteCall);

            /** RemoteCall proto. */
            public proto: string;

            /** RemoteCall data. */
            public data: Uint8Array;

            /**
             * Creates a new RemoteCall instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoteCall instance
             */
            public static create(properties?: common.server.IRemoteCall): common.server.RemoteCall;

            /**
             * Encodes the specified RemoteCall message. Does not implicitly {@link common.server.RemoteCall.verify|verify} messages.
             * @param message RemoteCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IRemoteCall, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RemoteCall message, length delimited. Does not implicitly {@link common.server.RemoteCall.verify|verify} messages.
             * @param message RemoteCall message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IRemoteCall, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RemoteCall message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoteCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.RemoteCall;

            /**
             * Decodes a RemoteCall message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoteCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.RemoteCall;

            /**
             * Verifies a RemoteCall message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a RemoteRep. */
        interface IRemoteRep {

            /** RemoteRep error_code */
            error_code?: (number|null);

            /** RemoteRep proto */
            proto?: (string|null);

            /** RemoteRep data */
            data?: (Uint8Array|null);
        }

        /** Represents a RemoteRep. */
        class RemoteRep implements IRemoteRep {

            /**
             * Constructs a new RemoteRep.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IRemoteRep);

            /** RemoteRep error_code. */
            public error_code: number;

            /** RemoteRep proto. */
            public proto: string;

            /** RemoteRep data. */
            public data: Uint8Array;

            /**
             * Creates a new RemoteRep instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RemoteRep instance
             */
            public static create(properties?: common.server.IRemoteRep): common.server.RemoteRep;

            /**
             * Encodes the specified RemoteRep message. Does not implicitly {@link common.server.RemoteRep.verify|verify} messages.
             * @param message RemoteRep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IRemoteRep, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RemoteRep message, length delimited. Does not implicitly {@link common.server.RemoteRep.verify|verify} messages.
             * @param message RemoteRep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IRemoteRep, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RemoteRep message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RemoteRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.RemoteRep;

            /**
             * Decodes a RemoteRep message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RemoteRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.RemoteRep;

            /**
             * Verifies a RemoteRep message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a GateInfoNotice. */
        interface IGateInfoNotice {

            /** GateInfoNotice serverid */
            serverid?: (number|null);

            /** GateInfoNotice onlinenum */
            onlinenum?: (number|null);

            /** GateInfoNotice gate_host */
            gate_host?: (string|null);

            /** GateInfoNotice gate_port */
            gate_port?: (number|null);
        }

        /** Represents a GateInfoNotice. */
        class GateInfoNotice implements IGateInfoNotice {

            /**
             * Constructs a new GateInfoNotice.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IGateInfoNotice);

            /** GateInfoNotice serverid. */
            public serverid: number;

            /** GateInfoNotice onlinenum. */
            public onlinenum: number;

            /** GateInfoNotice gate_host. */
            public gate_host: string;

            /** GateInfoNotice gate_port. */
            public gate_port: number;

            /**
             * Creates a new GateInfoNotice instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GateInfoNotice instance
             */
            public static create(properties?: common.server.IGateInfoNotice): common.server.GateInfoNotice;

            /**
             * Encodes the specified GateInfoNotice message. Does not implicitly {@link common.server.GateInfoNotice.verify|verify} messages.
             * @param message GateInfoNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IGateInfoNotice, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified GateInfoNotice message, length delimited. Does not implicitly {@link common.server.GateInfoNotice.verify|verify} messages.
             * @param message GateInfoNotice message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IGateInfoNotice, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a GateInfoNotice message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GateInfoNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.GateInfoNotice;

            /**
             * Decodes a GateInfoNotice message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GateInfoNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.GateInfoNotice;

            /**
             * Verifies a GateInfoNotice message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an AuthSession. */
        interface IAuthSession {

            /** AuthSession sessionkey */
            sessionkey?: (string|null);

            /** AuthSession accountid */
            accountid?: (number|null);
        }

        /** Represents an AuthSession. */
        class AuthSession implements IAuthSession {

            /**
             * Constructs a new AuthSession.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IAuthSession);

            /** AuthSession sessionkey. */
            public sessionkey: string;

            /** AuthSession accountid. */
            public accountid: number;

            /**
             * Creates a new AuthSession instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthSession instance
             */
            public static create(properties?: common.server.IAuthSession): common.server.AuthSession;

            /**
             * Encodes the specified AuthSession message. Does not implicitly {@link common.server.AuthSession.verify|verify} messages.
             * @param message AuthSession message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IAuthSession, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified AuthSession message, length delimited. Does not implicitly {@link common.server.AuthSession.verify|verify} messages.
             * @param message AuthSession message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IAuthSession, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an AuthSession message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.AuthSession;

            /**
             * Decodes an AuthSession message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.AuthSession;

            /**
             * Verifies an AuthSession message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of an AuthSessionRep. */
        interface IAuthSessionRep {

            /** AuthSessionRep error_code */
            error_code?: (number|null);

            /** AuthSessionRep accountid */
            accountid?: (number|null);
        }

        /** Represents an AuthSessionRep. */
        class AuthSessionRep implements IAuthSessionRep {

            /**
             * Constructs a new AuthSessionRep.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IAuthSessionRep);

            /** AuthSessionRep error_code. */
            public error_code: number;

            /** AuthSessionRep accountid. */
            public accountid: number;

            /**
             * Creates a new AuthSessionRep instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuthSessionRep instance
             */
            public static create(properties?: common.server.IAuthSessionRep): common.server.AuthSessionRep;

            /**
             * Encodes the specified AuthSessionRep message. Does not implicitly {@link common.server.AuthSessionRep.verify|verify} messages.
             * @param message AuthSessionRep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IAuthSessionRep, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified AuthSessionRep message, length delimited. Does not implicitly {@link common.server.AuthSessionRep.verify|verify} messages.
             * @param message AuthSessionRep message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IAuthSessionRep, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an AuthSessionRep message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuthSessionRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.AuthSessionRep;

            /**
             * Decodes an AuthSessionRep message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuthSessionRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.AuthSessionRep;

            /**
             * Verifies an AuthSessionRep message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ForwardMessage. */
        interface IForwardMessage {

            /** ForwardMessage uid */
            uid?: (number|null);

            /** ForwardMessage proto */
            proto?: (string|null);

            /** ForwardMessage data */
            data?: (Uint8Array|null);
        }

        /** Represents a ForwardMessage. */
        class ForwardMessage implements IForwardMessage {

            /**
             * Constructs a new ForwardMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IForwardMessage);

            /** ForwardMessage uid. */
            public uid: number;

            /** ForwardMessage proto. */
            public proto: string;

            /** ForwardMessage data. */
            public data: Uint8Array;

            /**
             * Creates a new ForwardMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForwardMessage instance
             */
            public static create(properties?: common.server.IForwardMessage): common.server.ForwardMessage;

            /**
             * Encodes the specified ForwardMessage message. Does not implicitly {@link common.server.ForwardMessage.verify|verify} messages.
             * @param message ForwardMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IForwardMessage, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ForwardMessage message, length delimited. Does not implicitly {@link common.server.ForwardMessage.verify|verify} messages.
             * @param message ForwardMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IForwardMessage, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ForwardMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForwardMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.ForwardMessage;

            /**
             * Decodes a ForwardMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForwardMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.ForwardMessage;

            /**
             * Verifies a ForwardMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }

        /** Properties of a ClientExit. */
        interface IClientExit {

            /** ClientExit accountid */
            accountid?: (number|null);
        }

        /** Represents a ClientExit. */
        class ClientExit implements IClientExit {

            /**
             * Constructs a new ClientExit.
             * @param [properties] Properties to set
             */
            constructor(properties?: common.server.IClientExit);

            /** ClientExit accountid. */
            public accountid: number;

            /**
             * Creates a new ClientExit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientExit instance
             */
            public static create(properties?: common.server.IClientExit): common.server.ClientExit;

            /**
             * Encodes the specified ClientExit message. Does not implicitly {@link common.server.ClientExit.verify|verify} messages.
             * @param message ClientExit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: common.server.IClientExit, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ClientExit message, length delimited. Does not implicitly {@link common.server.ClientExit.verify|verify} messages.
             * @param message ClientExit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: common.server.IClientExit, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ClientExit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): common.server.ClientExit;

            /**
             * Decodes a ClientExit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): common.server.ClientExit;

            /**
             * Verifies a ClientExit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);
        }
    }
}

/** Namespace gate. */
declare namespace gate {

    /** Properties of an Auth. */
    interface IAuth {

        /** Auth accountid */
        accountid?: (number|null);

        /** Auth sessionkey */
        sessionkey?: (string|null);
    }

    /** Represents an Auth. */
    class Auth implements IAuth {

        /**
         * Constructs a new Auth.
         * @param [properties] Properties to set
         */
        constructor(properties?: gate.IAuth);

        /** Auth accountid. */
        public accountid: number;

        /** Auth sessionkey. */
        public sessionkey: string;

        /**
         * Creates a new Auth instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Auth instance
         */
        public static create(properties?: gate.IAuth): gate.Auth;

        /**
         * Encodes the specified Auth message. Does not implicitly {@link gate.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gate.IAuth, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link gate.Auth.verify|verify} messages.
         * @param message Auth message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gate.IAuth, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): gate.Auth;

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): gate.Auth;

        /**
         * Verifies an Auth message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace lobby. */
declare namespace lobby {

    /** Properties of a QueryRole. */
    interface IQueryRole {

        /** QueryRole accountid */
        accountid?: (number|null);
    }

    /** Represents a QueryRole. */
    class QueryRole implements IQueryRole {

        /**
         * Constructs a new QueryRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IQueryRole);

        /** QueryRole accountid. */
        public accountid: number;

        /**
         * Creates a new QueryRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryRole instance
         */
        public static create(properties?: lobby.IQueryRole): lobby.QueryRole;

        /**
         * Encodes the specified QueryRole message. Does not implicitly {@link lobby.QueryRole.verify|verify} messages.
         * @param message QueryRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IQueryRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QueryRole message, length delimited. Does not implicitly {@link lobby.QueryRole.verify|verify} messages.
         * @param message QueryRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IQueryRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QueryRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.QueryRole;

        /**
         * Decodes a QueryRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.QueryRole;

        /**
         * Verifies a QueryRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CreateRole. */
    interface ICreateRole {

        /** CreateRole accountid */
        accountid?: (number|null);

        /** CreateRole name */
        name?: (string|null);

        /** CreateRole profession */
        profession?: (number|null);
    }

    /** Represents a CreateRole. */
    class CreateRole implements ICreateRole {

        /**
         * Constructs a new CreateRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ICreateRole);

        /** CreateRole accountid. */
        public accountid: number;

        /** CreateRole name. */
        public name: string;

        /** CreateRole profession. */
        public profession: number;

        /**
         * Creates a new CreateRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRole instance
         */
        public static create(properties?: lobby.ICreateRole): lobby.CreateRole;

        /**
         * Encodes the specified CreateRole message. Does not implicitly {@link lobby.CreateRole.verify|verify} messages.
         * @param message CreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ICreateRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateRole message, length delimited. Does not implicitly {@link lobby.CreateRole.verify|verify} messages.
         * @param message CreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ICreateRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.CreateRole;

        /**
         * Decodes a CreateRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.CreateRole;

        /**
         * Verifies a CreateRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an EnterLobby. */
    interface IEnterLobby {

        /** EnterLobby accountid */
        accountid?: (number|null);

        /** EnterLobby roleid */
        roleid?: (number|null);
    }

    /** Represents an EnterLobby. */
    class EnterLobby implements IEnterLobby {

        /**
         * Constructs a new EnterLobby.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IEnterLobby);

        /** EnterLobby accountid. */
        public accountid: number;

        /** EnterLobby roleid. */
        public roleid: number;

        /**
         * Creates a new EnterLobby instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterLobby instance
         */
        public static create(properties?: lobby.IEnterLobby): lobby.EnterLobby;

        /**
         * Encodes the specified EnterLobby message. Does not implicitly {@link lobby.EnterLobby.verify|verify} messages.
         * @param message EnterLobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IEnterLobby, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterLobby message, length delimited. Does not implicitly {@link lobby.EnterLobby.verify|verify} messages.
         * @param message EnterLobby message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IEnterLobby, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterLobby message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.EnterLobby;

        /**
         * Decodes an EnterLobby message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.EnterLobby;

        /**
         * Verifies an EnterLobby message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a QueryRoleRes. */
    interface IQueryRoleRes {

        /** QueryRoleRes accountid */
        accountid?: (number|null);

        /** QueryRoleRes role_ids */
        role_ids?: (number[]|null);

        /** QueryRoleRes role_names */
        role_names?: (string[]|null);
    }

    /** Represents a QueryRoleRes. */
    class QueryRoleRes implements IQueryRoleRes {

        /**
         * Constructs a new QueryRoleRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IQueryRoleRes);

        /** QueryRoleRes accountid. */
        public accountid: number;

        /** QueryRoleRes role_ids. */
        public role_ids: number[];

        /** QueryRoleRes role_names. */
        public role_names: string[];

        /**
         * Creates a new QueryRoleRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryRoleRes instance
         */
        public static create(properties?: lobby.IQueryRoleRes): lobby.QueryRoleRes;

        /**
         * Encodes the specified QueryRoleRes message. Does not implicitly {@link lobby.QueryRoleRes.verify|verify} messages.
         * @param message QueryRoleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IQueryRoleRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified QueryRoleRes message, length delimited. Does not implicitly {@link lobby.QueryRoleRes.verify|verify} messages.
         * @param message QueryRoleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IQueryRoleRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a QueryRoleRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.QueryRoleRes;

        /**
         * Decodes a QueryRoleRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.QueryRoleRes;

        /**
         * Verifies a QueryRoleRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a CreateRoleRes. */
    interface ICreateRoleRes {

        /** CreateRoleRes error_code */
        error_code?: (number|null);

        /** CreateRoleRes accountid */
        accountid?: (number|null);

        /** CreateRoleRes role_id */
        role_id?: (number|null);

        /** CreateRoleRes role_name */
        role_name?: (string|null);
    }

    /** Represents a CreateRoleRes. */
    class CreateRoleRes implements ICreateRoleRes {

        /**
         * Constructs a new CreateRoleRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ICreateRoleRes);

        /** CreateRoleRes error_code. */
        public error_code: number;

        /** CreateRoleRes accountid. */
        public accountid: number;

        /** CreateRoleRes role_id. */
        public role_id: number;

        /** CreateRoleRes role_name. */
        public role_name: string;

        /**
         * Creates a new CreateRoleRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateRoleRes instance
         */
        public static create(properties?: lobby.ICreateRoleRes): lobby.CreateRoleRes;

        /**
         * Encodes the specified CreateRoleRes message. Does not implicitly {@link lobby.CreateRoleRes.verify|verify} messages.
         * @param message CreateRoleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ICreateRoleRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified CreateRoleRes message, length delimited. Does not implicitly {@link lobby.CreateRoleRes.verify|verify} messages.
         * @param message CreateRoleRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ICreateRoleRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CreateRoleRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.CreateRoleRes;

        /**
         * Decodes a CreateRoleRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.CreateRoleRes;

        /**
         * Verifies a CreateRoleRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an EnterLobbyRes. */
    interface IEnterLobbyRes {

        /** EnterLobbyRes roleid */
        roleid?: (number|null);

        /** EnterLobbyRes accountid */
        accountid?: (number|null);

        /** EnterLobbyRes rolename */
        rolename?: (string|null);

        /** EnterLobbyRes profession */
        profession?: (number|null);

        /** EnterLobbyRes mapid */
        mapid?: (number|null);

        /** EnterLobbyRes attack */
        attack?: (number|null);

        /** EnterLobbyRes blood */
        blood?: (number|null);

        /** EnterLobbyRes defense */
        defense?: (number|null);

        /** EnterLobbyRes glod */
        glod?: (number|null);

        /** EnterLobbyRes grade */
        grade?: (number|null);

        /** EnterLobbyRes mana */
        mana?: (number|null);

        /** EnterLobbyRes speed */
        speed?: (number|null);

        /** EnterLobbyRes exp */
        exp?: (number|null);

        /** EnterLobbyRes posx */
        posx?: (number|null);

        /** EnterLobbyRes posy */
        posy?: (number|null);
    }

    /** Represents an EnterLobbyRes. */
    class EnterLobbyRes implements IEnterLobbyRes {

        /**
         * Constructs a new EnterLobbyRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IEnterLobbyRes);

        /** EnterLobbyRes roleid. */
        public roleid: number;

        /** EnterLobbyRes accountid. */
        public accountid: number;

        /** EnterLobbyRes rolename. */
        public rolename: string;

        /** EnterLobbyRes profession. */
        public profession: number;

        /** EnterLobbyRes mapid. */
        public mapid: number;

        /** EnterLobbyRes attack. */
        public attack: number;

        /** EnterLobbyRes blood. */
        public blood: number;

        /** EnterLobbyRes defense. */
        public defense: number;

        /** EnterLobbyRes glod. */
        public glod: number;

        /** EnterLobbyRes grade. */
        public grade: number;

        /** EnterLobbyRes mana. */
        public mana: number;

        /** EnterLobbyRes speed. */
        public speed: number;

        /** EnterLobbyRes exp. */
        public exp: number;

        /** EnterLobbyRes posx. */
        public posx: number;

        /** EnterLobbyRes posy. */
        public posy: number;

        /**
         * Creates a new EnterLobbyRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterLobbyRes instance
         */
        public static create(properties?: lobby.IEnterLobbyRes): lobby.EnterLobbyRes;

        /**
         * Encodes the specified EnterLobbyRes message. Does not implicitly {@link lobby.EnterLobbyRes.verify|verify} messages.
         * @param message EnterLobbyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IEnterLobbyRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterLobbyRes message, length delimited. Does not implicitly {@link lobby.EnterLobbyRes.verify|verify} messages.
         * @param message EnterLobbyRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IEnterLobbyRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterLobbyRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterLobbyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.EnterLobbyRes;

        /**
         * Decodes an EnterLobbyRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterLobbyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.EnterLobbyRes;

        /**
         * Verifies an EnterLobbyRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoadComplete. */
    interface ILoadComplete {

        /** LoadComplete accountid */
        accountid?: (number|null);
    }

    /** Represents a LoadComplete. */
    class LoadComplete implements ILoadComplete {

        /**
         * Constructs a new LoadComplete.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ILoadComplete);

        /** LoadComplete accountid. */
        public accountid: number;

        /**
         * Creates a new LoadComplete instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoadComplete instance
         */
        public static create(properties?: lobby.ILoadComplete): lobby.LoadComplete;

        /**
         * Encodes the specified LoadComplete message. Does not implicitly {@link lobby.LoadComplete.verify|verify} messages.
         * @param message LoadComplete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ILoadComplete, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoadComplete message, length delimited. Does not implicitly {@link lobby.LoadComplete.verify|verify} messages.
         * @param message LoadComplete message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ILoadComplete, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoadComplete message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.LoadComplete;

        /**
         * Decodes a LoadComplete message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.LoadComplete;

        /**
         * Verifies a LoadComplete message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LeaveSight. */
    interface ILeaveSight {

        /** LeaveSight accountid */
        accountid?: (number|null);

        /** LeaveSight roleid */
        roleid?: (number|null);
    }

    /** Represents a LeaveSight. */
    class LeaveSight implements ILeaveSight {

        /**
         * Constructs a new LeaveSight.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ILeaveSight);

        /** LeaveSight accountid. */
        public accountid: number;

        /** LeaveSight roleid. */
        public roleid: number;

        /**
         * Creates a new LeaveSight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LeaveSight instance
         */
        public static create(properties?: lobby.ILeaveSight): lobby.LeaveSight;

        /**
         * Encodes the specified LeaveSight message. Does not implicitly {@link lobby.LeaveSight.verify|verify} messages.
         * @param message LeaveSight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ILeaveSight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LeaveSight message, length delimited. Does not implicitly {@link lobby.LeaveSight.verify|verify} messages.
         * @param message LeaveSight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ILeaveSight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LeaveSight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LeaveSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.LeaveSight;

        /**
         * Decodes a LeaveSight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LeaveSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.LeaveSight;

        /**
         * Verifies a LeaveSight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an EnterSight. */
    interface IEnterSight {

        /** EnterSight accountid */
        accountid?: (number|null);

        /** EnterSight mapid */
        mapid?: (number|null);

        /** EnterSight roleid */
        roleid?: (number|null);

        /** EnterSight rolename */
        rolename?: (string|null);

        /** EnterSight profession */
        profession?: (number|null);

        /** EnterSight posx */
        posx?: (number|null);

        /** EnterSight posy */
        posy?: (number|null);

        /** EnterSight blood */
        blood?: (number|null);

        /** EnterSight speed */
        speed?: (number|null);
    }

    /** Represents an EnterSight. */
    class EnterSight implements IEnterSight {

        /**
         * Constructs a new EnterSight.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IEnterSight);

        /** EnterSight accountid. */
        public accountid: number;

        /** EnterSight mapid. */
        public mapid: number;

        /** EnterSight roleid. */
        public roleid: number;

        /** EnterSight rolename. */
        public rolename: string;

        /** EnterSight profession. */
        public profession: number;

        /** EnterSight posx. */
        public posx: number;

        /** EnterSight posy. */
        public posy: number;

        /** EnterSight blood. */
        public blood: number;

        /** EnterSight speed. */
        public speed: number;

        /**
         * Creates a new EnterSight instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterSight instance
         */
        public static create(properties?: lobby.IEnterSight): lobby.EnterSight;

        /**
         * Encodes the specified EnterSight message. Does not implicitly {@link lobby.EnterSight.verify|verify} messages.
         * @param message EnterSight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IEnterSight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterSight message, length delimited. Does not implicitly {@link lobby.EnterSight.verify|verify} messages.
         * @param message EnterSight message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IEnterSight, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterSight message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.EnterSight;

        /**
         * Decodes an EnterSight message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.EnterSight;

        /**
         * Verifies an EnterSight message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MoveReq. */
    interface IMoveReq {

        /** MoveReq accountid */
        accountid?: (number|null);

        /** MoveReq posx */
        posx?: (number|null);

        /** MoveReq posy */
        posy?: (number|null);
    }

    /** Represents a MoveReq. */
    class MoveReq implements IMoveReq {

        /**
         * Constructs a new MoveReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IMoveReq);

        /** MoveReq accountid. */
        public accountid: number;

        /** MoveReq posx. */
        public posx: number;

        /** MoveReq posy. */
        public posy: number;

        /**
         * Creates a new MoveReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveReq instance
         */
        public static create(properties?: lobby.IMoveReq): lobby.MoveReq;

        /**
         * Encodes the specified MoveReq message. Does not implicitly {@link lobby.MoveReq.verify|verify} messages.
         * @param message MoveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IMoveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MoveReq message, length delimited. Does not implicitly {@link lobby.MoveReq.verify|verify} messages.
         * @param message MoveReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IMoveReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MoveReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.MoveReq;

        /**
         * Decodes a MoveReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.MoveReq;

        /**
         * Verifies a MoveReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a MoveRes. */
    interface IMoveRes {

        /** MoveRes accountid */
        accountid?: (number|null);

        /** MoveRes moverid */
        moverid?: (number|null);

        /** MoveRes posx */
        posx?: (number|null);

        /** MoveRes posy */
        posy?: (number|null);
    }

    /** Represents a MoveRes. */
    class MoveRes implements IMoveRes {

        /**
         * Constructs a new MoveRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.IMoveRes);

        /** MoveRes accountid. */
        public accountid: number;

        /** MoveRes moverid. */
        public moverid: number;

        /** MoveRes posx. */
        public posx: number;

        /** MoveRes posy. */
        public posy: number;

        /**
         * Creates a new MoveRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoveRes instance
         */
        public static create(properties?: lobby.IMoveRes): lobby.MoveRes;

        /**
         * Encodes the specified MoveRes message. Does not implicitly {@link lobby.MoveRes.verify|verify} messages.
         * @param message MoveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.IMoveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified MoveRes message, length delimited. Does not implicitly {@link lobby.MoveRes.verify|verify} messages.
         * @param message MoveRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.IMoveRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MoveRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): lobby.MoveRes;

        /**
         * Decodes a MoveRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): lobby.MoveRes;

        /**
         * Verifies a MoveRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}

/** Namespace login. */
declare namespace login {

    /** Properties of a RegisterReq. */
    interface IRegisterReq {

        /** RegisterReq account */
        account?: (string|null);

        /** RegisterReq passwd */
        passwd?: (string|null);
    }

    /** Represents a RegisterReq. */
    class RegisterReq implements IRegisterReq {

        /**
         * Constructs a new RegisterReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegisterReq);

        /** RegisterReq account. */
        public account: string;

        /** RegisterReq passwd. */
        public passwd: string;

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterReq instance
         */
        public static create(properties?: login.IRegisterReq): login.RegisterReq;

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegisterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @param message RegisterReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegisterReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.RegisterReq;

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.RegisterReq;

        /**
         * Verifies a RegisterReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a RegisterRes. */
    interface IRegisterRes {

        /** RegisterRes errcode */
        errcode?: (number|null);
    }

    /** Represents a RegisterRes. */
    class RegisterRes implements IRegisterRes {

        /**
         * Constructs a new RegisterRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IRegisterRes);

        /** RegisterRes errcode. */
        public errcode: number;

        /**
         * Creates a new RegisterRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterRes instance
         */
        public static create(properties?: login.IRegisterRes): login.RegisterRes;

        /**
         * Encodes the specified RegisterRes message. Does not implicitly {@link login.RegisterRes.verify|verify} messages.
         * @param message RegisterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IRegisterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RegisterRes message, length delimited. Does not implicitly {@link login.RegisterRes.verify|verify} messages.
         * @param message RegisterRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IRegisterRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RegisterRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.RegisterRes;

        /**
         * Decodes a RegisterRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.RegisterRes;

        /**
         * Verifies a RegisterRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoginReq. */
    interface ILoginReq {

        /** LoginReq account */
        account?: (string|null);

        /** LoginReq passwd */
        passwd?: (string|null);
    }

    /** Represents a LoginReq. */
    class LoginReq implements ILoginReq {

        /**
         * Constructs a new LoginReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ILoginReq);

        /** LoginReq account. */
        public account: string;

        /** LoginReq passwd. */
        public passwd: string;

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginReq instance
         */
        public static create(properties?: login.ILoginReq): login.LoginReq;

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ILoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @param message LoginReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ILoginReq, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.LoginReq;

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.LoginReq;

        /**
         * Verifies a LoginReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a LoginRes. */
    interface ILoginRes {

        /** LoginRes errcode */
        errcode?: (number|null);

        /** LoginRes accountid */
        accountid?: (number|null);
    }

    /** Represents a LoginRes. */
    class LoginRes implements ILoginRes {

        /**
         * Constructs a new LoginRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.ILoginRes);

        /** LoginRes errcode. */
        public errcode: number;

        /** LoginRes accountid. */
        public accountid: number;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRes instance
         */
        public static create(properties?: login.ILoginRes): login.LoginRes;

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link login.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.ILoginRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link login.LoginRes.verify|verify} messages.
         * @param message LoginRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.ILoginRes, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.LoginRes;

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.LoginRes;

        /**
         * Verifies a LoginRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GateInfo. */
    interface IGateInfo {

        /** GateInfo server_status */
        server_status?: (number|null);

        /** GateInfo gate_host */
        gate_host?: (string|null);

        /** GateInfo gate_port */
        gate_port?: (number|null);
    }

    /** Represents a GateInfo. */
    class GateInfo implements IGateInfo {

        /**
         * Constructs a new GateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IGateInfo);

        /** GateInfo server_status. */
        public server_status: number;

        /** GateInfo gate_host. */
        public gate_host: string;

        /** GateInfo gate_port. */
        public gate_port: number;

        /**
         * Creates a new GateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GateInfo instance
         */
        public static create(properties?: login.IGateInfo): login.GateInfo;

        /**
         * Encodes the specified GateInfo message. Does not implicitly {@link login.GateInfo.verify|verify} messages.
         * @param message GateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IGateInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GateInfo message, length delimited. Does not implicitly {@link login.GateInfo.verify|verify} messages.
         * @param message GateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IGateInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.GateInfo;

        /**
         * Decodes a GateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.GateInfo;

        /**
         * Verifies a GateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a ServerList. */
    interface IServerList {

        /** ServerList server_lists */
        server_lists?: (login.IGateInfo[]|null);
    }

    /** Represents a ServerList. */
    class ServerList implements IServerList {

        /**
         * Constructs a new ServerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IServerList);

        /** ServerList server_lists. */
        public server_lists: login.IGateInfo[];

        /**
         * Creates a new ServerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerList instance
         */
        public static create(properties?: login.IServerList): login.ServerList;

        /**
         * Encodes the specified ServerList message. Does not implicitly {@link login.ServerList.verify|verify} messages.
         * @param message ServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified ServerList message, length delimited. Does not implicitly {@link login.ServerList.verify|verify} messages.
         * @param message ServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ServerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.ServerList;

        /**
         * Decodes a ServerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.ServerList;

        /**
         * Verifies a ServerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of an EnterGateInfo. */
    interface IEnterGateInfo {

        /** EnterGateInfo sessionkey */
        sessionkey?: (string|null);

        /** EnterGateInfo list */
        list?: (login.IServerList|null);
    }

    /** Represents an EnterGateInfo. */
    class EnterGateInfo implements IEnterGateInfo {

        /**
         * Constructs a new EnterGateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: login.IEnterGateInfo);

        /** EnterGateInfo sessionkey. */
        public sessionkey: string;

        /** EnterGateInfo list. */
        public list?: (login.IServerList|null);

        /**
         * Creates a new EnterGateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EnterGateInfo instance
         */
        public static create(properties?: login.IEnterGateInfo): login.EnterGateInfo;

        /**
         * Encodes the specified EnterGateInfo message. Does not implicitly {@link login.EnterGateInfo.verify|verify} messages.
         * @param message EnterGateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: login.IEnterGateInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified EnterGateInfo message, length delimited. Does not implicitly {@link login.EnterGateInfo.verify|verify} messages.
         * @param message EnterGateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: login.IEnterGateInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an EnterGateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EnterGateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): login.EnterGateInfo;

        /**
         * Decodes an EnterGateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EnterGateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): login.EnterGateInfo;

        /**
         * Verifies an EnterGateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
