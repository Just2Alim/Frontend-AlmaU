import type { Skill } from "./types";

interface SkillListProps {
  skills: Skill[];
}

const getBadgeStyle = (level: Skill["level"]): React.CSSProperties => {
  const base: React.CSSProperties = {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: 999,
    fontSize: 12,
    marginLeft: 8,
    border: "1px solid #999",
  };

  if (level === "Beginner") return { ...base, background: "#00FF1A" };
  if (level === "Intermediate") return { ...base, background: "#006AFF" };
  return { ...base, background: "#FF0000" }; // Expert
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul style={{ paddingLeft: 18, marginTop: 10 }}>
      {skills.map((skill) => (
        <li key={skill.id} style={{ marginBottom: 6 }}>
          {skill.name}
          <span style={getBadgeStyle(skill.level)}>{skill.level}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;