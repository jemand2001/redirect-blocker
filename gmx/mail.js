const links = document.querySelectorAll("a[onclick]");

for (const link of links) {
  const params = new URLSearchParams(link.search);
  link.href = params.get('redirectUrl')
}
