import {
  DiReact,
  DiGit,
  DiNodejsSmall,
  DiMongodb,
  DiMsqlServer,
  DiVisualstudio,
  DiDocker
} from "react-icons/di";
import { GiShipWheel } from "react-icons/gi";
import TypescriptIcon from "../components/icons/Typescript";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import GraphQL from "../components/icons/GraphQL";

export const skills: {
  iconElement: ({ color: string }) => React.ReactElement<SvgIconProps>;
  name: string;
  color: string;
}[] = [
  {
    name: "TypeScript",
    iconElement: ({ color }) => (
      <TypescriptIcon style={{ marginLeft: 4, color }} />
    ),
    color: "#007acc"
  },
  {
    name: "React",
    iconElement: ({ color }) => <DiReact style={{ color }} size={32} />,
    color: "rgb(94, 211, 243)"
  },
  {
    name: "NodeJS",
    iconElement: ({ color }) => <DiNodejsSmall style={{ color }} size={32} />,
    color: "rgb(136, 194, 73)"
  },
  {
    name: "GraphQL",
    iconElement: ({ color }) => (
      <GraphQL style={{ color, marginLeft: "4px" }} />
    ),
    color: "rgb(218, 0, 147)"
  },
  {
    name: "Docker",
    iconElement: ({ color }) => <DiDocker style={{ color }} size={32} />,
    color: "#2496ed"
  },
  {
    name: "Kubernetes",
    iconElement: ({ color }) => <GiShipWheel style={{ color }} size={32} />,
    color: "rgb(50, 108, 229)"
  },
  {
    name: ".NET Core",
    iconElement: ({ color }) => <DiVisualstudio style={{ color }} size={32} />,
    color: "rgb(89, 44, 140)"
  },
  {
    name: "Git workflows",
    iconElement: ({ color }) => <DiGit style={{ color }} size={32} />,
    color: "rgb(233, 78, 49)"
  },
  {
    name: "NoSQL",
    iconElement: ({ color }) => <DiMongodb style={{ color }} size={32} />,
    color: "rgb(86, 145, 52)"
  },
  {
    name: "SQL",
    iconElement: ({ color }) => <DiMsqlServer style={{ color }} size={32} />,
    color: "rgb(234, 21, 19)"
  }
];
