import { Button, Divider, Image } from '@nextui-org/react';
import React from 'react';

type TextContentProps = {
  title: string;
  desc: string;
  lastOne?: boolean;
};

function TextContent({ title, desc, lastOne }: TextContentProps) {
  return (
    <>
      <div className="flex-col justify-self-start hover:rounded-md hover:bg-gray-100">
        <h5>{title}</h5>
        <p className="line-clamp-1 text-sm text-gray-400">{desc}</p>
      </div>
      {!lastOne && <Divider orientation="vertical" />}
    </>
  );
}

export default function FullSearch() {
  return (
    <div className="mx-5 hidden flex-col items-center justify-center sm:flex">
      <div className="flex justify-center">
        <Button className="bg-transparent">ตั้งกระทู้</Button>
        <Button className="bg-transparent text-gray-500">คอมมูนิตี้</Button>
      </div>
      <div className="flex max-w-3xl shrink justify-center rounded-full border-1 p-4 shadow-lg">
        <div className="flex w-full items-center justify-around gap-3">
          <TextContent
            title="ศาลาประชาคม"
            desc="กฎหมาย ปัญหาสังคม ปัญหาชีวิต"
          />
          <TextContent title="รัชดา" desc="รถยนต์ มอเตอร์ไซค์" />
          <TextContent title="สินธร" desc="หุ้น เศรษฐกิจ" />
          <TextContent title="สวนลุมพินี" desc="สุขภาพกาย สุขภาพจิต" lastOne />
        </div>
        <Image
          alt="Search icon"
          className="justify-self-end"
          width={48}
          src="/assets/icons/Search.svg"
        />
      </div>
      <Divider className="my-8" />
    </div>
  );
}
