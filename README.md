## Small library for generating random SIP nonce values

Contains both CommonJS and ESM modules for generating SIP-compatible random string values between 10 and 24 chars in length.

Note: for speed, this library does not use crypto libraries for generating random bytes or seed data. It just uses several iterations of A-Z,a-z,0-9, shuffled and then randomly sliced into a substring.

**Installation**

```
npm install sip-nonce
```

**Usage Examples**

```javascript
// For ESM use
import nonce from "sip-nonce";

// OR, for CommonJS use
const nonce = require("sip-nonce");
```

```javascript
// by default this will generate a 10 char string
const n = nonce();

// generate a 12 char string
const n = nonce(12);

// generate a string with a random length between 10 and 12 (recommended)
const n = nonce(10, 12);

// a string with a random length between 10 and 24
const n = nonce(10, 24);
```
