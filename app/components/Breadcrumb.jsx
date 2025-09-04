/**
 * Breadcrumb Navigation Component
 * Provides structured navigation and SEO benefits
 */

'use client';

import Link from 'next/link';
import { generateBreadcrumbStructuredData } from '../utils/structuredData';

export default function Breadcrumb({ 
  items = [], 
  showHome = true,
  className = "breadcrumb"
}) {
  // Add home link if not present and showHome is true
  const breadcrumbItems = showHome && items[0]?.name !== 'Home' 
    ? [{ name: 'Home', href: '/' }, ...items]
    : items;

  // Generate structured data for search engines
  const structuredData = generateBreadcrumbStructuredData(breadcrumbItems);

  return (
    <>
      
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visual Breadcrumb */}
      <nav 
        aria-label="Breadcrumb" 
        style={{
          fontSize: '14px',
          margin: '0 0 10px 20px',
          color: '#666'
        }}
      >
        <ol style={{ 
          display: 'flex', 
          listStyle: 'none', 
          padding: 0, 
          margin: 0,
          flexWrap: 'wrap',
          gap: '4px'
        }}>
          {breadcrumbItems.map((item, index) => (
            <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
              {index > 0 && (
                <span style={{ margin: '0 8px', color: '#999' }}>›</span>
              )}
              {item.href && index < breadcrumbItems.length - 1 ? (
                <Link 
                  href={item.href}
                  className="breadcrumb-link"
                  style={{ 
                    color: '#464646ff', 
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <span style={{ 
                  color: index === breadcrumbItems.length - 1 ? '#333' : '#666',
                  fontWeight: index === breadcrumbItems.length - 1 ? '500' : 'normal'
                }}>
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}