import Cookies from 'js-cookie';

import { ACHIEVEMENT } from './achievement';

export const save_achievement = async (key: string) => {
    Cookies.set(key, "1");
}

export const get_achievement = async (key: string): Promise<string | undefined>  => {
    return Cookies.get(key);
}

export const get_all_achievements = async (): Promise<string[]> => {
    const cookie = Cookies.get();
    let res: string[] = [];
    for(let [key, value] of Object.entries(cookie)) {
        if (key === ACHIEVEMENT.FOX_FELLED || key === ACHIEVEMENT.GLIDER_FLIED) {
            res.push(key);
        }
    }
    return res;
}

export const all_delete_cookie = async () => {
    const cookie = Cookies.get();
    let dels = [];
    for(let [key, value] of Object.entries(cookie)) {
        dels.push(key);
    }
    for(let i=0; i<dels.length; i++) {
        Cookies.remove(dels[i]);
    }
}