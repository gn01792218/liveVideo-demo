import * as $protobuf from "protobufjs";
/** Namespace auth. */
export namespace auth {

    /** Properties of a LoginCall. */
    interface ILoginCall {

        /** LoginCall header */
        header?: (foundation.IHeader|null);

        /** LoginCall token */
        token?: (string|null);
    }

    /** Represents a LoginCall. */
    class LoginCall implements ILoginCall {

        /**
         * Constructs a new LoginCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginCall);

        /** LoginCall header. */
        public header?: (foundation.IHeader|null);

        /** LoginCall token. */
        public token: string;

        /**
         * Creates a new LoginCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginCall instance
         */
        public static create(properties?: auth.ILoginCall): auth.LoginCall;

        /**
         * Encodes the specified LoginCall message. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @param message LoginCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginCall message, length delimited. Does not implicitly {@link auth.LoginCall.verify|verify} messages.
         * @param message LoginCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginCall;

        /**
         * Decodes a LoginCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginCall;

        /**
         * Verifies a LoginCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginCall
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginCall;

        /**
         * Creates a plain object from a LoginCall message. Also converts values to other types if specified.
         * @param message LoginCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginRecall. */
    interface ILoginRecall {

        /** LoginRecall header */
        header?: (foundation.IHeader|null);

        /** LoginRecall status */
        status?: (number|null);
    }

    /** Represents a LoginRecall. */
    class LoginRecall implements ILoginRecall {

        /**
         * Constructs a new LoginRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginRecall);

        /** LoginRecall header. */
        public header?: (foundation.IHeader|null);

        /** LoginRecall status. */
        public status: number;

        /**
         * Creates a new LoginRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginRecall instance
         */
        public static create(properties?: auth.ILoginRecall): auth.LoginRecall;

        /**
         * Encodes the specified LoginRecall message. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @param message LoginRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginRecall message, length delimited. Does not implicitly {@link auth.LoginRecall.verify|verify} messages.
         * @param message LoginRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginRecall;

        /**
         * Decodes a LoginRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginRecall;

        /**
         * Verifies a LoginRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginRecall
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginRecall;

        /**
         * Creates a plain object from a LoginRecall message. Also converts values to other types if specified.
         * @param message LoginRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo header */
        header?: (foundation.IHeader|null);

        /** UserInfo user */
        user?: (auth.IUser|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUserInfo);

        /** UserInfo header. */
        public header?: (foundation.IHeader|null);

        /** UserInfo user. */
        public user?: (auth.IUser|null);

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: auth.IUserInfo): auth.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link auth.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): auth.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a User. */
    interface IUser {

        /** User name */
        name?: (string|null);

        /** User wallet */
        wallet?: (number|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.IUser);

        /** User name. */
        public name: string;

        /** User wallet. */
        public wallet: number;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: auth.IUser): auth.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link auth.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): auth.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace bet. */
export namespace bet {

    /** Error enum. */
    enum Error {
        ErrorDefault = 0,
        BetTimeNotInvlid = 1,
        BetIndexInvalid = 2,
        BetAreaInvalid = 3,
        ReachMaxLimit = 4,
        RoundNotFound = 5,
        NoEnoughWallet = 6
    }

    /** BetArea enum. */
    enum BetArea {
        BetAreaDefault = 0,
        Player = 1,
        Banker = 2,
        PlayerPair = 3,
        Tie = 4,
        BankerPair = 5
    }

    /** Properties of a BetStatus. */
    interface IBetStatus {

        /** BetStatus Banker */
        Banker?: (number|null);

        /** BetStatus Player */
        Player?: (number|null);

        /** BetStatus BankerPair */
        BankerPair?: (number|null);

        /** BetStatus Tie */
        Tie?: (number|null);

        /** BetStatus PlayerPair */
        PlayerPair?: (number|null);
    }

    /** Represents a BetStatus. */
    class BetStatus implements IBetStatus {

        /**
         * Constructs a new BetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetStatus);

        /** BetStatus Banker. */
        public Banker: number;

        /** BetStatus Player. */
        public Player: number;

        /** BetStatus BankerPair. */
        public BankerPair: number;

        /** BetStatus Tie. */
        public Tie: number;

        /** BetStatus PlayerPair. */
        public PlayerPair: number;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetStatus instance
         */
        public static create(properties?: bet.IBetStatus): bet.BetStatus;

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link bet.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetStatus;

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetStatus;

        /**
         * Verifies a BetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetStatus
         */
        public static fromObject(object: { [k: string]: any }): bet.BetStatus;

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @param message BetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetCall. */
    interface IBetCall {

        /** BetCall header */
        header?: (foundation.IHeader|null);

        /** BetCall gameUuid */
        gameUuid?: (string|null);

        /** BetCall betIndex */
        betIndex?: (number|null);

        /** BetCall betArea */
        betArea?: (bet.BetArea|null);
    }

    /** Represents a BetCall. */
    class BetCall implements IBetCall {

        /**
         * Constructs a new BetCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetCall);

        /** BetCall header. */
        public header?: (foundation.IHeader|null);

        /** BetCall gameUuid. */
        public gameUuid: string;

        /** BetCall betIndex. */
        public betIndex: number;

        /** BetCall betArea. */
        public betArea: bet.BetArea;

        /**
         * Creates a new BetCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetCall instance
         */
        public static create(properties?: bet.IBetCall): bet.BetCall;

        /**
         * Encodes the specified BetCall message. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @param message BetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetCall message, length delimited. Does not implicitly {@link bet.BetCall.verify|verify} messages.
         * @param message BetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetCall;

        /**
         * Decodes a BetCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetCall;

        /**
         * Verifies a BetCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetCall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetCall;

        /**
         * Creates a plain object from a BetCall message. Also converts values to other types if specified.
         * @param message BetCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRecall. */
    interface IBetRecall {

