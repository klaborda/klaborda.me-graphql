const { ApolloServer } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

const resolvers = {
  Query: {
    info: () => `This is the klaborda.me API`,
    posts: async (parent, args, context) => {
      return context.prisma.post.findMany();
    },
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newPost = context.prisma.post.create({
        data: {
          title: args.title,
          body: args.body,
        },
      });
      return newPost;
    },
  },
};

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8"),
  resolvers,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => console.log(`Server is running on ${url}`));
