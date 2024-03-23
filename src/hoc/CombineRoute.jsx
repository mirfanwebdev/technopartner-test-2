import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

export default function CombineRoute(routesList) {
  const protectedRoutes = routesList
    .filter((route) => route.isProtected)
    .map((route) => {
      const obj = {};
      obj.path = route.path;
      obj.element = <ProtectedRoute>{route.element}</ProtectedRoute>;
      obj.children = route?.children;
      return obj;
    });

  const nonProtectedRoutes = routesList
    .filter((route) => !route.isProtected)
    .map((route) => {
      const obj = {};
      obj.path = route.path;
      obj.element = <AuthRoute>{route.element}</AuthRoute>;
      return obj;
    });

  let routes = [...protectedRoutes, ...nonProtectedRoutes];
  return routes;
}