        /** BetRecall header */
        header?: (foundation.IHeader|null);

        /** BetRecall result */
        result?: (number|null);

        /** BetRecall totalBets */
        totalBets?: (number|null);

        /** BetRecall betStatus */
        betStatus?: (bet.IBetStatus|null);

        /** BetRecall betError */
        betError?: (bet.IBetError|null);
    }

    /** Represents a BetRecall. */
    class BetRecall implements IBetRecall {

        /**
         * Constructs a new BetRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetRecall);

        /** BetRecall header. */
        public header?: (foundation.IHeader|null);

        /** BetRecall result. */
        public result: number;

        /** BetRecall totalBets. */
        public totalBets: number;

        /** BetRecall betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /** BetRecall betError. */
        public betError?: (bet.IBetError|null);

        /**
         * Creates a new BetRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRecall instance
         */
        public static create(properties?: bet.IBetRecall): bet.BetRecall;

        /**
         * Encodes the specified BetRecall message. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @param message BetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRecall message, length delimited. Does not implicitly {@link bet.BetRecall.verify|verify} messages.
         * @param message BetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetRecall;

        /**
         * Decodes a BetRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetRecall;

        /**
         * Verifies a BetRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRecall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetRecall;

        /**
         * Creates a plain object from a BetRecall message. Also converts values to other types if specified.
         * @param message BetRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResetCall. */
    interface IBetResetCall {

        /** BetResetCall header */
        header?: (foundation.IHeader|null);

        /** BetResetCall gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a BetResetCall. */
    class BetResetCall implements IBetResetCall {

        /**
         * Constructs a new BetResetCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetResetCall);

        /** BetResetCall header. */
        public header?: (foundation.IHeader|null);

        /** BetResetCall gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new BetResetCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResetCall instance
         */
        public static create(properties?: bet.IBetResetCall): bet.BetResetCall;

        /**
         * Encodes the specified BetResetCall message. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @param message BetResetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetResetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResetCall message, length delimited. Does not implicitly {@link bet.BetResetCall.verify|verify} messages.
         * @param message BetResetCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetResetCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResetCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetResetCall;

        /**
         * Decodes a BetResetCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResetCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetResetCall;

        /**
         * Verifies a BetResetCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResetCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResetCall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetResetCall;

        /**
         * Creates a plain object from a BetResetCall message. Also converts values to other types if specified.
         * @param message BetResetCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetResetCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResetCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResetRecall. */
    interface IBetResetRecall {

        /** BetResetRecall header */
        header?: (foundation.IHeader|null);

        /** BetResetRecall result */
        result?: (number|null);

        /** BetResetRecall totalBets */
        totalBets?: (number|null);

        /** BetResetRecall betStatus */
        betStatus?: (bet.IBetStatus|null);
    }

    /** Represents a BetResetRecall. */
    class BetResetRecall implements IBetResetRecall {

        /**
         * Constructs a new BetResetRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetResetRecall);

        /** BetResetRecall header. */
        public header?: (foundation.IHeader|null);

        /** BetResetRecall result. */
        public result: number;

        /** BetResetRecall totalBets. */
        public totalBets: number;

        /** BetResetRecall betStatus. */
        public betStatus?: (bet.IBetStatus|null);

        /**
         * Creates a new BetResetRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResetRecall instance
         */
        public static create(properties?: bet.IBetResetRecall): bet.BetResetRecall;

        /**
         * Encodes the specified BetResetRecall message. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @param message BetResetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetResetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResetRecall message, length delimited. Does not implicitly {@link bet.BetResetRecall.verify|verify} messages.
         * @param message BetResetRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetResetRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetResetRecall;

        /**
         * Decodes a BetResetRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResetRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetResetRecall;

        /**
         * Verifies a BetResetRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResetRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResetRecall
         */
        public static fromObject(object: { [k: string]: any }): bet.BetResetRecall;

        /**
         * Creates a plain object from a BetResetRecall message. Also converts values to other types if specified.
         * @param message BetResetRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetResetRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResetRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetError. */
    interface IBetError {

        /** BetError header */
        header?: (foundation.IHeader|null);

        /** BetError error */
        error?: (bet.Error|null);

        /** BetError errorMessage */
        errorMessage?: (string|null);
    }

    /** Represents a BetError. */
    class BetError implements IBetError {

        /**
         * Constructs a new BetError.
         * @param [properties] Properties to set
         */
        constructor(properties?: bet.IBetError);

        /** BetError header. */
        public header?: (foundation.IHeader|null);

        /** BetError error. */
        public error: bet.Error;

        /** BetError errorMessage. */
        public errorMessage: string;

        /**
         * Creates a new BetError instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetError instance
         */
        public static create(properties?: bet.IBetError): bet.BetError;

        /**
         * Encodes the specified BetError message. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @param message BetError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: bet.IBetError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetError message, length delimited. Does not implicitly {@link bet.BetError.verify|verify} messages.
         * @param message BetError message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: bet.IBetError, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetError message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): bet.BetError;

        /**
         * Decodes a BetError message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): bet.BetError;

        /**
         * Verifies a BetError message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetError message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetError
         */
        public static fromObject(object: { [k: string]: any }): bet.BetError;

        /**
         * Creates a plain object from a BetError message. Also converts values to other types if specified.
         * @param message BetError
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: bet.BetError, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetError to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace dealer. */
export namespace dealer {

    /** Suit enum. */
    enum Suit {
        Default = 0,
        Heart = 1,
        Diamond = 2,
        Spade = 3,
        Club = 4
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card suit */
        suit?: (dealer.Suit|null);

        /** Card point */
        point?: (number|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.ICard);

        /** Card suit. */
        public suit: dealer.Suit;

        /** Card point. */
        public point: number;

