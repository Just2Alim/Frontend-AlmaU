# Lab 06.1 — React Router (Student Portal)

## Маршруты
•⁠  ⁠⁠ / ⁠ — Home
•⁠  ⁠⁠ /courses ⁠ — Courses
•⁠  ⁠⁠ /about ⁠ — About
•⁠  ⁠⁠ * ⁠ — NotFound (404)

## Как работает
•⁠  ⁠Роуты объявлены через ⁠ createBrowserRouter ⁠
•⁠  ⁠Общий Layout содержит навигацию (⁠ Link ⁠/⁠ NavLink ⁠) и ⁠ <Outlet /> ⁠ для дочерних страниц
•⁠  ⁠Навигация работает без перезагрузки страницы

## Запуск
```bash
npm install
npm run dev