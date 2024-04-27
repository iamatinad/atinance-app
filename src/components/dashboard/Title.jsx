const Title = ({ title, className }) => {
  return (
    <p className={`text-2xl 2xl:text-3xl font-semibold text-gray-600 dark:text-gray-500 ${className}`}>
      {title}
    </p>
  );
};

export default Title;
