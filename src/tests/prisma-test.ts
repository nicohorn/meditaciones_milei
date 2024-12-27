// tests/prisma-test.ts
import { prisma } from "@/lib/prisma";

async function main() {
  try {
    const result = await prisma.user.findMany();
    console.log("Database connection successful");
    console.log(result);
  } catch (e) {
    console.error("Error connecting to database:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
