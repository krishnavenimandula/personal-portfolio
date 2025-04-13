interface SectionHeadingProps {
  title: string;
  highlight?: string;
}

const SectionHeading = ({ title, highlight }: SectionHeadingProps) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
    </>
  );
};

export default SectionHeading;