        /**
         * Creates a new Card instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Card instance
         */
        public static create(properties?: dealer.ICard): dealer.Card;

        /**
         * Encodes the specified Card message. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Card message, length delimited. Does not implicitly {@link dealer.Card.verify|verify} messages.
         * @param message Card message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.ICard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.Card;

        /**
         * Decodes a Card message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.Card;

        /**
         * Verifies a Card message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Card message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Card
         */
        public static fromObject(object: { [k: string]: any }): dealer.Card;

        /**
         * Creates a plain object from a Card message. Also converts values to other types if specified.
         * @param message Card
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.Card, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Card to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Side enum. */
    enum Side {
        SideDefault = 0,
        Banker = 1,
        Player = 2
    }

    /** Properties of a Draw. */
    interface IDraw {

        /** Draw header */
        header?: (foundation.IHeader|null);

        /** Draw side */
        side?: (dealer.Side|null);

        /** Draw position */
        position?: (number|null);

        /** Draw card */
        card?: (dealer.ICard|null);
    }

    /** Represents a Draw. */
    class Draw implements IDraw {

        /**
         * Constructs a new Draw.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IDraw);

        /** Draw header. */
        public header?: (foundation.IHeader|null);

        /** Draw side. */
        public side: dealer.Side;

        /** Draw position. */
        public position: number;

        /** Draw card. */
        public card?: (dealer.ICard|null);

        /**
         * Creates a new Draw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Draw instance
         */
        public static create(properties?: dealer.IDraw): dealer.Draw;

        /**
         * Encodes the specified Draw message. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @param message Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Draw message, length delimited. Does not implicitly {@link dealer.Draw.verify|verify} messages.
         * @param message Draw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Draw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.Draw;

        /**
         * Decodes a Draw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Draw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.Draw;

        /**
         * Verifies a Draw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Draw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Draw
         */
        public static fromObject(object: { [k: string]: any }): dealer.Draw;

        /**
         * Creates a plain object from a Draw message. Also converts values to other types if specified.
         * @param message Draw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.Draw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Draw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundStartCall. */
    interface IRoundStartCall {

        /** RoundStartCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a RoundStartCall. */
    class RoundStartCall implements IRoundStartCall {

        /**
         * Constructs a new RoundStartCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundStartCall);

        /** RoundStartCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new RoundStartCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundStartCall instance
         */
        public static create(properties?: dealer.IRoundStartCall): dealer.RoundStartCall;

        /**
         * Encodes the specified RoundStartCall message. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @param message RoundStartCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundStartCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundStartCall message, length delimited. Does not implicitly {@link dealer.RoundStartCall.verify|verify} messages.
         * @param message RoundStartCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundStartCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundStartCall;

        /**
         * Decodes a RoundStartCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundStartCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundStartCall;

        /**
         * Verifies a RoundStartCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundStartCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundStartCall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundStartCall;

        /**
         * Creates a plain object from a RoundStartCall message. Also converts values to other types if specified.
         * @param message RoundStartCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundStartCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundStartCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundEndCall. */
    interface IRoundEndCall {

        /** RoundEndCall header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a RoundEndCall. */
    class RoundEndCall implements IRoundEndCall {

        /**
         * Constructs a new RoundEndCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundEndCall);

        /** RoundEndCall header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new RoundEndCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundEndCall instance
         */
        public static create(properties?: dealer.IRoundEndCall): dealer.RoundEndCall;

        /**
         * Encodes the specified RoundEndCall message. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @param message RoundEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundEndCall message, length delimited. Does not implicitly {@link dealer.RoundEndCall.verify|verify} messages.
         * @param message RoundEndCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundEndCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundEndCall;

        /**
         * Decodes a RoundEndCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundEndCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundEndCall;

        /**
         * Verifies a RoundEndCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundEndCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundEndCall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundEndCall;

        /**
         * Creates a plain object from a RoundEndCall message. Also converts values to other types if specified.
         * @param message RoundEndCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundEndCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundEndCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundStartRecall. */
    interface IRoundStartRecall {

        /** RoundStartRecall header */
        header?: (foundation.IHeader|null);

        /** RoundStartRecall status */
        status?: (number|null);

        /** RoundStartRecall message */
        message?: (string|null);
    }

    /** Represents a RoundStartRecall. */
    class RoundStartRecall implements IRoundStartRecall {

        /**
         * Constructs a new RoundStartRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundStartRecall);

        /** RoundStartRecall header. */
        public header?: (foundation.IHeader|null);

        /** RoundStartRecall status. */
        public status: number;

        /** RoundStartRecall message. */
        public message: string;

        /**
         * Creates a new RoundStartRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundStartRecall instance
         */
        public static create(properties?: dealer.IRoundStartRecall): dealer.RoundStartRecall;

        /**
         * Encodes the specified RoundStartRecall message. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @param message RoundStartRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundStartRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundStartRecall message, length delimited. Does not implicitly {@link dealer.RoundStartRecall.verify|verify} messages.
         * @param message RoundStartRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundStartRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundStartRecall;

        /**
         * Decodes a RoundStartRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundStartRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundStartRecall;

        /**
         * Verifies a RoundStartRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundStartRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundStartRecall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundStartRecall;

        /**
         * Creates a plain object from a RoundStartRecall message. Also converts values to other types if specified.
         * @param message RoundStartRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundStartRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundStartRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoundEndRecall. */
    interface IRoundEndRecall {

        /** RoundEndRecall header */
        header?: (foundation.IHeader|null);

        /** RoundEndRecall status */
        status?: (number|null);

        /** RoundEndRecall message */
        message?: (string|null);
    }

    /** Represents a RoundEndRecall. */
    class RoundEndRecall implements IRoundEndRecall {

        /**
         * Constructs a new RoundEndRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IRoundEndRecall);

        /** RoundEndRecall header. */
        public header?: (foundation.IHeader|null);

