import prisma from "@/lib/prisma";
import QuoteCard from "@/modules/quotes/show_quote";

export default async function Page() {
  const quotes = await prisma.quote.findMany();

  return (
    <div className="flex justify-center">
      <section className="flex flex-col gap-12">
        {quotes.map((q) => (
          <QuoteCard quote={q} key={q.content + q.description} />
        ))}
      </section>
    </div>
  );
}
