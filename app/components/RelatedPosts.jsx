/**
 * Related Posts Component
 * Displays related articles to improve internal linking and user engagement
 */

'use client';

import Link from 'next/link';
import { calculateReadingTime } from '../utils/readingTime';

export default function RelatedPosts({ 
  posts = [], 
  currentPostId,
  maxPosts = 3,
  title = "관련 글",
  className = "related-posts"
}) {
  // Filter out current post and limit results
  const relatedPosts = posts
    .filter(post => post.link !== currentPostId)
    .slice(0, maxPosts);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section 
      style={{
        margin: '0px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}
    >
      <h3 style={{
        margin: '0 0 15px 0',
        fontSize: '18px',
        fontWeight: '600',
        color: '#333'
      }}>
        {title}
      </h3>
      
      <div style={{
        display: 'grid',
        gap: '15px',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'start'
      }}>
        {relatedPosts.map((post, index) => {
          const readingTime = calculateReadingTime(post.content);
          
          return (
            <article 
              key={post.link || index}
              style={{
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '6px',
                border: '1px solid #e9ecef',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Link 
                href={post.href || `/${post.section}/${post.category}/${post.link}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <h4 style={{
                  margin: '0 0 8px 0',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#333',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.data?.title || post.title}
                </h4>
                
                <p style={{
                  margin: '0 0 10px 0',
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.4',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.data?.subtitle || post.description || post.content?.slice(0, 100) + '...'}
                </p>
                
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#999'
                }}>
                  <span>{post.data?.date ? new Date(post.data.date).toLocaleDateString('ko-KR') : ''}</span>
                  <span>{readingTime.text}</span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
