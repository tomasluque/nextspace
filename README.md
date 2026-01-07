# Nextspace - a Next.js 16 routeur demo

A showcase project, built with Next.js 16. It's a simple social media platform inspired by sites like MySpace and Facebook

## Setup

```
git clone <this-repo> nextspace
cd nextspace
npm install
```

Rename the `.env.example` file to `.env` and update env variables. This project use Prisma ORM - once the env variables are updated, run a Prisma migration. (I am using a free [NeonDB](https://neon.tech) Postgres database, but any Prisma compatible DB will work.)

## Features

-   Multiple seamless auth methods (w/ Auth.js)
-   Dynamic route data
-   Both server and client components
-   Advanced data fetching & updating (w/ loading pages & optimistic updates)
-   Advanced data mutability with server actions


## Screenshots
![alt text](https://github.com/tomasluque/nextspace/blob/main/scr1.png)
![alt text](https://github.com/tomasluque/nextspace/blob/main/scr2.png)
![alt text](https://github.com/tomasluque/nextspace/blob/main/scr3.png)
