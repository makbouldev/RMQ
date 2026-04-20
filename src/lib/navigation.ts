const basePath = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function getAppPath(path: string) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${normalizedPath}` || normalizedPath;
}

export function stripBasePath(pathname: string) {
  if (!basePath || basePath === '/') {
    return pathname || '/';
  }

  return pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname || '/';
}

export function navigateTo(path: string) {
  const targetPath = getAppPath(path);
  window.history.pushState({}, '', targetPath);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
