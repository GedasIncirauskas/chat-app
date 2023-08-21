interface Path {
  [key: string]: string;
}

export const ROUTING_PATHS: Path = {
  signIn: "/login",
  dashboard: "/dashboard",
  dashboardAdd: "/dashboard/add",
  dashboardRequests: "/dashboard/requests",
};
