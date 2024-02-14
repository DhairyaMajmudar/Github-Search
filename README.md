# Git Searcher - Github User Search Application.


Gir Searcher is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup Guide

1. Install the packages with the script `npm i` or `npm Install` 
2. Now create the Github access token by:
a. Go to Settings.

b. Open Developer Settings.

c. Head to Personal Access Token Tab (Tokens Classic)

d. Generate a new token and copy it ( Token can be viewed only once so its recommend to store it properly ! ).

3. Generate env variables
a. Create a new `.env` file in the root folder and copy the contents of `.env.example` in it.

b. Paste the github token.

c. now run the application using the script `npm run dev`.

## Tech Stak used

- NextJs
- TypeScript
- Tailwind
- Github GraphQl API

## About Github Searcher

Github Searcher is a web apllication from which user can find the information of other github users just by searching their username. 

Rather using traditional REST API the application uses the power of GraphQl Query to fetch only the required information from the API which results in decreased use of bandwidth and increasing the performance.

Other than that being built on the top of Nextjs makes application server side, using tailwind for styling makes the website to look more modular and user friendly.

Type saftey is taken utmost care with the help of TypeScript resulting in decreased number of bugs.


`Made with love by Dhairya Majmudar`