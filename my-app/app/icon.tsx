import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  const imgBuffer = readFileSync(join(process.cwd(), 'public/pfp.jpg'))
  const base64 = imgBuffer.toString('base64')
  const dataUrl = `data:image/jpeg;base64,${base64}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 64,
          height: 64,
          display: 'flex',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dataUrl}
          alt="profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        />
      </div>
    ),
    { width: 64, height: 64 }
  )
}
