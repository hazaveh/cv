interface Props {
  name: string;
  description: string;
  url: string | null;
  date: string;
}

export default function Project({ name, description, url, date }: Props) {
  return (
    <div className="break-inside-avoid">
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg tracking-wide">{name}</h2>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
      <p className="text-sm">{description}</p>
      {url !== null && (
        <p className="text-xs font-medium text-cyan-700">
          <a href={url}>{url}</a>
        </p>
      )}
    </div>
  );
}
