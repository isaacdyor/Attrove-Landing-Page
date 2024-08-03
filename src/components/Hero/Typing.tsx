"use client";

import { TypeAnimation } from "react-type-animation";

export const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Status Updates",
        6000,
        "One-on-One Conversations",
        6000,
        "Onboarding Proccess",
        6000,
      ]}
      wrapper="span"
      speed={20}
      cursor={false}
      repeat={Infinity}
      className="text-primary"
      style={{
        fontSize: "5rem",
        display: "inline-block",
      }}
    />
  );
};
