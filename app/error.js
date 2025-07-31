'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // 에러 로깅
    console.error('Application error:', error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Noto Sans KR, sans-serif'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '2rem',
        maxWidth: '600px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          margin: '0',
          color: '#dc3545',
          fontWeight: 'bold'
        }}>
          ⚠️
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          margin: '1rem 0',
          color: '#333'
        }}>
          일시적인 오류가 발생했습니다
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#666',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          페이지를 새로고침하거나 잠시 후 다시 시도해주세요.
          <br />
          문제가 지속되면 홈페이지로 돌아가주세요.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={reset}
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s'
            }}
          >
            다시 시도
          </button>
          <a
            href="/"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              transition: 'background-color 0.3s'
            }}
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
    </div>
  )
} 