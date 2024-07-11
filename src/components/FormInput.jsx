function FormInput({ label, name, placeholder, type }) {
  return (
    <div>
      <label
        htmlFor={label}
        className="relative block rounded-[25px] border border-gray-200 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-transparent"
      >
        <input
          type={type}
          name={name}
          id={label}
          className="peer border-none h-12 bg-transparent px-7 w-full text-xl placeholder-transparent focus:border-[#2FA66A] focus:outline-none focus:ring-0"
          placeholder={placeholder}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 rounded-[25px] bg-[rgba(255,255,255,1)]  p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {label}
        </span>
      </label>
    </div>
  );
}

export default FormInput;
