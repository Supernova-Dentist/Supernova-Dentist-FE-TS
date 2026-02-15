'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useMemo } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

const SITE_URL = 'https://www.supernovadental.co.uk';

const formatName = (segment: string) =>
  segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathNames = pathname.split('/').filter(Boolean);

  const breadcrumbSchema = useMemo(() => {
    const items = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...pathNames.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: formatName(segment),
        item: `${SITE_URL}/${pathNames.slice(0, index + 1).join('/')}`,
      })),
    ];

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    };
  }, [pathNames]);

  return (
    <>
      {/* Structured Data for Google */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <motion.nav
        aria-label='Breadcrumb'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href='/'>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {pathNames.length > 0 && <BreadcrumbSeparator />}

            {pathNames.map((segment, index) => {
              const href = `/${pathNames.slice(0, index + 1).join('/')}`;
              const linkName = formatName(segment);
              const isLast = index === pathNames.length - 1;

              return (
                <Fragment key={href}>
                  <BreadcrumbItem>
                    {!isLast ? (
                      <BreadcrumbLink asChild>
                        <Link href={href}>{linkName}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{linkName}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>

                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </motion.nav>
    </>
  );
};

export default BreadCrumb;
