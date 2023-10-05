import {
  iconAws,
  iconCss,
  iconDocker,
  iconDynamo,
  iconGit,
  iconHtml,
  iconJavascript,
  iconJest,
  iconLambda,
  iconMongo,
  iconNext,
  iconNode,
  iconPostegre,
  iconReact,
  iconServerless,
  iconTailwindCss,
  iconTerraform,
  iconTypescript,
} from "@/components/Icons";

export const data = [
  {
    title: "front end",
    stacks: [
      {
        name: "React JS",
        icon: iconReact,
      },
      {
        name: "Typescript",
        icon: iconTypescript,
      },
      {
        name: "Next JS",
        icon: iconNext,
      },
      {
        name: "TailwindCSS",
        icon: iconTailwindCss,
      },
      {
        name: "HTML 5",
        icon: iconHtml,
      },
      {
        name: "CSS 3",
        icon: iconCss,
      },
      {
        name: "JavaScript",
        icon: iconJavascript,
      },
    ],
  },
  {
    title: "back end",
    stacks: [
      {
        name: "Node JS",
        icon: iconNode,
      },
      {
        name: "Typescript",
        icon: iconTypescript,
      },
      {
        name: "Serverless",
        icon: iconServerless,
      },
      {
        name: "Postegre",
        icon: iconPostegre,
      },
      {
        name: "Daynamo DB",
        icon: iconDynamo,
      },
      {
        name: "Mongo DB",
        icon: iconMongo,
      },
    ],
  },
  {
    title: "devops",
    stacks: [
      {
        name: "AWS",
        icon: iconAws,
      },
      {
        name: "GIT",
        icon: iconGit,
      },
      {
        name: "Lambda",
        icon: iconLambda,
      },
      {
        name: "Docker",
        icon: iconDocker,
      },
      {
        name: "Jest",
        icon: iconJest,
      },
      {
        name: "Terraform",
        icon: iconTerraform,
      },
    ],
  },
];
