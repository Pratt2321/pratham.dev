import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            width: '16px',
            height: '16px',
            background: '#60a5fa',
            borderRadius: '3px',
            transform: 'rotate(45deg)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
} 