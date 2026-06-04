export class Router {
  routes = {};
  defineRoute(method, route, handler) {
    this.routes[method] ??= {};
    this.routes[method][route] = handler;
  }
  find(method, route) {
    return this.routes[method]?.[route] ?? null;
  }
}
