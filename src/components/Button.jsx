const Button = (props) => {
  return (
    <button className={`bg-pink-500 text-white py-2 px-6 rounded md:ml-8 transition-all duration-300 ease-in-out hover:bg-pink-400`}>
        {props.children}
    </button>
  )
}
export default Button