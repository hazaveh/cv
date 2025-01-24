interface Props {
  bio: string;
  name: string;
  title: string;
  image: string;
}

function Head({ bio, name, image, title }: Props) {
  return (
    <div className="items-center justify-center flex flex-col gap-x-2 animate__animated animate__zoomInDown">
      <img className="rounded-full aspect-square w-24" src={image} alt="" />
      <h2 className="font-semibold text-xl">{name}</h2>
      <h2 className="font-semibold text-sm text-cyan-600">{title}</h2>
      <p className="text-sm text-center">{bio}</p>
    </div>
  );
}

export default Head;
