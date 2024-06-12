import Image from "next/image";
import guestImage from "../../styles/images/guest.png";
import Loading from "../../styles/images/loading.gif";

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
      <div className="justify-center w-full flex max-h-8 max-w-8 m-auto">
        <div className="rounded-full overflow-hidden justify-center h-8 w-8 bg-gray-50">
          <CustomImage className={"h-full w-full"} src={src} height={100} width={100} />
        </div>
      </div>
    );
  } else if (type == "text") {
    return (
      <span className="rounded-full overflow-hidden justify-center h-8 w-8 m-auto bg-gray-200">
        <CustomImage className={"h-full w-full"} src={src} height={40} width={40} />
      </span>
    );
  } else if (type == "medium") {
    return (
      <div className="justify-center w-full flex max-h-24 max-w-24 m-auto">
        <div className="rounded-full overflow-hidden justify-center h-24 w-24 bg-gray-50">
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

function LoadingImage() {
  return <CustomImage src={Loading} alt={"Loading"} />;
}
const CustomImage = Object.assign(DefaultImage, {
  User: UserImage,
  Loading: LoadingImage,
});
export default CustomImage;
