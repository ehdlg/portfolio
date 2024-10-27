import { projects as cvProjects, work } from "@data/cv_es.json";
import nav from "@i18n/locales/es/nav.json";
import layout from "@i18n/locales/es/layout.json";
import hero from "@i18n/locales/es/hero.json";
import jsonProjects from "@i18n/locales/es/projects.json";
import contact from "@i18n/locales/es/contact.json";
import jsonExperience from "@i18n/locales/es/experience.json";

const projects = { ...jsonProjects, "projects.projects": cvProjects };
const experience = { ...jsonExperience, "experience.work": work };

export default {
  ...layout,
  ...nav,
  ...hero,
  ...projects,
  ...contact,
  ...experience,
} as const;
