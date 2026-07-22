const CaseStudyConnector = () => (
  <>
    {/* Mobile: vertical cable */}
    <div
      aria-hidden
      className="h-6 w-0.5 bg-border md:hidden"
    />
    {/* Desktop: horizontal cable */}
    <div
      aria-hidden
      className="hidden md:block md:h-0.5 md:w-16 bg-border shrink-0 self-center"
    />
  </>
);

export default CaseStudyConnector;
