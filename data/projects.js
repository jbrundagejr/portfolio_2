import aspi from '/src/images/aspi.png'
import bloomberg from '/src/images/bloomberg.png'
import mckinsey from '/src/images/mckinsey.png'
import pefa from '/src/images/pefa.png'
import schema from '/src/images/schema.png'
import sedus from '/src/images/sedus.png'

export const projects = [
  {
    title: "Schema Design Website",
    tools: ["Vue3", "Custom CMS"],
    image: schema,
    notes: "",
    link: "https://www.schemadesign.com",
  },
  {
    title: "McKinsey E",
    tools: ["Svelte", "d3", "Drupal"],
    image: mckinsey,
    notes: "",
    link: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-executives-guide-to-new-business-building",
  },
  {
    title: "Sedus Workscape of Tomorrow",
    tools: ["Nuxt3", "Sanity CMS"],
    image: sedus,
    notes: "",
    link: "https://www.workscapeoftomorrow.com",
  },
  {
    title: "PEFA Global Report 2022",
    tools: ["React", "Gatsby"],
    image: pefa,
    notes: "",
    link: "https://www.pefa.org/global-report-2022/en/",
  },
  {
    title: "Asia Society Blackbox of Chinese Politics",
    tools: ["Svelte", "d3", "Drupal"],
    image: aspi,
    notes: "",
    link: "https://asiasociety.org/policy-institute/decoding-chinas-20th-party-congress",
  },
  {
    title: "Bloomberg NEF 2022",
    tools: ["ThreeJS", "d3"],
    image: bloomberg,
    notes: "",
    link: "",
  },
];
