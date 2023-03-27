interface TitleTopicProps {
    title: string;
}

export const TitleTopic = ({ title }: TitleTopicProps) => {
    return (
        <span className='mb-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block'>
            <span className='relative capitalize text-white text-3xl '>
                {title}
            </span>
        </span>
    );
};
