type TextInputProps = {
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = ({ label, ...props }: TextInputProps) => (
  <div>
    {label && <label className="text-sm font-semibold">{label}</label>}
    <input {...props} className="border p-2" />
  </div>
);
