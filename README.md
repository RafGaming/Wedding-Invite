# Wedding Invitation Website

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/RafGaming/Wedding-Invite.git
   cd Wedding-Invite
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Configure your environment variables:
   - Create a `.env` file and add your configuration details.

## Features
- Beautiful and customizable wedding invitation templates.
- RSVP functionality allowing guests to respond.
- Photo gallery to showcase couple’s journey.
- Detailed schedule of the wedding events.
- Contact form for guests to reach out directly.

## Deployment Guide
1. Choose a hosting platform (e.g., Vercel, Netlify).
2. Push your code to the hosting repository.
3. Connect your domain to the hosted app.
4. Make sure to set up environment variables in your host settings.

## Customization Options
- Change colors and fonts by modifying the CSS files located in the `styles` directory.
- Update the content of the invitation in the `src/pages` directory.
- Add your own images in the `src/assets/images` folder.

## Adding Your Photos

Place your image files in the `public/bg/` folder using the following filenames:

- `/bg/timeline-first-met.jpg` — Photo for the "First Met" milestone
- `/bg/timeline-first-date.jpg` — Photo for the "First Date" milestone
- `/bg/timeline-proposal.jpg` — Photo for "The Proposal" milestone
- `/bg/timeline-big-day.jpg` — Photo for "The Big Day" milestone
- `/bg/gallery-1.jpg` — "Our First Photo"
- `/bg/gallery-2.jpg` — "Adventures Together"
- `/bg/gallery-3.jpg` — "The Proposal"
- `/bg/gallery-4.jpg` — "Engagement Party"
- `/bg/gallery-5.jpg` — "Pre-Wedding Shoot"
- `/bg/gallery-6.jpg` — "With Family"
- `/bg/save-the-date-bg.jpg` — Background image for the Save the Date section
- `/bg/rsvp-bg.jpg` — Background image for the RSVP section

The site will still display correctly even if these images are not yet added.