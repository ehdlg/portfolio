import { projects as cvProjects } from "@data/cv.json";
import nav from "@i18n/locales/en/nav.json";
import layout from "@i18n/locales/en/layout.json";
import hero from "@i18n/locales/en/hero.json";
import jsonProjects from "@i18n/locales/en/projects.json";
import contact from "@i18n/locales/en/contact.json";

const projects = { ...jsonProjects, "projects.projects": cvProjects };

export default { ...layout, ...nav, ...hero, ...projects, ...contact } as const;
