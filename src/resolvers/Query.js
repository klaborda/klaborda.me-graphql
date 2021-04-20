function feed(parent, args, context, info) {
  return context.prisma.post.findMany();
}

module.exports = {
  feed,
};
