import { atom } from 'recoil';

interface LoadingProps {
    isLoading: boolean;
}

export const Loading = atom<LoadingProps>({
    key: 'Modal',
    default: {
        isLoading: false,
    },
});
