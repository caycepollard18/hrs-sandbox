// todo: change this into spans for optimization
// todo: add "color" prop like in Arrow.js if needed (?)

const Hamburger = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0H18V1H0V0Z" fill="white"/>
      <path d="M1 4H17V5H1V4Z" fill="white"/>
      <path d="M0 8H18V9H0V8Z" fill="white"/>
    </svg>
  )
}

export default Hamburger