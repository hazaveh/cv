interface Props {
  institution: string;
  certificate: string;
  date: string;
}

export default function Education({ institution, certificate, date }: Props) {
  return (
    <div className="break-inside-avoid">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg tracking-wide">{institution}</h2>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
      <p className="text-sm">{certificate}</p>
    </div>
  );
}
