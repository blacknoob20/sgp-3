import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }

    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return {
        ...values,
        formValues: values,
        handleInputChange,
        reset
    };

}