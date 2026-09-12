const BG_VIDEO =
  'https://d2ol7oe51mr4n9.cloudfront.net/user_3Gpc1uBfShDZ8FrEtDLXM23sY6t/bb90e3d3-c1d2-4752-b02a-29b69a5b69fb.mp4';

export default function VideoBackground({ zoom = 1 }: { zoom?: number }) {
  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'center center',
          willChange: 'transform',
        }}
      >
        <video
          src={BG_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
