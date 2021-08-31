if (location.pathname == '/redirect') {
    const params = new URLSearchParams(location.search);
    location.href = params.get('q')
}
