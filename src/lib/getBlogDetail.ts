import matter from "gray-matter";
import { marked } from "marked";

export const getBlogDetail = async (blogId: string) => {
  const res = await fetch(
    `https://api.github.com/repos/umaidashi/blog/contents/contents/posts/${blogId}`,
  );
  const data = await res.json();
  const decoded = atob(data.content);
  const mdObj = matter(decoded);
  const content = marked(mdObj.content);
  return { data: mdObj.data, content };
};
