import { useMemo } from 'react';
import Navigation from '../locales/routes';
import useLanguage from './useLanguage';

const useNavigation = () => {
    const language = useLanguage();

    const navigation = useMemo(() => new Navigation(language), [language]);

    return navigation;
};

export default useNavigation;
