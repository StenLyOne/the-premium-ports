
# Premium Proxy Frontend

This is a **Next.js** project styled with **Tailwind CSS**, designed for deployment on **Vercel**.

## 📁 Project Structure

The project uses a clean and modular architecture:

- `components/sections/` — high-level page sections (e.g., `Header`, `Benefits`, `Integration`)
- `components/ui/` — small reusable UI elements (e.g., `Button`, `FAQItem`, `IntegrationItem`)

## 🚀 Deployment

This project is ready for deployment on [Vercel](https://vercel.com).  
Simply connect your GitHub repo to Vercel and follow the steps — no extra setup required.

## 🧱 Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- Framer Motion (for animations)

## 🔗 Internal Routing

All buttons/links use a custom `Button` component.  
Links are passed as props:

```tsx
<Button link="/contact" text="Get Started" />
```

## 🧩 Components Example

Each section is its own component and placed in `components/sections/`, e.g.:

```tsx
import Benefits from "@/components/sections/Benefits";
```

UI components like cards, buttons, etc., live inside `components/ui/`, e.g.:

```tsx
import BenefitsItem from "@/components/ui/BenefitsItem";
```

## 🧪 Local Development

```bash
npm install
npm run dev
```

Then go to `http://localhost:3000`.

## ✅ Notes

- Motion/scroll effects are implemented using `framer-motion`.
- All content is static and structured via reusable components.
