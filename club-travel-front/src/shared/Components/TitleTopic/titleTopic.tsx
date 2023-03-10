import { ReactNode } from 'react';

interface TitleTopicProps {
    title: string;
    icon?: ReactNode;
}

export const TitleTopic = ({ title, icon }: TitleTopicProps) => {
    return (
        <span className='mb-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block'>
            <span className='relative text-white text-3xl'>{title}</span>
            <span>{icon}</span>
        </span>
    );
};
