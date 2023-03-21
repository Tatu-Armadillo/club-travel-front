export const loginIsValid = (
    name: string,
    phone: string,
    email: string
): boolean => {
    if (name === '' || phone === '' || email === '') {
        alert('Preencha todos os dados para enviar o formulário');
        return false;
    }
    return true;
};
