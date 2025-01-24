interface Props {
  name: string;
  description: string;
  url: string;
  date: string;
}

export default function Project({ name, description, url, date }: Props) {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg tracking-wide">{name}</h1>
        <span className="text-gray-400 text-xs">{date}</span>
      </div>
      <p className="text-sm">{description}</p>
      {url !== null && (
        <p className="text-xs font-medium text-indigo-600">
          <a href={url}>{url}</a>
        </p>
      )}
    </>
  );
}
