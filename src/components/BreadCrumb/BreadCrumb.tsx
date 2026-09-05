'use client';

import { motion, useReducedMotion } from 'framer-motion';
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

const BreadCrumb = ({ tone = 'light' }: { tone?: 'light' | 'dark' }) => {
  const pathname = usePathname();
  const pathNames = pathname.split('/').filter(Boolean);
  const reduceMotion = useReducedMotion();
  const isDark = tone === 'dark';

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

      <motion.div
        initial={reduceMotion === true ? false : { opacity: 0.92, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <Breadcrumb>
          <BreadcrumbList className={isDark ? 'text-ivory/60' : 'text-taupe'}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href='/'
                  className={
                    isDark
                      ? 'inline-flex min-h-11 items-center rounded-sm hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'
                      : 'inline-flex min-h-11 items-center rounded-sm hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'
                  }
                >
                  Home
                </Link>
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
                        <Link
                          href={href}
                          className={
                            isDark
                              ? 'inline-flex min-h-11 items-center rounded-sm hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'
                              : 'inline-flex min-h-11 items-center rounded-sm hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne'
                          }
                        >
                          {linkName}
                        </Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className={isDark ? 'text-ivory' : 'text-obsidian'}>{linkName}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>

                  {!isLast && <BreadcrumbSeparator />}
                </Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </motion.div>
    </>
  );
};

export default BreadCrumb;