        /** RoundEndRecall status. */
        public status: number;

        /** RoundEndRecall message. */
        public message: string;

        /**
         * Creates a new RoundEndRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoundEndRecall instance
         */
        public static create(properties?: dealer.IRoundEndRecall): dealer.RoundEndRecall;

        /**
         * Encodes the specified RoundEndRecall message. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @param message RoundEndRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IRoundEndRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoundEndRecall message, length delimited. Does not implicitly {@link dealer.RoundEndRecall.verify|verify} messages.
         * @param message RoundEndRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IRoundEndRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.RoundEndRecall;

        /**
         * Decodes a RoundEndRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoundEndRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.RoundEndRecall;

        /**
         * Verifies a RoundEndRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoundEndRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoundEndRecall
         */
        public static fromObject(object: { [k: string]: any }): dealer.RoundEndRecall;

        /**
         * Creates a plain object from a RoundEndRecall message. Also converts values to other types if specified.
         * @param message RoundEndRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.RoundEndRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoundEndRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastDealerRoundEnd. */
    interface IBroadcastDealerRoundEnd {

        /** BroadcastDealerRoundEnd header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a BroadcastDealerRoundEnd. */
    class BroadcastDealerRoundEnd implements IBroadcastDealerRoundEnd {

        /**
         * Constructs a new BroadcastDealerRoundEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IBroadcastDealerRoundEnd);

        /** BroadcastDealerRoundEnd header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new BroadcastDealerRoundEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastDealerRoundEnd instance
         */
        public static create(properties?: dealer.IBroadcastDealerRoundEnd): dealer.BroadcastDealerRoundEnd;

        /**
         * Encodes the specified BroadcastDealerRoundEnd message. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @param message BroadcastDealerRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IBroadcastDealerRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastDealerRoundEnd message, length delimited. Does not implicitly {@link dealer.BroadcastDealerRoundEnd.verify|verify} messages.
         * @param message BroadcastDealerRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IBroadcastDealerRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.BroadcastDealerRoundEnd;

        /**
         * Decodes a BroadcastDealerRoundEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastDealerRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.BroadcastDealerRoundEnd;

        /**
         * Verifies a BroadcastDealerRoundEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastDealerRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastDealerRoundEnd
         */
        public static fromObject(object: { [k: string]: any }): dealer.BroadcastDealerRoundEnd;

        /**
         * Creates a plain object from a BroadcastDealerRoundEnd message. Also converts values to other types if specified.
         * @param message BroadcastDealerRoundEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.BroadcastDealerRoundEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastDealerRoundEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Result enum. */
    enum Result {
        Default = 0,
        Banker = 1,
        Player = 2,
        BankerPair = 3,
        Tie = 4,
        PlayerPair = 5
    }

    /** Properties of a GameResult. */
    interface IGameResult {

        /** GameResult header */
        header?: (foundation.IHeader|null);

        /** GameResult results */
        results?: (dealer.Result[]|null);

        /** GameResult totalWin */
        totalWin?: (number|null);
    }

    /** Represents a GameResult. */
    class GameResult implements IGameResult {

        /**
         * Constructs a new GameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IGameResult);

        /** GameResult header. */
        public header?: (foundation.IHeader|null);

        /** GameResult results. */
        public results: dealer.Result[];

        /** GameResult totalWin. */
        public totalWin: number;

        /**
         * Creates a new GameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameResult instance
         */
        public static create(properties?: dealer.IGameResult): dealer.GameResult;

        /**
         * Encodes the specified GameResult message. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameResult message, length delimited. Does not implicitly {@link dealer.GameResult.verify|verify} messages.
         * @param message GameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IGameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.GameResult;

        /**
         * Decodes a GameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.GameResult;

        /**
         * Verifies a GameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameResult
         */
        public static fromObject(object: { [k: string]: any }): dealer.GameResult;

        /**
         * Creates a plain object from a GameResult message. Also converts values to other types if specified.
         * @param message GameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.GameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStatus. */
    interface IGameStatus {

        /** GameStatus header */
        header?: (foundation.IHeader|null);

        /** GameStatus isGaming */
        isGaming?: (boolean|null);
    }

    /** Represents a GameStatus. */
    class GameStatus implements IGameStatus {

        /**
         * Constructs a new GameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: dealer.IGameStatus);

        /** GameStatus header. */
        public header?: (foundation.IHeader|null);

        /** GameStatus isGaming. */
        public isGaming: boolean;

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatus instance
         */
        public static create(properties?: dealer.IGameStatus): dealer.GameStatus;

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: dealer.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link dealer.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: dealer.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): dealer.GameStatus;

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): dealer.GameStatus;

        /**
         * Verifies a GameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatus
         */
        public static fromObject(object: { [k: string]: any }): dealer.GameStatus;

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @param message GameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: dealer.GameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace foundation. */
export namespace foundation {

    /** Properties of a Header. */
    interface IHeader {

        /** Header uri */
        uri?: (route.URI|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IHeader);

        /** Header uri. */
        public uri: route.URI;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: foundation.IHeader): foundation.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link foundation.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): foundation.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartbeatPing. */
    interface IHeartbeatPing {

        /** HeartbeatPing header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a HeartbeatPing. */
    class HeartbeatPing implements IHeartbeatPing {

        /**
         * Constructs a new HeartbeatPing.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IHeartbeatPing);

        /** HeartbeatPing header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new HeartbeatPing instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatPing instance
         */
        public static create(properties?: foundation.IHeartbeatPing): foundation.HeartbeatPing;

        /**
         * Encodes the specified HeartbeatPing message. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @param message HeartbeatPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IHeartbeatPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatPing message, length delimited. Does not implicitly {@link foundation.HeartbeatPing.verify|verify} messages.
         * @param message HeartbeatPing message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IHeartbeatPing, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.HeartbeatPing;

        /**
         * Decodes a HeartbeatPing message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.HeartbeatPing;

        /**
         * Verifies a HeartbeatPing message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatPing message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatPing
         */
        public static fromObject(object: { [k: string]: any }): foundation.HeartbeatPing;

