const mimetypes = require('./');

describe('@haensl/mimetypes', () => {
  it('contains css', () => {
    expect(mimetypes.css)
      .toEqual('text/css');
  });

  it('contains html', () => {
    expect(mimetypes.html)
      .toEqual('text/html');
  });

  it('contains js', () => {
    expect(mimetypes.js)
      .toEqual('text/javascript');
  });

  it('contains jpg', () => {
    expect(mimetypes.jpg)
      .toEqual('image/jpeg');
  });

  it('contains json', () => {
    expect(mimetypes.json)
      .toEqual('application/json');
  });

  it('contains json LD', () => {
    expect(mimetypes.jsonLd)
      .toEqual('application/ld+json');
  });

  it('contains gif', () => {
    expect(mimetypes.gif)
      .toEqual('image/gif');
  });

  it('contains mp4', () => {
    expect(mimetypes.mp4)
      .toEqual('video/mp4');
  });

  it('contains png', () => {
    expect(mimetypes.png)
      .toEqual('image/png');
  });

  it('contains svg', () => {
    expect(mimetypes.svg)
      .toEqual('image/svg+xml');
  });

  it('contains text', () => {
    expect(mimetypes.text)
      .toEqual('text/plain');
  });

  it('contains webm', () => {
    expect(mimetypes.webm)
      .toEqual('video/webm');
  });

  it('contains webp', () => {
    expect(mimetypes.webp)
      .toEqual('image/webp');
  });

  it('contains xml', () => {
    expect(mimetypes.xml)
      .toEqual('application/xml');
  });
});
