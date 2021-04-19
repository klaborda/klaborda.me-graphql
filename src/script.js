const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const allPosts = await prisma.post.findMany();
  console.log(allPosts);

  //const newPost = await prisma.post.create({
  //  data: {
  //    title: "First Post!",
  //    body: "# Welcome!\nThis is my first blog post\nIt is so cool!",
  //  },
  //});
  //console.log(newPost);
}

main()
  .catch((e) => {
    throw e;
  })
  // 5
  .finally(async () => {
    await prisma.$disconnect();
  });
