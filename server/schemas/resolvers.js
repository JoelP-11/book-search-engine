const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (_, args, context) => {
            if (context.user) {
                const user = await User.findOne({_id: context.user._id})
                return user;
            }
            throw new AuthenticationError("Must be logged in to view.")
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user)

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credential')
            }
        
            const correctPw = await user.isCorrectPassword(body.password);
        
            if (!correctPw) {
              return res.status(400).json({ message: 'Wrong password!' });
            }
            const token = signToken(user);
            res.json({ token, user });
          },

        saveBook: async (_, { bookData } , context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: bookData } },
                    { new: true, runvalidators: true }
                );
                return user;
            }
            throw new AuthenticationError("must be logged in")
        },

        deleteBook: async(_, {bookId}, context) => {
            if (context.user) {
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pullToSet: { savedBooks: {bookId} } },
                    { new: true }
                );
                return user;
            }
            throw new AuthenticationError("must be logged in.")
        }
    },
};

module.exports = resolvers;