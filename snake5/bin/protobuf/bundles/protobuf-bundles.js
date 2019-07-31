var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.MsgHead = (function() {

        /**
         * Properties of a MsgHead.
         * @memberof common
         * @interface IMsgHead
         * @property {string|null} [proto] MsgHead proto
         * @property {Uint8Array|null} [data] MsgHead data
         */

        /**
         * Constructs a new MsgHead.
         * @memberof common
         * @classdesc Represents a MsgHead.
         * @implements IMsgHead
         * @constructor
         * @param {common.IMsgHead=} [properties] Properties to set
         */
        function MsgHead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgHead proto.
         * @member {string} proto
         * @memberof common.MsgHead
         * @instance
         */
        MsgHead.prototype.proto = "";

        /**
         * MsgHead data.
         * @member {Uint8Array} data
         * @memberof common.MsgHead
         * @instance
         */
        MsgHead.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new MsgHead instance using the specified properties.
         * @function create
         * @memberof common.MsgHead
         * @static
         * @param {common.IMsgHead=} [properties] Properties to set
         * @returns {common.MsgHead} MsgHead instance
         */
        MsgHead.create = function create(properties) {
            return new MsgHead(properties);
        };

        /**
         * Encodes the specified MsgHead message. Does not implicitly {@link common.MsgHead.verify|verify} messages.
         * @function encode
         * @memberof common.MsgHead
         * @static
         * @param {common.IMsgHead} message MsgHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgHead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.proto != null && message.hasOwnProperty("proto"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.proto);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified MsgHead message, length delimited. Does not implicitly {@link common.MsgHead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.MsgHead
         * @static
         * @param {common.IMsgHead} message MsgHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgHead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgHead message from the specified reader or buffer.
         * @function decode
         * @memberof common.MsgHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.MsgHead} MsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgHead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.MsgHead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.proto = reader.string();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgHead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.MsgHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.MsgHead} MsgHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgHead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgHead message.
         * @function verify
         * @memberof common.MsgHead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgHead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.proto != null && message.hasOwnProperty("proto"))
                if (!$util.isString(message.proto))
                    return "proto: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        return MsgHead;
    })();

    /**
     * ErrorCode enum.
     * @name common.ErrorCode
     * @enum {string}
     * @property {number} ERR_SUCCESS=0 ERR_SUCCESS value
     * @property {number} ERR_FAILED=1 ERR_FAILED value
     * @property {number} ERR_REPEATED=2 ERR_REPEATED value
     * @property {number} ERR_AUTHTIMEOUT=3 ERR_AUTHTIMEOUT value
     * @property {number} ERR_ACCOUNTORPASSWD=4 ERR_ACCOUNTORPASSWD value
     * @property {number} ERR_AUTHFAILED=5 ERR_AUTHFAILED value
     * @property {number} ERR_SESSIONKEY=6 ERR_SESSIONKEY value
     * @property {number} ERR_ROLENAME=7 ERR_ROLENAME value
     * @property {number} ERR_INTERNAL_0=500 ERR_INTERNAL_0 value
     * @property {number} ERR_INTERNAL_1=501 ERR_INTERNAL_1 value
     * @property {number} ERR_INTERNAL_2=502 ERR_INTERNAL_2 value
     * @property {number} ERR_INTERNAL_3=503 ERR_INTERNAL_3 value
     * @property {number} ERR_INTERNAL_4=504 ERR_INTERNAL_4 value
     * @property {number} ERR_INTERNAL_5=505 ERR_INTERNAL_5 value
     */
    common.ErrorCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERR_SUCCESS"] = 0;
        values[valuesById[1] = "ERR_FAILED"] = 1;
        values[valuesById[2] = "ERR_REPEATED"] = 2;
        values[valuesById[3] = "ERR_AUTHTIMEOUT"] = 3;
        values[valuesById[4] = "ERR_ACCOUNTORPASSWD"] = 4;
        values[valuesById[5] = "ERR_AUTHFAILED"] = 5;
        values[valuesById[6] = "ERR_SESSIONKEY"] = 6;
        values[valuesById[7] = "ERR_ROLENAME"] = 7;
        values[valuesById[500] = "ERR_INTERNAL_0"] = 500;
        values[valuesById[501] = "ERR_INTERNAL_1"] = 501;
        values[valuesById[502] = "ERR_INTERNAL_2"] = 502;
        values[valuesById[503] = "ERR_INTERNAL_3"] = 503;
        values[valuesById[504] = "ERR_INTERNAL_4"] = 504;
        values[valuesById[505] = "ERR_INTERNAL_5"] = 505;
        return values;
    })();

    common.Error = (function() {

        /**
         * Properties of an Error.
         * @memberof common
         * @interface IError
         * @property {number|null} [error_code] Error error_code
         * @property {string|null} [error_msg] Error error_msg
         * @property {string|null} [op] Error op
         */

        /**
         * Constructs a new Error.
         * @memberof common
         * @classdesc Represents an Error.
         * @implements IError
         * @constructor
         * @param {common.IError=} [properties] Properties to set
         */
        function Error(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Error error_code.
         * @member {number} error_code
         * @memberof common.Error
         * @instance
         */
        Error.prototype.error_code = 0;

        /**
         * Error error_msg.
         * @member {string} error_msg
         * @memberof common.Error
         * @instance
         */
        Error.prototype.error_msg = "";

        /**
         * Error op.
         * @member {string} op
         * @memberof common.Error
         * @instance
         */
        Error.prototype.op = "";

        /**
         * Creates a new Error instance using the specified properties.
         * @function create
         * @memberof common.Error
         * @static
         * @param {common.IError=} [properties] Properties to set
         * @returns {common.Error} Error instance
         */
        Error.create = function create(properties) {
            return new Error(properties);
        };

        /**
         * Encodes the specified Error message. Does not implicitly {@link common.Error.verify|verify} messages.
         * @function encode
         * @memberof common.Error
         * @static
         * @param {common.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error_code != null && message.hasOwnProperty("error_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error_code);
            if (message.error_msg != null && message.hasOwnProperty("error_msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.error_msg);
            if (message.op != null && message.hasOwnProperty("op"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.op);
            return writer;
        };

        /**
         * Encodes the specified Error message, length delimited. Does not implicitly {@link common.Error.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.Error
         * @static
         * @param {common.IError} message Error message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Error.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Error message from the specified reader or buffer.
         * @function decode
         * @memberof common.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.Error();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error_code = reader.int32();
                    break;
                case 2:
                    message.error_msg = reader.string();
                    break;
                case 3:
                    message.op = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Error message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.Error
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.Error} Error
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Error.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Error message.
         * @function verify
         * @memberof common.Error
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Error.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error_code != null && message.hasOwnProperty("error_code"))
                if (!$util.isInteger(message.error_code))
                    return "error_code: integer expected";
            if (message.error_msg != null && message.hasOwnProperty("error_msg"))
                if (!$util.isString(message.error_msg))
                    return "error_msg: string expected";
            if (message.op != null && message.hasOwnProperty("op"))
                if (!$util.isString(message.op))
                    return "op: string expected";
            return null;
        };

        return Error;
    })();

    /**
     * ServerStatus enum.
     * @name common.ServerStatus
     * @enum {string}
     * @property {number} STATUS_NORMAL=0 STATUS_NORMAL value
     * @property {number} STATUS_NEW=1 STATUS_NEW value
     * @property {number} STATUS_HOT=2 STATUS_HOT value
     * @property {number} STATUS_MAINTAIN=3 STATUS_MAINTAIN value
     * @property {number} STATUS_CLOSED=4 STATUS_CLOSED value
     */
    common.ServerStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "STATUS_NORMAL"] = 0;
        values[valuesById[1] = "STATUS_NEW"] = 1;
        values[valuesById[2] = "STATUS_HOT"] = 2;
        values[valuesById[3] = "STATUS_MAINTAIN"] = 3;
        values[valuesById[4] = "STATUS_CLOSED"] = 4;
        return values;
    })();

    common.server = (function() {

        /**
         * Namespace server.
         * @memberof common
         * @namespace
         */
        var server = {};

        server.Identity = (function() {

            /**
             * Properties of an Identity.
             * @memberof common.server
             * @interface IIdentity
             * @property {string|null} [name] Identity name
             * @property {number|null} [id] Identity id
             */

            /**
             * Constructs a new Identity.
             * @memberof common.server
             * @classdesc Represents an Identity.
             * @implements IIdentity
             * @constructor
             * @param {common.server.IIdentity=} [properties] Properties to set
             */
            function Identity(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Identity name.
             * @member {string} name
             * @memberof common.server.Identity
             * @instance
             */
            Identity.prototype.name = "";

            /**
             * Identity id.
             * @member {number} id
             * @memberof common.server.Identity
             * @instance
             */
            Identity.prototype.id = 0;

            /**
             * Creates a new Identity instance using the specified properties.
             * @function create
             * @memberof common.server.Identity
             * @static
             * @param {common.server.IIdentity=} [properties] Properties to set
             * @returns {common.server.Identity} Identity instance
             */
            Identity.create = function create(properties) {
                return new Identity(properties);
            };

            /**
             * Encodes the specified Identity message. Does not implicitly {@link common.server.Identity.verify|verify} messages.
             * @function encode
             * @memberof common.server.Identity
             * @static
             * @param {common.server.IIdentity} message Identity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Identity.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && message.hasOwnProperty("name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.id != null && message.hasOwnProperty("id"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
                return writer;
            };

            /**
             * Encodes the specified Identity message, length delimited. Does not implicitly {@link common.server.Identity.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.Identity
             * @static
             * @param {common.server.IIdentity} message Identity message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Identity.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Identity message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.Identity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.Identity} Identity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Identity.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.Identity();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.name = reader.string();
                        break;
                    case 2:
                        message.id = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Identity message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.Identity
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.Identity} Identity
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Identity.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Identity message.
             * @function verify
             * @memberof common.server.Identity
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Identity.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id))
                        return "id: integer expected";
                return null;
            };

            return Identity;
        })();

        server.RemoteCall = (function() {

            /**
             * Properties of a RemoteCall.
             * @memberof common.server
             * @interface IRemoteCall
             * @property {string|null} [proto] RemoteCall proto
             * @property {Uint8Array|null} [data] RemoteCall data
             */

            /**
             * Constructs a new RemoteCall.
             * @memberof common.server
             * @classdesc Represents a RemoteCall.
             * @implements IRemoteCall
             * @constructor
             * @param {common.server.IRemoteCall=} [properties] Properties to set
             */
            function RemoteCall(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RemoteCall proto.
             * @member {string} proto
             * @memberof common.server.RemoteCall
             * @instance
             */
            RemoteCall.prototype.proto = "";

            /**
             * RemoteCall data.
             * @member {Uint8Array} data
             * @memberof common.server.RemoteCall
             * @instance
             */
            RemoteCall.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new RemoteCall instance using the specified properties.
             * @function create
             * @memberof common.server.RemoteCall
             * @static
             * @param {common.server.IRemoteCall=} [properties] Properties to set
             * @returns {common.server.RemoteCall} RemoteCall instance
             */
            RemoteCall.create = function create(properties) {
                return new RemoteCall(properties);
            };

            /**
             * Encodes the specified RemoteCall message. Does not implicitly {@link common.server.RemoteCall.verify|verify} messages.
             * @function encode
             * @memberof common.server.RemoteCall
             * @static
             * @param {common.server.IRemoteCall} message RemoteCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoteCall.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.proto != null && message.hasOwnProperty("proto"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.proto);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified RemoteCall message, length delimited. Does not implicitly {@link common.server.RemoteCall.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.RemoteCall
             * @static
             * @param {common.server.IRemoteCall} message RemoteCall message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoteCall.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RemoteCall message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.RemoteCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.RemoteCall} RemoteCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoteCall.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.RemoteCall();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.proto = reader.string();
                        break;
                    case 2:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RemoteCall message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.RemoteCall
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.RemoteCall} RemoteCall
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoteCall.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RemoteCall message.
             * @function verify
             * @memberof common.server.RemoteCall
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoteCall.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.proto != null && message.hasOwnProperty("proto"))
                    if (!$util.isString(message.proto))
                        return "proto: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            return RemoteCall;
        })();

        server.RemoteRep = (function() {

            /**
             * Properties of a RemoteRep.
             * @memberof common.server
             * @interface IRemoteRep
             * @property {number|null} [error_code] RemoteRep error_code
             * @property {string|null} [proto] RemoteRep proto
             * @property {Uint8Array|null} [data] RemoteRep data
             */

            /**
             * Constructs a new RemoteRep.
             * @memberof common.server
             * @classdesc Represents a RemoteRep.
             * @implements IRemoteRep
             * @constructor
             * @param {common.server.IRemoteRep=} [properties] Properties to set
             */
            function RemoteRep(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RemoteRep error_code.
             * @member {number} error_code
             * @memberof common.server.RemoteRep
             * @instance
             */
            RemoteRep.prototype.error_code = 0;

            /**
             * RemoteRep proto.
             * @member {string} proto
             * @memberof common.server.RemoteRep
             * @instance
             */
            RemoteRep.prototype.proto = "";

            /**
             * RemoteRep data.
             * @member {Uint8Array} data
             * @memberof common.server.RemoteRep
             * @instance
             */
            RemoteRep.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new RemoteRep instance using the specified properties.
             * @function create
             * @memberof common.server.RemoteRep
             * @static
             * @param {common.server.IRemoteRep=} [properties] Properties to set
             * @returns {common.server.RemoteRep} RemoteRep instance
             */
            RemoteRep.create = function create(properties) {
                return new RemoteRep(properties);
            };

            /**
             * Encodes the specified RemoteRep message. Does not implicitly {@link common.server.RemoteRep.verify|verify} messages.
             * @function encode
             * @memberof common.server.RemoteRep
             * @static
             * @param {common.server.IRemoteRep} message RemoteRep message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoteRep.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error_code != null && message.hasOwnProperty("error_code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error_code);
                if (message.proto != null && message.hasOwnProperty("proto"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.proto);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified RemoteRep message, length delimited. Does not implicitly {@link common.server.RemoteRep.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.RemoteRep
             * @static
             * @param {common.server.IRemoteRep} message RemoteRep message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RemoteRep.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RemoteRep message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.RemoteRep
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.RemoteRep} RemoteRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoteRep.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.RemoteRep();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error_code = reader.int32();
                        break;
                    case 2:
                        message.proto = reader.string();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RemoteRep message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.RemoteRep
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.RemoteRep} RemoteRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RemoteRep.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RemoteRep message.
             * @function verify
             * @memberof common.server.RemoteRep
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RemoteRep.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error_code != null && message.hasOwnProperty("error_code"))
                    if (!$util.isInteger(message.error_code))
                        return "error_code: integer expected";
                if (message.proto != null && message.hasOwnProperty("proto"))
                    if (!$util.isString(message.proto))
                        return "proto: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            return RemoteRep;
        })();

        server.GateInfoNotice = (function() {

            /**
             * Properties of a GateInfoNotice.
             * @memberof common.server
             * @interface IGateInfoNotice
             * @property {number|null} [serverid] GateInfoNotice serverid
             * @property {number|null} [onlinenum] GateInfoNotice onlinenum
             * @property {string|null} [gate_host] GateInfoNotice gate_host
             * @property {number|null} [gate_port] GateInfoNotice gate_port
             */

            /**
             * Constructs a new GateInfoNotice.
             * @memberof common.server
             * @classdesc Represents a GateInfoNotice.
             * @implements IGateInfoNotice
             * @constructor
             * @param {common.server.IGateInfoNotice=} [properties] Properties to set
             */
            function GateInfoNotice(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GateInfoNotice serverid.
             * @member {number} serverid
             * @memberof common.server.GateInfoNotice
             * @instance
             */
            GateInfoNotice.prototype.serverid = 0;

            /**
             * GateInfoNotice onlinenum.
             * @member {number} onlinenum
             * @memberof common.server.GateInfoNotice
             * @instance
             */
            GateInfoNotice.prototype.onlinenum = 0;

            /**
             * GateInfoNotice gate_host.
             * @member {string} gate_host
             * @memberof common.server.GateInfoNotice
             * @instance
             */
            GateInfoNotice.prototype.gate_host = "";

            /**
             * GateInfoNotice gate_port.
             * @member {number} gate_port
             * @memberof common.server.GateInfoNotice
             * @instance
             */
            GateInfoNotice.prototype.gate_port = 0;

            /**
             * Creates a new GateInfoNotice instance using the specified properties.
             * @function create
             * @memberof common.server.GateInfoNotice
             * @static
             * @param {common.server.IGateInfoNotice=} [properties] Properties to set
             * @returns {common.server.GateInfoNotice} GateInfoNotice instance
             */
            GateInfoNotice.create = function create(properties) {
                return new GateInfoNotice(properties);
            };

            /**
             * Encodes the specified GateInfoNotice message. Does not implicitly {@link common.server.GateInfoNotice.verify|verify} messages.
             * @function encode
             * @memberof common.server.GateInfoNotice
             * @static
             * @param {common.server.IGateInfoNotice} message GateInfoNotice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GateInfoNotice.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serverid != null && message.hasOwnProperty("serverid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverid);
                if (message.onlinenum != null && message.hasOwnProperty("onlinenum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.onlinenum);
                if (message.gate_host != null && message.hasOwnProperty("gate_host"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.gate_host);
                if (message.gate_port != null && message.hasOwnProperty("gate_port"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.gate_port);
                return writer;
            };

            /**
             * Encodes the specified GateInfoNotice message, length delimited. Does not implicitly {@link common.server.GateInfoNotice.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.GateInfoNotice
             * @static
             * @param {common.server.IGateInfoNotice} message GateInfoNotice message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GateInfoNotice.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GateInfoNotice message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.GateInfoNotice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.GateInfoNotice} GateInfoNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GateInfoNotice.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.GateInfoNotice();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.serverid = reader.int32();
                        break;
                    case 2:
                        message.onlinenum = reader.int32();
                        break;
                    case 3:
                        message.gate_host = reader.string();
                        break;
                    case 4:
                        message.gate_port = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GateInfoNotice message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.GateInfoNotice
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.GateInfoNotice} GateInfoNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GateInfoNotice.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GateInfoNotice message.
             * @function verify
             * @memberof common.server.GateInfoNotice
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GateInfoNotice.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.serverid != null && message.hasOwnProperty("serverid"))
                    if (!$util.isInteger(message.serverid))
                        return "serverid: integer expected";
                if (message.onlinenum != null && message.hasOwnProperty("onlinenum"))
                    if (!$util.isInteger(message.onlinenum))
                        return "onlinenum: integer expected";
                if (message.gate_host != null && message.hasOwnProperty("gate_host"))
                    if (!$util.isString(message.gate_host))
                        return "gate_host: string expected";
                if (message.gate_port != null && message.hasOwnProperty("gate_port"))
                    if (!$util.isInteger(message.gate_port))
                        return "gate_port: integer expected";
                return null;
            };

            return GateInfoNotice;
        })();

        server.AuthSession = (function() {

            /**
             * Properties of an AuthSession.
             * @memberof common.server
             * @interface IAuthSession
             * @property {string|null} [sessionkey] AuthSession sessionkey
             * @property {number|null} [accountid] AuthSession accountid
             */

            /**
             * Constructs a new AuthSession.
             * @memberof common.server
             * @classdesc Represents an AuthSession.
             * @implements IAuthSession
             * @constructor
             * @param {common.server.IAuthSession=} [properties] Properties to set
             */
            function AuthSession(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthSession sessionkey.
             * @member {string} sessionkey
             * @memberof common.server.AuthSession
             * @instance
             */
            AuthSession.prototype.sessionkey = "";

            /**
             * AuthSession accountid.
             * @member {number} accountid
             * @memberof common.server.AuthSession
             * @instance
             */
            AuthSession.prototype.accountid = 0;

            /**
             * Creates a new AuthSession instance using the specified properties.
             * @function create
             * @memberof common.server.AuthSession
             * @static
             * @param {common.server.IAuthSession=} [properties] Properties to set
             * @returns {common.server.AuthSession} AuthSession instance
             */
            AuthSession.create = function create(properties) {
                return new AuthSession(properties);
            };

            /**
             * Encodes the specified AuthSession message. Does not implicitly {@link common.server.AuthSession.verify|verify} messages.
             * @function encode
             * @memberof common.server.AuthSession
             * @static
             * @param {common.server.IAuthSession} message AuthSession message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthSession.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.sessionkey != null && message.hasOwnProperty("sessionkey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionkey);
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accountid);
                return writer;
            };

            /**
             * Encodes the specified AuthSession message, length delimited. Does not implicitly {@link common.server.AuthSession.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.AuthSession
             * @static
             * @param {common.server.IAuthSession} message AuthSession message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthSession.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuthSession message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.AuthSession
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.AuthSession} AuthSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthSession.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.AuthSession();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.sessionkey = reader.string();
                        break;
                    case 2:
                        message.accountid = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AuthSession message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.AuthSession
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.AuthSession} AuthSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthSession.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthSession message.
             * @function verify
             * @memberof common.server.AuthSession
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthSession.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.sessionkey != null && message.hasOwnProperty("sessionkey"))
                    if (!$util.isString(message.sessionkey))
                        return "sessionkey: string expected";
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    if (!$util.isInteger(message.accountid))
                        return "accountid: integer expected";
                return null;
            };

            return AuthSession;
        })();

        server.AuthSessionRep = (function() {

            /**
             * Properties of an AuthSessionRep.
             * @memberof common.server
             * @interface IAuthSessionRep
             * @property {number|null} [error_code] AuthSessionRep error_code
             * @property {number|null} [accountid] AuthSessionRep accountid
             */

            /**
             * Constructs a new AuthSessionRep.
             * @memberof common.server
             * @classdesc Represents an AuthSessionRep.
             * @implements IAuthSessionRep
             * @constructor
             * @param {common.server.IAuthSessionRep=} [properties] Properties to set
             */
            function AuthSessionRep(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuthSessionRep error_code.
             * @member {number} error_code
             * @memberof common.server.AuthSessionRep
             * @instance
             */
            AuthSessionRep.prototype.error_code = 0;

            /**
             * AuthSessionRep accountid.
             * @member {number} accountid
             * @memberof common.server.AuthSessionRep
             * @instance
             */
            AuthSessionRep.prototype.accountid = 0;

            /**
             * Creates a new AuthSessionRep instance using the specified properties.
             * @function create
             * @memberof common.server.AuthSessionRep
             * @static
             * @param {common.server.IAuthSessionRep=} [properties] Properties to set
             * @returns {common.server.AuthSessionRep} AuthSessionRep instance
             */
            AuthSessionRep.create = function create(properties) {
                return new AuthSessionRep(properties);
            };

            /**
             * Encodes the specified AuthSessionRep message. Does not implicitly {@link common.server.AuthSessionRep.verify|verify} messages.
             * @function encode
             * @memberof common.server.AuthSessionRep
             * @static
             * @param {common.server.IAuthSessionRep} message AuthSessionRep message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthSessionRep.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.error_code != null && message.hasOwnProperty("error_code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error_code);
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accountid);
                return writer;
            };

            /**
             * Encodes the specified AuthSessionRep message, length delimited. Does not implicitly {@link common.server.AuthSessionRep.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.AuthSessionRep
             * @static
             * @param {common.server.IAuthSessionRep} message AuthSessionRep message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuthSessionRep.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuthSessionRep message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.AuthSessionRep
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.AuthSessionRep} AuthSessionRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthSessionRep.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.AuthSessionRep();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.error_code = reader.int32();
                        break;
                    case 2:
                        message.accountid = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AuthSessionRep message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.AuthSessionRep
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.AuthSessionRep} AuthSessionRep
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuthSessionRep.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuthSessionRep message.
             * @function verify
             * @memberof common.server.AuthSessionRep
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuthSessionRep.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.error_code != null && message.hasOwnProperty("error_code"))
                    if (!$util.isInteger(message.error_code))
                        return "error_code: integer expected";
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    if (!$util.isInteger(message.accountid))
                        return "accountid: integer expected";
                return null;
            };

            return AuthSessionRep;
        })();

        server.ForwardMessage = (function() {

            /**
             * Properties of a ForwardMessage.
             * @memberof common.server
             * @interface IForwardMessage
             * @property {number|null} [uid] ForwardMessage uid
             * @property {string|null} [proto] ForwardMessage proto
             * @property {Uint8Array|null} [data] ForwardMessage data
             */

            /**
             * Constructs a new ForwardMessage.
             * @memberof common.server
             * @classdesc Represents a ForwardMessage.
             * @implements IForwardMessage
             * @constructor
             * @param {common.server.IForwardMessage=} [properties] Properties to set
             */
            function ForwardMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ForwardMessage uid.
             * @member {number} uid
             * @memberof common.server.ForwardMessage
             * @instance
             */
            ForwardMessage.prototype.uid = 0;

            /**
             * ForwardMessage proto.
             * @member {string} proto
             * @memberof common.server.ForwardMessage
             * @instance
             */
            ForwardMessage.prototype.proto = "";

            /**
             * ForwardMessage data.
             * @member {Uint8Array} data
             * @memberof common.server.ForwardMessage
             * @instance
             */
            ForwardMessage.prototype.data = $util.newBuffer([]);

            /**
             * Creates a new ForwardMessage instance using the specified properties.
             * @function create
             * @memberof common.server.ForwardMessage
             * @static
             * @param {common.server.IForwardMessage=} [properties] Properties to set
             * @returns {common.server.ForwardMessage} ForwardMessage instance
             */
            ForwardMessage.create = function create(properties) {
                return new ForwardMessage(properties);
            };

            /**
             * Encodes the specified ForwardMessage message. Does not implicitly {@link common.server.ForwardMessage.verify|verify} messages.
             * @function encode
             * @memberof common.server.ForwardMessage
             * @static
             * @param {common.server.IForwardMessage} message ForwardMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ForwardMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.uid != null && message.hasOwnProperty("uid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uid);
                if (message.proto != null && message.hasOwnProperty("proto"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.proto);
                if (message.data != null && message.hasOwnProperty("data"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
                return writer;
            };

            /**
             * Encodes the specified ForwardMessage message, length delimited. Does not implicitly {@link common.server.ForwardMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.ForwardMessage
             * @static
             * @param {common.server.IForwardMessage} message ForwardMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ForwardMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ForwardMessage message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.ForwardMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.ForwardMessage} ForwardMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ForwardMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.ForwardMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.uid = reader.int32();
                        break;
                    case 2:
                        message.proto = reader.string();
                        break;
                    case 3:
                        message.data = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ForwardMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.ForwardMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.ForwardMessage} ForwardMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ForwardMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ForwardMessage message.
             * @function verify
             * @memberof common.server.ForwardMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ForwardMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.uid != null && message.hasOwnProperty("uid"))
                    if (!$util.isInteger(message.uid))
                        return "uid: integer expected";
                if (message.proto != null && message.hasOwnProperty("proto"))
                    if (!$util.isString(message.proto))
                        return "proto: string expected";
                if (message.data != null && message.hasOwnProperty("data"))
                    if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                        return "data: buffer expected";
                return null;
            };

            return ForwardMessage;
        })();

        server.ClientExit = (function() {

            /**
             * Properties of a ClientExit.
             * @memberof common.server
             * @interface IClientExit
             * @property {number|null} [accountid] ClientExit accountid
             */

            /**
             * Constructs a new ClientExit.
             * @memberof common.server
             * @classdesc Represents a ClientExit.
             * @implements IClientExit
             * @constructor
             * @param {common.server.IClientExit=} [properties] Properties to set
             */
            function ClientExit(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientExit accountid.
             * @member {number} accountid
             * @memberof common.server.ClientExit
             * @instance
             */
            ClientExit.prototype.accountid = 0;

            /**
             * Creates a new ClientExit instance using the specified properties.
             * @function create
             * @memberof common.server.ClientExit
             * @static
             * @param {common.server.IClientExit=} [properties] Properties to set
             * @returns {common.server.ClientExit} ClientExit instance
             */
            ClientExit.create = function create(properties) {
                return new ClientExit(properties);
            };

            /**
             * Encodes the specified ClientExit message. Does not implicitly {@link common.server.ClientExit.verify|verify} messages.
             * @function encode
             * @memberof common.server.ClientExit
             * @static
             * @param {common.server.IClientExit} message ClientExit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientExit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
                return writer;
            };

            /**
             * Encodes the specified ClientExit message, length delimited. Does not implicitly {@link common.server.ClientExit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof common.server.ClientExit
             * @static
             * @param {common.server.IClientExit} message ClientExit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientExit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientExit message from the specified reader or buffer.
             * @function decode
             * @memberof common.server.ClientExit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {common.server.ClientExit} ClientExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientExit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.server.ClientExit();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.accountid = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ClientExit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof common.server.ClientExit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {common.server.ClientExit} ClientExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientExit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientExit message.
             * @function verify
             * @memberof common.server.ClientExit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientExit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.accountid != null && message.hasOwnProperty("accountid"))
                    if (!$util.isInteger(message.accountid))
                        return "accountid: integer expected";
                return null;
            };

            return ClientExit;
        })();

        return server;
    })();

    return common;
})();

$root.gate = (function() {

    /**
     * Namespace gate.
     * @exports gate
     * @namespace
     */
    var gate = {};

    gate.Auth = (function() {

        /**
         * Properties of an Auth.
         * @memberof gate
         * @interface IAuth
         * @property {number|null} [accountid] Auth accountid
         * @property {string|null} [sessionkey] Auth sessionkey
         */

        /**
         * Constructs a new Auth.
         * @memberof gate
         * @classdesc Represents an Auth.
         * @implements IAuth
         * @constructor
         * @param {gate.IAuth=} [properties] Properties to set
         */
        function Auth(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Auth accountid.
         * @member {number} accountid
         * @memberof gate.Auth
         * @instance
         */
        Auth.prototype.accountid = 0;

        /**
         * Auth sessionkey.
         * @member {string} sessionkey
         * @memberof gate.Auth
         * @instance
         */
        Auth.prototype.sessionkey = "";

        /**
         * Creates a new Auth instance using the specified properties.
         * @function create
         * @memberof gate.Auth
         * @static
         * @param {gate.IAuth=} [properties] Properties to set
         * @returns {gate.Auth} Auth instance
         */
        Auth.create = function create(properties) {
            return new Auth(properties);
        };

        /**
         * Encodes the specified Auth message. Does not implicitly {@link gate.Auth.verify|verify} messages.
         * @function encode
         * @memberof gate.Auth
         * @static
         * @param {gate.IAuth} message Auth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Auth.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.sessionkey != null && message.hasOwnProperty("sessionkey"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionkey);
            return writer;
        };

        /**
         * Encodes the specified Auth message, length delimited. Does not implicitly {@link gate.Auth.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gate.Auth
         * @static
         * @param {gate.IAuth} message Auth message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Auth.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Auth message from the specified reader or buffer.
         * @function decode
         * @memberof gate.Auth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gate.Auth} Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Auth.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gate.Auth();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.sessionkey = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Auth message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gate.Auth
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gate.Auth} Auth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Auth.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Auth message.
         * @function verify
         * @memberof gate.Auth
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Auth.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.sessionkey != null && message.hasOwnProperty("sessionkey"))
                if (!$util.isString(message.sessionkey))
                    return "sessionkey: string expected";
            return null;
        };

        return Auth;
    })();

    return gate;
})();

$root.lobby = (function() {

    /**
     * Namespace lobby.
     * @exports lobby
     * @namespace
     */
    var lobby = {};

    lobby.QueryRole = (function() {

        /**
         * Properties of a QueryRole.
         * @memberof lobby
         * @interface IQueryRole
         * @property {number|null} [accountid] QueryRole accountid
         */

        /**
         * Constructs a new QueryRole.
         * @memberof lobby
         * @classdesc Represents a QueryRole.
         * @implements IQueryRole
         * @constructor
         * @param {lobby.IQueryRole=} [properties] Properties to set
         */
        function QueryRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryRole accountid.
         * @member {number} accountid
         * @memberof lobby.QueryRole
         * @instance
         */
        QueryRole.prototype.accountid = 0;

        /**
         * Creates a new QueryRole instance using the specified properties.
         * @function create
         * @memberof lobby.QueryRole
         * @static
         * @param {lobby.IQueryRole=} [properties] Properties to set
         * @returns {lobby.QueryRole} QueryRole instance
         */
        QueryRole.create = function create(properties) {
            return new QueryRole(properties);
        };

        /**
         * Encodes the specified QueryRole message. Does not implicitly {@link lobby.QueryRole.verify|verify} messages.
         * @function encode
         * @memberof lobby.QueryRole
         * @static
         * @param {lobby.IQueryRole} message QueryRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            return writer;
        };

        /**
         * Encodes the specified QueryRole message, length delimited. Does not implicitly {@link lobby.QueryRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.QueryRole
         * @static
         * @param {lobby.IQueryRole} message QueryRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryRole message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.QueryRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.QueryRole} QueryRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.QueryRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.QueryRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.QueryRole} QueryRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryRole message.
         * @function verify
         * @memberof lobby.QueryRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            return null;
        };

        return QueryRole;
    })();

    lobby.CreateRole = (function() {

        /**
         * Properties of a CreateRole.
         * @memberof lobby
         * @interface ICreateRole
         * @property {number|null} [accountid] CreateRole accountid
         * @property {string|null} [name] CreateRole name
         * @property {number|null} [profession] CreateRole profession
         */

        /**
         * Constructs a new CreateRole.
         * @memberof lobby
         * @classdesc Represents a CreateRole.
         * @implements ICreateRole
         * @constructor
         * @param {lobby.ICreateRole=} [properties] Properties to set
         */
        function CreateRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRole accountid.
         * @member {number} accountid
         * @memberof lobby.CreateRole
         * @instance
         */
        CreateRole.prototype.accountid = 0;

        /**
         * CreateRole name.
         * @member {string} name
         * @memberof lobby.CreateRole
         * @instance
         */
        CreateRole.prototype.name = "";

        /**
         * CreateRole profession.
         * @member {number} profession
         * @memberof lobby.CreateRole
         * @instance
         */
        CreateRole.prototype.profession = 0;

        /**
         * Creates a new CreateRole instance using the specified properties.
         * @function create
         * @memberof lobby.CreateRole
         * @static
         * @param {lobby.ICreateRole=} [properties] Properties to set
         * @returns {lobby.CreateRole} CreateRole instance
         */
        CreateRole.create = function create(properties) {
            return new CreateRole(properties);
        };

        /**
         * Encodes the specified CreateRole message. Does not implicitly {@link lobby.CreateRole.verify|verify} messages.
         * @function encode
         * @memberof lobby.CreateRole
         * @static
         * @param {lobby.ICreateRole} message CreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.profession != null && message.hasOwnProperty("profession"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.profession);
            return writer;
        };

        /**
         * Encodes the specified CreateRole message, length delimited. Does not implicitly {@link lobby.CreateRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.CreateRole
         * @static
         * @param {lobby.ICreateRole} message CreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRole message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.CreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.CreateRole} CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.CreateRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.profession = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.CreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.CreateRole} CreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRole message.
         * @function verify
         * @memberof lobby.CreateRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.profession != null && message.hasOwnProperty("profession"))
                if (!$util.isInteger(message.profession))
                    return "profession: integer expected";
            return null;
        };

        return CreateRole;
    })();

    lobby.EnterLobby = (function() {

        /**
         * Properties of an EnterLobby.
         * @memberof lobby
         * @interface IEnterLobby
         * @property {number|null} [accountid] EnterLobby accountid
         * @property {number|null} [roleid] EnterLobby roleid
         */

        /**
         * Constructs a new EnterLobby.
         * @memberof lobby
         * @classdesc Represents an EnterLobby.
         * @implements IEnterLobby
         * @constructor
         * @param {lobby.IEnterLobby=} [properties] Properties to set
         */
        function EnterLobby(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterLobby accountid.
         * @member {number} accountid
         * @memberof lobby.EnterLobby
         * @instance
         */
        EnterLobby.prototype.accountid = 0;

        /**
         * EnterLobby roleid.
         * @member {number} roleid
         * @memberof lobby.EnterLobby
         * @instance
         */
        EnterLobby.prototype.roleid = 0;

        /**
         * Creates a new EnterLobby instance using the specified properties.
         * @function create
         * @memberof lobby.EnterLobby
         * @static
         * @param {lobby.IEnterLobby=} [properties] Properties to set
         * @returns {lobby.EnterLobby} EnterLobby instance
         */
        EnterLobby.create = function create(properties) {
            return new EnterLobby(properties);
        };

        /**
         * Encodes the specified EnterLobby message. Does not implicitly {@link lobby.EnterLobby.verify|verify} messages.
         * @function encode
         * @memberof lobby.EnterLobby
         * @static
         * @param {lobby.IEnterLobby} message EnterLobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterLobby.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roleid);
            return writer;
        };

        /**
         * Encodes the specified EnterLobby message, length delimited. Does not implicitly {@link lobby.EnterLobby.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.EnterLobby
         * @static
         * @param {lobby.IEnterLobby} message EnterLobby message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterLobby.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterLobby message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.EnterLobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.EnterLobby} EnterLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterLobby.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.EnterLobby();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.roleid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterLobby message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.EnterLobby
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.EnterLobby} EnterLobby
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterLobby.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterLobby message.
         * @function verify
         * @memberof lobby.EnterLobby
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterLobby.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (!$util.isInteger(message.roleid))
                    return "roleid: integer expected";
            return null;
        };

        return EnterLobby;
    })();

    lobby.QueryRoleRes = (function() {

        /**
         * Properties of a QueryRoleRes.
         * @memberof lobby
         * @interface IQueryRoleRes
         * @property {number|null} [accountid] QueryRoleRes accountid
         * @property {Array.<number>|null} [role_ids] QueryRoleRes role_ids
         * @property {Array.<string>|null} [role_names] QueryRoleRes role_names
         */

        /**
         * Constructs a new QueryRoleRes.
         * @memberof lobby
         * @classdesc Represents a QueryRoleRes.
         * @implements IQueryRoleRes
         * @constructor
         * @param {lobby.IQueryRoleRes=} [properties] Properties to set
         */
        function QueryRoleRes(properties) {
            this.role_ids = [];
            this.role_names = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QueryRoleRes accountid.
         * @member {number} accountid
         * @memberof lobby.QueryRoleRes
         * @instance
         */
        QueryRoleRes.prototype.accountid = 0;

        /**
         * QueryRoleRes role_ids.
         * @member {Array.<number>} role_ids
         * @memberof lobby.QueryRoleRes
         * @instance
         */
        QueryRoleRes.prototype.role_ids = $util.emptyArray;

        /**
         * QueryRoleRes role_names.
         * @member {Array.<string>} role_names
         * @memberof lobby.QueryRoleRes
         * @instance
         */
        QueryRoleRes.prototype.role_names = $util.emptyArray;

        /**
         * Creates a new QueryRoleRes instance using the specified properties.
         * @function create
         * @memberof lobby.QueryRoleRes
         * @static
         * @param {lobby.IQueryRoleRes=} [properties] Properties to set
         * @returns {lobby.QueryRoleRes} QueryRoleRes instance
         */
        QueryRoleRes.create = function create(properties) {
            return new QueryRoleRes(properties);
        };

        /**
         * Encodes the specified QueryRoleRes message. Does not implicitly {@link lobby.QueryRoleRes.verify|verify} messages.
         * @function encode
         * @memberof lobby.QueryRoleRes
         * @static
         * @param {lobby.IQueryRoleRes} message QueryRoleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRoleRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.role_ids != null && message.role_ids.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.role_ids.length; ++i)
                    writer.int32(message.role_ids[i]);
                writer.ldelim();
            }
            if (message.role_names != null && message.role_names.length)
                for (var i = 0; i < message.role_names.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.role_names[i]);
            return writer;
        };

        /**
         * Encodes the specified QueryRoleRes message, length delimited. Does not implicitly {@link lobby.QueryRoleRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.QueryRoleRes
         * @static
         * @param {lobby.IQueryRoleRes} message QueryRoleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QueryRoleRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QueryRoleRes message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.QueryRoleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.QueryRoleRes} QueryRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryRoleRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.QueryRoleRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    if (!(message.role_ids && message.role_ids.length))
                        message.role_ids = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.role_ids.push(reader.int32());
                    } else
                        message.role_ids.push(reader.int32());
                    break;
                case 3:
                    if (!(message.role_names && message.role_names.length))
                        message.role_names = [];
                    message.role_names.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QueryRoleRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.QueryRoleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.QueryRoleRes} QueryRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QueryRoleRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QueryRoleRes message.
         * @function verify
         * @memberof lobby.QueryRoleRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QueryRoleRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.role_ids != null && message.hasOwnProperty("role_ids")) {
                if (!Array.isArray(message.role_ids))
                    return "role_ids: array expected";
                for (var i = 0; i < message.role_ids.length; ++i)
                    if (!$util.isInteger(message.role_ids[i]))
                        return "role_ids: integer[] expected";
            }
            if (message.role_names != null && message.hasOwnProperty("role_names")) {
                if (!Array.isArray(message.role_names))
                    return "role_names: array expected";
                for (var i = 0; i < message.role_names.length; ++i)
                    if (!$util.isString(message.role_names[i]))
                        return "role_names: string[] expected";
            }
            return null;
        };

        return QueryRoleRes;
    })();

    lobby.CreateRoleRes = (function() {

        /**
         * Properties of a CreateRoleRes.
         * @memberof lobby
         * @interface ICreateRoleRes
         * @property {number|null} [error_code] CreateRoleRes error_code
         * @property {number|null} [accountid] CreateRoleRes accountid
         * @property {number|null} [role_id] CreateRoleRes role_id
         * @property {string|null} [role_name] CreateRoleRes role_name
         */

        /**
         * Constructs a new CreateRoleRes.
         * @memberof lobby
         * @classdesc Represents a CreateRoleRes.
         * @implements ICreateRoleRes
         * @constructor
         * @param {lobby.ICreateRoleRes=} [properties] Properties to set
         */
        function CreateRoleRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoleRes error_code.
         * @member {number} error_code
         * @memberof lobby.CreateRoleRes
         * @instance
         */
        CreateRoleRes.prototype.error_code = 0;

        /**
         * CreateRoleRes accountid.
         * @member {number} accountid
         * @memberof lobby.CreateRoleRes
         * @instance
         */
        CreateRoleRes.prototype.accountid = 0;

        /**
         * CreateRoleRes role_id.
         * @member {number} role_id
         * @memberof lobby.CreateRoleRes
         * @instance
         */
        CreateRoleRes.prototype.role_id = 0;

        /**
         * CreateRoleRes role_name.
         * @member {string} role_name
         * @memberof lobby.CreateRoleRes
         * @instance
         */
        CreateRoleRes.prototype.role_name = "";

        /**
         * Creates a new CreateRoleRes instance using the specified properties.
         * @function create
         * @memberof lobby.CreateRoleRes
         * @static
         * @param {lobby.ICreateRoleRes=} [properties] Properties to set
         * @returns {lobby.CreateRoleRes} CreateRoleRes instance
         */
        CreateRoleRes.create = function create(properties) {
            return new CreateRoleRes(properties);
        };

        /**
         * Encodes the specified CreateRoleRes message. Does not implicitly {@link lobby.CreateRoleRes.verify|verify} messages.
         * @function encode
         * @memberof lobby.CreateRoleRes
         * @static
         * @param {lobby.ICreateRoleRes} message CreateRoleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.error_code != null && message.hasOwnProperty("error_code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.error_code);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accountid);
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.role_id);
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.role_name);
            return writer;
        };

        /**
         * Encodes the specified CreateRoleRes message, length delimited. Does not implicitly {@link lobby.CreateRoleRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.CreateRoleRes
         * @static
         * @param {lobby.ICreateRoleRes} message CreateRoleRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoleRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoleRes message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.CreateRoleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.CreateRoleRes} CreateRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.CreateRoleRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.error_code = reader.int32();
                    break;
                case 2:
                    message.accountid = reader.int32();
                    break;
                case 3:
                    message.role_id = reader.int32();
                    break;
                case 4:
                    message.role_name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoleRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.CreateRoleRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.CreateRoleRes} CreateRoleRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoleRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoleRes message.
         * @function verify
         * @memberof lobby.CreateRoleRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoleRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.error_code != null && message.hasOwnProperty("error_code"))
                if (!$util.isInteger(message.error_code))
                    return "error_code: integer expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.role_id != null && message.hasOwnProperty("role_id"))
                if (!$util.isInteger(message.role_id))
                    return "role_id: integer expected";
            if (message.role_name != null && message.hasOwnProperty("role_name"))
                if (!$util.isString(message.role_name))
                    return "role_name: string expected";
            return null;
        };

        return CreateRoleRes;
    })();

    lobby.EnterLobbyRes = (function() {

        /**
         * Properties of an EnterLobbyRes.
         * @memberof lobby
         * @interface IEnterLobbyRes
         * @property {number|null} [roleid] EnterLobbyRes roleid
         * @property {number|null} [accountid] EnterLobbyRes accountid
         * @property {string|null} [rolename] EnterLobbyRes rolename
         * @property {number|null} [profession] EnterLobbyRes profession
         * @property {number|null} [mapid] EnterLobbyRes mapid
         * @property {number|null} [attack] EnterLobbyRes attack
         * @property {number|null} [blood] EnterLobbyRes blood
         * @property {number|null} [defense] EnterLobbyRes defense
         * @property {number|null} [glod] EnterLobbyRes glod
         * @property {number|null} [grade] EnterLobbyRes grade
         * @property {number|null} [mana] EnterLobbyRes mana
         * @property {number|null} [speed] EnterLobbyRes speed
         * @property {number|null} [exp] EnterLobbyRes exp
         * @property {number|null} [posx] EnterLobbyRes posx
         * @property {number|null} [posy] EnterLobbyRes posy
         */

        /**
         * Constructs a new EnterLobbyRes.
         * @memberof lobby
         * @classdesc Represents an EnterLobbyRes.
         * @implements IEnterLobbyRes
         * @constructor
         * @param {lobby.IEnterLobbyRes=} [properties] Properties to set
         */
        function EnterLobbyRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterLobbyRes roleid.
         * @member {number} roleid
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.roleid = 0;

        /**
         * EnterLobbyRes accountid.
         * @member {number} accountid
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.accountid = 0;

        /**
         * EnterLobbyRes rolename.
         * @member {string} rolename
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.rolename = "";

        /**
         * EnterLobbyRes profession.
         * @member {number} profession
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.profession = 0;

        /**
         * EnterLobbyRes mapid.
         * @member {number} mapid
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.mapid = 0;

        /**
         * EnterLobbyRes attack.
         * @member {number} attack
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.attack = 0;

        /**
         * EnterLobbyRes blood.
         * @member {number} blood
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.blood = 0;

        /**
         * EnterLobbyRes defense.
         * @member {number} defense
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.defense = 0;

        /**
         * EnterLobbyRes glod.
         * @member {number} glod
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.glod = 0;

        /**
         * EnterLobbyRes grade.
         * @member {number} grade
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.grade = 0;

        /**
         * EnterLobbyRes mana.
         * @member {number} mana
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.mana = 0;

        /**
         * EnterLobbyRes speed.
         * @member {number} speed
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.speed = 0;

        /**
         * EnterLobbyRes exp.
         * @member {number} exp
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.exp = 0;

        /**
         * EnterLobbyRes posx.
         * @member {number} posx
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.posx = 0;

        /**
         * EnterLobbyRes posy.
         * @member {number} posy
         * @memberof lobby.EnterLobbyRes
         * @instance
         */
        EnterLobbyRes.prototype.posy = 0;

        /**
         * Creates a new EnterLobbyRes instance using the specified properties.
         * @function create
         * @memberof lobby.EnterLobbyRes
         * @static
         * @param {lobby.IEnterLobbyRes=} [properties] Properties to set
         * @returns {lobby.EnterLobbyRes} EnterLobbyRes instance
         */
        EnterLobbyRes.create = function create(properties) {
            return new EnterLobbyRes(properties);
        };

        /**
         * Encodes the specified EnterLobbyRes message. Does not implicitly {@link lobby.EnterLobbyRes.verify|verify} messages.
         * @function encode
         * @memberof lobby.EnterLobbyRes
         * @static
         * @param {lobby.IEnterLobbyRes} message EnterLobbyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterLobbyRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleid);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accountid);
            if (message.rolename != null && message.hasOwnProperty("rolename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.rolename);
            if (message.profession != null && message.hasOwnProperty("profession"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.profession);
            if (message.mapid != null && message.hasOwnProperty("mapid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.mapid);
            if (message.attack != null && message.hasOwnProperty("attack"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.attack);
            if (message.blood != null && message.hasOwnProperty("blood"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.blood);
            if (message.defense != null && message.hasOwnProperty("defense"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.defense);
            if (message.glod != null && message.hasOwnProperty("glod"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.glod);
            if (message.grade != null && message.hasOwnProperty("grade"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.grade);
            if (message.mana != null && message.hasOwnProperty("mana"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.mana);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.speed);
            if (message.exp != null && message.hasOwnProperty("exp"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.exp);
            if (message.posx != null && message.hasOwnProperty("posx"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.posx);
            if (message.posy != null && message.hasOwnProperty("posy"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.posy);
            return writer;
        };

        /**
         * Encodes the specified EnterLobbyRes message, length delimited. Does not implicitly {@link lobby.EnterLobbyRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.EnterLobbyRes
         * @static
         * @param {lobby.IEnterLobbyRes} message EnterLobbyRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterLobbyRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterLobbyRes message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.EnterLobbyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.EnterLobbyRes} EnterLobbyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterLobbyRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.EnterLobbyRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleid = reader.int32();
                    break;
                case 2:
                    message.accountid = reader.int32();
                    break;
                case 3:
                    message.rolename = reader.string();
                    break;
                case 4:
                    message.profession = reader.int32();
                    break;
                case 5:
                    message.mapid = reader.int32();
                    break;
                case 6:
                    message.attack = reader.int32();
                    break;
                case 7:
                    message.blood = reader.int32();
                    break;
                case 8:
                    message.defense = reader.int32();
                    break;
                case 9:
                    message.glod = reader.int32();
                    break;
                case 10:
                    message.grade = reader.int32();
                    break;
                case 11:
                    message.mana = reader.int32();
                    break;
                case 12:
                    message.speed = reader.int32();
                    break;
                case 13:
                    message.exp = reader.int32();
                    break;
                case 14:
                    message.posx = reader.int32();
                    break;
                case 15:
                    message.posy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterLobbyRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.EnterLobbyRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.EnterLobbyRes} EnterLobbyRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterLobbyRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterLobbyRes message.
         * @function verify
         * @memberof lobby.EnterLobbyRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterLobbyRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (!$util.isInteger(message.roleid))
                    return "roleid: integer expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.rolename != null && message.hasOwnProperty("rolename"))
                if (!$util.isString(message.rolename))
                    return "rolename: string expected";
            if (message.profession != null && message.hasOwnProperty("profession"))
                if (!$util.isInteger(message.profession))
                    return "profession: integer expected";
            if (message.mapid != null && message.hasOwnProperty("mapid"))
                if (!$util.isInteger(message.mapid))
                    return "mapid: integer expected";
            if (message.attack != null && message.hasOwnProperty("attack"))
                if (!$util.isInteger(message.attack))
                    return "attack: integer expected";
            if (message.blood != null && message.hasOwnProperty("blood"))
                if (!$util.isInteger(message.blood))
                    return "blood: integer expected";
            if (message.defense != null && message.hasOwnProperty("defense"))
                if (!$util.isInteger(message.defense))
                    return "defense: integer expected";
            if (message.glod != null && message.hasOwnProperty("glod"))
                if (!$util.isInteger(message.glod))
                    return "glod: integer expected";
            if (message.grade != null && message.hasOwnProperty("grade"))
                if (!$util.isInteger(message.grade))
                    return "grade: integer expected";
            if (message.mana != null && message.hasOwnProperty("mana"))
                if (!$util.isInteger(message.mana))
                    return "mana: integer expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            if (message.exp != null && message.hasOwnProperty("exp"))
                if (!$util.isInteger(message.exp))
                    return "exp: integer expected";
            if (message.posx != null && message.hasOwnProperty("posx"))
                if (!$util.isInteger(message.posx))
                    return "posx: integer expected";
            if (message.posy != null && message.hasOwnProperty("posy"))
                if (!$util.isInteger(message.posy))
                    return "posy: integer expected";
            return null;
        };

        return EnterLobbyRes;
    })();

    lobby.LoadComplete = (function() {

        /**
         * Properties of a LoadComplete.
         * @memberof lobby
         * @interface ILoadComplete
         * @property {number|null} [accountid] LoadComplete accountid
         */

        /**
         * Constructs a new LoadComplete.
         * @memberof lobby
         * @classdesc Represents a LoadComplete.
         * @implements ILoadComplete
         * @constructor
         * @param {lobby.ILoadComplete=} [properties] Properties to set
         */
        function LoadComplete(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoadComplete accountid.
         * @member {number} accountid
         * @memberof lobby.LoadComplete
         * @instance
         */
        LoadComplete.prototype.accountid = 0;

        /**
         * Creates a new LoadComplete instance using the specified properties.
         * @function create
         * @memberof lobby.LoadComplete
         * @static
         * @param {lobby.ILoadComplete=} [properties] Properties to set
         * @returns {lobby.LoadComplete} LoadComplete instance
         */
        LoadComplete.create = function create(properties) {
            return new LoadComplete(properties);
        };

        /**
         * Encodes the specified LoadComplete message. Does not implicitly {@link lobby.LoadComplete.verify|verify} messages.
         * @function encode
         * @memberof lobby.LoadComplete
         * @static
         * @param {lobby.ILoadComplete} message LoadComplete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoadComplete.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            return writer;
        };

        /**
         * Encodes the specified LoadComplete message, length delimited. Does not implicitly {@link lobby.LoadComplete.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.LoadComplete
         * @static
         * @param {lobby.ILoadComplete} message LoadComplete message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoadComplete.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoadComplete message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.LoadComplete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.LoadComplete} LoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoadComplete.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.LoadComplete();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoadComplete message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.LoadComplete
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.LoadComplete} LoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoadComplete.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoadComplete message.
         * @function verify
         * @memberof lobby.LoadComplete
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoadComplete.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            return null;
        };

        return LoadComplete;
    })();

    lobby.LeaveSight = (function() {

        /**
         * Properties of a LeaveSight.
         * @memberof lobby
         * @interface ILeaveSight
         * @property {number|null} [accountid] LeaveSight accountid
         * @property {number|null} [roleid] LeaveSight roleid
         */

        /**
         * Constructs a new LeaveSight.
         * @memberof lobby
         * @classdesc Represents a LeaveSight.
         * @implements ILeaveSight
         * @constructor
         * @param {lobby.ILeaveSight=} [properties] Properties to set
         */
        function LeaveSight(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveSight accountid.
         * @member {number} accountid
         * @memberof lobby.LeaveSight
         * @instance
         */
        LeaveSight.prototype.accountid = 0;

        /**
         * LeaveSight roleid.
         * @member {number} roleid
         * @memberof lobby.LeaveSight
         * @instance
         */
        LeaveSight.prototype.roleid = 0;

        /**
         * Creates a new LeaveSight instance using the specified properties.
         * @function create
         * @memberof lobby.LeaveSight
         * @static
         * @param {lobby.ILeaveSight=} [properties] Properties to set
         * @returns {lobby.LeaveSight} LeaveSight instance
         */
        LeaveSight.create = function create(properties) {
            return new LeaveSight(properties);
        };

        /**
         * Encodes the specified LeaveSight message. Does not implicitly {@link lobby.LeaveSight.verify|verify} messages.
         * @function encode
         * @memberof lobby.LeaveSight
         * @static
         * @param {lobby.ILeaveSight} message LeaveSight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveSight.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roleid);
            return writer;
        };

        /**
         * Encodes the specified LeaveSight message, length delimited. Does not implicitly {@link lobby.LeaveSight.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.LeaveSight
         * @static
         * @param {lobby.ILeaveSight} message LeaveSight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveSight.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveSight message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.LeaveSight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.LeaveSight} LeaveSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveSight.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.LeaveSight();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.roleid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveSight message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.LeaveSight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.LeaveSight} LeaveSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveSight.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveSight message.
         * @function verify
         * @memberof lobby.LeaveSight
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveSight.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (!$util.isInteger(message.roleid))
                    return "roleid: integer expected";
            return null;
        };

        return LeaveSight;
    })();

    lobby.EnterSight = (function() {

        /**
         * Properties of an EnterSight.
         * @memberof lobby
         * @interface IEnterSight
         * @property {number|null} [accountid] EnterSight accountid
         * @property {number|null} [mapid] EnterSight mapid
         * @property {number|null} [roleid] EnterSight roleid
         * @property {string|null} [rolename] EnterSight rolename
         * @property {number|null} [profession] EnterSight profession
         * @property {number|null} [posx] EnterSight posx
         * @property {number|null} [posy] EnterSight posy
         * @property {number|null} [blood] EnterSight blood
         * @property {number|null} [speed] EnterSight speed
         */

        /**
         * Constructs a new EnterSight.
         * @memberof lobby
         * @classdesc Represents an EnterSight.
         * @implements IEnterSight
         * @constructor
         * @param {lobby.IEnterSight=} [properties] Properties to set
         */
        function EnterSight(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterSight accountid.
         * @member {number} accountid
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.accountid = 0;

        /**
         * EnterSight mapid.
         * @member {number} mapid
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.mapid = 0;

        /**
         * EnterSight roleid.
         * @member {number} roleid
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.roleid = 0;

        /**
         * EnterSight rolename.
         * @member {string} rolename
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.rolename = "";

        /**
         * EnterSight profession.
         * @member {number} profession
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.profession = 0;

        /**
         * EnterSight posx.
         * @member {number} posx
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.posx = 0;

        /**
         * EnterSight posy.
         * @member {number} posy
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.posy = 0;

        /**
         * EnterSight blood.
         * @member {number} blood
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.blood = 0;

        /**
         * EnterSight speed.
         * @member {number} speed
         * @memberof lobby.EnterSight
         * @instance
         */
        EnterSight.prototype.speed = 0;

        /**
         * Creates a new EnterSight instance using the specified properties.
         * @function create
         * @memberof lobby.EnterSight
         * @static
         * @param {lobby.IEnterSight=} [properties] Properties to set
         * @returns {lobby.EnterSight} EnterSight instance
         */
        EnterSight.create = function create(properties) {
            return new EnterSight(properties);
        };

        /**
         * Encodes the specified EnterSight message. Does not implicitly {@link lobby.EnterSight.verify|verify} messages.
         * @function encode
         * @memberof lobby.EnterSight
         * @static
         * @param {lobby.IEnterSight} message EnterSight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterSight.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.mapid != null && message.hasOwnProperty("mapid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mapid);
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roleid);
            if (message.rolename != null && message.hasOwnProperty("rolename"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.rolename);
            if (message.profession != null && message.hasOwnProperty("profession"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.profession);
            if (message.posx != null && message.hasOwnProperty("posx"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.posx);
            if (message.posy != null && message.hasOwnProperty("posy"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.posy);
            if (message.blood != null && message.hasOwnProperty("blood"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.blood);
            if (message.speed != null && message.hasOwnProperty("speed"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.speed);
            return writer;
        };

        /**
         * Encodes the specified EnterSight message, length delimited. Does not implicitly {@link lobby.EnterSight.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.EnterSight
         * @static
         * @param {lobby.IEnterSight} message EnterSight message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterSight.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterSight message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.EnterSight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.EnterSight} EnterSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterSight.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.EnterSight();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.mapid = reader.int32();
                    break;
                case 3:
                    message.roleid = reader.int32();
                    break;
                case 4:
                    message.rolename = reader.string();
                    break;
                case 5:
                    message.profession = reader.int32();
                    break;
                case 6:
                    message.posx = reader.int32();
                    break;
                case 7:
                    message.posy = reader.int32();
                    break;
                case 8:
                    message.blood = reader.int32();
                    break;
                case 9:
                    message.speed = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterSight message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.EnterSight
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.EnterSight} EnterSight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterSight.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterSight message.
         * @function verify
         * @memberof lobby.EnterSight
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterSight.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.mapid != null && message.hasOwnProperty("mapid"))
                if (!$util.isInteger(message.mapid))
                    return "mapid: integer expected";
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                if (!$util.isInteger(message.roleid))
                    return "roleid: integer expected";
            if (message.rolename != null && message.hasOwnProperty("rolename"))
                if (!$util.isString(message.rolename))
                    return "rolename: string expected";
            if (message.profession != null && message.hasOwnProperty("profession"))
                if (!$util.isInteger(message.profession))
                    return "profession: integer expected";
            if (message.posx != null && message.hasOwnProperty("posx"))
                if (!$util.isInteger(message.posx))
                    return "posx: integer expected";
            if (message.posy != null && message.hasOwnProperty("posy"))
                if (!$util.isInteger(message.posy))
                    return "posy: integer expected";
            if (message.blood != null && message.hasOwnProperty("blood"))
                if (!$util.isInteger(message.blood))
                    return "blood: integer expected";
            if (message.speed != null && message.hasOwnProperty("speed"))
                if (!$util.isInteger(message.speed))
                    return "speed: integer expected";
            return null;
        };

        return EnterSight;
    })();

    lobby.MoveReq = (function() {

        /**
         * Properties of a MoveReq.
         * @memberof lobby
         * @interface IMoveReq
         * @property {number|null} [accountid] MoveReq accountid
         * @property {number|null} [posx] MoveReq posx
         * @property {number|null} [posy] MoveReq posy
         */

        /**
         * Constructs a new MoveReq.
         * @memberof lobby
         * @classdesc Represents a MoveReq.
         * @implements IMoveReq
         * @constructor
         * @param {lobby.IMoveReq=} [properties] Properties to set
         */
        function MoveReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MoveReq accountid.
         * @member {number} accountid
         * @memberof lobby.MoveReq
         * @instance
         */
        MoveReq.prototype.accountid = 0;

        /**
         * MoveReq posx.
         * @member {number} posx
         * @memberof lobby.MoveReq
         * @instance
         */
        MoveReq.prototype.posx = 0;

        /**
         * MoveReq posy.
         * @member {number} posy
         * @memberof lobby.MoveReq
         * @instance
         */
        MoveReq.prototype.posy = 0;

        /**
         * Creates a new MoveReq instance using the specified properties.
         * @function create
         * @memberof lobby.MoveReq
         * @static
         * @param {lobby.IMoveReq=} [properties] Properties to set
         * @returns {lobby.MoveReq} MoveReq instance
         */
        MoveReq.create = function create(properties) {
            return new MoveReq(properties);
        };

        /**
         * Encodes the specified MoveReq message. Does not implicitly {@link lobby.MoveReq.verify|verify} messages.
         * @function encode
         * @memberof lobby.MoveReq
         * @static
         * @param {lobby.IMoveReq} message MoveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.posx != null && message.hasOwnProperty("posx"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.posx);
            if (message.posy != null && message.hasOwnProperty("posy"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.posy);
            return writer;
        };

        /**
         * Encodes the specified MoveReq message, length delimited. Does not implicitly {@link lobby.MoveReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.MoveReq
         * @static
         * @param {lobby.IMoveReq} message MoveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoveReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MoveReq message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.MoveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.MoveReq} MoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.MoveReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.posx = reader.int32();
                    break;
                case 3:
                    message.posy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MoveReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.MoveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.MoveReq} MoveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoveReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MoveReq message.
         * @function verify
         * @memberof lobby.MoveReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MoveReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.posx != null && message.hasOwnProperty("posx"))
                if (!$util.isInteger(message.posx))
                    return "posx: integer expected";
            if (message.posy != null && message.hasOwnProperty("posy"))
                if (!$util.isInteger(message.posy))
                    return "posy: integer expected";
            return null;
        };

        return MoveReq;
    })();

    lobby.MoveRes = (function() {

        /**
         * Properties of a MoveRes.
         * @memberof lobby
         * @interface IMoveRes
         * @property {number|null} [accountid] MoveRes accountid
         * @property {number|null} [moverid] MoveRes moverid
         * @property {number|null} [posx] MoveRes posx
         * @property {number|null} [posy] MoveRes posy
         */

        /**
         * Constructs a new MoveRes.
         * @memberof lobby
         * @classdesc Represents a MoveRes.
         * @implements IMoveRes
         * @constructor
         * @param {lobby.IMoveRes=} [properties] Properties to set
         */
        function MoveRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MoveRes accountid.
         * @member {number} accountid
         * @memberof lobby.MoveRes
         * @instance
         */
        MoveRes.prototype.accountid = 0;

        /**
         * MoveRes moverid.
         * @member {number} moverid
         * @memberof lobby.MoveRes
         * @instance
         */
        MoveRes.prototype.moverid = 0;

        /**
         * MoveRes posx.
         * @member {number} posx
         * @memberof lobby.MoveRes
         * @instance
         */
        MoveRes.prototype.posx = 0;

        /**
         * MoveRes posy.
         * @member {number} posy
         * @memberof lobby.MoveRes
         * @instance
         */
        MoveRes.prototype.posy = 0;

        /**
         * Creates a new MoveRes instance using the specified properties.
         * @function create
         * @memberof lobby.MoveRes
         * @static
         * @param {lobby.IMoveRes=} [properties] Properties to set
         * @returns {lobby.MoveRes} MoveRes instance
         */
        MoveRes.create = function create(properties) {
            return new MoveRes(properties);
        };

        /**
         * Encodes the specified MoveRes message. Does not implicitly {@link lobby.MoveRes.verify|verify} messages.
         * @function encode
         * @memberof lobby.MoveRes
         * @static
         * @param {lobby.IMoveRes} message MoveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoveRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountid);
            if (message.moverid != null && message.hasOwnProperty("moverid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.moverid);
            if (message.posx != null && message.hasOwnProperty("posx"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.posx);
            if (message.posy != null && message.hasOwnProperty("posy"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.posy);
            return writer;
        };

        /**
         * Encodes the specified MoveRes message, length delimited. Does not implicitly {@link lobby.MoveRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.MoveRes
         * @static
         * @param {lobby.IMoveRes} message MoveRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoveRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MoveRes message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.MoveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.MoveRes} MoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoveRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.MoveRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.accountid = reader.int32();
                    break;
                case 2:
                    message.moverid = reader.int32();
                    break;
                case 3:
                    message.posx = reader.int32();
                    break;
                case 4:
                    message.posy = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MoveRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.MoveRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.MoveRes} MoveRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoveRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MoveRes message.
         * @function verify
         * @memberof lobby.MoveRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MoveRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            if (message.moverid != null && message.hasOwnProperty("moverid"))
                if (!$util.isInteger(message.moverid))
                    return "moverid: integer expected";
            if (message.posx != null && message.hasOwnProperty("posx"))
                if (!$util.isInteger(message.posx))
                    return "posx: integer expected";
            if (message.posy != null && message.hasOwnProperty("posy"))
                if (!$util.isInteger(message.posy))
                    return "posy: integer expected";
            return null;
        };

        return MoveRes;
    })();

    return lobby;
})();

$root.login = (function() {

    /**
     * Namespace login.
     * @exports login
     * @namespace
     */
    var login = {};

    login.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof login
         * @interface IRegisterReq
         * @property {string|null} [account] RegisterReq account
         * @property {string|null} [passwd] RegisterReq passwd
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof login
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {login.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq account.
         * @member {string} account
         * @memberof login.RegisterReq
         * @instance
         */
        RegisterReq.prototype.account = "";

        /**
         * RegisterReq passwd.
         * @member {string} passwd
         * @memberof login.RegisterReq
         * @instance
         */
        RegisterReq.prototype.passwd = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof login.RegisterReq
         * @static
         * @param {login.IRegisterReq=} [properties] Properties to set
         * @returns {login.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof login.RegisterReq
         * @static
         * @param {login.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link login.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.RegisterReq
         * @static
         * @param {login.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof login.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.passwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof login.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        return RegisterReq;
    })();

    login.RegisterRes = (function() {

        /**
         * Properties of a RegisterRes.
         * @memberof login
         * @interface IRegisterRes
         * @property {number|null} [errcode] RegisterRes errcode
         */

        /**
         * Constructs a new RegisterRes.
         * @memberof login
         * @classdesc Represents a RegisterRes.
         * @implements IRegisterRes
         * @constructor
         * @param {login.IRegisterRes=} [properties] Properties to set
         */
        function RegisterRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRes errcode.
         * @member {number} errcode
         * @memberof login.RegisterRes
         * @instance
         */
        RegisterRes.prototype.errcode = 0;

        /**
         * Creates a new RegisterRes instance using the specified properties.
         * @function create
         * @memberof login.RegisterRes
         * @static
         * @param {login.IRegisterRes=} [properties] Properties to set
         * @returns {login.RegisterRes} RegisterRes instance
         */
        RegisterRes.create = function create(properties) {
            return new RegisterRes(properties);
        };

        /**
         * Encodes the specified RegisterRes message. Does not implicitly {@link login.RegisterRes.verify|verify} messages.
         * @function encode
         * @memberof login.RegisterRes
         * @static
         * @param {login.IRegisterRes} message RegisterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            return writer;
        };

        /**
         * Encodes the specified RegisterRes message, length delimited. Does not implicitly {@link login.RegisterRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.RegisterRes
         * @static
         * @param {login.IRegisterRes} message RegisterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRes message from the specified reader or buffer.
         * @function decode
         * @memberof login.RegisterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.RegisterRes} RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.RegisterRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.RegisterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.RegisterRes} RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRes message.
         * @function verify
         * @memberof login.RegisterRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            return null;
        };

        return RegisterRes;
    })();

    login.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof login
         * @interface ILoginReq
         * @property {string|null} [account] LoginReq account
         * @property {string|null} [passwd] LoginReq passwd
         */

        /**
         * Constructs a new LoginReq.
         * @memberof login
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {login.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq account.
         * @member {string} account
         * @memberof login.LoginReq
         * @instance
         */
        LoginReq.prototype.account = "";

        /**
         * LoginReq passwd.
         * @member {string} passwd
         * @memberof login.LoginReq
         * @instance
         */
        LoginReq.prototype.passwd = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof login.LoginReq
         * @static
         * @param {login.ILoginReq=} [properties] Properties to set
         * @returns {login.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof login.LoginReq
         * @static
         * @param {login.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link login.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.LoginReq
         * @static
         * @param {login.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof login.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.passwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof login.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        return LoginReq;
    })();

    login.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof login
         * @interface ILoginRes
         * @property {number|null} [errcode] LoginRes errcode
         * @property {number|null} [accountid] LoginRes accountid
         */

        /**
         * Constructs a new LoginRes.
         * @memberof login
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {login.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes errcode.
         * @member {number} errcode
         * @memberof login.LoginRes
         * @instance
         */
        LoginRes.prototype.errcode = 0;

        /**
         * LoginRes accountid.
         * @member {number} accountid
         * @memberof login.LoginRes
         * @instance
         */
        LoginRes.prototype.accountid = 0;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof login.LoginRes
         * @static
         * @param {login.ILoginRes=} [properties] Properties to set
         * @returns {login.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link login.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof login.LoginRes
         * @static
         * @param {login.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errcode);
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.accountid);
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link login.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.LoginRes
         * @static
         * @param {login.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof login.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.errcode = reader.int32();
                    break;
                case 2:
                    message.accountid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof login.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errcode != null && message.hasOwnProperty("errcode"))
                if (!$util.isInteger(message.errcode))
                    return "errcode: integer expected";
            if (message.accountid != null && message.hasOwnProperty("accountid"))
                if (!$util.isInteger(message.accountid))
                    return "accountid: integer expected";
            return null;
        };

        return LoginRes;
    })();

    login.GateInfo = (function() {

        /**
         * Properties of a GateInfo.
         * @memberof login
         * @interface IGateInfo
         * @property {number|null} [server_status] GateInfo server_status
         * @property {string|null} [gate_host] GateInfo gate_host
         * @property {number|null} [gate_port] GateInfo gate_port
         */

        /**
         * Constructs a new GateInfo.
         * @memberof login
         * @classdesc Represents a GateInfo.
         * @implements IGateInfo
         * @constructor
         * @param {login.IGateInfo=} [properties] Properties to set
         */
        function GateInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GateInfo server_status.
         * @member {number} server_status
         * @memberof login.GateInfo
         * @instance
         */
        GateInfo.prototype.server_status = 0;

        /**
         * GateInfo gate_host.
         * @member {string} gate_host
         * @memberof login.GateInfo
         * @instance
         */
        GateInfo.prototype.gate_host = "";

        /**
         * GateInfo gate_port.
         * @member {number} gate_port
         * @memberof login.GateInfo
         * @instance
         */
        GateInfo.prototype.gate_port = 0;

        /**
         * Creates a new GateInfo instance using the specified properties.
         * @function create
         * @memberof login.GateInfo
         * @static
         * @param {login.IGateInfo=} [properties] Properties to set
         * @returns {login.GateInfo} GateInfo instance
         */
        GateInfo.create = function create(properties) {
            return new GateInfo(properties);
        };

        /**
         * Encodes the specified GateInfo message. Does not implicitly {@link login.GateInfo.verify|verify} messages.
         * @function encode
         * @memberof login.GateInfo
         * @static
         * @param {login.IGateInfo} message GateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_status != null && message.hasOwnProperty("server_status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.server_status);
            if (message.gate_host != null && message.hasOwnProperty("gate_host"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gate_host);
            if (message.gate_port != null && message.hasOwnProperty("gate_port"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gate_port);
            return writer;
        };

        /**
         * Encodes the specified GateInfo message, length delimited. Does not implicitly {@link login.GateInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.GateInfo
         * @static
         * @param {login.IGateInfo} message GateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GateInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GateInfo message from the specified reader or buffer.
         * @function decode
         * @memberof login.GateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.GateInfo} GateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.GateInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.server_status = reader.int32();
                    break;
                case 2:
                    message.gate_host = reader.string();
                    break;
                case 3:
                    message.gate_port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GateInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.GateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.GateInfo} GateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GateInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GateInfo message.
         * @function verify
         * @memberof login.GateInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GateInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.server_status != null && message.hasOwnProperty("server_status"))
                if (!$util.isInteger(message.server_status))
                    return "server_status: integer expected";
            if (message.gate_host != null && message.hasOwnProperty("gate_host"))
                if (!$util.isString(message.gate_host))
                    return "gate_host: string expected";
            if (message.gate_port != null && message.hasOwnProperty("gate_port"))
                if (!$util.isInteger(message.gate_port))
                    return "gate_port: integer expected";
            return null;
        };

        return GateInfo;
    })();

    login.ServerList = (function() {

        /**
         * Properties of a ServerList.
         * @memberof login
         * @interface IServerList
         * @property {Array.<login.IGateInfo>|null} [server_lists] ServerList server_lists
         */

        /**
         * Constructs a new ServerList.
         * @memberof login
         * @classdesc Represents a ServerList.
         * @implements IServerList
         * @constructor
         * @param {login.IServerList=} [properties] Properties to set
         */
        function ServerList(properties) {
            this.server_lists = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerList server_lists.
         * @member {Array.<login.IGateInfo>} server_lists
         * @memberof login.ServerList
         * @instance
         */
        ServerList.prototype.server_lists = $util.emptyArray;

        /**
         * Creates a new ServerList instance using the specified properties.
         * @function create
         * @memberof login.ServerList
         * @static
         * @param {login.IServerList=} [properties] Properties to set
         * @returns {login.ServerList} ServerList instance
         */
        ServerList.create = function create(properties) {
            return new ServerList(properties);
        };

        /**
         * Encodes the specified ServerList message. Does not implicitly {@link login.ServerList.verify|verify} messages.
         * @function encode
         * @memberof login.ServerList
         * @static
         * @param {login.IServerList} message ServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.server_lists != null && message.server_lists.length)
                for (var i = 0; i < message.server_lists.length; ++i)
                    $root.login.GateInfo.encode(message.server_lists[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ServerList message, length delimited. Does not implicitly {@link login.ServerList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.ServerList
         * @static
         * @param {login.IServerList} message ServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerList message from the specified reader or buffer.
         * @function decode
         * @memberof login.ServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.ServerList} ServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.ServerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.server_lists && message.server_lists.length))
                        message.server_lists = [];
                    message.server_lists.push($root.login.GateInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.ServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.ServerList} ServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerList message.
         * @function verify
         * @memberof login.ServerList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.server_lists != null && message.hasOwnProperty("server_lists")) {
                if (!Array.isArray(message.server_lists))
                    return "server_lists: array expected";
                for (var i = 0; i < message.server_lists.length; ++i) {
                    var error = $root.login.GateInfo.verify(message.server_lists[i]);
                    if (error)
                        return "server_lists." + error;
                }
            }
            return null;
        };

        return ServerList;
    })();

    login.EnterGateInfo = (function() {

        /**
         * Properties of an EnterGateInfo.
         * @memberof login
         * @interface IEnterGateInfo
         * @property {string|null} [sessionkey] EnterGateInfo sessionkey
         * @property {login.IServerList|null} [list] EnterGateInfo list
         */

        /**
         * Constructs a new EnterGateInfo.
         * @memberof login
         * @classdesc Represents an EnterGateInfo.
         * @implements IEnterGateInfo
         * @constructor
         * @param {login.IEnterGateInfo=} [properties] Properties to set
         */
        function EnterGateInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterGateInfo sessionkey.
         * @member {string} sessionkey
         * @memberof login.EnterGateInfo
         * @instance
         */
        EnterGateInfo.prototype.sessionkey = "";

        /**
         * EnterGateInfo list.
         * @member {login.IServerList|null|undefined} list
         * @memberof login.EnterGateInfo
         * @instance
         */
        EnterGateInfo.prototype.list = null;

        /**
         * Creates a new EnterGateInfo instance using the specified properties.
         * @function create
         * @memberof login.EnterGateInfo
         * @static
         * @param {login.IEnterGateInfo=} [properties] Properties to set
         * @returns {login.EnterGateInfo} EnterGateInfo instance
         */
        EnterGateInfo.create = function create(properties) {
            return new EnterGateInfo(properties);
        };

        /**
         * Encodes the specified EnterGateInfo message. Does not implicitly {@link login.EnterGateInfo.verify|verify} messages.
         * @function encode
         * @memberof login.EnterGateInfo
         * @static
         * @param {login.IEnterGateInfo} message EnterGateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGateInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionkey != null && message.hasOwnProperty("sessionkey"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionkey);
            if (message.list != null && message.hasOwnProperty("list"))
                $root.login.ServerList.encode(message.list, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterGateInfo message, length delimited. Does not implicitly {@link login.EnterGateInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof login.EnterGateInfo
         * @static
         * @param {login.IEnterGateInfo} message EnterGateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterGateInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterGateInfo message from the specified reader or buffer.
         * @function decode
         * @memberof login.EnterGateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {login.EnterGateInfo} EnterGateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGateInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.login.EnterGateInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sessionkey = reader.string();
                    break;
                case 2:
                    message.list = $root.login.ServerList.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterGateInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof login.EnterGateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {login.EnterGateInfo} EnterGateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterGateInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterGateInfo message.
         * @function verify
         * @memberof login.EnterGateInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterGateInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionkey != null && message.hasOwnProperty("sessionkey"))
                if (!$util.isString(message.sessionkey))
                    return "sessionkey: string expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                var error = $root.login.ServerList.verify(message.list);
                if (error)
                    return "list." + error;
            }
            return null;
        };

        return EnterGateInfo;
    })();

    return login;
})();