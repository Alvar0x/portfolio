import { useEffect } from 'react';
export function useMainData() {
    const myBirthday = new Date(2000, 0, 2, 21, 35);
    const today = new Date();
    const difference = Math.abs(Number(today) - Number(myBirthday));
    const myAge = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
    const d = myBirthday.getDate();
    const m = myBirthday.toLocaleString('default', { month: 'long' });
    const y = myBirthday.getFullYear();
    const h = myBirthday.getHours();
    const mn = myBirthday.getMinutes();
    const myBirthdayString = `${d} de ${m} del ${y} a las ${h}:${mn}`;

    useEffect(() => {
        const cards = document.querySelectorAll('.main-data-card>article.hidden');
        cards.forEach(card => {
            setTimeout(() => {
                card.classList.remove('hidden');
            }, 300);
        });
    }, []);

    return { myBirthdayString, myAge };
}