        /**
         * Creates a plain object from a HeartbeatPing message. Also converts values to other types if specified.
         * @param message HeartbeatPing
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.HeartbeatPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatPing to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartbeatPong. */
    interface IHeartbeatPong {

        /** HeartbeatPong header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a HeartbeatPong. */
    class HeartbeatPong implements IHeartbeatPong {

        /**
         * Constructs a new HeartbeatPong.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IHeartbeatPong);

        /** HeartbeatPong header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new HeartbeatPong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatPong instance
         */
        public static create(properties?: foundation.IHeartbeatPong): foundation.HeartbeatPong;

        /**
         * Encodes the specified HeartbeatPong message. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @param message HeartbeatPong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IHeartbeatPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatPong message, length delimited. Does not implicitly {@link foundation.HeartbeatPong.verify|verify} messages.
         * @param message HeartbeatPong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IHeartbeatPong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.HeartbeatPong;

        /**
         * Decodes a HeartbeatPong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.HeartbeatPong;

        /**
         * Verifies a HeartbeatPong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatPong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatPong
         */
        public static fromObject(object: { [k: string]: any }): foundation.HeartbeatPong;

        /**
         * Creates a plain object from a HeartbeatPong message. Also converts values to other types if specified.
         * @param message HeartbeatPong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.HeartbeatPong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatPong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message header */
        header?: (foundation.IHeader|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: foundation.IMessage);

        /** Message header. */
        public header?: (foundation.IHeader|null);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: foundation.IMessage): foundation.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: foundation.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link foundation.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: foundation.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): foundation.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): foundation.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): foundation.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: foundation.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace game. */
export namespace game {

    /** Status enum. */
    enum Status {
        default = 0,
        beting = 1,
        drawing = 2,
        waiting = 3
    }

    /** Properties of a BetRoundStart. */
    interface IBetRoundStart {

        /** BetRoundStart header */
        header?: (foundation.IHeader|null);

        /** BetRoundStart gameUuid */
        gameUuid?: (string|null);

        /** BetRoundStart timeRemain */
        timeRemain?: (number|null);
    }

    /** Represents a BetRoundStart. */
    class BetRoundStart implements IBetRoundStart {

        /**
         * Constructs a new BetRoundStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBetRoundStart);

        /** BetRoundStart header. */
        public header?: (foundation.IHeader|null);

        /** BetRoundStart gameUuid. */
        public gameUuid: string;

        /** BetRoundStart timeRemain. */
        public timeRemain: number;

        /**
         * Creates a new BetRoundStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundStart instance
         */
        public static create(properties?: game.IBetRoundStart): game.BetRoundStart;

        /**
         * Encodes the specified BetRoundStart message. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @param message BetRoundStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBetRoundStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundStart message, length delimited. Does not implicitly {@link game.BetRoundStart.verify|verify} messages.
         * @param message BetRoundStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBetRoundStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BetRoundStart;

        /**
         * Decodes a BetRoundStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BetRoundStart;

        /**
         * Verifies a BetRoundStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundStart
         */
        public static fromObject(object: { [k: string]: any }): game.BetRoundStart;

        /**
         * Creates a plain object from a BetRoundStart message. Also converts values to other types if specified.
         * @param message BetRoundStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BetRoundStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRoundCountdown. */
    interface IBetRoundCountdown {

        /** BetRoundCountdown header */
        header?: (foundation.IHeader|null);

        /** BetRoundCountdown timeRemain */
        timeRemain?: (number|null);
    }

    /** Represents a BetRoundCountdown. */
    class BetRoundCountdown implements IBetRoundCountdown {

        /**
         * Constructs a new BetRoundCountdown.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBetRoundCountdown);

        /** BetRoundCountdown header. */
        public header?: (foundation.IHeader|null);

        /** BetRoundCountdown timeRemain. */
        public timeRemain: number;

        /**
         * Creates a new BetRoundCountdown instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundCountdown instance
         */
        public static create(properties?: game.IBetRoundCountdown): game.BetRoundCountdown;

        /**
         * Encodes the specified BetRoundCountdown message. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @param message BetRoundCountdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBetRoundCountdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundCountdown message, length delimited. Does not implicitly {@link game.BetRoundCountdown.verify|verify} messages.
         * @param message BetRoundCountdown message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBetRoundCountdown, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BetRoundCountdown;

        /**
         * Decodes a BetRoundCountdown message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundCountdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BetRoundCountdown;

        /**
         * Verifies a BetRoundCountdown message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundCountdown message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundCountdown
         */
        public static fromObject(object: { [k: string]: any }): game.BetRoundCountdown;

        /**
         * Creates a plain object from a BetRoundCountdown message. Also converts values to other types if specified.
         * @param message BetRoundCountdown
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BetRoundCountdown, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundCountdown to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetRoundEnd. */
    interface IBetRoundEnd {

        /** BetRoundEnd header */
        header?: (foundation.IHeader|null);

        /** BetRoundEnd gameUuid */
        gameUuid?: (string|null);
    }

    /** Represents a BetRoundEnd. */
    class BetRoundEnd implements IBetRoundEnd {

        /**
         * Constructs a new BetRoundEnd.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IBetRoundEnd);

        /** BetRoundEnd header. */
        public header?: (foundation.IHeader|null);

        /** BetRoundEnd gameUuid. */
        public gameUuid: string;

        /**
         * Creates a new BetRoundEnd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetRoundEnd instance
         */
        public static create(properties?: game.IBetRoundEnd): game.BetRoundEnd;

