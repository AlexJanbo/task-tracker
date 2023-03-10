const mongoose = require('mongoose')
const request = require('supertest')
require('dotenv').config()

const app = require('../index.js')
const { registerUser } = require('../controllers/userController')

beforeEach(async () => {
    await mongoose.connect(process.env.TEST_MONGODB_URI)
})

afterEach(async () => {
    await mongoose.connection.close()
})
afterAll(async () => {
    const collections = mongoose.connection.collections
    for(const key in collections) {
        const collection = collections[key]
        await collection.deleteMany()
    }
})


// Test suite for the user controller
describe('User controller', () => {

    // Test suite for registerUser function
    describe('registerUser', () => {
        it('should create a new user in the database and return the user object when information is valid', async () => {
            // Arrange
            const user = {
                firstName: 'John',
                lastName: 'Doe',
                username: 'JohnDoe',
                email: 'john.doe@gmail.com',
                password: 'password',
            }

            // Act
            const newUser = await registerUser(user)
            const result = await User.find({ username: newUser.username })

            // Assert
            expect(result.status).tobe(201)
            expect(result.firstName).tobe(user.firstName)
            expect(result.lastName).tobe(user.lastName)
            expect(result.username).tobe(user.username)
            expect(result.email).tobe(user.email)
            expect(result.password).tobe(user.password)

        })
    })




})

git filter-branch --env-filter '
OLD_EMAIL="ajanbo@uci.edu"
CORRECT_EMAIL="alexanderjanbo98@gmail.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags