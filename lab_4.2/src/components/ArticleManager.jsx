import { useState } from "react";
import AddArticle from "./AddArticle";
import ArticleList from "./ArticleList";

export default function ArticleManager() {

    const [articles, setArticles] = useState([
        { id: 1, title: "React Events", summary: "How React Handles Events via Synthetic Events," },
        { id: 2, title: "Second Article", summary: "Breaking UI into smaller components." },
    ]);

    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeSummary = (e) => setSummary(e.target.value);

    const onClickAdd = () => {
        const t = title.trim();
        const s = summary.trim();
        if (!t || !s) return;

        const newArticle = {
            id: Date.now(),
            title: t,
            summary: s,
        };

        setArticles((prev) => [newArticle, ...prev]);
        setTitle("");
        setSummary("");
    };

    const onClickRemove = (id) => {
        setArticles((prev) => prev.filter((a) => a.id !== id));
    };

    return (
        <div>
            <AddArticle
                name="Articles"
                title={title}
                summary={summary}
                onChangeTitle={onChangeTitle}
                onChangeSummary={onChangeSummary}
                onClickAdd={onClickAdd}
            />
            <ArticleList articles={articles} onClickRemove={onClickRemove} />
        </div>
    );
}

