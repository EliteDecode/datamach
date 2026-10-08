# Datamach

Datamach is a tech-skills and talent platform. It trains people in in-demand tech skills and connects the trained talent with employers who need reliable developers and analysts. This repository is the Datamach website.

## Business idea

Many people want to start a tech career but don't know where to begin, and employers struggle to find job-ready talent they can trust. Datamach sits between the two:

- **Learn** — learners explore and enrol in courses such as:
  - Backend development (PHP, Node.js)
  - Frontend development (React, Angular, Vue)
  - Data analysis (Python, Django)
- **Get hired** — employers find and hire reliable, professional talent trained by Datamach.

Revenue comes from course fees and from placing talent with employers.

## Key features

- Landing page with banner, "About Datamach", course catalogue and employer section
- Learner registration and login pages
- Responsive navigation and footer
- Carousels and Material UI components

## Tech stack

- React (Create React App)
- React Router
- Material UI and Tailwind CSS
- Redux store setup (`src/app/store.js`)

## Getting started

```bash
npm install
npm start        # http://localhost:3000
npm run build
npm test
```

## Status

This is the first version of the site: the landing page, course list and authentication pages are built. Course enrolment and employer hiring flows are planned next.
