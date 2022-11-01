function Button({ children, version, type }) {
  return (
    <button
      type={type}
      className="px-5 py-3 text-sm rounded-md bg-black text-white hover:bg-blue-600 duration-500 "
    >
      {children}
    </button>
  );
}

export default Button;
