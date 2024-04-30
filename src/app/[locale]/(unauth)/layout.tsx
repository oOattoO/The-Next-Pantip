'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useGetRoomRecommendQuery } from '@/libs/apis/home';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');
  const { data } = useGetRoomRecommendQuery({});

  return (
    <BaseTemplate
      leftNav={
        <div className="mt-2 flex gap-x-5 text-lg">
          {data?.map((item) => (
            <li key={item.name_en} className="flex flex-col items-center">
              <Image
                height={40}
                width={40}
                className="size-10"
                src={`https://ptcdn.info/mobile/icon_room/pt-forum-${item.name_en}.svg`}
                alt={`icon-${item.name_en}`}
              />
              <Link href="/" className="border-none text-base">
                {item.name}
              </Link>
            </li>
          ))}
        </div>
      }
    >
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
