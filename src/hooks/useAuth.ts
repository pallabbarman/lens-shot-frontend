import { useAppSelector } from '@/redux/hooks';

const useAuth = () => {
    const { accessToken } = useAppSelector((state) => state.auth);

    if (accessToken) {
        return true;
    } else {
        return false;
    }
};

export default useAuth;
