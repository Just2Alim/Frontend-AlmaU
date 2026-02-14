import ArticleItem from "./ArticleItem";

export default function ArticleList({ articles, onClickRemove }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} onClickRemove={onClickRemove} />
      ))}
    </ul>
  );
}
