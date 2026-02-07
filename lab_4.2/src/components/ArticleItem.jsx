import { useState } from "react";

export default function ArticleItem({ article, onClickRemove }) {
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = (e) => {
    e.preventDefault(); // чтобы ссылка не “прыгала”
    setIsOpened((prev) => !prev);
  };

  return (
    <li
      style={{
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <a
          href={`#${article.id}`}
          title="Toggle Summary"
          onClick={onClickToggle}
          style={{ flex: 1 }}
        >
          {article.title}
        </a>

        <button onClick={() => onClickRemove(article.id)} aria-label="Remove">
          ×
        </button>
      </div>

      <p style={{ display: isOpened ? "block" : "none", marginTop: 10 }}>
        {article.summary}
      </p>
    </li>
  );
}
