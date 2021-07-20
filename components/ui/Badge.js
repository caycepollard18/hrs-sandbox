import { Badge as ThemeBadge } from 'theme-ui'
import PropTypes from 'prop-types'

const propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
}

const defaultProps = {
  color: null,
  children: null,
}

const Badge = ({ color, children, ...props }) => (
  <ThemeBadge {...props}>
    {children}
  </ThemeBadge>
)

export default Badge