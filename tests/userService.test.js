const userService = require('../src/services/userService');
const User = require('../src/models/User');

describe('User Service', () => {
    it('should find user by ID', async () => {
        const user = await userService.findUserById('someUserId');
        expect(user).toBeDefined();
    });
});