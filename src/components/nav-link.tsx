import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={pathname === props.to}
      className="text-primaryapp-500 data-[active=true]:text-primaryapp-900 hover:text-primaryapp-700 relative flex items-center gap-1.5 text-sm font-medium"
      {...props}
    />
  )
}
