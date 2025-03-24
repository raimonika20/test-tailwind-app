import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import './styles/tailwind.css';

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <link
          rel="stylesheet"
          href="../build/tailwind.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <h1 class="text-3xl font-bold underline !text-red-600">
          Hello world!
        </h1>
        <div className="bg-blue-500 text-white p-4 rounded">
          Hello, Tailwind CSS in Shopify App!
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
