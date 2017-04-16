import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Pages from './pages/containers/Page.jsx'
import Layout from './pages/components/Layout.jsx';

function requestHandler(req, res) {
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Pages/>
    </StaticRouter>
  );
  res.setHeader('Content-Type', 'text/html');
  res.write(
    renderToStaticMarkup(
      <Layout
        title="Meme Aplication"
        content={html}
      />
    )
  );
  res.end();
}

const server = http.createServer(requestHandler);

server.listen(3000)
