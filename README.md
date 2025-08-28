# AI Career Mentor - React Frontend

A modern React application for AI-powered career guidance and mentorship.

## Features

- **Modern React Architecture**: Built with React 18, React Router, and Styled Components
- **Responsive Design**: Mobile-first design that works on all devices
- **Interactive Components**: Smooth animations and engaging user interactions
- **Career Guidance**: AI-powered career matching and skill recommendations
- **Progress Tracking**: Visual progress bars and achievement tracking
- **Skills Roadmap**: Personalized learning paths with course recommendations
- **Internship Finder**: Search and save internship opportunities
- **User Profiles**: Complete profile management with form validation

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Styled Components, CSS-in-JS
- **Build Tool**: Vite
- **Fonts**: Google Fonts (Poppins, Kranky, Inria Serif, Instrument Sans)
- **Icons**: Font Awesome
- **Development**: ESLint, Hot Module Replacement

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-career-mentor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.jsx   # Main navigation bar
│   ├── Hero.jsx        # Landing page hero section
│   └── Cards.jsx       # Feature cards component
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── Profile.jsx     # User profile setup
│   ├── Dashboard.jsx   # Career dashboard
│   ├── Skills.jsx      # Skills roadmap
│   └── Internships.jsx # Internship listings
├── styles/             # Global styles
│   └── global.css      # Global CSS styles
├── assets/             # Static assets
├── App.jsx            # Main app component
└── main.jsx           # Application entry point
```

## Key Features Implemented

### 🏠 Home Page
- Animated hero section with floating image
- Interactive feature cards with scroll animations
- Modern gradient backgrounds and typography

### 👤 Profile Setup
- Multi-step form with validation
- Progress tracking (25% complete indicator)
- Local storage for data persistence
- Responsive form design

### 📊 Dashboard
- Career match recommendations with percentage scores
- Progress overview with visual progress bars
- Internship recommendations
- Personalized greeting using profile data

### 🎯 Skills Roadmap
- Structured learning path with sections
- Course recommendations with ratings and metadata
- Progress tracking for individual skills
- Interactive course enrollment

### 💼 Internship Finder
- Advanced filtering (search, location, work type)
- Save/unsave functionality
- Tabbed interface (All, Saved, Applied)
- Detailed internship cards with apply functionality

## Design Highlights

- **Color Scheme**: Purple gradient theme (#6910A8, #9d4edd) with white accents
- **Typography**: Professional font combinations for headings and body text
- **Animations**: Smooth hover effects, scroll animations, and transitions
- **Responsive**: Mobile-first approach with breakpoints at 768px and 1024px
- **Accessibility**: Proper contrast ratios and interactive element states

## Data Management

- Local storage for user profile data persistence
- State management using React hooks (useState, useEffect)
- Form validation and error handling
- Dynamic filtering and search functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Original design inspiration from the HTML/CSS version
- Font Awesome for icons
- Google Fonts for typography
- React community for excellent documentation and tools