        /**
         * Encodes the specified BetRoundEnd message. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @param message BetRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IBetRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetRoundEnd message, length delimited. Does not implicitly {@link game.BetRoundEnd.verify|verify} messages.
         * @param message BetRoundEnd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IBetRoundEnd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.BetRoundEnd;

        /**
         * Decodes a BetRoundEnd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetRoundEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.BetRoundEnd;

        /**
         * Verifies a BetRoundEnd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetRoundEnd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetRoundEnd
         */
        public static fromObject(object: { [k: string]: any }): game.BetRoundEnd;

        /**
         * Creates a plain object from a BetRoundEnd message. Also converts values to other types if specified.
         * @param message BetRoundEnd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.BetRoundEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetRoundEnd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameStatus. */
    interface IGameStatus {

        /** GameStatus header */
        header?: (foundation.IHeader|null);

        /** GameStatus status */
        status?: (game.Status|null);

        /** GameStatus timeRemain */
        timeRemain?: (number|null);

        /** GameStatus draws */
        draws?: (dealer.IDraw[]|null);
    }

    /** Represents a GameStatus. */
    class GameStatus implements IGameStatus {

        /**
         * Constructs a new GameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: game.IGameStatus);

        /** GameStatus header. */
        public header?: (foundation.IHeader|null);

        /** GameStatus status. */
        public status: game.Status;

        /** GameStatus timeRemain. */
        public timeRemain: number;

        /** GameStatus draws. */
        public draws: dealer.IDraw[];

        /**
         * Creates a new GameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameStatus instance
         */
        public static create(properties?: game.IGameStatus): game.GameStatus;

        /**
         * Encodes the specified GameStatus message. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: game.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameStatus message, length delimited. Does not implicitly {@link game.GameStatus.verify|verify} messages.
         * @param message GameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: game.IGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): game.GameStatus;

        /**
         * Decodes a GameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): game.GameStatus;

        /**
         * Verifies a GameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameStatus
         */
        public static fromObject(object: { [k: string]: any }): game.GameStatus;

        /**
         * Creates a plain object from a GameStatus message. Also converts values to other types if specified.
         * @param message GameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: game.GameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace lobby. */
export namespace lobby {

    /** Properties of a LobbyInfo. */
    interface ILobbyInfo {

        /** LobbyInfo header */
        header?: (foundation.IHeader|null);

        /** LobbyInfo tables */
        tables?: (lobby.ITableInfo[]|null);
    }

    /** Represents a LobbyInfo. */
    class LobbyInfo implements ILobbyInfo {

        /**
         * Constructs a new LobbyInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ILobbyInfo);

        /** LobbyInfo header. */
        public header?: (foundation.IHeader|null);

        /** LobbyInfo tables. */
        public tables: lobby.ITableInfo[];

        /**
         * Creates a new LobbyInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LobbyInfo instance
         */
        public static create(properties?: lobby.ILobbyInfo): lobby.LobbyInfo;

        /**
         * Encodes the specified LobbyInfo message. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @param message LobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ILobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LobbyInfo message, length delimited. Does not implicitly {@link lobby.LobbyInfo.verify|verify} messages.
         * @param message LobbyInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ILobbyInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.LobbyInfo;

        /**
         * Decodes a LobbyInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LobbyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.LobbyInfo;

        /**
         * Verifies a LobbyInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LobbyInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LobbyInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.LobbyInfo;

        /**
         * Creates a plain object from a LobbyInfo message. Also converts values to other types if specified.
         * @param message LobbyInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.LobbyInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LobbyInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableInfo. */
    interface ITableInfo {

        /** TableInfo uuid */
        uuid?: (string|null);

        /** TableInfo name */
        name?: (string|null);
    }

    /** Represents a TableInfo. */
    class TableInfo implements ITableInfo {

        /**
         * Constructs a new TableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lobby.ITableInfo);

        /** TableInfo uuid. */
        public uuid: string;

        /** TableInfo name. */
        public name: string;

        /**
         * Creates a new TableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableInfo instance
         */
        public static create(properties?: lobby.ITableInfo): lobby.TableInfo;

        /**
         * Encodes the specified TableInfo message. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lobby.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableInfo message, length delimited. Does not implicitly {@link lobby.TableInfo.verify|verify} messages.
         * @param message TableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lobby.ITableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lobby.TableInfo;

        /**
         * Decodes a TableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lobby.TableInfo;

        /**
         * Verifies a TableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableInfo
         */
        public static fromObject(object: { [k: string]: any }): lobby.TableInfo;

        /**
         * Creates a plain object from a TableInfo message. Also converts values to other types if specified.
         * @param message TableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lobby.TableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace roadmap. */
export namespace roadmap {

    /** Block enum. */
    enum Block {
        BlockDefault = 0,
        Banker = 1,
        Player = 2,
        Tie = 3,
        BankerAndBankerPair = 4,
        BankerAndPlayerPair = 5,
        BankerAndBothPair = 6,
        PlayerAndBankerPair = 7,
        PlayerAndPlayerPair = 8,
        PlayerAndBothPair = 9,
        TieAndBankerPair = 10,
        TieAndPlayerPair = 11,
        TieAndBothPair = 12,
        BankerAndTie = 13,
        BankerAndBankerPairAndTie = 14,
        BankerAndPlayerPairAndTie = 15,
        BankerAndBothPairAndTie = 16,
        PlayerAndTie = 17,
        PlayerAndBankerPairAndTie = 18,
        PlayerAndPlayerPairAndTie = 19,
        PlayerAndBothPairAndTie = 20
    }

    /** Properties of a Column. */
    interface IColumn {

        /** Column blocks */
        blocks?: (roadmap.Block[]|null);
    }

    /** Represents a Column. */
    class Column implements IColumn {

        /**
         * Constructs a new Column.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IColumn);

        /** Column blocks. */
        public blocks: roadmap.Block[];

