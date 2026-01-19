import React, { Fragment } from "react";
import Link from "next/link";

import { SocialMediaData } from "@/constants/SocialMediaData";

const SocialMedia = () => {
  return (
    <Fragment>
      <div className="absolute left-14 bottom-10 flex flex-col gap-4 z-10">
        {SocialMediaData.map((social, key) => (
          <Link className="w-fit" href={social.link} key={key}>
            <div
              className={"p-2 rounded-full text-xl text-white"}
              style={{ background: social.color }}
            >
              {social.icon}
            </div>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default SocialMedia;
