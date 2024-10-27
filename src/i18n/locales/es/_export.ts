import { projects as cvProjects } from "@data/cv_es.json";
import nav from "@i18n/locales/es/nav.json";
import layout from "@i18n/locales/es/layout.json";
import hero from "@i18n/locales/es/hero.json";
import jsonProjects from "@i18n/locales/es/projects.json";
import contact from "@i18n/locales/es/contact.json";

const projects = { ...jsonProjects, "projects.projects": cvProjects };

export default { ...layout, ...nav, ...hero, ...projects, ...contact } as const;
