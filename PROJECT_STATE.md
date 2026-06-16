# SoulMirror AI

## Project Overview

SoulMirror AI — премиальная AI-платформа для самопознания, психологии, архетипов, анализа сновидений и символических практик.

Целевая аудитория:

- США
- Европа
- интересующиеся психологией
- интересующиеся архетипами Юнга
- интересующиеся эзотерикой
- любители self-discovery продуктов

Монетизация:

- подписка $19/month
- в будущем $29/month Premium
- прием оплаты через криптовалюту

---

# Tech Stack

Frontend:

- Next.js 15
- TypeScript
- React
- PWA

Планируется:

- Framer Motion
- React Three Fiber
- YandexGPT API
- Supabase

---

# Design Direction

Стиль:

Dark Luxury Mysticism

Вдохновение:

- Apple
- Linear
- Raycast
- Ritual
- OpenAI
- премиальные проекты с Dribbble
- премиальные проекты с Behance

Цвета:

Background:

#09090B

Gold:

#D6B25E

Purple Accent:

#8B5CF6

Text:

#F4F1EA

---

# Current Structure

src

app

- globals.css
- layout.tsx
- page.tsx

components

layout

- navbar.tsx

sections

- hero-section.tsx
- features-section.tsx
- soul-scan-section.tsx
- tarot-preview-section.tsx
- pricing-section.tsx

ui

- aurora-background.tsx
- archetype-card.tsx
- button.tsx
- container.tsx
- feature-card.tsx
- logo.tsx
- section-title.tsx
- soul-orb.tsx

---

# Existing Sections

1. Navbar

Содержит:

- Logo
- Features
- Dreams
- Journal
- Pricing
- CTA Button

---

2. Hero Section

Содержит:

- headline
- description
- CTA buttons
- SoulOrb
- AuroraBackground

---

3. Features Section

Карточки:

- Tarot Readings
- Dream Analysis
- AI Journal
- Archetypes

---

4. Soul Scan Section

Карточки:

- The Seeker
- The Sage
- The Creator

---

5. Tarot Preview Section

Содержит:

- Tarot card preview
- Description
- CTA

---

6. Pricing Section

План:

SoulMirror Pro

$19/month

Включает:

- Unlimited Tarot
- Unlimited Dream Analysis
- AI Journal
- Archetypes
- Priority Responses

---

# Architectural Rules

Важно:

Всегда выдавать файлы полностью.

Не использовать формат:

- "найди и замени"
- "добавь строку"

Только:

Файл №X

Путь:

полное содержимое файла

---

# Next Planned Tasks

1. Подключить PricingSection в page.tsx

2. Добавить Footer

3. Подключить Google Fonts

- Cormorant Garamond
- Inter

4. Luxury Typography

5. Улучшить Logo

6. Hover Effects

7. Premium Tarot Card

8. Mobile Navigation

9. Framer Motion

10. YandexGPT Integration

11. Supabase Integration

12. Crypto Payments

---

# Repository

GitHub:

https://github.com/maximzhankevich1993/soulmirorAi

---

# Current Progress

Последний завершенный файл:

№29

src/components/sections/pricing-section.tsx

Следующий файл:

Подключение PricingSection в src/app/page.tsx