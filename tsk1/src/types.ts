// Interface for user data (Ch. 6, p. 96)
export interface User {
    name: string;
    email: string;
    age: number;
}
// Union type alias for skill level (Ch. 6, p. 97)
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';
// Interface for skill data
export interface Skill {
    id: number;
    name: string;
    level: SkillLevel;
}