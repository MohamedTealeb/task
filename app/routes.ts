import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("add-employee", "routes/add-employee.tsx"),
  route("employees", "routes/employees.tsx"),
  route("submitted-forms", "routes/submitted-forms.tsx"),
  route("form/:id", "routes/form-details.tsx"),
  route("dashboard", "routes/dashboard.tsx"),
] satisfies RouteConfig;

