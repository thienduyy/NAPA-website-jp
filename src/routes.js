import Home from "pages/home";
import Services from "pages/services";
import Projects from "pages/projects";
import OurWorks from "pages/ourworks";
import DetailProjects from "pages/projects/detail";

const routes = [
  { component: Home, path: "/", exact: true },
  { component: Services, path: "/services", exact: true },
  { component: Projects, path: "/projects", exact: true },
  { component: OurWorks, path: "/ourworks", exact: true },
  { component: DetailProjects, path: "/projects/detail/:id", isDynamic: true }
];

export default routes;
