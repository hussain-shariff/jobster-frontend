import { useMediaQuery } from 'react-responsive';

export const isMobileScreen = () => useMediaQuery({ maxWidth: 767 });