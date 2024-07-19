import useLanguageStore from '../../store/language-store';

const LanguageSwitcher = ({ currentLanguage, es, en }) => {
  const handleLanguageChange = useLanguageStore(state => state.handleLanguageChange);

  return (
    <li>
      <label className="flex cursor-pointer gap-2">
        <span className="label-text">{es}</span>
        <input
          type="checkbox"
          checked={currentLanguage === "en"}
          onChange={handleLanguageChange}
          className="toggle"
        />
        <span className="label-text">{en}</span>
      </label>
    </li>
  );
};

export default LanguageSwitcher;
