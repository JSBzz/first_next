import Image from "next/image";
import guestImage from "../../styles/images/guest.png";

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
};

function DefaultImage({
  className = "",
  src = "",
  alt = "guest",
  width = 50,
  height = 50,
  type = "",
}: any) {
  if (type == "fill") return <Image className={className} src={src} alt={alt} fill />;
  return <Image className={className} src={src} alt={alt} width={width} height={height} />;
}

function UserImage({ src, type }: any) {
  if (!src) {
    src = guestImage;
  }
  if (type == "small") {
    return (
      <div className="justify-center w-full flex max-h-16 max-w-16 m-auto">
        <div className="rounded-full overflow-hidden justify-center h-16 w-16 bg-gray-50">
          <CustomImage className={"h-full w-full"} src={src} height={100} width={100} />
        </div>
      </div>
    );
  }
  return (
    <div className="justify-center w-full flex max-h-48 max-w-48 m-auto">
      <div className="rounded-full overflow-hidden justify-center h-40 w-40">
        <CustomImage className={"h-full w-full"} src={src} height={100} width={100} />
      </div>
    </div>
  );
}

const CustomImage = Object.assign(DefaultImage, {
  User: UserImage,
});
export default CustomImage;
