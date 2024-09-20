const blogMap = new Map<string, [string, string]>();

blogMap.set("Devin and the AI economy", [
  "https://100xa.github.io/2024/03/18/blog-devin-ai/",
  "So whats with this AI thing?",
]);

const createBlog = (): string[] => {
  const blogs: string[] = [];
  const SPACE = " ";

  blogs.push("<br>");

  blogMap.forEach((value, blogName) => {
    const [link, description] = value;
    const linkElement = `<a href="${link}" target="_blank">${blogName}</a>`;
    const padding = SPACE.repeat(30 - blogName.length);
    const blogString = `${SPACE.repeat(
      2,
    )}${linkElement} -${padding}${description}`;
    blogs.push(blogString);

    blogs.push("<br>");
  });

  blogs.push("<br>");
  blogs.push(`${blogMap.size} File(s)`);
  blogs.push("<br>");
  return blogs;
};

export const BLOG = createBlog();
