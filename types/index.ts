export interface Stat {
  number: string;
  label: string;
  description: string;
}

export interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}