import prisma from "@/lib/prisma";

export const resolvers = {
  Query: {
    quotes: async () => {
      return prisma.quote.findMany({
        include: {
          created_by: true,
          interactions: true,
        },
      });
    },
    quote: async (_: null, { id }: { id: string }) => {
      return prisma.quote.findUnique({
        where: { id },
        include: {
          created_by: true,
          interactions: true,
        },
      });
    },
  },
  // Mutation: {
  //   createQuote: async (_, { input }, { userId }) => {
  //     return prisma.quote.create({
  //       data: {
  //         ...input,
  //         userId,
  //       },
  //       include: {
  //         created_by: true,
  //         interactions: true,
  //       },
  //     });
  //   },
  //   updateQuote: async (_, { id, input }) => {
  //     return prisma.quote.update({
  //       where: { id },
  //       data: input,
  //       include: {
  //         created_by: true,
  //         interactions: true,
  //       },
  //     });
  //   },
  //   deleteQuote: async (_, { id }) => {
  //     return prisma.quote.delete({
  //       where: { id },
  //     });
  //   },
  // },
};
