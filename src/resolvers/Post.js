function author(parent, args, context) {
  return context.prisma.post.findUnique({ where: { id: parent.id } }).author();
}

module.exports = {
  author,
};
