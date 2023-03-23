export const providerInput = () => {
    const func = {
        validateInputs: (values: Array<string>): boolean => {
            console.log(values);

            const filteredArray = values.filter((input) => {
                if (input != '') return input;
            });
            if (filteredArray.length === 0) {
                console.log('deu bom');
                return true;
            }

            console.log('tem boxes sem preencher');

            return false;
        },
    };
    return func;
};
