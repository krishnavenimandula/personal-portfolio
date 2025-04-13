import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
  delay?: number;
}

const SkillCard = ({ name, icon: Icon, color, delay = 0 }: SkillCardProps) => {
  return (
    <div className="skill-icon bg-card rounded-lg p-6 flex flex-col items-center justify-center text-center border cursor-pointer shadow-sm hover:shadow-md transition-all border-mint-green/30 hover:border-mint-green/80">
      <div className="w-16 h-16 flex items-center justify-center mb-4 relative">
        <span className="absolute inset-0 bg-primary/10 rounded-full"></span>
        <span className="absolute inset-1 bg-background rounded-full"></span>
        <Icon
          size={32}
          className="text-primary relative z-10"
          style={{ color }}
        />
      </div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

export default SkillCard;
