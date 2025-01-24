interface Props {
    bio: string;
    name: string;
}

function Head({bio, name}: Props) {
  return (
    <div className="items-center flex gap-x-2">
      <img
        className="rounded-full aspect-square w-32"
        src="https://i0.wp.com/hazaveh.net/wp-content/uploads/cropped-f6528d59-9176-4978-83a1-d637b6c36d57.jpg?w=190&ssl=1"
        alt=""
      />
      <div className="flex-grow space-y-3">
        <div className="flex justify-between items-center print:flex-col print:-justify-between">
          <h1 className="font-semibold text-2xl">{name}</h1>
          <h1 className="font-semibold text-lg italic">
            Engineering Team Lead / Senior Software Engineer
          </h1>
        </div>
        <p className="text-sm">{bio}</p>
      </div>
    </div>
  );
}

export default Head;
