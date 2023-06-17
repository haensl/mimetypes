describe('@haensl/mimetypes', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  describe('import via full uri', () => {
    const mimetypes = require('@haensl/mimetypes');

    it('exposes json', () => {
      expect(mimetypes.json)
        .toEqual('application/json');
    });

    it('exposes xml', () => {
      expect(mimetypes.xml)
        .toEqual('application/xml');
    });
  });

  describe('spread import', () => {
    const { js }  = require('@haensl/mimetypes');

    it('exposes js', () => {
      expect(js)
        .toEqual('text/javascript');
    });
  });
});
