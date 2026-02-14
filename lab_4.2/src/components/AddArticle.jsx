export default function AddArticle({
    name,
    title,
    summary,
    onChangeTitle,
    onChangeSummary,
    onClickAdd,
}) {
    return (
        <section style={{ marginBottom: 20 }}>
            <h1 style={{ marginBottom: 10}}>{name}</h1>

            <div style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <input
                    placeholder="Title"
                    value={title}
                    onChange={onChangeTitle}
                    style={{ flex: 1, padding: 10, fontSize: 16 }}
                />
                <input
                    placeholder="Summary"
                    value={summary}
                    onChange={onChangeSummary}
                    style={{ flex: 2, padding: 10, fontSize: 16 }}
                />
                <button onClick={onClickAdd} style={{ padding: "10px 20px", fontSize: 16 }}>
                    Add
                </button>
            </div>
        </section>
    );}