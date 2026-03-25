# Nathcorp Inc Website

A modern, responsive website for Nathcorp Inc built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. This enterprise website showcases services, portfolio, testimonials, and provides seamless contact management for clients across multiple regions.

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Services Offered](#services-offered)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Available Scripts](#available-scripts)
- [Environment Setup](#environment-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Project Overview

Nathcorp Inc Website is a comprehensive corporate website designed to present Nathcorp's IT services and consulting solutions globally. The site features multiple service categories, client portfolios, real client testimonials, and an intuitive contact management system supporting multiple regional locations (USA and India).

**Key Locations:**
- 🇺🇸 **USA** - North American Headquarters
- 🇮🇳 **India** - Asia-Pacific Development Hub

---

## 🛠️ Technology Stack

### Core Framework
- **Next.js 14** - React framework for production with App Router
- **React 18+** - JavaScript library for building UI components
- **TypeScript** - Type-safe JavaScript development

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Framer Motion** - Animation library for smooth transitions
- **Embla Carousel** - Carousel/slider component

### Development & Tools
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - JavaScript linter for code quality

### Additional Libraries
- **React Hook Form** - Efficient form state management
- **EmailJS** - Email sending from the frontend
- **Three.js & React Three Fiber** - 3D graphics
- **Leaflet** - Interactive maps
- **dotted-map** - Global location visualization
- **Lucide React** - Icon library

---

## ✨ Features

### 🌐 Core Website Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme Support**: Theme provider with Tailwind CSS
- **SEO Optimization**: 
  - Meta tags for all pages
  - Breadcrumb navigation
  - Schema markup for structured data
  - Sitemap.xml generation
  - Robots.txt configuration

### 📄 Content Sections
- **Hero Section**: Eye-catching landing section with CTAs
- **Services Showcase**: Carousel displaying available services
- **Portfolio Section**: Showcase of client cases and projects
- **Testimonials**: Client testimonials with carousel
- **Cost Saving Insights**: Business value propositions
- **Client Logos Grid**: Display of client partnerships
- **Footer**: Comprehensive footer with navigation and social links

### 🎨 Interactive Components
- **Modal Windows**: Contact form and service modals
- **Contact Management**: Multi-region contact form with EmailJS integration
- **Video Integration**: Modal video player for embedded videos
- **Animations**: Smooth page transitions using Framer Motion
- **Navigation**: Sticky navbar with mobile responsiveness

### 📱 Pages
- **Home Page** - Landing page with all key sections
- **About** - Company information and values
- **Services** - Comprehensive list of service offerings
- **Services Detail Pages** - Individual pages for each service line
- **Products** - Product listings and information
- **Industries** - Industries served by Nathcorp
- **Careers** - Career opportunities and job listings
- **Clients** - Client success stories and partnerships
- **Contact** - Multi-location contact form with regional support
- **Testimonials** - Client testimonial showcase
- **Privacy Policy** - Privacy protection information
- **Cookie Policy** - Cookie usage information
- **Security Policy** - Security commitments and practices

---

## 📁 Project Structure

```
NathcorpWebsite/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── about/                   # About page
│   ├── careers/                 # Careers page
│   ├── clients/                 # Clients page
│   ├── contact/                 # Contact page
│   ├── cookie-policy/           # Cookie policy page
│   ├── industries/              # Industries page
│   ├── privacy-policy/          # Privacy policy page
│   ├── products/                # Products page
│   ├── services/                # Services hub
│   │   ├── page.tsx             # Services overview
│   │   ├── active-directory/    # Service detail page
│   │   ├── ai-services/         # Service detail page
│   │   ├── app-development/     # Service detail page
│   │   ├── cloud-services/      # Service detail page
│   │   ├── copilot-services/    # Service detail page
│   │   ├── data-management/     # Service detail page
│   │   ├── devops/              # Service detail page
│   │   ├── digital-transformation/ # Service detail page
│   │   ├── modern-deployment/   # Service detail page
│   │   ├── qa-testing/          # Service detail page
│   │   ├── security/            # Service detail page
│   │   ├── support/             # Service detail page
│   │   └── technology-consulting/ # Service detail page
│   ├── testimonials/            # Testimonials page
│   ├── security-policy/         # Security policy page
│   ├── robots.txt/              # SEO robots.txt
│   ├── sitemap.xml/             # SEO sitemap
│   └── utils/                   # Utility functions
│       ├── animationUtils.ts    # Animation helpers
│       └── initAnimations.ts    # Animation initialization
├── components/                  # React components
│   ├── call-to-action.tsx      # CTA component
│   ├── client-logos-carousel.tsx # Client logos carousel
│   ├── ClientLogosGrid.tsx      # Client logos grid
│   ├── contact-form.tsx         # Contact form
│   ├── ContactServiceModal.tsx  # Service contact modal
│   ├── cost-saving.tsx          # Cost saving section
│   ├── dialog.tsx               # Dialog component
│   ├── footer.tsx               # Footer component
│   ├── hero.tsx                 # Hero section
│   ├── image-with-seo.tsx       # SEO-optimized image
│   ├── ModalVideo.tsx           # Video modal
│   ├── navbar.tsx               # Navigation bar
│   ├── page-header.tsx          # Page header
│   ├── portfolio.tsx            # Portfolio section
│   ├── services-carousel.tsx    # Services carousel
│   ├── services.tsx             # Services section
│   ├── testimonials.tsx         # Testimonials section
│   ├── theme-provider.tsx       # Theme provider
│   ├── world-map.tsx            # Interactive world map
│   ├── seo/                     # SEO components
│   │   ├── breadcrumbs.tsx      # Breadcrumb navigation
│   │   ├── meta-tags.tsx        # Meta tags
│   │   └── schema-markup.tsx    # Schema markup
│   └── ui/                      # Radix UI components
│       ├── accordion.tsx        # Accordion component
│       ├── alert-dialog.tsx     # Alert dialog
│       ├── button.tsx           # Button component
│       ├── card.tsx             # Card component
│       ├── carousel.tsx         # Carousel component
│       ├── dialog.tsx           # Dialog component
│       ├── form.tsx             # Form component
│       ├── input.tsx            # Input component
│       ├── navigation-menu.tsx  # Navigation menu
│       ├── pagination.tsx       # Pagination
│       ├── select.tsx           # Select component
│       ├── sheet.tsx            # Sheet component
│       └── [more UI components...]
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/                         # Utility libraries
│   ├── seo-utils.ts            # SEO utility functions
│   └── utils.ts                # General utility functions
├── public/                      # Static assets
│   ├── images/                 # Image assets
│   └── site.webmanifest        # PWA manifest
├── styles/                      # Additional styles
│   └── globals.css             # Global stylesheet
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration
├── components.json             # Radix UI components config
├── package.json                # Project dependencies
├── pnpm-lock.yaml              # Dependency lock file
└── Dockerfile                  # Docker configuration
```

---

## 📄 Pages & Routes

| Route | Page | Purpose |
|-------|------|---------|
| `/` | Home | Landing page with overview |
| `/about` | About | Company information |
| `/services` | Services Hub | All services overview |
| `/services/active-directory` | Active Directory | Service detail page |
| `/services/ai-services` | AI Services | Service detail page |
| `/services/app-development` | App Development | Service detail page |
| `/services/cloud-services` | Cloud Services | Service detail page |
| `/services/copilot-services` | Microsoft Copilot Services | Service detail page |
| `/services/data-management` | Data Management | Service detail page |
| `/services/devops` | DevOps | Service detail page |
| `/services/digital-transformation` | Digital Transformation | Service detail page |
| `/services/modern-deployment` | Modern Deployment | Service detail page |
| `/services/qa-testing` | QA & Testing | Service detail page |
| `/services/security` | Security Services | Service detail page |
| `/services/support` | Support Services | Service detail page |
| `/services/technology-consulting` | Technology Consulting | Service detail page |
| `/products` | Products | Product listings |
| `/industries` | Industries | Industry-specific solutions |
| `/careers` | Careers | Job opportunities |
| `/clients` | Clients | Client success stories |
| `/contact` | Contact | Multi-region contact form |
| `/testimonials` | Testimonials | Client testimonials |
| `/privacy-policy` | Privacy Policy | Privacy information |
| `/cookie-policy` | Cookie Policy | Cookie usage |
| `/security-policy` | Security Policy | Security commitments |

---

## 💼 Services Offered

Nathcorp Inc provides enterprise IT services across multiple domains:

1. **Active Directory** - Identity and access management
2. **AI Services** - Artificial intelligence solutions
3. **App Development** - Custom application development
4. **Cloud Services** - Cloud infrastructure and solutions
5. **Microsoft Copilot Services** - AI-powered productivity tools
6. **Data Management** - Data governance and analytics
7. **DevOps** - Continuous integration and deployment
8. **Digital Transformation** - Business modernization
9. **Modern Deployment** - Containerization and orchestration
10. **QA & Testing** - Quality assurance and testing services
11. **Security Services** - Cybersecurity and compliance
12. **Support Services** - Technical support and maintenance
13. **Technology Consulting** - Strategic IT consulting

---

## 🚀 Installation

### Prerequisites
- **Node.js** 18.17 or later
- **pnpm** 8.0 or later (recommended) or npm/yarn

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd NathcorpWebsite
   ```

2. **Install dependencies using pnpm:**
   ```bash
   pnpm install
   ```

   Or using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with necessary environment variables:
   ```env
   # EmailJS Configuration (for contact forms)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Add other environment variables as needed
   ```

---

## 💻 Development

### Start Development Server

Run the development server using pnpm:

```bash
pnpm dev
```

Or using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The application will start at **http://localhost:3000**

### Key Development Features
- **Fast Refresh**: Instant updates without losing state
- **TypeScript Support**: Full type safety during development
- **ESLint Integration**: Code quality checking
- **Hot Module Replacement**: Automatic code updates

### Development Tips
- Changes to files are automatically reflected in the browser
- Check the terminal for any linting or TypeScript errors
- Open browser DevTools (F12) for debugging
- Use React DevTools for component inspection

---

## 🏗️ Production Build

### Build for Production

Create an optimized production build:

```bash
pnpm build
```

Or using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

### What Happens During Build
- TypeScript compilation and type checking
- Code optimization and minification
- Asset optimization
- Static page generation for SSG routes
- Generation of `.next` directory with production artifacts

### Build Output
- All compiled code is placed in the `.next` directory
- Static assets are optimized for caching
- Environment variables are bundled appropriately

---

## Production Deployment

### Start Production Server

After building, start the production server:

```bash
pnpm start
```

Or using npm:
```bash
npm start
```

Or using yarn:
```bash
yarn start
```

The application will be available at **http://localhost:3000** (or your configured port)

### Deployment Options
- **Vercel** (Recommended for Next.js)
- **AWS** (EC2, ECS, Lambda)
- **Google Cloud** (App Engine, Compute Engine)
- **Azure** (App Service, Container Instances)
- **DigitalOcean** (App Platform)
- **Docker** (Containerized deployment)

### Docker Deployment

Build Docker image:
```bash
docker build -t nathcorp-website .
```

Run container:
```bash
docker run -p 3000:3000 nathcorp-website
```

---

## 📋 Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| Development | `pnpm dev` | Start dev server on http://localhost:3000 |
| Build | `pnpm build` | Create optimized production build |
| Start | `pnpm start` | Run production server on port 3000 |
| Lint | `pnpm lint` | Run ESLint to check code quality |

---

## 🔧 Environment Setup

### Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# EmailJS Configuration (Contact Forms)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Optional: Analytics
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: API Endpoints
NEXT_PUBLIC_API_URL=your_api_url
```

### Configuration Files

- **`next.config.mjs`** - Next.js configuration with security headers
- **`tailwind.config.ts`** - Tailwind CSS theme customization
- **`tsconfig.json`** - TypeScript compiler options
- **`postcss.config.mjs`** - PostCSS configuration for CSS processing
- **`components.json`** - Radix UI component configuration

---

## 🚀 Deployment

### Deployment to Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Connect your repository to Vercel
3. Vercel will automatically:
   - Detect Next.js framework
   - Build the project
   - Deploy with optimal settings
4. Your site will be live at `your-project.vercel.app`

### Deployment to AWS
1. Build the project locally
2. Use AWS Amplify, EC2, or ECS for deployment
3. Set environment variables in AWS console
4. Configure domain and SSL

### Environment-Specific Configuration
- Add different env files: `.env.production`, `.env.staging`
- Configure based on deployment target
- Update API endpoints as needed

---

## ✅ Best Practices

### Development
- Always run `pnpm install` after pulling changes
- Use TypeScript for type safety
- Follow ESLint rules for code consistency
- Test pages across different screen sizes

### Production
- Always run `pnpm build` before deployment to catch issues
- Set appropriate environment variables
- Enable compression at the server level
- Use CDN for static assets
- Monitor performance with Web Vitals

### SEO
- All pages include proper meta tags
- Breadcrumb navigation for internal linking
- Schema markup for structured data
- Sitemap.xml and robots.txt configured
- Optimized images with next/image

---

## 📚 Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **TypeScript Documentation**: https://www.typescriptlang.org/docs
- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **Radix UI Documentation**: https://www.radix-ui.com/docs/primitives/overview/introduction
- **Framer Motion Documentation**: https://www.framer.com/motion
- **EmailJS Documentation**: https://www.emailjs.com/docs

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes and test thoroughly
3. Commit with clear messages: `git commit -m 'Add feature description'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a Pull Request

---

## 📧 Support

For support or inquiries:
- **Website**: https://nathcorp.com
- **Email**: contact@nathcorp.com
- **Locations**:
  - 🇺🇸 USA (North American Headquarters)
  - 🇮🇳 India (Asia-Pacific Development Hub)

---

## 📄 License

This project is proprietary software of Nathcorp Inc. All rights reserved.

---

## 📝 Version History

- **v0.1.0** - Initial release with core features
  - Home page with hero section
  - Services showcase (13 service lines)
  - Portfolio and testimonials
  - Multi-region contact management
  - SEO optimization
  - Responsive design

---

**Last Updated**: March 2026

For the latest updates and documentation, please refer to the project repository and official Nathcorp website.
