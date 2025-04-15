interface SectionHeadingProps {
  title: string;
  highlight?: string;
}

const SectionHeading = ({ title, highlight }: SectionHeadingProps) => {
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        {title} {highlight && <span className="text-primary">{highlight}</span>}
      </h2>
      <div className="w-full h-0.5 bg-mint-green/40 mx-auto rounded-full mt-5 mb-5"></div>
    </>
  );
};

export default SectionHeading;
