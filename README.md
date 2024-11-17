# Peace of Mind

## Day 1: Wireframe/Mockup & Initial Setup

### Overview

Day 1 focused on laying the foundation for the "Peace of Mind" project. This involved designing the wireframe/mockup, finalizing the overall design, selecting fonts and themes, setting up content for the website, and preparing the project for development. Additionally, the initial setup for external APIs and dependencies was completed.

### What I Did on Day 1:

1. **Wireframe/Mockup**

- Took time to design a clean and user-friendly wireframe/mockup.
- The wireframe helped visualize the layout, including key sections like the Journal Dashboard, Mood Tracker, and Resources page.

2. **Finalize Design**

- Chose a design style that aligns with the peaceful and calming nature of the project. This includes soft colors, easy navigation, and an intuitive layout.
- I focused on simplicity and ease of use, ensuring users feel comfortable navigating through the app.

3. **Theme and Fonts**

- Spent time experimenting with various color themes and fonts to find a calming aesthetic. The final choice features a soft, neutral color palette with contrasting elements for clarity.
- Chose a combination of serene fonts for headings and clean, readable fonts for body text, ensuring a cohesive visual experience.

4. **Content**

- Developed the core content for the website, including call-to-action messages, slogans, and other key text.
- The messaging focuses on promoting mental well-being and self-care, with slogans like "Start Your Journey to Peace" and "Find Calm in the Chaos."

5. **Setup Project**

- Created the initial project structure and set up the development environment.
- Installed necessary dependencies to start building out the app.

6. **Install Dependencies**

- Installed key dependencies including Tailwind CSS for styling and DaisyUI for easy theme and component management.
- Set up ZenQuotes API for inspirational quotes and API Ninja Quotes for additional quote sources.

7. **Config Files (Font and DaisyUI)**

- Updated \_app.js to apply fonts help with site's visual appearance.
- Updated `tailwind.config.js` to integrate custom color themes and enable switching (light and dark modes) using DaisyUI.

8. **Setup .env**

- Set up environment variables in .env for storing sensitive data such as API keys and API url.

9. **Create Todos**

- Created a list of todos for the upcoming days to track development progress and ensure a systematic approach to the project.

### What I Learned

