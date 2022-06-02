import './Header.css'
const Header = (props) => {
	let alignment = 'Center'
	if(props.left) alignment = 'Left'
	if(props.right) alignment = 'Right'

	return(
		<h1 className={`Container ${alignment}`}>{props.title}</h1>
	)
}

export default Header;