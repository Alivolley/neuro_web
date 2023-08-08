import { useTranslations } from 'next-intl';

export default function Home() {
    const t = useTranslations('Index');

    return <main className='flex gap-5'>{t('title')}</main>;
}
