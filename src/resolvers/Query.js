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
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy,
  });
  return posts;
}

module.exports = {
  feed,
};
