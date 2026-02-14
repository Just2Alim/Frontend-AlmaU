# Lab 05 — Task 1 (Lab 5.1): Typed Components & Props Validation

## Что сделано
- Вынесены типы в отдельный файл `src/types.ts`
- Созданы компоненты:
  - `UserCard.tsx` — принимает `user: User`, опциональный `isActive?: boolean` (по умолчанию `true`) и `children: React.ReactNode`
  - `SkillList.tsx` — принимает `skills: Skill[]` и рендерит список, добавляя бейдж по `SkillLevel`

## Какие типы использованы
- `interface User` — описывает объект пользователя (name, email, age)
- `type SkillLevel` — union тип строк: Beginner | Intermediate | Expert
- `interface Skill` — навык (id, name, level)

## Проверка
Проект должен собираться без ошибок TypeScript (strict mode включен).