export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-AO">
  <head>
    <meta charset="utf-8" />
    <title>Não foi possível carregar esta página | Manda Express</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.6 system-ui, -apple-system, sans-serif; background: #F5F2EC; color: #202020; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; background: #fff; border: 1px solid #EAEAEA; border-radius: 0.75rem; }
      .brand { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #777; }
      h1 { font-size: 1.25rem; margin: 1.5rem 0 0.5rem; }
      p { color: #777; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.65rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #202020; color: #fff; }
      .secondary { background: #fff; color: #202020; border-color: #EAEAEA; }
      a:focus-visible, button:focus-visible { outline: 2px solid #202020; outline-offset: 3px; }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="brand">Manda Express</div>
      <h1>Não foi possível carregar esta página</h1>
      <p>Ocorreu um problema inesperado. Tenta atualizar a página ou volta ao início.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Tentar novamente</button>
        <a class="secondary" href="/">Voltar ao início</a>
      </div>
    </main>
  </body>
</html>`;
}
