# @haensl/mimetypes

Simple JSON object holding MIME types.

[![NPM](https://nodei.co/npm/@haensl%2Fmimetypes.png?downloads=true)](https://nodei.co/npm/@haensl%2Fmimetypes/)

[![npm version](https://badge.fury.io/js/@haensl%2Fmimetypes.svg)](http://badge.fury.io/js/@haensl%2Fmimetypes)
[![CircleCI](https://circleci.com/gh/haensl/mimetypes.svg?style=svg)](https://circleci.com/gh/haensl/mimetypes)

## Motivation

This is a simple JSON object collecting [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types). The rationale for having them in a module is manifold including but not limited to consitency, accuracy, reuse, extensibility, future-proofing and collaboration.

At it's most basic level, this module tries to eliminate magic strings. Magic strings are magical in a bad way, they cast no spells, just confusion and potential bugs.

This MIME types collection is (very) far from complete - in fact it only contains the most commonly used mimetypes at the moment. However, the goal is to collect more as they become relevant to Node developers.

[Please feel free to request addition if you need a MIME type not included in this module](https://github.com/haensl/mimetypes/issues/new/choose?labels=feature%20request).

## Installation

### Via `npm`

```bash
$ npm install -S @haensl/mimetypes
```

### Via `yarn`

```bash
$ yarn add @haensl/mimetypes
```

## Usage

1. [Install @haensl/mimetypes](#installation)

2. Use mime types in your projects:


    ESM, i.e. `import`

    ```javascript
    import { json } from '@haensl/mimetypes';

    // ...

    const route = async (ctx) => {
      // some data from somewhere
      const data = await getData();

      // Use the json mimetype
      ctx.set(headers.contentType, json);

      ctx.body = JSON.stringify(data);
    }

    ```

    CJS, i.e. `require`

    ```javascript
    const { json } = require('@haensl/mimetypes');

    // ...

    const route = async (ctx) => {
      // some data from somewhere
      const data = await getData();

      // Use the json mimetype
      ctx.set(headers.contentType, json);

      ctx.body = JSON.stringify(data);
    }
    ```

## Synopsis

The `mimetypes` object is a simple JSON object that maps to strings:

```json
{
  "css": "text/css",
  "html": "text/html",
  "js": "text/javascript",
  "jpg": "image/jpeg",
  "json": "application/json",
  "jsonLd": "application/ld+json",
  "gif": "image/gif",
  "mp4": "video/mp4",
  "png": "image/png",
  "svg": "image/svg+xml",
  "text": "text/plain",
  "webm": "video/webm",
  "webp": "image/webp",
  "xml": "application/xml"
}
```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
