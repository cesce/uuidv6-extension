# uuidv6-extension

UUID version 6 extension for creating time based in RFC UUID v1 for NodeJS.

This is an extension of the existing library: <https://github.com/uuidjs/uuid>

**NOTE:** this repository has been archived because the base library (<https://github.com/uuidjs/uuid>) already supports UUID version 6 (version 7 Unix Epoc time-based also supported).

## Install

```bash
npm install uuidv6-extension
```

## API

| Method                   | Return                                                     | Comments                               |
| ------------------------ | ---------------------------------------------------------- | -------------------------------------- |
| uuid.nil( )              | The nil UUID string (all zeros)                            | '00000000-0000-0000-0000-000000000000' |
| uuid.parse( )            | Convert UUID string to array of bytes (v1 to v4)           | ArrayLike < number >                   |
| uuid.stringify( )        | Convert array of bytes to UUID string (v1 to v4)           | '46ed45e0-392d-11ed-9370-0800200c9a66' |
| uuid.validate( )         | Test a string to see if it is a valid UUID not v6          | Boolean                                |
| uuid.validateV6( )       | Test a string to see if it is a valid UUID v6 (reg. exp.)  | Boolean                                |
| uuid.validateAll( )      | Validate a string with UUID v1, v3, v5 and v6              | Boolean                                |
| uuid.version( )          | Detect RFC version of a UUID not v6                        | Number                                 |
| uuid.versionAll( )       | Detect RFC version of a UUID for v1, v4 and v6             | Number                                 |
| uuid.uuidToDate( )       | Convert a UUID V1 to a Date Object                         | Date                                   |
| uuid.uuidToDateV6( )     | Convert a UUID V6 to a Date Object                         | Date                                   |
| uuid.v1( )               | Create a version 1 (timestamp) UUID                        | '5714f720-1268-11e7-a24b-96d95aa38c32' |
| uuid.v4( )               | Create a version 4 (random) UUID                           | '81d86d15-822f-4f7b-b091-0a1f9392d379' |
| uuid.v6( )               | Create a version 6 (ordered MAC) UUID from version 1       | '1e712685-714f-6720-a23a-c90103f70be6' |
| uuid.v6Ordered( )        | Create a version 6 (ordered timestamp) UUID from version 1 | '1e712685-714f-6720-a23a-c90103f70be6' |
| uuid.v6OrderedToV1( ) \* | Get UUID V1 from V6 ordered timestamp                      | '1e712685-714f-6720-a23a-c90103f70be6' |

- v6OrderedToV1() Not implemented

## Usage

```ts
import * as uuid from "uuidv6-extension";

// nil
console.log(`nil UUID: ${nil()}`);

// Parse - Stringify
const uuidV1 = uuid.v1();
const uuidV1Parse = uuid.parse(uuidV1);
const uuidV1Str = uuid.stringify(uuidV1Parse);
const uuidV6 = uuid.v6();
const uuidV6Ordered = uuid.v6Ordered();

console.log(`UUID v1: ${uuidV1}`);
console.log(`UUID v1 stringified: ${uuidV1Str}`);

// Validate
const invalid = "ad333a";
console.log(uuid.validate(uuidV1));
console.log(uuid.validate(invalid));
console.log(uuid.validateV6(uuidV6));

// Version
console.log(uuid.version(uuidV1));
console.log(uuid.versionV6(uuidV1));
console.log(uuid.versionV6(uuidV6));

// UUID to Date
console.log(uuid.uuidToDate(uuidV1));

// UUID V6 with ordered timestamp
console.log(uuid.v6Ordered());

// UUID V6 timestamp
console.log(uuidToDateV6(uuidV6Ordered));
```

## To be done

Implementation

- [ ] Ordered V6 to V1

Support for versions:

- [ ] V3
- [ ] V5

Test

- [ ] Unit test
- [ ] Performance test

## License

- The underlying uuid modules and code licenses are:

  - The underlying code from uuid-with-v6-js is licensed under the [ISC License](https://github.com/kurttheviking/uuid-with-v6-js/blob/master/LICENSE).
  - The underlying uuid module is licensed under the [MIT License](https://github.com/kelektiv/node-uuid/blob/master/LICENSE.md).
  - The underlying code from UUID_to_Date is licensed under the [Apache License 2.0] (https://github.com/xehrad/UUID_to_Date/blob/master/LICENSE)
