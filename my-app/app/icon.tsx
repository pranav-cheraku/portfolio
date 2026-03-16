import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  const imgBuffer = readFileSync(join(process.cwd(), 'public/transparent_memoji.png'))
  const base64 = imgBuffer.toString('base64')
  const dataUrl = `data:image/png;base64,${base64}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #b8a0d2, #85cdca)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dataUrl}
          alt="memoji"
          style={{ width: '90%', height: '90%', objectFit: 'contain' }}
        />
      </div>
    ),
    { width: 64, height: 64 }
  )
}
