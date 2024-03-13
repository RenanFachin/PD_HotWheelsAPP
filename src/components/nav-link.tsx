import { Link, LinkProps, useLocation } from 'react-router-dom'

type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-active={pathname === props.to}
      className="relative flex items-center gap-1.5 text-sm font-medium text-primary-500 data-[active=true]:text-primary-900 hover:text-primary-700"
      {...props}
    />
  )
}
