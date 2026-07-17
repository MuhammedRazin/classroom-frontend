import { Subject } from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Programming",
    department: "Computer Science",
    description: "A foundational course covering programming logic, problem solving, and basic software development using Python.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "BUS205",
    name: "Principles of Marketing",
    department: "Business",
    description: "An overview of marketing strategy, consumer behavior, branding, and digital marketing fundamentals.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "CE303",
    name: "Structural Analysis",
    department: "Civil Engineering",
    description: "A course focused on analyzing forces and designing safe structural systems for buildings and infrastructure.",
    createdAt: new Date().toISOString(),
  },
];
