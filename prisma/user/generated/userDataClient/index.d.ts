
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Characters
 * 
 */
export type Characters = $Result.DefaultSelection<Prisma.$CharactersPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model EquippedItem
 * 
 */
export type EquippedItem = $Result.DefaultSelection<Prisma.$EquippedItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.characters`: Exposes CRUD operations for the **Characters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.characters.findMany()
    * ```
    */
  get characters(): Prisma.CharactersDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs>;

  /**
   * `prisma.equippedItem`: Exposes CRUD operations for the **EquippedItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquippedItems
    * const equippedItems = await prisma.equippedItem.findMany()
    * ```
    */
  get equippedItem(): Prisma.EquippedItemDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Account: 'Account',
    Characters: 'Characters',
    Inventory: 'Inventory',
    InventoryItem: 'InventoryItem',
    EquippedItem: 'EquippedItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    userdb?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "account" | "characters" | "inventory" | "inventoryItem" | "equippedItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Characters: {
        payload: Prisma.$CharactersPayload<ExtArgs>
        fields: Prisma.CharactersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharactersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharactersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findFirst: {
            args: Prisma.CharactersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharactersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          findMany: {
            args: Prisma.CharactersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>[]
          }
          create: {
            args: Prisma.CharactersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          createMany: {
            args: Prisma.CharactersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CharactersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          update: {
            args: Prisma.CharactersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          deleteMany: {
            args: Prisma.CharactersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharactersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharactersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharactersPayload>
          }
          aggregate: {
            args: Prisma.CharactersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacters>
          }
          groupBy: {
            args: Prisma.CharactersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharactersGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharactersCountArgs<ExtArgs>
            result: $Utils.Optional<CharactersCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      EquippedItem: {
        payload: Prisma.$EquippedItemPayload<ExtArgs>
        fields: Prisma.EquippedItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquippedItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquippedItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>
          }
          findFirst: {
            args: Prisma.EquippedItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquippedItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>
          }
          findMany: {
            args: Prisma.EquippedItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>[]
          }
          create: {
            args: Prisma.EquippedItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>
          }
          createMany: {
            args: Prisma.EquippedItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EquippedItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>
          }
          update: {
            args: Prisma.EquippedItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>
          }
          deleteMany: {
            args: Prisma.EquippedItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquippedItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EquippedItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquippedItemPayload>
          }
          aggregate: {
            args: Prisma.EquippedItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquippedItem>
          }
          groupBy: {
            args: Prisma.EquippedItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquippedItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquippedItemCountArgs<ExtArgs>
            result: $Utils.Optional<EquippedItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    characters: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | AccountCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
  }


  /**
   * Count Type CharactersCountOutputType
   */

  export type CharactersCountOutputType = {
    inventory: number
    equippeditem: number
  }

  export type CharactersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | CharactersCountOutputTypeCountInventoryArgs
    equippeditem?: boolean | CharactersCountOutputTypeCountEquippeditemArgs
  }

  // Custom InputTypes
  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharactersCountOutputType
     */
    select?: CharactersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * CharactersCountOutputType without action
   */
  export type CharactersCountOutputTypeCountEquippeditemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquippedItemWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    inventoryitem: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventoryitem?: boolean | InventoryCountOutputTypeCountInventoryitemArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountInventoryitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    accountId: number | null
  }

  export type AccountSumAggregateOutputType = {
    accountId: number | null
  }

  export type AccountMinAggregateOutputType = {
    accountId: number | null
    id: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    accountId: number | null
    id: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    accountId: number
    id: number
    name: number
    password: number
    createdAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    accountId?: true
  }

  export type AccountSumAggregateInputType = {
    accountId?: true
  }

  export type AccountMinAggregateInputType = {
    accountId?: true
    id?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type AccountMaxAggregateInputType = {
    accountId?: true
    id?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type AccountCountAggregateInputType = {
    accountId?: true
    id?: true
    name?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    accountId: number
    id: string
    name: string
    password: string
    createdAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    id?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    characters?: boolean | Account$charactersArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>


  export type AccountSelectScalar = {
    accountId?: boolean
    id?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | Account$charactersArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      characters: Prisma.$CharactersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      accountId: number
      id: string
      name: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const accountWithAccountIdOnly = await prisma.account.findMany({ select: { accountId: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends Account$charactersArgs<ExtArgs> = {}>(args?: Subset<T, Account$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly accountId: FieldRef<"Account", 'Int'>
    readonly id: FieldRef<"Account", 'String'>
    readonly name: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.characters
   */
  export type Account$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    cursor?: CharactersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Characters
   */

  export type AggregateCharacters = {
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  export type CharactersAvgAggregateOutputType = {
    characterId: number | null
    accountId: number | null
    hp: number | null
    atk: number | null
    money: number | null
  }

  export type CharactersSumAggregateOutputType = {
    characterId: number | null
    accountId: number | null
    hp: number | null
    atk: number | null
    money: number | null
  }

  export type CharactersMinAggregateOutputType = {
    characterId: number | null
    accountId: number | null
    characterName: string | null
    hp: number | null
    atk: number | null
    money: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersMaxAggregateOutputType = {
    characterId: number | null
    accountId: number | null
    characterName: string | null
    hp: number | null
    atk: number | null
    money: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CharactersCountAggregateOutputType = {
    characterId: number
    accountId: number
    characterName: number
    hp: number
    atk: number
    money: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CharactersAvgAggregateInputType = {
    characterId?: true
    accountId?: true
    hp?: true
    atk?: true
    money?: true
  }

  export type CharactersSumAggregateInputType = {
    characterId?: true
    accountId?: true
    hp?: true
    atk?: true
    money?: true
  }

  export type CharactersMinAggregateInputType = {
    characterId?: true
    accountId?: true
    characterName?: true
    hp?: true
    atk?: true
    money?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersMaxAggregateInputType = {
    characterId?: true
    accountId?: true
    characterName?: true
    hp?: true
    atk?: true
    money?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CharactersCountAggregateInputType = {
    characterId?: true
    accountId?: true
    characterName?: true
    hp?: true
    atk?: true
    money?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CharactersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to aggregate.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharactersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharactersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharactersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharactersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharactersMaxAggregateInputType
  }

  export type GetCharactersAggregateType<T extends CharactersAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacters[P]>
      : GetScalarType<T[P], AggregateCharacters[P]>
  }




  export type CharactersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharactersWhereInput
    orderBy?: CharactersOrderByWithAggregationInput | CharactersOrderByWithAggregationInput[]
    by: CharactersScalarFieldEnum[] | CharactersScalarFieldEnum
    having?: CharactersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharactersCountAggregateInputType | true
    _avg?: CharactersAvgAggregateInputType
    _sum?: CharactersSumAggregateInputType
    _min?: CharactersMinAggregateInputType
    _max?: CharactersMaxAggregateInputType
  }

  export type CharactersGroupByOutputType = {
    characterId: number
    accountId: number
    characterName: string
    hp: number
    atk: number
    money: number
    createdAt: Date
    updatedAt: Date
    _count: CharactersCountAggregateOutputType | null
    _avg: CharactersAvgAggregateOutputType | null
    _sum: CharactersSumAggregateOutputType | null
    _min: CharactersMinAggregateOutputType | null
    _max: CharactersMaxAggregateOutputType | null
  }

  type GetCharactersGroupByPayload<T extends CharactersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharactersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharactersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharactersGroupByOutputType[P]>
            : GetScalarType<T[P], CharactersGroupByOutputType[P]>
        }
      >
    >


  export type CharactersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    accountId?: boolean
    characterName?: boolean
    hp?: boolean
    atk?: boolean
    money?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    inventory?: boolean | Characters$inventoryArgs<ExtArgs>
    equippeditem?: boolean | Characters$equippeditemArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characters"]>


  export type CharactersSelectScalar = {
    characterId?: boolean
    accountId?: boolean
    characterName?: boolean
    hp?: boolean
    atk?: boolean
    money?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CharactersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    inventory?: boolean | Characters$inventoryArgs<ExtArgs>
    equippeditem?: boolean | Characters$equippeditemArgs<ExtArgs>
    _count?: boolean | CharactersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CharactersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characters"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      equippeditem: Prisma.$EquippedItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: number
      accountId: number
      characterName: string
      hp: number
      atk: number
      money: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["characters"]>
    composites: {}
  }

  type CharactersGetPayload<S extends boolean | null | undefined | CharactersDefaultArgs> = $Result.GetResult<Prisma.$CharactersPayload, S>

  type CharactersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharactersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharactersCountAggregateInputType | true
    }

  export interface CharactersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characters'], meta: { name: 'Characters' } }
    /**
     * Find zero or one Characters that matches the filter.
     * @param {CharactersFindUniqueArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharactersFindUniqueArgs>(args: SelectSubset<T, CharactersFindUniqueArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Characters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharactersFindUniqueOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharactersFindUniqueOrThrowArgs>(args: SelectSubset<T, CharactersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharactersFindFirstArgs>(args?: SelectSubset<T, CharactersFindFirstArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Characters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindFirstOrThrowArgs} args - Arguments to find a Characters
     * @example
     * // Get one Characters
     * const characters = await prisma.characters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharactersFindFirstOrThrowArgs>(args?: SelectSubset<T, CharactersFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.characters.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.characters.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const charactersWithCharacterIdOnly = await prisma.characters.findMany({ select: { characterId: true } })
     * 
     */
    findMany<T extends CharactersFindManyArgs>(args?: SelectSubset<T, CharactersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Characters.
     * @param {CharactersCreateArgs} args - Arguments to create a Characters.
     * @example
     * // Create one Characters
     * const Characters = await prisma.characters.create({
     *   data: {
     *     // ... data to create a Characters
     *   }
     * })
     * 
     */
    create<T extends CharactersCreateArgs>(args: SelectSubset<T, CharactersCreateArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Characters.
     * @param {CharactersCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const characters = await prisma.characters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharactersCreateManyArgs>(args?: SelectSubset<T, CharactersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Characters.
     * @param {CharactersDeleteArgs} args - Arguments to delete one Characters.
     * @example
     * // Delete one Characters
     * const Characters = await prisma.characters.delete({
     *   where: {
     *     // ... filter to delete one Characters
     *   }
     * })
     * 
     */
    delete<T extends CharactersDeleteArgs>(args: SelectSubset<T, CharactersDeleteArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Characters.
     * @param {CharactersUpdateArgs} args - Arguments to update one Characters.
     * @example
     * // Update one Characters
     * const characters = await prisma.characters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharactersUpdateArgs>(args: SelectSubset<T, CharactersUpdateArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Characters.
     * @param {CharactersDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.characters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharactersDeleteManyArgs>(args?: SelectSubset<T, CharactersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const characters = await prisma.characters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharactersUpdateManyArgs>(args: SelectSubset<T, CharactersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characters.
     * @param {CharactersUpsertArgs} args - Arguments to update or create a Characters.
     * @example
     * // Update or create a Characters
     * const characters = await prisma.characters.upsert({
     *   create: {
     *     // ... data to create a Characters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characters we want to update
     *   }
     * })
     */
    upsert<T extends CharactersUpsertArgs>(args: SelectSubset<T, CharactersUpsertArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.characters.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharactersCountArgs>(
      args?: Subset<T, CharactersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharactersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharactersAggregateArgs>(args: Subset<T, CharactersAggregateArgs>): Prisma.PrismaPromise<GetCharactersAggregateType<T>>

    /**
     * Group by Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharactersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharactersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharactersGroupByArgs['orderBy'] }
        : { orderBy?: CharactersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharactersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharactersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characters model
   */
  readonly fields: CharactersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharactersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventory<T extends Characters$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Characters$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
    equippeditem<T extends Characters$equippeditemArgs<ExtArgs> = {}>(args?: Subset<T, Characters$equippeditemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Characters model
   */ 
  interface CharactersFieldRefs {
    readonly characterId: FieldRef<"Characters", 'Int'>
    readonly accountId: FieldRef<"Characters", 'Int'>
    readonly characterName: FieldRef<"Characters", 'String'>
    readonly hp: FieldRef<"Characters", 'Int'>
    readonly atk: FieldRef<"Characters", 'Int'>
    readonly money: FieldRef<"Characters", 'Int'>
    readonly createdAt: FieldRef<"Characters", 'DateTime'>
    readonly updatedAt: FieldRef<"Characters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Characters findUnique
   */
  export type CharactersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findUniqueOrThrow
   */
  export type CharactersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters findFirst
   */
  export type CharactersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findFirstOrThrow
   */
  export type CharactersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters findMany
   */
  export type CharactersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharactersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharactersOrderByWithRelationInput | CharactersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharactersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharactersScalarFieldEnum | CharactersScalarFieldEnum[]
  }

  /**
   * Characters create
   */
  export type CharactersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to create a Characters.
     */
    data: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
  }

  /**
   * Characters createMany
   */
  export type CharactersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharactersCreateManyInput | CharactersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characters update
   */
  export type CharactersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The data needed to update a Characters.
     */
    data: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
    /**
     * Choose, which Characters to update.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters updateMany
   */
  export type CharactersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters upsert
   */
  export type CharactersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * The filter to search for the Characters to update in case it exists.
     */
    where: CharactersWhereUniqueInput
    /**
     * In case the Characters found by the `where` argument doesn't exist, create a new Characters with this data.
     */
    create: XOR<CharactersCreateInput, CharactersUncheckedCreateInput>
    /**
     * In case the Characters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharactersUpdateInput, CharactersUncheckedUpdateInput>
  }

  /**
   * Characters delete
   */
  export type CharactersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
    /**
     * Filter which Characters to delete.
     */
    where: CharactersWhereUniqueInput
  }

  /**
   * Characters deleteMany
   */
  export type CharactersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharactersWhereInput
  }

  /**
   * Characters.inventory
   */
  export type Characters$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Characters.equippeditem
   */
  export type Characters$equippeditemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    where?: EquippedItemWhereInput
    orderBy?: EquippedItemOrderByWithRelationInput | EquippedItemOrderByWithRelationInput[]
    cursor?: EquippedItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquippedItemScalarFieldEnum | EquippedItemScalarFieldEnum[]
  }

  /**
   * Characters without action
   */
  export type CharactersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characters
     */
    select?: CharactersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharactersInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    inventoryId: number | null
    characterId: number | null
  }

  export type InventorySumAggregateOutputType = {
    inventoryId: number | null
    characterId: number | null
  }

  export type InventoryMinAggregateOutputType = {
    inventoryId: number | null
    characterId: number | null
  }

  export type InventoryMaxAggregateOutputType = {
    inventoryId: number | null
    characterId: number | null
  }

  export type InventoryCountAggregateOutputType = {
    inventoryId: number
    characterId: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    inventoryId?: true
    characterId?: true
  }

  export type InventorySumAggregateInputType = {
    inventoryId?: true
    characterId?: true
  }

  export type InventoryMinAggregateInputType = {
    inventoryId?: true
    characterId?: true
  }

  export type InventoryMaxAggregateInputType = {
    inventoryId?: true
    characterId?: true
  }

  export type InventoryCountAggregateInputType = {
    inventoryId?: true
    characterId?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    inventoryId: number
    characterId: number
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryId?: boolean
    characterId?: boolean
    characters?: boolean | CharactersDefaultArgs<ExtArgs>
    inventoryitem?: boolean | Inventory$inventoryitemArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>


  export type InventorySelectScalar = {
    inventoryId?: boolean
    characterId?: boolean
  }

  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | CharactersDefaultArgs<ExtArgs>
    inventoryitem?: boolean | Inventory$inventoryitemArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      characters: Prisma.$CharactersPayload<ExtArgs>
      inventoryitem: Prisma.$InventoryItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      inventoryId: number
      characterId: number
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `inventoryId`
     * const inventoryWithInventoryIdOnly = await prisma.inventory.findMany({ select: { inventoryId: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventoryitem<T extends Inventory$inventoryitemArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$inventoryitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */ 
  interface InventoryFieldRefs {
    readonly inventoryId: FieldRef<"Inventory", 'Int'>
    readonly characterId: FieldRef<"Inventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory.inventoryitem
   */
  export type Inventory$inventoryitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    cursor?: InventoryItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    inventoryItemId: number | null
    inventoryId: number | null
    itemId: number | null
    itemCount: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    inventoryItemId: number | null
    inventoryId: number | null
    itemId: number | null
    itemCount: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    inventoryItemId: number | null
    inventoryId: number | null
    itemId: number | null
    itemCount: number | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    inventoryItemId: number | null
    inventoryId: number | null
    itemId: number | null
    itemCount: number | null
  }

  export type InventoryItemCountAggregateOutputType = {
    inventoryItemId: number
    inventoryId: number
    itemId: number
    itemCount: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    inventoryItemId?: true
    inventoryId?: true
    itemId?: true
    itemCount?: true
  }

  export type InventoryItemSumAggregateInputType = {
    inventoryItemId?: true
    inventoryId?: true
    itemId?: true
    itemCount?: true
  }

  export type InventoryItemMinAggregateInputType = {
    inventoryItemId?: true
    inventoryId?: true
    itemId?: true
    itemCount?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    inventoryItemId?: true
    inventoryId?: true
    itemId?: true
    itemCount?: true
  }

  export type InventoryItemCountAggregateInputType = {
    inventoryItemId?: true
    inventoryId?: true
    itemId?: true
    itemCount?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    inventoryItemId: number
    inventoryId: number
    itemId: number
    itemCount: number
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    inventoryItemId?: boolean
    inventoryId?: boolean
    itemId?: boolean
    itemCount?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventoryItem"]>


  export type InventoryItemSelectScalar = {
    inventoryItemId?: boolean
    inventoryId?: boolean
    itemId?: boolean
    itemCount?: boolean
  }

  export type InventoryItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      inventoryItemId: number
      inventoryId: number
      itemId: number
      itemCount: number
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `inventoryItemId`
     * const inventoryItemWithInventoryItemIdOnly = await prisma.inventoryItem.findMany({ select: { inventoryItemId: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */ 
  interface InventoryItemFieldRefs {
    readonly inventoryItemId: FieldRef<"InventoryItem", 'Int'>
    readonly inventoryId: FieldRef<"InventoryItem", 'Int'>
    readonly itemId: FieldRef<"InventoryItem", 'Int'>
    readonly itemCount: FieldRef<"InventoryItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryItemInclude<ExtArgs> | null
  }


  /**
   * Model EquippedItem
   */

  export type AggregateEquippedItem = {
    _count: EquippedItemCountAggregateOutputType | null
    _avg: EquippedItemAvgAggregateOutputType | null
    _sum: EquippedItemSumAggregateOutputType | null
    _min: EquippedItemMinAggregateOutputType | null
    _max: EquippedItemMaxAggregateOutputType | null
  }

  export type EquippedItemAvgAggregateOutputType = {
    equippedItemId: number | null
    characterId: number | null
    itemId: number | null
  }

  export type EquippedItemSumAggregateOutputType = {
    equippedItemId: number | null
    characterId: number | null
    itemId: number | null
  }

  export type EquippedItemMinAggregateOutputType = {
    equippedItemId: number | null
    characterId: number | null
    itemId: number | null
    equippedItemName: string | null
  }

  export type EquippedItemMaxAggregateOutputType = {
    equippedItemId: number | null
    characterId: number | null
    itemId: number | null
    equippedItemName: string | null
  }

  export type EquippedItemCountAggregateOutputType = {
    equippedItemId: number
    characterId: number
    itemId: number
    equippedItemName: number
    _all: number
  }


  export type EquippedItemAvgAggregateInputType = {
    equippedItemId?: true
    characterId?: true
    itemId?: true
  }

  export type EquippedItemSumAggregateInputType = {
    equippedItemId?: true
    characterId?: true
    itemId?: true
  }

  export type EquippedItemMinAggregateInputType = {
    equippedItemId?: true
    characterId?: true
    itemId?: true
    equippedItemName?: true
  }

  export type EquippedItemMaxAggregateInputType = {
    equippedItemId?: true
    characterId?: true
    itemId?: true
    equippedItemName?: true
  }

  export type EquippedItemCountAggregateInputType = {
    equippedItemId?: true
    characterId?: true
    itemId?: true
    equippedItemName?: true
    _all?: true
  }

  export type EquippedItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquippedItem to aggregate.
     */
    where?: EquippedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemOrderByWithRelationInput | EquippedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquippedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquippedItems
    **/
    _count?: true | EquippedItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquippedItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquippedItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquippedItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquippedItemMaxAggregateInputType
  }

  export type GetEquippedItemAggregateType<T extends EquippedItemAggregateArgs> = {
        [P in keyof T & keyof AggregateEquippedItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquippedItem[P]>
      : GetScalarType<T[P], AggregateEquippedItem[P]>
  }




  export type EquippedItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquippedItemWhereInput
    orderBy?: EquippedItemOrderByWithAggregationInput | EquippedItemOrderByWithAggregationInput[]
    by: EquippedItemScalarFieldEnum[] | EquippedItemScalarFieldEnum
    having?: EquippedItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquippedItemCountAggregateInputType | true
    _avg?: EquippedItemAvgAggregateInputType
    _sum?: EquippedItemSumAggregateInputType
    _min?: EquippedItemMinAggregateInputType
    _max?: EquippedItemMaxAggregateInputType
  }

  export type EquippedItemGroupByOutputType = {
    equippedItemId: number
    characterId: number
    itemId: number
    equippedItemName: string
    _count: EquippedItemCountAggregateOutputType | null
    _avg: EquippedItemAvgAggregateOutputType | null
    _sum: EquippedItemSumAggregateOutputType | null
    _min: EquippedItemMinAggregateOutputType | null
    _max: EquippedItemMaxAggregateOutputType | null
  }

  type GetEquippedItemGroupByPayload<T extends EquippedItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquippedItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquippedItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquippedItemGroupByOutputType[P]>
            : GetScalarType<T[P], EquippedItemGroupByOutputType[P]>
        }
      >
    >


  export type EquippedItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    equippedItemId?: boolean
    characterId?: boolean
    itemId?: boolean
    equippedItemName?: boolean
    characters?: boolean | CharactersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equippedItem"]>


  export type EquippedItemSelectScalar = {
    equippedItemId?: boolean
    characterId?: boolean
    itemId?: boolean
    equippedItemName?: boolean
  }

  export type EquippedItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | CharactersDefaultArgs<ExtArgs>
  }

  export type $EquippedItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquippedItem"
    objects: {
      characters: Prisma.$CharactersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      equippedItemId: number
      characterId: number
      itemId: number
      equippedItemName: string
    }, ExtArgs["result"]["equippedItem"]>
    composites: {}
  }

  type EquippedItemGetPayload<S extends boolean | null | undefined | EquippedItemDefaultArgs> = $Result.GetResult<Prisma.$EquippedItemPayload, S>

  type EquippedItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquippedItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EquippedItemCountAggregateInputType | true
    }

  export interface EquippedItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquippedItem'], meta: { name: 'EquippedItem' } }
    /**
     * Find zero or one EquippedItem that matches the filter.
     * @param {EquippedItemFindUniqueArgs} args - Arguments to find a EquippedItem
     * @example
     * // Get one EquippedItem
     * const equippedItem = await prisma.equippedItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquippedItemFindUniqueArgs>(args: SelectSubset<T, EquippedItemFindUniqueArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EquippedItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EquippedItemFindUniqueOrThrowArgs} args - Arguments to find a EquippedItem
     * @example
     * // Get one EquippedItem
     * const equippedItem = await prisma.equippedItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquippedItemFindUniqueOrThrowArgs>(args: SelectSubset<T, EquippedItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EquippedItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemFindFirstArgs} args - Arguments to find a EquippedItem
     * @example
     * // Get one EquippedItem
     * const equippedItem = await prisma.equippedItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquippedItemFindFirstArgs>(args?: SelectSubset<T, EquippedItemFindFirstArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EquippedItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemFindFirstOrThrowArgs} args - Arguments to find a EquippedItem
     * @example
     * // Get one EquippedItem
     * const equippedItem = await prisma.equippedItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquippedItemFindFirstOrThrowArgs>(args?: SelectSubset<T, EquippedItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EquippedItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquippedItems
     * const equippedItems = await prisma.equippedItem.findMany()
     * 
     * // Get first 10 EquippedItems
     * const equippedItems = await prisma.equippedItem.findMany({ take: 10 })
     * 
     * // Only select the `equippedItemId`
     * const equippedItemWithEquippedItemIdOnly = await prisma.equippedItem.findMany({ select: { equippedItemId: true } })
     * 
     */
    findMany<T extends EquippedItemFindManyArgs>(args?: SelectSubset<T, EquippedItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EquippedItem.
     * @param {EquippedItemCreateArgs} args - Arguments to create a EquippedItem.
     * @example
     * // Create one EquippedItem
     * const EquippedItem = await prisma.equippedItem.create({
     *   data: {
     *     // ... data to create a EquippedItem
     *   }
     * })
     * 
     */
    create<T extends EquippedItemCreateArgs>(args: SelectSubset<T, EquippedItemCreateArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EquippedItems.
     * @param {EquippedItemCreateManyArgs} args - Arguments to create many EquippedItems.
     * @example
     * // Create many EquippedItems
     * const equippedItem = await prisma.equippedItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquippedItemCreateManyArgs>(args?: SelectSubset<T, EquippedItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EquippedItem.
     * @param {EquippedItemDeleteArgs} args - Arguments to delete one EquippedItem.
     * @example
     * // Delete one EquippedItem
     * const EquippedItem = await prisma.equippedItem.delete({
     *   where: {
     *     // ... filter to delete one EquippedItem
     *   }
     * })
     * 
     */
    delete<T extends EquippedItemDeleteArgs>(args: SelectSubset<T, EquippedItemDeleteArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EquippedItem.
     * @param {EquippedItemUpdateArgs} args - Arguments to update one EquippedItem.
     * @example
     * // Update one EquippedItem
     * const equippedItem = await prisma.equippedItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquippedItemUpdateArgs>(args: SelectSubset<T, EquippedItemUpdateArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EquippedItems.
     * @param {EquippedItemDeleteManyArgs} args - Arguments to filter EquippedItems to delete.
     * @example
     * // Delete a few EquippedItems
     * const { count } = await prisma.equippedItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquippedItemDeleteManyArgs>(args?: SelectSubset<T, EquippedItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquippedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquippedItems
     * const equippedItem = await prisma.equippedItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquippedItemUpdateManyArgs>(args: SelectSubset<T, EquippedItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EquippedItem.
     * @param {EquippedItemUpsertArgs} args - Arguments to update or create a EquippedItem.
     * @example
     * // Update or create a EquippedItem
     * const equippedItem = await prisma.equippedItem.upsert({
     *   create: {
     *     // ... data to create a EquippedItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquippedItem we want to update
     *   }
     * })
     */
    upsert<T extends EquippedItemUpsertArgs>(args: SelectSubset<T, EquippedItemUpsertArgs<ExtArgs>>): Prisma__EquippedItemClient<$Result.GetResult<Prisma.$EquippedItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EquippedItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemCountArgs} args - Arguments to filter EquippedItems to count.
     * @example
     * // Count the number of EquippedItems
     * const count = await prisma.equippedItem.count({
     *   where: {
     *     // ... the filter for the EquippedItems we want to count
     *   }
     * })
    **/
    count<T extends EquippedItemCountArgs>(
      args?: Subset<T, EquippedItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquippedItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquippedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquippedItemAggregateArgs>(args: Subset<T, EquippedItemAggregateArgs>): Prisma.PrismaPromise<GetEquippedItemAggregateType<T>>

    /**
     * Group by EquippedItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquippedItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquippedItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquippedItemGroupByArgs['orderBy'] }
        : { orderBy?: EquippedItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquippedItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquippedItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquippedItem model
   */
  readonly fields: EquippedItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquippedItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquippedItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends CharactersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharactersDefaultArgs<ExtArgs>>): Prisma__CharactersClient<$Result.GetResult<Prisma.$CharactersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EquippedItem model
   */ 
  interface EquippedItemFieldRefs {
    readonly equippedItemId: FieldRef<"EquippedItem", 'Int'>
    readonly characterId: FieldRef<"EquippedItem", 'Int'>
    readonly itemId: FieldRef<"EquippedItem", 'Int'>
    readonly equippedItemName: FieldRef<"EquippedItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EquippedItem findUnique
   */
  export type EquippedItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItem to fetch.
     */
    where: EquippedItemWhereUniqueInput
  }

  /**
   * EquippedItem findUniqueOrThrow
   */
  export type EquippedItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItem to fetch.
     */
    where: EquippedItemWhereUniqueInput
  }

  /**
   * EquippedItem findFirst
   */
  export type EquippedItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItem to fetch.
     */
    where?: EquippedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemOrderByWithRelationInput | EquippedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquippedItems.
     */
    cursor?: EquippedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquippedItems.
     */
    distinct?: EquippedItemScalarFieldEnum | EquippedItemScalarFieldEnum[]
  }

  /**
   * EquippedItem findFirstOrThrow
   */
  export type EquippedItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItem to fetch.
     */
    where?: EquippedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemOrderByWithRelationInput | EquippedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquippedItems.
     */
    cursor?: EquippedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquippedItems.
     */
    distinct?: EquippedItemScalarFieldEnum | EquippedItemScalarFieldEnum[]
  }

  /**
   * EquippedItem findMany
   */
  export type EquippedItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * Filter, which EquippedItems to fetch.
     */
    where?: EquippedItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquippedItems to fetch.
     */
    orderBy?: EquippedItemOrderByWithRelationInput | EquippedItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquippedItems.
     */
    cursor?: EquippedItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquippedItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquippedItems.
     */
    skip?: number
    distinct?: EquippedItemScalarFieldEnum | EquippedItemScalarFieldEnum[]
  }

  /**
   * EquippedItem create
   */
  export type EquippedItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * The data needed to create a EquippedItem.
     */
    data: XOR<EquippedItemCreateInput, EquippedItemUncheckedCreateInput>
  }

  /**
   * EquippedItem createMany
   */
  export type EquippedItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquippedItems.
     */
    data: EquippedItemCreateManyInput | EquippedItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquippedItem update
   */
  export type EquippedItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * The data needed to update a EquippedItem.
     */
    data: XOR<EquippedItemUpdateInput, EquippedItemUncheckedUpdateInput>
    /**
     * Choose, which EquippedItem to update.
     */
    where: EquippedItemWhereUniqueInput
  }

  /**
   * EquippedItem updateMany
   */
  export type EquippedItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquippedItems.
     */
    data: XOR<EquippedItemUpdateManyMutationInput, EquippedItemUncheckedUpdateManyInput>
    /**
     * Filter which EquippedItems to update
     */
    where?: EquippedItemWhereInput
  }

  /**
   * EquippedItem upsert
   */
  export type EquippedItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * The filter to search for the EquippedItem to update in case it exists.
     */
    where: EquippedItemWhereUniqueInput
    /**
     * In case the EquippedItem found by the `where` argument doesn't exist, create a new EquippedItem with this data.
     */
    create: XOR<EquippedItemCreateInput, EquippedItemUncheckedCreateInput>
    /**
     * In case the EquippedItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquippedItemUpdateInput, EquippedItemUncheckedUpdateInput>
  }

  /**
   * EquippedItem delete
   */
  export type EquippedItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
    /**
     * Filter which EquippedItem to delete.
     */
    where: EquippedItemWhereUniqueInput
  }

  /**
   * EquippedItem deleteMany
   */
  export type EquippedItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquippedItems to delete
     */
    where?: EquippedItemWhereInput
  }

  /**
   * EquippedItem without action
   */
  export type EquippedItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquippedItem
     */
    select?: EquippedItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquippedItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AccountScalarFieldEnum: {
    accountId: 'accountId',
    id: 'id',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const CharactersScalarFieldEnum: {
    characterId: 'characterId',
    accountId: 'accountId',
    characterName: 'characterName',
    hp: 'hp',
    atk: 'atk',
    money: 'money',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CharactersScalarFieldEnum = (typeof CharactersScalarFieldEnum)[keyof typeof CharactersScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    inventoryId: 'inventoryId',
    characterId: 'characterId'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    inventoryItemId: 'inventoryItemId',
    inventoryId: 'inventoryId',
    itemId: 'itemId',
    itemCount: 'itemCount'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const EquippedItemScalarFieldEnum: {
    equippedItemId: 'equippedItemId',
    characterId: 'characterId',
    itemId: 'itemId',
    equippedItemName: 'equippedItemName'
  };

  export type EquippedItemScalarFieldEnum = (typeof EquippedItemScalarFieldEnum)[keyof typeof EquippedItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: IntFilter<"Account"> | number
    id?: StringFilter<"Account"> | string
    name?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    characters?: CharactersListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    accountId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    characters?: CharactersOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    accountId?: number
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    password?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    characters?: CharactersListRelationFilter
  }, "accountId" | "id">

  export type AccountOrderByWithAggregationInput = {
    accountId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    accountId?: IntWithAggregatesFilter<"Account"> | number
    id?: StringWithAggregatesFilter<"Account"> | string
    name?: StringWithAggregatesFilter<"Account"> | string
    password?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type CharactersWhereInput = {
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    accountId?: IntFilter<"Characters"> | number
    characterName?: StringFilter<"Characters"> | string
    hp?: IntFilter<"Characters"> | number
    atk?: IntFilter<"Characters"> | number
    money?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    inventory?: InventoryListRelationFilter
    equippeditem?: EquippedItemListRelationFilter
  }

  export type CharactersOrderByWithRelationInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: AccountOrderByWithRelationInput
    inventory?: InventoryOrderByRelationAggregateInput
    equippeditem?: EquippedItemOrderByRelationAggregateInput
  }

  export type CharactersWhereUniqueInput = Prisma.AtLeast<{
    characterId?: number
    characterName?: string
    AND?: CharactersWhereInput | CharactersWhereInput[]
    OR?: CharactersWhereInput[]
    NOT?: CharactersWhereInput | CharactersWhereInput[]
    accountId?: IntFilter<"Characters"> | number
    hp?: IntFilter<"Characters"> | number
    atk?: IntFilter<"Characters"> | number
    money?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    inventory?: InventoryListRelationFilter
    equippeditem?: EquippedItemListRelationFilter
  }, "characterId" | "characterName">

  export type CharactersOrderByWithAggregationInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CharactersCountOrderByAggregateInput
    _avg?: CharactersAvgOrderByAggregateInput
    _max?: CharactersMaxOrderByAggregateInput
    _min?: CharactersMinOrderByAggregateInput
    _sum?: CharactersSumOrderByAggregateInput
  }

  export type CharactersScalarWhereWithAggregatesInput = {
    AND?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    OR?: CharactersScalarWhereWithAggregatesInput[]
    NOT?: CharactersScalarWhereWithAggregatesInput | CharactersScalarWhereWithAggregatesInput[]
    characterId?: IntWithAggregatesFilter<"Characters"> | number
    accountId?: IntWithAggregatesFilter<"Characters"> | number
    characterName?: StringWithAggregatesFilter<"Characters"> | string
    hp?: IntWithAggregatesFilter<"Characters"> | number
    atk?: IntWithAggregatesFilter<"Characters"> | number
    money?: IntWithAggregatesFilter<"Characters"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Characters"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    inventoryId?: IntFilter<"Inventory"> | number
    characterId?: IntFilter<"Inventory"> | number
    characters?: XOR<CharactersRelationFilter, CharactersWhereInput>
    inventoryitem?: InventoryItemListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
    characters?: CharactersOrderByWithRelationInput
    inventoryitem?: InventoryItemOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    inventoryId?: number
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    characterId?: IntFilter<"Inventory"> | number
    characters?: XOR<CharactersRelationFilter, CharactersWhereInput>
    inventoryitem?: InventoryItemListRelationFilter
  }, "inventoryId">

  export type InventoryOrderByWithAggregationInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    inventoryId?: IntWithAggregatesFilter<"Inventory"> | number
    characterId?: IntWithAggregatesFilter<"Inventory"> | number
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    inventoryItemId?: IntFilter<"InventoryItem"> | number
    inventoryId?: IntFilter<"InventoryItem"> | number
    itemId?: IntFilter<"InventoryItem"> | number
    itemCount?: IntFilter<"InventoryItem"> | number
    inventory?: XOR<InventoryRelationFilter, InventoryWhereInput>
  }

  export type InventoryItemOrderByWithRelationInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    inventoryItemId?: number
    itemId?: number
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    inventoryId?: IntFilter<"InventoryItem"> | number
    itemCount?: IntFilter<"InventoryItem"> | number
    inventory?: XOR<InventoryRelationFilter, InventoryWhereInput>
  }, "inventoryItemId" | "itemId">

  export type InventoryItemOrderByWithAggregationInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    inventoryItemId?: IntWithAggregatesFilter<"InventoryItem"> | number
    inventoryId?: IntWithAggregatesFilter<"InventoryItem"> | number
    itemId?: IntWithAggregatesFilter<"InventoryItem"> | number
    itemCount?: IntWithAggregatesFilter<"InventoryItem"> | number
  }

  export type EquippedItemWhereInput = {
    AND?: EquippedItemWhereInput | EquippedItemWhereInput[]
    OR?: EquippedItemWhereInput[]
    NOT?: EquippedItemWhereInput | EquippedItemWhereInput[]
    equippedItemId?: IntFilter<"EquippedItem"> | number
    characterId?: IntFilter<"EquippedItem"> | number
    itemId?: IntFilter<"EquippedItem"> | number
    equippedItemName?: StringFilter<"EquippedItem"> | string
    characters?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }

  export type EquippedItemOrderByWithRelationInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    equippedItemName?: SortOrder
    characters?: CharactersOrderByWithRelationInput
  }

  export type EquippedItemWhereUniqueInput = Prisma.AtLeast<{
    equippedItemId?: number
    itemId?: number
    AND?: EquippedItemWhereInput | EquippedItemWhereInput[]
    OR?: EquippedItemWhereInput[]
    NOT?: EquippedItemWhereInput | EquippedItemWhereInput[]
    characterId?: IntFilter<"EquippedItem"> | number
    equippedItemName?: StringFilter<"EquippedItem"> | string
    characters?: XOR<CharactersRelationFilter, CharactersWhereInput>
  }, "equippedItemId" | "itemId">

  export type EquippedItemOrderByWithAggregationInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    equippedItemName?: SortOrder
    _count?: EquippedItemCountOrderByAggregateInput
    _avg?: EquippedItemAvgOrderByAggregateInput
    _max?: EquippedItemMaxOrderByAggregateInput
    _min?: EquippedItemMinOrderByAggregateInput
    _sum?: EquippedItemSumOrderByAggregateInput
  }

  export type EquippedItemScalarWhereWithAggregatesInput = {
    AND?: EquippedItemScalarWhereWithAggregatesInput | EquippedItemScalarWhereWithAggregatesInput[]
    OR?: EquippedItemScalarWhereWithAggregatesInput[]
    NOT?: EquippedItemScalarWhereWithAggregatesInput | EquippedItemScalarWhereWithAggregatesInput[]
    equippedItemId?: IntWithAggregatesFilter<"EquippedItem"> | number
    characterId?: IntWithAggregatesFilter<"EquippedItem"> | number
    itemId?: IntWithAggregatesFilter<"EquippedItem"> | number
    equippedItemName?: StringWithAggregatesFilter<"EquippedItem"> | string
  }

  export type AccountCreateInput = {
    id: string
    name: string
    password: string
    createdAt?: Date | string
    characters?: CharactersCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    accountId?: number
    id: string
    name: string
    password: string
    createdAt?: Date | string
    characters?: CharactersUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharactersUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characters?: CharactersUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    accountId?: number
    id: string
    name: string
    password: string
    createdAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersCreateInput = {
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutCharactersInput
    inventory?: InventoryCreateNestedManyWithoutCharactersInput
    equippeditem?: EquippedItemCreateNestedManyWithoutCharactersInput
  }

  export type CharactersUncheckedCreateInput = {
    characterId?: number
    accountId: number
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutCharactersInput
    equippeditem?: EquippedItemUncheckedCreateNestedManyWithoutCharactersInput
  }

  export type CharactersUpdateInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutCharactersNestedInput
    inventory?: InventoryUpdateManyWithoutCharactersNestedInput
    equippeditem?: EquippedItemUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersUncheckedUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutCharactersNestedInput
    equippeditem?: EquippedItemUncheckedUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersCreateManyInput = {
    characterId?: number
    accountId: number
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateManyMutationInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharactersUncheckedUpdateManyInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    characters: CharactersCreateNestedOneWithoutInventoryInput
    inventoryitem?: InventoryItemCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    inventoryId?: number
    characterId: number
    inventoryitem?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    characters?: CharactersUpdateOneRequiredWithoutInventoryNestedInput
    inventoryitem?: InventoryItemUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    inventoryitem?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    inventoryId?: number
    characterId: number
  }

  export type InventoryUpdateManyMutationInput = {

  }

  export type InventoryUncheckedUpdateManyInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateInput = {
    itemId: number
    itemCount: number
    inventory: InventoryCreateNestedOneWithoutInventoryitemInput
  }

  export type InventoryItemUncheckedCreateInput = {
    inventoryItemId?: number
    inventoryId: number
    itemId: number
    itemCount: number
  }

  export type InventoryItemUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
    inventory?: InventoryUpdateOneRequiredWithoutInventoryitemNestedInput
  }

  export type InventoryItemUncheckedUpdateInput = {
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemCreateManyInput = {
    inventoryItemId?: number
    inventoryId: number
    itemId: number
    itemCount: number
  }

  export type InventoryItemUpdateManyMutationInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    inventoryId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type EquippedItemCreateInput = {
    itemId: number
    equippedItemName: string
    characters: CharactersCreateNestedOneWithoutEquippeditemInput
  }

  export type EquippedItemUncheckedCreateInput = {
    equippedItemId?: number
    characterId: number
    itemId: number
    equippedItemName: string
  }

  export type EquippedItemUpdateInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
    characters?: CharactersUpdateOneRequiredWithoutEquippeditemNestedInput
  }

  export type EquippedItemUncheckedUpdateInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
  }

  export type EquippedItemCreateManyInput = {
    equippedItemId?: number
    characterId: number
    itemId: number
    equippedItemName: string
  }

  export type EquippedItemUpdateManyMutationInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
  }

  export type EquippedItemUncheckedUpdateManyInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CharactersListRelationFilter = {
    every?: CharactersWhereInput
    some?: CharactersWhereInput
    none?: CharactersWhereInput
  }

  export type CharactersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    accountId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    accountId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    accountId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    accountId?: SortOrder
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    accountId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type EquippedItemListRelationFilter = {
    every?: EquippedItemWhereInput
    some?: EquippedItemWhereInput
    none?: EquippedItemWhereInput
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquippedItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharactersCountOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersAvgOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
  }

  export type CharactersMaxOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersMinOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    characterName?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CharactersSumOrderByAggregateInput = {
    characterId?: SortOrder
    accountId?: SortOrder
    hp?: SortOrder
    atk?: SortOrder
    money?: SortOrder
  }

  export type CharactersRelationFilter = {
    is?: CharactersWhereInput
    isNot?: CharactersWhereInput
  }

  export type InventoryItemListRelationFilter = {
    every?: InventoryItemWhereInput
    some?: InventoryItemWhereInput
    none?: InventoryItemWhereInput
  }

  export type InventoryItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    inventoryId?: SortOrder
    characterId?: SortOrder
  }

  export type InventoryRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type InventoryItemCountOrderByAggregateInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    inventoryItemId?: SortOrder
    inventoryId?: SortOrder
    itemId?: SortOrder
    itemCount?: SortOrder
  }

  export type EquippedItemCountOrderByAggregateInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    equippedItemName?: SortOrder
  }

  export type EquippedItemAvgOrderByAggregateInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type EquippedItemMaxOrderByAggregateInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    equippedItemName?: SortOrder
  }

  export type EquippedItemMinOrderByAggregateInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    equippedItemName?: SortOrder
  }

  export type EquippedItemSumOrderByAggregateInput = {
    equippedItemId?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharactersCreateNestedManyWithoutAccountInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type CharactersUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CharactersUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutAccountInput | CharactersUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutAccountInput | CharactersUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutAccountInput | CharactersUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharactersUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput> | CharactersCreateWithoutAccountInput[] | CharactersUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: CharactersCreateOrConnectWithoutAccountInput | CharactersCreateOrConnectWithoutAccountInput[]
    upsert?: CharactersUpsertWithWhereUniqueWithoutAccountInput | CharactersUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: CharactersCreateManyAccountInputEnvelope
    set?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    disconnect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    delete?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    connect?: CharactersWhereUniqueInput | CharactersWhereUniqueInput[]
    update?: CharactersUpdateWithWhereUniqueWithoutAccountInput | CharactersUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: CharactersUpdateManyWithWhereWithoutAccountInput | CharactersUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutCharactersInput = {
    create?: XOR<AccountCreateWithoutCharactersInput, AccountUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCharactersInput
    connect?: AccountWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutCharactersInput = {
    create?: XOR<InventoryCreateWithoutCharactersInput, InventoryUncheckedCreateWithoutCharactersInput> | InventoryCreateWithoutCharactersInput[] | InventoryUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutCharactersInput | InventoryCreateOrConnectWithoutCharactersInput[]
    createMany?: InventoryCreateManyCharactersInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type EquippedItemCreateNestedManyWithoutCharactersInput = {
    create?: XOR<EquippedItemCreateWithoutCharactersInput, EquippedItemUncheckedCreateWithoutCharactersInput> | EquippedItemCreateWithoutCharactersInput[] | EquippedItemUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: EquippedItemCreateOrConnectWithoutCharactersInput | EquippedItemCreateOrConnectWithoutCharactersInput[]
    createMany?: EquippedItemCreateManyCharactersInputEnvelope
    connect?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutCharactersInput = {
    create?: XOR<InventoryCreateWithoutCharactersInput, InventoryUncheckedCreateWithoutCharactersInput> | InventoryCreateWithoutCharactersInput[] | InventoryUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutCharactersInput | InventoryCreateOrConnectWithoutCharactersInput[]
    createMany?: InventoryCreateManyCharactersInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type EquippedItemUncheckedCreateNestedManyWithoutCharactersInput = {
    create?: XOR<EquippedItemCreateWithoutCharactersInput, EquippedItemUncheckedCreateWithoutCharactersInput> | EquippedItemCreateWithoutCharactersInput[] | EquippedItemUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: EquippedItemCreateOrConnectWithoutCharactersInput | EquippedItemCreateOrConnectWithoutCharactersInput[]
    createMany?: EquippedItemCreateManyCharactersInputEnvelope
    connect?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
  }

  export type AccountUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<AccountCreateWithoutCharactersInput, AccountUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCharactersInput
    upsert?: AccountUpsertWithoutCharactersInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCharactersInput, AccountUpdateWithoutCharactersInput>, AccountUncheckedUpdateWithoutCharactersInput>
  }

  export type InventoryUpdateManyWithoutCharactersNestedInput = {
    create?: XOR<InventoryCreateWithoutCharactersInput, InventoryUncheckedCreateWithoutCharactersInput> | InventoryCreateWithoutCharactersInput[] | InventoryUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutCharactersInput | InventoryCreateOrConnectWithoutCharactersInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutCharactersInput | InventoryUpsertWithWhereUniqueWithoutCharactersInput[]
    createMany?: InventoryCreateManyCharactersInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutCharactersInput | InventoryUpdateWithWhereUniqueWithoutCharactersInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutCharactersInput | InventoryUpdateManyWithWhereWithoutCharactersInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type EquippedItemUpdateManyWithoutCharactersNestedInput = {
    create?: XOR<EquippedItemCreateWithoutCharactersInput, EquippedItemUncheckedCreateWithoutCharactersInput> | EquippedItemCreateWithoutCharactersInput[] | EquippedItemUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: EquippedItemCreateOrConnectWithoutCharactersInput | EquippedItemCreateOrConnectWithoutCharactersInput[]
    upsert?: EquippedItemUpsertWithWhereUniqueWithoutCharactersInput | EquippedItemUpsertWithWhereUniqueWithoutCharactersInput[]
    createMany?: EquippedItemCreateManyCharactersInputEnvelope
    set?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    disconnect?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    delete?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    connect?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    update?: EquippedItemUpdateWithWhereUniqueWithoutCharactersInput | EquippedItemUpdateWithWhereUniqueWithoutCharactersInput[]
    updateMany?: EquippedItemUpdateManyWithWhereWithoutCharactersInput | EquippedItemUpdateManyWithWhereWithoutCharactersInput[]
    deleteMany?: EquippedItemScalarWhereInput | EquippedItemScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutCharactersNestedInput = {
    create?: XOR<InventoryCreateWithoutCharactersInput, InventoryUncheckedCreateWithoutCharactersInput> | InventoryCreateWithoutCharactersInput[] | InventoryUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutCharactersInput | InventoryCreateOrConnectWithoutCharactersInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutCharactersInput | InventoryUpsertWithWhereUniqueWithoutCharactersInput[]
    createMany?: InventoryCreateManyCharactersInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutCharactersInput | InventoryUpdateWithWhereUniqueWithoutCharactersInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutCharactersInput | InventoryUpdateManyWithWhereWithoutCharactersInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type EquippedItemUncheckedUpdateManyWithoutCharactersNestedInput = {
    create?: XOR<EquippedItemCreateWithoutCharactersInput, EquippedItemUncheckedCreateWithoutCharactersInput> | EquippedItemCreateWithoutCharactersInput[] | EquippedItemUncheckedCreateWithoutCharactersInput[]
    connectOrCreate?: EquippedItemCreateOrConnectWithoutCharactersInput | EquippedItemCreateOrConnectWithoutCharactersInput[]
    upsert?: EquippedItemUpsertWithWhereUniqueWithoutCharactersInput | EquippedItemUpsertWithWhereUniqueWithoutCharactersInput[]
    createMany?: EquippedItemCreateManyCharactersInputEnvelope
    set?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    disconnect?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    delete?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    connect?: EquippedItemWhereUniqueInput | EquippedItemWhereUniqueInput[]
    update?: EquippedItemUpdateWithWhereUniqueWithoutCharactersInput | EquippedItemUpdateWithWhereUniqueWithoutCharactersInput[]
    updateMany?: EquippedItemUpdateManyWithWhereWithoutCharactersInput | EquippedItemUpdateManyWithWhereWithoutCharactersInput[]
    deleteMany?: EquippedItemScalarWhereInput | EquippedItemScalarWhereInput[]
  }

  export type CharactersCreateNestedOneWithoutInventoryInput = {
    create?: XOR<CharactersCreateWithoutInventoryInput, CharactersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutInventoryInput
    connect?: CharactersWhereUniqueInput
  }

  export type InventoryItemCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type InventoryItemUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
  }

  export type CharactersUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<CharactersCreateWithoutInventoryInput, CharactersUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutInventoryInput
    upsert?: CharactersUpsertWithoutInventoryInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutInventoryInput, CharactersUpdateWithoutInventoryInput>, CharactersUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutInventoryInput | InventoryItemUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutInventoryInput | InventoryItemUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutInventoryInput | InventoryItemUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput> | InventoryItemCreateWithoutInventoryInput[] | InventoryItemUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: InventoryItemCreateOrConnectWithoutInventoryInput | InventoryItemCreateOrConnectWithoutInventoryInput[]
    upsert?: InventoryItemUpsertWithWhereUniqueWithoutInventoryInput | InventoryItemUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: InventoryItemCreateManyInventoryInputEnvelope
    set?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    disconnect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    delete?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    connect?: InventoryItemWhereUniqueInput | InventoryItemWhereUniqueInput[]
    update?: InventoryItemUpdateWithWhereUniqueWithoutInventoryInput | InventoryItemUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: InventoryItemUpdateManyWithWhereWithoutInventoryInput | InventoryItemUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutInventoryitemInput = {
    create?: XOR<InventoryCreateWithoutInventoryitemInput, InventoryUncheckedCreateWithoutInventoryitemInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutInventoryitemInput
    connect?: InventoryWhereUniqueInput
  }

  export type InventoryUpdateOneRequiredWithoutInventoryitemNestedInput = {
    create?: XOR<InventoryCreateWithoutInventoryitemInput, InventoryUncheckedCreateWithoutInventoryitemInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutInventoryitemInput
    upsert?: InventoryUpsertWithoutInventoryitemInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutInventoryitemInput, InventoryUpdateWithoutInventoryitemInput>, InventoryUncheckedUpdateWithoutInventoryitemInput>
  }

  export type CharactersCreateNestedOneWithoutEquippeditemInput = {
    create?: XOR<CharactersCreateWithoutEquippeditemInput, CharactersUncheckedCreateWithoutEquippeditemInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutEquippeditemInput
    connect?: CharactersWhereUniqueInput
  }

  export type CharactersUpdateOneRequiredWithoutEquippeditemNestedInput = {
    create?: XOR<CharactersCreateWithoutEquippeditemInput, CharactersUncheckedCreateWithoutEquippeditemInput>
    connectOrCreate?: CharactersCreateOrConnectWithoutEquippeditemInput
    upsert?: CharactersUpsertWithoutEquippeditemInput
    connect?: CharactersWhereUniqueInput
    update?: XOR<XOR<CharactersUpdateToOneWithWhereWithoutEquippeditemInput, CharactersUpdateWithoutEquippeditemInput>, CharactersUncheckedUpdateWithoutEquippeditemInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CharactersCreateWithoutAccountInput = {
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryCreateNestedManyWithoutCharactersInput
    equippeditem?: EquippedItemCreateNestedManyWithoutCharactersInput
  }

  export type CharactersUncheckedCreateWithoutAccountInput = {
    characterId?: number
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutCharactersInput
    equippeditem?: EquippedItemUncheckedCreateNestedManyWithoutCharactersInput
  }

  export type CharactersCreateOrConnectWithoutAccountInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput>
  }

  export type CharactersCreateManyAccountInputEnvelope = {
    data: CharactersCreateManyAccountInput | CharactersCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithWhereUniqueWithoutAccountInput = {
    where: CharactersWhereUniqueInput
    update: XOR<CharactersUpdateWithoutAccountInput, CharactersUncheckedUpdateWithoutAccountInput>
    create: XOR<CharactersCreateWithoutAccountInput, CharactersUncheckedCreateWithoutAccountInput>
  }

  export type CharactersUpdateWithWhereUniqueWithoutAccountInput = {
    where: CharactersWhereUniqueInput
    data: XOR<CharactersUpdateWithoutAccountInput, CharactersUncheckedUpdateWithoutAccountInput>
  }

  export type CharactersUpdateManyWithWhereWithoutAccountInput = {
    where: CharactersScalarWhereInput
    data: XOR<CharactersUpdateManyMutationInput, CharactersUncheckedUpdateManyWithoutAccountInput>
  }

  export type CharactersScalarWhereInput = {
    AND?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    OR?: CharactersScalarWhereInput[]
    NOT?: CharactersScalarWhereInput | CharactersScalarWhereInput[]
    characterId?: IntFilter<"Characters"> | number
    accountId?: IntFilter<"Characters"> | number
    characterName?: StringFilter<"Characters"> | string
    hp?: IntFilter<"Characters"> | number
    atk?: IntFilter<"Characters"> | number
    money?: IntFilter<"Characters"> | number
    createdAt?: DateTimeFilter<"Characters"> | Date | string
    updatedAt?: DateTimeFilter<"Characters"> | Date | string
  }

  export type AccountCreateWithoutCharactersInput = {
    id: string
    name: string
    password: string
    createdAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutCharactersInput = {
    accountId?: number
    id: string
    name: string
    password: string
    createdAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutCharactersInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCharactersInput, AccountUncheckedCreateWithoutCharactersInput>
  }

  export type InventoryCreateWithoutCharactersInput = {
    inventoryitem?: InventoryItemCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutCharactersInput = {
    inventoryId?: number
    inventoryitem?: InventoryItemUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutCharactersInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutCharactersInput, InventoryUncheckedCreateWithoutCharactersInput>
  }

  export type InventoryCreateManyCharactersInputEnvelope = {
    data: InventoryCreateManyCharactersInput | InventoryCreateManyCharactersInput[]
    skipDuplicates?: boolean
  }

  export type EquippedItemCreateWithoutCharactersInput = {
    itemId: number
    equippedItemName: string
  }

  export type EquippedItemUncheckedCreateWithoutCharactersInput = {
    equippedItemId?: number
    itemId: number
    equippedItemName: string
  }

  export type EquippedItemCreateOrConnectWithoutCharactersInput = {
    where: EquippedItemWhereUniqueInput
    create: XOR<EquippedItemCreateWithoutCharactersInput, EquippedItemUncheckedCreateWithoutCharactersInput>
  }

  export type EquippedItemCreateManyCharactersInputEnvelope = {
    data: EquippedItemCreateManyCharactersInput | EquippedItemCreateManyCharactersInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutCharactersInput = {
    update: XOR<AccountUpdateWithoutCharactersInput, AccountUncheckedUpdateWithoutCharactersInput>
    create: XOR<AccountCreateWithoutCharactersInput, AccountUncheckedCreateWithoutCharactersInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCharactersInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCharactersInput, AccountUncheckedUpdateWithoutCharactersInput>
  }

  export type AccountUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutCharactersInput = {
    accountId?: IntFieldUpdateOperationsInput | number
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUpsertWithWhereUniqueWithoutCharactersInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutCharactersInput, InventoryUncheckedUpdateWithoutCharactersInput>
    create: XOR<InventoryCreateWithoutCharactersInput, InventoryUncheckedCreateWithoutCharactersInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutCharactersInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutCharactersInput, InventoryUncheckedUpdateWithoutCharactersInput>
  }

  export type InventoryUpdateManyWithWhereWithoutCharactersInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutCharactersInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    inventoryId?: IntFilter<"Inventory"> | number
    characterId?: IntFilter<"Inventory"> | number
  }

  export type EquippedItemUpsertWithWhereUniqueWithoutCharactersInput = {
    where: EquippedItemWhereUniqueInput
    update: XOR<EquippedItemUpdateWithoutCharactersInput, EquippedItemUncheckedUpdateWithoutCharactersInput>
    create: XOR<EquippedItemCreateWithoutCharactersInput, EquippedItemUncheckedCreateWithoutCharactersInput>
  }

  export type EquippedItemUpdateWithWhereUniqueWithoutCharactersInput = {
    where: EquippedItemWhereUniqueInput
    data: XOR<EquippedItemUpdateWithoutCharactersInput, EquippedItemUncheckedUpdateWithoutCharactersInput>
  }

  export type EquippedItemUpdateManyWithWhereWithoutCharactersInput = {
    where: EquippedItemScalarWhereInput
    data: XOR<EquippedItemUpdateManyMutationInput, EquippedItemUncheckedUpdateManyWithoutCharactersInput>
  }

  export type EquippedItemScalarWhereInput = {
    AND?: EquippedItemScalarWhereInput | EquippedItemScalarWhereInput[]
    OR?: EquippedItemScalarWhereInput[]
    NOT?: EquippedItemScalarWhereInput | EquippedItemScalarWhereInput[]
    equippedItemId?: IntFilter<"EquippedItem"> | number
    characterId?: IntFilter<"EquippedItem"> | number
    itemId?: IntFilter<"EquippedItem"> | number
    equippedItemName?: StringFilter<"EquippedItem"> | string
  }

  export type CharactersCreateWithoutInventoryInput = {
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutCharactersInput
    equippeditem?: EquippedItemCreateNestedManyWithoutCharactersInput
  }

  export type CharactersUncheckedCreateWithoutInventoryInput = {
    characterId?: number
    accountId: number
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equippeditem?: EquippedItemUncheckedCreateNestedManyWithoutCharactersInput
  }

  export type CharactersCreateOrConnectWithoutInventoryInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutInventoryInput, CharactersUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemCreateWithoutInventoryInput = {
    itemId: number
    itemCount: number
  }

  export type InventoryItemUncheckedCreateWithoutInventoryInput = {
    inventoryItemId?: number
    itemId: number
    itemCount: number
  }

  export type InventoryItemCreateOrConnectWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemCreateManyInventoryInputEnvelope = {
    data: InventoryItemCreateManyInventoryInput | InventoryItemCreateManyInventoryInput[]
    skipDuplicates?: boolean
  }

  export type CharactersUpsertWithoutInventoryInput = {
    update: XOR<CharactersUpdateWithoutInventoryInput, CharactersUncheckedUpdateWithoutInventoryInput>
    create: XOR<CharactersCreateWithoutInventoryInput, CharactersUncheckedCreateWithoutInventoryInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutInventoryInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutInventoryInput, CharactersUncheckedUpdateWithoutInventoryInput>
  }

  export type CharactersUpdateWithoutInventoryInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutCharactersNestedInput
    equippeditem?: EquippedItemUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersUncheckedUpdateWithoutInventoryInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equippeditem?: EquippedItemUncheckedUpdateManyWithoutCharactersNestedInput
  }

  export type InventoryItemUpsertWithWhereUniqueWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    update: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
    create: XOR<InventoryItemCreateWithoutInventoryInput, InventoryItemUncheckedCreateWithoutInventoryInput>
  }

  export type InventoryItemUpdateWithWhereUniqueWithoutInventoryInput = {
    where: InventoryItemWhereUniqueInput
    data: XOR<InventoryItemUpdateWithoutInventoryInput, InventoryItemUncheckedUpdateWithoutInventoryInput>
  }

  export type InventoryItemUpdateManyWithWhereWithoutInventoryInput = {
    where: InventoryItemScalarWhereInput
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyWithoutInventoryInput>
  }

  export type InventoryItemScalarWhereInput = {
    AND?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    OR?: InventoryItemScalarWhereInput[]
    NOT?: InventoryItemScalarWhereInput | InventoryItemScalarWhereInput[]
    inventoryItemId?: IntFilter<"InventoryItem"> | number
    inventoryId?: IntFilter<"InventoryItem"> | number
    itemId?: IntFilter<"InventoryItem"> | number
    itemCount?: IntFilter<"InventoryItem"> | number
  }

  export type InventoryCreateWithoutInventoryitemInput = {
    characters: CharactersCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutInventoryitemInput = {
    inventoryId?: number
    characterId: number
  }

  export type InventoryCreateOrConnectWithoutInventoryitemInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutInventoryitemInput, InventoryUncheckedCreateWithoutInventoryitemInput>
  }

  export type InventoryUpsertWithoutInventoryitemInput = {
    update: XOR<InventoryUpdateWithoutInventoryitemInput, InventoryUncheckedUpdateWithoutInventoryitemInput>
    create: XOR<InventoryCreateWithoutInventoryitemInput, InventoryUncheckedCreateWithoutInventoryitemInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutInventoryitemInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutInventoryitemInput, InventoryUncheckedUpdateWithoutInventoryitemInput>
  }

  export type InventoryUpdateWithoutInventoryitemInput = {
    characters?: CharactersUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutInventoryitemInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
  }

  export type CharactersCreateWithoutEquippeditemInput = {
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    account: AccountCreateNestedOneWithoutCharactersInput
    inventory?: InventoryCreateNestedManyWithoutCharactersInput
  }

  export type CharactersUncheckedCreateWithoutEquippeditemInput = {
    characterId?: number
    accountId: number
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    inventory?: InventoryUncheckedCreateNestedManyWithoutCharactersInput
  }

  export type CharactersCreateOrConnectWithoutEquippeditemInput = {
    where: CharactersWhereUniqueInput
    create: XOR<CharactersCreateWithoutEquippeditemInput, CharactersUncheckedCreateWithoutEquippeditemInput>
  }

  export type CharactersUpsertWithoutEquippeditemInput = {
    update: XOR<CharactersUpdateWithoutEquippeditemInput, CharactersUncheckedUpdateWithoutEquippeditemInput>
    create: XOR<CharactersCreateWithoutEquippeditemInput, CharactersUncheckedCreateWithoutEquippeditemInput>
    where?: CharactersWhereInput
  }

  export type CharactersUpdateToOneWithWhereWithoutEquippeditemInput = {
    where?: CharactersWhereInput
    data: XOR<CharactersUpdateWithoutEquippeditemInput, CharactersUncheckedUpdateWithoutEquippeditemInput>
  }

  export type CharactersUpdateWithoutEquippeditemInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneRequiredWithoutCharactersNestedInput
    inventory?: InventoryUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersUncheckedUpdateWithoutEquippeditemInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersCreateManyAccountInput = {
    characterId?: number
    characterName: string
    hp?: number
    atk?: number
    money?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CharactersUpdateWithoutAccountInput = {
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateManyWithoutCharactersNestedInput
    equippeditem?: EquippedItemUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersUncheckedUpdateWithoutAccountInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUncheckedUpdateManyWithoutCharactersNestedInput
    equippeditem?: EquippedItemUncheckedUpdateManyWithoutCharactersNestedInput
  }

  export type CharactersUncheckedUpdateManyWithoutAccountInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    characterName?: StringFieldUpdateOperationsInput | string
    hp?: IntFieldUpdateOperationsInput | number
    atk?: IntFieldUpdateOperationsInput | number
    money?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyCharactersInput = {
    inventoryId?: number
  }

  export type EquippedItemCreateManyCharactersInput = {
    equippedItemId?: number
    itemId: number
    equippedItemName: string
  }

  export type InventoryUpdateWithoutCharactersInput = {
    inventoryitem?: InventoryItemUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutCharactersInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
    inventoryitem?: InventoryItemUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateManyWithoutCharactersInput = {
    inventoryId?: IntFieldUpdateOperationsInput | number
  }

  export type EquippedItemUpdateWithoutCharactersInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
  }

  export type EquippedItemUncheckedUpdateWithoutCharactersInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
  }

  export type EquippedItemUncheckedUpdateManyWithoutCharactersInput = {
    equippedItemId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    equippedItemName?: StringFieldUpdateOperationsInput | string
  }

  export type InventoryItemCreateManyInventoryInput = {
    inventoryItemId?: number
    itemId: number
    itemCount: number
  }

  export type InventoryItemUpdateWithoutInventoryInput = {
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateWithoutInventoryInput = {
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }

  export type InventoryItemUncheckedUpdateManyWithoutInventoryInput = {
    inventoryItemId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    itemCount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersCountOutputTypeDefaultArgs instead
     */
    export type CharactersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryCountOutputTypeDefaultArgs instead
     */
    export type InventoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharactersDefaultArgs instead
     */
    export type CharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharactersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryDefaultArgs instead
     */
    export type InventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventoryItemDefaultArgs instead
     */
    export type InventoryItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventoryItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquippedItemDefaultArgs instead
     */
    export type EquippedItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquippedItemDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}