jest.mock('./src/api');

global.HTMLElement.prototype.scrollIntoView = jest.fn();
