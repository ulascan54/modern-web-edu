const CustomError = require('../../helpers/error/CustomError');
const astncErrorWrapper = require('express-async-handler');
const User = require('../../models/User');
const Question = require('../../models/Question');
const Answer = require('../../models/Answer');

const jwt = require('jsonwebtoken');
const {
    isTokenIncluded,
    getAccessTokenFromHeader,
} = require('../../helpers/authorization/tokenHelpers');
const getAccessToRoute = (req, res, next) => {
    //Token
    const { JWT_SECRET_KEY } = process.env;
    if (!isTokenIncluded(req)) {
        //401 : unauthorized
        //403: forbidden
        return next(
            new CustomError('You are not authorized to access this route', 401)
        );
    }
    const accessToken = getAccessTokenFromHeader(req);
    jwt.verify(accessToken, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return next(
                new CustomError(
                    'You are not authorized to access this route',
                    401
                )
            );
        }
        req.user = {
            id: decoded.id,
            name: decoded.name,
        };
        next();
    });
};

const getAdminAccess = astncErrorWrapper(async (req, res, next) => {
    const { id } = req.user;
    const user = await User.findById(id);

    if (user.role !== 'admin') {
        return next(new CustomError('Only admins can access this route', 403));
    }
    next();
});

const getQuestionOwnerAccess = astncErrorWrapper(async (req, res, next) => {
    const userId = req.user.id;
    const questionId = req.params.id;
    const question = await Question.findById(questionId);

    if (question.user != userId) {
        return next(
            new CustomError('Only owner can handle this operation', 403)
        );
    }
    next();
});

const getAnswerOwnerAccess = astncErrorWrapper(async (req, res, next) => {
    const userId = req.user.id;
    const answerId = req.params.answer_id;
    const answer = await Answer.findById(answerId);

    if (answer.user != userId) {
        return next(
            new CustomError('Only owner can handle this operation', 403)
        );
    }
    next();
});

module.exports = {
    getAccessToRoute,
    getAdminAccess,
    getQuestionOwnerAccess,
    getAnswerOwnerAccess,
};
