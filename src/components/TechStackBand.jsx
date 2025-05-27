import React from "react";
import "../TechStackBand.css";

import reactLogo from "../assets/react.svg";
import jsLogo from "../assets/javascript.svg";
import htmlLogo from "../assets/html5.svg";
import cssLogo from "../assets/css.svg";
import nodeLogo from "../assets/nodedotjs.svg";
import tsLogo from "../assets/typescript.svg";
import tailwindLogo from "../assets/tailwindcss.svg";
import gitLogo from "../assets/git.svg";
import bootstrapLogo from "../assets/bootstrap.svg";
import mysqlLogo from "../assets/mysql.svg";
import firebaseLogo from "../assets/firebase.svg";
import mantineLogo from "../assets/mantine.svg";
import muiLogo from "../assets/mui.svg";
import daisyuiLogo from "../assets/daisyui.svg";
import fluentuiLogo from "../assets/microsoft.svg";
import radixuiLogo from "../assets/radixui.svg";
import shadcnLogo from "../assets/shadcnui.svg";

const techs = [
  { name: "React", img: reactLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "HTML5", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "Node.JS", img: nodeLogo },
  { name: "TypeScript", img: tsLogo },
  { name: "TailwindCSS", img: tailwindLogo },
  { name: "Git", img: gitLogo },
  { name: "Bootstrap", img: bootstrapLogo },
  { name: "MySQL", img: mysqlLogo },
  { name: "Firebase", img: firebaseLogo },
  { name: "Mantine", img: mantineLogo },
  { name: "Material UI", img: muiLogo },
  { name: "DaisyUI", img: daisyuiLogo },
  { name: "FluentUI", img: fluentuiLogo },
  { name: "RadixUI", img: radixuiLogo },
  { name: "ShadCN", img: shadcnLogo },
];

export default function TechStackBand() {
  const band = [...techs, ...techs];
  return (
    <div className="tech-band-outer">
      <div className="tech-band-inner">
        {band.map((tech, i) => (
          <div
            key={i}
            className="tech-item"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={tech.img}
              alt={tech.name}
              title={tech.name}
              className="tech-logo"
            />
            <span
              className="tech-label"
              style={{ fontSize: 12, marginTop: 4, color: "#444" }}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
