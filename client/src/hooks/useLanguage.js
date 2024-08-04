import useLanguageStore from '../store/language-store';

const useLanguage = () => {
    const currentLanguage = useLanguageStore(state => state.currentLanguage);
    return currentLanguage;
};

export default useLanguage;
