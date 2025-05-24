# Delhi Smart City Command Center

A modern, AI-powered web application for the Government of NCT Delhi to provide real-time insights, predictive analytics, and centralized management for sustainable urban operations across the National Capital Territory of Delhi.

## Overview

This project implements a **Smart City Command Center Dashboard** that integrates multiple city management modules—such as traffic, energy, public safety, and waste management—into a unified, interactive platform. Leveraging advanced AI and IoT technology, the dashboard visualizes city data, supports predictive analytics, and offers actionable insights for city administrators and stakeholders.

## Features

- **Real-Time Monitoring:** Live dashboards for key urban metrics such as active surveillance cameras, patrol units, and 24/7 monitoring.
- **AI-Powered Analytics:** Predictive analytics for urban operations, including traffic, energy, safety, and waste management.
- **3D Visualization:** Interactive 3D visualizations powered by React Three Fiber and dynamic imports for optimal performance.
- **Modular Architecture:** Easily extendable components built with TypeScript and React, following best UI/UX practices.
- **Responsive & Accessible:** Fully responsive interface with accessible UI components, built with Tailwind CSS.

## Technologies Used

- **Frontend:** TypeScript, React, Next.js (App Router)
- **UI Components:** Custom components, Radix UI, Lucide Icons, Embla Carousel, Vaul Drawer
- **3D & Visualization:** React Three Fiber, Drei
- **Styling:** Tailwind CSS
- **Others:** Next Themes for dark mode, dynamic imports for 3D components

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm or yarn (preferred for Next.js monorepos)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/paarthbhatt/Delhi-smart-city.git
   cd Delhi-smart-city
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   yarn install
   # or
   npm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   yarn dev
   # or
   npm run dev
   ```

4. **Open in your browser:**
   ```
   http://localhost:3000
   ```

## Project Structure

- `/app` - Next.js app directory (routing, layouts, pages)
- `/components` - Reusable UI components (carousel, calendar, breadcrumb, drawer, etc.)
- `/public` - Static assets (favicons, images)
- `/styles` - Global and component-level styles (via Tailwind CSS)

## Customization

- **Configuration:** Update `next.config.mjs` for Next.js settings, image domains, etc.
- **Styling:** Tailwind configuration in `tailwind.config.js`.
- **SEO:** Edit `app/layout.tsx` metadata for Open Graph, keywords, and title.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## License

This project is developed for the Government of NCT Delhi. Please contact the repository owner for licensing details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [Lucide Icons](https://lucide.dev/)

---

**Delhi Smart City Command Center**  
_Advanced urban management for a sustainable future._
