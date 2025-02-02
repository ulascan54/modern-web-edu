import classNames from "classnames"
import { NavLink } from "react-router-dom"

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      <NavLink to="/" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full transition-colors inline-flex items-center gap-5 bg-transparent  group-hover:bg-[#eff3f41a]",
              { "font-bold": isActive }
            )}
          >
            {isActive && (
              <svg
                viewBox="0 0 24 24"
                className="block"
                width={26.25}
                height={26.25}
              >
                <path
                  fill="#e7e9ea"
                  d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM12 16.5c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z"
                ></path>
              </svg>
            )}
            {!isActive && (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="block"
                width={26.25}
                height={26.25}
              >
                <path
                  fill="#e7e9ea"
                  d="M12 9c-2.209 0-4 1.791-4 4s1.791 4 4 4 4-1.791 4-4-1.791-4-4-4zm0 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm0-13.304L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.429l7-4.375 7 4.375V19.5z"
                ></path>
              </svg>
            )}
            <div className="pr-4 text-xl">Anasayfa</div>
          </div>
        )}
      </NavLink>
      <NavLink to="/explore" className="py-1 block group">
        {({ isActive }) => (
          <div
            className={classNames(
              "p-3 rounded-full transition-colors inline-flex items-center gap-5 bg-transparent  group-hover:bg-[#eff3f41a]",
              { "font-bold": isActive }
            )}
          >
            {isActive && (
              <svg
                viewBox="0 0 24 24"
                className="block"
                width={26.25}
                height={26.25}
              >
                <path
                  fill="#e7e9ea"
                  d="M10.25 4.25c-3.314 0-6 2.686-6 6s2.686 6 6 6c1.657 0 3.155-.67 4.243-1.757 1.087-1.088 1.757-2.586 1.757-4.243 0-3.314-2.686-6-6-6zm-9 6c0-4.971 4.029-9 9-9s9 4.029 9 9c0 1.943-.617 3.744-1.664 5.215l4.475 4.474-2.122 2.122-4.474-4.475c-1.471 1.047-3.272 1.664-5.215 1.664-4.971 0-9-4.029-9-9z"
                ></path>
              </svg>
            )}
            {!isActive && (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="block"
                width={26.25}
                height={26.25}
              >
                <path
                  fill="#e7e9ea"
                  d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                ></path>
              </svg>
            )}
            <div className="pr-4 text-xl">Explore</div>
          </div>
        )}
      </NavLink>
    </nav>
  )
}
