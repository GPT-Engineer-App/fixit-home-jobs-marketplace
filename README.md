# fixit-home-jobs-marketplace

# FixItHomeJobs Marketplace

This web application acts as a marketplace for homeowners to post DIY home projects and for contractors to bid on these projects. The design focuses on user-friendliness, accessibility, and visually appealing interfaces that promote ease of engagement and navigation.

## Pages

### Home Page

- **Purpose:** Offers an overview of the platform, highlights active DIY jobs, showcases top contractors, and provides a gateway to the full functionalities of posting and bidding on jobs.

## Components

### Header
- **Design:** Features a clean logo of FixItHomeJobs and houses the primary navigation menu including Home, Post a Job, Find Jobs, Contractor Profiles, and My Account.
- **Behavior:** Remains fixed at the top for easy accessibility across all pages.

### Hero Section
- **Design:** High-quality, engaging image of a DIY home improvement scenario with a concise call-to-action (CTA) prompting new users to either post a project or explore available jobs.
- **Behavior:** Featuring a dynamic slogan, this section adapts based on whether the user is logged in, changing the CTA accordingly (e.g., "Welcome back, [User’s Name]! View Your Dashboard.").

### How It Works Section
- **Design:** Outlines the process of posting, bidding, and completing a job with simple, straightforward iconography and minimal text.
- **Behavior:** Static display offering a quick guide for new visitors on how the platform functions.

### Active Jobs Listing
- **Design:** A grid or list view showing active DIY projects with essential details like job title, location, budget, and number of bids.
- **Behavior:** This section allows for filtering and sorting to help users easily find projects of interest.

### Contractor Highlight Section
- **Design:** Carousel or grid layout showcasing profiles of top-rated contractors, including ratings, a brief bio, and specialties.
- **Behavior:** Clicking on a contractor’s profile card leads to a more detailed profile page.

### Footer
- **Design:** A simple design maintaining the light theme, contains links to privacy policy, terms of use, contact information, and social media links.
- **Behavior:** Fixed at the bottom across all pages.

## Design Principles Applied

- **Light Base and Strategic Colors:** Background colors are predominantly light, using white or light grey, to ensure the content is the focal point. Vibrant colors are used strategically in buttons and important features like job postings to draw attention.

- **Typography and Hierarchy:** Different sizes and weights of typography are used to create a clear hierarchy, aiding users to distinguish between various types of information easily.

- **Ample Whitespace:** Intended to make the layout uncluttered and the content more readable, ensuring a better user experience even with more scrolling.

- **Iconography and Images:** Used to assist explanations and instructions, making the abstract concepts of the marketplace operations more tangible.

- **Simple Navigation Bar and Minimalist Footer:** Both are designed to provide only essential navigation aids without overwhelming the users, focusing them on engaging with the content of the main page.

- **Standout CTAs:** These are designed to be noticeable with contrasting colors against the light background, making actions like posting a job or bidding clear and immediate to engage.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/fixit-home-jobs-marketplace.git
cd fixit-home-jobs-marketplace
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
