This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# User journey

user can add pages like file/folder routes

user can drag/drog a page or widget of any of the available table

- page can have multiple widgets

- widget can only be added to a page

- page/widget choices are available

- crud page

- crud widgets: table, pagination list, create and new form, details section

  - Can hide/show remove/add edit/non-edit each field

## Widget

inspired from https://jsonforms.io/

Widget are react components with data and action as props

see: https://jsonforms.io/docs/tutorial/custom-renderers

1. Schema: provides data and actions
   1. Data in: props.data can be used to templatize the widget
   2. Data out: props.actions can trigger modal update
2. UI Schema: Widget's Internal state can be divided into:
   1. Controls
   2. Layouts
   3. Rules

UI Schema is similar to jsonforms.io

#### Form Widget Example

- Takes tableData from DB table as prop
- Takes setTableData from DB table as prop
-
