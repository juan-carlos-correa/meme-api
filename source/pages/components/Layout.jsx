import React from 'react';

function Layout(props) {
  return (
    <html>
      <head>
        <meta charSet="urf-8"/>
        <title>{props.title}</title>
        <link
          rel="stylesheet"
          href="http://localhost:3003/styles.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Kaushan+Script"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
      </head>
      <body>
        <div
          id="render-target"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      <script src="http://localhost:3003/app.js"/>
      </body>
    </html>
  )
}

export default Layout