        /**
         * Creates a new Column instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Column instance
         */
        public static create(properties?: roadmap.IColumn): roadmap.Column;

        /**
         * Encodes the specified Column message. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @param message Column message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Column message, length delimited. Does not implicitly {@link roadmap.Column.verify|verify} messages.
         * @param message Column message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IColumn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Column message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.Column;

        /**
         * Decodes a Column message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Column
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.Column;

        /**
         * Verifies a Column message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Column message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Column
         */
        public static fromObject(object: { [k: string]: any }): roadmap.Column;

        /**
         * Creates a plain object from a Column message. Also converts values to other types if specified.
         * @param message Column
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.Column, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Column to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeadPlate. */
    interface IBeadPlate {

        /** BeadPlate blocks */
        blocks?: (roadmap.Block[]|null);
    }

    /** Represents a BeadPlate. */
    class BeadPlate implements IBeadPlate {

        /**
         * Constructs a new BeadPlate.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IBeadPlate);

        /** BeadPlate blocks. */
        public blocks: roadmap.Block[];

        /**
         * Creates a new BeadPlate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeadPlate instance
         */
        public static create(properties?: roadmap.IBeadPlate): roadmap.BeadPlate;

        /**
         * Encodes the specified BeadPlate message. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @param message BeadPlate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IBeadPlate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeadPlate message, length delimited. Does not implicitly {@link roadmap.BeadPlate.verify|verify} messages.
         * @param message BeadPlate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IBeadPlate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeadPlate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.BeadPlate;

        /**
         * Decodes a BeadPlate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeadPlate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.BeadPlate;

        /**
         * Verifies a BeadPlate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeadPlate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeadPlate
         */
        public static fromObject(object: { [k: string]: any }): roadmap.BeadPlate;

        /**
         * Creates a plain object from a BeadPlate message. Also converts values to other types if specified.
         * @param message BeadPlate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.BeadPlate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeadPlate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BigRoad. */
    interface IBigRoad {

        /** BigRoad columns */
        columns?: (roadmap.IColumn[]|null);
    }

    /** Represents a BigRoad. */
    class BigRoad implements IBigRoad {

        /**
         * Constructs a new BigRoad.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IBigRoad);

        /** BigRoad columns. */
        public columns: roadmap.IColumn[];

        /**
         * Creates a new BigRoad instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BigRoad instance
         */
        public static create(properties?: roadmap.IBigRoad): roadmap.BigRoad;

        /**
         * Encodes the specified BigRoad message. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @param message BigRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IBigRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BigRoad message, length delimited. Does not implicitly {@link roadmap.BigRoad.verify|verify} messages.
         * @param message BigRoad message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IBigRoad, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BigRoad message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.BigRoad;

        /**
         * Decodes a BigRoad message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BigRoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.BigRoad;

        /**
         * Verifies a BigRoad message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BigRoad message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BigRoad
         */
        public static fromObject(object: { [k: string]: any }): roadmap.BigRoad;

        /**
         * Creates a plain object from a BigRoad message. Also converts values to other types if specified.
         * @param message BigRoad
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.BigRoad, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BigRoad to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Roadmap. */
    interface IRoadmap {

        /** Roadmap header */
        header?: (foundation.IHeader|null);

        /** Roadmap beadPlate */
        beadPlate?: (roadmap.IBeadPlate|null);

        /** Roadmap bigRoad */
        bigRoad?: (roadmap.IBigRoad|null);
    }

    /** Represents a Roadmap. */
    class Roadmap implements IRoadmap {

        /**
         * Constructs a new Roadmap.
         * @param [properties] Properties to set
         */
        constructor(properties?: roadmap.IRoadmap);

        /** Roadmap header. */
        public header?: (foundation.IHeader|null);

        /** Roadmap beadPlate. */
        public beadPlate?: (roadmap.IBeadPlate|null);

        /** Roadmap bigRoad. */
        public bigRoad?: (roadmap.IBigRoad|null);

        /**
         * Creates a new Roadmap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Roadmap instance
         */
        public static create(properties?: roadmap.IRoadmap): roadmap.Roadmap;

        /**
         * Encodes the specified Roadmap message. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @param message Roadmap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: roadmap.IRoadmap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Roadmap message, length delimited. Does not implicitly {@link roadmap.Roadmap.verify|verify} messages.
         * @param message Roadmap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: roadmap.IRoadmap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Roadmap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): roadmap.Roadmap;

        /**
         * Decodes a Roadmap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Roadmap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): roadmap.Roadmap;

        /**
         * Verifies a Roadmap message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Roadmap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Roadmap
         */
        public static fromObject(object: { [k: string]: any }): roadmap.Roadmap;

        /**
         * Creates a plain object from a Roadmap message. Also converts values to other types if specified.
         * @param message Roadmap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: roadmap.Roadmap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Roadmap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace route. */
export namespace route {

    /** URI enum. */
    enum URI {
        Default = 0,
        LoginCall = 1,
        LoginRecall = 2,
        LobbyInfo = 3,
        UserInfo = 4,
        TableJoinCall = 5,
        TableJoinRecall = 6,
        BetCall = 7,
        BetRecall = 8,
        BetResetCall = 9,
        BetResetRecall = 10,
        Draw = 11,
        DealerGameResult = 12,
        BroadcastGameResult = 13,
        BetRoundStart = 14,
        BetRoundEnd = 15,
        BetRoundCountdown = 16,
        HeartbeatPing = 17,
        HeartbeatPong = 18,
        DealerRoundStartCall = 19,
        DealerRoundStartRecall = 20,
        DealerRoundEndCall = 21,
        DealerRoundEndRecall = 22,
        BroadcastDealerRoundEnd = 220,
        BetError = 23,
        GameStatus = 24,
        DealerGameStatus = 25,
        Roadmap = 26
    }
}

/** Namespace table. */
export namespace table {

