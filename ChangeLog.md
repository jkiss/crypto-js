# Change Log #

## 3.1.2 ##

  * Fixed typed array support when the view has a limited section of the buffer.
  * Added counter block mode compatible with  Dr Brian Gladman fileenc.c.

## 3.1 ##

  * Added SHA-3.
  * Added RIPEMD-160.
  * Added UTF-16 little endian.
  * Added support to create WordArrays from typed arrays.
  * Added cipher params Hex formatter.
  * Increased hash maximum message length from a 32-bit counter to 53-bit.
  * Fixed issue where HMAC would ignore key sigBytes.
  * Fixed Rabbit endianness error.
  * Removed byte order mark from source file.

## 3.0.1 ##

  * Fixed issue where WordArray concat could fail with large data (greater than 255KB).

## 3.0 ##

  * Added SHA-224, SHA-384, SHA-512, and TripleDES.
  * Added progressive processing.
  * More compatible with existing implementations.
  * More adaptable to new and varied implementations.
  * Better architecture under the hood.
  * Faaaster.

## 2.5.4 ##

  * Added error checks when unpadding fails.
  * Improved PBKDF2Async performance.
  * Removed use of native base64 functions.

## 2.5.3 ##

  * Fixed issue where CTR mode would clobber IV.
  * Fixed issue where SHA-256 would lose precision when hashing long messages.
  * Compatibility enhancement for implementations that output signed bytes.

## 2.5.2 ##

  * Fixed mistyped DES method names.

## 2.5.1 ##

  * Added DES.

## 2.4 ##

  * Added CTR mode of operation.

## 2.3 ##

  * Added ECB and CFB modes of operation.
  * Added a variety of padding schemes.

## 2.2 ##

  * Added custom IV option to AES.
  * Added CBC-nopad mode of operation.

## 2.1 ##

  * Added PBKDF2Async.
  * Switched from YUI Compressor to Closure Compiler.
  * Ensured Crypto object isn't overwritten if loaded twice.

## 2.0 ##

  * Added support for Unicode encoded as UTF-8.
  * Added support for input as either strings or byte arrays.
  * K-weight optimizations.

## 1.1 ##

  * Added HMAC and PBKDF2.
  * Speed optimizations.

## 1.0 ##

  * Initial release.