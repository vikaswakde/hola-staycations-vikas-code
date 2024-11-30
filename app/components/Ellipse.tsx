interface EllipseProps {
  className?: string;  // For custom positioning
  width?: string;      // Default to 224.14px
  height?: string;     // Default to 228px
  blur?: string;       // Default to 212.54px
  opacity?: number;    // Default to 0.5
}

const Ellipse = ({
  className = "",
  width = "224.14px",
  height = "228px",
  blur = "212.54px",
  opacity = 0.5
}: EllipseProps) => {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width,
        height,
        background: `rgba(148, 107, 107, ${opacity})`,
        backdropFilter: `blur(${blur})`,
        WebkitBackdropFilter: `blur(${blur})`, // For Safari support
        borderRadius: '50%',
      }}
    />
  );
};

export default Ellipse; 