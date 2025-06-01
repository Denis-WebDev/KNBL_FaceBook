# Facebook Post Viewer App

Це невеликий повнофункціональний додаток, який дозволяє авторизуватися через Facebook, переглядати 10 останніх постів користувача та (опційно) публікувати новий пост.

## 🔧 Основні функції

- 🔐 Facebook Login через OAuth
- 📬 Вивід 10 останніх постів з Graph API
- ✍️ Публікація нового поста (доступно лише для тестового користувача)
- 🌐 Деплой на Vercel/Netlify або іншу платформу

## 📁 Структура

```
/app
  /actions           – server actions для signIn/signOut/publish
  /ui                – компоненти інтерфейсу: PostCard, FacebookPosts тощо
  /component         – обгортка Wrapper + Header + Modal
  /auth              – налаштування next-auth

/pages/api/auth      – API-обробник next-auth
/public              – аватарки та зображення
.env.local           – змінні середовища (не коммітити)
```

## 🧠 Технології

- Next.js (app router)
- NextAuth.js (OAuth з Facebook)
- Facebook Graph API (v18.0 / v23.0)
- SCSS modules
- Vercel (як платформа для деплою)

## ⚙️ Налаштування

1. Створи Facebook App на [https://developers.facebook.com](https://developers.facebook.com)
2. Додай `plastikwood@gmail.com` як тестового користувача (Test Users)
3. Отримай `FACEBOOK_CLIENT_ID`, `FACEBOOK_CLIENT_SECRET`
4. Створи `.env.local` файл і додай туди:

```
FACEBOOK_CLIENT_ID=...
FACEBOOK_CLIENT_SECRET=...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

## 🚀 Деплой

Проєкт можна легко задеплоїти через Vercel.

## 🧪 Тестування

- Авторизуйся через Facebook (лише тест-акаунт)
- Перевір, чи відображаються 10 останніх постів
- Натисни **Create Post** → публікація тексту на Facebook

## 📦 Скрипти

- `npm run dev` — локальний запуск
- `npm run build` — збірка проєкту
- `npm start` — запуск у продакшені

## 🙋‍♂️ Авторизація Facebook

У `auth-config.js` налаштовані провайдери:

- `credentials` — локальний вхід (тільки для тесту)
- `facebook` — справжня авторизація Facebook з доступом до `user_posts`

## 📤 Публікація поста

Реалізовано через:

```js
POST https://graph.facebook.com/v23.0/me/feed
Headers:
  Content-Type: application/json
Body:
  {
    message: "Ваш текст",
    access_token: <user.token>
  }
```

## ✅ Завершення

- Тестовий користувач доданий ✅
- Авторизація та API працюють ✅
- Публікація постів (опційно) працює ✅

---

🧑‍💻 Автор: [denis.webdevil@gmail.com]