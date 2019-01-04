const expect = require('expect');

var {
    generateMessage
} = require('./../utils/message')

describe('generateMessage', () => {
    it('should generate correct message', () => {
        var from = 'Ali';
        var text = 'hello';

        var message = generateMessage(from, text);

        // expect(message.from).toEqual(from);
        // expect(message.text).toEqual(text);
        // expect(message.createdAt).toBeTruthy();
        expect(message).toMatchObject({from,text});
        expect(typeof message.createdAt).toBe('number');
    });

});