/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginCall = (function() {

        /**
         * Properties of a LoginCall.
         * @memberof auth
         * @interface ILoginCall
         * @property {foundation.IHeader|null} [header] LoginCall header
         * @property {string|null} [token] LoginCall token
         */

        /**
         * Constructs a new LoginCall.
         * @memberof auth
         * @classdesc Represents a LoginCall.
         * @implements ILoginCall
         * @constructor
         * @param {auth.ILoginCall=} [properties] Properties to set
         */
        function LoginCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof auth.LoginCall
         * @instance
         */
        LoginCall.prototype.header = null;

        /**
         * LoginCall token.
         * @member {string} token
         * @memberof auth.LoginCall
         * @instance
         */
        LoginCall.prototype.token = "";

        /**
         * Creates a new LoginCall instance using the specified properties.
         * @function create
         * @memberof auth.LoginCall
         * @static
         * @param {auth.ILoginCall=} [properties] Properties to set
         * @returns {auth.LoginCall} LoginCall instance
         */
        LoginCall.create = function create(properties) {
            return new LoginCall(properties);
        };

        /**
         * Encodes the specified LoginCall message. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginCall
         * @static
         * @param {auth.ILoginCall} message LoginCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginCall message, length delimited. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginCall
         * @static
         * @param {auth.ILoginCall} message LoginCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginCall message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginCall} LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginCall} LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginCall message.
         * @function verify
         * @memberof auth.LoginCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a LoginCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginCall} LoginCall
         */
        LoginCall.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginCall)
                return object;
            let message = new $root.auth.LoginCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".auth.LoginCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a LoginCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginCall
         * @static
         * @param {auth.LoginCall} message LoginCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.token = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this LoginCall to JSON.
         * @function toJSON
         * @memberof auth.LoginCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginCall;
    })();

    auth.LoginRecall = (function() {

        /**
         * Properties of a LoginRecall.
         * @memberof auth
         * @interface ILoginRecall
         * @property {foundation.IHeader|null} [header] LoginRecall header
         * @property {number|null} [status] LoginRecall status
         */

        /**
         * Constructs a new LoginRecall.
         * @memberof auth
         * @classdesc Represents a LoginRecall.
         * @implements ILoginRecall
         * @constructor
         * @param {auth.ILoginRecall=} [properties] Properties to set
         */
        function LoginRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof auth.LoginRecall
         * @instance
         */
        LoginRecall.prototype.header = null;

        /**
         * LoginRecall status.
         * @member {number} status
         * @memberof auth.LoginRecall
         * @instance
         */
        LoginRecall.prototype.status = 0;

        /**
         * Creates a new LoginRecall instance using the specified properties.
         * @function create
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.ILoginRecall=} [properties] Properties to set
         * @returns {auth.LoginRecall} LoginRecall instance
         */
        LoginRecall.create = function create(properties) {
            return new LoginRecall(properties);
        };

        /**
         * Encodes the specified LoginRecall message. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.ILoginRecall} message LoginRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified LoginRecall message, length delimited. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.ILoginRecall} message LoginRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRecall message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginRecall} LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginRecall} LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRecall message.
         * @function verify
         * @memberof auth.LoginRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a LoginRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginRecall} LoginRecall
         */
        LoginRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginRecall)
                return object;
            let message = new $root.auth.LoginRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".auth.LoginRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginRecall
         * @static
         * @param {auth.LoginRecall} message LoginRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.status = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this LoginRecall to JSON.
         * @function toJSON
         * @memberof auth.LoginRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRecall;
    })();

    auth.UserInfo = (function() {

        /**
         * Properties of a UserInfo.
         * @memberof auth
         * @interface IUserInfo
         * @property {foundation.IHeader|null} [header] UserInfo header
         * @property {auth.IUser|null} [user] UserInfo user
         */

        /**
         * Constructs a new UserInfo.
         * @memberof auth
         * @classdesc Represents a UserInfo.
         * @implements IUserInfo
         * @constructor
         * @param {auth.IUserInfo=} [properties] Properties to set
         */
        function UserInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserInfo header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.header = null;

        /**
         * UserInfo user.
         * @member {auth.IUser|null|undefined} user
         * @memberof auth.UserInfo
         * @instance
         */
        UserInfo.prototype.user = null;

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @function create
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo=} [properties] Properties to set
         * @returns {auth.UserInfo} UserInfo instance
         */
        UserInfo.create = function create(properties) {
            return new UserInfo(properties);
        };

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @function encode
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                $root.auth.User.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.UserInfo
         * @static
         * @param {auth.IUserInfo} message UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof auth.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.UserInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.user = $root.auth.User.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.UserInfo} UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserInfo message.
         * @function verify
         * @memberof auth.UserInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.user != null && message.hasOwnProperty("user")) {
                let error = $root.auth.User.verify(message.user);
                if (error)
                    return "user." + error;
            }
            return null;
        };

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.UserInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.UserInfo} UserInfo
         */
        UserInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.UserInfo)
                return object;
            let message = new $root.auth.UserInfo();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".auth.UserInfo.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.user != null) {
                if (typeof object.user !== "object")
                    throw TypeError(".auth.UserInfo.user: object expected");
                message.user = $root.auth.User.fromObject(object.user);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.UserInfo
         * @static
         * @param {auth.UserInfo} message UserInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.user = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = $root.auth.User.toObject(message.user, options);
            return object;
        };

        /**
         * Converts this UserInfo to JSON.
         * @function toJSON
         * @memberof auth.UserInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserInfo;
    })();

    auth.User = (function() {

        /**
         * Properties of a User.
         * @memberof auth
         * @interface IUser
         * @property {string|null} [name] User name
         * @property {number|null} [wallet] User wallet
         */

        /**
         * Constructs a new User.
         * @memberof auth
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {auth.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User name.
         * @member {string} name
         * @memberof auth.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * User wallet.
         * @member {number} wallet
         * @memberof auth.User
         * @instance
         */
        User.prototype.wallet = 0;

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof auth.User
         * @static
         * @param {auth.IUser=} [properties] Properties to set
         * @returns {auth.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @function encode
         * @memberof auth.User
         * @static
         * @param {auth.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.wallet != null && Object.hasOwnProperty.call(message, "wallet"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.wallet);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.User
         * @static
         * @param {auth.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof auth.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.User();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.wallet = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof auth.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                if (typeof message.wallet !== "number")
                    return "wallet: number expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.User)
                return object;
            let message = new $root.auth.User();
            if (object.name != null)
                message.name = String(object.name);
            if (object.wallet != null)
                message.wallet = Number(object.wallet);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.User
         * @static
         * @param {auth.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.name = "";
                object.wallet = 0;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                object.wallet = options.json && !isFinite(message.wallet) ? String(message.wallet) : message.wallet;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof auth.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return auth;
})();

export const bet = $root.bet = (() => {

    /**
     * Namespace bet.
     * @exports bet
     * @namespace
     */
    const bet = {};

    /**
     * Error enum.
     * @name bet.Error
     * @enum {number}
     * @property {number} ErrorDefault=0 ErrorDefault value
     * @property {number} BetTimeNotInvlid=1 BetTimeNotInvlid value
     * @property {number} BetIndexInvalid=2 BetIndexInvalid value
     * @property {number} BetAreaInvalid=3 BetAreaInvalid value
     * @property {number} ReachMaxLimit=4 ReachMaxLimit value
     * @property {number} RoundNotFound=5 RoundNotFound value
     * @property {number} NoEnoughWallet=6 NoEnoughWallet value
     */
    bet.Error = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ErrorDefault"] = 0;
        values[valuesById[1] = "BetTimeNotInvlid"] = 1;
        values[valuesById[2] = "BetIndexInvalid"] = 2;
        values[valuesById[3] = "BetAreaInvalid"] = 3;
        values[valuesById[4] = "ReachMaxLimit"] = 4;
        values[valuesById[5] = "RoundNotFound"] = 5;
        values[valuesById[6] = "NoEnoughWallet"] = 6;
        return values;
    })();

    /**
     * BetArea enum.
     * @name bet.BetArea
     * @enum {number}
     * @property {number} BetAreaDefault=0 BetAreaDefault value
     * @property {number} Player=1 Player value
     * @property {number} Banker=2 Banker value
     * @property {number} PlayerPair=3 PlayerPair value
     * @property {number} Tie=4 Tie value
     * @property {number} BankerPair=5 BankerPair value
     */
    bet.BetArea = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BetAreaDefault"] = 0;
        values[valuesById[1] = "Player"] = 1;
        values[valuesById[2] = "Banker"] = 2;
        values[valuesById[3] = "PlayerPair"] = 3;
        values[valuesById[4] = "Tie"] = 4;
        values[valuesById[5] = "BankerPair"] = 5;
        return values;
    })();

    bet.BetStatus = (function() {

        /**
         * Properties of a BetStatus.
         * @memberof bet
         * @interface IBetStatus
         * @property {number|null} [Banker] BetStatus Banker
         * @property {number|null} [Player] BetStatus Player
         * @property {number|null} [BankerPair] BetStatus BankerPair
         * @property {number|null} [Tie] BetStatus Tie
         * @property {number|null} [PlayerPair] BetStatus PlayerPair
         */

        /**
         * Constructs a new BetStatus.
         * @memberof bet
         * @classdesc Represents a BetStatus.
         * @implements IBetStatus
         * @constructor
         * @param {bet.IBetStatus=} [properties] Properties to set
         */
        function BetStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetStatus Banker.
         * @member {number} Banker
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.Banker = 0;

        /**
         * BetStatus Player.
         * @member {number} Player
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.Player = 0;

        /**
         * BetStatus BankerPair.
         * @member {number} BankerPair
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.BankerPair = 0;

        /**
         * BetStatus Tie.
         * @member {number} Tie
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.Tie = 0;

        /**
         * BetStatus PlayerPair.
         * @member {number} PlayerPair
         * @memberof bet.BetStatus
         * @instance
         */
        BetStatus.prototype.PlayerPair = 0;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @function create
         * @memberof bet.BetStatus
         * @static
         * @param {bet.IBetStatus=} [properties] Properties to set
         * @returns {bet.BetStatus} BetStatus instance
         */
        BetStatus.create = function create(properties) {
            return new BetStatus(properties);
        };

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @function encode
         * @memberof bet.BetStatus
         * @static
         * @param {bet.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Banker != null && Object.hasOwnProperty.call(message, "Banker"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.Banker);
            if (message.Player != null && Object.hasOwnProperty.call(message, "Player"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.Player);
            if (message.BankerPair != null && Object.hasOwnProperty.call(message, "BankerPair"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.BankerPair);
            if (message.Tie != null && Object.hasOwnProperty.call(message, "Tie"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.Tie);
            if (message.PlayerPair != null && Object.hasOwnProperty.call(message, "PlayerPair"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.PlayerPair);
            return writer;
        };

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetStatus
         * @static
         * @param {bet.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Banker = reader.double();
                    break;
                case 2:
                    message.Player = reader.double();
                    break;
                case 3:
                    message.BankerPair = reader.double();
                    break;
                case 4:
                    message.Tie = reader.double();
                    break;
                case 5:
                    message.PlayerPair = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetStatus message.
         * @function verify
         * @memberof bet.BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                if (typeof message.Banker !== "number")
                    return "Banker: number expected";
            if (message.Player != null && message.hasOwnProperty("Player"))
                if (typeof message.Player !== "number")
                    return "Player: number expected";
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                if (typeof message.BankerPair !== "number")
                    return "BankerPair: number expected";
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                if (typeof message.Tie !== "number")
                    return "Tie: number expected";
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                if (typeof message.PlayerPair !== "number")
                    return "PlayerPair: number expected";
            return null;
        };

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetStatus} BetStatus
         */
        BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetStatus)
                return object;
            let message = new $root.bet.BetStatus();
            if (object.Banker != null)
                message.Banker = Number(object.Banker);
            if (object.Player != null)
                message.Player = Number(object.Player);
            if (object.BankerPair != null)
                message.BankerPair = Number(object.BankerPair);
            if (object.Tie != null)
                message.Tie = Number(object.Tie);
            if (object.PlayerPair != null)
                message.PlayerPair = Number(object.PlayerPair);
            return message;
        };

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetStatus
         * @static
         * @param {bet.BetStatus} message BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Banker = 0;
                object.Player = 0;
                object.BankerPair = 0;
                object.Tie = 0;
                object.PlayerPair = 0;
            }
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                object.Banker = options.json && !isFinite(message.Banker) ? String(message.Banker) : message.Banker;
            if (message.Player != null && message.hasOwnProperty("Player"))
                object.Player = options.json && !isFinite(message.Player) ? String(message.Player) : message.Player;
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                object.BankerPair = options.json && !isFinite(message.BankerPair) ? String(message.BankerPair) : message.BankerPair;
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                object.Tie = options.json && !isFinite(message.Tie) ? String(message.Tie) : message.Tie;
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                object.PlayerPair = options.json && !isFinite(message.PlayerPair) ? String(message.PlayerPair) : message.PlayerPair;
            return object;
        };

        /**
         * Converts this BetStatus to JSON.
         * @function toJSON
         * @memberof bet.BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetStatus;
    })();

    bet.BetCall = (function() {

        /**
         * Properties of a BetCall.
         * @memberof bet
         * @interface IBetCall
         * @property {foundation.IHeader|null} [header] BetCall header
         * @property {string|null} [gameUuid] BetCall gameUuid
         * @property {number|null} [betIndex] BetCall betIndex
         * @property {bet.BetArea|null} [betArea] BetCall betArea
         */

        /**
         * Constructs a new BetCall.
         * @memberof bet
         * @classdesc Represents a BetCall.
         * @implements IBetCall
         * @constructor
         * @param {bet.IBetCall=} [properties] Properties to set
         */
        function BetCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.header = null;

        /**
         * BetCall gameUuid.
         * @member {string} gameUuid
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.gameUuid = "";

        /**
         * BetCall betIndex.
         * @member {number} betIndex
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.betIndex = 0;

        /**
         * BetCall betArea.
         * @member {bet.BetArea} betArea
         * @memberof bet.BetCall
         * @instance
         */
        BetCall.prototype.betArea = 0;

        /**
         * Creates a new BetCall instance using the specified properties.
         * @function create
         * @memberof bet.BetCall
         * @static
         * @param {bet.IBetCall=} [properties] Properties to set
         * @returns {bet.BetCall} BetCall instance
         */
        BetCall.create = function create(properties) {
            return new BetCall(properties);
        };

        /**
         * Encodes the specified BetCall message. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetCall
         * @static
         * @param {bet.IBetCall} message BetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            if (message.betIndex != null && Object.hasOwnProperty.call(message, "betIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.betIndex);
            if (message.betArea != null && Object.hasOwnProperty.call(message, "betArea"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.betArea);
            return writer;
        };

        /**
         * Encodes the specified BetCall message, length delimited. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetCall
         * @static
         * @param {bet.IBetCall} message BetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetCall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetCall} BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                case 3:
                    message.betIndex = reader.int32();
                    break;
                case 4:
                    message.betArea = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetCall} BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetCall message.
         * @function verify
         * @memberof bet.BetCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            if (message.betIndex != null && message.hasOwnProperty("betIndex"))
                if (!$util.isInteger(message.betIndex))
                    return "betIndex: integer expected";
            if (message.betArea != null && message.hasOwnProperty("betArea"))
                switch (message.betArea) {
                default:
                    return "betArea: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a BetCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetCall} BetCall
         */
        BetCall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetCall)
                return object;
            let message = new $root.bet.BetCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            if (object.betIndex != null)
                message.betIndex = object.betIndex | 0;
            switch (object.betArea) {
            case "BetAreaDefault":
            case 0:
                message.betArea = 0;
                break;
            case "Player":
            case 1:
                message.betArea = 1;
                break;
            case "Banker":
            case 2:
                message.betArea = 2;
                break;
            case "PlayerPair":
            case 3:
                message.betArea = 3;
                break;
            case "Tie":
            case 4:
                message.betArea = 4;
                break;
            case "BankerPair":
            case 5:
                message.betArea = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BetCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetCall
         * @static
         * @param {bet.BetCall} message BetCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
                object.betIndex = 0;
                object.betArea = options.enums === String ? "BetAreaDefault" : 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            if (message.betIndex != null && message.hasOwnProperty("betIndex"))
                object.betIndex = message.betIndex;
            if (message.betArea != null && message.hasOwnProperty("betArea"))
                object.betArea = options.enums === String ? $root.bet.BetArea[message.betArea] : message.betArea;
            return object;
        };

        /**
         * Converts this BetCall to JSON.
         * @function toJSON
         * @memberof bet.BetCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetCall;
    })();

    bet.BetRecall = (function() {

        /**
         * Properties of a BetRecall.
         * @memberof bet
         * @interface IBetRecall
         * @property {foundation.IHeader|null} [header] BetRecall header
         * @property {number|null} [result] BetRecall result
         * @property {number|null} [totalBets] BetRecall totalBets
         * @property {bet.IBetStatus|null} [betStatus] BetRecall betStatus
         * @property {bet.IBetError|null} [betError] BetRecall betError
         */

        /**
         * Constructs a new BetRecall.
         * @memberof bet
         * @classdesc Represents a BetRecall.
         * @implements IBetRecall
         * @constructor
         * @param {bet.IBetRecall=} [properties] Properties to set
         */
        function BetRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.header = null;

        /**
         * BetRecall result.
         * @member {number} result
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.result = 0;

        /**
         * BetRecall totalBets.
         * @member {number} totalBets
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.totalBets = 0;

        /**
         * BetRecall betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.betStatus = null;

        /**
         * BetRecall betError.
         * @member {bet.IBetError|null|undefined} betError
         * @memberof bet.BetRecall
         * @instance
         */
        BetRecall.prototype.betError = null;

        /**
         * Creates a new BetRecall instance using the specified properties.
         * @function create
         * @memberof bet.BetRecall
         * @static
         * @param {bet.IBetRecall=} [properties] Properties to set
         * @returns {bet.BetRecall} BetRecall instance
         */
        BetRecall.create = function create(properties) {
            return new BetRecall(properties);
        };

        /**
         * Encodes the specified BetRecall message. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetRecall
         * @static
         * @param {bet.IBetRecall} message BetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.totalBets != null && Object.hasOwnProperty.call(message, "totalBets"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalBets);
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.betError != null && Object.hasOwnProperty.call(message, "betError"))
                $root.bet.BetError.encode(message.betError, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetRecall message, length delimited. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetRecall
         * @static
         * @param {bet.IBetRecall} message BetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRecall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetRecall} BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.totalBets = reader.double();
                    break;
                case 4:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.betError = $root.bet.BetError.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetRecall} BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRecall message.
         * @function verify
         * @memberof bet.BetRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                if (typeof message.totalBets !== "number")
                    return "totalBets: number expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            if (message.betError != null && message.hasOwnProperty("betError")) {
                let error = $root.bet.BetError.verify(message.betError);
                if (error)
                    return "betError." + error;
            }
            return null;
        };

        /**
         * Creates a BetRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetRecall} BetRecall
         */
        BetRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetRecall)
                return object;
            let message = new $root.bet.BetRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.totalBets != null)
                message.totalBets = Number(object.totalBets);
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".bet.BetRecall.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            if (object.betError != null) {
                if (typeof object.betError !== "object")
                    throw TypeError(".bet.BetRecall.betError: object expected");
                message.betError = $root.bet.BetError.fromObject(object.betError);
            }
            return message;
        };

        /**
         * Creates a plain object from a BetRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetRecall
         * @static
         * @param {bet.BetRecall} message BetRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.totalBets = 0;
                object.betStatus = null;
                object.betError = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                object.totalBets = options.json && !isFinite(message.totalBets) ? String(message.totalBets) : message.totalBets;
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            if (message.betError != null && message.hasOwnProperty("betError"))
                object.betError = $root.bet.BetError.toObject(message.betError, options);
            return object;
        };

        /**
         * Converts this BetRecall to JSON.
         * @function toJSON
         * @memberof bet.BetRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRecall;
    })();

    bet.BetResetCall = (function() {

        /**
         * Properties of a BetResetCall.
         * @memberof bet
         * @interface IBetResetCall
         * @property {foundation.IHeader|null} [header] BetResetCall header
         * @property {string|null} [gameUuid] BetResetCall gameUuid
         */

        /**
         * Constructs a new BetResetCall.
         * @memberof bet
         * @classdesc Represents a BetResetCall.
         * @implements IBetResetCall
         * @constructor
         * @param {bet.IBetResetCall=} [properties] Properties to set
         */
        function BetResetCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetResetCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetResetCall
         * @instance
         */
        BetResetCall.prototype.header = null;

        /**
         * BetResetCall gameUuid.
         * @member {string} gameUuid
         * @memberof bet.BetResetCall
         * @instance
         */
        BetResetCall.prototype.gameUuid = "";

        /**
         * Creates a new BetResetCall instance using the specified properties.
         * @function create
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.IBetResetCall=} [properties] Properties to set
         * @returns {bet.BetResetCall} BetResetCall instance
         */
        BetResetCall.create = function create(properties) {
            return new BetResetCall(properties);
        };

        /**
         * Encodes the specified BetResetCall message. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.IBetResetCall} message BetResetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified BetResetCall message, length delimited. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.IBetResetCall} message BetResetCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResetCall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetResetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetResetCall} BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetResetCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetResetCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetResetCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetResetCall} BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetResetCall message.
         * @function verify
         * @memberof bet.BetResetCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetResetCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a BetResetCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetResetCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetResetCall} BetResetCall
         */
        BetResetCall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetResetCall)
                return object;
            let message = new $root.bet.BetResetCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetResetCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a BetResetCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetResetCall
         * @static
         * @param {bet.BetResetCall} message BetResetCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetResetCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this BetResetCall to JSON.
         * @function toJSON
         * @memberof bet.BetResetCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResetCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResetCall;
    })();

    bet.BetResetRecall = (function() {

        /**
         * Properties of a BetResetRecall.
         * @memberof bet
         * @interface IBetResetRecall
         * @property {foundation.IHeader|null} [header] BetResetRecall header
         * @property {number|null} [result] BetResetRecall result
         * @property {number|null} [totalBets] BetResetRecall totalBets
         * @property {bet.IBetStatus|null} [betStatus] BetResetRecall betStatus
         */

        /**
         * Constructs a new BetResetRecall.
         * @memberof bet
         * @classdesc Represents a BetResetRecall.
         * @implements IBetResetRecall
         * @constructor
         * @param {bet.IBetResetRecall=} [properties] Properties to set
         */
        function BetResetRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetResetRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.header = null;

        /**
         * BetResetRecall result.
         * @member {number} result
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.result = 0;

        /**
         * BetResetRecall totalBets.
         * @member {number} totalBets
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.totalBets = 0;

        /**
         * BetResetRecall betStatus.
         * @member {bet.IBetStatus|null|undefined} betStatus
         * @memberof bet.BetResetRecall
         * @instance
         */
        BetResetRecall.prototype.betStatus = null;

        /**
         * Creates a new BetResetRecall instance using the specified properties.
         * @function create
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.IBetResetRecall=} [properties] Properties to set
         * @returns {bet.BetResetRecall} BetResetRecall instance
         */
        BetResetRecall.create = function create(properties) {
            return new BetResetRecall(properties);
        };

        /**
         * Encodes the specified BetResetRecall message. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @function encode
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.IBetResetRecall} message BetResetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.result);
            if (message.totalBets != null && Object.hasOwnProperty.call(message, "totalBets"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalBets);
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.bet.BetStatus.encode(message.betStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BetResetRecall message, length delimited. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.IBetResetRecall} message BetResetRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetResetRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetResetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetResetRecall} BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetResetRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = reader.int32();
                    break;
                case 3:
                    message.totalBets = reader.double();
                    break;
                case 4:
                    message.betStatus = $root.bet.BetStatus.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetResetRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetResetRecall} BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetResetRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetResetRecall message.
         * @function verify
         * @memberof bet.BetResetRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetResetRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                if (typeof message.totalBets !== "number")
                    return "totalBets: number expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.bet.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            return null;
        };

        /**
         * Creates a BetResetRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetResetRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetResetRecall} BetResetRecall
         */
        BetResetRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetResetRecall)
                return object;
            let message = new $root.bet.BetResetRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetResetRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.result != null)
                message.result = object.result | 0;
            if (object.totalBets != null)
                message.totalBets = Number(object.totalBets);
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".bet.BetResetRecall.betStatus: object expected");
                message.betStatus = $root.bet.BetStatus.fromObject(object.betStatus);
            }
            return message;
        };

        /**
         * Creates a plain object from a BetResetRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetResetRecall
         * @static
         * @param {bet.BetResetRecall} message BetResetRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetResetRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.result = 0;
                object.totalBets = 0;
                object.betStatus = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.totalBets != null && message.hasOwnProperty("totalBets"))
                object.totalBets = options.json && !isFinite(message.totalBets) ? String(message.totalBets) : message.totalBets;
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.bet.BetStatus.toObject(message.betStatus, options);
            return object;
        };

        /**
         * Converts this BetResetRecall to JSON.
         * @function toJSON
         * @memberof bet.BetResetRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetResetRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetResetRecall;
    })();

    bet.BetError = (function() {

        /**
         * Properties of a BetError.
         * @memberof bet
         * @interface IBetError
         * @property {foundation.IHeader|null} [header] BetError header
         * @property {bet.Error|null} [error] BetError error
         * @property {string|null} [errorMessage] BetError errorMessage
         */

        /**
         * Constructs a new BetError.
         * @memberof bet
         * @classdesc Represents a BetError.
         * @implements IBetError
         * @constructor
         * @param {bet.IBetError=} [properties] Properties to set
         */
        function BetError(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetError header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof bet.BetError
         * @instance
         */
        BetError.prototype.header = null;

        /**
         * BetError error.
         * @member {bet.Error} error
         * @memberof bet.BetError
         * @instance
         */
        BetError.prototype.error = 0;

        /**
         * BetError errorMessage.
         * @member {string} errorMessage
         * @memberof bet.BetError
         * @instance
         */
        BetError.prototype.errorMessage = "";

        /**
         * Creates a new BetError instance using the specified properties.
         * @function create
         * @memberof bet.BetError
         * @static
         * @param {bet.IBetError=} [properties] Properties to set
         * @returns {bet.BetError} BetError instance
         */
        BetError.create = function create(properties) {
            return new BetError(properties);
        };

        /**
         * Encodes the specified BetError message. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @function encode
         * @memberof bet.BetError
         * @static
         * @param {bet.IBetError} message BetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetError.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.error);
            if (message.errorMessage != null && Object.hasOwnProperty.call(message, "errorMessage"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorMessage);
            return writer;
        };

        /**
         * Encodes the specified BetError message, length delimited. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @function encodeDelimited
         * @memberof bet.BetError
         * @static
         * @param {bet.IBetError} message BetError message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetError.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetError message from the specified reader or buffer.
         * @function decode
         * @memberof bet.BetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {bet.BetError} BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetError.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.bet.BetError();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = reader.int32();
                    break;
                case 3:
                    message.errorMessage = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetError message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof bet.BetError
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {bet.BetError} BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetError.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetError message.
         * @function verify
         * @memberof bet.BetError
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetError.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.error != null && message.hasOwnProperty("error"))
                switch (message.error) {
                default:
                    return "error: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                if (!$util.isString(message.errorMessage))
                    return "errorMessage: string expected";
            return null;
        };

        /**
         * Creates a BetError message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof bet.BetError
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {bet.BetError} BetError
         */
        BetError.fromObject = function fromObject(object) {
            if (object instanceof $root.bet.BetError)
                return object;
            let message = new $root.bet.BetError();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".bet.BetError.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            switch (object.error) {
            case "ErrorDefault":
            case 0:
                message.error = 0;
                break;
            case "BetTimeNotInvlid":
            case 1:
                message.error = 1;
                break;
            case "BetIndexInvalid":
            case 2:
                message.error = 2;
                break;
            case "BetAreaInvalid":
            case 3:
                message.error = 3;
                break;
            case "ReachMaxLimit":
            case 4:
                message.error = 4;
                break;
            case "RoundNotFound":
            case 5:
                message.error = 5;
                break;
            case "NoEnoughWallet":
            case 6:
                message.error = 6;
                break;
            }
            if (object.errorMessage != null)
                message.errorMessage = String(object.errorMessage);
            return message;
        };

        /**
         * Creates a plain object from a BetError message. Also converts values to other types if specified.
         * @function toObject
         * @memberof bet.BetError
         * @static
         * @param {bet.BetError} message BetError
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetError.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.error = options.enums === String ? "ErrorDefault" : 0;
                object.errorMessage = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.error != null && message.hasOwnProperty("error"))
                object.error = options.enums === String ? $root.bet.Error[message.error] : message.error;
            if (message.errorMessage != null && message.hasOwnProperty("errorMessage"))
                object.errorMessage = message.errorMessage;
            return object;
        };

        /**
         * Converts this BetError to JSON.
         * @function toJSON
         * @memberof bet.BetError
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetError.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetError;
    })();

    return bet;
})();

export const dealer = $root.dealer = (() => {

    /**
     * Namespace dealer.
     * @exports dealer
     * @namespace
     */
    const dealer = {};

    /**
     * Suit enum.
     * @name dealer.Suit
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} Heart=1 Heart value
     * @property {number} Diamond=2 Diamond value
     * @property {number} Spade=3 Spade value
     * @property {number} Club=4 Club value
     */
    dealer.Suit = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "Heart"] = 1;
        values[valuesById[2] = "Diamond"] = 2;
        values[valuesById[3] = "Spade"] = 3;
        values[valuesById[4] = "Club"] = 4;
        return values;
    })();

    dealer.Card = (function() {

        /**
         * Properties of a Card.
         * @memberof dealer
         * @interface ICard
         * @property {dealer.Suit|null} [suit] Card suit
         * @property {number|null} [point] Card point
         */

        /**
         * Constructs a new Card.
         * @memberof dealer
         * @classdesc Represents a Card.
         * @implements ICard
         * @constructor
         * @param {dealer.ICard=} [properties] Properties to set
         */
        function Card(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Card suit.
         * @member {dealer.Suit} suit
         * @memberof dealer.Card
         * @instance
         */
        Card.prototype.suit = 0;

        /**
         * Card point.
         * @member {number} point
         * @memberof dealer.Card
         * @instance
         */
        Card.prototype.point = 0;

        /**
         * Creates a new Card instance using the specified properties.
         * @function create
         * @memberof dealer.Card
         * @static
         * @param {dealer.ICard=} [properties] Properties to set
         * @returns {dealer.Card} Card instance
         */
        Card.create = function create(properties) {
            return new Card(properties);
        };

        /**
         * Encodes the specified Card message. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @function encode
         * @memberof dealer.Card
         * @static
         * @param {dealer.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.suit != null && Object.hasOwnProperty.call(message, "suit"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.suit);
            if (message.point != null && Object.hasOwnProperty.call(message, "point"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.point);
            return writer;
        };

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.Card
         * @static
         * @param {dealer.ICard} message Card message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Card.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.Card();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.suit = reader.int32();
                    break;
                case 2:
                    message.point = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.Card
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.Card} Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Card.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Card message.
         * @function verify
         * @memberof dealer.Card
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Card.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.suit != null && message.hasOwnProperty("suit"))
                switch (message.suit) {
                default:
                    return "suit: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.point != null && message.hasOwnProperty("point"))
                if (!$util.isInteger(message.point))
                    return "point: integer expected";
            return null;
        };

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.Card
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.Card} Card
         */
        Card.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.Card)
                return object;
            let message = new $root.dealer.Card();
            switch (object.suit) {
            case "Default":
            case 0:
                message.suit = 0;
                break;
            case "Heart":
            case 1:
                message.suit = 1;
                break;
            case "Diamond":
            case 2:
                message.suit = 2;
                break;
            case "Spade":
            case 3:
                message.suit = 3;
                break;
            case "Club":
            case 4:
                message.suit = 4;
                break;
            }
            if (object.point != null)
                message.point = object.point | 0;
            return message;
        };

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.Card
         * @static
         * @param {dealer.Card} message Card
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Card.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.suit = options.enums === String ? "Default" : 0;
                object.point = 0;
            }
            if (message.suit != null && message.hasOwnProperty("suit"))
                object.suit = options.enums === String ? $root.dealer.Suit[message.suit] : message.suit;
            if (message.point != null && message.hasOwnProperty("point"))
                object.point = message.point;
            return object;
        };

        /**
         * Converts this Card to JSON.
         * @function toJSON
         * @memberof dealer.Card
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Card.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Card;
    })();

    /**
     * Side enum.
     * @name dealer.Side
     * @enum {number}
     * @property {number} SideDefault=0 SideDefault value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     */
    dealer.Side = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SideDefault"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        return values;
    })();

    dealer.Draw = (function() {

        /**
         * Properties of a Draw.
         * @memberof dealer
         * @interface IDraw
         * @property {foundation.IHeader|null} [header] Draw header
         * @property {dealer.Side|null} [side] Draw side
         * @property {number|null} [position] Draw position
         * @property {dealer.ICard|null} [card] Draw card
         */

        /**
         * Constructs a new Draw.
         * @memberof dealer
         * @classdesc Represents a Draw.
         * @implements IDraw
         * @constructor
         * @param {dealer.IDraw=} [properties] Properties to set
         */
        function Draw(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Draw header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.header = null;

        /**
         * Draw side.
         * @member {dealer.Side} side
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.side = 0;

        /**
         * Draw position.
         * @member {number} position
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.position = 0;

        /**
         * Draw card.
         * @member {dealer.ICard|null|undefined} card
         * @memberof dealer.Draw
         * @instance
         */
        Draw.prototype.card = null;

        /**
         * Creates a new Draw instance using the specified properties.
         * @function create
         * @memberof dealer.Draw
         * @static
         * @param {dealer.IDraw=} [properties] Properties to set
         * @returns {dealer.Draw} Draw instance
         */
        Draw.create = function create(properties) {
            return new Draw(properties);
        };

        /**
         * Encodes the specified Draw message. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @function encode
         * @memberof dealer.Draw
         * @static
         * @param {dealer.IDraw} message Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Draw.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.side != null && Object.hasOwnProperty.call(message, "side"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.side);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.position);
            if (message.card != null && Object.hasOwnProperty.call(message, "card"))
                $root.dealer.Card.encode(message.card, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Draw message, length delimited. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.Draw
         * @static
         * @param {dealer.IDraw} message Draw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Draw.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Draw message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.Draw} Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Draw.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.Draw();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.side = reader.int32();
                    break;
                case 3:
                    message.position = reader.int32();
                    break;
                case 4:
                    message.card = $root.dealer.Card.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Draw message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.Draw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.Draw} Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Draw.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Draw message.
         * @function verify
         * @memberof dealer.Draw
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Draw.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.side != null && message.hasOwnProperty("side"))
                switch (message.side) {
                default:
                    return "side: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isInteger(message.position))
                    return "position: integer expected";
            if (message.card != null && message.hasOwnProperty("card")) {
                let error = $root.dealer.Card.verify(message.card);
                if (error)
                    return "card." + error;
            }
            return null;
        };

        /**
         * Creates a Draw message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.Draw
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.Draw} Draw
         */
        Draw.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.Draw)
                return object;
            let message = new $root.dealer.Draw();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.Draw.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            switch (object.side) {
            case "SideDefault":
            case 0:
                message.side = 0;
                break;
            case "Banker":
            case 1:
                message.side = 1;
                break;
            case "Player":
            case 2:
                message.side = 2;
                break;
            }
            if (object.position != null)
                message.position = object.position | 0;
            if (object.card != null) {
                if (typeof object.card !== "object")
                    throw TypeError(".dealer.Draw.card: object expected");
                message.card = $root.dealer.Card.fromObject(object.card);
            }
            return message;
        };

        /**
         * Creates a plain object from a Draw message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.Draw
         * @static
         * @param {dealer.Draw} message Draw
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Draw.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.side = options.enums === String ? "SideDefault" : 0;
                object.position = 0;
                object.card = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.side != null && message.hasOwnProperty("side"))
                object.side = options.enums === String ? $root.dealer.Side[message.side] : message.side;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.card != null && message.hasOwnProperty("card"))
                object.card = $root.dealer.Card.toObject(message.card, options);
            return object;
        };

        /**
         * Converts this Draw to JSON.
         * @function toJSON
         * @memberof dealer.Draw
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Draw.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Draw;
    })();

    dealer.RoundStartCall = (function() {

        /**
         * Properties of a RoundStartCall.
         * @memberof dealer
         * @interface IRoundStartCall
         * @property {foundation.IHeader|null} [header] RoundStartCall header
         */

        /**
         * Constructs a new RoundStartCall.
         * @memberof dealer
         * @classdesc Represents a RoundStartCall.
         * @implements IRoundStartCall
         * @constructor
         * @param {dealer.IRoundStartCall=} [properties] Properties to set
         */
        function RoundStartCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundStartCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundStartCall
         * @instance
         */
        RoundStartCall.prototype.header = null;

        /**
         * Creates a new RoundStartCall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.IRoundStartCall=} [properties] Properties to set
         * @returns {dealer.RoundStartCall} RoundStartCall instance
         */
        RoundStartCall.create = function create(properties) {
            return new RoundStartCall(properties);
        };

        /**
         * Encodes the specified RoundStartCall message. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.IRoundStartCall} message RoundStartCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoundStartCall message, length delimited. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.IRoundStartCall} message RoundStartCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundStartCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundStartCall} RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundStartCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundStartCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundStartCall} RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundStartCall message.
         * @function verify
         * @memberof dealer.RoundStartCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundStartCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a RoundStartCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundStartCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundStartCall} RoundStartCall
         */
        RoundStartCall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundStartCall)
                return object;
            let message = new $root.dealer.RoundStartCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundStartCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoundStartCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundStartCall
         * @static
         * @param {dealer.RoundStartCall} message RoundStartCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundStartCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this RoundStartCall to JSON.
         * @function toJSON
         * @memberof dealer.RoundStartCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundStartCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundStartCall;
    })();

    dealer.RoundEndCall = (function() {

        /**
         * Properties of a RoundEndCall.
         * @memberof dealer
         * @interface IRoundEndCall
         * @property {foundation.IHeader|null} [header] RoundEndCall header
         */

        /**
         * Constructs a new RoundEndCall.
         * @memberof dealer
         * @classdesc Represents a RoundEndCall.
         * @implements IRoundEndCall
         * @constructor
         * @param {dealer.IRoundEndCall=} [properties] Properties to set
         */
        function RoundEndCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundEndCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundEndCall
         * @instance
         */
        RoundEndCall.prototype.header = null;

        /**
         * Creates a new RoundEndCall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.IRoundEndCall=} [properties] Properties to set
         * @returns {dealer.RoundEndCall} RoundEndCall instance
         */
        RoundEndCall.create = function create(properties) {
            return new RoundEndCall(properties);
        };

        /**
         * Encodes the specified RoundEndCall message. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.IRoundEndCall} message RoundEndCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoundEndCall message, length delimited. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.IRoundEndCall} message RoundEndCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundEndCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundEndCall} RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundEndCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundEndCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundEndCall} RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundEndCall message.
         * @function verify
         * @memberof dealer.RoundEndCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundEndCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a RoundEndCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundEndCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundEndCall} RoundEndCall
         */
        RoundEndCall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundEndCall)
                return object;
            let message = new $root.dealer.RoundEndCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundEndCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a RoundEndCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundEndCall
         * @static
         * @param {dealer.RoundEndCall} message RoundEndCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundEndCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this RoundEndCall to JSON.
         * @function toJSON
         * @memberof dealer.RoundEndCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundEndCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundEndCall;
    })();

    dealer.RoundStartRecall = (function() {

        /**
         * Properties of a RoundStartRecall.
         * @memberof dealer
         * @interface IRoundStartRecall
         * @property {foundation.IHeader|null} [header] RoundStartRecall header
         * @property {number|null} [status] RoundStartRecall status
         * @property {string|null} [message] RoundStartRecall message
         */

        /**
         * Constructs a new RoundStartRecall.
         * @memberof dealer
         * @classdesc Represents a RoundStartRecall.
         * @implements IRoundStartRecall
         * @constructor
         * @param {dealer.IRoundStartRecall=} [properties] Properties to set
         */
        function RoundStartRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundStartRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundStartRecall
         * @instance
         */
        RoundStartRecall.prototype.header = null;

        /**
         * RoundStartRecall status.
         * @member {number} status
         * @memberof dealer.RoundStartRecall
         * @instance
         */
        RoundStartRecall.prototype.status = 0;

        /**
         * RoundStartRecall message.
         * @member {string} message
         * @memberof dealer.RoundStartRecall
         * @instance
         */
        RoundStartRecall.prototype.message = "";

        /**
         * Creates a new RoundStartRecall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.IRoundStartRecall=} [properties] Properties to set
         * @returns {dealer.RoundStartRecall} RoundStartRecall instance
         */
        RoundStartRecall.create = function create(properties) {
            return new RoundStartRecall(properties);
        };

        /**
         * Encodes the specified RoundStartRecall message. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.IRoundStartRecall} message RoundStartRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified RoundStartRecall message, length delimited. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.IRoundStartRecall} message RoundStartRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundStartRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundStartRecall} RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundStartRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundStartRecall} RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundStartRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundStartRecall message.
         * @function verify
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundStartRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a RoundStartRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundStartRecall} RoundStartRecall
         */
        RoundStartRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundStartRecall)
                return object;
            let message = new $root.dealer.RoundStartRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundStartRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a RoundStartRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundStartRecall
         * @static
         * @param {dealer.RoundStartRecall} message RoundStartRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundStartRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.status = 0;
                object.message = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this RoundStartRecall to JSON.
         * @function toJSON
         * @memberof dealer.RoundStartRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundStartRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundStartRecall;
    })();

    dealer.RoundEndRecall = (function() {

        /**
         * Properties of a RoundEndRecall.
         * @memberof dealer
         * @interface IRoundEndRecall
         * @property {foundation.IHeader|null} [header] RoundEndRecall header
         * @property {number|null} [status] RoundEndRecall status
         * @property {string|null} [message] RoundEndRecall message
         */

        /**
         * Constructs a new RoundEndRecall.
         * @memberof dealer
         * @classdesc Represents a RoundEndRecall.
         * @implements IRoundEndRecall
         * @constructor
         * @param {dealer.IRoundEndRecall=} [properties] Properties to set
         */
        function RoundEndRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoundEndRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.RoundEndRecall
         * @instance
         */
        RoundEndRecall.prototype.header = null;

        /**
         * RoundEndRecall status.
         * @member {number} status
         * @memberof dealer.RoundEndRecall
         * @instance
         */
        RoundEndRecall.prototype.status = 0;

        /**
         * RoundEndRecall message.
         * @member {string} message
         * @memberof dealer.RoundEndRecall
         * @instance
         */
        RoundEndRecall.prototype.message = "";

        /**
         * Creates a new RoundEndRecall instance using the specified properties.
         * @function create
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.IRoundEndRecall=} [properties] Properties to set
         * @returns {dealer.RoundEndRecall} RoundEndRecall instance
         */
        RoundEndRecall.create = function create(properties) {
            return new RoundEndRecall(properties);
        };

        /**
         * Encodes the specified RoundEndRecall message. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @function encode
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.IRoundEndRecall} message RoundEndRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified RoundEndRecall message, length delimited. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.IRoundEndRecall} message RoundEndRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoundEndRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.RoundEndRecall} RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.RoundEndRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.RoundEndRecall} RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoundEndRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoundEndRecall message.
         * @function verify
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoundEndRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a RoundEndRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.RoundEndRecall} RoundEndRecall
         */
        RoundEndRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.RoundEndRecall)
                return object;
            let message = new $root.dealer.RoundEndRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.RoundEndRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a RoundEndRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.RoundEndRecall
         * @static
         * @param {dealer.RoundEndRecall} message RoundEndRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoundEndRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.status = 0;
                object.message = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this RoundEndRecall to JSON.
         * @function toJSON
         * @memberof dealer.RoundEndRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoundEndRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoundEndRecall;
    })();

    dealer.BroadcastDealerRoundEnd = (function() {

        /**
         * Properties of a BroadcastDealerRoundEnd.
         * @memberof dealer
         * @interface IBroadcastDealerRoundEnd
         * @property {foundation.IHeader|null} [header] BroadcastDealerRoundEnd header
         */

        /**
         * Constructs a new BroadcastDealerRoundEnd.
         * @memberof dealer
         * @classdesc Represents a BroadcastDealerRoundEnd.
         * @implements IBroadcastDealerRoundEnd
         * @constructor
         * @param {dealer.IBroadcastDealerRoundEnd=} [properties] Properties to set
         */
        function BroadcastDealerRoundEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastDealerRoundEnd header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.BroadcastDealerRoundEnd
         * @instance
         */
        BroadcastDealerRoundEnd.prototype.header = null;

        /**
         * Creates a new BroadcastDealerRoundEnd instance using the specified properties.
         * @function create
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.IBroadcastDealerRoundEnd=} [properties] Properties to set
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd instance
         */
        BroadcastDealerRoundEnd.create = function create(properties) {
            return new BroadcastDealerRoundEnd(properties);
        };

        /**
         * Encodes the specified BroadcastDealerRoundEnd message. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @function encode
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.IBroadcastDealerRoundEnd} message BroadcastDealerRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastDealerRoundEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BroadcastDealerRoundEnd message, length delimited. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.IBroadcastDealerRoundEnd} message BroadcastDealerRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastDealerRoundEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastDealerRoundEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.BroadcastDealerRoundEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastDealerRoundEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastDealerRoundEnd message.
         * @function verify
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastDealerRoundEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a BroadcastDealerRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.BroadcastDealerRoundEnd} BroadcastDealerRoundEnd
         */
        BroadcastDealerRoundEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.BroadcastDealerRoundEnd)
                return object;
            let message = new $root.dealer.BroadcastDealerRoundEnd();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.BroadcastDealerRoundEnd.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a BroadcastDealerRoundEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.BroadcastDealerRoundEnd
         * @static
         * @param {dealer.BroadcastDealerRoundEnd} message BroadcastDealerRoundEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastDealerRoundEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this BroadcastDealerRoundEnd to JSON.
         * @function toJSON
         * @memberof dealer.BroadcastDealerRoundEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastDealerRoundEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastDealerRoundEnd;
    })();

    /**
     * Result enum.
     * @name dealer.Result
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     * @property {number} BankerPair=3 BankerPair value
     * @property {number} Tie=4 Tie value
     * @property {number} PlayerPair=5 PlayerPair value
     */
    dealer.Result = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        values[valuesById[3] = "BankerPair"] = 3;
        values[valuesById[4] = "Tie"] = 4;
        values[valuesById[5] = "PlayerPair"] = 5;
        return values;
    })();

    dealer.GameResult = (function() {

        /**
         * Properties of a GameResult.
         * @memberof dealer
         * @interface IGameResult
         * @property {foundation.IHeader|null} [header] GameResult header
         * @property {Array.<dealer.Result>|null} [results] GameResult results
         * @property {number|null} [totalWin] GameResult totalWin
         */

        /**
         * Constructs a new GameResult.
         * @memberof dealer
         * @classdesc Represents a GameResult.
         * @implements IGameResult
         * @constructor
         * @param {dealer.IGameResult=} [properties] Properties to set
         */
        function GameResult(properties) {
            this.results = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameResult header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.GameResult
         * @instance
         */
        GameResult.prototype.header = null;

        /**
         * GameResult results.
         * @member {Array.<dealer.Result>} results
         * @memberof dealer.GameResult
         * @instance
         */
        GameResult.prototype.results = $util.emptyArray;

        /**
         * GameResult totalWin.
         * @member {number} totalWin
         * @memberof dealer.GameResult
         * @instance
         */
        GameResult.prototype.totalWin = 0;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @function create
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.IGameResult=} [properties] Properties to set
         * @returns {dealer.GameResult} GameResult instance
         */
        GameResult.create = function create(properties) {
            return new GameResult(properties);
        };

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @function encode
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.results != null && message.results.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.results.length; ++i)
                    writer.int32(message.results[i]);
                writer.ldelim();
            }
            if (message.totalWin != null && Object.hasOwnProperty.call(message, "totalWin"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.totalWin);
            return writer;
        };

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.IGameResult} message GameResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.GameResult();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.results && message.results.length))
                        message.results = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.results.push(reader.int32());
                    } else
                        message.results.push(reader.int32());
                    break;
                case 3:
                    message.totalWin = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.GameResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.GameResult} GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameResult message.
         * @function verify
         * @memberof dealer.GameResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.results != null && message.hasOwnProperty("results")) {
                if (!Array.isArray(message.results))
                    return "results: array expected";
                for (let i = 0; i < message.results.length; ++i)
                    switch (message.results[i]) {
                    default:
                        return "results: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
            }
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (typeof message.totalWin !== "number")
                    return "totalWin: number expected";
            return null;
        };

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.GameResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.GameResult} GameResult
         */
        GameResult.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.GameResult)
                return object;
            let message = new $root.dealer.GameResult();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.GameResult.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.results) {
                if (!Array.isArray(object.results))
                    throw TypeError(".dealer.GameResult.results: array expected");
                message.results = [];
                for (let i = 0; i < object.results.length; ++i)
                    switch (object.results[i]) {
                    default:
                    case "Default":
                    case 0:
                        message.results[i] = 0;
                        break;
                    case "Banker":
                    case 1:
                        message.results[i] = 1;
                        break;
                    case "Player":
                    case 2:
                        message.results[i] = 2;
                        break;
                    case "BankerPair":
                    case 3:
                        message.results[i] = 3;
                        break;
                    case "Tie":
                    case 4:
                        message.results[i] = 4;
                        break;
                    case "PlayerPair":
                    case 5:
                        message.results[i] = 5;
                        break;
                    }
            }
            if (object.totalWin != null)
                message.totalWin = Number(object.totalWin);
            return message;
        };

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.GameResult
         * @static
         * @param {dealer.GameResult} message GameResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.results = [];
            if (options.defaults) {
                object.header = null;
                object.totalWin = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.results && message.results.length) {
                object.results = [];
                for (let j = 0; j < message.results.length; ++j)
                    object.results[j] = options.enums === String ? $root.dealer.Result[message.results[j]] : message.results[j];
            }
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                object.totalWin = options.json && !isFinite(message.totalWin) ? String(message.totalWin) : message.totalWin;
            return object;
        };

        /**
         * Converts this GameResult to JSON.
         * @function toJSON
         * @memberof dealer.GameResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameResult;
    })();

    dealer.GameStatus = (function() {

        /**
         * Properties of a GameStatus.
         * @memberof dealer
         * @interface IGameStatus
         * @property {foundation.IHeader|null} [header] GameStatus header
         * @property {boolean|null} [isGaming] GameStatus isGaming
         */

        /**
         * Constructs a new GameStatus.
         * @memberof dealer
         * @classdesc Represents a GameStatus.
         * @implements IGameStatus
         * @constructor
         * @param {dealer.IGameStatus=} [properties] Properties to set
         */
        function GameStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStatus header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof dealer.GameStatus
         * @instance
         */
        GameStatus.prototype.header = null;

        /**
         * GameStatus isGaming.
         * @member {boolean} isGaming
         * @memberof dealer.GameStatus
         * @instance
         */
        GameStatus.prototype.isGaming = false;

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @function create
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.IGameStatus=} [properties] Properties to set
         * @returns {dealer.GameStatus} GameStatus instance
         */
        GameStatus.create = function create(properties) {
            return new GameStatus(properties);
        };

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @function encode
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.isGaming != null && Object.hasOwnProperty.call(message, "isGaming"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isGaming);
            return writer;
        };

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof dealer.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {dealer.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.dealer.GameStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.isGaming = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof dealer.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {dealer.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatus message.
         * @function verify
         * @memberof dealer.GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.isGaming != null && message.hasOwnProperty("isGaming"))
                if (typeof message.isGaming !== "boolean")
                    return "isGaming: boolean expected";
            return null;
        };

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof dealer.GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {dealer.GameStatus} GameStatus
         */
        GameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.dealer.GameStatus)
                return object;
            let message = new $root.dealer.GameStatus();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".dealer.GameStatus.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.isGaming != null)
                message.isGaming = Boolean(object.isGaming);
            return message;
        };

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof dealer.GameStatus
         * @static
         * @param {dealer.GameStatus} message GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.isGaming = false;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.isGaming != null && message.hasOwnProperty("isGaming"))
                object.isGaming = message.isGaming;
            return object;
        };

        /**
         * Converts this GameStatus to JSON.
         * @function toJSON
         * @memberof dealer.GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatus;
    })();

    return dealer;
})();

export const foundation = $root.foundation = (() => {

    /**
     * Namespace foundation.
     * @exports foundation
     * @namespace
     */
    const foundation = {};

    foundation.Header = (function() {

        /**
         * Properties of a Header.
         * @memberof foundation
         * @interface IHeader
         * @property {route.URI|null} [uri] Header uri
         */

        /**
         * Constructs a new Header.
         * @memberof foundation
         * @classdesc Represents a Header.
         * @implements IHeader
         * @constructor
         * @param {foundation.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Header uri.
         * @member {route.URI} uri
         * @memberof foundation.Header
         * @instance
         */
        Header.prototype.uri = 0;

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof foundation.Header
         * @static
         * @param {foundation.IHeader=} [properties] Properties to set
         * @returns {foundation.Header} Header instance
         */
        Header.create = function create(properties) {
            return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @function encode
         * @memberof foundation.Header
         * @static
         * @param {foundation.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.uri);
            return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.Header
         * @static
         * @param {foundation.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.Header();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uri = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof foundation.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                switch (message.uri) {
                default:
                    return "uri: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 220:
                case 23:
                case 24:
                case 25:
                case 26:
                    break;
                }
            return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.Header} Header
         */
        Header.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.Header)
                return object;
            let message = new $root.foundation.Header();
            switch (object.uri) {
            case "Default":
            case 0:
                message.uri = 0;
                break;
            case "LoginCall":
            case 1:
                message.uri = 1;
                break;
            case "LoginRecall":
            case 2:
                message.uri = 2;
                break;
            case "LobbyInfo":
            case 3:
                message.uri = 3;
                break;
            case "UserInfo":
            case 4:
                message.uri = 4;
                break;
            case "TableJoinCall":
            case 5:
                message.uri = 5;
                break;
            case "TableJoinRecall":
            case 6:
                message.uri = 6;
                break;
            case "BetCall":
            case 7:
                message.uri = 7;
                break;
            case "BetRecall":
            case 8:
                message.uri = 8;
                break;
            case "BetResetCall":
            case 9:
                message.uri = 9;
                break;
            case "BetResetRecall":
            case 10:
                message.uri = 10;
                break;
            case "Draw":
            case 11:
                message.uri = 11;
                break;
            case "DealerGameResult":
            case 12:
                message.uri = 12;
                break;
            case "BroadcastGameResult":
            case 13:
                message.uri = 13;
                break;
            case "BetRoundStart":
            case 14:
                message.uri = 14;
                break;
            case "BetRoundEnd":
            case 15:
                message.uri = 15;
                break;
            case "BetRoundCountdown":
            case 16:
                message.uri = 16;
                break;
            case "HeartbeatPing":
            case 17:
                message.uri = 17;
                break;
            case "HeartbeatPong":
            case 18:
                message.uri = 18;
                break;
            case "DealerRoundStartCall":
            case 19:
                message.uri = 19;
                break;
            case "DealerRoundStartRecall":
            case 20:
                message.uri = 20;
                break;
            case "DealerRoundEndCall":
            case 21:
                message.uri = 21;
                break;
            case "DealerRoundEndRecall":
            case 22:
                message.uri = 22;
                break;
            case "BroadcastDealerRoundEnd":
            case 220:
                message.uri = 220;
                break;
            case "BetError":
            case 23:
                message.uri = 23;
                break;
            case "GameStatus":
            case 24:
                message.uri = 24;
                break;
            case "DealerGameStatus":
            case 25:
                message.uri = 25;
                break;
            case "Roadmap":
            case 26:
                message.uri = 26;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.Header
         * @static
         * @param {foundation.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.uri = options.enums === String ? "Default" : 0;
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = options.enums === String ? $root.route.URI[message.uri] : message.uri;
            return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof foundation.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Header;
    })();

    foundation.HeartbeatPing = (function() {

        /**
         * Properties of a HeartbeatPing.
         * @memberof foundation
         * @interface IHeartbeatPing
         * @property {foundation.IHeader|null} [header] HeartbeatPing header
         */

        /**
         * Constructs a new HeartbeatPing.
         * @memberof foundation
         * @classdesc Represents a HeartbeatPing.
         * @implements IHeartbeatPing
         * @constructor
         * @param {foundation.IHeartbeatPing=} [properties] Properties to set
         */
        function HeartbeatPing(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatPing header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof foundation.HeartbeatPing
         * @instance
         */
        HeartbeatPing.prototype.header = null;

        /**
         * Creates a new HeartbeatPing instance using the specified properties.
         * @function create
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.IHeartbeatPing=} [properties] Properties to set
         * @returns {foundation.HeartbeatPing} HeartbeatPing instance
         */
        HeartbeatPing.create = function create(properties) {
            return new HeartbeatPing(properties);
        };

        /**
         * Encodes the specified HeartbeatPing message. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @function encode
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.IHeartbeatPing} message HeartbeatPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatPing message, length delimited. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.IHeartbeatPing} message HeartbeatPing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.HeartbeatPing} HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPing.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.HeartbeatPing();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.HeartbeatPing} HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatPing message.
         * @function verify
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatPing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a HeartbeatPing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.HeartbeatPing} HeartbeatPing
         */
        HeartbeatPing.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.HeartbeatPing)
                return object;
            let message = new $root.foundation.HeartbeatPing();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".foundation.HeartbeatPing.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatPing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.HeartbeatPing
         * @static
         * @param {foundation.HeartbeatPing} message HeartbeatPing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatPing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this HeartbeatPing to JSON.
         * @function toJSON
         * @memberof foundation.HeartbeatPing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatPing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartbeatPing;
    })();

    foundation.HeartbeatPong = (function() {

        /**
         * Properties of a HeartbeatPong.
         * @memberof foundation
         * @interface IHeartbeatPong
         * @property {foundation.IHeader|null} [header] HeartbeatPong header
         */

        /**
         * Constructs a new HeartbeatPong.
         * @memberof foundation
         * @classdesc Represents a HeartbeatPong.
         * @implements IHeartbeatPong
         * @constructor
         * @param {foundation.IHeartbeatPong=} [properties] Properties to set
         */
        function HeartbeatPong(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartbeatPong header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof foundation.HeartbeatPong
         * @instance
         */
        HeartbeatPong.prototype.header = null;

        /**
         * Creates a new HeartbeatPong instance using the specified properties.
         * @function create
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.IHeartbeatPong=} [properties] Properties to set
         * @returns {foundation.HeartbeatPong} HeartbeatPong instance
         */
        HeartbeatPong.create = function create(properties) {
            return new HeartbeatPong(properties);
        };

        /**
         * Encodes the specified HeartbeatPong message. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @function encode
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.IHeartbeatPong} message HeartbeatPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPong.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatPong message, length delimited. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.IHeartbeatPong} message HeartbeatPong message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatPong.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.HeartbeatPong} HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPong.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.HeartbeatPong();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.HeartbeatPong} HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatPong.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatPong message.
         * @function verify
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatPong.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a HeartbeatPong message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.HeartbeatPong} HeartbeatPong
         */
        HeartbeatPong.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.HeartbeatPong)
                return object;
            let message = new $root.foundation.HeartbeatPong();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".foundation.HeartbeatPong.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a HeartbeatPong message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.HeartbeatPong
         * @static
         * @param {foundation.HeartbeatPong} message HeartbeatPong
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatPong.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this HeartbeatPong to JSON.
         * @function toJSON
         * @memberof foundation.HeartbeatPong
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatPong.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartbeatPong;
    })();

    foundation.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof foundation
         * @interface IMessage
         * @property {foundation.IHeader|null} [header] Message header
         */

        /**
         * Constructs a new Message.
         * @memberof foundation
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {foundation.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof foundation.Message
         * @instance
         */
        Message.prototype.header = null;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof foundation.Message
         * @static
         * @param {foundation.IMessage=} [properties] Properties to set
         * @returns {foundation.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @function encode
         * @memberof foundation.Message
         * @static
         * @param {foundation.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof foundation.Message
         * @static
         * @param {foundation.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof foundation.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {foundation.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.foundation.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof foundation.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {foundation.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof foundation.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof foundation.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {foundation.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.foundation.Message)
                return object;
            let message = new $root.foundation.Message();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".foundation.Message.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof foundation.Message
         * @static
         * @param {foundation.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof foundation.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    return foundation;
})();

export const game = $root.game = (() => {

    /**
     * Namespace game.
     * @exports game
     * @namespace
     */
    const game = {};

    /**
     * Status enum.
     * @name game.Status
     * @enum {number}
     * @property {number} default=0 default value
     * @property {number} beting=1 beting value
     * @property {number} drawing=2 drawing value
     * @property {number} waiting=3 waiting value
     */
    game.Status = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "default"] = 0;
        values[valuesById[1] = "beting"] = 1;
        values[valuesById[2] = "drawing"] = 2;
        values[valuesById[3] = "waiting"] = 3;
        return values;
    })();

    game.BetRoundStart = (function() {

        /**
         * Properties of a BetRoundStart.
         * @memberof game
         * @interface IBetRoundStart
         * @property {foundation.IHeader|null} [header] BetRoundStart header
         * @property {string|null} [gameUuid] BetRoundStart gameUuid
         * @property {number|null} [timeRemain] BetRoundStart timeRemain
         */

        /**
         * Constructs a new BetRoundStart.
         * @memberof game
         * @classdesc Represents a BetRoundStart.
         * @implements IBetRoundStart
         * @constructor
         * @param {game.IBetRoundStart=} [properties] Properties to set
         */
        function BetRoundStart(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundStart header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.header = null;

        /**
         * BetRoundStart gameUuid.
         * @member {string} gameUuid
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.gameUuid = "";

        /**
         * BetRoundStart timeRemain.
         * @member {number} timeRemain
         * @memberof game.BetRoundStart
         * @instance
         */
        BetRoundStart.prototype.timeRemain = 0;

        /**
         * Creates a new BetRoundStart instance using the specified properties.
         * @function create
         * @memberof game.BetRoundStart
         * @static
         * @param {game.IBetRoundStart=} [properties] Properties to set
         * @returns {game.BetRoundStart} BetRoundStart instance
         */
        BetRoundStart.create = function create(properties) {
            return new BetRoundStart(properties);
        };

        /**
         * Encodes the specified BetRoundStart message. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @function encode
         * @memberof game.BetRoundStart
         * @static
         * @param {game.IBetRoundStart} message BetRoundStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundStart.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            if (message.timeRemain != null && Object.hasOwnProperty.call(message, "timeRemain"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeRemain);
            return writer;
        };

        /**
         * Encodes the specified BetRoundStart message, length delimited. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BetRoundStart
         * @static
         * @param {game.IBetRoundStart} message BetRoundStart message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundStart.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer.
         * @function decode
         * @memberof game.BetRoundStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BetRoundStart} BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundStart.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BetRoundStart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                case 3:
                    message.timeRemain = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BetRoundStart
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BetRoundStart} BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundStart.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundStart message.
         * @function verify
         * @memberof game.BetRoundStart
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundStart.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                if (!$util.isInteger(message.timeRemain))
                    return "timeRemain: integer expected";
            return null;
        };

        /**
         * Creates a BetRoundStart message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BetRoundStart
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BetRoundStart} BetRoundStart
         */
        BetRoundStart.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BetRoundStart)
                return object;
            let message = new $root.game.BetRoundStart();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BetRoundStart.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            if (object.timeRemain != null)
                message.timeRemain = object.timeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a BetRoundStart message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BetRoundStart
         * @static
         * @param {game.BetRoundStart} message BetRoundStart
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundStart.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
                object.timeRemain = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                object.timeRemain = message.timeRemain;
            return object;
        };

        /**
         * Converts this BetRoundStart to JSON.
         * @function toJSON
         * @memberof game.BetRoundStart
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundStart.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundStart;
    })();

    game.BetRoundCountdown = (function() {

        /**
         * Properties of a BetRoundCountdown.
         * @memberof game
         * @interface IBetRoundCountdown
         * @property {foundation.IHeader|null} [header] BetRoundCountdown header
         * @property {number|null} [timeRemain] BetRoundCountdown timeRemain
         */

        /**
         * Constructs a new BetRoundCountdown.
         * @memberof game
         * @classdesc Represents a BetRoundCountdown.
         * @implements IBetRoundCountdown
         * @constructor
         * @param {game.IBetRoundCountdown=} [properties] Properties to set
         */
        function BetRoundCountdown(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundCountdown header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BetRoundCountdown
         * @instance
         */
        BetRoundCountdown.prototype.header = null;

        /**
         * BetRoundCountdown timeRemain.
         * @member {number} timeRemain
         * @memberof game.BetRoundCountdown
         * @instance
         */
        BetRoundCountdown.prototype.timeRemain = 0;

        /**
         * Creates a new BetRoundCountdown instance using the specified properties.
         * @function create
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.IBetRoundCountdown=} [properties] Properties to set
         * @returns {game.BetRoundCountdown} BetRoundCountdown instance
         */
        BetRoundCountdown.create = function create(properties) {
            return new BetRoundCountdown(properties);
        };

        /**
         * Encodes the specified BetRoundCountdown message. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @function encode
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.IBetRoundCountdown} message BetRoundCountdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundCountdown.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.timeRemain != null && Object.hasOwnProperty.call(message, "timeRemain"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timeRemain);
            return writer;
        };

        /**
         * Encodes the specified BetRoundCountdown message, length delimited. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.IBetRoundCountdown} message BetRoundCountdown message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundCountdown.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer.
         * @function decode
         * @memberof game.BetRoundCountdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BetRoundCountdown} BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundCountdown.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BetRoundCountdown();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timeRemain = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BetRoundCountdown
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BetRoundCountdown} BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundCountdown.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundCountdown message.
         * @function verify
         * @memberof game.BetRoundCountdown
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundCountdown.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                if (!$util.isInteger(message.timeRemain))
                    return "timeRemain: integer expected";
            return null;
        };

        /**
         * Creates a BetRoundCountdown message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BetRoundCountdown
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BetRoundCountdown} BetRoundCountdown
         */
        BetRoundCountdown.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BetRoundCountdown)
                return object;
            let message = new $root.game.BetRoundCountdown();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BetRoundCountdown.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.timeRemain != null)
                message.timeRemain = object.timeRemain | 0;
            return message;
        };

        /**
         * Creates a plain object from a BetRoundCountdown message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BetRoundCountdown
         * @static
         * @param {game.BetRoundCountdown} message BetRoundCountdown
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundCountdown.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.timeRemain = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                object.timeRemain = message.timeRemain;
            return object;
        };

        /**
         * Converts this BetRoundCountdown to JSON.
         * @function toJSON
         * @memberof game.BetRoundCountdown
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundCountdown.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundCountdown;
    })();

    game.BetRoundEnd = (function() {

        /**
         * Properties of a BetRoundEnd.
         * @memberof game
         * @interface IBetRoundEnd
         * @property {foundation.IHeader|null} [header] BetRoundEnd header
         * @property {string|null} [gameUuid] BetRoundEnd gameUuid
         */

        /**
         * Constructs a new BetRoundEnd.
         * @memberof game
         * @classdesc Represents a BetRoundEnd.
         * @implements IBetRoundEnd
         * @constructor
         * @param {game.IBetRoundEnd=} [properties] Properties to set
         */
        function BetRoundEnd(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetRoundEnd header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.BetRoundEnd
         * @instance
         */
        BetRoundEnd.prototype.header = null;

        /**
         * BetRoundEnd gameUuid.
         * @member {string} gameUuid
         * @memberof game.BetRoundEnd
         * @instance
         */
        BetRoundEnd.prototype.gameUuid = "";

        /**
         * Creates a new BetRoundEnd instance using the specified properties.
         * @function create
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.IBetRoundEnd=} [properties] Properties to set
         * @returns {game.BetRoundEnd} BetRoundEnd instance
         */
        BetRoundEnd.create = function create(properties) {
            return new BetRoundEnd(properties);
        };

        /**
         * Encodes the specified BetRoundEnd message. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @function encode
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.IBetRoundEnd} message BetRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundEnd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gameUuid != null && Object.hasOwnProperty.call(message, "gameUuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameUuid);
            return writer;
        };

        /**
         * Encodes the specified BetRoundEnd message, length delimited. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.IBetRoundEnd} message BetRoundEnd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetRoundEnd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer.
         * @function decode
         * @memberof game.BetRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.BetRoundEnd} BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundEnd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.BetRoundEnd();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.gameUuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.BetRoundEnd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.BetRoundEnd} BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetRoundEnd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetRoundEnd message.
         * @function verify
         * @memberof game.BetRoundEnd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetRoundEnd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                if (!$util.isString(message.gameUuid))
                    return "gameUuid: string expected";
            return null;
        };

        /**
         * Creates a BetRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.BetRoundEnd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.BetRoundEnd} BetRoundEnd
         */
        BetRoundEnd.fromObject = function fromObject(object) {
            if (object instanceof $root.game.BetRoundEnd)
                return object;
            let message = new $root.game.BetRoundEnd();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.BetRoundEnd.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.gameUuid != null)
                message.gameUuid = String(object.gameUuid);
            return message;
        };

        /**
         * Creates a plain object from a BetRoundEnd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.BetRoundEnd
         * @static
         * @param {game.BetRoundEnd} message BetRoundEnd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetRoundEnd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.gameUuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.gameUuid != null && message.hasOwnProperty("gameUuid"))
                object.gameUuid = message.gameUuid;
            return object;
        };

        /**
         * Converts this BetRoundEnd to JSON.
         * @function toJSON
         * @memberof game.BetRoundEnd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetRoundEnd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetRoundEnd;
    })();

    game.GameStatus = (function() {

        /**
         * Properties of a GameStatus.
         * @memberof game
         * @interface IGameStatus
         * @property {foundation.IHeader|null} [header] GameStatus header
         * @property {game.Status|null} [status] GameStatus status
         * @property {number|null} [timeRemain] GameStatus timeRemain
         * @property {Array.<dealer.IDraw>|null} [draws] GameStatus draws
         */

        /**
         * Constructs a new GameStatus.
         * @memberof game
         * @classdesc Represents a GameStatus.
         * @implements IGameStatus
         * @constructor
         * @param {game.IGameStatus=} [properties] Properties to set
         */
        function GameStatus(properties) {
            this.draws = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameStatus header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.header = null;

        /**
         * GameStatus status.
         * @member {game.Status} status
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.status = 0;

        /**
         * GameStatus timeRemain.
         * @member {number} timeRemain
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.timeRemain = 0;

        /**
         * GameStatus draws.
         * @member {Array.<dealer.IDraw>} draws
         * @memberof game.GameStatus
         * @instance
         */
        GameStatus.prototype.draws = $util.emptyArray;

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @function create
         * @memberof game.GameStatus
         * @static
         * @param {game.IGameStatus=} [properties] Properties to set
         * @returns {game.GameStatus} GameStatus instance
         */
        GameStatus.create = function create(properties) {
            return new GameStatus(properties);
        };

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @function encode
         * @memberof game.GameStatus
         * @static
         * @param {game.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.timeRemain != null && Object.hasOwnProperty.call(message, "timeRemain"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.timeRemain);
            if (message.draws != null && message.draws.length)
                for (let i = 0; i < message.draws.length; ++i)
                    $root.dealer.Draw.encode(message.draws[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof game.GameStatus
         * @static
         * @param {game.IGameStatus} message GameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof game.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {game.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.game.GameStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.timeRemain = reader.int32();
                    break;
                case 4:
                    if (!(message.draws && message.draws.length))
                        message.draws = [];
                    message.draws.push($root.dealer.Draw.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof game.GameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {game.GameStatus} GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameStatus message.
         * @function verify
         * @memberof game.GameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                if (!$util.isInteger(message.timeRemain))
                    return "timeRemain: integer expected";
            if (message.draws != null && message.hasOwnProperty("draws")) {
                if (!Array.isArray(message.draws))
                    return "draws: array expected";
                for (let i = 0; i < message.draws.length; ++i) {
                    let error = $root.dealer.Draw.verify(message.draws[i]);
                    if (error)
                        return "draws." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof game.GameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {game.GameStatus} GameStatus
         */
        GameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.game.GameStatus)
                return object;
            let message = new $root.game.GameStatus();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".game.GameStatus.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            switch (object.status) {
            case "default":
            case 0:
                message.status = 0;
                break;
            case "beting":
            case 1:
                message.status = 1;
                break;
            case "drawing":
            case 2:
                message.status = 2;
                break;
            case "waiting":
            case 3:
                message.status = 3;
                break;
            }
            if (object.timeRemain != null)
                message.timeRemain = object.timeRemain | 0;
            if (object.draws) {
                if (!Array.isArray(object.draws))
                    throw TypeError(".game.GameStatus.draws: array expected");
                message.draws = [];
                for (let i = 0; i < object.draws.length; ++i) {
                    if (typeof object.draws[i] !== "object")
                        throw TypeError(".game.GameStatus.draws: object expected");
                    message.draws[i] = $root.dealer.Draw.fromObject(object.draws[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof game.GameStatus
         * @static
         * @param {game.GameStatus} message GameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.draws = [];
            if (options.defaults) {
                object.header = null;
                object.status = options.enums === String ? "default" : 0;
                object.timeRemain = 0;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.game.Status[message.status] : message.status;
            if (message.timeRemain != null && message.hasOwnProperty("timeRemain"))
                object.timeRemain = message.timeRemain;
            if (message.draws && message.draws.length) {
                object.draws = [];
                for (let j = 0; j < message.draws.length; ++j)
                    object.draws[j] = $root.dealer.Draw.toObject(message.draws[j], options);
            }
            return object;
        };

        /**
         * Converts this GameStatus to JSON.
         * @function toJSON
         * @memberof game.GameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameStatus;
    })();

    return game;
})();

export const lobby = $root.lobby = (() => {

    /**
     * Namespace lobby.
     * @exports lobby
     * @namespace
     */
    const lobby = {};

    lobby.LobbyInfo = (function() {

        /**
         * Properties of a LobbyInfo.
         * @memberof lobby
         * @interface ILobbyInfo
         * @property {foundation.IHeader|null} [header] LobbyInfo header
         * @property {Array.<lobby.ITableInfo>|null} [tables] LobbyInfo tables
         */

        /**
         * Constructs a new LobbyInfo.
         * @memberof lobby
         * @classdesc Represents a LobbyInfo.
         * @implements ILobbyInfo
         * @constructor
         * @param {lobby.ILobbyInfo=} [properties] Properties to set
         */
        function LobbyInfo(properties) {
            this.tables = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LobbyInfo header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof lobby.LobbyInfo
         * @instance
         */
        LobbyInfo.prototype.header = null;

        /**
         * LobbyInfo tables.
         * @member {Array.<lobby.ITableInfo>} tables
         * @memberof lobby.LobbyInfo
         * @instance
         */
        LobbyInfo.prototype.tables = $util.emptyArray;

        /**
         * Creates a new LobbyInfo instance using the specified properties.
         * @function create
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.ILobbyInfo=} [properties] Properties to set
         * @returns {lobby.LobbyInfo} LobbyInfo instance
         */
        LobbyInfo.create = function create(properties) {
            return new LobbyInfo(properties);
        };

        /**
         * Encodes the specified LobbyInfo message. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @function encode
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.ILobbyInfo} message LobbyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tables != null && message.tables.length)
                for (let i = 0; i < message.tables.length; ++i)
                    $root.lobby.TableInfo.encode(message.tables[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LobbyInfo message, length delimited. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.ILobbyInfo} message LobbyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LobbyInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.LobbyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.LobbyInfo} LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.LobbyInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tables && message.tables.length))
                        message.tables = [];
                    message.tables.push($root.lobby.TableInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.LobbyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.LobbyInfo} LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LobbyInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LobbyInfo message.
         * @function verify
         * @memberof lobby.LobbyInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LobbyInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.tables != null && message.hasOwnProperty("tables")) {
                if (!Array.isArray(message.tables))
                    return "tables: array expected";
                for (let i = 0; i < message.tables.length; ++i) {
                    let error = $root.lobby.TableInfo.verify(message.tables[i]);
                    if (error)
                        return "tables." + error;
                }
            }
            return null;
        };

        /**
         * Creates a LobbyInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby.LobbyInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby.LobbyInfo} LobbyInfo
         */
        LobbyInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby.LobbyInfo)
                return object;
            let message = new $root.lobby.LobbyInfo();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".lobby.LobbyInfo.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.tables) {
                if (!Array.isArray(object.tables))
                    throw TypeError(".lobby.LobbyInfo.tables: array expected");
                message.tables = [];
                for (let i = 0; i < object.tables.length; ++i) {
                    if (typeof object.tables[i] !== "object")
                        throw TypeError(".lobby.LobbyInfo.tables: object expected");
                    message.tables[i] = $root.lobby.TableInfo.fromObject(object.tables[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a LobbyInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby.LobbyInfo
         * @static
         * @param {lobby.LobbyInfo} message LobbyInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LobbyInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.tables = [];
            if (options.defaults)
                object.header = null;
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.tables && message.tables.length) {
                object.tables = [];
                for (let j = 0; j < message.tables.length; ++j)
                    object.tables[j] = $root.lobby.TableInfo.toObject(message.tables[j], options);
            }
            return object;
        };

        /**
         * Converts this LobbyInfo to JSON.
         * @function toJSON
         * @memberof lobby.LobbyInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LobbyInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LobbyInfo;
    })();

    lobby.TableInfo = (function() {

        /**
         * Properties of a TableInfo.
         * @memberof lobby
         * @interface ITableInfo
         * @property {string|null} [uuid] TableInfo uuid
         * @property {string|null} [name] TableInfo name
         */

        /**
         * Constructs a new TableInfo.
         * @memberof lobby
         * @classdesc Represents a TableInfo.
         * @implements ITableInfo
         * @constructor
         * @param {lobby.ITableInfo=} [properties] Properties to set
         */
        function TableInfo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableInfo uuid.
         * @member {string} uuid
         * @memberof lobby.TableInfo
         * @instance
         */
        TableInfo.prototype.uuid = "";

        /**
         * TableInfo name.
         * @member {string} name
         * @memberof lobby.TableInfo
         * @instance
         */
        TableInfo.prototype.name = "";

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @function create
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.ITableInfo=} [properties] Properties to set
         * @returns {lobby.TableInfo} TableInfo instance
         */
        TableInfo.create = function create(properties) {
            return new TableInfo(properties);
        };

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @function encode
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uuid);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.ITableInfo} message TableInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @function decode
         * @memberof lobby.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {lobby.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.lobby.TableInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uuid = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof lobby.TableInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {lobby.TableInfo} TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableInfo message.
         * @function verify
         * @memberof lobby.TableInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof lobby.TableInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {lobby.TableInfo} TableInfo
         */
        TableInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.lobby.TableInfo)
                return object;
            let message = new $root.lobby.TableInfo();
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof lobby.TableInfo
         * @static
         * @param {lobby.TableInfo} message TableInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.uuid = "";
                object.name = "";
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this TableInfo to JSON.
         * @function toJSON
         * @memberof lobby.TableInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableInfo;
    })();

    return lobby;
})();

export const roadmap = $root.roadmap = (() => {

    /**
     * Namespace roadmap.
     * @exports roadmap
     * @namespace
     */
    const roadmap = {};

    /**
     * Block enum.
     * @name roadmap.Block
     * @enum {number}
     * @property {number} BlockDefault=0 BlockDefault value
     * @property {number} Banker=1 Banker value
     * @property {number} Player=2 Player value
     * @property {number} Tie=3 Tie value
     * @property {number} BankerAndBankerPair=4 BankerAndBankerPair value
     * @property {number} BankerAndPlayerPair=5 BankerAndPlayerPair value
     * @property {number} BankerAndBothPair=6 BankerAndBothPair value
     * @property {number} PlayerAndBankerPair=7 PlayerAndBankerPair value
     * @property {number} PlayerAndPlayerPair=8 PlayerAndPlayerPair value
     * @property {number} PlayerAndBothPair=9 PlayerAndBothPair value
     * @property {number} TieAndBankerPair=10 TieAndBankerPair value
     * @property {number} TieAndPlayerPair=11 TieAndPlayerPair value
     * @property {number} TieAndBothPair=12 TieAndBothPair value
     * @property {number} BankerAndTie=13 BankerAndTie value
     * @property {number} BankerAndBankerPairAndTie=14 BankerAndBankerPairAndTie value
     * @property {number} BankerAndPlayerPairAndTie=15 BankerAndPlayerPairAndTie value
     * @property {number} BankerAndBothPairAndTie=16 BankerAndBothPairAndTie value
     * @property {number} PlayerAndTie=17 PlayerAndTie value
     * @property {number} PlayerAndBankerPairAndTie=18 PlayerAndBankerPairAndTie value
     * @property {number} PlayerAndPlayerPairAndTie=19 PlayerAndPlayerPairAndTie value
     * @property {number} PlayerAndBothPairAndTie=20 PlayerAndBothPairAndTie value
     */
    roadmap.Block = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BlockDefault"] = 0;
        values[valuesById[1] = "Banker"] = 1;
        values[valuesById[2] = "Player"] = 2;
        values[valuesById[3] = "Tie"] = 3;
        values[valuesById[4] = "BankerAndBankerPair"] = 4;
        values[valuesById[5] = "BankerAndPlayerPair"] = 5;
        values[valuesById[6] = "BankerAndBothPair"] = 6;
        values[valuesById[7] = "PlayerAndBankerPair"] = 7;
        values[valuesById[8] = "PlayerAndPlayerPair"] = 8;
        values[valuesById[9] = "PlayerAndBothPair"] = 9;
        values[valuesById[10] = "TieAndBankerPair"] = 10;
        values[valuesById[11] = "TieAndPlayerPair"] = 11;
        values[valuesById[12] = "TieAndBothPair"] = 12;
        values[valuesById[13] = "BankerAndTie"] = 13;
        values[valuesById[14] = "BankerAndBankerPairAndTie"] = 14;
        values[valuesById[15] = "BankerAndPlayerPairAndTie"] = 15;
        values[valuesById[16] = "BankerAndBothPairAndTie"] = 16;
        values[valuesById[17] = "PlayerAndTie"] = 17;
        values[valuesById[18] = "PlayerAndBankerPairAndTie"] = 18;
        values[valuesById[19] = "PlayerAndPlayerPairAndTie"] = 19;
        values[valuesById[20] = "PlayerAndBothPairAndTie"] = 20;
        return values;
    })();

    roadmap.Column = (function() {

        /**
         * Properties of a Column.
         * @memberof roadmap
         * @interface IColumn
         * @property {Array.<roadmap.Block>|null} [blocks] Column blocks
         */

        /**
         * Constructs a new Column.
         * @memberof roadmap
         * @classdesc Represents a Column.
         * @implements IColumn
         * @constructor
         * @param {roadmap.IColumn=} [properties] Properties to set
         */
        function Column(properties) {
            this.blocks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Column blocks.
         * @member {Array.<roadmap.Block>} blocks
         * @memberof roadmap.Column
         * @instance
         */
        Column.prototype.blocks = $util.emptyArray;

        /**
         * Creates a new Column instance using the specified properties.
         * @function create
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.IColumn=} [properties] Properties to set
         * @returns {roadmap.Column} Column instance
         */
        Column.create = function create(properties) {
            return new Column(properties);
        };

        /**
         * Encodes the specified Column message. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @function encode
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.IColumn} message Column message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Column.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blocks != null && message.blocks.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.blocks.length; ++i)
                    writer.int32(message.blocks[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Column message, length delimited. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.IColumn} message Column message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Column.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Column message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.Column
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.Column} Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Column.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.Column();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.blocks && message.blocks.length))
                        message.blocks = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.blocks.push(reader.int32());
                    } else
                        message.blocks.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Column message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.Column
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.Column} Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Column.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Column message.
         * @function verify
         * @memberof roadmap.Column
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Column.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blocks != null && message.hasOwnProperty("blocks")) {
                if (!Array.isArray(message.blocks))
                    return "blocks: array expected";
                for (let i = 0; i < message.blocks.length; ++i)
                    switch (message.blocks[i]) {
                    default:
                        return "blocks: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a Column message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.Column
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.Column} Column
         */
        Column.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.Column)
                return object;
            let message = new $root.roadmap.Column();
            if (object.blocks) {
                if (!Array.isArray(object.blocks))
                    throw TypeError(".roadmap.Column.blocks: array expected");
                message.blocks = [];
                for (let i = 0; i < object.blocks.length; ++i)
                    switch (object.blocks[i]) {
                    default:
                    case "BlockDefault":
                    case 0:
                        message.blocks[i] = 0;
                        break;
                    case "Banker":
                    case 1:
                        message.blocks[i] = 1;
                        break;
                    case "Player":
                    case 2:
                        message.blocks[i] = 2;
                        break;
                    case "Tie":
                    case 3:
                        message.blocks[i] = 3;
                        break;
                    case "BankerAndBankerPair":
                    case 4:
                        message.blocks[i] = 4;
                        break;
                    case "BankerAndPlayerPair":
                    case 5:
                        message.blocks[i] = 5;
                        break;
                    case "BankerAndBothPair":
                    case 6:
                        message.blocks[i] = 6;
                        break;
                    case "PlayerAndBankerPair":
                    case 7:
                        message.blocks[i] = 7;
                        break;
                    case "PlayerAndPlayerPair":
                    case 8:
                        message.blocks[i] = 8;
                        break;
                    case "PlayerAndBothPair":
                    case 9:
                        message.blocks[i] = 9;
                        break;
                    case "TieAndBankerPair":
                    case 10:
                        message.blocks[i] = 10;
                        break;
                    case "TieAndPlayerPair":
                    case 11:
                        message.blocks[i] = 11;
                        break;
                    case "TieAndBothPair":
                    case 12:
                        message.blocks[i] = 12;
                        break;
                    case "BankerAndTie":
                    case 13:
                        message.blocks[i] = 13;
                        break;
                    case "BankerAndBankerPairAndTie":
                    case 14:
                        message.blocks[i] = 14;
                        break;
                    case "BankerAndPlayerPairAndTie":
                    case 15:
                        message.blocks[i] = 15;
                        break;
                    case "BankerAndBothPairAndTie":
                    case 16:
                        message.blocks[i] = 16;
                        break;
                    case "PlayerAndTie":
                    case 17:
                        message.blocks[i] = 17;
                        break;
                    case "PlayerAndBankerPairAndTie":
                    case 18:
                        message.blocks[i] = 18;
                        break;
                    case "PlayerAndPlayerPairAndTie":
                    case 19:
                        message.blocks[i] = 19;
                        break;
                    case "PlayerAndBothPairAndTie":
                    case 20:
                        message.blocks[i] = 20;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a Column message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.Column
         * @static
         * @param {roadmap.Column} message Column
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Column.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.blocks = [];
            if (message.blocks && message.blocks.length) {
                object.blocks = [];
                for (let j = 0; j < message.blocks.length; ++j)
                    object.blocks[j] = options.enums === String ? $root.roadmap.Block[message.blocks[j]] : message.blocks[j];
            }
            return object;
        };

        /**
         * Converts this Column to JSON.
         * @function toJSON
         * @memberof roadmap.Column
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Column.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Column;
    })();

    roadmap.BeadPlate = (function() {

        /**
         * Properties of a BeadPlate.
         * @memberof roadmap
         * @interface IBeadPlate
         * @property {Array.<roadmap.Block>|null} [blocks] BeadPlate blocks
         */

        /**
         * Constructs a new BeadPlate.
         * @memberof roadmap
         * @classdesc Represents a BeadPlate.
         * @implements IBeadPlate
         * @constructor
         * @param {roadmap.IBeadPlate=} [properties] Properties to set
         */
        function BeadPlate(properties) {
            this.blocks = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BeadPlate blocks.
         * @member {Array.<roadmap.Block>} blocks
         * @memberof roadmap.BeadPlate
         * @instance
         */
        BeadPlate.prototype.blocks = $util.emptyArray;

        /**
         * Creates a new BeadPlate instance using the specified properties.
         * @function create
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.IBeadPlate=} [properties] Properties to set
         * @returns {roadmap.BeadPlate} BeadPlate instance
         */
        BeadPlate.create = function create(properties) {
            return new BeadPlate(properties);
        };

        /**
         * Encodes the specified BeadPlate message. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @function encode
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.IBeadPlate} message BeadPlate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeadPlate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blocks != null && message.blocks.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.blocks.length; ++i)
                    writer.int32(message.blocks[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified BeadPlate message, length delimited. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.IBeadPlate} message BeadPlate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BeadPlate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BeadPlate message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.BeadPlate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.BeadPlate} BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeadPlate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.BeadPlate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.blocks && message.blocks.length))
                        message.blocks = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.blocks.push(reader.int32());
                    } else
                        message.blocks.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BeadPlate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.BeadPlate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.BeadPlate} BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BeadPlate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BeadPlate message.
         * @function verify
         * @memberof roadmap.BeadPlate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BeadPlate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.blocks != null && message.hasOwnProperty("blocks")) {
                if (!Array.isArray(message.blocks))
                    return "blocks: array expected";
                for (let i = 0; i < message.blocks.length; ++i)
                    switch (message.blocks[i]) {
                    default:
                        return "blocks: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a BeadPlate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.BeadPlate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.BeadPlate} BeadPlate
         */
        BeadPlate.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.BeadPlate)
                return object;
            let message = new $root.roadmap.BeadPlate();
            if (object.blocks) {
                if (!Array.isArray(object.blocks))
                    throw TypeError(".roadmap.BeadPlate.blocks: array expected");
                message.blocks = [];
                for (let i = 0; i < object.blocks.length; ++i)
                    switch (object.blocks[i]) {
                    default:
                    case "BlockDefault":
                    case 0:
                        message.blocks[i] = 0;
                        break;
                    case "Banker":
                    case 1:
                        message.blocks[i] = 1;
                        break;
                    case "Player":
                    case 2:
                        message.blocks[i] = 2;
                        break;
                    case "Tie":
                    case 3:
                        message.blocks[i] = 3;
                        break;
                    case "BankerAndBankerPair":
                    case 4:
                        message.blocks[i] = 4;
                        break;
                    case "BankerAndPlayerPair":
                    case 5:
                        message.blocks[i] = 5;
                        break;
                    case "BankerAndBothPair":
                    case 6:
                        message.blocks[i] = 6;
                        break;
                    case "PlayerAndBankerPair":
                    case 7:
                        message.blocks[i] = 7;
                        break;
                    case "PlayerAndPlayerPair":
                    case 8:
                        message.blocks[i] = 8;
                        break;
                    case "PlayerAndBothPair":
                    case 9:
                        message.blocks[i] = 9;
                        break;
                    case "TieAndBankerPair":
                    case 10:
                        message.blocks[i] = 10;
                        break;
                    case "TieAndPlayerPair":
                    case 11:
                        message.blocks[i] = 11;
                        break;
                    case "TieAndBothPair":
                    case 12:
                        message.blocks[i] = 12;
                        break;
                    case "BankerAndTie":
                    case 13:
                        message.blocks[i] = 13;
                        break;
                    case "BankerAndBankerPairAndTie":
                    case 14:
                        message.blocks[i] = 14;
                        break;
                    case "BankerAndPlayerPairAndTie":
                    case 15:
                        message.blocks[i] = 15;
                        break;
                    case "BankerAndBothPairAndTie":
                    case 16:
                        message.blocks[i] = 16;
                        break;
                    case "PlayerAndTie":
                    case 17:
                        message.blocks[i] = 17;
                        break;
                    case "PlayerAndBankerPairAndTie":
                    case 18:
                        message.blocks[i] = 18;
                        break;
                    case "PlayerAndPlayerPairAndTie":
                    case 19:
                        message.blocks[i] = 19;
                        break;
                    case "PlayerAndBothPairAndTie":
                    case 20:
                        message.blocks[i] = 20;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a BeadPlate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.BeadPlate
         * @static
         * @param {roadmap.BeadPlate} message BeadPlate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BeadPlate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.blocks = [];
            if (message.blocks && message.blocks.length) {
                object.blocks = [];
                for (let j = 0; j < message.blocks.length; ++j)
                    object.blocks[j] = options.enums === String ? $root.roadmap.Block[message.blocks[j]] : message.blocks[j];
            }
            return object;
        };

        /**
         * Converts this BeadPlate to JSON.
         * @function toJSON
         * @memberof roadmap.BeadPlate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BeadPlate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BeadPlate;
    })();

    roadmap.BigRoad = (function() {

        /**
         * Properties of a BigRoad.
         * @memberof roadmap
         * @interface IBigRoad
         * @property {Array.<roadmap.IColumn>|null} [columns] BigRoad columns
         */

        /**
         * Constructs a new BigRoad.
         * @memberof roadmap
         * @classdesc Represents a BigRoad.
         * @implements IBigRoad
         * @constructor
         * @param {roadmap.IBigRoad=} [properties] Properties to set
         */
        function BigRoad(properties) {
            this.columns = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BigRoad columns.
         * @member {Array.<roadmap.IColumn>} columns
         * @memberof roadmap.BigRoad
         * @instance
         */
        BigRoad.prototype.columns = $util.emptyArray;

        /**
         * Creates a new BigRoad instance using the specified properties.
         * @function create
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.IBigRoad=} [properties] Properties to set
         * @returns {roadmap.BigRoad} BigRoad instance
         */
        BigRoad.create = function create(properties) {
            return new BigRoad(properties);
        };

        /**
         * Encodes the specified BigRoad message. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @function encode
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.IBigRoad} message BigRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigRoad.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.columns != null && message.columns.length)
                for (let i = 0; i < message.columns.length; ++i)
                    $root.roadmap.Column.encode(message.columns[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified BigRoad message, length delimited. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.IBigRoad} message BigRoad message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BigRoad.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BigRoad message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.BigRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.BigRoad} BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigRoad.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.BigRoad();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.columns && message.columns.length))
                        message.columns = [];
                    message.columns.push($root.roadmap.Column.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BigRoad message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.BigRoad
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.BigRoad} BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BigRoad.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BigRoad message.
         * @function verify
         * @memberof roadmap.BigRoad
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BigRoad.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.columns != null && message.hasOwnProperty("columns")) {
                if (!Array.isArray(message.columns))
                    return "columns: array expected";
                for (let i = 0; i < message.columns.length; ++i) {
                    let error = $root.roadmap.Column.verify(message.columns[i]);
                    if (error)
                        return "columns." + error;
                }
            }
            return null;
        };

        /**
         * Creates a BigRoad message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.BigRoad
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.BigRoad} BigRoad
         */
        BigRoad.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.BigRoad)
                return object;
            let message = new $root.roadmap.BigRoad();
            if (object.columns) {
                if (!Array.isArray(object.columns))
                    throw TypeError(".roadmap.BigRoad.columns: array expected");
                message.columns = [];
                for (let i = 0; i < object.columns.length; ++i) {
                    if (typeof object.columns[i] !== "object")
                        throw TypeError(".roadmap.BigRoad.columns: object expected");
                    message.columns[i] = $root.roadmap.Column.fromObject(object.columns[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a BigRoad message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.BigRoad
         * @static
         * @param {roadmap.BigRoad} message BigRoad
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BigRoad.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.columns = [];
            if (message.columns && message.columns.length) {
                object.columns = [];
                for (let j = 0; j < message.columns.length; ++j)
                    object.columns[j] = $root.roadmap.Column.toObject(message.columns[j], options);
            }
            return object;
        };

        /**
         * Converts this BigRoad to JSON.
         * @function toJSON
         * @memberof roadmap.BigRoad
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BigRoad.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BigRoad;
    })();

    roadmap.Roadmap = (function() {

        /**
         * Properties of a Roadmap.
         * @memberof roadmap
         * @interface IRoadmap
         * @property {foundation.IHeader|null} [header] Roadmap header
         * @property {roadmap.IBeadPlate|null} [beadPlate] Roadmap beadPlate
         * @property {roadmap.IBigRoad|null} [bigRoad] Roadmap bigRoad
         */

        /**
         * Constructs a new Roadmap.
         * @memberof roadmap
         * @classdesc Represents a Roadmap.
         * @implements IRoadmap
         * @constructor
         * @param {roadmap.IRoadmap=} [properties] Properties to set
         */
        function Roadmap(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Roadmap header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.header = null;

        /**
         * Roadmap beadPlate.
         * @member {roadmap.IBeadPlate|null|undefined} beadPlate
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.beadPlate = null;

        /**
         * Roadmap bigRoad.
         * @member {roadmap.IBigRoad|null|undefined} bigRoad
         * @memberof roadmap.Roadmap
         * @instance
         */
        Roadmap.prototype.bigRoad = null;

        /**
         * Creates a new Roadmap instance using the specified properties.
         * @function create
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.IRoadmap=} [properties] Properties to set
         * @returns {roadmap.Roadmap} Roadmap instance
         */
        Roadmap.create = function create(properties) {
            return new Roadmap(properties);
        };

        /**
         * Encodes the specified Roadmap message. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @function encode
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.IRoadmap} message Roadmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Roadmap.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.beadPlate != null && Object.hasOwnProperty.call(message, "beadPlate"))
                $root.roadmap.BeadPlate.encode(message.beadPlate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.bigRoad != null && Object.hasOwnProperty.call(message, "bigRoad"))
                $root.roadmap.BigRoad.encode(message.bigRoad, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Roadmap message, length delimited. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @function encodeDelimited
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.IRoadmap} message Roadmap message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Roadmap.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Roadmap message from the specified reader or buffer.
         * @function decode
         * @memberof roadmap.Roadmap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {roadmap.Roadmap} Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Roadmap.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.roadmap.Roadmap();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.beadPlate = $root.roadmap.BeadPlate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.bigRoad = $root.roadmap.BigRoad.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Roadmap message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof roadmap.Roadmap
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {roadmap.Roadmap} Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Roadmap.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Roadmap message.
         * @function verify
         * @memberof roadmap.Roadmap
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Roadmap.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.beadPlate != null && message.hasOwnProperty("beadPlate")) {
                let error = $root.roadmap.BeadPlate.verify(message.beadPlate);
                if (error)
                    return "beadPlate." + error;
            }
            if (message.bigRoad != null && message.hasOwnProperty("bigRoad")) {
                let error = $root.roadmap.BigRoad.verify(message.bigRoad);
                if (error)
                    return "bigRoad." + error;
            }
            return null;
        };

        /**
         * Creates a Roadmap message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof roadmap.Roadmap
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {roadmap.Roadmap} Roadmap
         */
        Roadmap.fromObject = function fromObject(object) {
            if (object instanceof $root.roadmap.Roadmap)
                return object;
            let message = new $root.roadmap.Roadmap();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".roadmap.Roadmap.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.beadPlate != null) {
                if (typeof object.beadPlate !== "object")
                    throw TypeError(".roadmap.Roadmap.beadPlate: object expected");
                message.beadPlate = $root.roadmap.BeadPlate.fromObject(object.beadPlate);
            }
            if (object.bigRoad != null) {
                if (typeof object.bigRoad !== "object")
                    throw TypeError(".roadmap.Roadmap.bigRoad: object expected");
                message.bigRoad = $root.roadmap.BigRoad.fromObject(object.bigRoad);
            }
            return message;
        };

        /**
         * Creates a plain object from a Roadmap message. Also converts values to other types if specified.
         * @function toObject
         * @memberof roadmap.Roadmap
         * @static
         * @param {roadmap.Roadmap} message Roadmap
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Roadmap.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.beadPlate = null;
                object.bigRoad = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.beadPlate != null && message.hasOwnProperty("beadPlate"))
                object.beadPlate = $root.roadmap.BeadPlate.toObject(message.beadPlate, options);
            if (message.bigRoad != null && message.hasOwnProperty("bigRoad"))
                object.bigRoad = $root.roadmap.BigRoad.toObject(message.bigRoad, options);
            return object;
        };

        /**
         * Converts this Roadmap to JSON.
         * @function toJSON
         * @memberof roadmap.Roadmap
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Roadmap.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Roadmap;
    })();

    return roadmap;
})();

export const route = $root.route = (() => {

    /**
     * Namespace route.
     * @exports route
     * @namespace
     */
    const route = {};

    /**
     * URI enum.
     * @name route.URI
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} LoginCall=1 LoginCall value
     * @property {number} LoginRecall=2 LoginRecall value
     * @property {number} LobbyInfo=3 LobbyInfo value
     * @property {number} UserInfo=4 UserInfo value
     * @property {number} TableJoinCall=5 TableJoinCall value
     * @property {number} TableJoinRecall=6 TableJoinRecall value
     * @property {number} BetCall=7 BetCall value
     * @property {number} BetRecall=8 BetRecall value
     * @property {number} BetResetCall=9 BetResetCall value
     * @property {number} BetResetRecall=10 BetResetRecall value
     * @property {number} Draw=11 Draw value
     * @property {number} DealerGameResult=12 DealerGameResult value
     * @property {number} BroadcastGameResult=13 BroadcastGameResult value
     * @property {number} BetRoundStart=14 BetRoundStart value
     * @property {number} BetRoundEnd=15 BetRoundEnd value
     * @property {number} BetRoundCountdown=16 BetRoundCountdown value
     * @property {number} HeartbeatPing=17 HeartbeatPing value
     * @property {number} HeartbeatPong=18 HeartbeatPong value
     * @property {number} DealerRoundStartCall=19 DealerRoundStartCall value
     * @property {number} DealerRoundStartRecall=20 DealerRoundStartRecall value
     * @property {number} DealerRoundEndCall=21 DealerRoundEndCall value
     * @property {number} DealerRoundEndRecall=22 DealerRoundEndRecall value
     * @property {number} BroadcastDealerRoundEnd=220 BroadcastDealerRoundEnd value
     * @property {number} BetError=23 BetError value
     * @property {number} GameStatus=24 GameStatus value
     * @property {number} DealerGameStatus=25 DealerGameStatus value
     * @property {number} Roadmap=26 Roadmap value
     */
    route.URI = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "LoginCall"] = 1;
        values[valuesById[2] = "LoginRecall"] = 2;
        values[valuesById[3] = "LobbyInfo"] = 3;
        values[valuesById[4] = "UserInfo"] = 4;
        values[valuesById[5] = "TableJoinCall"] = 5;
        values[valuesById[6] = "TableJoinRecall"] = 6;
        values[valuesById[7] = "BetCall"] = 7;
        values[valuesById[8] = "BetRecall"] = 8;
        values[valuesById[9] = "BetResetCall"] = 9;
        values[valuesById[10] = "BetResetRecall"] = 10;
        values[valuesById[11] = "Draw"] = 11;
        values[valuesById[12] = "DealerGameResult"] = 12;
        values[valuesById[13] = "BroadcastGameResult"] = 13;
        values[valuesById[14] = "BetRoundStart"] = 14;
        values[valuesById[15] = "BetRoundEnd"] = 15;
        values[valuesById[16] = "BetRoundCountdown"] = 16;
        values[valuesById[17] = "HeartbeatPing"] = 17;
        values[valuesById[18] = "HeartbeatPong"] = 18;
        values[valuesById[19] = "DealerRoundStartCall"] = 19;
        values[valuesById[20] = "DealerRoundStartRecall"] = 20;
        values[valuesById[21] = "DealerRoundEndCall"] = 21;
        values[valuesById[22] = "DealerRoundEndRecall"] = 22;
        values[valuesById[220] = "BroadcastDealerRoundEnd"] = 220;
        values[valuesById[23] = "BetError"] = 23;
        values[valuesById[24] = "GameStatus"] = 24;
        values[valuesById[25] = "DealerGameStatus"] = 25;
        values[valuesById[26] = "Roadmap"] = 26;
        return values;
    })();

    return route;
})();

export const table = $root.table = (() => {

    /**
     * Namespace table.
     * @exports table
     * @namespace
     */
    const table = {};

    table.Table = (function() {

        /**
         * Properties of a Table.
         * @memberof table
         * @interface ITable
         * @property {table.IBetStatus|null} [betStatus] Table betStatus
         * @property {string|null} [streamingUrl] Table streamingUrl
         */

        /**
         * Constructs a new Table.
         * @memberof table
         * @classdesc Represents a Table.
         * @implements ITable
         * @constructor
         * @param {table.ITable=} [properties] Properties to set
         */
        function Table(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Table betStatus.
         * @member {table.IBetStatus|null|undefined} betStatus
         * @memberof table.Table
         * @instance
         */
        Table.prototype.betStatus = null;

        /**
         * Table streamingUrl.
         * @member {string} streamingUrl
         * @memberof table.Table
         * @instance
         */
        Table.prototype.streamingUrl = "";

        /**
         * Creates a new Table instance using the specified properties.
         * @function create
         * @memberof table.Table
         * @static
         * @param {table.ITable=} [properties] Properties to set
         * @returns {table.Table} Table instance
         */
        Table.create = function create(properties) {
            return new Table(properties);
        };

        /**
         * Encodes the specified Table message. Does not implicitly {@link table.Table.verify|verify} messages.
         * @function encode
         * @memberof table.Table
         * @static
         * @param {table.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.betStatus != null && Object.hasOwnProperty.call(message, "betStatus"))
                $root.table.BetStatus.encode(message.betStatus, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.streamingUrl != null && Object.hasOwnProperty.call(message, "streamingUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.streamingUrl);
            return writer;
        };

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link table.Table.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.Table
         * @static
         * @param {table.ITable} message Table message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Table.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @function decode
         * @memberof table.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.Table();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.betStatus = $root.table.BetStatus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.streamingUrl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.Table
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.Table} Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Table.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Table message.
         * @function verify
         * @memberof table.Table
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Table.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.betStatus != null && message.hasOwnProperty("betStatus")) {
                let error = $root.table.BetStatus.verify(message.betStatus);
                if (error)
                    return "betStatus." + error;
            }
            if (message.streamingUrl != null && message.hasOwnProperty("streamingUrl"))
                if (!$util.isString(message.streamingUrl))
                    return "streamingUrl: string expected";
            return null;
        };

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.Table
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.Table} Table
         */
        Table.fromObject = function fromObject(object) {
            if (object instanceof $root.table.Table)
                return object;
            let message = new $root.table.Table();
            if (object.betStatus != null) {
                if (typeof object.betStatus !== "object")
                    throw TypeError(".table.Table.betStatus: object expected");
                message.betStatus = $root.table.BetStatus.fromObject(object.betStatus);
            }
            if (object.streamingUrl != null)
                message.streamingUrl = String(object.streamingUrl);
            return message;
        };

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.Table
         * @static
         * @param {table.Table} message Table
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Table.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.betStatus = null;
                object.streamingUrl = "";
            }
            if (message.betStatus != null && message.hasOwnProperty("betStatus"))
                object.betStatus = $root.table.BetStatus.toObject(message.betStatus, options);
            if (message.streamingUrl != null && message.hasOwnProperty("streamingUrl"))
                object.streamingUrl = message.streamingUrl;
            return object;
        };

        /**
         * Converts this Table to JSON.
         * @function toJSON
         * @memberof table.Table
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Table.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Table;
    })();

    table.TableJoinCall = (function() {

        /**
         * Properties of a TableJoinCall.
         * @memberof table
         * @interface ITableJoinCall
         * @property {foundation.IHeader|null} [header] TableJoinCall header
         * @property {string|null} [uuid] TableJoinCall uuid
         */

        /**
         * Constructs a new TableJoinCall.
         * @memberof table
         * @classdesc Represents a TableJoinCall.
         * @implements ITableJoinCall
         * @constructor
         * @param {table.ITableJoinCall=} [properties] Properties to set
         */
        function TableJoinCall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableJoinCall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof table.TableJoinCall
         * @instance
         */
        TableJoinCall.prototype.header = null;

        /**
         * TableJoinCall uuid.
         * @member {string} uuid
         * @memberof table.TableJoinCall
         * @instance
         */
        TableJoinCall.prototype.uuid = "";

        /**
         * Creates a new TableJoinCall instance using the specified properties.
         * @function create
         * @memberof table.TableJoinCall
         * @static
         * @param {table.ITableJoinCall=} [properties] Properties to set
         * @returns {table.TableJoinCall} TableJoinCall instance
         */
        TableJoinCall.create = function create(properties) {
            return new TableJoinCall(properties);
        };

        /**
         * Encodes the specified TableJoinCall message. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @function encode
         * @memberof table.TableJoinCall
         * @static
         * @param {table.ITableJoinCall} message TableJoinCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinCall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.uuid != null && Object.hasOwnProperty.call(message, "uuid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.uuid);
            return writer;
        };

        /**
         * Encodes the specified TableJoinCall message, length delimited. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.TableJoinCall
         * @static
         * @param {table.ITableJoinCall} message TableJoinCall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinCall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer.
         * @function decode
         * @memberof table.TableJoinCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.TableJoinCall} TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinCall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.TableJoinCall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.uuid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.TableJoinCall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.TableJoinCall} TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinCall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableJoinCall message.
         * @function verify
         * @memberof table.TableJoinCall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableJoinCall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                if (!$util.isString(message.uuid))
                    return "uuid: string expected";
            return null;
        };

        /**
         * Creates a TableJoinCall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.TableJoinCall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.TableJoinCall} TableJoinCall
         */
        TableJoinCall.fromObject = function fromObject(object) {
            if (object instanceof $root.table.TableJoinCall)
                return object;
            let message = new $root.table.TableJoinCall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".table.TableJoinCall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.uuid != null)
                message.uuid = String(object.uuid);
            return message;
        };

        /**
         * Creates a plain object from a TableJoinCall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.TableJoinCall
         * @static
         * @param {table.TableJoinCall} message TableJoinCall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableJoinCall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.uuid = "";
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.uuid != null && message.hasOwnProperty("uuid"))
                object.uuid = message.uuid;
            return object;
        };

        /**
         * Converts this TableJoinCall to JSON.
         * @function toJSON
         * @memberof table.TableJoinCall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableJoinCall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableJoinCall;
    })();

    table.TableJoinRecall = (function() {

        /**
         * Properties of a TableJoinRecall.
         * @memberof table
         * @interface ITableJoinRecall
         * @property {foundation.IHeader|null} [header] TableJoinRecall header
         * @property {table.ITable|null} [table] TableJoinRecall table
         */

        /**
         * Constructs a new TableJoinRecall.
         * @memberof table
         * @classdesc Represents a TableJoinRecall.
         * @implements ITableJoinRecall
         * @constructor
         * @param {table.ITableJoinRecall=} [properties] Properties to set
         */
        function TableJoinRecall(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TableJoinRecall header.
         * @member {foundation.IHeader|null|undefined} header
         * @memberof table.TableJoinRecall
         * @instance
         */
        TableJoinRecall.prototype.header = null;

        /**
         * TableJoinRecall table.
         * @member {table.ITable|null|undefined} table
         * @memberof table.TableJoinRecall
         * @instance
         */
        TableJoinRecall.prototype.table = null;

        /**
         * Creates a new TableJoinRecall instance using the specified properties.
         * @function create
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.ITableJoinRecall=} [properties] Properties to set
         * @returns {table.TableJoinRecall} TableJoinRecall instance
         */
        TableJoinRecall.create = function create(properties) {
            return new TableJoinRecall(properties);
        };

        /**
         * Encodes the specified TableJoinRecall message. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @function encode
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.ITableJoinRecall} message TableJoinRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinRecall.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.header != null && Object.hasOwnProperty.call(message, "header"))
                $root.foundation.Header.encode(message.header, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.table != null && Object.hasOwnProperty.call(message, "table"))
                $root.table.Table.encode(message.table, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TableJoinRecall message, length delimited. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.ITableJoinRecall} message TableJoinRecall message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TableJoinRecall.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer.
         * @function decode
         * @memberof table.TableJoinRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.TableJoinRecall} TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinRecall.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.TableJoinRecall();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.header = $root.foundation.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.table = $root.table.Table.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.TableJoinRecall
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.TableJoinRecall} TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TableJoinRecall.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TableJoinRecall message.
         * @function verify
         * @memberof table.TableJoinRecall
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TableJoinRecall.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.header != null && message.hasOwnProperty("header")) {
                let error = $root.foundation.Header.verify(message.header);
                if (error)
                    return "header." + error;
            }
            if (message.table != null && message.hasOwnProperty("table")) {
                let error = $root.table.Table.verify(message.table);
                if (error)
                    return "table." + error;
            }
            return null;
        };

        /**
         * Creates a TableJoinRecall message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.TableJoinRecall
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.TableJoinRecall} TableJoinRecall
         */
        TableJoinRecall.fromObject = function fromObject(object) {
            if (object instanceof $root.table.TableJoinRecall)
                return object;
            let message = new $root.table.TableJoinRecall();
            if (object.header != null) {
                if (typeof object.header !== "object")
                    throw TypeError(".table.TableJoinRecall.header: object expected");
                message.header = $root.foundation.Header.fromObject(object.header);
            }
            if (object.table != null) {
                if (typeof object.table !== "object")
                    throw TypeError(".table.TableJoinRecall.table: object expected");
                message.table = $root.table.Table.fromObject(object.table);
            }
            return message;
        };

        /**
         * Creates a plain object from a TableJoinRecall message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.TableJoinRecall
         * @static
         * @param {table.TableJoinRecall} message TableJoinRecall
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TableJoinRecall.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.header = null;
                object.table = null;
            }
            if (message.header != null && message.hasOwnProperty("header"))
                object.header = $root.foundation.Header.toObject(message.header, options);
            if (message.table != null && message.hasOwnProperty("table"))
                object.table = $root.table.Table.toObject(message.table, options);
            return object;
        };

        /**
         * Converts this TableJoinRecall to JSON.
         * @function toJSON
         * @memberof table.TableJoinRecall
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TableJoinRecall.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TableJoinRecall;
    })();

    table.BetStatus = (function() {

        /**
         * Properties of a BetStatus.
         * @memberof table
         * @interface IBetStatus
         * @property {string|null} [Banker] BetStatus Banker
         * @property {string|null} [Player] BetStatus Player
         * @property {string|null} [Tie] BetStatus Tie
         * @property {string|null} [BankerPair] BetStatus BankerPair
         * @property {string|null} [PlayerPair] BetStatus PlayerPair
         * @property {string|null} [BankerNatural] BetStatus BankerNatural
         * @property {string|null} [PlayerNatural] BetStatus PlayerNatural
         */

        /**
         * Constructs a new BetStatus.
         * @memberof table
         * @classdesc Represents a BetStatus.
         * @implements IBetStatus
         * @constructor
         * @param {table.IBetStatus=} [properties] Properties to set
         */
        function BetStatus(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BetStatus Banker.
         * @member {string} Banker
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.Banker = "";

        /**
         * BetStatus Player.
         * @member {string} Player
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.Player = "";

        /**
         * BetStatus Tie.
         * @member {string} Tie
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.Tie = "";

        /**
         * BetStatus BankerPair.
         * @member {string} BankerPair
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.BankerPair = "";

        /**
         * BetStatus PlayerPair.
         * @member {string} PlayerPair
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.PlayerPair = "";

        /**
         * BetStatus BankerNatural.
         * @member {string} BankerNatural
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.BankerNatural = "";

        /**
         * BetStatus PlayerNatural.
         * @member {string} PlayerNatural
         * @memberof table.BetStatus
         * @instance
         */
        BetStatus.prototype.PlayerNatural = "";

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @function create
         * @memberof table.BetStatus
         * @static
         * @param {table.IBetStatus=} [properties] Properties to set
         * @returns {table.BetStatus} BetStatus instance
         */
        BetStatus.create = function create(properties) {
            return new BetStatus(properties);
        };

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link table.BetStatus.verify|verify} messages.
         * @function encode
         * @memberof table.BetStatus
         * @static
         * @param {table.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Banker != null && Object.hasOwnProperty.call(message, "Banker"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Banker);
            if (message.Player != null && Object.hasOwnProperty.call(message, "Player"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Player);
            if (message.Tie != null && Object.hasOwnProperty.call(message, "Tie"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Tie);
            if (message.BankerPair != null && Object.hasOwnProperty.call(message, "BankerPair"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.BankerPair);
            if (message.PlayerPair != null && Object.hasOwnProperty.call(message, "PlayerPair"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.PlayerPair);
            if (message.BankerNatural != null && Object.hasOwnProperty.call(message, "BankerNatural"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.BankerNatural);
            if (message.PlayerNatural != null && Object.hasOwnProperty.call(message, "PlayerNatural"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.PlayerNatural);
            return writer;
        };

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link table.BetStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof table.BetStatus
         * @static
         * @param {table.IBetStatus} message BetStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BetStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @function decode
         * @memberof table.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {table.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.table.BetStatus();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Banker = reader.string();
                    break;
                case 2:
                    message.Player = reader.string();
                    break;
                case 3:
                    message.Tie = reader.string();
                    break;
                case 4:
                    message.BankerPair = reader.string();
                    break;
                case 5:
                    message.PlayerPair = reader.string();
                    break;
                case 6:
                    message.BankerNatural = reader.string();
                    break;
                case 7:
                    message.PlayerNatural = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof table.BetStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {table.BetStatus} BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BetStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BetStatus message.
         * @function verify
         * @memberof table.BetStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BetStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                if (!$util.isString(message.Banker))
                    return "Banker: string expected";
            if (message.Player != null && message.hasOwnProperty("Player"))
                if (!$util.isString(message.Player))
                    return "Player: string expected";
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                if (!$util.isString(message.Tie))
                    return "Tie: string expected";
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                if (!$util.isString(message.BankerPair))
                    return "BankerPair: string expected";
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                if (!$util.isString(message.PlayerPair))
                    return "PlayerPair: string expected";
            if (message.BankerNatural != null && message.hasOwnProperty("BankerNatural"))
                if (!$util.isString(message.BankerNatural))
                    return "BankerNatural: string expected";
            if (message.PlayerNatural != null && message.hasOwnProperty("PlayerNatural"))
                if (!$util.isString(message.PlayerNatural))
                    return "PlayerNatural: string expected";
            return null;
        };

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof table.BetStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {table.BetStatus} BetStatus
         */
        BetStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.table.BetStatus)
                return object;
            let message = new $root.table.BetStatus();
            if (object.Banker != null)
                message.Banker = String(object.Banker);
            if (object.Player != null)
                message.Player = String(object.Player);
            if (object.Tie != null)
                message.Tie = String(object.Tie);
            if (object.BankerPair != null)
                message.BankerPair = String(object.BankerPair);
            if (object.PlayerPair != null)
                message.PlayerPair = String(object.PlayerPair);
            if (object.BankerNatural != null)
                message.BankerNatural = String(object.BankerNatural);
            if (object.PlayerNatural != null)
                message.PlayerNatural = String(object.PlayerNatural);
            return message;
        };

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof table.BetStatus
         * @static
         * @param {table.BetStatus} message BetStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BetStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.Banker = "";
                object.Player = "";
                object.Tie = "";
                object.BankerPair = "";
                object.PlayerPair = "";
                object.BankerNatural = "";
                object.PlayerNatural = "";
            }
            if (message.Banker != null && message.hasOwnProperty("Banker"))
                object.Banker = message.Banker;
            if (message.Player != null && message.hasOwnProperty("Player"))
                object.Player = message.Player;
            if (message.Tie != null && message.hasOwnProperty("Tie"))
                object.Tie = message.Tie;
            if (message.BankerPair != null && message.hasOwnProperty("BankerPair"))
                object.BankerPair = message.BankerPair;
            if (message.PlayerPair != null && message.hasOwnProperty("PlayerPair"))
                object.PlayerPair = message.PlayerPair;
            if (message.BankerNatural != null && message.hasOwnProperty("BankerNatural"))
                object.BankerNatural = message.BankerNatural;
            if (message.PlayerNatural != null && message.hasOwnProperty("PlayerNatural"))
                object.PlayerNatural = message.PlayerNatural;
            return object;
        };

        /**
         * Converts this BetStatus to JSON.
         * @function toJSON
         * @memberof table.BetStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BetStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BetStatus;
    })();

    return table;
})();

export { $root as default };