- **Set Up Tailwind CSS & DaisyUI:** I configured Tailwind and DaisyUI, learning how to customize themes and extend Tailwind’s default settings. [Resource](https://daisyui.com/docs/themes/)
- **Adding Google Fonts to Next.js:** I learned how to import Google Fonts into my Next.js project to ensure the typography was consistent with the design and feel of the app. [Resource](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts)
- **Use Local Storage & Theme Switching:** I implemented a theme toggle feature, which saves user preferences (light/dark mode) in local storage and updates the UI accordingly. [Resource](https://selftaughttxg.com/2023/05-23/learn-local-storage-in-react-create-a-light-and-dark-theme-switcher-application/)

### Next Steps

For Day 2, I plan to:

- Begin developing the core components for the
  project.
- Test components using Storybook.

### Wireframe / Mockup

#### Home

![alt text](image.png)

#### Journal Dashboard

![alt text](image-1.png)

#### Resources

![alt text](image-2.png)

#### About

![alt text](image-3.png)

## Day 2: Project Development and Component Testing

### Objective

On Day 2, I focused on developing global components and setting up API routes, as well as implementing Storybook to test my components independently. During this process, I encountered compatibility issues between Next.js and Storybook, but I was able to resolve them by adjusting the installation command.

### Checklist of Tasks Completed

#### 1. Create Global Components

- Navbar: Designed a reusable navigation bar to be used across different pages for consistent site navigation.
- Sidebar (Dashboard): Built a sidebar component for the dashboard page to facilitate easy access to key sections and features within the app.
- Footer: Created a simple footer and applied it globally.

#### 2. Develop Feature-Specific Cards

- QuoteCard: Developed a card component to display inspirational quotes fetched from the Ninja Quotes API.
- Article Card: Created an article card to showcase curated articles sourced from the APA article API route.
- HoverCard: Built an interactive card with hover effects to display detailed information upon hover, enhancing user experience and engagement.

#### 3. API Routes Integration

- Ninja Quotes API Route: Set up a server-side API route to fetch quotes from the Ninja Quotes API, allowing for seamless integration of motivational quotes within the app.
- APA Article API Route: Created an API route to fetch articles from APA, giving users access to curated mental health resources.

#### 4. Implement Storybook for Component Testing

- Installed Storybook to create a visual testing environment for components.
- Due to compatibility issues between Storybook and Next.js 15, I adjusted the installation command to `npx storybook@next init` instead of the latest version to ensure compatibility. This allowed me to test components like the Navbar, Sidebar, and cards independently, ensuring they function as expected in isolation.

### Challenges Encountered

One of the main issues I faced was the compatibility between Next.js 15 and Storybook. The `npx storybook@latest init` command resulted in errors, so I had to switch to the `npx storybook@next init` version. This workaround allowed me to install Storybook successfully and continue with component testing.

### Key Takeaways

#### Setting Up Global Components

Creating reusable global components like the Navbar, Sidebar, and Footer improved the consistency and maintainability of the app. This structure ensures that any updates made to these components will automatically reflect across all pages.

#### API Routes for Dynamic Content

Implementing API routes for quotes and articles enhanced the app's interactivity by enabling real-time data fetching, which enriches the user experience. The QuoteCard and Article Card components make use of these routes to display dynamic, up-to-date content.

#### Using Storybook for Isolated Component Testing

Storybook proved invaluable for testing components in isolation. This approach not only helped identify issues early but also improved my workflow by providing a visual representation of each component. Adjusting the installation to use `npx storybook@next init` was an important lesson in addressing compatibility issues.

## Day 3: Home Page Development

### Overview

On Day 2, I focused on building the homepage layout and setting up the structure for other core pages of the project. The primary goal was to create a visually appealing and responsive homepage that fits well on different screen sizes. I also added foundational components and pages for future content, laying the groundwork for further development.

### Key Accomplishments

#### 1. Homepage Layout and Responsive Design

- **Hero Section:** Created a welcoming hero section with a background image, an inviting message, and a call-to-action button to start journaling.
- **Quotes Section:** Integrated a section to display an inspirational quote, with loading state management to handle data retrieval from the quote API.
- **Features Section:** Showcased key app features (Journal, Mood Tracker, Resources) using a HoverCard component for a dynamic, user-friendly experience.

#### 2. Global Components Integration

- **Navbar:** Added a navigation bar for easy access across pages.
- **Footer:** Included a footer for a polished, consistent look.
- **QuoteCard:** Created a reusable QuoteCard component for displaying quotes fetched from the API.
- **HoverCard:** Developed an interactive HoverCard component to highlight features on hover, enhancing engagement.

#### 3. Page Setup

- Initialized the following pages with a static layout including the Navbar, Header, and Footer:
  - **Journal:** Placeholder for the personal journal dashboard.
  - **Resources:** Page for curated mental health resources.
  - **About:** Simple layout to introduce the purpose and vision of the project.

#### 4. Journal Entry Modal

- Created a journal entry form modal for the Journal page, where users can write daily reflections and observations. This form will allow for future development of tracking and saving journal entries.

### Next Steps

- **Develop the Journal Dashboard:** Begin implementing the Journal Dashboard, where users can view and manage their journal entries and track mood over time.

## Days 4 and 5: Components, API Routes, and Journal Dashboard Updates

### Overview

Over the past two days, I focused on developing new components, implementing API routes, and improving the layout of the **Journal Dashboard** and **Resources** pages. While I made significant progress, I also encountered challenges that require revisiting and refining some aspects of the project.

---

### Key Accomplishments

#### 1. **New Components**

- **MoodCheck**: A component for users to quickly check in and log their current mood.
- **MoodSummary**: Displays a summary of mood trends for the user.
- **QuoteImageCard**: Fetches and displays a visually appealing quote image from the ZenQuotes API, now added to the **Resources** page.

#### 2. **API Routes**

- **Save Mood**: Created an API route for saving mood data submitted through the `MoodCheck` component. Data is stored in Redis for persistence.
- **Get Moods**: Added an API route to retrieve stored mood data for the `MoodSummary` component.

#### 3. **Journal Page Updates**

- Added key sections to the **Journal Dashboard**, including:
  - A **Welcome Message** to greet the user.
  - The **Mood Check-In** form for logging moods.
  - The **Mood Tracker Summary** to visualize mood trends over time.

#### 4. **Resources Page**

- Imported and utilized the **QuoteImageCard** component to display inspirational quotes on the **Resources** page.

#### 5. **Testing**

- Implemented **Storybook** testing for the `MoodCheck` component, ensuring its functionality and appearance align with expectations.

---

### Challenges

#### 1. **Chart.js Compatibility**

- Encountered issues with **Chart.js** not working on the deployed site due to compatibility problems with Next.js 19. While it works locally, the library causes errors during deployment.
- **Next Steps**: I explored alternative chart libraries but faced similar issues. My plan is to:
  - Research creating a custom chart solution tailored to my needs.
  - Revisit this task after completing other components to avoid getting stuck.

#### 2. **Journal Dashboard Layout**

- Struggled with layout issues on smaller screens, particularly with the **Journal Dashboard** page. The grid layout did not scale well, leading to cluttered visuals.
- **Next Steps**: Transition to a **Flexbox** layout for better adaptability across screen sizes.

#### 3. **ZenQuotes API Issues**

- The ZenQuotes API occasionally fails to fetch data. While reviewing the API documentation for solutions, I am considering alternatives, including building my own API for more control.

---

### Next Steps

- **Work on the Resources and About Pages**: Take a step back from the challenging tasks (e.g., charts and ZenQuotes API) to focus on the static content and design of these pages.
- **Revisit Journal Dashboard Layout**: Implement the Flexbox solution for better responsiveness.
- **Explore Alternatives for Charts and Quotes**: If current tools and APIs continue to pose issues, consider custom solutions or alternative libraries.

---

## Summary

Days 4 and 5 were productive, as I introduced new components, API routes, and features to enhance the functionality of the **Journal Dashboard** and **Resources** pages. However, challenges with compatibility and layout pushed me to prioritize and plan for incremental improvements. Stepping away from these obstacles temporarily will allow me to return with fresh ideas and solutions while making progress on other parts of the project.

## Getting Started

First, clone repository and install dependencies:

```bash
git clone <repo url>
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Photo Credits

Journal Photo by Jess Bailey Designs
Resources Photo by vectorjuice (Freepik)
Mood Photo by pch.vector (Freepik)
Hero Image by Alexandro David
