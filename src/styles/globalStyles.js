const generateStyle = key => value => ({ [key]: value })
const styles = {
  height: generateStyle('height'),
  width: generateStyle('width'),
  margin: generateStyle('margin'),
  marginTop: generateStyle('marginTop'),
  marginBottom: generateStyle('marginBottom'),
  marginLeft: generateStyle('marginLeft'),
  marginRight: generateStyle('marginRight'),
  padding: generateStyle('padding'),
  paddingTop: generateStyle('paddingTop'),
  paddingBottom: generateStyle('paddingBottom'),
  paddingLeft: generateStyle('paddingLeft'),
  paddingRight: generateStyle('paddingRight'),
  alignItems: generateStyle('alignItems'),
  justifyContent: generateStyle('justifyContent'),
  textAlign: generateStyle('textAlign'),
  color: generateStyle('color'),
  fontSize: generateStyle('fontSize'),
  fontFamily: generateStyle('fontFamily'),
  backgroundColor: generateStyle('backgroundColor'),
}

const globalStyles = {
  ...styles,
  flex: { flex: 1 },
  flexRow: { flexDirection: 'row' },
  flexColumn: { flexDirection: 'column' },
  size: value => ({
    width: value, 
    height: value
  }),
  circle: value => ({
    width: value, 
    height: value,
    borderRadius: value / 2,
  })
}

export default globalStyles