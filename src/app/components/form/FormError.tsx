type FormErrorProps = {
  errormessage?: string;
};

export const FormError = ({ errormessage }: FormErrorProps) => (
  <>{errormessage && <p className="text-red-500">{errormessage}</p>}</>
);
