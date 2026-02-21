### ⁠ Lab_06/task2/README.md ⁠
```md
# Lab 06.2 — Params + Loader + Query (Student Portal)

## Что добавлено
### URL params
Маршрут ⁠ /courses/:id ⁠ использует параметр ⁠ id ⁠.
•⁠  ⁠⁠ useParams() ⁠ — чтобы прочитать ⁠ id ⁠ из URL
•⁠  ⁠⁠ loader() ⁠ + ⁠ useLoaderData() ⁠ — чтобы загрузить курс до рендера страницы

### Query params
На ⁠ /courses ⁠ используется ⁠ ?sort=asc|desc ⁠.
•⁠  ⁠⁠ useSearchParams() ⁠ читает и меняет query string
•⁠  ⁠Кнопка Sort меняет URL и сортировку списка

## Проверка
•⁠  ⁠⁠ /courses/101 ⁠ работает
•⁠  ⁠⁠ /courses/999 ⁠ показывает Course not found
•⁠  ⁠⁠ /courses?sort=desc ⁠ сортирует по названию по убыванию