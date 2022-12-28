class UserController {
    async getUsers(req, res, next) {
        try {
            res.json(['Hello!', 'Express'])
        } catch (e) {

        }
    }

    async register(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async login(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async activate(req, res, next) {
        try {

        } catch (e) {

        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {

        }
    }
}

module.exports = new UserController();
