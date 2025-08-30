"use client";
import { useEffect, useState } from "react";

export default function Typewriter({
  words = [],
  typingSpeed = 80,
  deleteSpeed = 50,
  delayBetween = 1200,
}) {
  const [index, setIndex] = useState(0); // which word
  const [subIndex, setSubIndex] = useState(0); // how many chars
  const [deleting, setDeleting] = useState(false);

  // typing/deleting effect
  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    // pause at full word
    if (!deleting && subIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), delayBetween);
      return () => clearTimeout(timeout);
    }

    // when done deleting, move to next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((s) => s + (deleting ? -1 : 1));
      },
      deleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    subIndex,
    deleting,
    index,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetween,
  ]);

  const text = words.length
    ? words[index % words.length].slice(0, subIndex)
    : "";

  return <span className="type-caret">{text}</span>;
}
