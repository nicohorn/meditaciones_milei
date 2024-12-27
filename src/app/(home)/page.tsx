import prisma from "@/lib/prisma";
import { SearchBar } from "@/modules/navigation/searchbar";
import QuoteCard from "@/modules/quotes/show_quote";

export default async function Page() {
  const quotes = await prisma.quote.findMany();

  return (
    <div className="flex justify-center flex-col space-y-4">
      <SearchBar />
      <section className="flex flex-col gap-12">
        {quotes.map((q) => (
          <QuoteCard quote={q} key={q.content + q.description} />
        ))}
      </section>
    </div>
  );
}
