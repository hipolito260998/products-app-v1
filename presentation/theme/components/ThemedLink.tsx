import { useThemeColor } from "@/hooks/useThemeColor";
import { Link, LinkProps } from "expo-router";
import React from "react";

interface Props extends LinkProps {}

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, "primary");

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    />
  );
};

export default ThemedLink;
