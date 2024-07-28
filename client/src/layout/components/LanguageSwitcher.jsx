import useLanguageStore from '../../store/language-store';

const LanguageSwitcher = ({ currentLanguage, es, en }) => {
  const handleLanguageChange = useLanguageStore(state => state.handleLanguageChange);

  return (
    <li className="md:mt-0 mt-5">
      <label className="flex cursor-pointer gap-2 hover:bg-transparent justify-center">
        <span className="">{es}</span>
        <input
          type="checkbox"
          checked={currentLanguage === "en"}
          onChange={handleLanguageChange}
          className="toggle toggle-error"
        />
        <span className="">{en}</span>
      </label>
    </li>
  );
};

export default LanguageSwitcher;
