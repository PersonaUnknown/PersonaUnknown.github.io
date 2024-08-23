import { useState } from 'react';
const useAppearanceTheme = () => {
    const [theme, setTheme] = useState(false) // false = 'light mode', true = 'dark mode'
    return theme
}

export default useAppearanceTheme