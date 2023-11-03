interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  name:
    | "plus"
    | "add"
    | "arrow"
    | "arrow-white"
    | "card"
    | "cards"
    | "hamburger"
    | "logo"
    | "right-arrow"
    | "search"
    | "stars-sm"
    | "stars-lg"
    | "like"
    | "fb"
    | "tg"
    | "heart"
    | "inst"
    | "fb-outline"
    | "tg-outline"
    | "inst-outline";
}

export default function Icon({ name, className }: IconProps) {
  return <img className={className} src={`/icons/${name}.svg`} />;
}
