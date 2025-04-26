type TextInputProps = {
  label?: string;
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, name, ...props }: TextInputProps) => (
  <div>
    {label && (
      <label htmlFor={name} className="text-sm font-semibold">
        {label}
      </label>
    )}
    <input id={name} name={name} {...props} className="border p-2" />
  </div>
);
