type TextInputProps = {
  label?: string;
  errormessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({
  label,
  errormessage,
  ...props
}: TextInputProps) => (
  <div>
    {label && <label className="text-sm font-semibold">{label}</label>}
    <input {...props} className="border p-2" />
    {errormessage && <p className="text-red-500">{errormessage}</p>}
  </div>
);