    /** Properties of a Table. */
    interface ITable {

        /** Table betStatus */
        betStatus?: (table.IBetStatus|null);

        /** Table streamingUrl */
        streamingUrl?: (string|null);
    }

    /** Represents a Table. */
    class Table implements ITable {

        /**
         * Constructs a new Table.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.ITable);

        /** Table betStatus. */
        public betStatus?: (table.IBetStatus|null);

        /** Table streamingUrl. */
        public streamingUrl: string;

        /**
         * Creates a new Table instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Table instance
         */
        public static create(properties?: table.ITable): table.Table;

        /**
         * Encodes the specified Table message. Does not implicitly {@link table.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Table message, length delimited. Does not implicitly {@link table.Table.verify|verify} messages.
         * @param message Table message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.ITable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Table message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.Table;

        /**
         * Decodes a Table message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Table
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.Table;

        /**
         * Verifies a Table message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Table message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Table
         */
        public static fromObject(object: { [k: string]: any }): table.Table;

        /**
         * Creates a plain object from a Table message. Also converts values to other types if specified.
         * @param message Table
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.Table, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Table to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableJoinCall. */
    interface ITableJoinCall {

        /** TableJoinCall header */
        header?: (foundation.IHeader|null);

        /** TableJoinCall uuid */
        uuid?: (string|null);
    }

    /** Represents a TableJoinCall. */
    class TableJoinCall implements ITableJoinCall {

        /**
         * Constructs a new TableJoinCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.ITableJoinCall);

        /** TableJoinCall header. */
        public header?: (foundation.IHeader|null);

        /** TableJoinCall uuid. */
        public uuid: string;

        /**
         * Creates a new TableJoinCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableJoinCall instance
         */
        public static create(properties?: table.ITableJoinCall): table.TableJoinCall;

        /**
         * Encodes the specified TableJoinCall message. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @param message TableJoinCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.ITableJoinCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableJoinCall message, length delimited. Does not implicitly {@link table.TableJoinCall.verify|verify} messages.
         * @param message TableJoinCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.ITableJoinCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.TableJoinCall;

        /**
         * Decodes a TableJoinCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableJoinCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.TableJoinCall;

        /**
         * Verifies a TableJoinCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableJoinCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableJoinCall
         */
        public static fromObject(object: { [k: string]: any }): table.TableJoinCall;

        /**
         * Creates a plain object from a TableJoinCall message. Also converts values to other types if specified.
         * @param message TableJoinCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.TableJoinCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableJoinCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TableJoinRecall. */
    interface ITableJoinRecall {

        /** TableJoinRecall header */
        header?: (foundation.IHeader|null);

        /** TableJoinRecall table */
        table?: (table.ITable|null);
    }

    /** Represents a TableJoinRecall. */
    class TableJoinRecall implements ITableJoinRecall {

        /**
         * Constructs a new TableJoinRecall.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.ITableJoinRecall);

        /** TableJoinRecall header. */
        public header?: (foundation.IHeader|null);

        /** TableJoinRecall table. */
        public table?: (table.ITable|null);

        /**
         * Creates a new TableJoinRecall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TableJoinRecall instance
         */
        public static create(properties?: table.ITableJoinRecall): table.TableJoinRecall;

        /**
         * Encodes the specified TableJoinRecall message. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @param message TableJoinRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.ITableJoinRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TableJoinRecall message, length delimited. Does not implicitly {@link table.TableJoinRecall.verify|verify} messages.
         * @param message TableJoinRecall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.ITableJoinRecall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.TableJoinRecall;

        /**
         * Decodes a TableJoinRecall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TableJoinRecall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.TableJoinRecall;

        /**
         * Verifies a TableJoinRecall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TableJoinRecall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TableJoinRecall
         */
        public static fromObject(object: { [k: string]: any }): table.TableJoinRecall;

        /**
         * Creates a plain object from a TableJoinRecall message. Also converts values to other types if specified.
         * @param message TableJoinRecall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.TableJoinRecall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TableJoinRecall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetStatus. */
    interface IBetStatus {

        /** BetStatus Banker */
        Banker?: (string|null);

        /** BetStatus Player */
        Player?: (string|null);

        /** BetStatus Tie */
        Tie?: (string|null);

        /** BetStatus BankerPair */
        BankerPair?: (string|null);

        /** BetStatus PlayerPair */
        PlayerPair?: (string|null);

        /** BetStatus BankerNatural */
        BankerNatural?: (string|null);

        /** BetStatus PlayerNatural */
        PlayerNatural?: (string|null);
    }

    /** Represents a BetStatus. */
    class BetStatus implements IBetStatus {

        /**
         * Constructs a new BetStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: table.IBetStatus);

        /** BetStatus Banker. */
        public Banker: string;

        /** BetStatus Player. */
        public Player: string;

        /** BetStatus Tie. */
        public Tie: string;

        /** BetStatus BankerPair. */
        public BankerPair: string;

        /** BetStatus PlayerPair. */
        public PlayerPair: string;

        /** BetStatus BankerNatural. */
        public BankerNatural: string;

        /** BetStatus PlayerNatural. */
        public PlayerNatural: string;

        /**
         * Creates a new BetStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetStatus instance
         */
        public static create(properties?: table.IBetStatus): table.BetStatus;

        /**
         * Encodes the specified BetStatus message. Does not implicitly {@link table.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: table.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetStatus message, length delimited. Does not implicitly {@link table.BetStatus.verify|verify} messages.
         * @param message BetStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: table.IBetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): table.BetStatus;

        /**
         * Decodes a BetStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): table.BetStatus;

        /**
         * Verifies a BetStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetStatus
         */
        public static fromObject(object: { [k: string]: any }): table.BetStatus;

        /**
         * Creates a plain object from a BetStatus message. Also converts values to other types if specified.
         * @param message BetStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: table.BetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
