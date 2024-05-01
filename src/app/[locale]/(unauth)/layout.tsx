'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useGetRoomRecommendQuery } from '@/libs/apis/home';
import { BaseTemplate } from '@/templates/BaseTemplate';
import type { DataItemGetRoomRecommend } from '@/types/apis/pantip';

type MenuComponentProps = {
  data: DataItemGetRoomRecommend[] | undefined;
};

const MenuComponent = (prop: MenuComponentProps) => {
  const { data } = prop;
  return (
    <nav className="overflow-scroll whitespace-nowrap">
      <div className="mt-2 flex shrink-0 gap-x-5 text-lg">
        {data?.map((item) => (
          <li
            key={item.name_en}
            className="flex min-w-20 flex-col items-center"
          >
            <Image
              height={40}
              width="100"
              className="size-10 rounded-full bg-purple-900"
              src={`https://ptcdn.info/mobile/icon_room/pt-forum-${item.name_en}.svg`}
              alt={`icon-${item.name_en}`}
            />
            <Link href="/" className="border-none text-sm">
              {item.name}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default function Layout(props: { children: React.ReactNode }) {
  const { data } = useGetRoomRecommendQuery({});

  return (
    <BaseTemplate leftNav={<MenuComponent data={data} />}>
      <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
    </BaseTemplate>
  );
}
