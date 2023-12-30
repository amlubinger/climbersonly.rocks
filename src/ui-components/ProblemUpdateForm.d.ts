/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProblemUpdateFormInputValues = {
    title?: string;
    description?: string;
    grade?: string;
    status?: string;
};
export declare type ProblemUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    grade?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProblemUpdateFormOverridesProps = {
    ProblemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProblemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProblemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    problem?: any;
    onSubmit?: (fields: ProblemUpdateFormInputValues) => ProblemUpdateFormInputValues;
    onSuccess?: (fields: ProblemUpdateFormInputValues) => void;
    onError?: (fields: ProblemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProblemUpdateFormInputValues) => ProblemUpdateFormInputValues;
    onValidate?: ProblemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProblemUpdateForm(props: ProblemUpdateFormProps): React.ReactElement;
