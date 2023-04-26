export const providerInput = () => {
    const func = {
        validateInputs: (values: Array<string>): boolean => {
            const filteredArray = values.filter((valueInput) => {
                if (valueInput === '') return true;
            });
            if (filteredArray.length === 0) {
                return true;
            }

            return false;
        },
    };
    return func;
};
