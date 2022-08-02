import React from "react";
import Image from "next/image";

import { TeamMember } from "../../types";
import styles from "./Team.module.scss";

interface TeamProps {
  team: TeamMember[];
}

function Team({ team }: TeamProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>The Team</h2>
      <ul className={styles.members}>
        {team.map((teamMember) => (
          <li key={teamMember.name} className={styles.member}>
            <div className={styles["photo-wrapper"]}>
              <Image
                layout="fill"
                src={teamMember.photo}
                alt={teamMember.name}
              />
            </div>
            <div>
              <h4 className={styles.name}>{teamMember.name}</h4>
              <h5 className={styles.position}>{teamMember.position}</h5>
              <p className={styles.description}>{teamMember.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Team;
