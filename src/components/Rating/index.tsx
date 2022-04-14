import { Box, Icon } from "@chakra-ui/react";
import { useMemo } from "react";
import { IoMdStar, IoMdStarOutline, IoMdStarHalf } from "react-icons/io";

interface RatingProps {
  score: number;
}

export function Rating({ score }: RatingProps) {
  const starsArray = useMemo(() => {
    const fullStars = Math.floor(score);
    const halfStar = score / fullStars > 1 ? true : false;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const temp: string[] = [];

    for (let i = 1; i <= fullStars; i++) temp.push("full");
    if (halfStar) temp.push("half");
    for (let i = 1; i <= emptyStars; i++) temp.push("empty");

    return temp;
  }, [score]);

  return (
    <Box>
      {starsArray &&
        starsArray.map((starStyle, i) => (
          <Icon
            key={`${starStyle}-${i}`}
            as={
              starStyle === "full"
                ? IoMdStar
                : starStyle === "half"
                ? IoMdStarHalf
                : IoMdStarOutline
            }
            color="#F9D71C"
            fontSize="1.5rem"
          />
        ))}
    </Box>
  );
}
