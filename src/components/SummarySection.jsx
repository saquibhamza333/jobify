const SummarySection = ({ title, children }) => (
  <div className="mb-6 border-b pb-4">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    {children}
  </div>
);

export default SummarySection;