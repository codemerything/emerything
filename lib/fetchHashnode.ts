export type HashnodeArticle = {
  title: string;
  date: string;
  slug: string;
  brief?: string;
  coverImage?: string;
};

export async function fetchHashnodeArticles(): Promise<HashnodeArticle[]> {
  const query = `
    query {
      user(username: \"mmnldm\") {
        publication {
          posts(page: 0) {
            title
            brief
            slug
            coverImage
            dateAdded
          }
        }
      }
    }
  `;
  const res = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });
  const { data } = await res.json();
  return (
    data?.user?.publication?.posts?.map((post: any) => ({
      title: post.title,
      date: post.dateAdded,
      slug: post.slug,
      brief: post.brief,
      coverImage: post.coverImage,
    })) || []
  );
}
