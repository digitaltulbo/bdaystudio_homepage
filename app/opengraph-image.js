import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = '스튜디오생일 - 분당 야탑 셀프사진관';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #FFFEF7 0%, #F5E6D3 50%, #FFE4E1 100%)',
                    position: 'relative',
                }}
            >
                {/* Decorative circles */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-60px',
                        right: '-60px',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'rgba(232, 180, 184, 0.15)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-80px',
                        left: '-80px',
                        width: '350px',
                        height: '350px',
                        borderRadius: '50%',
                        background: 'rgba(232, 180, 184, 0.12)',
                        display: 'flex',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        left: '60px',
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'rgba(245, 230, 211, 0.5)',
                        display: 'flex',
                    }}
                />

                {/* Camera icon */}
                <div
                    style={{
                        fontSize: '72px',
                        marginBottom: '16px',
                        display: 'flex',
                    }}
                >
                    📸
                </div>

                {/* Main title */}
                <div
                    style={{
                        fontSize: '64px',
                        fontWeight: '800',
                        color: '#5D4E37',
                        letterSpacing: '-1px',
                        marginBottom: '8px',
                        display: 'flex',
                    }}
                >
                    Studio B-day
                </div>

                {/* Korean name */}
                <div
                    style={{
                        fontSize: '32px',
                        fontWeight: '600',
                        color: '#8B7355',
                        marginBottom: '24px',
                        display: 'flex',
                    }}
                >
                    스튜디오생일
                </div>

                {/* Divider line */}
                <div
                    style={{
                        width: '80px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #E8B4B8, #D4969B)',
                        borderRadius: '2px',
                        marginBottom: '24px',
                        display: 'flex',
                    }}
                />

                {/* Tagline */}
                <div
                    style={{
                        fontSize: '22px',
                        color: '#8B7355',
                        fontWeight: '500',
                        display: 'flex',
                    }}
                >
                    분당 야탑 셀프사진관 · 라온제나 도보 7분
                </div>

                {/* Bottom accent bar */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        height: '6px',
                        background: 'linear-gradient(90deg, #E8B4B8, #D4969B, #E8B4B8)',
                        display: 'flex',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    );
}
