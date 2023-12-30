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
export declare type ProblemCreateFormInputValues = {
    title?: string;
    description?: string;
    grade?: string;
    status?: string;
};
export declare type ProblemCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    grade?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProblemCreateFormOverridesProps = {
    ProblemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    grade?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProblemCreateFormProps = React.PropsWithChildren<{
    overrides?: ProblemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ProblemCreateFormInputValues) => ProblemCreateFormInputValues;
    onSuccess?: (fields: ProblemCreateFormInputValues) => void;
    onError?: (fields: ProblemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProblemCreateFormInputValues) => ProblemCreateFormInputValues;
    onValidate?: ProblemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ProblemCreateForm(props: ProblemCreateFormProps): React.ReactElement;
