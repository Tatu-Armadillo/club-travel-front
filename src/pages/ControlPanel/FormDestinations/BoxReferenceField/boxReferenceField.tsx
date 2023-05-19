interface BoxReferenceFieldProps {
    childrens: JSX.Element[];
    callbackReset: () => void;
    callAdd: () => void;
}
export const BoxReferenceField = ({
    childrens,
    callAdd,
    callbackReset,
}: BoxReferenceFieldProps) => {
    return (
        <div className='flex flex-col items-center gap-2 flex-wrap'>
            {childrens}
            <button
                onClick={callbackReset}
                type='button'
                className='w-1/4 rounded-md capitalize bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-black'
            >
                Visualizar Referências
            </button>
            <button
                onClick={callAdd}
                type='button'
                className=' w-1/4  rounded-md capitalize bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
                Adicionar Referências
            </button>
        </div>
    );
};
