export type Book = {
  title: string;
  author: string;
  coverImage: string | null;
  url: string;
  status: "Reading" | "Next up" | "Completed";
};

type GoogleBookResponse = {
  items: Array<{
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks?: {
        thumbnail: string;
      };
      infoLink: string;
    };
  }>;
};

export async function getBookByTitleAndAuthor(
  title: string,
  author: string,
  status: Book["status"]
): Promise<Book | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
        title
      )}+inauthor:${encodeURIComponent(author)}&maxResults=1`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch book data");
    }

    const data: GoogleBookResponse = await response.json();

    if (!data.items || data.items.length === 0) {
      return null;
    }

    const book = data.items[0].volumeInfo;

    return {
      title: book.title,
      author: book.authors ? book.authors.join(", ") : "Unknown Author",
      coverImage: book.imageLinks?.thumbnail || null,
      url: book.infoLink,
      status,
    };
  } catch (error) {
    console.error("Error fetching book:", error);
    return null;
  }
}

export async function getCurrentlyReading(): Promise<Book[]> {
  // These could come from a database or configuration in a real application
  const readingList = [
    {
      title: "What Art Does",
      author: "Brian Eno",
      status: "Reading" as const,
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      status: "Next up" as const,
    },
  ] as const;

  const books = await Promise.all(
    readingList.map(async ({ title, author, status }) => {
      const book = await getBookByTitleAndAuthor(title, author, status);
      return book;
    })
  );

  return books.filter((book): book is Book => book !== null);
}
