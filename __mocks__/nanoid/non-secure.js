const nanoid = jest.createMockFromModule('nanoid/non-secure');

nanoid.nanoid = () => '12345';

module.exports = nanoid;
