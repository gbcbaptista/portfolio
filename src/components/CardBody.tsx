const CardBody = () => {
  const focusItems = [
    "Building end-to-end AI solutions at the intersection of software and machine learning",
    "Mastering MLOps and scalable AI architectures",
    "Creating optimized, production-grade solutions",
  ];

  return (
    <div className="text-left">
      <h2 className="mb-6 text-lg font-semibold tracking-wider text-center uppercase text-secondary ">
        🔥 Current Focus
      </h2>
      <ul className="space-y-3">
        {focusItems.map((item, index) => (
          <li key={index} className="flex">
            <span className="mr-3 text-3xl font-bold text-accent">›</span>
            <span className="mr-3 leading-8 mt-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardBody;
