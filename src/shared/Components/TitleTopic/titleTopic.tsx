interface TitleTopicProps {
    title: string;
    variableclasses?: string;
}

export const TitleTopic = ({ title, variableclasses }: TitleTopicProps) => {
    return (
        <span
            className={`${variableclasses} mb-5 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-500 relative inline-block`}
        >
            <span className='relative capitalize text-white text-4xl '>
                {title}
            </span>
        </span>
    );
};
