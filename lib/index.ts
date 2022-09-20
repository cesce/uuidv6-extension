import * as crypto from "crypto";
import * as uuid from "uuid";

// Return the nil UUID string (all zeros)
export function nil(): string {
  return uuid.NIL;
}

// Convert UUID string to array of bytes
export function parse(uuidData: string): ArrayLike<number> {
  return uuid.parse(uuidData);
}

// Convert array of bytes to UUID string
export function stringify(uuidData: ArrayLike<number>): string {
  return uuid.stringify(uuidData);
}

// Test a string to see if it is a valid UUID not for v6
export function validate(uuidData: string): boolean {
  return uuid.validate(uuidData);
}

// Test a string to see if it is a valid UUID v6
export function validateV6(uuiDate: string): boolean {
  const regExpUuid = /^[a-z,0-9,-]{36,36}$/;

  return regExpUuid.test(uuiDate);
}

// Detect RFC version of a UUID not for v6
export function version(uuidData: string): number {
  return uuid.version(uuidData);
}

// Detect RFC version of a UUID for v1 to v6
export function versionV6(uuidData: string): number {
  let version = 0;

  if (validateV6(uuidData)) {
    return parseInt(uuidData.charAt(14));
  }

  return uuid.version(uuidData);
}

// Convert a UUID V1 to a Date Object
export function uuidToDate(uuidData: string): Date {
  var GREGORIAN_OFFSET = 122192928000000000;

  function get_time_int(uuid_str: string): number {
    // (string) uuid_str format	=>		'11111111-2222-#333-4444-555555555555'
    var uuid_arr = uuid_str.split("-"),
      time_str = [uuid_arr[2].substring(1), uuid_arr[1], uuid_arr[0]].join("");
    // time_str is convert  '11111111-2222-#333-4444-555555555555'  to  '333222211111111'
    return parseInt(time_str, 16);
  }

  function get_date_obj(uuid_str: string): Date {
    // (string) uuid_str format	=>		'11111111-2222-#333-4444-555555555555'
    var int_time = get_time_int(uuid_str) - GREGORIAN_OFFSET,
      int_millisec = Math.floor(int_time / 10000);
    return new Date(int_millisec);
  }

  return get_date_obj(uuidData);
}

// Create a version 1 (timestamp) UUID
export function v1(): string {
  return uuid.v1();
}

// Create a version 4 (random) UUID
export function v4(): string {
  return uuid.v4();
}

// Create a version 6 (ordered timestamp) UUID from version 1
export function v6(opts: any = {}): string {
  const options = opts || {};

  const disableRandom = Boolean(options.disableRandom);

  function generateId(): string {
    const raw = v1();

    const prefix = `${raw.substring(15, 18)}${raw.substring(
      9,
      13
    )}${raw.substring(0, 5)}6${raw.substring(5, 8)}`;

    const prefixFormatted = `${prefix.substring(0, 8)}-${prefix.substring(
      8,
      4
    )}-${prefix.substring(12)}`;

    const random = crypto.randomBytes(8).toString("hex");

    if (disableRandom) {
      return `${prefixFormatted}${raw.substring(18)}`;
    }

    return `${prefixFormatted}-${random.substring(0, 4)}-${random.substring(
      4
    )}`;
  }

  return generateId();
}
