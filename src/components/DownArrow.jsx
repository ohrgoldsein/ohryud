// src/components/DownArrow.jsx
const DownArrow = ({ nextSectionId }) => (
  <div
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 opacity-70 animate-bounce cursor-pointer"
    onClick={() => {
      if (nextSectionId) {
        document.getElementById(nextSectionId)?.scrollIntoView({ behavior: 'smooth' });
      }
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
);

export default DownArrow;

