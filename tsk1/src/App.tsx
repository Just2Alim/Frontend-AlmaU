import "./App.css";
import UserCard from "./UserCard";
import SkillList  from "./SkillList";

import type { Skill, User } from "./types";

function App() {
    const user: User = {
        name: "Alim",
        email: "2019_alim@mail.ru",
        age: 19,
    };
    
    const skills: Skill[] = [
        { id: 1, name: "JavaScript", level: "Expert" },
        { id: 2, name: "TypeScript", level: "Intermediate" },
        { id: 3, name: "React", level: "Beginner" },
    ];

    return (
    <div style={{ maxWidth: 520, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1 style={{ marginBottom: 16 }}>User Profile</h1>

      <UserCard user={user} isActive={true}>
        <div style={{ marginTop: 8 }}>
          <h3 style={{ margin: "10px 0 6px" }}>Bio</h3>
          <p style={{ margin: 0 }}>
            Люблю учиться и прокачивать фронтенд. Сейчас делаю лабораторку по TypeScript.
          </p>

          <h3 style={{ margin: "14px 0 6px" }}>Skills</h3>
          <SkillList skills={skills} />
        </div>
      </UserCard>

      <div style={{ marginTop: 20 }}>
        <h2>Inactive Preview</h2>
        <UserCard user={user} isActive={false}>
          <p style={{ marginTop: 8 }}>Этот блок должен быть полупрозрачным (opacity).</p>
        </UserCard>
      </div>
    </div>
  );
}

export default App;
