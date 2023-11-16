import "./Work.css";
import { Icon } from "@iconify/react";

const CompanyTitle = () => {
  return (
    <div className="companyTitle">
      <Icon icon="simple-icons:applearcade" className="element" />
      PK INFORMATION SYSTEMS
      <div className="workDescription">
        <p>
          • Developed and managed various web applications, leveraging a diverse
          technology stack that included JavaScript (Node.js and Express.js),
          PHP, HTML/CSS, and Python
        </p>
        <p>
          • Designed and maintained relational database management systems up to
          five databases per client and used a structured, tabular format for
          storing and organizing data to continue building complex databases or
          establish new ones
        </p>
        <p>
          • Applying Agile methodology while coalescing in dynamic teamwork in a
          group of three to deliver custom software to clients in a timely
          fashion
        </p>
        <p>
          • Facilitated the operation of servers in the Linux terminal shell,
          efficiently navigating file systems, managing processes, and executing
          commands to oversee and optimize server performance for two different
          clients
        </p>
        <p>
          • Collaborated closely with three main clients assigned to my specific
          development team, tailoring solutions to their unique requirements,
          such as improving a front-end advanced search to enhance its usability
          and better suit the user’s needs, and delivering highly efficient and
          optimized software solutions.
        </p>
      </div>
    </div>
  );
};

export default CompanyTitle;
