"use client";
import React, { useState } from "react";
import { IoShareOutline } from "react-icons/io5";
import * as Dialog from "@radix-ui/react-dialog";
import { GoCopy } from "react-icons/go";
import { FaCheck, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";
import { AnimatePresence, motion } from "framer-motion";

type postType = {
  slug: string;
  title: {
    rendered: string;
  };
  categories: number[];
};

export default function Sharepost({ post }: { post: postType }) {
  const site = process.env.NEXT_PUBLIC_SITE;
  const [show, setShow] = useState(false);
  let [open, setOpen] = useState(false);
  const handleClick = (slug: string) => {
    setShow(true);
    const time = setTimeout(() => {
      setShow(false);
    }, 1300);

    setShow(true);
    navigator.clipboard.writeText(`${site}/${slug}`);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <div className="text-xl bg-gray-100 text-gray-800 p-3 rounded-full transition-all hover:bg-blue-100">
          <IoShareOutline />
        </div>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed inset-0 bg-slate-100/50" />

      <AnimatePresence>
        {open && (
          <Dialog.Content
            className="bg-white absolute top-14 right-3 border pb-4 pt-4 px-3 w-2/3 rounded-lg origin-top-right md:w-1/3"
            asChild
            forceMount
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              <ul className="list-none flex flex-col gap-[1.15rem] text-gray-800/90">
                <li
                  className="flex items-center gap-2 pb-4 border-b cursor-pointer"
                  onClick={() => handleClick(post.slug)}
                >
                  {show ? (
                    <FaCheck className="text-xl" />
                  ) : (
                    <GoCopy className="text-xl" />
                  )}{" "}
                  Copy link
                </li>
                <li>
                  <TwitterShareButton
                    url={`${site}/${post.slug}`}
                    title={post.title.rendered}
                    className="flex items-center gap-2"
                  >
                    <FaSquareXTwitter className="text-2xl" /> Share on Twitter
                  </TwitterShareButton>
                </li>
                <li>
                  <LinkedinShareButton
                    url={`${site}/${post.slug}`}
                    title={post.title.rendered}
                    className="flex items-center gap-2"
                  >
                    <FaLinkedin className="text-2xl" /> Share on Linkedin
                  </LinkedinShareButton>
                </li>
                <li>
                  <FacebookShareButton
                    url={`${site}/${post.slug}`}
                    title={post.title.rendered}
                    className="flex items-center gap-2"
                  >
                    <FaFacebookSquare className="text-2xl" /> Share on Facebook
                  </FacebookShareButton>
                </li>
              </ul>
            </motion.div>
          </Dialog.Content>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
