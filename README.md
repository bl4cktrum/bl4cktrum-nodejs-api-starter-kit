# Quick Start
Install dependencies:

```
npm install
```

Start Prisma:

```
prisma init
```
Database pull and ake prisma schemas, according to development environment options

```
dotenv -e environments/development.env prisma db pull
prisma generate
```

Start the server:

```
npm run dev
````
