server.all('*', async (req, res) => {
  try {
    console.log('req.url', req.url);
    const redirectUrl = req.url.endsWith('/') ? null : `${req.url}/`;

    console.log('redirectUrl', redirectUrl);
    if (redirectUrl) {
      res.redirect(308, redirectUrl);
      return;
    }

    req.url = req.url.endsWith('/') ? req.url.slice(0, -1) : req.url;
    await handle(req, res);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
