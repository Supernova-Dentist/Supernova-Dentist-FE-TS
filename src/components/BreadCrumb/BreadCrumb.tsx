'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

const BreadCrumb = () => {
  const paths: string = usePathname();
  const pathNames: string[] = paths.split('/').filter((path) => path !== '');
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href='/'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.length > 0 && <BreadcrumbSeparator />}

        {pathNames.map((link, index) => {
          const href: string = `/${pathNames.slice(0, index + 1).join('/')}`;
          const linkName: string = link[0].toUpperCase() + link.slice(1, link.length);
          const isLastPath: boolean = pathNames.length === index + 1;
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                {!isLastPath ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{linkName}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{linkName}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {pathNames.length !== index + 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;
