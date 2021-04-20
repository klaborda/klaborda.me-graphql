function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { title: { contains: args.filter } },
          { body: { contains: args.filter } },
        ],
      }
    : {};

  const posts = context.prisma.post.findMany({
    where,
  });
  return posts;
}

module.exports = {
  feed,
};
