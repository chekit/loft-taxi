import { AppPages } from './app-pages.enum';

export interface NavigationBaseProps {
    navigate: (nextPage: AppPages) => void;
    currentPage: AppPages;
}